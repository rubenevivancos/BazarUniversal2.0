import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap';


import { getProductDetail } from "../../Redux/Actions/productAction";
import imagen from '../../Images/carrito.png';
import lupaIcon from '../../Images/lupa.png';


export default function ProductDetail() {

    const [productToSearch, setProductToSearch] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        setProductToSearch(e.target.value);        
    }

    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id]);

    const product = useSelector((state) => state.productReducer.productDetail);


    if(product !== null){
        return(
            <Container fluid className="py-4 overflow-auto vh-90" style={{ maxWidth: '50vh' }}>
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
            </Container>
        )
    }
}