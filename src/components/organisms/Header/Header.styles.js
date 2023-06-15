import styled from "styled-components";

export const HeaderStyles = styled.div`
   align-items: start;
   color: ${({ theme }) => theme.colors.textHeader};
   display: flex;
   flex-wrap: wrap;
   font-size: 1.3em;
   gap: 5px;
   justify-content: space-between;
   padding: 0 20px;
   position: absolute;
   top: 20px;
   width: 100%;

   .textHeaderRight {
      font-size: 1rem;
   }
`;
