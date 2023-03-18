import "./styles.css";
import React from "react";

const json = [
  {
    id: 1,
    title: "grid1"
  },
  {
    id: 2,
    title: "grid2"
  },
  {
    id: 3,
    title: "grid3"
  },
  {
    id: 4,
    title: "grid4"
  }
];

export default function App() {
  const [cart, addCart] = React.useState([]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="container">
        <div className="grid-container">
          {json.map((item) => {
            return (
              <div className="grid-card">
                {item?.title}
                <button
                  className="addToCartButton"
                  onClick={(e) => {
                    if (cart.includes(item?.id)) {
                      let index = cart.indexOf(item?.id);
                      cart.splice(index, 1);
                      addCart([...cart]);
                    } else {
                      addCart([...cart, item?.id]);
                    }
                  }}
                >
                  {cart.includes(item?.id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
        {cart.length > 0 ? (
          <div className="cart-container">
            {cart?.map((id) => {
              return (
                <div className="cart-card">
                  {id}
                  <button
                    className="addToCartButton"
                    onClick={(e) => {
                      let index = cart.indexOf(id);
                      cart.splice(index, 1);
                      addCart([...cart]);
                    }}
                  >
                    "Remove from Cart"
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
