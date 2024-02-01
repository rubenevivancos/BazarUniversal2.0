import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetail } from "../../Redux/Actions/productAction";

export default function ProductDetail() {

    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id]);

    const product = useSelector((state) => state.productReducer.productDetail);

    const error = useSelector((state) => state.productReducer.error);

    if(product !== null){
        return(
            <div >
                <div >
                    <div >
                        <input type="text" placeholder="laptops, smartphones, ..."/>
                        <div></div>
                    </div>
                    <div>
                        <img src={product.images[0]} alt={product.title}/>
                    </div>
                    <div>
                        {product.title}
                    </div>
                    <div>
                        {product.price}
                    </div>
                    <div>
                        {product.rating}
                    </div>
                    <div>
                        {product.description}
                    </div>
                    <div>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        )
    }
}