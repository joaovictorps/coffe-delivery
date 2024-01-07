import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { OrderPlacedContainer, ResumeSection, IconContainer } from "./styles";
import scooterDeliveryImage from "../../assets/scooter-delivery-illustration.png";
import { defaultTheme } from "../../styles/themes/default";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function OrderPlaced() {
  const getFutureTime = () => {
    const currentDate = new Date();

    const futureDate = new Date(currentDate.getTime() + 30 * 60000);

    const isoString = futureDate.toISOString();

    return isoString;
  };

  const {form} = useContext(OrderContext);

  const {city, neighborhood, number, state, street} = form.data.address

  return (
    <OrderPlacedContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>

      <div className='wrapper'>
        <ResumeSection>
          <article>
            <IconContainer color="purple">
              <MapPin size={16} weight="fill" color={defaultTheme.bg} />
            </IconContainer>

            <div>
              <p>
                Entrega em <strong>{street}, {number}</strong>
                <br />
                {neighborhood} - {city}, {state}
              </p>
            </div>
          </article>

          <article>
            <IconContainer color="yellow">
              <Timer size={16} weight="fill" color={defaultTheme.bg} />
            </IconContainer>

            <div>
              <p>Previsão de entrega</p>
              <time dateTime={getFutureTime()}>20 min - 30 min</time>
            </div>
          </article>

          <article>
            <IconContainer color="yellowDark">
              <CurrencyDollar size={16} weight="fill" color={defaultTheme.bg} />
            </IconContainer>

            <div>
              <p>Pagamento na entrega
                <br/>
                <strong>{form.data.paymentMethodSelected}</strong>
              </p>
              
            </div>
          </article>
        </ResumeSection>

        <section className="image-container">
          <img
            src={scooterDeliveryImage}
            alt="Ilustação de um homem em uma scooter fazendo entrega"
          />
        </section>
      </div>
    </OrderPlacedContainer>
  );
}
