import classes from './Content.module.css';

import Left from './Left/Left';
import Right from './Right/Right';

function Content() {
  return (
    <div className={classes.content}>
      <Left />
      <Right />
    </div>
  );
}

export default Content;