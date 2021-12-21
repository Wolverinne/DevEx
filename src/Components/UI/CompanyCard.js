import classes from './CompanyCard.module.css';

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;