import React, { useState, useSyncExternalStore } from 'react';
import { useShallow } from 'zustand/react/shallow';
import ReactFlow from 'reactflow';
import Flow from './Flow';
import {data} from './ContextData/data';

import TextUpdaterNode from './flow_nodes/textNode';

import "./styles/App.scss";



function App() {

  const [menu, setMenu] = useState<Boolean>(false);
  const [cursorData, setCursorData] = useState<Array<Number>>([0,0]);


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
      {menu && (
        <div className='context-menu' style={{left: cursorData[0] + "px", top: cursorData[1] + "px"}}>
          {
            data.map((item) => (
              <div key={item.id} className="context-menu_element noselect">
                {item.title}
              </div>
            ))
          }
        </div>
      )}
      
      {/* Container */}
      <div className="top-container">

        <div className="company-attr">
          <div className="comp-img">img</div>
          <div className="comp-name">name</div>
        </div>

        <div className="doc-name">doc-name</div>

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