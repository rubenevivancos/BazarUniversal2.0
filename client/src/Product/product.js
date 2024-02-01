import "./product.css";

export default function Product({product}) {

    // Función para renderizar las estrellas según la calificación
    const renderStars = () => {
        let stars = [];

        let integerRating = Math.floor(product.rating); // Parte entera de la calificación

        // Obtenemos la parte decimal restando la parte entera al número original
        let decimal = product.rating - integerRating;
        // Multiplicamos por 100 para obtener un número entero (eliminando el punto decimal)
        let decimalPart = decimal * 100;
        decimalPart = Math.floor(decimalPart); //Obtenemos la parte entera


        for (let i = 0; i < 5; i++) {
            if (i < integerRating) {
                stars.push(<span key={i}><span key={i} className="star-active">&#9733;</span><br key={i+1}/><br key={i+2}/></span>);
            } else {
                let decimalWidth = `${decimalPart}%`;
                stars.push(
                    <span key={i+1}>
                        <span key={i} className="star-active" style={{ width: decimalWidth }}>
                            &#9733;
                        </span><br key={i+1}/><br key={i+2}/>
                    </span>
                );
                break;
            }
        }
        return stars;
    };

    return(
        <div className="product-container">
            <div className="product-image">
                <img src={product.images[0]} alt={product.title} width="150" height="150"/>
            </div>
            <div className="product-details">
                <div className="product-title">{product.title}</div>
                <div className="product-description">{product.description}</div>
                <div className="product-price-and-rating">
                    <div className="product-price">{product.price}</div>
                    <div className="product-rating">
                        {renderStars()}
                    </div>
                </div>
            </div>
        </div>
    )
}