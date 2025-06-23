particlesJS("particles-js", {
  particles: {
    number: {
      value: 12,
      density: { enable: true, value_area: 800 }
    },
    shape: {
      type: "image",
      image: {
        src: "/img/iconos/floricon.png",
        width: 32,
        height: 32
      }
    },
    size: {
      value: 12,
      random: true
    },
    opacity: {
      value: 0.6,
      random: true
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    },
    line_linked: {
      enable: false
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false },
      resize: true
    },
    modes: {
      repulse: { distance: 80 }
    }
  },
  retina_detect: true
});
