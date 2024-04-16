import { useState } from "react"

function CarAsign(){
    let[year,setYear] = useState("")
    function yearHandler(){
        let y = document.getElementById("year").value
        setYear(year = y)
        return year
    }
    let[make,setMake] = useState("")
    function makeHandler(){
        let ma = document.getElementById("make").value
        setMake(make = ma)
        return make
    }
    let[model,setModle] = useState("")
    function modelrHandler(){
        let y = document.getElementById("model").value
        setModle(model = y)
        return model
    }
    
    function submitCar(){
        return (`your car is ${year} ${make} ${model}`)
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <label className="form-label" htmlFor="year">model year :</label>
                    <input value={year} onChange={yearHandler} className="form-control" type="text" name="" id="year" />
                </div>
                <div className="col-auto">
                    <label className="form-label" htmlFor="make">make :</label>
                    <input value={make} onChange={makeHandler} className="form-control" type="text" name="" id="make" />
                </div>
                <div className="col-auto">
                    <label className="form-label" htmlFor="model">model :</label>
                    <input value={model} onChange={modelrHandler} className="form-control" type="text" name="" id="model" />
                </div>
                <div className="col-auto mt-2">
                    <button onClick={submitCar} className="btn btn-primary" type="submit">submit</button>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <p className="col-auto m-0 bg-success text-white rounded-3" id="output">{submitCar()}</p>
            </div>
        </div>
    )
}
export default CarAsign