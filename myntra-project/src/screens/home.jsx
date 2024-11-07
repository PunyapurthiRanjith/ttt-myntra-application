import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("products");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, [type]);

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        `https://fakestoreapi.com/${type}`
      );
      if (status === 200) {
        setData(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h5>{type}</h5>
      <div className="d-flex">
        <hp>search Here: </hp>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container-fluid border p-2 d-flex flex-wrap gap-4 justify-content-around">
        {filteredData.length > 0 ? (
          filteredData.map((each) => (
            <div key={each.id}>
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
                    {`price: $ ${each.price}`}
                  </a>
                </div>
                <button className="btn btn-dark" >add to cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </>
  );
};

export default UseEffectExample;
