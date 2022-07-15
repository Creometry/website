import { makeStyles } from '@material-ui/core/styles';

const sliderStyle = makeStyles(theme => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& ul[class*="slick-dots"]': {
      bottom: -10
    }
  },
  cur: {},
  decoWrap: {
    width: '100%',
    height: '100%',
    transition: 'all 1s cubic-bezier(0, -0.01, 0, 0.96)',
    transform: 'translateX(-50px) scale(0.8)',
    opacity: 0,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      top: -120
    }
  },
  top: {},
  bottom: {},
  s1: {},
  s2: {},
  s3: {},
  deco: {
    borderRadius: 80,
    transform: 'rotate(45deg)',
    position: 'absolute',
    '&$top': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      width: 800,
      height: 800,
      '&$s1': {
        top: -400,
        right: -250,
      },
      '&$s2': {
        top: -400,
        left: -250
      },
      '&$s3': {
        top: -360,
        left: 150,
        [theme.breakpoints.down('sm')]: {
          top: -400
        },
        [theme.breakpoints.down('xs')]: {
          left: -120
        }
      }
    },
    '&$bottom': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      width: 790,
      height: 815,
      '&$s1': {
        top: -390,
        right: -240
      },
      '&$s2': {
        top: -390,
        left: -240
      },
      '&$s3': {
        top: -360,
        left: 150,
        [theme.breakpoints.down('xs')]: {
          left: -140
        }
      }
    }
  },
  centerContent: {},
  slider: {
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('sm')]: {
        zIndex: 1
      }
    }
  },
  slide: {
    position: 'relative',
    '& img': {
      margin: '80px auto 0',
      maxWidth: '100%'
    },
    '&$cur': {
      '& $decoWrap': {
        transform: 'translateX(0px) scale(1)',
        opacity: 0.3,
      }
    },
    [theme.breakpoints.up('md')]: {
      height: 500,
    },
    [theme.breakpoints.up('lg')]: {
      height: 600,
      '&$centerContent': {
        paddingTop: theme.spacing(5)
      }
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      height: 'auto',
      padding: theme.spacing(15, 0, 5),
      '& img': {
        marginTop: `${theme.spacing(5)}px !important`
      }
    },
    [theme.breakpoints.between('sm', 'sm')]: {
      '& img': {
        width: '40%',
      }
    }
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        width: '60%'
      },
      [theme.breakpoints.up('md')]: {
        width: '40%'
      }
    }
  },
  sliderDeco: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& div[class*="slick-list"]': {
      [theme.breakpoints.down('sm')]: {
        height: '100%'
      }
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    direction: 'ltr',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4)
    }
  },
  button: {},
  btnArea: {
    '& > *': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(3)
      }
    },
    '& $button': {
      width: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginBottom: theme.spacing(2)
      }
    }
  },
  slideNav: {
    display: 'flex',
  },
  active: {},
  btnNav: {
    textTransform: 'none',
    height: 'auto',
    padding: theme.spacing(1),
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:after': {
      content: '""',
      borderBottom: '6px solid #fff',
      borderRadius: 6,
      width: '0%',
      position: 'absolute',
      bottom: -12,
      left: -2,
      transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)',
      transformOrigin: 'left center',
    },
    '&:hover': {
      transition: 'all 0.3s ease-out',
      background: 'none',
      '&:after': {
        width: '50%',
        left: 10,
        borderBottomColor: theme.palette.primary.main
      }
    },
    '&$active': {
      '& strong': {
        color: theme.palette.primary.main
      },
      '&:after': {
        width: '50%',
        left: 9,
        borderBottomColor: theme.palette.primary.main
      }
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

export default sliderStyle;
