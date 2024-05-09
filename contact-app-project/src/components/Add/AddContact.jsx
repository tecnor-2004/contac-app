function AddContact(){
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
                    <input type="text" className="form-control" placeholder="first name" aria-label="firstName" aria-describedby="firstName"/>
                    <input type="text" className="form-control" placeholder="last name" aria-label="lastName" aria-describedby="lastName"/>
                </div>
            </div>
            <div className="row">
                <div className="col-auto input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><span className="fa fa-phone"></span></span>
                    <input type="text" className="form-control" placeholder="phone number" aria-label="phoneNumber" aria-describedby="phoneNumber"/>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                <button type="submit" className="btn btn-primary">save</button>
                </div>
            </div>
        </div>
    )
}
export default AddContact



