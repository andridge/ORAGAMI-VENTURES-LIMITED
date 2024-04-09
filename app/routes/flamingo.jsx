import Flamingo from "../components/Flamingo";
import Footer from "../components/footer";
import Header from "../components/header";
import Copyright from "../components/copyright";
export default function (){
    return(
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
                 <Footer/>
                 <Header/>
<Flamingo id="Flamingo"/>
<Copyright/>
     </div>
    )
}