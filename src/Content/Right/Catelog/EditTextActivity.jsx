import React, { useState, useRef, useEffect } from "react";

import classes from './EditTextActivity.module.css';

const Item = props => {
  const [isEditing, setIsEditing] = useState(false);
  const inputEl = useRef(null);

  function handleFocus() {
    inputEl.current.select();
  }
  
  useEffect(() => {
    if (isEditing) inputEl.current.focus();
  }, [isEditing]);

  return isEditing ? (
    <div className={classes.wrapper}>
      <input className={classes.inputWindowActivity}
        ref={inputEl}
        value={props.item.name}
        onFocus={handleFocus}
        onChange={e => props.setItemName(e.target.value)}
      />
      <button className={classes.button} onClick={() => setIsEditing(false)}>ADD</button>
    </div>
  ) : (
    <div
      className={`item${props.item.purchased ? " purchased" : ""}`}
      onClick={() => setIsEditing(true)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

function EditTextActivity() {
  const [name, setItemName] = useState("Type Here...");
  return (
    <div>
      <Item item={{ purchased: true, name }} setItemName={setItemName} />
    </div>
  );
}

export default EditTextActivity;