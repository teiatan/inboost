import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CheckboxOneVariant } from '../CheckboxOneVariat/CheckboxOneVariat';
import { StyledButton, VariantsList } from './Checkbox.styled';

export const Checkbox = () => {
    const [areVariantsOpen, setAreVariantsOpen] = useState(false);
    return (
        <>
            <StyledButton areVariantsOpen={areVariantsOpen}
                onClick={()=>setAreVariantsOpen(!areVariantsOpen)}
            >
                Вибрати значення
                {areVariantsOpen ? 
                <MdOutlineKeyboardArrowUp color='#2B7CFA' size='20px'/> :
                <MdOutlineKeyboardArrowDown color='#2B7CFA'size='20px'/>}
            </StyledButton>
          
            {areVariantsOpen && 
                <VariantsList style={{}}>
                    {[1, 2, 3, 4].map(variant => <CheckboxOneVariant key={variant} value={variant} />)}
                </VariantsList>}
         </>
    )
}