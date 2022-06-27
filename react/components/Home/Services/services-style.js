import { makeStyles, alpha, lighten } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 0),
    position: 'relative',
    background: theme.palette.type === 'dark' ? alpha(theme.palette.primary.dark, 0.4) : lighten(theme.palette.primary.light, 0.8),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(10, 0),
    }
  },
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('sm')]: {
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
  title: {},
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
  item: {
    padding: theme.spacing(0, 1),
    maxWidth: 260,
    direction: 'ltr',
    '&:focus': {
      outline: 'none'
    }
  },
  carouselProp: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& div': {
      width: theme.direction === 'rtl' ? 500 : 300
    }
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3)
    },
    '@media (min-width: 1400px)': {
      left: theme.spacing(10)
    },
  },
  artwork: {
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
  arrow: {
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    marginTop: theme.spacing(8),
    position: 'relative',
    zIndex: 10,
    paddingLeft: theme.spacing(10),
    '& button': {
      background: theme.palette.background.paper,
      margin: theme.spacing(0.5),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
    [theme.breakpoints.down(1280)]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
      marginTop: 560
    },
  },
}));

export default useStyles;
