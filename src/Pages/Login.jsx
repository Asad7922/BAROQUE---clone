import './Login.css'

function Login() {
    return (
        <div className='container2'>
            <div className="container1">
                <h1 className="title1"><img src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01_2.png?v=1694417343&width=280" alt="" /></h1>
                <form className="login-form">
                    <h1 className='text-3xl'>Log in</h1>
                    <p className='pb-3'>Enter your email and we ll send you a login code</p>
                    <label>Email</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">Continue</button>
                </form>
                <div className="links">
                    <a href="#">Privacy</a>
                </div>
            </div>
        </div>
    )
}

export default Login
