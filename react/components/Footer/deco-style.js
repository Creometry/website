import { makeStyles } from '@material-ui/core/styles';

const deco = {
  borderRadius: 20,
  transform: 'rotate(45deg)',
  position: 'absolute',
  opacity: 0.2
};

const useStyles = makeStyles(theme => ({
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
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
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
  leftDeco: {
    position: 'absolute',
    left: 0,
    '& $big': {
      left: 80,
      top: 200
    },
    '& $small': {
      left: 0,
      top: 130
    }
  },
  rightDeco: {
    position: 'absolute',
    right: 0,
    '& $big': {
      right: 50,
      top: 190
    },
    '& $small': {
      right: 0,
      top: 140
    }
  }
}));

export default useStyles;
