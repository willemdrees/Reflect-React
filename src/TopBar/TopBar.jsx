import classes from './TopBar.module.css';
import ToggleLeft from '../../public/toggleleft.svg';
import ToggleRight from '../../public/toggleright.svg';
import Settings from '../../public/settings.svg';
import ToggleDown from '../../public/toggledown.svg';
import Avatar from '../../public/avatar.svg';


function TopBar () {
  return (
    <div className={classes.topbar}>
      <button className={classes.today}>Today</button>
      <button className={classes.toggleleft}>
        <img src={ToggleLeft} alt="Button" /></button>
      <button className={classes.toggleright}>
        <img src={ToggleRight} alt="Button" /></button>
      <p className={classes.date}>17th of January 2023</p>
      <button className={classes.week}>Week 4</button>
      <div className={classes.rightside}>
        <button className={classes.settings}>
          <img src={Settings} alt="Button" /></button>
        <div className={classes.menuwrapper}>
          <button className={classes.menu}>Menu </button>
          <img src={ToggleDown} alt="Button" 
            className={classes.toggledown} />
        </div>
        <button className={classes.avatar}>
          <img src={Avatar} alt="Button" /></button>
      </div>
    </div> 
  );
}

export default TopBar;

