import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ReactFlow, { Controls,  Background } from 'reactflow';
import { selectEdges, selectNodes } from 'redux/selectors';
import { Node } from './Node/Node';
import { MainContainer } from './App.styled';
import 'reactflow/dist/style.css';

export default function App() {
  const nodes = useSelector(selectNodes);
  const edges = useSelector(selectEdges);
  const nodeTypes = useMemo(() => ({ Node }), []);

  return (
    <MainContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background color="#F9FAFF" style={{backgroundColor: "#F9FAFF"}}/>
      </ReactFlow>
    </MainContainer>
  );
};