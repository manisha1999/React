import React from 'react'
import {loremIpsum} from 'lorem-ipsum'




function Virtualised_List_Component({ data, style }) {
    
    return (
           <div style={style} className="row">
              <div className="image">
              <img src="" alt="" />
             </div>
            <div className="content">
                <div>{data.name}</div>
                <div>{data.text}</div>
              </div>
            </div>
          );
}

export default Virtualised_List_Component
