## particles.js

### Very basic particles script

------------------------------
### `Original version`

<a href="http://vincentgarreau.com/particles.js/" target="_blank"><img src="http://vincentgarreau.com/particles.js/assets/img/github-screen.jpg" alt="particles.js generator" /></a>

Configure, export, and share your particles.js configuration on CodePen: <br />
http://vincentgarreau.com/particles.js/

CodePen demo: <br />
http://codepen.io/VincentGarreau/pen/pnlso

-------------------------------
### `This fork`

With this fork a lot of functionality got removed from the original particles.js. Also some functionality might be added.

-------------------------------

### `Options`

key | option type / notes | example
----|---------|------
`particles.number.value` | number | `40`
`particles.number.density.enable` | NOT SUPPORTED
`particles.number.density.value_area` | NOT SUPPORTED
`particles.color.value` | HEX (string) <br /> RGB (object) <br /> HSL (object) <br /> array selection (HEX) <br /> random (string) | `"#b61924"` <br /> `{r:182, g:25, b:36}` <br />  `{h:356, s:76, l:41}` <br /> `["#b61924", "#333333", "999999"]` <br /> `"random"`
`particles.shape.type` | string <br /> array selection | `"circle"` <br /> `"edge"` <br /> `"triangle"` <br /> `"polygon"` <br /> `"star"` <br /> `"image"` <br /> `["circle", "triangle", "image"]`
`particles.shape.stroke.width` | number | `2`
`particles.shape.stroke.color` | HEX (string) | `"#222222"`
`particles.shape.polygon.nb_slides` | number | `5`
`particles.shape.image.src` | path link <br /> svg / png / gif / jpg | `"assets/img/yop.svg"` <br /> `"http://mywebsite.com/assets/img/yop.png"`
`particles.shape.image.width` | number <br />(for aspect ratio) | `100`
`particles.shape.image.height` | number <br />(for aspect ratio) | `100`
`particles.opacity.value` | number (0 to 1) | `0.75`
`particles.opacity.random` | boolean | `true` / `false` 
`particles.opacity.anim.enable` | boolean | `true` / `false` 
`particles.opacity.anim.speed` | number | `3`
`particles.opacity.anim.opacity_min` | number (0 to 1) | `0.25`
`particles.opacity.anim.sync` | boolean | `true` / `false`
`particles.size.value` | number | `20`
`particles.size.random` | boolean | `true` / `false` 
`particles.size.anim.enable` | boolean | `true` / `false` 
`particles.size.anim.speed` | number | `3`
`particles.size.anim.size_min` | number | `0.25`
`particles.size.anim.sync` | boolean | `true` / `false`
`particles.line_linked.enable` | boolean | `true` / `false`
`particles.line_linked.distance` | number | `150`
`particles.line_linked.color` | HEX (string) | `#ffffff`
`particles.line_linked.opacity` | number (0 to 1) | `0.5`
`particles.line_linked.width` | number | `1.5`
`particles.move.enable` | NOT SUPPORTED
`particles.move.speed` | number | `4`
`particles.move.direction` | string | `"none"` <br /> `"top"` <br /> `"top-right"` <br /> `"right"` <br /> `"bottom-right"` <br /> `"bottom"` <br /> `"bottom-left"` <br /> `"left"` <br /> `"top-left"`
`particles.move.random` | boolean | `true` / `false`
`particles.move.straight` | boolean | `true` / `false`
`particles.move.out_mode` | NOT SUPPORTED
`particles.move.bounce` | boolean <br /> (between particles) | `true` / `false`
`particles.move.attract.enable` | NOT SUPPORTED
`particles.move.attract.rotateX` | NOT SUPPORTED
`particles.move.attract.rotateY` | NOT SUPPORTED
`interactivity.detect_on` | string | `"canvas", "window"`
`interactivity.events.onhover.enable` | NOT SUPPORTED
`interactivity.events.onhover.mode` | NOT SUPPORTED
`interactivity.events.onclick.enable` | NOT SUPPORTED
`interactivity.events.onclick.mode` | NOT SUPPORTED
`interactivity.events.resize` | boolean | `true` / `false`
`interactivity.events.modes.grab.distance` | NOT SUPPORTED
`interactivity.events.modes.grab.line_linked.opacity` | NOT SUPPORTED
`interactivity.events.modes.bubble.distance` | NOT SUPPORTED
`interactivity.events.modes.bubble.size` | NOT SUPPORTED
`interactivity.events.modes.bubble.duration` | NOT SUPPORTED
`interactivity.events.modes.repulse.distance` | NOT SUPPORTED
`interactivity.events.modes.repulse.duration` | NOT SUPPORTED
`interactivity.events.modes.push.particles_nb` | NOT SUPPORTED
`interactivity.events.modes.push.particles_nb` | NOT SUPPORTED
`retina_detect` | boolean | `true` / `false`
