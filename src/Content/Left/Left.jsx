import classes from './Left.module.css';

import Grid from './Grid/Grid';
import Now from './Now/Now';

function Left() {
  return (
    <div className={classes.styling}>
        <Grid />
        <Now />
    </div>
  );
}

export default Left;