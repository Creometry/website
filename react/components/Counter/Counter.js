import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@material-ui/core/Typography';
import FlagIcon from '@material-ui/icons/Flag';
import PeopleIcon from '@material-ui/icons/People';
import PublicIcon from '@material-ui/icons/Public';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './counter-style';
import { useText } from '~/theme/common';

function Counter(props) {
  const classes = useStyles();
  const { dark } = props;
  const [play, setPlay] = useState(false);
  const text = useText();
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };
  return (
    <div className={clsx(classes.counterWrap, dark ? classes.dark : '')}>
      <Container maxWidth="md">
        <ScrollAnimation animateOnce animateIn="fadeIn" offset={300} afterAnimatedIn={handlePlay}>
          <Grid container justifyContent="center" alignItems="center" className={classes.root} spacing={6}>
            <Grid sm={4} xs={12} item>
              <div className={classes.counterItem}>
                <FlagIcon />
                <div className={classes.text}>
                  <Typography variant="h4">
                    +&nbsp;
                    {countup(123, play)}
                  </Typography>
                  <h6 className={text.subtitle2}>
                    Lorem Ipsum
                  </h6>
                </div>
              </div>
            </Grid>
            <Grid sm={4} xs={12} item>
              <div className={classes.counterItem}>
                <PeopleIcon />
                <div className={classes.text}>
                  <Typography variant="h4">
                    +&nbsp;
                    {countup(456, play)}
                  </Typography>
                  <h6 className={text.subtitle2}>
                    Ac bibendum
                  </h6>
                </div>
              </div>
            </Grid>
            <Grid sm={4} xs={12} item>
              <div className={classes.counterItem}>
                <PublicIcon />
                <div className={classes.text}>
                  <Typography variant="h4">
                    $
                    {countup(789, play)}
                  </Typography>
                  <h6 className={text.subtitle2}>
                    Adipiscing
                  </h6>
                </div>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  dark: PropTypes.bool,
};

Counter.defaultProps = {
  dark: false,
};

export default Counter;
