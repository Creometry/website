import { makeStyles, alpha } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardHeader: {
    padding: 0,
    textTransform: 'uppercase',
    '& span': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 16,
      color: theme.palette.primary.main
    },
  },
  bordered: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  hasBg: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '& $cardHeader span': {
      color: theme.palette.common.white,
    },
    '& $cardPricing h2': {
      color: theme.palette.common.white,
    },
  },
  priceHeader: {
    padding: theme.spacing(5, 2),
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    '& h2': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    }
  },
  cardContent: {
    padding: theme.spacing(1, 2),
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      padding: theme.spacing(1, 0),
      color: theme.palette.text.secondary
    }
  },
  primaryColor: {},
  secondaryColor: {},
  btnArea: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    padding: theme.spacing(1.5, 5),
    display: 'block',
    '& button, a': {
      margin: '0 !important'
    },
    '& p': {
      position: 'relative',
      fontSize: 14
    },
    '&$primaryColor': {
      background: theme.palette.type === 'dark' ? alpha(theme.palette.primary.dark, 0.3) : alpha(theme.palette.primary.light, 0.3)
    },
    '&$secondaryColor': {
      background: theme.palette.type === 'dark' ? alpha(theme.palette.secondary.dark, 0.3) : alpha(theme.palette.secondary.light, 0.3)
    }
  }
}));

export default useStyles;
