import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
  <div className="d-flex flex-column col-2 justify-content-center align-items-center border border-3 border-danger rounded-3 p-4">
    <div className="text-center">
      <strong>Productos al carrito: <span className="text-success">{count}</span></strong>
      <hr />
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-secondary mx-3" onClick={increment}>
          +
        </button>
        <button className="btn btn-outline-secondary mx-3" onClick={decrement}>
          -
        </button>
      </div>
    </div>
    <button className="btn btn-outline-danger mt-2" onClick={() => onAdd(count)}>
      Agregar al carrito
    </button>
  </div>

  );
};
