import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ description, price, stock, name, img, alt }) => {
  const onAdd = (items) => {
    alert(`Se agregaron ${items} al carrito`);
  };

  return (
<div className="border m-2 d-flex justify-content-center align-items-center">
  <div className="card mx-auto col-md-6" style={{ maxWidth: "60%", height: "auto", paddingLeft: "20px" }}>
    <div className="card-body text-center">
      <h5 className="card-title text-uppercase font-weight-bold mb-4">{name}</h5>
      {img && <img src={img} alt={alt} className="img-fluid rounded" style={{ maxWidth: "60%", height: "auto" }} />}
      <p className="card-text mt-3">{description}</p>
      <p className="text-muted"><strong>Precio: <span className="text-danger">${price}</span></strong></p>
      <p className={`text-${stock > 0 ? "success" : "danger"}`}>
        <strong>Unidades en Stock: {stock}</strong>
      </p>
    </div>
    <div className="d-flex flex-column align-items-center">
      <ItemCount stock={stock} onAdd={onAdd} />
      <Link to="/" className="text-decoration-none mt-3" style={{ width: '100%' }}>
        <Button text="Volver" variant="btn-danger" style={{ maxWidth: "100%", height: "auto" }}/>
      </Link>
    </div>
  </div>
</div>

  );
};
