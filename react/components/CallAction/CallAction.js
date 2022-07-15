import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import link from '~/public/text/link';
import { withTranslation } from '~/i18n';
import useStyles from './action-style';

function CallAction(props) {
  // Translation Function
  const { t } = props;

  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={40} delay={300} duration={0.5}>
          <Paper className={classes.paper}>
            <Grid container alignItems="center">
              <Grid item md={9} xs={12}>
                <Typography variant="h4" gutterBottom display="block">
                  {t('common:about_ready')}
                </Typography>
                <Typography display="block" component="p">
                  Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
                </Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <Grid container alignItems="center">
                  <Button size="large" fullWidth href={link.agency.contact} className={classes.button}>
                    {t('common:btn_contact')}
                    <SendIcon className={classes.rightIcon} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(CallAction);
