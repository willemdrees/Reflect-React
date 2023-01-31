import classes from './Right.module.css';
import Category from './Catelog/Category';
import CategoryList from './Catelog/CategoryList';

function Right() {
  return (
    <div className={classes.styling}>
      <CategoryList />
    </div>
  );
}

export default Right;