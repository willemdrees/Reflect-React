import { useState} from 'react';

import Activity from './Activity';
import NewActivity from './NewActivity';
import classes from './ActivityList.module.css';

function ActivityList () {
  const [activity, setActivity] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');
  
  function AddActivityHandler(event) {
    setActivity(event.target.value);
  }

  function AddCategoryHandler(event) {
    setCategory(event.target.value);
  }
  
  function AddTagHandler(event) {
    setTag(event.target.value);
  }

  return (
    <>
      <NewActivity 
        onActivityChange={AddActivityHandler} 
        onCategoryChange={AddCategoryHandler} 
        onTagChange={AddTagHandler}/>
      <ul className={classes.activities}>
        <Activity activity={activity} category={category} tag={tag}/>
      </ul>
    </>
  );
}

export default ActivityList;
