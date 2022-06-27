import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Carousel from 'react-slick';
import { withTranslation } from '~/i18n';
import TestimonialCard from '../../Cards/TestiCard';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import SliderArt from '../SliderArt';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: 'Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 3
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: 'CEO Software House',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: 'Senior Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
];

function Testimonials(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const classes = useStyle();
  const [fade, setFade] = useState(false);
  const text = useText();

  // Carousel Setting
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: current => {
      const edge = testiContent.length - 4;
      if (current <= edge) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  // Translation function
  const { t } = props;

  // Carousel
  const slider = useRef(null);
  useEffect(() => {
    const prop = window.innerWidth > 1400 ? 0 : 1; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(testiContent.length + prop - settings.slidesToShow);
    if (window.innerWidth > 1279) {
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Container className={classes.carouselHeader}>
        <h4 className={text.titlePrimary}>
          {t('common:agency-landing.testimonial_title')}
        </h4>
      </Container>
      <div className={classes.carousel}>
        <Carousel ref={slider} {...settings}>
          {testiContent.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <TestimonialCard
                avatar={item.avatar}
                title={item.title}
                name={item.name}
                text={item.text}
                star={item.rating}
              />
            </div>
          ))}
          {isDesktop && (
            <div className={classes.item}>
              <div className={classes.itemPropsLast} />
            </div>
          )}
        </Carousel>
      </div>
      <div className={classes.floatingArtwork}>
        <Container fixed>
          <div className={classes.artwork}>
            <SliderArt fade={fade}>
              <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-60} delay={300} duration={0.5}>
                <div>
                  <img
                    src={imgAPI.agency[19]}
                    data-2d={imgAPI.agency[18]}
                    data-3d={imgAPI.agency[19]}
                    className="img-2d3d"
                    alt="testimonial 3d"
                  />
                </div>
              </ScrollAnimation>
            </SliderArt>
          </div>
        </Container>
      </div>
    </div>
  );
}

Testimonials.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['agency-landing'])(Testimonials);
