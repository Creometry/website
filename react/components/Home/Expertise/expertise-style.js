import { makeStyles } from '@material-ui/core/styles';
import greenBuble from '~/public/images/agency/green_buble.png';
import blueBuble from '~/public/images/agency/blue_buble.png';
import violetBuble from '~/public/images/agency/violet_buble.png';

const expertiseStyle = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-3)
      }
    }
  },
  decoration: {
    fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    stroke: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    height: 600,
    width: 600,
    position: 'absolute',
    top: -200,
    left: -240,
    backgroundSize: '100%',
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.8)'
    }
  },
  titleDeco: {
    position: 'relative'
  },
  desc: {
    lineHeight: '32px',
  },
  illustrationWrap: {
    position: 'relative',
    top: -240,
    left: -230,
    height: 200,
    transformOrigin: 'top',
    '& span': {
      backgroundSize: '100%',
      position: 'relative',
      display: 'block'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  list: {
    marginTop: theme.spacing(4)
  },
  iconGreen: {
    top: -179,
    left: 30,
    width: 320,
    height: 600,
    background: `url(${greenBuble}) no-repeat`,
  },
  iconViolet: {
    width: 560,
    height: 560,
    left: -50,
    top: -620,
    background: `url(${violetBuble}) no-repeat`,
  },
  iconBlue: {
    width: 560,
    height: 560,
    left: 0,
    top: -1170,
    background: `url(${blueBuble}) no-repeat`,
  },
  descIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    transform: 'rotate(45deg)',
    marginBottom: theme.spacing(),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  },
  icon: {
    transform: 'rotate(-45deg)',
    margin: '4px 0px 0px 5px',
    [theme.breakpoints.down('sm')]: {
      margin: '5px 0px 0px 0px'
    }
  },
  iconPrimary: {
    background: theme.palette.primary.light,
    '& $icon': {
      color: theme.palette.primary.dark,
    }
  },
  iconSecondary: {
    background: theme.palette.secondary.light,
    '& $icon': {
      color: theme.palette.secondary.dark,
    }
  },
  iconAccent: {
    background: theme.palette.accent.light,
    '& $icon': {
      color: theme.palette.accent.dark,
    }
  },
  iconAccent2: {
    background: '#FBEABB',
    '& $icon': {
      color: '#F38D21',
    }
  },
}));

export default expertiseStyle;
