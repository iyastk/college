import React from "react";

const SlideContainer = (props) => {
  const { slideNumber } = props;
  return (
    <div className="h-screen w-  object-fit	  bg-black">
      <img src={slideNumber} className="w-full h-full " alt="" />
    </div>
  );
};

export default SlideContainer;
