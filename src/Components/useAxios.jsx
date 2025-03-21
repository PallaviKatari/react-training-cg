import React, { useEffect } from "react";
import { useAxios } from "use-axios-client";

export default function AxiosuseAxios() {
  const { data, error, loading } = useAxios({
    url: "https://fakestoreapi.com/products",
  });

  useEffect(() => {
    if (data) {
      console.log("Fetched Data:", data);
    } else {
      console.log("No data fetched");
    }
  }, [data]); // Log data when it's updated

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data!</h2>;
  if (!data || !Array.isArray(data)) return <h2>No data found!</h2>;

  return (
    <div className="row" style={{ marginTop: 100 }}>
      <h1 className="head"> PRODUCT DETAILS </h1>
      <div className="col md-3">
        <h2 className="head">Product List</h2>
        {data.map((record) => (
          <div
            key={record.id}
            className="App"
            style={{
              marginLeft: 500,
              width: 500,
              border: "1px solid red",
              lineHeight: 2,
              padding: 10,
            }}>
            <img
              src={record.image}
              alt="product"
              style={{ height: 100, width: 100 }}
            />
            <p>
              <strong>{record.title}</strong>
            </p>
            <p>Price: RS {record.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
