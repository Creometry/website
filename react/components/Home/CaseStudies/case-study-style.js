import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    '& nav': {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        overflow: 'auto'
      }
    }
  },
  filter: {
    borderRadius: theme.rounded.small,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(),
    padding: theme.spacing(0.5, 2),
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      '& > div': {
        textAlign: 'center'
      }
    }
  },
  active: {
    background: `${theme.palette.primary.light} !important`,
    color: theme.palette.primary.dark,
  },
  massonry: {
    '& button': {
      width: '100%'
    }
  },
}));

export default useStyles;
