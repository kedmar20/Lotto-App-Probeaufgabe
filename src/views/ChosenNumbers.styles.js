import styled from "styled-components";

export const ChosenNumbersStyles = styled.div`
   background-color: ${({ theme }) => theme.colors.textHeader};
   color: ${({ theme }) => theme.colors.white};
   width: 100%;
   p {
      margin: 12px 0;
      width: 100%;
   }
   .chosenTitle {
      font-size: 1.5rem;
   }
   .chosenNumber {
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 20px;
      padding: 8px;
   }
`;
