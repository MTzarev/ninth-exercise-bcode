import {useState, useEffect} from "react"
function WidthHeight () {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

useEffect(()=>{
    window.addEventListener("resize", handleResize)

},[])


function handleResize(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
}

    return(
        <div>
<p>Window Width: {width}px </p>
<p>Window Height: {height}px </p>

        </div>
    );

}
export default WidthHeight;