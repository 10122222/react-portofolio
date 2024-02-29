/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from 'react';

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from '../images/futuristic-desk.jpg';

const imageAltText =
  'Futuristic desk with gaming PC, keyboard, mouse and headset, and triple monitor setup, a bookshelf, with a window view of a city skyline at noon.';

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: 'Weather Now',
    description:
      'Simple weather web app that shows the current weather in your location. Built with Laravel, Inertia, React, Vite, Bootstrap, Tailwind CSS, and OpenWeatherMap API.',
    url: 'https://github.com/10122222/weather-now',
  },
  {
    title: 'WarPay',
    description:
      'A wallet app that allows you to send and receive money from friends and family. Built with Java for Windows.',
    url: 'https://github.com/10122222/WarPay',
  },
  {
    title: 'Kernel for my personal use',
    description: 'A custom kernel for my personal android phone. Built with C.',
    url: 'https://github.com/10122222/kernel_xiaomi_vayu',
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 className="text-center">Portfolio</h2>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '3rem' }}>
        <div style={{ maxWidth: '40%', alignSelf: 'center' }}>
          <img
            src={image}
            style={{
              height: '90%',
              width: '100%',
              objectFit: 'cover',
              animation: '1s ease-out 0s 1 slideInLeft',
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: '40px' }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
