import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
import { useText } from '~/theme/common';
import useStyles from './pricing-card-style';

function PricingCard(props) {
  const classes = useStyles();
  const text = useText();
  const {
    title, subheader, price, info,
    description, buttonText
  } = props;

  return (
    <Card className={title === 'Pro' ? classes.bordered : ''}>
      <div className={clsx(classes.priceHeader, title === 'Pro' ? classes.hasBg : '')}>
        <CardHeader
          title={title}
          subheader={subheader}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          action={title === 'Pro' ? <StarIcon /> : null}
          className={classes.cardHeader}
        />
        <div className={classes.cardPricing}>
          <h2 className={text.title}>
            $
            {price}
          </h2>
          <Typography variant="h6">
            /mo
          </Typography>
        </div>
      </div>
      <CardContent className={classes.cardContent}>
        <ul>
          {description.map(line => (
            <Typography component="li" variant="subtitle1" align="center" key={line}>
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions className={clsx(classes.btnArea, title === 'Free' ? classes.secondaryColor : classes.primaryColor)}>
        <p>{ info }</p>
        <Button fullWidth variant="contained" color={title === 'Free' ? 'secondary' : 'primary'}>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

PricingCard.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  buttonText: PropTypes.string.isRequired,
  info: PropTypes.string,
};

PricingCard.defaultProps = {
  subheader: '',
  info: '',
};

export default PricingCard;
