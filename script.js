const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '94b06c24a5msh078fea28c659c50p19cd7djsn0b6a244ac4c6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};




const getWeather = (city)=> {
    // city.innerHTML = response.city
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {






        console.log(response)
  
        temp.innerHTML = response.temp
        temp1.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity1.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed1.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset




        

    })
    .catch(err => console.error(err));

}

const getWeatherShanghai = (city)=> {
    // city.innerHTML = response.city
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {






        console.log(response)
  



        let a1 = document.getElementsByClassName("Shanghai")
        a1[0].innerHTML = response.feels_like
        a1[1].innerHTML = response.humidity
        a1[2].innerHTML = response.max_temp
        a1[3].innerHTML = response.min_temp
        a1[4].innerHTML = response.sunrise
        a1[5].innerHTML = response.sunset
        a1[6].innerHTML = response.temp
        a1[7].innerHTML = response.wind_degrees
        a1[8].innerHTML = response.wind_speed




        

    })
    .catch(err => console.error(err));

}

const getWeatherLucknow = (city)=> {
    // city.innerHTML = response.city
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {






        console.log(response)
  




        
        
        let a2 = document.getElementsByClassName("Lucknow")
        a2[0].innerHTML = response.feels_like
        a2[1].innerHTML = response.humidity
        a2[2].innerHTML = response.max_temp
        a2[3].innerHTML = response.min_temp
        a2[4].innerHTML = response.sunrise
        a2[5].innerHTML = response.sunset
        a2[6].innerHTML = response.temp
        a2[7].innerHTML = response.wind_degrees
        a2[8].innerHTML = response.wind_speed



        

    })
    .catch(err => console.error(err));

}

const getWeatherKolkata = (city)=> {
    // city.innerHTML = response.city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {






        console.log(response)
  


            
        let a3 = document.getElementsByClassName("Kolkata")
        a3[0].innerHTML = response.feels_like
        a3[1].innerHTML = response.humidity
        a3[2].innerHTML = response.max_temp
        a3[3].innerHTML = response.min_temp
        a3[4].innerHTML = response.sunrise
        a3[5].innerHTML = response.sunset
        a3[6].innerHTML = response.temp
        a3[7].innerHTML = response.wind_degrees
        a3[8].innerHTML = response.wind_speed




        

    })
    .catch(err => console.error(err));

}

const getWeatherTokyo = (city)=> {
    // city.innerHTML = response.city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {






        console.log(response)
  


        
        
        let a4 = document.getElementsByClassName("Tokyo")
        a4[0].innerHTML = response.feels_like
        a4[1].innerHTML = response.humidity
        a4[2].innerHTML = response.max_temp
        a4[3].innerHTML = response.min_temp
        a4[4].innerHTML = response.sunrise
        a4[5].innerHTML = response.sunset
        a4[6].innerHTML = response.temp
        a4[7].innerHTML = response.wind_degrees
        a4[8].innerHTML = response.wind_speed



        

    })
    .catch(err => console.error(err));

}
 

const getWeatherOkinawa = (city)=> {
    // city.innerHTML = response.city
 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {






        console.log(response)
  
          
        let a5 = document.getElementsByClassName("Okinawa")
        a5[0].innerHTML = response.feels_like
        a5[1].innerHTML = response.humidity
        a5[2].innerHTML = response.max_temp
        a5[3].innerHTML = response.min_temp
        a5[4].innerHTML = response.sunrise
        a5[5].innerHTML = response.sunset
        a5[6].innerHTML = response.temp
        a5[7].innerHTML = response.wind_degrees
        a5[8].innerHTML = response.wind_speed




        

    })
    .catch(err => console.error(err));

}
 





const getWeatherDelhi = (city)=> {
    // city.innerHTML = response.city
    // cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {






        console.log(response)
  



        
        let a = document.getElementsByClassName("Delhi")
        a[0].innerHTML = response.feels_like
        a[1].innerHTML = response.humidity
        a[2].innerHTML = response.max_temp
        a[3].innerHTML = response.min_temp
        a[4].innerHTML = response.sunrise
        a[5].innerHTML = response.sunset
        a[6].innerHTML = response.temp
        a[7].innerHTML = response.wind_degrees
        a[8].innerHTML = response.wind_speed

        
       

    

      


    })
    .catch(err => console.error(err));

}
 













submit.addEventListener('click', (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

getWeatherDelhi("Delhi")
getWeatherShanghai("Shanghai")
getWeatherLucknow("Lucknow")
getWeatherKolkata("Kolkata")
getWeatherTokyo("Tokyo")
getWeatherOkinawa("Okinawa")
