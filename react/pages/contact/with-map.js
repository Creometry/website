import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Head from 'next/head';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header';
import FormDeco from '../../components/Decoration/FormDeco';
import ContactMap from '../../components/Forms/ContactMap';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';

function WithMap(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>
          { brand.agency.name }
          &nbsp; - Contact Map
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Container className={classes.spaceBottomShort}>
            <FormDeco />
            <div className={classes.containerFront}>
              <ContactMap />
            </div>
          </Container>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

WithMap.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default WithMap;
