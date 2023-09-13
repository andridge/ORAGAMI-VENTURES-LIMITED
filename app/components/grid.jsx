import { Link } from '@remix-run/react';
import Simba from "../img/simba.jpeg";
import Ndovu from "../img/ndovu.jpeg";
import Flamingo from "../img/flamingo.jpeg";
import Chui from "../img/chui.jpeg";

export default function () {
    return (
        <div>
        <h2 class=" text-red-600 text-center mb-12 text-3xl font-bold">Hospitality</h2>
        
        <div className="grid grid-cols-2 gap-2">
              
            <Link to="/hospitality">
            <div className="relative group">
               
                    <img className="w-full h-auto transition-opacity group-hover:opacity-75" src={Simba} alt="Simba" />
                
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:text-2xl">
                    <span>Simba Package</span>
                </div>
            </div>
            </Link>
            <Link to="/hospitality">
            <div className="relative group">
               
                    <img className="w-full h-auto transition-opacity group-hover:opacity-75" src={Ndovu} alt="Ndovu" />
        
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:text-xl">
                    <span>Ndovu Package</span>
                </div>
            </div>
            </Link>
            <Link to="/hospitality">
            <div className="relative group">
               
                    <img className="w-full h-auto transition-opacity group-hover:opacity-75" src={Flamingo} alt="Flamingo" />
               
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:text-xl">
                    <span>Flamingo Package</span>
                </div>
            </div>
            </Link>
            <Link to="/hospitality">
            <div className="relative group">
               
                    <img className="w-full h-auto transition-opacity group-hover:opacity-75" src={Chui} alt="Chui" />
               
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:text-xl">
                    <span>Chui Package</span>
                </div>
            </div>
            </Link>
        </div>
        </div>
    );
}
