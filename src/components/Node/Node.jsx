import { Handle, Position, useNodeId } from 'reactflow';
import { CustomContainer } from '../CustomContainer/CustomContainer';
import 'reactflow/dist/style.css';
import { useSelector } from 'react-redux';
import { selectNodes } from 'redux/selectors';

export const Node = ({ data }) => {
  const nodeId = useNodeId();
  const nodes = useSelector(selectNodes);
  let sourceHandleBackgroundColor = {backgroundColor: 'grey'};
  if(nodes[nodes.length -1].id === nodeId) {
    sourceHandleBackgroundColor = {backgroundColor: 'transparent'};
  }

  return (
    <>
      <Handle 
        type="target" 
        position={Position.Top} 
        style={{backgroundColor: 'transparent', width: '1px', border:'none'}}
      />
      <CustomContainer />
      <Handle 
        type="source" 
        position={Position.Bottom}  
        style={{width: '1px', border:'none', zIndex:-1, ...sourceHandleBackgroundColor}}
      />
    </>
  );
  }