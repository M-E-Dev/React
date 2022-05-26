import styled, { css } from "styled-components";

// CSS & ~ & + . vs araştır Pseudoelements  https://styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting

export default styled.a`
background-color: black;
font-size: 1.2rem;
transition: ease 0.25s all;
text-decoration: none;
color: blanchedalmond;
${props => props.secondary && css`
background-color: blue;
border-radius: 8px;
padding: 8px;
`}
&:hover {
    font-size: 1.5rem;
    opacity: 0.6;
}
`