import { useNodeId } from 'reactflow';
import { useDispatch } from 'react-redux';
import { cutNodeList, setNode } from 'redux/slice';
import { StyledInput, StyledLabel, StyledLi } from './CheckboxOneVariat.styled';

export const CheckboxOneVariant = ({value, choosedVariant, setChoosedVariant, setAreVariantsOpen}) => {
    const nodeId = useNodeId();
    const dispatch = useDispatch();

    const onChange = (e) => {
        setChoosedVariant(value);
        setAreVariantsOpen(false);
        dispatch(setNode({nodeId, value}));
        if (value === 'Вибрати значення') {
            dispatch(cutNodeList(nodeId));
        };
        
    };

    const labelText = (value === 'Вибрати значення') ? value : `Варіант ${value}`;

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
                {labelText}
            </StyledLabel>
            
        </StyledLi>
    )
}