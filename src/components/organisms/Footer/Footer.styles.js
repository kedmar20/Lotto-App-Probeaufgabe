import styled from "styled-components";

export const FooterStyles = styled.div`
   display: flex;
   /* flex-wrap: wrap; */
   justify-content: start;
   padding: 0 20px;
   align-items: start;
   width: 100%;
   gap: 5px;
   color: ${({ theme }) => theme.colors.textHeader};
   font-size: 1.3em;
   position: absolute;
   bottom: 10px;

   img {
      width: 30px;
      color: ${({ theme }) => theme.colors.textHeader};
      transition: all 0.3s ease-in-out;

      &:hover {
         transform: scale(0.8);
      }
   }

   span {
      /* width: 13vw; */
      padding: 3px 8px 0;
   }

   button {
      width: 100px;
      position: absolute;
      right: 5%;
      background-color: ${({ theme }) => theme.colors.cross};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 25px;
      border: none;
      padding: 6px 0;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
         transform: scale(0.8);
      }
   }
`;
