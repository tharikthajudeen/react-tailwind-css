import user from '../user.png';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    
    const [input, setInput] = useState();

    const navigate = useNavigate();

    function onSubmit(){
        navigate('/home')
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 bg-gray-100 rounded-lg shadow-lg p-6">
                <form className="flex flex-col items-center">
                    {/* <img src={user} alt="user" className="h-20 w-20 -mt-12 rounded-lg "/> */}
                    <h1 className="text-5xl font-bold text-center text-gray-900 mt-1 mb-4">Login</h1><br/>
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

                    <button type="submit" onClick={onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded-md">Login</button>
                    <p>Don't have account?</p> <Link to="/signup"> <p className='text-blue-500 hover:text-blue-700 underline hover:no-underline'>Sign Up </p></Link>
                </form>
            </div>
        </div>
    )
}
