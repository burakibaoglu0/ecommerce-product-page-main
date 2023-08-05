import { IProduct } from "../../helpers/types";
import QuantityBox from "../quantityBox/quantityBox";
import './productDetails.scss';

const calcDiscount = (price:number,oldPrice:number) => {
    if(price > oldPrice) return 0;
    return Math.round((price/oldPrice) * 100) + '%';
}

const priceText = (price:number,currency: string) => {
    return price.toLocaleString('en-US',{style:'currency',currency})
}

const oldPriceText = (oldPrice:number, currency:string) => {
    return oldPrice.toLocaleString('en-US',{style:'currency',currency})
}

const ProductDetails = (props: {product:IProduct}) => {
    return (
        <div className="product-details">
            <h6 className="product-brand">{props.product.brand}</h6>
            <h4 className="product-name">{props.product.name}</h4>
            <p className="product-description">{props.product.description}</p>
            <div className="product-price-wrapper">
                <span className="product-price">{priceText(props.product.price,props.product.currency)}</span>
                {props.product.oldPrice && 
                <span className="product-discount-badge">{calcDiscount(props.product.price,props.product.oldPrice)}
                </span>
                }
                {props.product.oldPrice && 
                <span className="product-old-price">{oldPriceText(props.product.oldPrice,props.product.currency)}</span>
                }
            </div>
            <div className="product-add-to-cart-area">
                <QuantityBox />
        </div>
        </div>
    )
}

export default ProductDetails;