import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Product from "../Product/product.js";
import imagen from '../../Images/carrito.png';
import lupaIcon from '../../Images/lupa.png';



export default function SearchResults() {

    const [product, setProduct] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        setProduct(e.target.value);        
    }

    const listProducts = useSelector((state) => state.productReducer.listProduct);
    const productToSearch = useSelector((state) => state.productReducer.productToSearch);
    const categoriesWithCount = useSelector((state) => state.productReducer.categoriesWithCount);

    function generateColor(category) {
        let color = "#";
        switch (category) {
            case "smartphones":
                color = "#FFC0CB"; //Rosado claro
                break;
            case "laptops":
                color = "#4285F4"; //Celeste
                break;
            case "fragrances":
                color = "#90EE90"; //Verde claro
                break;
            case "skincare":
                color = "#FFFF00"; //Amarillo
                break;
            case "groceries":
                color = "#800080"; //Morado
                break;
            case "home-decoration":
                color = "#D2B48C"; //Beige
                break;
            default:
              color = "#B0E0E6"; //Azul polvo
        }
        console.log("El color es --> " + color);
        return color;
      }

    if(listProducts.length){
        return(
            <>
                <Container fluid className="py-4" style={{ overflowY: 'auto', maxHeight: '90vh' }}>
                    <Row className="mb-4 justify-content-left align-items-left">
                        <Col xs={12} md={10}>
                            <InputGroup>
                                <Image src={imagen} style={{ width: "50px" }}/>
                                <InputGroup.Text> </InputGroup.Text>
                                <FormControl
                                    placeholder="smartphones, laptops..."
                                    aria-label="Búsqueda"
                                    aria-describedby="basic-addon2"
                                    onChange={handleInput}
                                />
                                <Image src={lupaIcon} alt="Lupa"/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mb-4 justify-content-left">
                        <Col xs={12} md={10} className="text-left">
                            <div>Resultados de la busqueda de " {productToSearch} ": {listProducts.length}</div>
                        </Col>
                    </Row>
                    <Row className="mb-4 text-left">                        
                        {categoriesWithCount.map((cat, index) => (
                            <Col key={index} xs={6} md={6} lg={4} className="mb-2">
                                <span className="p-1 me-2" style={{ backgroundColor: generateColor(cat.category) }}>{cat.category} - {cat.count}</span>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col className="text-center" style={{ border: "2px solid black" }}>
                            <div>
                                { listProducts.map( product => <Link to={"/items/"+product.id} key={product.id}><Product product={product} /></Link>) }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

/*
            <div>
                <div>
                    <div>
                        <input type="text" placeholder="laptops, smartphones, ..."/>
                        <div></div>
                    </div>
                </div>
                <div>Resultados de la busqueda de " {productToSearch} ": {listProducts.length}</div>
                <div className="category-list">
                    {categoriesWithCount.map((cat) => (
                        <div key={cat.category}>{cat.category} - {cat.count}</div>
                    ))}
                </div>
                <div>
                    { listProducts.map( product => <Link to={"/items/"+product.id} key={product.id}><Product product={product} /></Link>) }
                </div>
            </div>
*/