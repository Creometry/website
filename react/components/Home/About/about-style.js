import { makeStyles } from '@material-ui/core/styles';
import imgAPI from '~/public/images/imgAPI';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 0)
    },
    '& h4': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        marginTop: theme.spacing(-3)
      }
    }
  },
  puzzle: {
    position: 'relative',
    left: 60,
    top: -40,
    '& > div': {
      transform: 'rotate(45deg)',
      overflow: 'hidden',
      position: 'absolute',
      background: '#dedede'
    },
    '& span': {
      transform: 'rotate(-45deg)',
      width: 320,
      height: 320,
      display: 'block',
      position: 'relative',
      top: -110
    }
  },
  pieceSmallTop: {
    width: 100,
    height: 100,
    borderRadius: 16,
    top: -180,
    left: 120,
    '& span': {
      left: -80,
      backgroundImage: `url(${imgAPI.agency[1]})`,
      backgroundRepeat: 'no-repeat'
    }
  },
  pieceSmallBottom: {
    width: 100,
    height: 100,
    borderRadius: 16,
    top: 70,
    left: 100,
    '& span': {
      left: 20,
      backgroundImage: `url(${imgAPI.agency[0]})`,
      backgroundRepeat: 'no-repeat'
    }
  },
  big: {},
  medium: {},
  small: {},
  deco: {
    position: 'relative',
    top: -300,
    left: -150,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '& > *': {
      transform: 'rotate(45deg)',
      position: 'absolute'
    },
    '& $big': {
      background: theme.palette.primary.main,
      width: 350,
      height: 350,
      opacity: 0.08,
      borderRadius: 80,
      top: 60,
      left: theme.spacing(15)
    },
    '& $medium': {
      background: theme.palette.secondary.main,
      width: 180,
      height: 180,
      opacity: 0.1,
      borderRadius: 40,
      top: 20,
      left: theme.spacing(10)
    },
    '& $small': {
      border: `8px solid ${theme.palette.primary.main}`,
      opacity: 0.3,
      borderRadius: 10,
      width: 60,
      height: 60,
      top: 250,
      left: 400
    }
  }
}));

export default useStyles;
