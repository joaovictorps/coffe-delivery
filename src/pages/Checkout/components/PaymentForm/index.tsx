import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { GroupContainer, HeaderGroup } from "../../styles";
import { PaymentOption } from "./PaymentOption";
import { PaymentMethodsList } from "./styles";

export function PaymentForm() {

    return (
        <GroupContainer>
            <HeaderGroup color="purple" className="header">
                <CurrencyDollar size={22} weight="thin" />
                <div>
                    <h2>Pagamento</h2>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </HeaderGroup>

            <PaymentMethodsList className='payment-methods'>
                <li>
                    <PaymentOption
                        icon={ <CreditCard size={16} weight="thin" /> }
                        name="Cartão de crédito"
                        isSelected
                    />
                </li>

                <li>
                    <PaymentOption
                        icon={ <Bank size={16} weight="thin" /> }
                        name="Cartão de débito"
                    />
                </li>

                <li>
                    <PaymentOption
                        icon={ <Money size={16} weight="thin" /> }
                        name="Dinheiro"
                    />
                </li>
            </PaymentMethodsList>
        </GroupContainer>
    )
}