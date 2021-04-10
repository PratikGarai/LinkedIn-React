import './Login.css';

const Login  = () => {

    const register = () => {
        console.log("Register");
    };

    const loginToApp = () => {
        console.log("Login");
    };

    return (
        <div className="login">
            <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" alt="LinkedIn"/>

            <form>
                <input type="text" placeholder="Full Name (required if registering) " />
                <input type="url" placeholder="Profile pic URL (optional) " />
                <input type="email" placeholder="Email " />
                <input type="password" placeholder="Password " />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>
                Not a member?{" "}
                <span className="login__register" onClick={register}>Register now</span>
            </p>
        </div>
    )
}

export default Login;