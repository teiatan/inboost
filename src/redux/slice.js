import { createSlice } from '@reduxjs/toolkit';

const initialNodes = [
  { id: '1', type: 'Node', position: { x: 10, y: 10 }, zindex: 1000 }
];

const initialEdges = [];

const initialState = {
  nodes: initialNodes,
  edges: initialEdges,
  choosedVariants: []
};

export const nodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {
    setNode(state, {payload}) {
      const {nodeId, value} = payload;
      const existedNodeIndex = state.nodes.findIndex(node => Number(node.id) === Number(nodeId)+1);
      if(existedNodeIndex === -1) {
        const x = state.nodes[state.nodes.length -1].position.x + 80;
        const y = state.nodes[state.nodes.length -1].position.y + 160;
        state.nodes.push({ id: `${Number(nodeId)+1}`, type: 'Node', position: { x, y }, zindex:  1000-(Number(nodeId)+1)});
        state.edges.push({ id: `${nodeId}-${Number(nodeId)+1}`, source: `${nodeId}`, target: `${Number(nodeId)+1}`, type: 'smoothstep' });
        state.choosedVariants.push({nodeId, value});
        return;
      };
      state.choosedVariants[existedNodeIndex-1].value = value;
    }
  }
});

export const { setNode } = nodeSlice.actions;

export const nodeReducer = nodeSlice.reducer;
