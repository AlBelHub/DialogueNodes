import { nanoid } from 'nanoid/non-secure';
import React, { LegacyRef, useCallback, useEffect, useRef, useState } from 'react';

import { Handle, HandleElement, Position, useUpdateNodeInternals } from 'reactflow';

import useStore, { FlowState } from '../store';

const handleStyle = { left: 10 };

type Choice = {
  text: string
}



const initChoices: Choice[] = [
  {
    text: "choise 2",
  },
  {
    text: 'choise 1'
  },
  {
    text: "choise 2",
  },
  {
    text: "choise 2",
  },
]

function ChoiceNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  const selector = (state: FlowState) => ({
    nodes: state.nodes,
    edges: state.edges,
    setEdges: state.setEdges,

  });

  const { nodes, edges, setEdges } = useStore(selector);

  const [choises, setChoises] = useState<Choice[]>(initChoices);

  const updateNodeInternal = useUpdateNodeInternals();

  const updateNode = useCallback(() => {
    updateNodeInternal(data.label);
  }, [data.label, updateNodeInternal])

  const deleteChoice = () => {
    setChoises(choises.slice(0, -1));
    setEdges(edges.splice(
      edges.indexOf(edges.map((i) => i.id === "reactflow__edge-" + data.label + "-" + 3)), 1
    ));
  }

  console.log(edges);

  return (
    <>
      <div className="node-container bc">

        <div className="node-container_header blue">
          <Handle className="handle" type="target" position={Position.Left} />
          <p className='header'>ChoiceNode</p>
          <Handle className="handle" type="source" position={Position.Right} id="a" />
        </div>

        <div className="node-container_content">
          <div className="choice-container">


            <div className="choice-container_button">
              <div className="button"
                onClick={e => {
                  setChoises(choises.concat({ text: "new choice" }));
                  updateNode()
                }}


              >Add</div>
              <div className="button"
                onClick={e => {
                  deleteChoice();
                  updateNode();
                }
                }
              >Delete</div>
            </div>

            {
              choises && choises.map((item, i) => (
                <div className='choice' key={nanoid()}>
                  <div className='choice-number'>{i}</div>
                  <input className='input-node' type="text" name="text" id="someid" placeholder={choises[i].text} />

                  <div className="handle-test" >

                    <div className="rotate-div" style={{ rotate: "90deg" }}>
                      <Handle className="handle_choice" type="source" position={Position.Right} id={i.toString()} />
                    </div>


                  </div>

                </div>
              ))
            }

          </div>
        </div>


      </div>

    </>
  );
}

export default ChoiceNode;