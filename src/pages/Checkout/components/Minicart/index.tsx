import { useContext } from "react"
import { CartContext } from "../../../../contexts/OrderContext"
import { MinicartCard } from "../MinicartCard";
import { MinicartContainer, MinicartList, MinicartSummary } from "./styles";
import { formatPrice } from "../../../../utils/useUtils";

export function Minicart() {
    const { products } = useContext(CartContext);

    const totalProductValue = products.reduce((acc, cur) => acc + (cur.product.price * cur.quantity), 0)
    const freightValue = 3.5;
    const totalValue = totalProductValue + freightValue;

    return (
        <MinicartContainer>
            <MinicartList>
                {products.map(item => {
                    return (
                        <li key={item.product.id}>
                            <MinicartCard {...item} /> 
                        </li>
                    )
                })}
            </MinicartList>

            <MinicartSummary>
                <dl>
                    <div>
                        <dt>Total de itens:</dt>
                        <dd>R$ {formatPrice(totalProductValue)}</dd>
                    </div>

                    <div>
                        <dt>Entrega:</dt>
                        <dd>R$ {formatPrice(freightValue)}</dd>
                    </div>

                    <div>
                        <dt className="total">Total</dt>
                        <dd className="total">R$ {formatPrice(totalValue)}</dd>
                    </div>
                </dl>
            </MinicartSummary>
        </MinicartContainer>
    )
}