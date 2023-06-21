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
        if (value !== 'Вибрати значення') {
            dispatch(setNode({nodeId, value}));
        } else {
            dispatch(cutNodeList(nodeId));
        };
        
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