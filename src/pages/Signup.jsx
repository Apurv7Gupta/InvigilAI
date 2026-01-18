import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Signup() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
            <div className="w-full max-w-md rounded-2xl bg-gray-900 border border-gray-800 shadow-xl p-8">

                <h1 className="text-3xl font-semibold text-center text-[#5B6CFF]">
                    Create Account
                </h1>

                <p className="text-center text-gray-400 mt-2">
                    Start your journey with InvigilAI
                </p>

                <div className="mt-8 space-y-4">
                    <button
                        onClick={() =>
                            loginWithRedirect({
                                authorizationParams: { screen_hint: "signup" },
                            })
                        }
                        className="w-full bg-[#5B6CFF] text-white py-2 rounded-lg font-medium"
                    >
                        Sign up with Email
                    </button>

                    <button
                        onClick={() =>
                            loginWithRedirect({
                                authorizationParams: {
                                    screen_hint: "signup",
                                    connection: "google-oauth2",
                                },
                            })
                        }
                        className="w-full bg-gray-800 text-white py-2 rounded-lg border border-gray-700"
                    >
                        Sign up with Google
                    </button>
                </div>

                <p className="text-center text-sm text-gray-400 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-[#5B6CFF] font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
