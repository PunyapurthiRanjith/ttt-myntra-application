import axios from "axios";
import React, { useEffect, useState } from "react";

export const ElectronicsScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h4>Wellcome to ElectronicsScreen </h4>
      <div className="container-fluid border p-2 d-flex flex-wrap gap-4 justify-content-around">
        {data.map((each) => (
          <>
            <div
              className="card border text-align-center"
              style={{ width: "18rem" }}
            >
              <img
                src={each.image}
                className="card-img-top p-2 "
                alt={each.title}
                width={"50px"}
                height={"200px"}
              />
              <div className="card-body">
                <h5 className="card-title">{each.category}</h5>
                <p className="card-text">{each.title}</p>
                {/* <p className="card-text">{each.description}</p> */}
                <a href="#" className="btn btn-primary">
                  {`$ ${each.price}`}
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
