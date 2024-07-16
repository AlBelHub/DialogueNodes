import React, { useCallback } from 'react';

import {Handle, Position} from 'reactflow';


const handleStyle = { left: 10 };
 
function EndDialogue({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      <div className="node-container bc">
        
        <div className="node-container_header red">
          <Handle className='handle' type="target" position={Position.Left} />
          <p className='header'>END dialogue</p>
          <span></span>
        </div>

        <div className="node-container_content">
        </div>

        </div>
    </>
  );
}

export default EndDialogue;