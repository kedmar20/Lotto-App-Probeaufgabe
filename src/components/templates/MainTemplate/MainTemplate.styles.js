import styled from "styled-components";

export const MainTemplateStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroundTemplate};
    width: 480px;
    height: 560px;
    border: green solid 2px;
`;