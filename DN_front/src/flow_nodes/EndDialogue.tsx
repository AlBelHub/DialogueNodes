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
          <p className='header'>ENDDialogue</p>
        </div>

        <div className="node-container_content">
          <Handle type="target" position={Position.Left} />
        </div>

        </div>
    </>
  );
}

export default EndDialogue;