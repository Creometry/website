import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '../theme/common';
import Header from '../components/Header';
import BannerSlider from '../components/Home/BannerSlider';
import About from '~/components/Home/About';
import Services from '~/components/Home/Services';
import Expertise from '~/components/Home/Expertise';
import Testimonials from '~/components/Home/Testimonials';
import CaseStudies from '~/components/Home/CaseStudies';
import CallAction from '~/components/CallAction';
import CompanyLogo from '~/components/CompanyLogo';
import Corner from '../components/Home/Corner';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import brand from '../public/text/brand';

function Landing(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.agency.name }
          &nbsp;- Home Page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <BannerSlider />
          </section>
          <section
            id="about"
            className={classes.spaceTop}
          >
            <About />
          </section>
          <section
            id="services"
            className={isTablet ? classes.spaceTopShort : classes.spaceTop}
          >
            <Services />
          </section>
          <section
            id="our-expertise"
            className={isMobile ? classes.spaceTopShort : classes.spaceTop}
          >
            <Expertise />
          </section>
          <section
            id="testimonials"
            className={isMobile ? classes.spaceTopShort : classes.spaceTop}
          >
            <Testimonials />
          </section>
          <section id="company" className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <CompanyLogo />
          </section>
          <section id="case-studies">
            <CaseStudies />
          </section>
          <div
            id="call-to-action"
            className={clsx(classes.spaceBottom, classes.spaceTopShort)}
          >
            <CallAction />
          </div>
        </main>
        <Hidden smDown>
          <Corner />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        <Hidden mdDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'agency-landing'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
