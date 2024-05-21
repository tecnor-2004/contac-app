function RecentContact(props){
    return(
        <li className="row list-group-item d-flex justify-content-between flex-column flex-sm-row ">
            <div className="col-auto  d-flex flex-row justify-content-start w-100">
                <div className="col-auto p-0 rounded-5 overflow-hidden">
                    <img src={props.data.picture?.thumbnail} alt="" />
                </div>
                <div className="col-auto ms-2 d-flex">
                    <p className="m-0 mt-2">
                        {props.data.name?.title}.{props.data.name?.first} {props.data.name?.last}
                    </p>
                    <p className="m-0 mt-2 ms-5">
                        {props.data.time?.hour} : {props.data.time?.min}
                    </p>
                </div>
            </div>
        </li>
    )
}
export default RecentContact