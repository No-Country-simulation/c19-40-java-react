const Login = () =>
{
    return(
        <div className="flex flex-row h-screen items-center justify-center bg-principal-color">

            <img className="h-96 w-96" src="https://c.wallhere.com/photos/e8/2f/landscape_night_mountain_view_purple_background_pink_background_river_blue_background_clouds-2285542.jpg!d" alt="No image" />

            <div className="flex flex-col space-y-5 items-center justify-center bg-white h-96 w-96">

                <h1 className="font-bold">ProVision</h1>

                <h1 className="text-2xl font-serif">BIENVENIDO DE NUEVO</h1>

                <img className="h-20 w-24 rounded-full border-b-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s" alt="" />

                <div className="flex flex-col space-y-3 items-center w-full">
                    <div className="flex flex-col space-y-2">
                        <p className="text-xs font-bold">USUARIO</p>
                        <input type="text" className="border-b-2 border-black w-full focus:outline-none"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="text-xs font-bold">CONTRASEÑA</p>
                        <input type="password" className="border-b-2 border-black w-full focus:outline-none"/>
                    </div>
                </div>

                <div className="flex flex-row space-x-20">

                    <div className="flex items-center">
                        <input 
                            id="remember-me" 
                            type="checkbox" 
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-black rounded-full"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Recuérdame
                        </label>

                        <a href="#" className="ml-2 block text-sm text-gray-900 hover:underline">
                            Olvidaste tu contraseña?
                        </a>
                    </div>

                </div>

            </div >

        </div>
    );
};

export default Login;