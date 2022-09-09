import React from 'react'
import Mainheader from './Mainheader/Mainheader'
import Moments from './Moments/Moments'

function Momentsmain() {
  return (
    <div>
         <Mainheader/>
        <Moments
        tittle='MOMENTS' imgone='/one.jpg' imgtwo='/two.png' imgtree='/red.png'
        imgfour='/childerns.png' imgfive='/date.png' imgsix='/girls.png'/>
        

    </div>
  )
}

export default Momentsmain