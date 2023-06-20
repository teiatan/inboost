import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CheckboxOneVariant } from '../CheckboxOneVariat/CheckboxOneVariat';

export const Checkbox = () => {
    const [areVariantsOpen, setAreVariantsOpen] = useState(false);
    return (
        <>
            <button style={{width: '100%', minHeight: '30px', backgroundColor: '#FFFFFF', border: `1px solid ${areVariantsOpen ? '#ECF3FF' : '#489F77'}`, borderRadius: '3px', marginTop: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '5px', cursor: 'pointer'}}
                onClick={()=>setAreVariantsOpen(!areVariantsOpen)}
            >
                Вибрати значення
                {areVariantsOpen ? 
                <MdOutlineKeyboardArrowUp color='#2B7CFA' size='20px'/> :
                <MdOutlineKeyboardArrowDown color='#2B7CFA'size='20px'/>}
            </button>
          
            {areVariantsOpen && 
                <ul style={{listStyle: 'none', backgroundColor: '#FFFFFF', marginTop: '-5px', marginBottom: 0, padding: 0, border: '1px solid #ECF3FF', borderRadius: '0 0 3px 3px'}}>
                    {[1, 2, 3, 4].map(variant => <CheckboxOneVariant key={variant} value={variant} />)}
                </ul>}
         </>
    )
}