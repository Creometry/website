import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { withTranslation } from '~/i18n';
import link from '~/public/text/link';
import Settings from './Settings';
import useStyles from '../header-style';

function UserMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir, t } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className={classes.userMenu}>
      { isDesktop && (
        <div>
          <Button href={link.agency.login}>{t('common:login')}</Button>
          <Button variant="contained" color="primary" href={link.agency.register}>{t('common:register')}</Button>
          <span className={classes.vDivider} />
        </div>
      )}
      <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
    </div>
  );
}

UserMenu.propTypes = {
  t: PropTypes.func.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

UserMenu.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(UserMenu);
