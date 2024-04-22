import styled from 'styled-components'

export const ButtonStyled = styled.button<{ size: number, color: string }>`
    width: ${(props) => props.size}px;
    min-height: max-content;
      ${(props) => props.color === "blue" ? `background-color:#6878D1` : `color: white`}
  ${(props) => props.color === "green" ? `color:#AEEDD0` : `color: white`}
  ${(props) => props.color === "pink" ? `color:#EEAFBC` : `color: white`}
   `
export const ButtonOutline = styled(ButtonStyled)`
  display: flex;
  justify-content: center;
   border: 2px solid black;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
  min-height: min-content;
   width: ${(props) => props.size}px;
  min-width: max-content;
    ${(props) => props.color === "blue" ? `backgroung-color:#6878D1` : `color: white`}
  ${(props) => props.color === "green" ? `color:#AEEDD0` : `color: white`}
  ${(props) => props.color === "pink" ? `color:#EEAFBC` : `color: white`}
   `
// Сделай высоту и ширину относительно текста внутри
export const ButtonGhost = styled(ButtonStyled)`
  display: inline-block;
   font-weight: 300;
  letter-spacing: 1px;
  vertical-align: middle;
  border: 1px solid;
  box-sizing: border-box;
  min-height: min-content;
  width: ${(props) => props.size}px;
  min-width: max-content;
  ${(props) => props.color === "blue" ? `backgroung-color:#6878D1; color:white` : `color: white`}
  ${(props) => props.color === "green" ? `backgroung-color:#AEEDD0; color:black` : `color: white`}
  ${(props) => props.color === "pink" ? `backgroung-color:#EEAFBC; color:white` : `color: white`}
` 
