import classes from './Sidebar.module.css';

function Sidebar () {
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <div id="block"></div>
        <div id="block"></div>
        <div id="block"></div>
        <div id="block"></div>
      </div>
      <button id="time"></button>
      <button id="statistics"></button>
      <button id="progress"></button>
      <button id="learn"></button>
    </div>
  );
}

export default Sidebar;

