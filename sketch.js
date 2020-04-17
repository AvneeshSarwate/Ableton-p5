let sliders = {};
let notes = {};
// Enable WebMidi.js
WebMidi.enable(function (err) {

    if (err) {
        console.log("WebMidi could not be enabled.", err);
    } else {
        // Retrieve an input by name, id or index
        var input = WebMidi.getInputByName("IAC Driver Bus 1");

        // Listen for a 'cc' message on all channels
        input.addListener('controlchange', "all", function (e) {
            sliders[e.controller.number] = e.value/127;
        });

        input.addListener('noteon', "all", function (e) {
            notes[e.note.number] = e.rawVelocity/127;
        });

        input.addListener('noteoff', "all", function (e) {
            notes[e.note.number] = 0;
        });
  };
});



function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    let x = 0, y = 0;
    
    if(sliders[1]){
        x = sliders[1]*width;
    }
    
    if(sliders[2]){
        y = sliders[2]*height;
    }

    ellipse(x, y, 100);

    if(notes[65]){
        ellipse(width/3, width/2, width*notes[65])
    }

    if(notes[64]){
        ellipse(width*(2/3), width/2, width*notes[64])
    }
}