import { styled } from "styled-components";
import { buttonM, textM } from "../../../../styles/typography";

export const MinicartCardContainer = styled.article`
    display: flex;
    gap: 1.25rem;
    padding: .5rem .25rem;

    img {
        width: 4rem;
        height: 4rem;
    }

    .middle {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        flex: 1;

        h3 {
            ${textM}
            font-weight: 400;
            color: ${props => props.theme["b-subtitle"]};
        }
        

        &--select-container {
            display: flex;

            button.remove-product {
                cursor: pointer;
                margin-left: .5rem;
                padding: .4125rem .5rem;
                gap: .25rem;
                
                display: flex;
                align-items: center;
                justify-content: center;

                border: none;
                border-radius: 6px;
                background: ${props => props.theme["b-button"]};

                ${buttonM}
                color: ${props => props.theme["b-text"]};

                svg {
                    color: ${props => props.theme["purple-500"]};
                }

                &:hover {
                    background: ${props => props.theme["b-hover"]};
                    color: ${props => props.theme["b-subtitle"]};

                    svg {
                        color: ${props => props.theme["purple-700"]};
                    }
                }
            }
        }
    }

    .price {
        ${textM}
        font-weight: 700;
        color: ${props => props.theme['b-text']};
    }
`