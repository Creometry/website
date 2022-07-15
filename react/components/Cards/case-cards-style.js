import { makeStyles } from '@material-ui/core/styles';
import frameDeco from '~/public/images/decoration/frame-deco.png';

const useStyles = makeStyles(theme => ({
  logo: {},
  small: {},
  big: {},
  fullHide: {},
  figure: {},
  title: {},
  text: {
    display: 'block'
  },
  caseCard: {
    maxHeight: 390,
    borderRadius: 24,
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.secondary.light,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.up('lg')]: {
      minHeight: 148,
    },
    '& $figure': {
      margin: 0,
      display: 'inline-block',
      width: '100%',
      '& img': {
        width: '100%',
        position: 'relative',
      }
    },
    '& $title': {
      lineHeight: '22px',
      fontSize: '1.25rem',
      fontWeight: '500'
    },
    '& $logo': {
      display: 'block',
      position: 'relative',
      '& img': {
        width: '100%'
      }
    },
    '&$small': {
      '& $title': {
        display: 'block',
      },
      '& $logo': {
        margin: '0 auto 16px',
      },
      '& $property': {
        textAlign: 'center',
        bottom: 0
      },
      '& $figure': {
        [theme.breakpoints.down('xs')]: {
          width: '100%'
        }
      }
    },
    '&$big': {
      '& $property': {
        [theme.breakpoints.down('md')]: {
          textAlign: 'center',
          bottom: 0
        }
      }
    },
    '&:hover': {
      '& $property': {
        [theme.breakpoints.up('lg')]: {
          background: theme.palette.primary.main,
          height: '100%',
          bottom: 0,
          opacity: 0.9,
          '& p': {
            opacity: 1,
            bottom: 0
          }
        }
      }
    }
  },
  desc: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    whiteSpace: 'normal'
  },
  property: {
    transition: 'all 0.3s ease-out',
    position: 'absolute',
    width: '100%',
    height: '150%',
    minHeight: 170,
    padding: theme.spacing(4),
    bottom: 0,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    left: 0,
    color: theme.palette.common.white,
    background: 'linear-gradient(to bottom, rgba(238, 238, 238, 0) 30%, #000 110%)',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
      textAlign: 'center',
      bottom: 0,
      '& $desc': {
        display: 'none'
      }
    },
    '& $title': {
      whiteSpace: 'normal',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        alignItems: 'center',
      }
    },
    '& $logo': {
      width: 64,
      height: 64,
      background: `url(${frameDeco}) no-repeat`,
      padding: theme.spacing(2),
      textAlign: 'center',
      marginRight: theme.spacing(2),
      backgroundSize: '100%',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
      '& img': {
        display: 'block'
      }
    },
    '& h6': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(2),
      lineHeight: '22px'
    },
    '&$fullHide': {
      background: 'none',
      opacity: 0,
    },
    '& p': {
      opacity: 0,
      transition: 'bottom 0.5s ease-out',
      position: 'relative',
      bottom: -20,
    }
  }
}));

export default useStyles;
