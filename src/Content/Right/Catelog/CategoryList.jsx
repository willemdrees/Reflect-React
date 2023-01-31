import React, { useState } from "react";

import Category from './Category';
import Filters from '../Filters';
import classes from './CategoryList.module.css';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCategories([...categories, <Category 
      key={counter}
      name={Math. random()}                         
    />]);
    setCounter(counter + 1);
  };

  console.log(categories);
  return (
    <div className={classes.wrapper}>
      <Filters onClickButton={handleClick} />
      <div className={classes.categories}>
        {categories}
      </div>
    </div>
  );
}

export default CategoryList;
