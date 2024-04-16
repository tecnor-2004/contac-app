import { useState } from "react";
function Form(){
    let [password,setPassword] = useState("");
    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    return(
        <div className="container mb-3 border-bottom border-1">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input value={password} onChange={changePassword} type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" className="form-text">
                        {password}
                    </div>
                    <p className="form-text" >
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Form ; 