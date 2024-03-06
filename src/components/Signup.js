export default function Signup (){
    return(
    <div>
        <h1 className="text-5xl font-bold text-center text-gary-900 mt-1 mb-4">Sign Up</h1>
        <div>
            <label>Username : </label>
            <input 
                type="text"
                id="username"
                placeholder="Enter Username"
                autoComplete="off"
                className="border border-gray-300 focus:border-red-500 hover:border-blue-500 focus:outline-none px-2 py-1 rounded-md"
            />
        </div>

        <div>
            <label>Password : </label>
            <input 
                type="password"
                id="password"
                placeholder="Enter Password"
                autoComplete="off"
                className="border border-gray-300 focus:border-red-500 hover:border-blue-500 focus:outline-none px-2 py-1 rounded-md"
            />
        </div>
        
    </div>  
    )
}