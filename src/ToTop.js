import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ToTop = () => {
  const toTop = useLocation();

  useEffect(() => {
    console.log(toTop);
    window.scrollTo(0, 0);
  }, [toTop]);
  return <></>;
};

export default ToTop;
