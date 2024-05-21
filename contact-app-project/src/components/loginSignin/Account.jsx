import { useNavigate } from "react-router-dom";
function Account(){
    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate();
    const logoutHandler =  ()=>{
        navigate('/Login')
        localStorage.setItem('isLoged', false)
    }
    const exitHandler = () =>{
        navigate('/ContactList')
    }
    const editHandler = () =>{
        console.log("edit data");
    }
    return(
        <section className="w-100 px-4 py-5">
            <div className="row d-flex justify-content-center">
                <div className="col col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                    <div className="card-body p-4">
                    <div className="d-flex">
                        <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">{userData.name} {userData.last}</h5>
                        <p className="mb-2 pb-1">{userData.gmail}</p>
                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                            <div>
                                <p className="small text-muted mb-1">{userData.pass}</p>
                            </div>
                        </div>
                        <div className="d-flex pt-1 gap-2">
                            <button onClick={exitHandler} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary flex-grow-1">exit</button>
                            <button onClick={editHandler} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary flex-grow-1">edit</button>
                            <button onClick={logoutHandler} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary flex-grow-1">logout</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Account