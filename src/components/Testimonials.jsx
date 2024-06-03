import emily from "../assets/image-emily.jpg";
import thomas from "../assets/image-thomas.jpg";
import jennie from "../assets/image-jennie.jpg";
function Testimonials() {
  return (
    <section className="py-8 lg:py-40">
      <h3 className="py-8 text-center font-fraunces font-bold tracking-[0.15em] text-gray-400 md:text-lg lg:text-2xl">
        CLIENT TESTIMONIALS
      </h3>
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="flex flex-col items-center justify-center space-y-8 p-8 2xl:px-36">
            <img src={emily} alt="" className="h-20 w-20 rounded-full" />
            <p className="text-center font-barlow text-body font-bold text-gray-500">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div>
              <h3 className="text-center font-fraunces text-lg font-black">
                Emily R.
              </h3>
              <p className="py-1 text-center font-barlow text-sm font-bold text-gray-400">
                Marketing Director
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="flex flex-col items-center justify-center space-y-8 p-8 2xl:px-36">
            <img src={thomas} alt="" className="h-20 w-20 rounded-full" />
            <p className="text-center font-barlow text-body font-bold text-gray-500">
              Sunnyside&apos;s enthusiasm coupled with their keen interest in
              our brand&apos;s success made it a satisfying and enjoyable
              experience.
            </p>
            <div>
              <h3 className="text-center font-fraunces text-lg font-black">
                Thomas S.
              </h3>
              <p className="py-1 text-center font-barlow text-sm font-bold text-gray-400">
                Chief Operating Officer
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="flex flex-col items-center justify-center space-y-8 p-8 2xl:px-36">
            <img src={jennie} alt="" className="h-20 w-20 rounded-full" />
            <p className="text-center font-barlow text-body font-bold text-gray-500">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div>
              <h3 className="text-center font-fraunces text-lg font-black">
                Jessie F.
              </h3>
              <p className="text-md py-1 font-barlow text-sm font-bold text-gray-400">
                Business Owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
