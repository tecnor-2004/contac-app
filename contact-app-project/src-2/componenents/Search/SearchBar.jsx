import { useEffect, useState } from "react"
import Product from "./Product"
const SearchBar = ()=>{
    const[products,setProducts]= useState([])
    const[search,setSearch] = useState()
    const[categories, setCategories]= useState([])
    const searchInputHandle = (e) =>{
        setSearch(e.target.value)
    }
    const searchHandle = ()=>{
        //console.log(products.filter((product)=>product.category == "electronics"));
    } 
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>  setProducts(json))
    },[])
    //console.log(products);
    console.log(categories);
    return (
        <div className="container">
            <div className="row">
                <div className="col-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">what you looking for</label>
                        <input onChange={searchInputHandle} type="text" className="form-control" id="exampleFormControlInput1" placeholder="search..."/>
                        <button onClick={searchHandle} className="btn  btn-primary">search</button>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    categories.map((categori,id)=>{
                       return <div className="col-auto btn btn-primary m-1" key={id}>{categori}</div>
                    })
                }
            </div>
            <div className="row">
                {
                    products.map((product, index)=>{
                        return <Product product={product} key={index}></Product>
                    })}
            </div>
        </div>
    )
}
export default SearchBar