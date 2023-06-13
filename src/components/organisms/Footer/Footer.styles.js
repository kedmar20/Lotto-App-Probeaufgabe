import styled from "styled-components";

export const FooterStyles = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: start;
   padding: 0 20px;
   align-items: start;
   width: 100%;
   gap: 5px;
   color: ${({ theme }) => theme.colors.textHeader};
   font-size: 1.3em;
   position: absolute;
   bottom: 20px;

   img {
      width: 3vw;
      color: ${({ theme }) => theme.colors.textHeader};
   }

   span {
      width: 13vw;
   }

   button {
      width: 13vw;
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
         transform: scale(1.1);
      }
   }
`;
