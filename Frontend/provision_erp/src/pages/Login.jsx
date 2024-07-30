const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-principal-color">
            <div className="flex flex-col md:flex-row w-full max-w-6xl h-3/4 bg-white shadow-lg">
                {/* Contenedor de la imagen */}
                <div className="hidden md:flex w-full md:w-[60%] h-full overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src="https://c.wallhere.com/photos/e8/2f/landscape_night_mountain_view_purple_background_pink_background_river_blue_background_clouds-2285542.jpg!d"
                        alt="No image"
                    />
                </div>
                {/* Contenedor del formulario */}
                <div className="flex flex-col space-y-5 items-center justify-center p-6 w-full md:w-[40%] h-full">
                    <h1 className="font-bold text-lg md:text-xl">ProVision</h1>
                    <h1 className="text-xl md:text-2xl font-serif">BIENVENIDO DE NUEVO</h1>
                    <img
                        className="h-16 w-20 md:h-20 md:w-24 rounded-full border-b-2"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s"
                        alt=""
                    />
                    <form className="flex flex-col space-y-5 items-center w-72">
                        <div className="flex flex-col space-y-2 w-full">
                            <p className="text-xs font-bold">USER</p>
                            <input
                                type="text"
                                className="border-b-2 border-black w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <p className="text-xs font-bold">PASSWORD</p>
                            <input
                                type="password"
                                className="border-b-2 border-black w-full focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 w-full justify-center">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-black rounded-full"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                            </div>
                            <a href="#" className="text-sm text-gray-900 hover:underline">
                            Forgot password?
                            </a>
                        </div>

                        <button className="rounded-full px-10 py-2 bg-principal-color hover:bg-blue-600 text-white">
                            Login
                        </button>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;
