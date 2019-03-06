function Thermostat(){
  this.degree = 20;
}

Thermostat.prototype.up = function(){
  this.dgree = this.degree +1 ;
}

Thermostat.prototype.down = function(){
  this.degree = this.degree - 1 ; 
}
