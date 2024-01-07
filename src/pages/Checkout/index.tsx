import { CheckoutContainer, GroupContainer } from "./styles";
import { Minicart } from "./components/Minicart";
import { AddressForm } from "./components/AddressForm";
import { PaymentForm } from "./components/PaymentForm";

export function Checkout() {

    return (
        <CheckoutContainer>
            <form>
                <fieldset>
                    <legend>Complete seu pedido</legend>

                    <AddressForm />

                    <PaymentForm />
                    
                </fieldset>

                <fieldset className="resume-cart">
                    <legend>Cafés selecionados</legend>

                    <GroupContainer className="resume-cart">
                        <Minicart />
                        <button className='submit-button' type='submit'>CONFIRMAR PEDIDO</button>
                    </GroupContainer>
                </fieldset>
            </form>
        </CheckoutContainer>
    )
}