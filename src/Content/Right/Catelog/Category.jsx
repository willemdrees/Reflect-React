import { useState } from 'react';

import {wrapper, buttonwrapper, header, activityblock, activities, ActivityAddButton} from './Category.module.css';
import Settings from '../../../../public/settings.svg';
import EditText from './EditText';
import SettingsMenu from './SettingsMenu';
import Activity from './Activity';

// Category is the ActivityList for Activities!

function Category() {
  const [activities, setActivities] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setActivities([...activities, <Activity 
      key={counter}
      name={Math. random()} 
    />]);
    setCounter(counter + 1);
  };

  console.log(activities);
  return (
    <div className={wrapper}>
      <div className={buttonwrapper}>
        <div className={header}><EditText /></div>
        <SettingsMenu />
      </div>
      <div className={activityblock}>
        <div className={activities}>
        {activities}
        </div>
        <button className={ActivityAddButton} onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

export default Category;