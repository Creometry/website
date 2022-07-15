import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
  },
  listPeople: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
  },
  form: {
    flex: 1,
    padding: theme.spacing(1, 0),
    boxShadow: theme.shadows[3],
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
    }
  },
  comment: {
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 16
    }
  },
  commentList: {
    marginTop: theme.spacing(2),
    alignItems: 'flex-start'
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 18
  },
  profileList: {},
  commentText: {
    marginTop: theme.spacing(1),
    fontSize: 14,
  },
  avatarComment: {
    marginRight: theme.spacing(3)
  },
  commentAction: {
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    margin: 0,
    borderRadius: theme.rounded.small
  },
  input: {},
  commentForm: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '15px 20px',
    margin: 0,
    [theme.breakpoints.up('md')]: {
      minWidth: 600,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1)
    },
    '& $input': {
      width: '100%',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(20)
    }
  },
  helpItem: {
    textTransform: 'uppercase',
    fontSize: 13
  },
  icon: {
    minWidth: 40,
    '& svg': {
      width: 28,
      height: 28
    }
  },
  sendButton: {
    position: 'absolute',
    top: 21,
    right: 24,
    [theme.breakpoints.down('xs')]: {
      top: 14,
      right: 14,
    }
  }
}));

export default styles;
