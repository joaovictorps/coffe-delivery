import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BackgroundDiv, BenefitsList, PresentationSectionContainer } from "./styles";
import coffeeDeliveryImage from "../../../../assets/coffee-delivery-demonstration.png";


export function PresentationSection() {

    return (
        <PresentationSectionContainer>
                <div className="content">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>

                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <BenefitsList>
                        <article>
                            <BackgroundDiv color="yellowDark">
                                <ShoppingCart size={16} weight="fill" />
                            </BackgroundDiv>
                            <p>Compra simples e segura</p>
                        </article>

                        <article>
                            <BackgroundDiv color="gray">
                                <Package size={16} weight="fill" />
                            </BackgroundDiv>
                            <p>Embalagem mantém o café intacto
                            </p>
                        </article>

                        <article>
                            <BackgroundDiv color="yellow">
                                <Timer size={16} weight="fill" />
                            </BackgroundDiv>
                            <p>Entrega rápida e rastreada</p>
                        </article>

                        <article>
                            <BackgroundDiv color="purple">
                                <Coffee size={16} weight="fill" />
                            </BackgroundDiv>
                            <p>O Café chega fresquinho até você</p>
                        </article>
                    </BenefitsList>
                </div>
                
                <div className="image-container">
                    <img src={coffeeDeliveryImage} alt="Copo de café com o logo da Coffee Delivery e grãos de café ao lado" />
                </div>
            </PresentationSectionContainer>
    )
}