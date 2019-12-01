class Iphone{
  constructor(color){
    this.color = color;
    this.on()
  }

  on(){
    console.log('iphone turned ON, color ' + this.color)
  }

  off(){
    console.log('iphone turned OFF, color ' + this.color)

  }
}
const blackiphone = new Iphone('black');

blackiphone.off();


const blueiphone = new Iphone('blue');


blueiphone.off();
