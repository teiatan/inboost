import { useCallback } from 'react';
import { StyledInput, StyledLabel, StyledLi } from './CheckboxOneVariat.styled';

export const CheckboxOneVariant = ({value}) => {

    const onChange = useCallback((e) => {
      console.log(e.target.value);
    }, []);

    return (
        <StyledLi>

            <StyledInput 
                id={`variant${value}`} 
                type="checkbox" 
                onChange={onChange} 
                value={value}
            />
            
            <StyledLabel 
                htmlFor={`variant${value}`}
            >
                    Варіант {value}
            </StyledLabel>
            
        </StyledLi>
    )
}