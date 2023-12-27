import styled from "styled-components"
import { textL, textM, titleXL } from "../../../../styles/typography"

export const PresentationSectionContainer = styled.section`
  padding: 5.75rem 0;
  display: flex;
  gap: 3.5rem;

  .content {
    flex: 0 0 36.75rem;

    h1 {
      ${titleXL}
      color: ${props => props.theme["b-title"]};
      margin-bottom: 1rem;
    }

    > p {
      ${textL}
      color: ${props => props.theme["b-subtitle"]};
    }
  }

  .image-container {
    flex-grow: 1;
    display: flex;
    align-items: center;

    img {
        max-width: 100%;
        height: auto;
    }
  }

`;


const COLORS = {
    yellowDark: 'yellow-700',
    yellow: 'yellow-500',
    gray: 'b-text',
    purple: 'purple-500'
} as const

interface colorProps {
    color: keyof typeof COLORS
}

export const BenefitsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    gap: 1.25rem 0;

    margin-top: 4.125rem;

    article {
        display: flex;
        gap: .75rem;
        align-items: center;

        p {
            ${textM}
            color: ${props => props.theme["b-text"]};
        }
    }
`

export const BackgroundDiv = styled.div<colorProps>`
    background: ${props => props.theme[COLORS[props.color]]};

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    svg {
        color: ${props => props.theme['white']}
    }
`