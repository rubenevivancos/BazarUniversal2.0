import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { productSearch } from "../../Redux/Actions/productAction";
import './homeWithSearchBox.css';

export default function HomeWithSearchBox() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [product, setProduct] = useState("");

    const handleInput = (e) => {
        e.preventDefault()
        setProduct(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(productSearch(product));

        // Crea una nueva ruta con el parámetro de consulta "search"
        const newRoute = `/items?search=${product}`;

        navigate(newRoute);
    }


    return(
        <div className="container">
            <div className="row">
                <div className="food-car"></div>
            </div>
            <div className="row">
                <h1>Bazar Online</h1>
            </div>
            <div className="row">
                <div className="search-container">
                    <input type="text" placeholder="laptops, smartphones, ..." className="search-box" onChange={handleInput}/>
                    <div className="search-icon"></div>
                </div>
            </div>
            <div className="row">
                <button className="search-button" onClick={handleSubmit}>Buscar</button>
            </div>
        </div>
    )
}