import { createSlice } from '@reduxjs/toolkit';

const initialNodes = [
  { id: '1', type: 'Node', position: { x: 0, y: 0 } },
  { id: '2', type: 'Node', position: { x: 0, y: 200 } }
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
    setNewNode(state, {payload}) {
      state.nodes = payload;
      state.nodes = payload;
    }
  }
});

export const { 
  setNewNode
} = nodeSlice.actions;

export const nodeReducer = nodeSlice.reducer;
