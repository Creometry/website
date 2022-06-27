import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  title: {},
  testiCard: {
    direction: 'ltr',
    position: 'relative',
  },
  paper: {
    padding: theme.spacing(3),
    width: 240,
    height: 240,
    borderRadius: '50px 50px 50px 0',
    '& p': {
      height: 130,
      overflow: 'hidden'
    }
  },
  rating: {
    marginTop: theme.spacing(4)
  },
  starIcon: {
    color: '#FFC107'
  },
  starIconDisable: {
    color: theme.palette.divider
  },
  avatar: {
    border: '4px solid #FFF',
    boxShadow: theme.shadows[1]
  },
  person: {
    display: 'flex',
    marginTop: theme.spacing(3),
    '& $avatar': {
      width: 55,
      height: 55,
    },
    '& $title': {
      fontStyle: 'italic',
      fontWeight: 300
    },
  },
  name: {
    marginLeft: theme.spacing(2),
  },
}));

export default testiStyles;
