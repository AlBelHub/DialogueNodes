import React from 'react';
import { useShallow } from 'zustand/react/shallow';
import ReactFlow from 'reactflow';

import TextUpdaterNode from './flow_nodes/textNode';
import ChoiceNode from './flow_nodes/choiceNode';

import 'reactflow/dist/base.css';


import useStore from './store';

import { FlowState } from './store';
import EndDialogue from './flow_nodes/EndDialogue';
import StartDialogue from './flow_nodes/StartDialogue';

const selector = (state : FlowState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect
});

const nodeTypes = 
{ 
  textUpdater: TextUpdaterNode, 
  ChoiceNode: ChoiceNode,
  EndDialogue: EndDialogue,
  StartDialogue: StartDialogue,
};


function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector),
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    />
  );
}

export default Flow;
