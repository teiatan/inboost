import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CheckboxOneVariant } from '../CheckboxOneVariat/CheckboxOneVariat';
import { StyledButton, VariantsList } from './Checkbox.styled';
import { useSelector } from 'react-redux';
import { selectChoosedVariants } from '../../redux/selectors';

export const Checkbox = () => {
    const [areVariantsOpen, setAreVariantsOpen] = useState(false);
    const [choosedVariant, setChoosedVariant] = useState('Вибрати значення');
    const buttonText = useSelector(selectChoosedVariants);
    console.log(buttonText);
    return (
        <>
            <StyledButton areVariantsOpen={areVariantsOpen}
                onClick={()=>setAreVariantsOpen(!areVariantsOpen)}
            >
                {choosedVariant}
                {areVariantsOpen ? 
                <MdOutlineKeyboardArrowUp color='#2B7CFA' size='20px'/> :
                <MdOutlineKeyboardArrowDown color='#2B7CFA'size='20px'/>}
            </StyledButton>
          
            {areVariantsOpen && 
                <VariantsList style={{}}>
                    {[1, 2, 3, 4].map(variant => 
                        <CheckboxOneVariant 
                            key={variant} 
                            value={variant} 
                            choosedVariant={choosedVariant} 
                            setChoosedVariant={setChoosedVariant}
                            setAreVariantsOpen={setAreVariantsOpen}
                    />)}
                </VariantsList>}
         </>
    )
}