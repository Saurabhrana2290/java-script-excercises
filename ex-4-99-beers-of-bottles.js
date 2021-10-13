var count =99;

  function beers(){
    while(count >= 0){
    console.log(`${count} beers of bottles on the wall, ${count} bottles of beers.\nTake one down and pass it around, ${count-1}  beers of bottles on the wall`);
    count--;
  }
  console.log(`No more bottles of beer on the wall, no more bottles of bear.\nGo to the store and buy some more, 99 bottles of beer on the wall.`);
   
}