import { styled } from "styled-components";
import { buttonG, textM, textS, titleXS } from "../../styles/typography";
import { sideSpacing } from "../../styles/spacing";

export const CheckoutContainer = styled.main`
    ${sideSpacing}
    margin-top: 2.5rem;

    form {
        display: flex;
        gap: 0 2rem;
    }
    
    fieldset {
        border: none;
        flex-grow: 1;

        > div:not(:last-child) {
            margin-bottom: .75rem;
        }

        &.resume-cart {
            flex-grow: 0;
            width: 100%;
            max-width: 28rem;
        }

        legend {
            ${titleXS}
            color: ${props => props.theme["b-subtitle"]};
            margin-bottom: .9375rem;
        }

        .inputs-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem .75rem;
        }
    }

    .submit-button {
        cursor: pointer;
        border-radius: 6px;
        padding: .75rem .5rem;

        background: ${props => props.theme['yellow-500']};
        color: ${props => props.theme['white']};

        ${buttonG}

        &:hover {
            background: ${props => props.theme['yellow-700']};
        }
    }
`

const HEADER_COLORS = {
    yellowDark: 'yellow-700',
    purple: 'purple-500'
} as const

interface headerProps {
    color: keyof typeof HEADER_COLORS
}

export const HeaderGroup = styled.div<headerProps>`
    display: flex;
    gap: .5rem;
    margin-bottom: 2rem;

    svg {
        color: ${props => props.theme[HEADER_COLORS[props.color]]};
    }

    h2 {
        ${textM}
        color: ${props => props.theme["b-subtitle"]};
    }

    p {
        ${textS}
        color: ${props => props.theme["b-text"]};
    }
`

export const GroupContainer = styled.div`
    background: ${props => props.theme["b-card"]};
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;

    &.resume-cart {
        border-radius: 6px 44px;
    }
`