import { makeStyles, alpha } from '@material-ui/core/styles';

const aboutStyle = makeStyles(theme => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      height: 500,
      paddingTop: theme.spacing(10)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(20, 0, 5)
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(15)
    }
  },
  slide: {
    position: 'relative',
  },
  img: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    },
    '& img': {
      maxWidth: '100%',
      maxHeight: 350
    }
  },
  inner: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3)
    },
    '& h5': {
      color: theme.palette.text.secondary,
    }
  },
  videoPopup: {
    maxWidth: 'none',
    '& h4': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      flex: 1,
      overflow: 'hidden',
    },
    [theme.breakpoints.up('sm')]: {
      width: 690
    },
    '& iframe': {
      width: '100%'
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4
  },
  videoRoot: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  videoWrap: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      margin: '0 auto'
    }
  },
  progressWrap: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5)
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h5': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  progressBg: {
    borderRadius: 10,
    background: theme.palette.divider,
    height: '10px !important'
  },
  bar: {
    borderRadius: 10,
  },
  accent: {
   '& $bar': {
     background: theme.palette.accent.main
   }
  },
  textIcon: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& i': {
      fontSize: 28
    },
    '& h6': {
      marginLeft: theme.spacing(1)
    }
  },
  progress: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 0, 10)
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h6': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  bgWrapper: {
    backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.primary.dark, 0.2) : alpha(theme.palette.primary.light, 0.2),
    padding: theme.spacing(4, 0, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 0, 10),
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: theme.spacing(5, 5, 0, 0),
    }
  },
  galleryRoot: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    '& ul[class*="slick-dots"]': {
      bottom: -55
    }
  },
  item: {
    direction: theme.direction === 'rtl' ? 'ltr' : 'inherit'
  },
  carousel: {
    position: 'relative',
  },
  teamRoot: {
    '& ul[class*="slick-dots"]': {
      bottom: -15,
      [theme.breakpoints.down('sm')]: {
        bottom: -55
      }
    },
    '& $item > *': {
      [theme.breakpoints.down('xs')]: {
        width: 280
      }
    },
    '& $carousel': {
      '& > *': {
        height: 160,
      }
    }
  },
  nav: {
    position: 'absolute',
    top: '50%',
    fontSize: 38,
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  prev: {
    left: -30
  },
  next: {
    right: -30
  }
}));

export default aboutStyle;
