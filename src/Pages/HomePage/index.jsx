import {useAuth0} from "@auth0/auth0-react";


const HomePage = () => {


    const {loginWithRedirect} = useAuth0();
    return (
        <div className="flex items-center justify-center h-screen">
            <button
                onClick={() => loginWithRedirect()}
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
                Login to Daily Dev Notes
            </button>
        </div>
    );
};

export default HomePage;
