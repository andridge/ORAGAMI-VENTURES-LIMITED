import Header from "../components/header";
import Training from "../components/training";
import Consultation from "../components/consultation";
import Hospitality from "../components/hospitality";
export default function Service (){
return(
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <Header/>
    <Training/>
    <Consultation/>
    <Hospitality/>
    </div>
);
}