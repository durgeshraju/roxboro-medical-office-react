import Navigation from "./Nav/Navigation";

const Header = () => {
    return (        
        <>
        {/* Site header starts here. */}
        <header className="site-header">
            <div className="container">
                Main site header container..
                <Navigation />
            </div>
        </header>
        </>
    )
}

export default Header;