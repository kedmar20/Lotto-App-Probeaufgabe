import styled from "styled-components";

export const MainTemplateStyles = styled.div`
   -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.98);
   align-items: center;
   background-color: ${({ theme }) => theme.colors.backgroundTemplate};
   box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.98);
   border-radius: 1%;
   display: flex;
   flex-wrap: wrap;
   height: 560px;
   justify-content: center;
   margin: auto;
   position: relative;
   width: 480px;
`;
