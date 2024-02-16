import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { productSearch } from "../../Redux/Actions/productAction";
//import './homeWithSearchBox.css';

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
        <div>
            {/* NAVBAR INICIO */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* NAVBAR FIN */}


            {/* CONTENIDO INICIO */}
            <section>
                <div className="bg-primary text-white p-3 mt-3">
                    <p>
                        Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a 
                        full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
                    </p>
                </div>
                <div className="bg-success text-white p-3 mt-3">
                    <p>
                        Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a 
                        full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
                    </p>
                </div>
                <div className="bg-dark text-white p-3 mt-3">
                    <p>
                        Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a 
                        full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
                    </p>
                </div>
            </section>
            {/* CONTENIDO FIN */}


            {/* CARD INICIO */}
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            {/* CARD FIN */}


            <h1>Aprendiendo Bootstrap</h1>
            <button type="button" className="btn btn-primary">Shaka de Virgo</button>
        </div>
        /* 
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
        */
    )
}