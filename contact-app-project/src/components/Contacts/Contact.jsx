function Contact(props){
    return(
        <li className="row list-group-item d-flex justify-content-between flex-column flex-sm-row">
            <div className="col-auto  d-flex flex-row justify-content-center">
                <div className="col-auto p-0 rounded-5 overflow-hidden">
                    <img src={props.data.picture.thumbnail} alt="" />
                </div>
                <div className="col-auto ms-3 align-content-center">
                    <p className="m-0 mt-2">
                        {props.data.name.title}.{props.data.name.first} {props.data.name.last}
                    </p>
                </div>
            </div>
            <div className="col-auto p-0 d-flex flex-row justify-content-center mt-2 mt-sm-0">
                <div className="col-auto my-auto mx-2">
                <button className="btn bg-primary-subtle"><span className="fa fa-trash"></span></button>
                </div>
                <div className="col-auto my-auto mx-2">
                    <button className="btn bg-primary-subtle">edite</button>
                </div>
                <div className="col-auto my-auto mx-2">
                    <button className="btn bg-primary-subtle"><span className="fa fa-heart"></span></button>
                </div>
                <div className="col-auto my-auto mx-2">
                    <button className="btn bg-primary-subtle"><span className="fa fa-phone"></span></button>
                </div>
            </div>
        </li>
    )
}
export default Contact