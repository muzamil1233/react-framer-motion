import React, {useRef} from 'react'
import Card from '/src/components/Card.jsx';


function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc : "muzzi youare great bro i love uh",
            filesize: ".9mb",
            close:true,
            tag: {isOpen : true, tagTitle: "Download now", tagColor : "green" },


        },
        {
            desc : "muzzi youare great bro i love uh",
            filesize: ".9mb",
            close:false,
            tag: {isOpen : true, tagTitle: "Download now", tagColor : "blue" },


        },
        {
            desc : "muzzi youare great bro i love uh",
            filesize: ".9mb",
            close:false,
            tag: {isOpen : true, tagTitle: "Download now", tagColor : "green" },


        },

    ];
   
    
   
  return (
    
      <div ref={ref} className='fixed  flex-shrink-0 top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5' >
     {data.map((item,index)=>(
      <Card  data= {item}  reference = {ref}/>
     ))}

      </div>
  
  );
}

export default Foreground
