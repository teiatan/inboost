import { Handle, Position } from 'reactflow';
import { CustomContainer } from '../CustomContainer/CustomContainer';
import 'reactflow/dist/style.css';

export const Node = ({ data }) => {

    return (
      <>
        <Handle type="target" position={Position.Top} style={{backgroundColor: 'transparent', width: '1px', border:'none'}}/>
        <CustomContainer />
        <Handle type="source" position={Position.Bottom}  style={{backgroundColor: 'grey', width: '1px', border:'none', zIndex:-1}}/>
      </>
    );
  }