import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Node } from './Node/Node';
import { MainContainer } from './App.styled';
import { useSelector } from 'react-redux';
import { selectEdges, selectNodes } from '../redux/selectors';

// const initialNodes = [
//   { id: '1', type: 'Node', position: { x: 0, y: 0 }, data: { value: 123 } }
// ];

// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const nodes = useSelector(selectNodes);
  const edges = useSelector(selectEdges);
  const nodeTypes = useMemo(() => ({ Node }), []);

  
  //const setEdges = useCallback(() => {}, []);

  // const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <MainContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        //onNodesChange={onNodesChange}
        //onEdgesChange={onEdgesChange}
        //onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background color="#F9FAFF" style={{backgroundColor: "#F9FAFF"}} gap={12} size={1} />
      </ReactFlow>
    </MainContainer>
  );
};