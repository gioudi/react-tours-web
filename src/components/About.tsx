import React from 'react';
import about from '../images/about.jpeg';
import Title from './Title';
const About = () => {
  return (
    <section
      className="container is-fullhd"
      id="about"
    >
      <Title
        title="About"
        subTitle="us"
      />

      <div className="is-flex  is-justify-content-center">
        <div className="about-img p-3">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="content">
          <h3 className="title is-4">Explore</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a
            href={() => false}
            className="button is-info is-light"
          >
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
