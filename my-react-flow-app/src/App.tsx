import { ReactFlow, Controls, Background } from '@xyflow/react'
import '@xyflow/react/dist/style.css'


function Flow() {
 

  return (

    <div style={{ width: '100%', height: '100%' }}>

      <ReactFlow style={{ width: '100%', height: '100%' }}>
      <Background/>
      <Controls/>
      </ReactFlow>

    </div>
    
   
  )
}

export default Flow;
