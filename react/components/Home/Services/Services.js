import React, { useState, useEffect, useRef } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Carousel from 'react-slick';
import PrevIcon from '@material-ui/icons/ArrowBack';
import NextIcon from '@material-ui/icons/ArrowForward';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './services-style';
import SliderArt from '../SliderArt';
import Card from '../../Cards/ProductCard';

const servicesList = [
  {
    title: 'Lorem Ipsum',
    desc:
      'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
    img: imgAPI.agency[2]
  },
  {
    title: 'Etiam rhoncus',
    desc:
      'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
    img: imgAPI.agency[3]
  },
  {
    title: 'Duis fermentum',
    desc:
      'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
    img: imgAPI.agency[4]
  },
  {
    title: 'Lorem Ipsum',
    desc:
      'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
    img: imgAPI.agency[2]
  },
  {
    title: 'Etiam rhoncus',
    desc:
      'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
    img: imgAPI.agency[3]
  },
  {
    title: 'Duis fermentum',
    desc:
      'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
    img: imgAPI.agency[4]
  }
];

function Services(props) {
  const { t } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const classes = useStyles();
  const slider = useRef(null);
  const [fade, setFade] = useState(false);
  const text = useText();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: current => {
      const edge = servicesList.length - 5;
      if (current <= edge) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  useEffect(() => {
    const prop = window.innerWidth > 1400 ? 0 : 1;
    const lastSlide = Math.floor(servicesList.length + prop - settings.slidesToShow);
    if (window.innerWidth > 1200) {
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Container className={classes.carouselHeader}>
        <h4 className={text.titlePrimary}>
          {t('common:agency-landing.services_title')}
        </h4>
        <Button
          href={link.agency.product}
          color="primary"
          className={classes.viewAll}
        >
          {t('common:btn_seeall')}
          <NextIcon className={classes.icon} />
        </Button>
      </Container>
      <div className={classes.carouselHandle}>
        <div className={classes.carouselWrap}>
          <Carousel ref={slider} {...settings}>
            {servicesList.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <Card
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  rating={0}
                  type="over"
                />
              </div>
            ))}
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
          </Carousel>
        </div>
      </div>
      <div className={classes.floatingArtwork}>
        <Container fixed>
          <div className={classes.artwork}>
            <SliderArt fade={fade}>
              <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-60} delay={300} duration={0.5}>
                <div>
                  <img
                    src={imgAPI.agency[17]}
                    data-2d={imgAPI.agency[16]}
                    data-3d={imgAPI.agency[17]}
                    className="img-2d3d"
                    alt="services 3d"
                  />
                </div>
              </ScrollAnimation>
            </SliderArt>
            <nav className={classes.arrow}>
              <Fab size="small" onClick={() => slider.current.slickNext()} aria-label="prev" className={classes.margin}>
                <PrevIcon />
              </Fab>
              <Fab size="small" onClick={() => slider.current.slickPrev()} aria-label="next" className={classes.margin}>
                <NextIcon />
              </Fab>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
}

Services.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['agency-landing'])(Services);
