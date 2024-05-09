function RecentContact(props){
    return(
        <li className="row list-group-item d-flex justify-content-between flex-column flex-sm-row">
            <div className="col-auto  d-flex flex-row justify-content-center">
                <div className="col-auto p-0 rounded-5 overflow-hidden">
                    <img src={props.data.picture?.thumbnail} alt="" />
                </div>
                <div className="col-auto ms-3 align-content-center">
                    <p className="m-0 mt-2">
                        {props.data.name?.title}.{props.data.name?.first} {props.data.name?.last}
                    </p>
                </div>
            </div>
        </li>
    )
}
export default RecentContact