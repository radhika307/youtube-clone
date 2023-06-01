import React from "react";
import Button from "./Button";

//const list = ["All","Live","Soccer",....] and use maps, do horizontal scroll just like in youtube website HOMEWORK

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Tech" />
      <Button name="Songs" />
    </div>
  );
};

export default ButtonList;
