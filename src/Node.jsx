import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import 'reactflow/dist/style.css';

export const Node = ({ data }) => {
    const [areVariantsOpen, setAreVariantsOpen] = useState(false);
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);

    const handleStyle = { left: 10 };
  
    return (
      <>
        <Handle type="target" position={Position.Top} />

        <div style={{width: '160px', height: '85px', backgroundColor: '#D1E7DD', borderRadius: '3px', padding: '17px 2px 2px 2px'}}>
          <div style={{width: '100%', height: '50px', borderRadius: '3px', backgroundColor: '#FFFFFF'}}></div>
          <button style={{width: '100%', height: '30px', backgroundColor: '#FFFFFF', border: '1px solid #489F77', borderRadius: '3px', marginTop: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '5px'}}>
            Вибрати значення
            {areVariantsOpen ? 
            <MdOutlineKeyboardArrowUp color='#2B7CFA' size='20px'/> :
            <MdOutlineKeyboardArrowDown color='#2B7CFA'size='20px'/>}
          </button>
          {areVariantsOpen && <ul style={{listStyle: 'none'}}>
            <li>
              <input id="text" type="checkbox" name="text" onChange={onChange} className="nodrag" />
              <label htmlFor="text">Варіант 1</label>
            </li>
            <li>
              <input id="text" type="checkbox" name="text" onChange={onChange} className="nodrag" />
              <label htmlFor="text">Варіант 2</label>
            </li>
            <li>
              <input id="text" type="checkbox" name="text" onChange={onChange} className="nodrag" />
              <label htmlFor="text">Варіант 3</label>
            </li>
          </ul>}
        </div>

        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
      </>
    );
  }