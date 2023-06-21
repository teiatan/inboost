import { Handle, Position, useNodeId } from 'reactflow';
import { useSelector } from 'react-redux';
import { selectNodes } from 'redux/selectors';
import { CustomContainer } from '../CustomContainer/CustomContainer';
import 'reactflow/dist/style.css';

export const Node = ({ data }) => {
  const nodeId = useNodeId();
  const nodes = useSelector(selectNodes);

  const isFirstNode = nodes[0].id === nodeId;

  let sourceHandleBackgroundColor = {backgroundColor: '#ADB5BD'};
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
        position={isFirstNode ? Position.Bottom : Position.Right}  
        style={{width: '1px', border:'none', zIndex:-1, ...sourceHandleBackgroundColor}}
      />
    </>
  );
  }