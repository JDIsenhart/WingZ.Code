function loadBirdReports(){
    
    for(var i = 0; i < 50; i++){
        var birdID = birdsightings[i].bird_id;
        var time = birdsightings[i].sight_time;
        var loc = birdsightings[i].location;
        var user = birdsightings[i].username;
        //var rep = user + " saw " + birdID + " near " + loc + " at " + time;
        
    }
}

function populateHTML(){
    console.log("Hello World");

    for(var i = 0; i < 10; i++){
        document.getElementById("feed").innerHTML += '<div class = "container">' +
            '        <p class = "text-center"><font size = "8">John saw a really cool bird near starbucks that you should go check out.</p>' +
            '    </div>'
    }

}