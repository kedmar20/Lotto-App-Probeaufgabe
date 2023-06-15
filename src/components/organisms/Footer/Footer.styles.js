import styled from "styled-components";

export const FooterStyles = styled.div`
   align-items: start;
   bottom: 10px;
   color: ${({ theme }) => theme.colors.textHeader};
   display: flex;
   font-size: 1.3em;
   gap: 5px;
   justify-content: start;
   padding: 0 20px;
   position: absolute;
   width: 100%;

   img {
      color: ${({ theme }) => theme.colors.textHeader};
      transition: all 0.3s ease-in-out;
      width: 30px;

      &:hover {
         transform: scale(0.8);
      }
   }

   span {
      padding: 3px 8px 0;
   }

   button {
      background-color: ${({ theme }) => theme.colors.cross};
      border: none;
      border-radius: 25px;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      padding: 6px 0;
      position: absolute;
      right: 5%;
      transition: all 0.3s ease-in-out;
      width: 100px;

      &:hover {
         transform: scale(0.8);
      }
   }
`;
