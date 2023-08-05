import Navbar from "../components/Navbar"
import Background2 from "../assets/bg2.jpg";
import Background1 from "../assets/bg1.jpg"

function Login() {
    return (
        <div className="h-screen flex">
            <Navbar />
            <div className="flex-1 flex flex-col justify-center items-center relative">
                <div className="absolute inset-0" style={{ backgroundImage: `url(${Background2})` }}></div>
                <div className="absolute inset-0 backdrop-blur-md"></div> {/* This div creates the blurred effect */}
                <div className="bg-white p-8 rounded-3xl shadow-md h-[25rem] w-[30rem] relative">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    {/* Add your login form inputs here */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full px-4 py-2 border border-gray-400 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-400 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* Right side with login image */}
            <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${Background1})` }}></div>
        </div>
    )
}

export default Login;
