import React, { useCallback } from 'react';

import {Handle, Position} from 'reactflow';

import '../styles/Nodes.scss';


const handleStyle = { left: 10 };
 
function StartDialogue({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>

      <div className="node-container bc">
        
        <div className="node-container_header green">
          <p className='header'>StartDialogue</p>
        </div>

        <div className="node-container_content">
          <Handle type="source" position={Position.Right} id="a" />
        </div>

        </div>

      
      
    </>
  );
}

export default StartDialogue;