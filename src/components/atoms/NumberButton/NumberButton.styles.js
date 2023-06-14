import styled from "styled-components";

export const NumberButtonStyles = styled.div`
   background-color: ${({ theme }) => theme.colors.white};
   width: 58px;
   height: 58px;
   border-radius: 15%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.2rem;
   -webkit-box-shadow: 0px 0px 3px -2px rgba(0, 0, 0, 0.98);
   box-shadow: 0px 0px 3px -2px rgba(0, 0, 0, 0.98);
   cursor: pointer;
   transition: all 0.3s ease-in-out;

   &:hover {
      transform: scale(0.8);
   }

   img {
      padding: 5px;
      width: 80%;
   }
`;
