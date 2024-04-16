const Product = (props)=>{
    return(
        <div className="col-6">
            <div className="card">
            <img src={props.product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">{props.product.price}</a>
            </div>
            </div>
        </div>
    )
}
export default Product