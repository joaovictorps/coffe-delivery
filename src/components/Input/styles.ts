import { styled } from "styled-components";
import { textS } from "../../styles/typography";


export const InputContainer = styled.input`
    padding: .75rem;
    border-radius: 4px;

    border: 1px solid ${props => props.theme['b-button']};
    background: ${props => props.theme['b-input']};

    ${textS} 
    color: ${props => props.theme['b-text']};

    &::placeholder {
        ${textS}
        color: ${props => props.theme['b-label']};
    }

    &.small {
        width: 3.75rem;
        max-width: 100%;
    }

    &.medium {
        width: 12.5rem;
        max-width: 100%;
    }

    &.large {
        flex-grow: 1;
        flex-basis: 0;
        width: auto;
        max-width: none;
    }

    &.extra-large {
        width: 100%;
        max-width: 100%;
    }
`
