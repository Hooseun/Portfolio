import Navbar from "../components/Navbar"
import Background2 from "../assets/bg2.jpg";

function Project () {
return(
    <div className="h-screen" style={{ backgroundImage: `url(${Background2})` }}>
        <Navbar />
        <div className="text-center pt-20">
          <h2 className="text-4xl font-bold text-blue-500">
            My Projects
          </h2>
        </div>
    </div>
)
}

export default Project;