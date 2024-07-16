import React, { useState } from 'react'
import {data} from './ContextData/data';

import { Node, Position, useReactFlow } from 'reactflow';



import useStore from './store';
import { customAlphabet, nanoid } from 'nanoid';

type importedProps = {
    menu: Boolean,
    cursorData: Array<number>
}

//TODO: SCSS LOOP VARS FOR MARGIN FROM CONTEXT MENU

export default function MenuContext({menu, cursorData}: importedProps) 
{
    const nanoid = customAlphabet('123456789', 5);

    const { screenToFlowPosition } = useReactFlow();

    const nodes = useStore((state) => state.nodes);
    const setNodes = useStore((state) => state.setNodes);

    const position = screenToFlowPosition({
      x: cursorData[0],
      y: cursorData[1],
    });

    const id = nanoid();

    const newNode: Node = 
      {
        id: id,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        type: "ChoiceNode",
        data: { label: id },
        position: {x: position.x, y: position.y-40},
      };

    return(
        <>
        {menu && (
        <div className='context-menu' style={{left: cursorData[0] + "px", top: cursorData[1] + "px"}}>
          {
            data.map((item) => (
              <div key={item.id} className="context-menu_element noselect"
                onClick={e => {
                  setNodes(nodes.concat(newNode));
                  console.log(position);
                }}
              >
                {item.title}
              </div>
            ))
          }
        </div>
      )}
        </>
    );
}