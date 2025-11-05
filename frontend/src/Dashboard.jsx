import { useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
    const [activeSection, setActiveSection] = useState('dashboard');

    const handleLogout = () => {
        alert('Logout clicked');
        window.location.reload();
    };

    return (
        <div className="dashboard-container">
            {/* Top Navigation Bar */}
            <nav className="dashboard-nav">
                <div className="nav-content">
                    <div className="nav-logo">
                        <img
                            src="https://placehold.co/40x40/10b981/white?text=LOGO"
                            alt="Logo"
                            className="nav-logo-img"
                        />
                        <h2>Masbanat Al-Akhawayn</h2>
                    </div>
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </div>
            </nav>

            <div className="dashboard-layout">
                {/* Sidebar Menu */}
                <aside className="sidebar">
                    <div className="menu">
                        <button
                            className={`menu-item ${activeSection === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveSection('dashboard')}
                        >
                            <span className="menu-icon">🏠</span>
                            <span>Dashboard</span>
                        </button>

                        <button
                            className={`menu-item ${activeSection === 'book' ? 'active' : ''}`}
                            onClick={() => setActiveSection('book')}
                        >
                            <span className="menu-icon">📅</span>
                            <span>Book Now</span>
                        </button>

                        <button
                            className={`menu-item ${activeSection === 'bookings' ? 'active' : ''}`}
                            onClick={() => setActiveSection('bookings')}
                        >
                            <span className="menu-icon">🕒</span>
                            <span>My Bookings</span>
                        </button>

                        <button
                            className={`menu-item ${activeSection === 'waitlist' ? 'active' : ''}`}
                            onClick={() => setActiveSection('waitlist')}
                        >
                            <span className="menu-icon">⏰</span>
                            <span>Waitlist</span>
                        </button>

                        <button
                            className={`menu-item ${activeSection === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveSection('profile')}
                        >
                            <span className="menu-icon">👤</span>
                            <span>Profile</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="dashboard-main">
                    <div className="dashboard-content">
                        {activeSection === 'dashboard' && (
                            <>
                                <h1 className="dashboard-title">Dashboard</h1>

                                <div className="dashboard-grid">

                                </div>
                            </>
                        )}

                        {activeSection === 'book' && (
                            <>
                                <h1 className="dashboard-title">Book Now</h1>
                                <p className="dashboard-subtitle">Make a new reservation</p>
                                <div className="content-placeholder">
                                    <p>Booking info will appear here</p>
                                </div>
                            </>
                        )}

                        {activeSection === 'bookings' && (
                            <>
                                <h1 className="dashboard-title">My Bookings</h1>
                                <p className="dashboard-subtitle">View your current and past reservations</p>
                                <div className="content-placeholder">
                                    <p>Bookings list will appear here</p>
                                </div>
                            </>
                        )}

                        {activeSection === 'waitlist' && (
                            <>
                                <h1 className="dashboard-title">Waitlist</h1>
                                <p className="dashboard-subtitle">Manage your waitlist status</p>
                                <div className="content-placeholder">
                                    <p>Waitlist information will appear here</p>
                                </div>
                            </>
                        )}

                        {activeSection === 'profile' && (
                            <>
                                <h1 className="dashboard-title">Profile</h1>
                                <p className="dashboard-subtitle">Account settings and booking history</p>
                                <div className="content-placeholder">
                                    <p>Profile settings will appear here</p>
                                </div>
                            </>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}