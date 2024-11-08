import React from "react";
import style from "./container.module.css";

export const Container = (props: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={[style.container, props.className].filter(Boolean).join(" ")}
    />
  );
};
