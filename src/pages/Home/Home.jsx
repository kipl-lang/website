// components
import Intro from "../../components/Intro/index.js";
import HelmetStruct from "../../components/HelmetStruct/index.js";

const Home = () => {
    return(
        <>
            <HelmetStruct title={"KIPL"} />
            <div>
                <Intro/>
            </div>
        </>
    );
}

export default Home;