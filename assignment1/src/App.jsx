import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Product Dashboard</h1>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <p>Hello, {name}</p>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
