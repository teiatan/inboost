import { Checkbox } from "../Checkbox/Checkbox"
import { StyledContainer, StyledDespription } from "./CustomContainer.styled";

export const CustomContainer = () => {
    return(
        <StyledContainer>
            <StyledDespription></StyledDespription>
            <Checkbox />
        </StyledContainer>
    );
}