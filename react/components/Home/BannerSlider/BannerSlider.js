import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Carousel from 'react-slick';
import link from '~/public/text/link';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  const { t } = props;
  const slider = useRef(null);
  const sliderDeco = useRef(null);
  const [deco, setDeco] = useState(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptionsDeco = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    fade: true,
    cssEase: 'ease-out',
    autoplay: false
  };

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  useEffect(() => {
    setDeco(sliderDeco.current);
  }, []);

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.carousel}>
        <Carousel
          className={classes.sliderDeco}
          {...slickOptionsDeco}
          ref={sliderDeco}
        >
          <div className={clsx(classes.slide, curSlide === 0 ? classes.cur : '')}>
            <div className={classes.inner}>
              <div className={classes.decoWrap}>
                <div className={clsx(classes.deco, classes.bottom, classes.s1)}>&nbsp;</div>
                <div className={clsx(classes.deco, classes.top, classes.s1)}>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className={clsx(classes.slide, curSlide === 1 ? classes.cur : '')}>
            <div className={classes.inner}>
              <div className={classes.decoWrap}>
                <div className={clsx(classes.deco, classes.bottom, classes.s2)}>&nbsp;</div>
                <div className={clsx(classes.deco, classes.top, classes.s2)}>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className={clsx(classes.slide, curSlide === 2 ? classes.cur : '')}>
            <div className={classes.inner}>
              <div className={classes.decoWrap}>
                <div className={clsx(classes.deco, classes.bottom, classes.s3)}>&nbsp;</div>
                <div className={clsx(classes.deco, classes.top, classes.s3)}>&nbsp;</div>
              </div>
            </div>
          </div>
        </Carousel>
        <Carousel
          className={classes.slider}
          {...slickOptions}
          ref={slider}
          asNavFor={deco}
          afterChange={handleAfterChange}
        >
          <div className={classes.slide}>
            <div className={classes.inner}>
              <Container>
                <Grid container alignItems="center">
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={2}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('common:agency-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('common:agency-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button variant="outlined" size="large" color="primary" href="#" className={classes.button}>
                            {t('common:btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.agency.register} className={classes.button}>
                            {t('common:btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.agency[11]}
                        className="img-2d3d"
                        data-2d={imgAPI.agency[10]}
                        data-3d={imgAPI.agency[11]}
                        alt="banner 1 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.agency[13]}
                        className="img-2d3d"
                        data-2d={imgAPI.agency[12]}
                        data-3d={imgAPI.agency[13]}
                        alt="banner 2 3D"
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={2}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('common:agency-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('common:agency-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button variant="outlined" size="large" color="primary" href="#" className={classes.button}>
                            {t('common:btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.agency.register} className={classes.button}>
                            {t('common:btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={clsx(classes.slide, classes.centerContent)}>
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end">
                  <Grid item md={12} xs={12}>
                    <Box px={{ md: 12 }}>
                      <div className={clsx(classes.text, align.textCenter)}>
                        <h4 className={text.title}>
                          {t('common:agency-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('common:agency-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button variant="outlined" size="large" color="primary" href="#" className={classes.button}>
                            {t('common:btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.agency.register} className={classes.button}>
                            {t('common:btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={clsx(classes.img, classes.hBanner)}>
                      <img
                        src={imgAPI.agency[15]}
                        className="img-2d3d"
                        data-2d={imgAPI.agency[14]}
                        data-3d={imgAPI.agency[15]}
                        alt="banner 3 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </Carousel>
      </div>
      <Hidden smDown>
        <Container maxWidth="md">
          <nav className={classes.slideNav}>
            <ButtonBase
              className={clsx(classes.btnNav, curSlide === 0 ? classes.active : '')}
              onClick={() => gotoSlide(0)}
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={clsx(classes.btnNav, curSlide === 1 ? classes.active : '')}
              onClick={() => gotoSlide(1)}
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={clsx(classes.btnNav, curSlide === 2 ? classes.active : '')}
              onClick={() => gotoSlide(2)}
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
          </nav>
        </Container>
      </Hidden>
    </div>
  );
}

BannerSlider.propTypes = {
  t: PropTypes.func.isRequired,
};

BannerSlider.getInitialProps = async () => ({
  namespacesRequired: ['common', 'agency-landing'],
});

export default withTranslation(['common', 'agency-landing'])(BannerSlider);
