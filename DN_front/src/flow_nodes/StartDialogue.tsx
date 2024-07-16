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
          <span></span>
          <p className='header'>StartDialogue</p>
          <Handle type="source" className='handle' position={Position.Right} id="a" />
        </div>

        <div className="node-container_content">
        </div>

        </div>

      
      
    </>
  );
}

export default StartDialogue;