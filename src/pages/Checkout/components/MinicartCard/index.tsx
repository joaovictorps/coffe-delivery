import { useContext } from "react";
import productImage1 from "../../../../assets/product-image-1.png";
import { SelectOption } from "../../../../components/SelectOption";
import { CartContext } from "../../../../contexts/OrderContext";
import { ProductInCart } from "../../../../interfaces/cartTypes";
import { formatPrice } from "../../../../utils/useUtils";
import { MinicartCardContainer } from "./styles";
import { Trash } from "phosphor-react";

export function MinicartCard({product, quantity}: ProductInCart) {
    const { AddToCart, RemoveFromCart, ChangeProductQuantityInCart } = useContext(CartContext);

    const { name, price } = product

    const handleIncrementOne = () => {
        AddToCart(product);
    }

    const handleDecrementOne = () => {
        RemoveFromCart(product, 1);
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(event.target.value);

        ChangeProductQuantityInCart(product, newQuantity);
    };

    return (
            <MinicartCardContainer>
                <img src={productImage1} alt={name} />

                <div className="middle">
                    <h3>{name}</h3>
                    <div className="middle--select-container">
                        <SelectOption
                            quantity={quantity}
                            handleDecrease={handleDecrementOne}
                            handleIncrease={handleIncrementOne}
                            handleChange={handleQuantityChange}
                            handleBlur={handleQuantityChange}
                        />
                        <button className="remove-product" type="button" onClick={() => RemoveFromCart(product)} title="Remover produto">
                            <Trash size={16} />
                            REMOVER
                        </button>
                    </div>
                </div>
                
                <span className='price'>R$ {formatPrice(price)}</span>
            </MinicartCardContainer>
    )
}