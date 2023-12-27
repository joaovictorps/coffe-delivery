import { styled } from "styled-components";
import { buttonM } from "../../../../../styles/typography";

export const PaymentOptionContainer = styled.button`
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: .75rem;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    height: 100%;

    background: ${props => props.theme['b-button']};
    color: ${props => props.theme['b-text']};
    ${buttonM}

    svg {
        color: ${props => props.theme['purple-500']};
    }

    &:hover {
        background: ${props => props.theme['b-hover']};
        color: ${props => props.theme['b-subtitle']};
    }

    &.is-selected {
        background: ${props => props.theme['purple-300']};
        color: ${props => props.theme['b-text']};
        box-shadow:  0 0 0 1px ${props => props.theme['purple-500']};
    }
`