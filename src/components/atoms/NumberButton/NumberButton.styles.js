import styled from "styled-components";

export const NumberButtonStyles = styled.div`
 background-color: ${({ theme }) => theme.colors.white};
    width: 58px;
    height: 58px;
    /* border: blue solid 1px; */
    border-radius: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    -webkit-box-shadow: 0px 0px 3px -2px rgba(0,0,0,0.98); 
box-shadow: 0px 0px 3px -2px rgba(0,0,0,0.98);
`