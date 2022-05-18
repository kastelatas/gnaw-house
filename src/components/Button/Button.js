import React from 'react';
import SVG from "react-inlinesvg";

export const Button = ({name, btnClass = ""}) => {
  return (
    <button className={"btn " + btnClass}>{name}</button>
  );
};

export const ButtonWithIcon = ({name, icon, btnClass, onHandleClick}) => {
  return (
    <button className={"btnIcon " + btnClass} onClick={onHandleClick}>
      <SVG src={icon}/>
      <span>{name}</span>
    </button>
  )
}

