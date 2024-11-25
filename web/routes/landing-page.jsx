import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Kidpreneur Academy</h1>
          <p className="hero-subtitle">
             Empowering young minds to explore entrepreneurship in a fun and interactive way!
          </p>
          <div className="cta-buttons">
            <Link to="/about" className="cta-button about">
              Learn More
            </Link>
            <Link to="/contact" className="cta-button contact">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          {[
            {
              title: "Virtual Store Creation",
              description:
                "Kids can design their virtual stores with custom layouts, logos, and themes.",
            },
            {
              title: "Product Design & Development",
              description:
                "Create and customize products while learning how creativity drives sales.",
            },
            {
              title: "Pricing & Budgeting Basics",
              description:
                "Understand pricing, profit margins, and manage expenses with interactive tools.",
            },
            {
              title: "Marketing Campaigns",
              description:
                "Develop marketing strategies, create ads, and build brand awareness.",
            },
            {
              title: "Financial Literacy Tools",
              description:
                "Track sales, costs, and profits with easy-to-use financial tools.",
            },
            {
              title: "Customer Feedback",
              description:
                "Respond to feedback and solve challenges to improve the business.",
            },
          ].map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

    {/* Testimonial Section */}
      <div className="testimonial-section">
        <h2 className="section-title"> What Our Young Entrepreneurs Are Saying</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Kidpreneur Academy helped me turn my ideas into reality. I loved creating my own product and learning about budgeting!"</p>
            <h4>- Emma, Age 12</h4>
          </div>
          <div className="testimonial-card">
            <p> "The mentorship program was amazing! I learned so much about marketing and running a business from my mentor."</p>
            <h4>- Liam, Age 15</h4>
          </div>
           <div className="testimonial-card">
            <p> "The mentorship program was amazing! I learned so much about marketing and running a business from my mentor."</p>
            <h4>- Liam, Age 15</h4>
          </div>
           <div className="testimonial-card">
            <p> "The mentorship program was amazing! I learned so much about marketing and running a business from my mentor."</p>
            <h4>- Liam, Age 15</h4>
          </div>
        </div>
      </div>


      
      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="cta-button submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default LandingPage;


