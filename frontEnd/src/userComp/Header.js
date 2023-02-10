const logout = async () => {
    try {
        sessionStorage.clear();
        await fetch("http://localhost:3500/logout", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        window.location.href = "/signin";
    } catch (error) {
        console.log(error.message);
    }
    
};
const Header = () => {
    return (
        <div>
            <h1>HEADER</h1>
            <button onClick={logout}>LOG OUT</button>
        </div>
    );
};

export default Header;
