import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CheckboxOneVariant } from '../CheckboxOneVariat/CheckboxOneVariat';
import { StyledButton, VariantsList } from './Checkbox.styled';
import { useSelector } from 'react-redux';
import { selectChoosedVariants } from '../../redux/selectors';
import { useNodeId } from 'reactflow';

export const Checkbox = () => {
    const [areVariantsOpen, setAreVariantsOpen] = useState(false);
    const [choosedVariant, setChoosedVariant] = useState('Вибрати значення');
    const choosedVariants = useSelector(selectChoosedVariants);
    const nodeId = useNodeId();
    const lastIndex = choosedVariants.findIndex(node => node.nodeId === nodeId);
    const arrayOfChosenValues = choosedVariants.slice(0, lastIndex+1);
    const stringOfChosenValues = arrayOfChosenValues.map(value => value.value).join('-');
    const buttonText = lastIndex===-1 ? 'Вибрати значення' : `Варіант ${stringOfChosenValues}`;

    return (
        <>
            <StyledButton areVariantsOpen={areVariantsOpen}
                onClick={()=>setAreVariantsOpen(!areVariantsOpen)}
            >
                {buttonText}
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