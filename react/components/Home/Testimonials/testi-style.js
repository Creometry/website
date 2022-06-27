import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

const testiStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.8),
    position: 'relative',
    padding: theme.spacing(10, 0),
  },
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  viewAll: {
    [theme.breakpoints.up('lg')]: {
      marginRight: 160
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 24
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 32
    },
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    '& svg': {
      width: 36
    }
  },
  carouselHandle: {
    height: 380,
    position: 'relative',
    zIndex: 10
  },
  carouselWrap: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    overflow: 'hidden',
  },
  carousel: {
    position: 'relative',
    zIndex: 3,
    '& ul[class*="slick-dots"]': {
      bottom: -50,
      '& li': {
        width: 10,
        height: 10,
        transition: 'width 0.3s ease',
        background: theme.palette.secondary.light,
        borderRadius: 15,
        margin: theme.spacing(0, 0.5),
        '&[class="slick-active"]': {
          width: 35
        },
        '& button': {
          opacity: 0
        }
      }
    }
  },
  item: {
    padding: theme.spacing(2),
    '&:focus': {
      outline: 'none'
    }
  },
  title: {},
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10),
    },
    [theme.breakpoints.up(1400)]: {
      left: theme.spacing(10),
    },
    '& $title': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5),
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right',
      },
      [theme.breakpoints.up(1400)]: {
        marginRight: theme.spacing(-5)
      },
    }
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 160 : 350,
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      top: theme.spacing(-10),
      left: theme.spacing(3)
    },
    '@media (min-width: 1400px)': {
      left: theme.spacing(10)
    },
  },
  artwork: {
    display: 'flex',
    alignItems: 'flex-end',
    height: 540,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    },
    '@media (min-width: 1400px)': {
      marginRight: theme.spacing(-5)
    }
  },
}));

export default testiStyles;
