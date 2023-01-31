import classes from './Filters.module.css';

function Filters({onClickButton}) {

  return (
    <div className={classes.wrapper}>
      <button onClick={onClickButton} 
        className={classes.plus}>+</button>
      <button className={classes.week}>This Week</button>
      <button className={classes.month}>This Month</button>
      <button className={classes.year}>This Year</button>
    </div>
  );
}

export default Filters;