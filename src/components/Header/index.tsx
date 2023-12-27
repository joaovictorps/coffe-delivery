import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer, Location, CartContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/OrderContext";

export function Header() {

    const { products } = useContext(CartContext);

    return (
        <HeaderContainer>
            <NavLink to={"/"}>
                <img src={logo} alt="Coffee Delivery - Ir para a página inicial"/>
            </NavLink>

            <div>
                <Location>
                    <MapPin size={22} weight="fill" />
                    
                    <span>São Paulo, SP</span>
                </Location>

                <nav>
                    <CartContainer>
                        <NavLink to="/checkout" title="Finalizar comprar - Ir para o checkout">
                            {products.length > 0 && <span>{products.length}</span>}
                            <ShoppingCart size={22} weight="fill" />
                        </NavLink>
                    </CartContainer>
                </nav>
            </div>
        </HeaderContainer>
    )
}