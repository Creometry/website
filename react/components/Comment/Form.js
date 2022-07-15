import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Send from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { withTranslation } from '~/i18n';
import avatarDefault from '~/public/images/avatars/pp_boy4.svg';
import useStyles from './comment-style';

function Form(props) {
  const classes = useStyles();

  const [comment, setComment] = useState('');

   // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  // Translation Function
  const { t, avatar } = props;

  const handleChange = event => {
    setComment(event.target.value);
  };

  return (
    <section className={classes.commentAction}>
      <div className={classes.commentForm}>
        {!isMobile && (
          <Avatar alt="avatar" src={avatar !== '' ? avatar : avatarDefault} />
        )}
        <Paper component="form" className={classes.form}>
          <InputBase
            className={classes.input}
            placeholder="Write Comment"
            onChange={handleChange}
            value={comment}
          />
          <Button variant="contained" size="small" color="primary" aria-label="send" className={classes.sendButton}>
            {isMobile ? (<Send />) : t('common:form_send')}
          </Button>
        </Paper>
      </div>
    </section>
  );
}

Form.propTypes = {
  t: PropTypes.func.isRequired,
  avatar: PropTypes.string
};

Form.defaultProps = {
  avatar: ''
};

export default withTranslation(['common'])(Form);
