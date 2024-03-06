import { Link } from "react-router-dom"

export default function Navigation (){
    return (
            <nav className="bg-blue-800 p-2 text-white h-12 flex items-center justify-between">
                <ul className="flex">
                    <li className="mr-4 text-lg hover:text-gray-300"><Link to='/home'>HOME</Link></li>
                    <li className="mr-4 text-lg hover:text-gray-300"><Link to='/about'>ABOUT</Link></li>  
                </ul>
                <ul className="flex">
                    <li className=" text-white  hover:text-gray-300 text-lg rounded px-4 py-1 bg-red-700 "><Link to='/'>Logout</Link></li>
                </ul>
            </nav>    
    )
}