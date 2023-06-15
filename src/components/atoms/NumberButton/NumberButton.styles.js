import styled from "styled-components";

export const NumberButtonStyles = styled.div`
   -webkit-box-shadow: 0px 0px 3px -2px rgba(0, 0, 0, 0.98);
   align-items: center;
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 15%;
   box-shadow: 0px 0px 3px -2px rgba(0, 0, 0, 0.98);
   cursor: pointer;
   display: flex;
   font-size: 1.2rem;
   height: 58px;
   justify-content: center;
   transition: all 0.3s ease-in-out;
   width: 58px;

   &:hover {
      transform: scale(0.8);
   }

   img {
      padding: 5px;
      width: 80%;
   }
`;
