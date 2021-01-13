const makeServerRequest = new Promise((resolve, reject) => {
  
  makeServerRequest.then(result => {
    console.log(result);
  });

  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});