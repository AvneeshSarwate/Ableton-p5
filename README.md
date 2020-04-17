## Ableton + p5 via midi

Please read the whole guide before opening the Ableton file.

A minimal exmaple to show how you can control animation in p5.js using MIDI sent from Ableton, received via the WebMidi API (using the [WebMidi.js wrapper library](https://github.com/djipco/webmidi)).

You will need to create a virtual MIDI port to use this example. [This guide from Ableton](https://help.ableton.com/hc/en-us/articles/209774225-How-to-setup-a-virtual-MIDI-bus) shows exactly how to do so on MacOS and configure Ableton to use this port. The guide also gives pointers to how to set it up on Windows, but alas Windows does not natively play as well with virtual MIDI as MacOS.

The current code uses the same port names used in the Ableton virtual MIDI guide, so no changes should be necessary in the code. You may have to select the port in the External Instrument device on Track 1, but if you make sure to create the port before opening the Ableton file for the first time, this could possibly be avoided.

To start things up:
1. Create the virtual MIDI port as specified in the Ableton guide
2. Go to https://avneeshsarwate.github.io/Ableton-p5/
3. Open the Ableton file
4. Hit the play button under the pink label that says MIDI Track 1.