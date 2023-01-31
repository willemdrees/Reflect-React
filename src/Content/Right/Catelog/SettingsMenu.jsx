import React, { useState } from "react";
import classes from './SettingsMenu.module.css';
import Settings from '../../../../public/settings.svg';

function SettingsMenu() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={classes.wrapper}>
      <button className={classes.button} onClick={handleButtonClick}>
        <img src={Settings} alt="Button" /></button>
      {showPopup && (
        <div className={classes.popup}>
          <h2>Settings</h2>
          <p>This is a pop-up component.</p>
        </div>
      )}
    </div>
  );
}

export default SettingsMenu;