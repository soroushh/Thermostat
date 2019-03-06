function Thermostat(){
  this.degree = 20;
  this.powerSafeMode = "on";
}

Thermostat.prototype.up = function(){
  if(this.degree < this.maximumDegree()){
  this.degree = this.degree +1 ;}
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
}

Thermostat.prototype.turnOn = function(){
  this.powerSafeMode = "on";
}

Thermostat.prototype.maximumDegree = function(){
  if(this.powerSafeMode === "on"){return 25}
  else if(this.powerSafeMode === "off"){return 32};
}

Thermostat.prototype.reset = function(){
  this.degree = 20 ; 
}
