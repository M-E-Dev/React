import styled from "styled-components";

export default styled.div`
background-color: beige;
margin: auto;
height: 100vh;
width: 100%;
display: flex;
flex-direction: ${props => props.col ? "column" : "row"};
`