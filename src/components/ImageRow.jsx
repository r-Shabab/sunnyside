import mobileBottles from "../assets/mobile/image-gallery-milkbottles.jpg";
import desktopBottles from "../assets/desktop/image-gallery-milkbottles.jpg";
import mobileOrange from "../assets/mobile/image-gallery-orange.jpg";
import desktopOrange from "../assets/desktop/image-gallery-orange.jpg";
import mobileCone from "../assets/mobile/image-gallery-cone.jpg";
import desktopCone from "../assets/desktop/image-gallery-cone.jpg";
import mobileSugarTiles from "../assets/mobile/image-gallery-sugar-cubes.jpg";
import desktopSugarTiles from "../assets/desktop/image-gallery-sugarcubes.jpg";
function ImageRow() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <img src={mobileBottles} alt="" className="md:hidden" />
        <img src={desktopBottles} alt="" className="hidden md:block" />
        <img src={mobileOrange} alt="" className="md:hidden" />
        <img src={desktopOrange} alt="" className="hidden md:block" />
        <img src={mobileCone} alt="" className="md:hidden" />
        <img src={desktopCone} alt="" className="hidden md:block" />
        <img src={mobileSugarTiles} alt="" className="md:hidden" />
        <img src={desktopSugarTiles} alt="" className="hidden md:block" />
      </div>
    </section>
  );
}
export default ImageRow;
