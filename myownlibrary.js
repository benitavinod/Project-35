function isTouching(){
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 
    && movingRect.y-fixedRect.y < fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y < fixedRect.width/2+movingRect.width/2  ){
    return true;
  }
  else{
    return false;
  }
}

function bounceOff(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2) {
      ob1.velocityX = ob1.velocityX * (-1);
      ob2.velocityX = ob2.velocityX * (-1);
}
if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
  && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
    ob1.velocityY = ob1.velocityY * (-1);
    ob2.velocityY = ob2.velocityY * (-1);
}
}
