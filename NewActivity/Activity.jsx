import classes from './Activity.module.css';

function Activity({ activity, category, tag}) {
  return (
    <div className={classes.wrapper}>
      <li className={classes.list}>
        <p className={classes.category}>Exercise{category}</p>
        <p className={classes.activity}>Running{activity}</p>
        <p className={classes.tag}>Marathon{tag}</p>
      </li>
    </div>
  );
}

export default Activity;