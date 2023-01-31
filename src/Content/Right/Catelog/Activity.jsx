import classes from './Activity.module.css';
import EditTextActivity from './EditTextActivity';

function Activity() {
  return (
    <div className={classes.row}>
      <div className={classes.color}></div>
      <EditTextActivity />
      <div className={classes.hours}> 73 Hours </div>
    </div>
  );
}

export default Activity;