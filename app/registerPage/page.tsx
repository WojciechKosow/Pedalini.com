import Navbar from "../components/Navbar";

export default function RegisterPage(){
    return(
        <>
        <Navbar />
        <main>
            <div className="">
                <p>Pedalini</p>
                <p>Start your learning journey</p>
                <div>
                    <button type="button" className="">Sign in</button>
                    <button type="button" className="">Register</button>
                </div>
                <div>
                    <p>
                       <input type="text" placeholder="Full Name"></input> 
                    </p>

                    <p>
                        <input type="email" placeholder="Email Address"></input>
                    </p>

                    <p>
                        <input type="password" placeholder="Password"></input>
                    </p>

                    <button type="button" className="">Create account</button>
                </div>
            </div>
        </main>
        </>
    );
}