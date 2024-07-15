import { nanoid } from 'nanoid';
import { Node } from 'reactflow';

export default [
  {
    id: "1",
    type: 'StartDialogue',
    data: { label: 'Input' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: -200, y: 0 },
  },
  {
    id: "2",
    type: 'ChoiceNode',
    data: { label: 'Input' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 0, y: 0 },
  },
  {
    id: "3",
    type: 'textUpdater',
    data: { label: 'Input' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 200, y: 0 },
  },
  {
    id: "4",
    type: "EndDialogue",
    data: { label: 'Default', type: "END" },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 500, y: 0 },
  },
] as Node[];