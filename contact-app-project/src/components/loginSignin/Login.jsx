import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const [gmail,setGmail] = useState()
    const [pass,setPass] = useState()
    const userData = JSON.parse(localStorage.getItem('userData'))|| undefined
    const [exist,setExist] = useState(true)
    const loginHandler = ()=>{
        if(gmail&&pass && userData){
            if(gmail == userData.gmail && pass == userData.pass){
                console.log("data corect");
                localStorage.setItem('isLoged', true)
                setExist(true)
                navigate('/ContactList')
            }
            else{
                setExist(false)
            }
        }
        else{
            setExist(false)
        }
        console.log('i shot');
        event.preventDefault();
    }
    return(
        <section className="bg-light py-3 py-md-5">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                    <div className="text-center mb-3">
                    </div>
                    <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h2>
                    <form action="#!">
                    <div className="row gy-2 overflow-hidden">
                        <div className="col-12">
                            <div className="form-floating mb-3">
                                <input onChange={()=>{setGmail(event.target.value)}} type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                                <label htmlFor="email" className="form-label">Email</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating mb-3">
                                <input onChange={()=>{setPass(event.target.value)}} type="password" className="form-control" name="password" id="password" placeholder="Password" required/>
                                <label htmlFor="password" className="form-label">Password</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex gap-2 justify-content-between">
                                <a href="#!" className="link-primary text-decoration-none">Forgot password?</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className={exist?`alert alert-danger d-none`:`alert alert-danger`} role="alert">
                                user does not exist
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-grid my-3">
                                <button onClick={loginHandler} className="btn btn-primary btn-lg" type="submit">Log in</button>
                            </div>
                        </div>
                        <div className="col-12">
                        <p className="m-0 text-secondary text-center">Dont have an account? <button onClick={()=>{navigate('/Signup')}} className="btn text-primary text-decoration-none">Sign up</button></p>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}
export default Login