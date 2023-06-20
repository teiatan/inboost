import { createSlice } from '@reduxjs/toolkit';

const initialNodes = [
  { id: '1', type: 'Node', position: { x: 0, y: 0 } },
  { id: '2', type: 'Node', position: { x: 50, y: 150 } }
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const initialState = {
  nodes: initialNodes,
  edges: initialEdges
};

export const nodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {
    setNode(state, {payload}) {
      const {nodeId, value} = payload;
      const existedNodeIndex = state.nodes.findIndex(node => Number(node.id) === Number(nodeId)+1);
      if(existedNodeIndex === -1) {
        const x = state.nodes[state.nodes.length -1].position.x + 50;
        const y = state.nodes[state.nodes.length -1].position.y + 150;
        state.nodes.push({ id: `${Number(nodeId)+1}`, type: 'Node', position: { x, y } })
        state.edges.push({ id: `${nodeId}-${Number(nodeId)+1}`, source: `${nodeId}`, target: `${Number(nodeId)+1}` })
        return;
      }
      console.log('node exists');
    }
  }
});

export const { 
  setNode
} = nodeSlice.actions;

export const nodeReducer = nodeSlice.reducer;
