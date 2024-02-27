import user from '../user.png';

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 bg-gray-100 rounded-lg shadow-lg p-6">
                <form className="flex flex-col items-center">
                    <img src={user} alt="user" className="h-20 w-20 -mt-12 rounded-lg "/>
                    <h1 className="text-3xl font-bold text-center text-gray-900 mt-1 mb-4">Login Page</h1>
                    <div className="mb-4 flex items-center">
                        <label htmlFor="username" className="w-20 text-right mr-4">Username : </label>
                        <input 
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            autoComplete="off"
                            className="border border-gray-300 focus:border-red-500 hover:border-blue-500 focus:outline-none px-2 py-1 rounded-md"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="password" className="w-20 text-right mr-4">Password : </label>
                        <input 
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 focus:border-red-500 hover:border-blue-500 focus:outline-none px-2 py-1 rounded-md"
                        />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md">Login</button>
                </form>
            </div>
        </div>
    )
}
