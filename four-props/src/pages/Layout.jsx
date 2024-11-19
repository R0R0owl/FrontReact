import { Outlet, Link } from "react-router-dom";

const Layout = (props) => {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-4">Simple header</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link">ホーム</Link></li>
                    <li className="nav-item"><Link to="/counter" className="nav-link">カウンター</Link></li>
                    <li className="nav-item"><Link to="/forecast" className="nav-link">お天気</Link></li>
                    <li className="nav-item d-flex align-items-center">{props.user ? props.user.name + 'さん' : 'ようこそゲストさん'}</li>
                </ul>
            </header>

            <main className="flex-shrink-0">
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer className="footer mt-auto py-3 bg-body-tertiary">
                <div className="container">
                    <span className="text-body-secondary">
                        Copyright © Japan Electronics College. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </>
    )
};

export default Layout;
