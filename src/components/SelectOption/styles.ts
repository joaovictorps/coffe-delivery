import { styled } from "styled-components";

export const SelectOptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .25rem;
    
    padding: 0 .5rem;
    height: 100%;

    background: ${props => props.theme["b-button"]};
    border-radius: 6px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
            color: ${props => props.theme["purple-500"]}
        }
    }

    input {
        width: 20px;
        border: none;
        background: transparent;
        text-align: center;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`