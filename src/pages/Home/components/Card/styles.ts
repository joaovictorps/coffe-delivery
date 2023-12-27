import { styled } from "styled-components";
import { tag, textS, titleM, titleS } from "../../../../styles/typography";

export const CardContainer = styled.article`
    padding: 0 1.5rem 1.25rem;

    background: ${props => props.theme["b-card"]};
    border-radius: 6px 36px 6px 36px;

    .image-container {
        height: 6.25rem;
        display: flex;
        justify-content: center;
        margin-bottom: 0.75rem;
        
        img {
            transform: translateY(-1.25rem);
            width: 7.5rem;
            height: 7.5rem;
        }
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        margin-bottom: 1rem;

        li {
            padding: 0.25rem 0.5rem;
            border-radius: 100px;
            background: ${props => props.theme["yellow-300"]};
            color: ${props => props.theme["yellow-700"]};
            ${tag}
        }
    }

    h3 {
        ${titleS}
        text-align: center;
        color: ${props => props.theme["b-subtitle"]};
        margin-bottom: 0.5rem;
    }

    p {
        text-align: center;
        ${textS}
        font-weight: 400;
        color: ${props => props.theme["b-label"]};
        margin-bottom: 2.0625rem;
    }

    span {
        ${textS}
        color: ${props => props.theme["b-text"]};

        strong {
            ${titleM}
        }
    }

    .controls-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        height: 2.375rem;
        

        button[type="submit"] {
            width: 2.375rem;
            height: 2.375rem;
            background: ${props => props.theme["purple-700"]};
            cursor: pointer;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                color: ${props => props.theme["white"]};
            }

            &:hover {
                background: ${props => props.theme["purple-500"]}};
            }
        }
    }
`;
