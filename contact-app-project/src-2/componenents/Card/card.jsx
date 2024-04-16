/* eslint-disable react/prop-types */
function Card(props){
    return (
        <div className="col-6 my-3">
            <div className="card h-auto">
                <img src={props.image} className="card-img-top w-auto " style={{maxHeight: "300px"}} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text h-25 overflow-hidden">{props.description}</p>
                    <a className={`btn btn-primary ${ props.price > 100? "bg-danger" :""}`}>{props.price}</a>
                </div>
            </div>
        </div>
    )
}
export default Card;
                                     