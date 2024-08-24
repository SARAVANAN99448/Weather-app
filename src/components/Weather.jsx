import axios from "axios"
import { useState } from "react"
import image from "../assets/images/weather-img.webp"
const Weather = () => {
    const [city, setcity] = useState()
    const handlecity = (evt) => {
        setcity(evt.target.value)
        settypemistake()
        
    }
    const [weather,setweather]=useState() 
    const [temperature,settemperature]=useState()
    const [description,setdescription]=useState()
    const [typemistake,settypemistake]=useState()
    const getweather = () => {
        var information = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5c1b0fac7c697d3029425764b681b07e`)
        information.then(function (Data) {
            setweather(Data.data.weather[0].main)
            setdescription(Data.data.weather[0].description)
            settemperature(Data.data.main.temp)
            settypemistake()

            
        }
    ).catch(function(typemistake){
          settypemistake("error! enter the exisiting city")
    })
    }
   
   
    
    return (<>
    
        <div className=" p-28  flex justify-center " style={{backgroundImage:`url(${image})`,width:"100%",height:"100%vh",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} >
            <div className="bg-[#d4d2c7] p-10 flex flex-col gap-3 rounded-xl w-80 shadow-md shadow-black ">
                <h1 className="font-medium text-3xl ">Weather</h1>
                <p>I can give a weather report about your city !</p>
                <input type="text"
                    placeholder="Enter Your City"
                    className="p-1 rounded-md outline-none w-52"
                    onChange={handlecity}
                />
                <p className="text-red-600 ">{typemistake}</p>
                <button type="button"
                    className="bg-black p-1 rounded-md w-24 text-white "
                    onClick={getweather}
                >Get weather</button>
                <ul className="font-medium">
                    <li>Weather : {weather}</li>
                    <li>Temperature : {temperature}°c</li>
                    <li>Description : {description}</li>
                </ul>
            </div>
            
        </div>
        
    </>)
}
export default Weather








