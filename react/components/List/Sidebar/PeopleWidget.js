import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import Paper from '../../Paper';
import useStyles from '../list-style';

function PeopleWidget(props) {
  const classes = useStyles();
  const { t } = props;
  const people = [{
    img: imgAPI.avatar[6],
    name: 'John Doe',
    title: 'Web Designer'
  },
  {
    img: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Executive Merketing'
  },
  {
    img: imgAPI.avatar[7],
    name: 'Jim Doe',
    title: 'Dev Ops'
  },
  {
    img: imgAPI.avatar[2],
    name: 'Jihan Doe',
    title: 'Director'
  },
  {
    img: imgAPI.avatar[0],
    name: 'Jena Doe',
    title: 'CEO'
  },
  {
    img: imgAPI.avatar[9],
    name: 'Johan Doe',
    title: 'iOS Developer'
  }];

  return (
    <Paper title="You may know" icon="ion-android-people" whiteBg desc="Donec commodo convallis ligula eget suscipit orci.">
      <div className={classes.profileList}>
        <List dense>
          {people.map((item, index) => (
            <ListItem disableGutters key={index.toString()} button>
              <Avatar className={classes.avatar} alt="avatar" src={item.img} title="avatar" />
              <ListItemText primary={item.name} secondary={item.title} />
              <ListItemSecondaryAction>
                <Button variant="outlined" size="small">follow</Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Grid container justifyContent="center">
          <Button fullWidth color="secondary">
            {t('common:btn_seeall')}
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

PeopleWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

PeopleWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(PeopleWidget);
