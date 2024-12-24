import { useState, useEffect } from "react"

export function UseIframe(observedDiv){

    const [height, setHeight] = useState();

    useEffect(()=> {
        if (!observedDiv.current) {
          return;
        }
    
        const resizeObserver = new ResizeObserver(() => {
         
          if(observedDiv.current.offsetHeight !== height) {
    
            setHeight(observedDiv.current.offsetHeight);
         
          }
        });
      
        resizeObserver.observe(observedDiv.current);
    
        return function cleanup() {
          resizeObserver.disconnect();
        }
      }, [observedDiv.current])

       window.parent.postMessage(height, "*");
    return {height}
}
