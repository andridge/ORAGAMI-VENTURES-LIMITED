import Header from "../components/header";
import Simba from "../components/Simba";
import Ndovu from "../components/Ndovu";
import Flamingo from "../components/Flamingo";
import Chui from "../components/Chui";
export default function Service (){
return(
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <Header />
    <Simba id="Simba"/>
    <Ndovu id="Ndovu"/>
    <Flamingo id="Flamingo"/>
    <Chui id="Chui"/>
    </div>
);
}