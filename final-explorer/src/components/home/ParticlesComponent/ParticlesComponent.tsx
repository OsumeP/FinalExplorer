"use client"
import { Container, ISourceOptions} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React from "react";
import style from './ParticlesComponent.module.scss'

export function ParticlesComponent() {
  const [init, setInit] = React.useState(false);

  // this should be run only once per application lifetime
  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = React.useMemo(
    () => ({
      fpsLimit: 80,
      "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 3000
          }
        },
        "color": {
          "value": "#1284b6"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#1284b6"
          },
          "polygon": {
            "nb_sides": 3
          },
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          },
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 5,
            "size_min": 0,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 500,
          "color": "#1284b6",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 7.81,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      style: {
        position: "absolute",
        zIndex: "-1",
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} className={style.particles}/>;
  }

  return <></>;
};