import Logo from "./SVG/Logo";
import FacebookSvg from "./SVG/FacebookSvg";
import InstagramSvg from "./SVG/InstagramSvg";
import TwitterSvg from "./SVG/TwitterSvg";
import PinterestSvg from "./SVG/PinterestSvg";
export const Footer = () => {
  return (
    <footer className="bg-darkCyan-footer p-8 py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Logo className="fill-darkCyan-footerText"></Logo>
        <div>
          <ul className="flex items-center justify-center gap-12 font-barlow font-semibold text-darkCyan-moderate">
            <li className="cursor-pointer hover:text-white">About</li>
            <li className="cursor-pointer hover:text-white">Services</li>
            <li className="cursor-pointer hover:text-white">Projects</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 pt-16 text-darkCyan-desaturated">
        <FacebookSvg className="cursor-pointer hover:fill-white" />
        <InstagramSvg className="cursor-pointer hover:fill-white" />
        <TwitterSvg className="cursor-pointer hover:fill-white" />{" "}
        <PinterestSvg className="cursor-pointer hover:fill-white" />
      </div>
    </footer>
  );
};
