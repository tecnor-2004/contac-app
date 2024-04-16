import { useState } from "react";

function ColorPicker(){
    let[color,setColor] = useState("#000000")
    const handelColorChange = (event) =>{
        setColor(event.target.value)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="w-100" style={{backgroundColor: color}}> this is your color?</div>
                        <div className="card-body ">
                            <h5 className="card-title">pick your color</h5>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <input type="color" onChange={handelColorChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ColorPicker;