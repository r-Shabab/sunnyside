import mobileEggImage from "../assets/mobile/image-transform.jpg";
import mobileCupImage from "../assets/mobile/image-stand-out.jpg";
import desktopEggImage from "../assets/desktop/image-transform.jpg";
import desktopCupImage from "../assets/desktop/image-stand-out.jpg";

function ThumbnailCard() {
  return (
    <>
      <section>
        <div className="md:flex md:h-full md:flex-row-reverse">
          <div className="md:w-1/2">
            <img src={mobileEggImage} alt="" className="md:hidden" />
            <img
              src={desktopEggImage}
              alt=""
              className="hidden md:block lg:w-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-white px-[10%] py-[15%] md:w-1/2 md:px-[5%] md:py-[3%]">
            <div className="space-y-6 text-center md:px-[5%] 2xl:space-y-12 2xl:px-[10%]">
              <h3 className="font-fraunces text-3xl font-black md:text-start md:text-2xl lg:text-4xl 2xl:text-6xl">
                <span className="inline-block">Transform your</span>{" "}
                <span className="inline-block lg:block">brand</span>
              </h3>
              <p className="text-center font-barlow text-body font-semibold text-gray-400 md:text-start 2xl:text-2xl">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>

              <div className="text-center md:text-start">
                <span className="link underline-soft-yellow px-3 text-center">
                  <a href="#" className="font-fraunces text-body font-bold">
                    LEARN MORE
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:h-full">
          <div className="md:w-1/2">
            <img src={mobileCupImage} alt="" className="md:hidden" />
            <img
              src={desktopCupImage}
              alt=""
              className="hidden md:block lg:w-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-white px-[10%] py-[15%] md:w-1/2 md:px-[5%] md:py-[3%]">
            <div className="space-y-6 text-center md:px-[5%] 2xl:space-y-12 2xl:px-[8%]">
              <h3 className="font-fraunces text-3xl font-black md:text-start md:text-2xl lg:text-4xl 2xl:text-6xl">
                <span className="inline-block">Stand out to the right</span>{" "}
                <span className="inline-block">audience</span>
              </h3>
              <p className="text-center font-barlow text-body font-semibold text-gray-400 md:text-start 2xl:text-2xl">
                Using a collaborative formula of
                designers,researchers,photographers, videographers, and
                copywriters,we&apos;ll build and extend your brand in digital
                places
              </p>
              <div className="text-center md:text-start">
                <span className="link underline-soft-red px-3 text-center">
                  <a href="#" className="font-fraunces text-body font-bold">
                    LEARN MORE
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ThumbnailCard;
