function Thermostat(){
  this.degree = 20;
  this.powerSafeMode = "on";
  this.maximumDegree = 25;
}

Thermostat.prototype.up = function(){
  this.dgree = this.degree +1 ;

}

Thermostat.prototype.down = function(){
  if(this._minimum()=== false){
  this.degree = this.degree - 1 ;}
}

Thermostat.prototype._minimum = function(){
  return this.degree === 10 ;
}

Thermostat.prototype.turnOff = function(){
  this.powerSafeMode = "off";
  this.maximumDegree = 32 ;
}

Thermostat.prototype.turnOn = function(){
  this.powerSafeMode = "on";
  this.maximumDegree = 25 ; 
}
