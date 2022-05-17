import React from 'react';
import SVG from "react-inlinesvg";

export const Button = ({name, btnClass = ""}) => {
  return (
    <button className={"btn " + btnClass}>{name}</button>
  );
};

export const ButtonWithIcon = ({name, icon, btnClass}) => {
  return (
    <button className={"btnIcon " + btnClass}>
      <SVG src={icon}/>
      <span>{name}</span>
    </button>
  )
}

