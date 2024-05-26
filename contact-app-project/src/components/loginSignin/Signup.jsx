import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(){
    const navigate = useNavigate();
    const [name,setName] = useState()
    const [last,setLast] = useState()
    const [gmail,setGmail] = useState()
    const [pass,setPass] = useState()
    const [secondPass,setSecondPass] = useState()
    const [similar,setSimilar] = useState(true)
    const [agred, setAgred] = useState(false)
    const [terms,setTerms] = useState(true)
    const signupHandler = () =>{
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(pass == secondPass){
            if(name && last && emailRegex.test(gmail) && agred ){
                let user = {'name' : name, 'last' : last, 'gmail' : gmail, 'pass' : pass}
                localStorage.setItem('userData', JSON.stringify(user))
                localStorage.setItem('isLoged', true)
                navigate('/ContactList')
            }
            else{
                console.log('something is not right');
                setTerms(false)
            }
            setSimilar(true)
        }
        else{
            console.log('passwwords are not the same');
            setSimilar(false)
        }
        event.preventDefault()
    }
    return(
        <section className="bg-light py-3 py-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <div className="card border border-light-subtle rounded-3 shadow-sm">
                  <div className="card-body p-3 p-md-4 p-xl-5">
                    <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Enter your details to register</h2>
                    <form action="#!">
                      <div className="row gy-2 overflow-hidden">
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input onChange={()=>{setName(event.target.value)}} type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" required/>
                            <label htmlFor="firstName" className="form-label">First Name</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input onChange={()=>{setLast(event.target.value)}} type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" required/>
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input onChange={()=>{setGmail(event.target.value)}} type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required/>
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
                            <div className="form-floating mb-3">
                                <input onChange={()=>{setSecondPass(event.target.value)}} type="password" className="form-control" name="password2" id="password2" placeholder="Password" required/>
                                <label htmlFor="password2" className="form-label">repeat Password</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className={similar?`alert alert-danger d-none`:`alert alert-danger`} role="alert">
                                passwords are not similar
                            </div>
                            <div className={terms?`alert alert-danger d-none`:`alert alert-danger`} role="alert">
                                you did not agred with terms and conditions
                            </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input onChange={()=>{setAgred(event.target.checked)}} className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required/>
                            <label className="form-check-label text-secondary" htmlFor="iAgree">
                              I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid my-3">
                            <button onClick={signupHandler} className="btn btn-primary btn-lg" type="submit">Sign up</button>
                          </div>
                        </div>
                        <div className="col-12">
                          <p className="m-0 text-secondary text-center">Already have an account? <button onClick={()=>{navigate('/Login')}} type="button" className="btn text-primary text-decoration-none">log in</button></p>
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
export default Signup