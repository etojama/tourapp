import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeItem }) => {
  return (
    <section>
      <div className="title">
        <h1 style={{ color: "hsl(210, 100%, 20%)" }}>Our tours</h1>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeItem={removeItem}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
