const makeServerRequest = new Promise((resolve, reject) => {
  
  makeServerRequest.catch(error => {
    console.log(error);
  });

  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});