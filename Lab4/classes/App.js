class App {
  constructor() {
    this.getLocation();
    this.lat;
    this.lng;
  }
  getLocation() {
    navigator.geolocation.getCurrentPosition(this.gotLocation.bind(this), this.errorLocation.bind(this));
  }
  gotLocation(result) {
    this.lat = result.coords.latitude;
    this.lng = result.coords.longitude;
    this.getWeather();
  }
  getWeather() {
    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/541f406f9b841c141696bfe504777ca5/${this.lat},${this.lng}?units=si`;
    
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      let tempIcon =data.currently.icon;
      let currentTemp = Math.round(data.currently.temperature);
     
      let curentPos = data.timezone;
      
      curentPos = curentPos.replace(/\//g, " / "); //Space before and after a slash.
      document.querySelector('.position').innerHTML = curentPos;
      console.log(currentTemp);
      
      
        if (tempIcon === "partly-cloudy-day") {
        tempIcon = '<i class="wi wi-day-cloudy"></i>';
        document.querySelector("#bg").style.backgroundImage = "url('https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80')";
      }
      if (tempIcon === "cloudy") {
        tempIcon = '<i class="wi wi-cloudy"></i>';
        document.querySelector("#bg").style.backgroundImage = "url('https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80')";
      }
      if (tempIcon === "wind") {
        tempIcon = '<i class="wi wi-strong-wind"></i>';
        document.querySelector("#bg").style.backgroundImage = "url('https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')";
      }
      if (tempIcon === "snow") {
        tempIcon = '<i class="wi wi-snow"></i>';
        document.querySelector("#bg").style.backgroundImage = "url('https://images.unsplash.com/photo-1544235653-a313b8a430d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')";
      }
      if (tempIcon === "thunderstorm") {
        tempIcon = '<i class="wi wi-thunderstorm"></i>';
        document.querySelector("#bg").style.backgroundImage = "url('https://images.unsplash.com/photo-1564343921985-91ced954364a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')";
      }
      else if (tempIcon === "rain") {
        tempIcon = '<i class="wi wi-rain"></i>';
        document.querySelector("#bg").style.backgroundImage = "url('https://i.ibb.co/bJKxKzf/Bg-Rain.png')";
      }
      
      
      
      
      if (currentTemp >= 20) {
        document.querySelector(".clothes").src = "https://i.ibb.co/LRpmVKx/T-shirt.png";
        document.querySelector("#weather_bg").style = "background-color:#21313F";
      }
      if (currentTemp <=15) {
        document.querySelector(".clothes").src = "https://i.ibb.co/w0Xz50d/Jas.png";
        document.querySelector("#weather_bg").style = "background-color:#21313F";
      }
      
       if (currentTemp <= 10) {
        document.querySelector(".clothes").src = "https://i.ibb.co/w0Xz50d/Jas.png";
      }
      
      document.querySelector(".temp").innerHTML = currentTemp + " °C";
      document.querySelector(".icon").innerHTML = tempIcon;
      
      
    }).catch(err =>{
      console.log(err);
    })
    
    
    }
    errorLocation(err) {
      console.log(err);
    }
  }
  let app = new App();