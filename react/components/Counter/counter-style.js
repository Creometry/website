import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  counterWrap: {
    position: 'relative'
  },
  text: {},
  counterItem: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
    '& svg': {
      width: 80,
      height: 80,
      fill: theme.palette.primary.main,
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(2),
      }
    },
    '& $text': {
      '& h4': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        fontWeight: 'bold',
      }
    }
  },
  dark: {
    background: theme.palette.primary.main,
    '& $counterItem': {
      color: theme.palette.common.white,
      '& svg': {
        fill: theme.palette.common.white,
      }
    }
  }
}));

export default counterStyles;
