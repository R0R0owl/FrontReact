import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <main className="flex-shrink-0">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
};

export default Layout;
