import { ShoppingCart } from "phosphor-react";
import productImage1 from "../../../../assets/product-image-1.png";
import { CardContainer } from "./styles";
import { OrderContext } from "../../../../contexts/OrderContext";
import { FormEvent, useContext, useState } from "react";
import { ProductType } from "../../../../interfaces/cartTypes";
import { formatPrice } from "../../../../utils/useUtils";
import { SelectOption } from "../../../../components/SelectOption";

export function Card(item: ProductType) {
    const { cart } = useContext(OrderContext);

    const { addToCart } = cart

    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addToCart(item, quantity);
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(event.target.value);
        setQuantity(newQuantity);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    return (
        <CardContainer>
            <div className="image-container">
                <img src={productImage1} alt="" />
            </div>

            <ul className="flags">
                {item.tags.map((tag) => {
                    return (
                        <li key={tag + item.id}>
                            {tag}
                        </li>
                    );
                })}
            </ul>

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <div className="controls-container">
                <span>R$ <strong>{formatPrice(item.price)}</strong></span>

                <form onSubmit={handleSubmit}>

                    <SelectOption 
                        handleIncrease={handleIncrease} 
                        handleDecrease={handleDecrease} 
                        handleChange={handleQuantityChange} 
                        quantity={quantity}
                    />

                    <button type="submit">
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </form>
            </div>
        </CardContainer>
    );
}
