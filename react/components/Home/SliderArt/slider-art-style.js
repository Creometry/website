import { makeStyles } from '@material-ui/core/styles';

const sliderArtStyles = makeStyles(theme => ({
  deco: {
    [theme.breakpoints.up('lg')]: {
      width: 450
    },
    '& img': {
      position: 'relative',
      width: '100%'
    },
    '&:before': {
      content: '""',
      width: 480,
      height: 480,
      background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
      borderRadius: 24,
      transform: theme.direction === 'rtl' ? 'rotate(-45deg)' : 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(15),
      boxShadow: theme.palette.type === 'dark' ? `-30px 20px 0px 0px ${theme.palette.secondary.dark}` : `-30px 20px 0px 0px ${theme.palette.secondary.light}`,
      right: theme.direction === 'rtl' ? 'auto' : theme.spacing(10),
      left: theme.direction === 'rtl' ? theme.spacing(10) : 'auto',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  figure: {
    height: 460,
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'all 0.3s ease'
  },
  fade: {
    opacity: '0.15',
    filter: 'blur(10px)'
  }
}));

export default sliderArtStyles;
