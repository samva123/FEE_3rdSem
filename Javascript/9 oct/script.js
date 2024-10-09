function fetchData(yashasvi) {
    console.log("Fetching data...");

   
    setTimeout(() => {
        console.log("Data fetched!");
        
       
        yashasvi("Bharat mata ki jai");
    }, 2000); 
}

function processData(data) {
    console.log("Processing: " + data);
}


fetchData(processData);