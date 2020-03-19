class App {
  
  constructor() {
    this.getLocation();
  }
  
  getLocation(){
   
    navigator.geolocation.getCurrentPosition(this.gotLocation, this.errorLocation);
  
  }
  
  gotLocation(result){
    console.log(result);
  }
  
  errorLocation(err){
    console.log(err);
  }
   
  
}

let app=new App();