import styled from "styled-components";

export const ChosenNumbersStyles = styled.div`
   width: 100%;
   background-color: ${({ theme }) => theme.colors.textHeader};
   color: ${({ theme }) => theme.colors.white};
   p {
      width: 100%;
      margin: 12px 0;
   }
   .chosenTitle {
      font-size: 1.5rem;
   }
   .chosenNumber {
      padding: 8px;
      margin-top: 20px;
      font-weight: 700;
      font-size: 1.5rem;
   }
`;
