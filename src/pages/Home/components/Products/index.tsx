import { Card } from "../Card";
import { ProductsContainer } from "./styles";
import { productsList } from "../../../../api/products";

export function Products() {

    return (
        <ProductsContainer>

            <h2>Nossos cafés</h2>

            <ul>

                {productsList.map(item => {
                    return (
                        <li key={item.id}>
                            <Card {...item} />
                        </li>
                    )
                })}

            </ul>
        </ProductsContainer>
    )
}