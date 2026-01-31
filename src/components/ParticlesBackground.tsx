
import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "bubble",
            },
            onHover: {
              enable: true,
              mode: "attract",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              factor: 5,
            },
          },
        },
        particles: {
          color: {
            value: ["#00d4ff", "#8b5cf6", "#ff0080", "#10b981", "#f59e0b"],
          },
          links: {
            color: "#00d4ff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 2,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            polygon: {
              sides: 6,
            },
          },
          size: {
            value: { min: 2, max: 8 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.5,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
