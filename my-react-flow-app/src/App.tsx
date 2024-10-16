import { useCallback, useState } from 'react';

import { ReactFlow, Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react'
import '@xyflow/react/dist/style.css';

const initialEdges = [];

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
  },
  {
    id:'3',
    position:{x:80,y:12},
    data:{label:'Node:3'},
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

  const onConnect = useCallback(
    (params) => {
      // Logging the target and source nodes
      console.log(`Source: ${params.source}, Target: ${params.target}`);
    // Check the type of connection
      if (params.type === 'target') {
        console.log('The connection is a target type.');
        console.log('Source:', params.source);
        console.log('Target:', params.target);
      }
    
   setEdges((eds) => addEdge(params,eds));
  },
  [] // Empty dependency array, meaning this function will not be recreated on re-renders
);

  return (

    <div style={{ width: '100%', height: '100%' }}>

      <ReactFlow  nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView>
      <Background/>
      <Controls/>
      </ReactFlow>

    </div>
    
   
  )
}

export default Flow;
