import styled from "styled-components";

export const HeaderStyles = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    padding: 0 20px;
    align-items: start;
   width: 100%;
   /* height: 100%; */
   /* border: red solid 2px; */
   gap: 5px;
   color: ${({ theme }) => theme.colors.textHeader};
   font-size: 1.3em;
   
   .textHeaderRight {
    font-size: 1rem;
   }
`;