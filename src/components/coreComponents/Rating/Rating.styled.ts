import styled from "styled-components";


export const RatingStar = styled.b`
    font-size:25px;
    outline: none; 
    border-color: white; 
    overflow:hidden; 
`

export const RatingButton = styled.button<{ default: number, inRange: boolean }>`
    border: none; 
    outline: none; 
    background: none; 
    ${(props) => props.default === -1 && `background: white`}
    ${(props) => props.inRange ? `background: yellow` : `background: white`}
`
