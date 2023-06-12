import styled from "styled-components";

export const FooterStyles = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    padding: 0 20px;
    align-items: start;
   width: 100%;
   gap: 5px;
   color: ${({ theme }) => theme.colors.textHeader};
   font-size: 1.3em;
   position: absolute;
   bottom: 20px; 
`;