import styled from "@emotion/styled";

export const StyledButton = styled.button`
    width: 100%;
    min-height: 30px; 
    background-color: #FFFFFF;
    border: 1px solid ${({areVariantsOpen}) =>  areVariantsOpen ? ('#ECF3FF') : ('#489F77')}; 
    border-radius: 3px;
    margin-top: 3px; 
    display: flex; 
    align-items: center;
    justify-content: space-between; 
    padding-left: 5px;
    cursor: pointer;
`;

export const VariantsList = styled.ul`
    list-style: none;
    background-color: #FFFFFF;
    margin-top: -5px;
    margin-bottom: 0;
    padding: 0;
    border: 1px solid #ECF3FF;
    border-radius: 0 0 3px 3px;
    z-index: 10000;
`;