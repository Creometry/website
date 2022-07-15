import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > p': {
      marginBottom: 0
    }
  },
  pricingWrap: {
    paddingTop: theme.spacing(5),
  }
}));

export default useStyles;
