import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { CustomContainer } from '../CustomContainer/CustomContainer';

export const Node = ({ data }) => {
    
  
    return (
      <>
        <Handle type="target" position={Position.Top} />
        <CustomContainer />
        <Handle type="source" position={Position.Bottom} id="a" />
      </>
    );
  }