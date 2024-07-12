import { Node } from 'reactflow';

export default [
  {
    id: 'horizontal-1',
    type: 'textUpdater',
    data: { label: 'Input' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 0, y: 0 },
  },

  {
    id: 'horizontal-2',
    data: { label: 'Default' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 300, y: 0 },
  },
  {
    id: 'horizontal-3',
    type: 'output',
        targetPosition: 'left',
    sourcePosition: 'right',
    data: { label: 'Output' },
    position: { x: 400, y: 0 },
  },
] as Node[];