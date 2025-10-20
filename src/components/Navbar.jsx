import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Fitness Tracker</h1>
            <ul className="flex gap-4">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/add">Add Workout</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/goals">Goals</Link></li>
            </ul>
        </nav>
    )
}