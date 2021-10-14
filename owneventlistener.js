function ownEventListener(typeOfEvent,callBack){
    var eventObj = {
      eventType :"keyPress",
      key:"p",
      duration: 2
    }
    if(eventObj.eventType === typeOfEvent){
      callBack(eventObj);
    }
  }

  ownEventListener("keyPress",function(e){console.log(e);});