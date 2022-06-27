import React from 'react';
import useStyles from './deco-style';

function Decoration() {
  const classes = useStyles();
  return (
    <div className={classes.footerDeco}>
      <div className={classes.leftDeco}>
        <div className={classes.big} />
        <div className={classes.small} />
      </div>
      <div className={classes.rightDeco}>
        <div className={classes.big} />
        <div className={classes.small} />
      </div>
    </div>
  );
}

export default Decoration;
