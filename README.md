## particles.js

### Very basic particles script

Based upon Vincent Garreau's particles.js which is the one you're probably looking for. See https://github.com/VincentGarreau/particles.js

-------------------------------
### `This fork`

This fork has a lot of functionality removed from the Vincent Garreau version as it wasn't needed for the purpose of this version. This
version adds raster-functionality: the particles can be kept within (invisible) cells (tiles) in order to keep the entire screen filled
with particles while maintaining the original particles-effect.

-------------------------------
### Added to this version:

**particles.raster.enable**

Enables the raster-functionaly. When set to false, this script is just a scaled down version of the original particles.js.
When set to true the raster will be rebuilt upon a resize window event.

**particles.raster.start**

When set to `strict` every particle will start in the top-left corner of the cell it is bound to. This visualizes the cell-raster at 
the start. When set to `loose` particles will start at a random location within the cell it is bound to.

**particles.raster.lock**

When set to true, the particles will stay within the cell they're bound to. When set to false, the particles start from their own cell
but can roam everywhere afterwards.

**particles.number.dynamic**

If set to true particles.number.value will be interpreted to be valid for a 1024x760 browser window size. The particles.number.value
will be modified to the actual browser window size.

*This replaces the density-functionality of the original particles.js.*


-------------------------------

### `Options`

key | option type / notes | example
----|---------|------
`particles.number.value` | number | `40`
`particles.number.dynamic` | boolean | `false`
`particles.color.value` | HEX (string) <br /> RGB (object) <br /> HSL (object) <br /> array selection (HEX) <br /> random (string) | `"#b61924"` <br /> `{r:182, g:25, b:36}` <br />  `{h:356, s:76, l:41}` <br /> `["#b61924", "#333333", "999999"]` <br /> `"random"`
`particles.shape.type` | string <br /> array selection | `"circle"` <br /> `"edge"` <br /> `"triangle"` <br /> `"polygon"` <br /> `"star"` <br /> `"image"` <br /> `["circle", "triangle", "image"]`
`particles.shape.stroke.width` | number | `2`
`particles.shape.stroke.color` | HEX (string) | `"#222222"`
`particles.shape.polygon.nb_slides` | number | `5`
`particles.shape.image.src` | path link <br /> svg / png / gif / jpg | `"assets/img/yop.svg"` <br /> `"http://mywebsite.com/assets/img/yop.png"`
`particles.shape.image.width` | number <br />(for aspect ratio) | `100`
`particles.shape.image.height` | number <br />(for aspect ratio) | `100`
`particles.opacity.value` | number (0 to 1) | `0.75`<br />In VincentGareau version not functional<br/>but here it is
`particles.opacity.random` | boolean | `true` / `false` 
`particles.opacity.anim.enable` | boolean | `true` / `false` 
`particles.opacity.anim.speed` | number | `3`
`particles.opacity.anim.opacity_min` | number (0 to 1) | `0.25`
`particles.opacity.anim.sync` | boolean | `true` / `false`
`particles.raster.enable` | boolean | `true` / `false`
`particles.raster.offscreen` | number (0 to 100) | `50`
`particles.raster.start` | string | `"strict"` <br /> `"loose"`
`particles.raster.lock` | boolean | `true` / `false`
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
`particles.move.speed` | number | `4`
`particles.move.direction` | string | `"none"` <br /> `"top"` <br /> `"top-right"` <br /> `"right"` <br /> `"bottom-right"` <br /> `"bottom"` <br /> `"bottom-left"` <br /> `"left"` <br /> `"top-left"`
`particles.move.random` | boolean | `true` / `false`
`particles.move.straight` | boolean | `true` / `false`
`particles.move.bounce` | boolean <br /> (between particles) | `true` / `false`
`interactivity.detect_on` | string | `"canvas", "window"`
`interactivity.events.resize` | boolean | `true` / `false`
`retina_detect` | boolean | `true` / `false`
