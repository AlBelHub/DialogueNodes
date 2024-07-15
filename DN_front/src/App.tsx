import React, { useCallback, useEffect, useState } from 'react';
import  { Edge, Node, useOnSelectionChange } from 'reactflow';
import Flow from './Flow';

import "./styles/App.scss";
import MenuContext from './MenuContext';
import useStore, { FlowState } from './store';


function App() {

  const [menu, setMenu] = useState<Boolean>(false);
  const [cursorData, setCursorData] = useState<Array<number>>([0,0]);
  
  const [selectedNodes, setSelectedNodes] = useState<Node>();
  const [selectedEdges, setSelectedEdges] = useState<Edge>();


  //GET NODE ID

  const selector = (state : FlowState) => ({
    nodes: state.nodes,
  });

  const { nodes } = useStore(selector);
  
  let node = null;

  if (selectedNodes) {
    node = nodes.filter((item : Node) => item.id == selectedNodes)[0];
  }
  //

  const onChange = useCallback(({ nodes, edges }) => {
    setSelectedNodes(nodes.map((node) => node.id));
    setSelectedEdges(edges.map((edge) => edge.id));
  }, []);

  useOnSelectionChange({
    onChange,
  });

  return (
    <>
    <div className="App-settings"
      onContextMenu={(e) => {
        e.preventDefault();
        setMenu(!menu);
        setCursorData([e.pageX,e.pageY]);
      }}
    >
      

      {/* Context menu */}
        <MenuContext menu={menu} cursorData={cursorData} />
      
      {/* TOP Container */}
      <div className="top-container">

        <div className="company-attr">
          <div className="comp-img">img</div>
          <div className="comp-name">name</div>
        </div>

        <div className="doc-name">doc-name</div>

      </div>

      {/* SELECTED NODE \ EDGE */}

      <div className="temp">
        <p>Selected node: {node ? node.type + " " + node.id : "mt"}</p>
        <p>Selected edge: {selectedEdges}</p>
      </div>

      {/* ReactFlow lives here */}
      <div className='flow-container'>
        <Flow />
      </div>  
    </div>
    </>
  );
}

export default App;