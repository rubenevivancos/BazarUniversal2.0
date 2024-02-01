import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Product from "../Product/product.js";
import "./searchResults.css";


export default function SearchResults() {

    const listProducts = useSelector((state) => state.productReducer.listProduct);
    const productToSearch = useSelector((state) => state.productReducer.productToSearch);
    const categoriesWithCount = useSelector((state) => state.productReducer.categoriesWithCount);

    if(listProducts.length){
        return(
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
        )
    }
}