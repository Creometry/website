import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  button: {
    color: theme.palette.primary.main,
    background: theme.palette.common.white,
    height: 48,
    fontSize: 18,
    [theme.breakpoints.up('sm')]: {
      height: 64,
      fontSize: 20,
    },
  },
  paper: {
    borderRadius: 24,
    color: theme.palette.common.white,
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6, 10),
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(6, 2),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: 700,
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        marginBottom: theme.spacing(2),
        padding: theme.spacing(0, 2)
      },
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      },
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none'
  }
}));

export default useStyles;
