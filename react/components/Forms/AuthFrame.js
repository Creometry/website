import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './form-style';

function AuthFrame(props) {
  const classes = useStyles();
  const text = useText();
  // Media query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const {
    children, title,
    subtitle, type
  } = props;

  return (
    <div className={classes.pageWrap}>
      <div className={classes.authFrame}>
        <Grid container spacing={isMobile ? 0 : 2}>
          <Grid item md={6} xs={12}>
            <Box px={{ sm: 6, md: 0 }}>
              <Paper className={classes.formBox}>
                <div className={classes.formWrap}>
                  {children}
                </div>
              </Paper>
            </Box>
          </Grid>
          {isDesktop && (
            <Grid item md={6} xs={12}>
              <div className={classes.greeting}>
                <h4 className={text.title2}>
                  { title }
                </h4>
                <h6 className={text.subtitle2}>
                  { subtitle }
                </h6>
                <div className={classes.img}>
                  <div className={classes.deco}>
                    <div className={classes.big} />
                    <div className={classes.small} />
                  </div>
                  {type === 'login' ? (
                    <img
                      src={imgAPI.agencyInner[3]}
                      data-2d={imgAPI.agencyInner[2]}
                      data-3d={imgAPI.agencyInner[3]}
                      className="img-2d3d"
                      alt="login"
                    />
                  ) : (
                    <img
                      src={imgAPI.agencyInner[5]}
                      data-2d={imgAPI.agencyInner[4]}
                      data-3d={imgAPI.agencyInner[5]}
                      className="img-2d3d"
                      alt="register"
                    />
                  )}
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

AuthFrame.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  type: PropTypes.string,
};

AuthFrame.defaultProps = {
  subtitle: '',
  type: '',
};

export default AuthFrame;
