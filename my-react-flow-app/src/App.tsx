import { useCallback, useState } from 'react';

import { ReactFlow, Controls, Background, applyNodeChanges, applyEdgeChanges } from '@xyflow/react'
import '@xyflow/react/dist/style.css';

const initialEdges = [
    {
      id:'1-2',
      source:'1',
      target:'2',
      label:'How is going?',
      type:'step',
    }
];
const initialNodes =[

  {
    id:'1',
    position:{x:0, y:0},
    data: {label:'hello'},
    type:'input',
    
   
  },
  {
    id:'2', 
    position:{x:100, y:100},
    data:{label:'Node:2'},
  }
];


function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] =  useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) =>{
      changes.forEach(change =>{
        console.log(`Node id: ${change.id} has changed`)
        if(change.type==='position'){
          console.log('Change position is: ',change.position)
        }
      }
    );
    setNodes((nds) => applyNodeChanges(changes,nds))}
    ,[]
  
  ); 

  const onEdgesChange = useCallback(
    (changes)=> setEdges((eds)=> applyEdgeChanges(changes,eds)),[]
  );

  return (

    <div style={{ width: '100%', height: '100%' }}>

      <ReactFlow  nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      fitView>
      <Background/>
      <Controls/>
      </ReactFlow>

    </div>
    
   
  )
}

export default Flow;
