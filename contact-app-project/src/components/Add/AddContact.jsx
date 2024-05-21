import { useEffect, useState } from "react"
function AddContact(){
    const [title,setTitle] = useState()
    const [name,setName] = useState()
    const [lastName,setLastName] = useState()
    const [number,setNumber] = useState()
    const [mainList,setMainList] = useState(JSON.parse(localStorage.getItem('mainList')))
    let newContact = {'name' : {'title' : title , 'first' : name , 'last' : lastName} , 'cell' : number , 'id' :{'value' : name+lastName}}
    const [filled,setFilled] = useState(true)
    const [saved,setSaved] = useState(true)
    if ((filled == false) || (saved == false)){
        setTimeout(()=>{setFilled(true); setSaved(true)},2000)
    }
    useEffect(()=>{
        localStorage.setItem('mainList',JSON.stringify(mainList))
    },[mainList])
    const addContactHndler =()=>{
        if((title != 'title' && title) && name && lastName && number){
            setMainList(oldList =>[...oldList,newContact])
            setFilled(true)
            setSaved(false)
        }
        else{
            setFilled(false)
            setSaved(true)
            console.log('smt is missing');
        }
        
    }
    return(
        <div className="container pt-4">
            <div className="row justify-content-center mb-3">
                <div className="col-auto">
                    <span className="fa fa-user-o fa-5x"></span>
                </div>
            </div>
            <div className="row">
                <div className="col-auto input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><span className="fa fa-user"></span></span>
                    <select onChange={()=>{setTitle(event.target.value)}} className="form-select" aria-label="Default select example" required>
                        <option defaultValue>title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                    </select>
                    <input onChange={()=>{setName(event.target.value)}} type="text" className="form-control" placeholder="first name" aria-label="firstName" aria-describedby="firstName" required/>
                    <input onChange={()=>{setLastName(event.target.value)}} type="text" className="form-control" placeholder="last name" aria-label="lastName" aria-describedby="lastName" required/>
                </div>
            </div>
            <div className="row">
                <div className="col-auto input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><span className="fa fa-phone"></span></span>
                    <input onChange={()=>{setNumber(event.target.value)}} type="text" className="form-control" placeholder="phone number" aria-label="phoneNumber" aria-describedby="phoneNumber" required/>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <button onClick={addContactHndler} type="submit" className="btn btn-primary">save</button>
                </div>
                <div className="col-12 mt-3" style={{transition : 'all 2s'}}>
                    {/* i asume bc im using js to change the class list transition doesnt work */}
                    <div className={filled?`alert alert-danger d-none` : `alert alert-danger`} role="alert">
                        please fill everything !
                    </div>
                    <div className={saved?`alert alert-success d-none` : `alert alert-success`} role="alert">
                        contact have been saved !
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddContact



