import React, { useState, createContext, useContext } from "react";
import useAxios from "axios-hooks"; // Import useAxios properly
import {ThemeProvider1,ThemeContext} from "./ContextDemo";
export default function AxiosDemo() {
  const [{ data, error, loading }] = useAxios("https://fakestoreapi.com/products");

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  if (error)
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>
        Error fetching data: {error.message}
      </h2>
    );
  if (!data || !Array.isArray(data) || data.length === 0)
    return <h2 style={{ textAlign: "center" }}>No products found!</h2>;

  return (
    <div style={{ marginTop: 50, textAlign: "center" }}>
      <h1>RENDER PROPS</h1>
      <ThemedComponent />
      
      <h1>useContext</h1>
      <ThemeProvider1>
        <ThemedComponent1 />
      </ThemeProvider1>

      <h1>Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {data.map((product) => (
          <div
            key={product.id}
            style={{
              width: 250,
              padding: 10,
              margin: 10,
              border: "1px solid gray",
              borderRadius: 10,
              boxShadow: "2px 2px 10px rgba(73, 35, 35, 0.1)",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ height: 120, width: 120, objectFit: "contain" }}
            />
            <h3 style={{ fontSize: 16, marginTop: 10 }}>{product.title}</h3>
            <p style={{ fontWeight: "bold", color: "green" }}>Price: ₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Render Props Theme Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return children({ theme, setTheme });
};

const ThemedComponent = () => (
  <ThemeProvider>
    {({ theme, setTheme }) => (
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          padding: "20px",
        }}
      >
        <h2>Current Theme: {theme}</h2>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
      </div>
    )}
  </ThemeProvider>
);

// Context API for Theme Management
// const ThemeContext = createContext();

// const ThemeProvider1 = ({ children }) => {
//   const [theme1, setTheme] = useState("light");

//   return <ThemeContext.Provider value={{ theme1, setTheme }}>{children}</ThemeContext.Provider>;
// };

const ThemedComponent1 = () => {
  const { theme1, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme1 === "light" ? "#fff" : "#333",
        color: theme1 === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <h2>Current Theme: {theme1}</h2>
      <button onClick={() => setTheme(theme1 === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};
