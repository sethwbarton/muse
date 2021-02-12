import { Muse, Section } from './dist/index.js'


// /*
// So, this is my prototype "Muse" as I'm now calling it. 

// A Muse is a song, basically. Your codebase only has one instance of the Muse class, and it handles your entire song. 
// I really liked the way Flutter made classes "callable" and figured I could do something similar by having each class in my library have a method with
// its own name. I don't even know if I'm allowed to do that, but we'll see. 

// This way, we can get a tree structure that's familiar to anyone using Flutter. But instead of defining a UI we're defining a Muse! 

// Importantly, there's no programmatic or sequential thinking to be done here. The programmer just defines things. It's all very declarative, which I like. 
// Writing music is declarative. You write on the staff what you want to have happen. There's no sequencing to really be thinking of - apart from the order and
// length your notes come in. 

// You can also probably tell that this approach, I think, will lend itself to code reuse as well as a well-thought-out file structure, with the user being 
// able to export, say, a Verse Section from one folder containing files that represent verses. Or an instrument from a library of instruments they've put together. 

// I'm seeing two tough things with this approach to writing music: 
// 1. Writing notes. Ugh. It does NOT seem fun to have to type in each note I want played with their durations and intensities. We need a way to make this effortless because
//   this is likely what most Muse-ers will spend most of their time doing. 
//     - A thought on this is that the user could type in numbers which play the note relative to the key we're in. But is that really better than just saying "A#"?
//       maybe it'd be nice as an option for those who are like me and hate worrying about picking the right notes in my key. I like talking in music numbers.
//     - This sounds like a TON of work, but if you could import MIDI files, people could record takes on a keyboard or what have you and maybe there's an NPX
//       script that imports it as a Muse track? So then you'd have that option - or you could define the notes by hand. 
//     - I should also keep in mind that intensity can change throughout the duration of a note. That's important for like, half of the instruments I know about. 
// 2. Keeping it looking clean. I have to say, I always thought Flutter was a pain in the butt to keep the code looking good. Maybe there's a formatter out there 
//   people could install that makes this type of style look good by default. But I hate the ")}}])" look.
// */

// const Intro = Section({
//   tracks: [Track({
//     instrument: DrumMachine({/* Loads of cool drum machine options here.*/}),
//     effects: [Compressor({/* Some compressor options go here. */})],
//     notes: [] /*This is a tough requirement. 
//     Notes have so much to them. We need to consider length, 
//     intensity and pitch. And probably more. 
//     How can we make writing notes in code look pretty? */
//   })]
// })

// const Verse1 = Section({
//   tracks: [Track({
//     instrument: Sampler({/* Sampler options!*/}),
//     effects: [Compressor({/* Some compressor options go here. */})]
//   })]
// })

// const Chorus = Section({
//   tracks: [Track({
//     instrument: DrumMachine({/* Loads of cool drum machine options here.*/}),
//     effects: [Compressor({/* Some compressor options go here. */})]
//   })]
// })

// Muse({
//   signature: Signature({}),
//   sections: [Section({}), Section({})],

// })
