import { makeStyles } from '@material-ui/core/styles';

const deco = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  bottom: 0,
  left: 0,
};

const type = {
  borderRadius: 40,
  transform: 'rotate(45deg)',
  position: 'absolute',
  opacity: 0.2
};

const decorationStyles = makeStyles(theme => ({
  small: {
    ...type,
    width: 280,
    height: 280,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
  },
  big: {
    ...type,
    width: 400,
    height: 400,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.light,
  },
  leftDeco: {
    position: 'absolute'
  },
  rightDeco: {
    position: 'absolute'
  },
  formDeco: {
    ...deco,
    '& $leftDeco': {
      left: -200,
      top: 400,
      '& $big': {
        left: 80,
        top: 200
      },
      '& $small': {
        left: 0,
        top: 130
      }
    },
    '& $rightDeco': {
      right: -50,
      top: -400,
      '& $big': {
        right: 50,
        top: 190
      },
      '& $small': {
        right: 0,
        top: 140
      }
    }
  },
  pageDeco: {
    ...deco,
    '& $leftDeco': {
      left: -200,
      top: -200,
      '& $big': {
        left: 80,
        top: 200
      },
      '& $small': {
        left: 0,
        top: 130
      }
    },
    '& $rightDeco': {
      right: -50,
      top: 400,
      '& $big': {
        right: 50,
        top: 190
      },
      '& $small': {
        right: 0,
        top: 140
      }
    }
  }
}));

export default decorationStyles;
