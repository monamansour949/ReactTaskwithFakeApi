import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig/axiosInstace";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProductDetails = (props) => {
  
  const params = useParams();

  const [prod, setProduct] = useState({});
  const LoaderState = useSelector((state) => state.loader.isLoading)
  useEffect(() => {
    axiosInstance
      .get(`products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <>
    {LoaderState && <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border " role="status"></div>
                </div>}
                
  <div className="card mb-3 mt-5" style={{maxWidth: "540px", margin:"auto"}}>
  <div className="row g-0">
      <div className="col-md-4">
          <img  src={prod.image} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">{prod.description}</p>
              <Link className="btn btn-outline-primary" to={`/products`} >Back</Link>
          </div>
      </div>
  </div>
</div>
</>
  );
};

export default ProductDetails;
