function Thermostat(){
  this.degree = 20;
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
