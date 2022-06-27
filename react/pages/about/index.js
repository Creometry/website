import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header';
import Counter from '../../components/Counter';
import Banner from '../../components/About/Banner';
import PhotoSlider from '../../components/About/PhotoSlider';
import TeamSlider from '../../components/About/TeamSlider';
import AboutVideo from '../../components/About/Video';
import AboutProgress from '../../components/About/Progress';
import CallAction from '../../components/CallAction';
import CompanyLogo from '../../components/CompanyLogo';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';

function About(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.agency.name }
          &nbsp; - About
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Banner>
          <img
            src={imgAPI.agencyInner[1]}
            data-2d={imgAPI.agencyInner[0]}
            data-3d={imgAPI.agencyInner[1]}
            className="img-2d3d"
            alt="services 3d"
          />
        </Banner>
        <CompanyLogo />
        <Counter />
        <div className={classes.spaceTopShort}>
          <Container>
            <Grid container justifyContent="center" spacing={6}>
              <Grid item md={6} xs={12}>
                <AboutVideo />
              </Grid>
              <Grid item md={6} sm={8} xs={12}>
                <AboutProgress />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.spaceTopShort}>
          <TeamSlider />
        </div>
        <div className={classes.spaceTopShort}>
          <PhotoSlider />
        </div>
        <div className={classes.spaceTopShort}>
          <CallAction />
        </div>
        <div className={classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

About.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default About;
