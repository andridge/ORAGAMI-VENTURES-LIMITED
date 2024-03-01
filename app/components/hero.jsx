import BannerImage from "../img/banner-home.jpeg"
import CompanyImage from "../img/favicon copy.jpeg"
import Homescreen from "../img/hero.jpeg"
import Logo from "../img/logo.png"
export default function (){
    return (
<div className="h-screen flex items-center">
  <section className="bg-cover bg-center py-32 w-full h-full">
    <div className="container mx-auto text-center text-white opacity-105">
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <h1 style={{ color: '#BB2000' }} className="text-5xl mb-6 font-bold">
            WELCOME TO ORIGAMI VENTURES LIMITED
          </h1>
          <br />
          <p className="text-3xl mb-12 text">
            We Take You there ! !
          </p>
          <a href="/aboutus" className="bg-red-600 text-white py-4 px-12 rounded-full hover:bg-black">
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}