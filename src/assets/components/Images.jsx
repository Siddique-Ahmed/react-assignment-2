import React from "react";

const Images = ({ data }) => {
  return (
    <div className="imgBox">
      {data.map((d, i) => {
        console.log(d);
        return <div key={i} className="box">
          <img
            src={
              d.img
                ? d.img
                : "https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
            }
          />
          <div className="detail">
            <h1>{d.title ? d.title : "--"}</h1>
            <p>{d.dec ? d.dec : "--"}</p>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Images;
