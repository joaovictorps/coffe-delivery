import { styled } from "styled-components";
import { titleL } from "../../../../styles/typography";

export const ProductsContainer = styled.section`
    h2 {
        ${titleL}
        color: ${props => props.theme['b-subtitle']};
        margin-bottom: 2.125rem;
    }

    > ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5rem 2rem;
    }
`