var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {
  // Process our return data
  if (xhr.status >= 200 && xhr.status < 300) {
    // Runs when the request is successful
    var t = JSON.parse(this.response);
   // console.log(t);
    t.forEach(ele=>{
      console.log(ele.flag);
    })
  } else {
    // Runs when it's not
    console.log(xhr.responseText);
  }
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();
