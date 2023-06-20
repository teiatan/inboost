import { createSlice } from '@reduxjs/toolkit';

const initialNodes = [
  { id: '1', type: 'Node', position: { x: 0, y: 0 }, data: { value: 123 } }
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
    setChoosedDate(state, {payload}) {
      state.choosedDate = payload;
    }
  }
});

export const { 
  setChoosedDate
} = nodeSlice.actions;

export const nodeReducer = nodeSlice.reducer;
