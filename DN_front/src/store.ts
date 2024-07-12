import { create } from 'zustand';

import initNodes from './flow_initState/nodes';
import initEdges from './flow_initState/edges';
import { addEdge, applyEdgeChanges, applyNodeChanges, Connection, Edge, Node, EdgeChange, NodeChange, OnConnect, OnEdgesChange, OnNodesChange } from 'reactflow';

type FlowState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[]) => void;
};

const useStore = create<FlowState>((set, get) => ({
    nodes: initNodes,
    edges: initEdges,
    onNodesChange: (changes: NodeChange[]) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    onConnect: (connection: Connection) => {
      set({
        edges: addEdge(connection, get().edges),
      });
    },
    setNodes: (nodes: Node[]) => {
      set({ nodes });
    },
    setEdges: (edges: Edge[]) => {
      set({ edges });
    },
  }));
  
  export default useStore;