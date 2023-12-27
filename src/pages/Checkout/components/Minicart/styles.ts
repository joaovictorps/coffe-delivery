import { styled } from "styled-components";
import { textL, textM, textS } from "../../../../styles/typography";

export const MinicartContainer = styled.div`

`

export const MinicartList = styled.ul`
    li {
        &::after {
            content: "";
            margin: 1.5rem 0;
            height: 1px;
            width: 100%;
            display: block;
            background: ${props => props.theme["b-button"]};
    
        }
    }
`

export const MinicartSummary = styled.div`
    margin-bottom: 1.5rem;
    
    dl {
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            &:not(:last-child) {
                margin-bottom: .75rem;
            }

            dt, dd {
                color: ${props => props.theme['b-text']};
                
                &.total {
                    ${textL}
                    font-weight: 700;
                    color: ${props => props.theme['b-subtitle']};
                }
            }
            
            dt {
                ${textS}
            }
            
            dd {
                ${textM}
            }
        }        
    }
`