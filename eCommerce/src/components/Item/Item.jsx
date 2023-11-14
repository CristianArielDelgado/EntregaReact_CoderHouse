import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description, alt }) => {
  return (
    <div className="border m-2 col-12 col-md-4" style={{ maxWidth: "30%", height: "auto%" }}>
      <div className="card h-100" style={{ borderRadius: "10px" }}>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          {img && <img src={img} alt={alt} className="img-fluid" style={{ maxWidth: "70%", height: "auto", borderRadius: "10px" }} />}
          <p className="card-text">{description} </p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-outline-danger">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
