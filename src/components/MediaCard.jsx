import mobileGraphicDesign from "../assets/mobile/image-graphic-design.jpg";
import desktopGraphicDesign from "../assets/desktop/image-graphic-design.jpg";
import mobilePhotography from "../assets/mobile/image-photography.jpg";
import desktopPhotography from "../assets/desktop/image-photography.jpg";

function MediaCard() {
  return (
    <section>
      <div className="md:flex">
        <div className="relative md:w-1/2">
          <div>
            <img src={mobileGraphicDesign} alt="" className="md:hidden" />
            <img
              src={desktopGraphicDesign}
              alt=""
              className="hidden md:block lg:w-full"
            />
          </div>
          <div className="absolute top-1/4 flex h-full w-full flex-col justify-center space-y-6 px-[5%] xl:px-[20%] 2xl:px-[30%]">
            <h3 className="text-center font-fraunces text-3xl font-black text-darkCyan-desaturated">
              Graphic Design
            </h3>
            <p className="text-center font-barlow text-body font-semibold text-darkCyan-desaturated">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clints&apos;
              attention.
            </p>
          </div>
        </div>
        <div className="relative md:w-1/2">
          <img src={mobilePhotography} alt="" className="md:hidden" />
          <img
            src={desktopPhotography}
            alt=""
            className="hidden md:block lg:w-full"
          />
          <div className="absolute top-1/4 flex h-full w-full flex-col justify-center space-y-6 px-[5%] xl:px-[20%] 2xl:px-[30%]">
            <h3 className="text-center font-fraunces text-3xl font-black text-darkBlue-default">
              Photography
            </h3>
            <p className="text-center font-barlow text-body font-semibold text-darkBlue-default">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MediaCard;
