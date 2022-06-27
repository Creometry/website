import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './expertise-style';
import TitleDeco from '../../Title/WithDecoration';

function Expertise(props) {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translate Function
  const { t } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container justifyContent="center" spacing={6}>
          <Grid item md={4} xs={12}>
            <div className={classes.titleDeco}>
              {isDesktop && (
                <svg
                  fill="#cccccc"
                  width={845}
                  height={1099}
                  className={classes.decoration}
                >
                  <use xlinkHref="/images/agency/wave_decoration.svg#main" />
                </svg>
              )}
              <TitleDeco text={t('common:agency-landing.expertise_title')} />
              <ScrollAnimation animateOnce animateIn="zoomInShort" offset={-50} delay={300} duration={0.3}>
                <div className={classes.illustrationWrap}>
                  <div>
                    <span className={classes.iconGreen} />
                  </div>
                  <div>
                    <span className={classes.iconViolet} />
                  </div>
                  <div>
                    <span className={classes.iconBlue} />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </Grid>
          <Grid item lg={7} md={8} xs={12}>
            <h4 className={text.subtitle}>
              {t('common:agency-landing.expertise_subtitle')}
            </h4>
            <p className={clsx(classes.desc, text.paragraph)}>
              {t('common:agency-landing.expertise_paragraph')}
            </p>
            <div className={classes.list}>
              <Grid container spacing={4}>
                <Grid item sm={6} xs={12}>
                  <div className={clsx(classes.descIcon, classes.iconPrimary)}>
                    <Icon className={classes.icon}>check_circle_outline</Icon>
                  </div>
                  <h3 className={text.subtitle}>Nulla lobortis nunc</h3>
                  <p className={text.paragraph}>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div className={clsx(classes.descIcon, classes.iconSecondary)}>
                    <Icon className={classes.icon}>gps_fixed</Icon>
                  </div>
                  <h3 className={text.subtitle}>Vestibulum faucibus</h3>
                  <p className={text.paragraph}>In id nisi id neque venenatis molestie Quisque lacinia purus ut libero facilisis.</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div className={clsx(classes.descIcon, classes.iconAccent)}>
                    <Icon className={classes.icon}>speed</Icon>
                  </div>
                  <h3 className={text.subtitle}>Suspendisse porttitor</h3>
                  <p className={text.paragraph}>Unc quis sem quis velit tincidunt congue a sit amet ante.</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div className={clsx(classes.descIcon, classes.iconAccent2)}>
                    <Icon className={classes.icon}>emoji_objects</Icon>
                  </div>
                  <h3 className={text.subtitle}>Ut sed eros</h3>
                  <p className={text.paragraph}>In hac habitasse platea dictumst. In mi nulla, fringilla vestibulum finibus et.</p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Expertise.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['agency-landing'])(Expertise);
