import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNodeId } from 'reactflow';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { selectAllVariants, selectChoosedVariants } from 'redux/selectors';
import { CheckboxOneVariant } from '../CheckboxOneVariat/CheckboxOneVariat';
import { StyledButton, VariantsList } from './Checkbox.styled';

export const Checkbox = () => {
    const [areVariantsOpen, setAreVariantsOpen] = useState(false);
    const [choosedVariant, setChoosedVariant] = useState('');

    const choosedVariantsArray = useSelector(selectChoosedVariants);
    const nodeId = useNodeId();
    let allVariants = useSelector(selectAllVariants)[Number(nodeId)-1];
    if(!allVariants) {allVariants = [1,2,3]};

    const lastNodeIndex = choosedVariantsArray.findIndex(node => node.nodeId === nodeId);
    const arrayOfChosenValuesBeforeThisNode = choosedVariantsArray.slice(0, lastNodeIndex+1);
    const stringOfChosenValues = arrayOfChosenValuesBeforeThisNode.map(item => item.value).join('-');

    const buttonText = lastNodeIndex===-1 ? 'Вибрати значення' : `Варіант ${stringOfChosenValues}`;

    return (
        <>
            <StyledButton areVariantsOpen={areVariantsOpen}
                onClick={()=>setAreVariantsOpen(!areVariantsOpen)}
            >
                {buttonText}
                {areVariantsOpen ? 
                    <MdOutlineKeyboardArrowUp color='#2B7CFA' size='20px'/> :
                    <MdOutlineKeyboardArrowDown color='#2B7CFA'size='20px'/>
                }
            </StyledButton>
          
            {areVariantsOpen && 
                <VariantsList>
                    {allVariants.map(variant => 
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