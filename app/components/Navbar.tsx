export default function Navbar(){
    return(
        <nav>
            <div>
                <div>
                    <a>
                        <img src="logo.png" alt="LOGO"/>  {/*Logo */}
                    </a>
                </div>
                
                <div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse</a></li>     {/*opcje (home, browse, help) */}
                        <li><a href="#">Help</a></li>
                    </ul>  
                </div>
                
                <div>
                    <div>
                        <a href="#">Log in</a>          {/*Przyciski Sign in/Register */}                                        
                        <a href="#">Register</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}