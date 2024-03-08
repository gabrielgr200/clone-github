import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero Section/Hero";
import { Productivity } from "./components/Productivity/Productivity";


export default function Home() {
  return (
    <div>
      <div className="relative z-50">
        <div className="absolute">
          <Header />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <div className="relative">
            <img
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image"
              width='4377'
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt=""
            />
          </div>
          <div className="Hero-section px-3">
            <Hero />
          </div>
          <div className="px-4 pt-8 overflow-hidden mb-32" id="productivity">
            <Productivity />
          </div>
        </div>
      </div>
    </div>
  );
}
