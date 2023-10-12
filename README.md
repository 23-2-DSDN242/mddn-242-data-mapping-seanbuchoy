[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/fhdOjw6q)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12032042&assignment_repo_type=AssignmentRepo)
## Creative Coding 2: Custom Pixel

The images above are photos of Wellington CBD algorithmically processed with a lightly modified version of the [p5.js Pointillism example](https://p5js.org/examples/image-pointillism.html). The masks for each photo highlight various objects. Replace this text with your own which explains the source of your photos, masking, and applied algorithm.


The images above are photos I took of one of my plushes (Miku). I placed around several places that had various backgrounds and objects - such as backgrounds with different colours, larger objects, smaller objects, food, and even other plushes - because I wanted to train the AI to mask out ONLY the Miku plush. In the end, the masks for each photo highlighted only the Miku plush with some very small parts of the edges of the plush not included in the mask.

The main idea for my filter is a "grayed-out glitched effect" on the highlighted subject. I wanted the main subject to firstly, be grayed out, then for a glitch effect, have the pixels be offsetted or just look disoriented. The inspiration for this theme is the feeling of a subject "being disconnected" from the world around it. I decided to use one of my plushes as the main highlighted subject because it's my favourite one and it somewhat resembles a person, but it isn't. The idea is that not only people can appear disconnected, but pretty much anything can easily be walked past and left unnoticed, like it's not actually there.

For the algorithm, I have two layers. The first layer renders the highlighted subject and grays it out, and renders the rest of the pixels of the image but leaves it as it is. The second layer applies a lightly modified version of p5.js pointillism