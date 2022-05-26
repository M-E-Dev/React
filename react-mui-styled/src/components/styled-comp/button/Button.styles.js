import styled from 'styled-components'

export const StyledButton1 = styled.button`
border: none;
margin: 2px;
color: chocolate;
padding: 12px 28px;
text-align: center;
font-size: 18px;
background-color: blueviolet;
`
export const StyledButton2 = styled.button`
border: none;
margin: 2px;
color: chocolate;
padding: 12px 28px;
text-align: center;
font-size: 18px;
background-color: ${props => props.dark ? "grey" : "white"};

`