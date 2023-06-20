import { StyledInput, StyledLabel, StyledLi } from './CheckboxOneVariat.styled';

export const CheckboxOneVariant = ({value, choosedVariant, setChoosedVariant, setAreVariantsOpen}) => {

    const onChange = (e) => {
      setChoosedVariant(value);
      setAreVariantsOpen(false);
    };

    return (
        <StyledLi>

            <StyledInput 
                id={`variant${value}`} 
                type="checkbox" 
                onChange={onChange} 
                value={value}
                checked={value === choosedVariant}
            />
            
            <StyledLabel 
                htmlFor={`variant${value}`}
            >
                    Варіант {value}
            </StyledLabel>
            
        </StyledLi>
    )
}