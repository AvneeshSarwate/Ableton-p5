## Ableton + p5 via midi

Please read the whole guide before opening the Ableton file.

A minimal exmaple to show how you can control animation in p5.js using MIDI sent from Ableton, received via the WebMidi API (using the [WebMidi.js wrapper library](https://github.com/djipco/webmidi)). You will be able to run the included Ableton Live Set with any version of Live (Lite, Intro, or Suite), and will be able to run it with a trial license of Live as well (though saving will be disabled with a trial license).

You will need to create a virtual MIDI port to use this example. [This guide from Ableton](https://help.ableton.com/hc/en-us/articles/209774225-How-to-setup-a-virtual-MIDI-bus) shows exactly how to do so on MacOS and configure Ableton to use this port. The guide also gives pointers to how to set it up on Windows, but alas Windows does not natively play as well with virtual MIDI as MacOS.

The current code uses the same port names used in the Ableton virtual MIDI guide, so no changes should be necessary in the code. You may have to select the port in the `MIDI To` on Track 1 (highlighted in MIDI_To.png), but if you make sure to create the port before opening the Ableton file for the first time, this could possibly be avoided.

To start things up and verify that your MIDI setup works:
1. Create the virtual MIDI port as specified in the Ableton guide
2. Go to https://avneeshsarwate.github.io/Ableton-p5/
3. Open the Ableton file (`p5Control.als` in the `p5Control Project` directory)
4. Hit the play button under the pink label that says MIDI Track 1.

To make changes and run your own code, you'll need to serve the webpage from a local server. [This guide](https://github.com/processing/p5.js/wiki/Local-server) shows how to set up a local server so you can edit the `sketch.js` file and see your changes.

This example uses [Clip Envelopes](https://www.ableton.com/en/manual/clip-envelopes/) to send MIDI information. In Ableton, Clips are sequences of both discrete and continuous events (e.g triggering notes and automating sliders/faders), and you can use them to keyframe animations. Multiple clips can be run at once, or sequenced in interactive ways, allowing you to create intricate, layered, realtime animations.

The animations in these examples are programmed using https://p5js.org/ - an easy to use but powerful javascript library for prototyping basic animations. 