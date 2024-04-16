import { useState } from "react";

function Counter(){
    let [num, setNum] = useState(0)
    const addHandel = () => {
        setNum(num+=1);
    }
    const minHandel = () => {
        setNum(num-=1);
    }
    const oddHandel = () => {
        num % 2 == 0 ? setNum(num+=5) : null
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <h2 className={num > 10 ? "bg-danger" : ""}>{num}</h2>
                    <button onClick={addHandel}>add</button>
                    <button onClick={minHandel}>minus</button>
                    <button onClick={oddHandel}> add when its odd</button>
                </div>
            </div>
        </div>
    )
}
export default Counter;



