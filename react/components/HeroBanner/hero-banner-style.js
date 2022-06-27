import { makeStyles } from '@material-ui/core/styles';

const deco = {
  borderRadius: 20,
  transform: 'rotate(45deg)',
  position: 'absolute',
  opacity: 0.2
};

const heroBanner = makeStyles(theme => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
  },
  small: {
    ...deco,
    width: 140,
    height: 140,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
  big: {
    ...deco,
    width: 200,
    height: 200,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
  },
  leftDeco: {
    position: 'absolute',
    left: 0,
    top: 200,
    '& $big': {
      left: 80,
      top: 200
    },
    '& $small': {
      left: 0,
      top: 130
    }
  },
  decoWrap: {
    width: '100%',
    height: '100%'
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
    opacity: 0.3,
    '&$top': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      width: 800,
      height: 800,
      '&$s1': {
        top: -400,
        right: -250
      },
      '&$s2': {
        top: -400,
        left: -250
      },
      '&$s3': {
        top: -360,
        left: 150
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
        left: 150
      }
    }
  }
}));

export default heroBanner;
