import styled from "styled-components";
import { textS } from "../../styles/typography";
import { sideSpacing } from "../../styles/spacing";

export const HeaderContainer = styled.header`
    padding-top: 2rem;
    padding-bottom: 2rem;
    ${sideSpacing}

    display: flex;
    justify-content: space-between;
    
    > div {
        display: flex;
        gap: .75rem;
    }
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    
    padding: 0.5rem;
    border-radius: 6px;
    
    background: ${props => props.theme["purple-300"]};

    svg {
        color: ${props => props.theme["purple-500"]}
    }
    
    span {
        ${textS}
        color: ${props => props.theme["purple-700"]};
    }
`

export const CartContainer = styled.div`
    background: ${props => props.theme["yellow-300"]};
    padding: 0.5rem;
    border-radius: 6px;

    position: relative;

    svg {
        color: ${props => props.theme["yellow-700"]};
    }

    span {
        background: ${props => props.theme["yellow-700"]};
        color: ${props => props.theme["white"]};
        border-radius: 50%;

        width: 1.25rem;
        height: 1.25rem;

        ${textS}
        font-weight: 700;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
    }
`