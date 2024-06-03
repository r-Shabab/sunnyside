import mobileHeaderImage from "../assets/mobile/image-header.jpg";
import desktopHeaderImage from "../assets/desktop/image-header.jpg";
import arrowIcon from "../assets/icon-arrow-down.svg";
function Hero() {
  return (
    <header className="relative">
      <div>
        <img src={mobileHeaderImage} alt="" className="md:hidden" />
        <img src={desktopHeaderImage} alt="" className="hidden md:block" />
      </div>
      <div className="absolute top-1/4 flex h-full w-full flex-col items-center justify-start space-y-14 md:top-14 lg:top-1/4 2xl:space-y-32">
        <h1 className="space-y-2 text-center font-fraunces text-5xl font-black tracking-[0.15em] text-white 2xl:text-8xl">
          <span className="inline-block">WE ARE</span>
          <span className="inline-block md:ml-4">CREATIVES</span>
        </h1>
        <img src={arrowIcon} alt="" />
      </div>
    </header>
  );
}

export default Hero;
