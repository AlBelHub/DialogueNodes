import { nanoid } from 'nanoid';
import { Node } from 'reactflow';

export default [
  {
    id: "1",
    type: 'StartDialogue',
    data: { label: '1' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: -200, y: 0 },
  },
  {
    id: "2",
    type: 'ChoiceNode',
    data: { label: '2' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 0, y: 0 },
  },
  {
    id: "3",
    type: 'textUpdater',
    data: { label: '3' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 200, y: 0 },
  },
  {
    id: "4",
    type: "EndDialogue",
    data: { label: '4', type: "END" },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 500, y: 0 },
  },
] as Node[];