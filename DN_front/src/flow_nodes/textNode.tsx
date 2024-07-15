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
          <p className='header'>TextNode</p>
        </div>
        <div className="node-container_content">
          <input id="text" name="text" onChange={onChange} className="nodrag" />
          <Handle className="handle" type="target" position={Position.Left} />
          <Handle className="handle" type="source" position={Position.Right} id="a" />
        </div>
        </div>
    </>
  );
}

export default TextUpdaterNode;