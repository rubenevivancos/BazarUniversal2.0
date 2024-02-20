import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';


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

    if(listProducts.length){
        return(
            <>
                <Container>
                    <Row className="mb-4">
                        <Col style={{ border: "2px solid black" }}>
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
                    <Row className="mb-4">
                        <Col className="text-center" style={{ border: "2px solid black" }}>
                            <div>Resultados de la busqueda de " {productToSearch} ": {listProducts.length}</div>
                        </Col>
                    </Row>
                    <Row className="mb-4 text-center">
                        <Col style={{ border: "2px solid black" }}>
                            {categoriesWithCount.map((cat) => (
                                <span key={cat.category} className="bg-danger p-2 m-2">{cat.category} - {cat.count}</span>
                            ))}
                        </Col>
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