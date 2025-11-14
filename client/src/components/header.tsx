function Header() {
    return (
        <div className="w-full h-16">
            <header className="flex h-full items-center bg-blue-950">
                <nav className="flex w-full mx-6 px-4">
                    <button>Gridiron Insight</button>
                    <ul className="flex ml-4 space-x-6">
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