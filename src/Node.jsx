import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import 'reactflow/dist/style.css';

export const Node = ({ data }) => {
    const [areVariantsOpen, setAreVariantsOpen] = useState(false);
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
  
    return (
      <>
        <Handle type="target" position={Position.Top} />
        <div style={{width: '160px', height: '85px', backgroundColor: '#D1E7DD', borderRadius: '3px', padding: '17px 2px 2px 2px'}}>
          <div style={{width: '100%', height: '50px', borderRadius: '3px', backgroundColor: '#FFFFFF'}}></div>
          <button style={{width: '100%', minHeight: '30px', backgroundColor: '#FFFFFF', border: `1px solid ${areVariantsOpen ? '#ECF3FF' : '#489F77'}`, borderRadius: '3px', marginTop: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '5px', cursor: 'pointer'}}
            onClick={()=>setAreVariantsOpen(!areVariantsOpen)}
          >
            Вибрати значення
            {areVariantsOpen ? 
            <MdOutlineKeyboardArrowUp color='#2B7CFA' size='20px'/> :
            <MdOutlineKeyboardArrowDown color='#2B7CFA'size='20px'/>}
          </button>
          {areVariantsOpen && <ul style={{listStyle: 'none', backgroundColor: '#FFFFFF', marginTop: '-5px', marginBottom: 0, padding: 0, border: '1px solid #ECF3FF', borderRadius: '0 0 3px 3px'}}>
                <li style={{minHeight: '25px', borderBottom: '1px solid #ECF3FF', boxSizing: 'content-box', display: 'flex', alignItems: 'center', gap: '7px'}}>
                    <input id="variant1" type="checkbox" name="text" onChange={onChange} className="nodrag" value={1}/>
                    <label htmlFor="variant1">Варіант 1</label>
                </li>
                <li style={{minHeight: '25px', borderBottom: '1px solid #ECF3FF', boxSizing: 'content-box', display: 'flex', alignItems: 'center', gap: '7px'}}>
                    <input id="variant2" type="checkbox" name="text" onChange={onChange} className="nodrag" value={2}/>
                    <label htmlFor="variant2">Варіант 2</label>
                </li>
                <li style={{minHeight: '25px', borderBottom: '1px solid #ECF3FF', boxSizing: 'content-box', display: 'flex', alignItems: 'center', gap: '7px'}}>
                    <input id="variant3" type="checkbox" name="text" onChange={onChange} className="nodrag" value={3}/>
                    <label htmlFor="variant3">Варіант 3</label>
                </li>
            </ul>}
        </div>

        <Handle type="source" position={Position.Bottom} id="a" />
      </>
    );
  }