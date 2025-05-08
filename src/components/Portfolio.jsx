import { BrowserRouter, Link } from "react-router-dom";
import weatherImg from "../assets/portfolio/weather.png";
import flipEcommerceImg from "../assets/portfolio/flipEcommerce.png";
import reactProjects from "../assets/portfolio/reactProjects.png";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weatherImg,
      live_link: "https://react-weather-app-live.vercel.app",
      code: "https://github.com/Bharti277/weather-app",
    },
    {
      id: 2,
      src: flipEcommerceImg,
      live_link: "https://redux-ecommerce-nu.vercel.app",
      code: "https://github.com/Bharti277/redux-ecommerce",
    },
    {
      id: 3,
      src: reactProjects,
      live_link: "https://react-styled-component-project.netlify.app",
      code: "https://github.com/Bharti277/react-styled-component-project",
    },
    // {
    //   id: 4,
    //   src: reactParallax,
    //   live_link: "https://weather-app-eight-phi-99.vercel.app",
    //   code: "https://github.com/Bharti277/weather-app",
    // },
    // {
    //   id: 5,
    //   src: reactSmooth,
    //   live_link: "https://weather-app-eight-phi-99.vercel.app",
    //   code: "https://github.com/Bharti277/weather-app",
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    //   live_link: "https://weather-app-eight-phi-99.vercel.app",
    //   code: "https://github.com/Bharti277/weather-app",
    // },
  ];
  return (
    <div
      name="portfolio"
      className="w-full h-screen text-white bg-gradient-to-b from-black to-gray-500 md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src, live_link, code }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="duration-200 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <BrowserRouter>
                  <Link
                    to={live_link}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    target="_blank"
                  >
                    Demo
                  </Link>
                </BrowserRouter>
                <BrowserRouter>
                  <Link
                    to={code}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    target="_blank"
                  >
                    Code
                  </Link>
                </BrowserRouter>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
