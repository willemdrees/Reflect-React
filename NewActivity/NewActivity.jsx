import classes from './NewActivity.module.css';
import Plus from '../../../../../public/plus.svg';

function NewActivity({ onActivityChange, onCategoryChange, onTagChange }) { 
  return (
    <div className={classes.wrapper}>
      <input className={classes.input} 
      type="text" 
      id="activity-input" required
      placeholder='Activity'
      onChange={onActivityChange}
      />
      <input className={classes.input} 
      type="text" 
      id="input" required 
      placeholder='Category'
      onChange={onCategoryChange}
      />
      <input className={classes.input} 
      type="text" 
      id="input" 
      placeholder='Tag'
      onChange={onTagChange}
      />
      <div className={classes.add}>
        <button className={classes.plus}>
        <img src={Plus} alt="Button" />
        </button>
      </div>
    </div>
  );
}

export default NewActivity;


