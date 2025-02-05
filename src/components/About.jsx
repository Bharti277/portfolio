const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="mt-20 text-xl">
          I am interested in being an Open Source Developer. I have 4+ years of
          hands-on experience in web development and My motivation to learn
          different technologies and algorithms drives me. I love the challenges
          of a steep learning curve, which makes me a better learner. I strongly
          desire to learn different technologies, which would enable me to
          become a better developer. I believe in the fast execution culture
          while building things from scratch. I believe in startups where the
          learning process is very high and focuses on improving new ideas.
        </p>
        <br />
        <p className="text-xl">
          An ambitious, hard-working and punctual person seeking to work in a
          good and challenging work environment where I can use my skills and
          knowledge to do quality work under the guidance of best brains in the
          country who are experts in their domain.
        </p>
      </div>
    </div>
  );
};

export default About;
