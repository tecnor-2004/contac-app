import "./index.css"
import {  useState } from "react"


const Gallery = () => {

    const IMAGES = [
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'
    ]
    const[index,setIndext]=useState(0)
    const imgShow=(index)=>{
        setIndext(index)
    }
    return (
        <>
        <section className="big">
            <img src={IMAGES[index]} width={400}/>
        </section>
        <section className="thumbs">
            {
                IMAGES.map((image, index) => {
                    // eslint-disable-next-line react/jsx-key
                    return <img onClick={() => imgShow(index)} src={image}  />
                })
            }
        </section>
        </>
    )
}


export default Gallery