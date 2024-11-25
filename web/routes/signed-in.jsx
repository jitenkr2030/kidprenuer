import React from "react";
import { useUser, useSignOut } from "@gadgetinc/react";
import { api } from "../api";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faKey,
  faUserEdit,
  faTasks,
  faStore,
  faPaintBrush,
  faChartLine,
  faBullhorn,
  faTrophy,
  faUsers,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import "./EnhancedDashboard.css";

export default function EnhancedDashboard() {
  const user = useUser(api);
  const signOut = useSignOut();

  return user ? (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <img
          src="https://assets.gadget.dev/assets/default-app-assets/react-logo.svg"
          alt="App Logo"
          className="app-logo animated-logo"
        />
        <h1 className="welcome-message">Welcome, {user.firstName}!</h1>
        <p className="tagline">Build your dreams, one step at a time!</p>
      </header>

      {/* User Profile Section */}
      <section className="profile-section">
        <div className="profile-card">
          <img
            src={user.googleImageUrl ?? "https://assets.gadget.dev/assets/default-app-assets/default-user-icon.svg"}
            alt="User Avatar"
            className="profile-avatar"
          />
          <h2 className="user-name">
            {user.firstName} {user.lastName}
          </h2>
          <p className="user-email">
            Email: <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
          <p className="user-joined">Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
          <button className="signout-btn" onClick={signOut}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
          </button>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="action-cards">
          <Link to="/change-password" className="action-card">
            <FontAwesomeIcon icon={faKey} className="action-icon" />
            <h3>Change Password</h3>
            <p>Secure your account with a new password.</p>
          </Link>
          <a
            href="/reset-password"
            target="_blank"
            rel="noreferrer"
            className="action-card"
          >
            <FontAwesomeIcon icon={faUserEdit} className="action-icon" />
            <h3>Edit Profile</h3>
            <p>Update your personal details.</p>
          </a>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="features-section">
        <h2 className="section-title">Explore Features</h2>
        <div className="features-grid">
          <Link to="/virtual-store" className="feature-card">
            <FontAwesomeIcon icon={faStore} className="feature-icon" />
            <h3>Virtual Store</h3>
            <p>Create and customize your store layout and branding.</p>
          </Link>
          <Link to="/product-design" className="feature-card">
            <FontAwesomeIcon icon={faPaintBrush} className="feature-icon" />
            <h3>Product Design</h3>
            <p>Design unique products and preview them in 3D.</p>
          </Link>
          <Link to="/financial-tracking" className="feature-card">
            <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
            <h3>Financial Tracking</h3>
            <p>Monitor sales, profits, and expenses.</p>
          </Link>
          <Link to="/marketing-campaigns" className="feature-card">
            <FontAwesomeIcon icon={faBullhorn} className="feature-icon" />
            <h3>Marketing Campaigns</h3>
            <p>Create engaging campaigns to attract customers.</p>
          </Link>
          <Link to="/marketing-campaigns" className="feature-card">
            <FontAwesomeIcon icon={faBullhorn} className="feature-icon" />
            <h3>Marketing Campaigns</h3>
            <p>Create engaging campaigns to attract customers.</p>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="section-title">Your Progress</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <FontAwesomeIcon icon={faTasks} className="stat-icon" />
            <h3>Tasks Completed</h3>
            <p>45</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faTrophy} className="stat-icon" />
            <h3>Achievements</h3>
            <p>15 Badges</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faUsers} className="stat-icon" />
            <h3>Community Posts</h3>
            <p>12 Discussions</p>
          </div>
        </div>
      </section>

      
      {/* Upcoming Events Section */}
<section className="events-section">
  <h2 className="section-title">Upcoming Events</h2>
  <ul className="events-list">
    <li className="event-item">
      <div className="event-icon">🎉</div>
      <div className="event-details">
        <h3 className="event-title">Business Competition</h3>
        <p className="event-date">November 25</p>
        <button className="signout-btn" onClick={signOut}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Join Now
          </button>
      </div>
    </li>
    <li className="event-item">
      <div className="event-icon">📚</div>
      <div className="event-details">
        <h3 className="event-title">Financial Literacy Workshop</h3>
        <p className="event-date">December 10</p>
        <button className="signout-btn" onClick={signOut}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Join Now
          </button>
      </div>
    </li>
    <li className="event-item">
      <div className="event-icon">🌟</div>
      <div className="event-details">
        <h3 className="event-title">Holiday Sale Promotion</h3>
        <p className="event-date">December 20</p>
        <button className="signout-btn" onClick={signOut}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Join Now
          </button>
      </div>
    </li>
  </ul>
</section>


    </div>
  ) : null;
}
