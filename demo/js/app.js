/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* Loading the config file particle.json is not supported */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "dynamic": true
      },
      "raster": {
        "enable": true,
        "start": "loose",
        "lock": true,
        "offscreen": 75
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 2,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 0.8,
        "width": 1
      },
      "move": {
        "speed": 4,
        "direction": "none",
        "random": true,
        "straight": false,
        "bounce": true,
        // we ondersteunen alleen out_mode=bounce
        // "out_mode": "out",
        // PECT attract niet nodig
        // "attract": {
        //   "enable": false,
        //   "rotateX": 600,
        //   "rotateY": 1200
        // }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "resize": true
      },
    },
    "retina_detect": true,
    // "config_demo": {
    //   "hide_card": false,
    //   "background_color": "#b61924",
    //   "background_image": "",
    //   "background_position": "50% 50%",
    //   "background_repeat": "no-repeat",
    //   "background_size": "cover"
    // }
  }

);