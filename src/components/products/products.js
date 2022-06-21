import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axiosInstace";
import { useSelector } from 'react-redux';

const Products = () => {
    const [products, setProducts] = useState([]);
    const LoaderState = useSelector((state) => state.loader.isLoading)
    useEffect(() => {
        axiosInstance
            .get("products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">

                {LoaderState && <div className="d-flex justify-content-center">
                    <div className="spinner-border " role="status"></div>
                </div>}


                {products.map((product) => {
                    return (
                         <div className="col" key={product.id}>
                           <div className="card">
                             <img
                               src={product.image}
                               style={{ height: "300px",margin:"auto" , width:"300px" }}
                               className="card-img-top"
                               alt="..."
                             />
                             <div className="card-body">
                               <h5 className="card-title">{product.title}</h5>
                               <div className="">
                               <p className="card-text">{product.description}</p>
                               </div>
                               <Link className="btn btn-outline-dark mt-3" to={`/details/${product.id}`} style={{width:"250px"}}>Details</Link>
                             </div>
                           </div>
                         </div>
                       
                    );
                })}
            </div>
        </>
    );
};

export default Products;
