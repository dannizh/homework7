function gettingJSON(){
    //Display the forecast
    // Your code here.
   
    //Set default location if one isn't provided
    let location;

    // Your code here.
    location = document.querySelector("#location").value;
    if(location==""){
        location = "Ann Arbor";
    }
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    try{
    format = document.querySelector('input[name="temp"]:checked').value;
    }catch(err){
        format = "imperial";
    }
    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    if(/\d/.test(location)){
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + "&units=" + format + "&appid=d795e43ae6c35c1a2cc2fdcd6e6fb296";
    }
    else{
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=d795e43ae6c35c1a2cc2fdcd6e6fb296";
    } 
    // Your code here. 
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    let imgAlt;
    let weather;


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        loc = json['name'];
        temp = json['main']['temp'];
        tempImg = json['weather'][0]['icon'];
        description = json['weather'][0]['description'];
        // weather = json['weather'][0]['main'];
        console.log(loc);
        console.log(temp);
        console.log(tempImg);
        console.log(description);
        // console.log(weather);
        document.querySelector("#forecast").style.display = "block";
        document.querySelector("#tempImg").src="http://openweathermap.org/img/wn/" +tempImg +".png";
        document.querySelector("#tempImg").alt= description;
        document.querySelector("#loc").innerHTML = loc;
        document.querySelector("#temp").innerHTML = temp + " with " + description;
    });
}
