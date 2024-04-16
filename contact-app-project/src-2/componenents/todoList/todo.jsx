import { useState } from "react"

function Todo(){
    const[title,setTitle]= useState()
    const titleHandle= (event) =>{
        setTitle(event.target.value)
    }
    const [detail,setdtails] = useState()
    const detailHandle = (event) => {
        setdtails(event.target.value)
    }
    let[todos, setTodos]= useState([])
    const submitHandle =() =>{
        const shallowCopy = [...todos,{title,detail}]
        setTodos(shallowCopy)
        console.log(shallowCopy);
    }
    const deleteHandle = (i) => {
        const newList = [...todos]
        newList.splice(i,1)
        setTodos(newList)
    }
    const isdoneHandle = (i) =>{
        const newList = [...todos]
        newList[i].isDone = !newList[i].isDone;
        setTodos(newList)
        console.log(todos);
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">title</label>
                        <input onChange={titleHandle} type="text" className="form-control" id="exampleFormControlInput1" placeholder="what is the title "/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">details</label>
                        <textarea onChange={detailHandle} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button onClick={submitHandle} className="btn btn-primary" >submit</button>
                </div>
            </div>
            <div className="row justify-content-center mt-3 ">
                <div className="col-auto">
                    <button className="btn btn-primary">all</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary">done</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary">not done yet</button>
                </div>
            </div>
            <div className="row mt-3">
                    <ul className="list-group list-group-flush">
                        
                    </ul>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">title</th>
                            <th scope="col">details</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                                {todos.map((item,i)=>{
                                    return (
                                        <tr key={i}>
                                            <th scope="row ">{i+1}</th>
                                            <td className={item.isDone && "text-danger"}>{item.title}</td>
                                            <td className={`${item.isDone && "text-danger"} text-breaK`}>{item.detail}</td>
                                            <td><button onClick={()=>deleteHandle(i)} className="btn btn-primary">delete</button></td>
                                            <td><button onClick={() => isdoneHandle(i)} className="btn btn-primary">done</button></td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
            </div>
        </div>

    )

}
export default Todo