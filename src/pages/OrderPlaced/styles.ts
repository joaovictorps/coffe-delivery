import { styled } from "styled-components";
import { sideSpacing } from "../../styles/spacing";
import { textL, titleL } from "../../styles/typography";

export const OrderPlacedContainer = styled.main`
  ${sideSpacing};
  margin: 5rem 0;

  header {
    margin-bottom: 2.5rem;

    h1 {
      ${titleL};
      color: ${(props) => props.theme["yellow-700"]};
    }

    p {
      ${textL};
      color: ${(props) => props.theme["b-subtitle"]};
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    gap: 6.375rem;

    section {
      flex: 1;
      flex-basis: 50%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export const ResumeSection = styled.section`
  padding: 2.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme["yellow-500"]},
      ${(props) => props.theme["yellow-700"]},
      ${(props) => props.theme["purple-500"]}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  article {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;

    &:last-of-type {
        margin-bottom: 0;
    }
  }
`;

const BACKGROUND_COLORS = {
  yellow: "yellow-500",
  yellowDark: "yellow-700",
  purple: "purple-500",
} as const;

interface backgroundColorProps {
  color: keyof typeof BACKGROUND_COLORS;
}

export const IconContainer = styled.div<backgroundColorProps>`
  background-color: ${(props) => props.theme[BACKGROUND_COLORS[props.color]]};
  padding: 0.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;
