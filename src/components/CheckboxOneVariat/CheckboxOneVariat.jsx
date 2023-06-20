import { useNodeId } from 'reactflow';
import { StyledInput, StyledLabel, StyledLi } from './CheckboxOneVariat.styled';
import { useDispatch } from 'react-redux';
import { setNode } from '../../redux/slice';

export const CheckboxOneVariant = ({value, choosedVariant, setChoosedVariant, setAreVariantsOpen}) => {
    const nodeId = useNodeId();
    const dispatch = useDispatch();

    const onChange = (e) => {
      setChoosedVariant(value);
      setAreVariantsOpen(false);
      dispatch(setNode({nodeId, value}));
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