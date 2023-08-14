
import BannerImage from "../img/banner-home.jpeg";
import MountKenya from "../img/Fairmont-Mount-Kenya-Safari-Club3.jpg";
import Mara3Kenya from "../img/maasai-mara3.jpeg";
import Mara2Kenya from "../img/masai-mara.jpg";
import Samburu2Kenya from "../img/samburu2.jpeg";
import LamuKenya from "../img/The-Majlis-Hotel-Resort-Manda-Island-Lamu-Pool.jpg";
import GirafeCenter from "../img/breakfastwithgiraffe.jpg";
export default function (){
    return (
      <div class="grid grid-cols-2 gap-2" >
        <img src={MountKenya}></img>
        <img src={Mara3Kenya}></img>
        <img src={Mara2Kenya}></img>
        <img src={Samburu2Kenya}></img>
        <img src={LamuKenya}></img>
        <img src={GirafeCenter}></img>
</div>
    );
}