import React from "react";
import { FcLike } from "react-icons/fc";
import { FcCopyright } from "react-icons/fc";

const Copyright = () => {
  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <div className="copyright" style={style}>
        <h3 style={{ textAlign: "center" }}>
          <FcCopyright style={{ textAlign: "center" }} /> Made With <FcLike />{" "}
          Nitish Prajapati
        </h3>
      </div>
    </>
  );
};

export default Copyright;
