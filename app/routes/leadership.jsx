import Header from "../components/header";
import Contact from "../components/contact";
import Teamsections from "../components/teamsections";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
export default function (){
return(
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
   <Footer/>
   <Header/>
    <Teamsections/>
    <Copyright/>
    </div>
);
}