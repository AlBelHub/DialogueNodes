import React, { useCallback } from 'react';

import {Handle, Position} from 'reactflow';


const handleStyle = { left: 10 };
 
function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      <div className="node-container bc">
        
        <div className="node-container_header blue">
          <Handle className="handle" type="target" position={Position.Left} />
          <p className='header'>TextNode</p>
          <Handle className="handle" type="source" position={Position.Right} id="a" />
        </div>
        <div className="node-container_content">
          <input id="text" name="text" onChange={onChange} className="input-node" />
        </div>
        </div>
    </>
  );
}

export default TextUpdaterNode;