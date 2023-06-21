import { createSlice } from '@reduxjs/toolkit';
import { MarkerType } from 'reactflow';

const initialNodes = [
  { id: '1', type: 'Node', position: { x: 10, y: 10 }, zindex: 1000 }
];

const initialState = {
  nodes: initialNodes,
  edges: [],
  choosedVariants: [],
  allVariants: [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5],
    [1,3,5,7,9],
    ['a','b','c','d']
  ]
};

export const nodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {
    setNode(state, {payload}) {

      const {nodeId, value} = payload;

      const nextNodeConnectionIndex = state.nodes.findIndex(node => Number(node.id) === Number(nodeId)+1);
      
      if(nextNodeConnectionIndex === -1) {
        const x = state.nodes[state.nodes.length -1].position.x + 150;
        const y = state.nodes[state.nodes.length -1].position.y + 155;
        state.nodes.push({ 
          id: `${Number(nodeId)+1}`, 
          type: 'Node', 
          position: { x, y }, 
          zindex:  1000-Number(nodeId)
        });
        state.edges.push({ 
          id: `${nodeId}-${Number(nodeId)+1}`, 
          source: `${nodeId}`, 
          target: `${Number(nodeId)+1}`, 
          type: 'smoothstep', 
          markerEnd: {type: MarkerType.Arrow}
        });
        state.choosedVariants.push({nodeId, value});
        return;
      };

      state.choosedVariants[nextNodeConnectionIndex-1].value = value;
    }
  }
});

export const { setNode } = nodeSlice.actions;

export const nodeReducer = nodeSlice.reducer;
