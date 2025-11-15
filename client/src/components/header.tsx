function Header() {
    return (
        <div className="w-full h-16">
            <header className="navbar bg-primary flex h-full items-center">
                <nav className="flex items-center w-full mx-6 px-4">
                    <a className="mx-4">Gridiron Insight</a>
                    <ul className="flex ml-6 space-x-6">
                        <li className="flex h-16 items-center justify-center">Top Performers</li>
                        <li className="flex h-16 items-center justify-center">Players</li>
                        <li className="flex h-16 items-center justify-center">My Team</li>
                    </ul>
                    <div>
                        {/* LOGIN BUTTON GOES HERE */}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;