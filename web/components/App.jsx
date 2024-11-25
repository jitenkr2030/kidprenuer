import { SignedInOrRedirect, SignedOut, SignedOutOrRedirect, Provider } from "@gadgetinc/react";
import { Suspense, useEffect } from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate, Link } from "react-router-dom";
import { api } from "../api";
import Index from "../routes/index";
import LandingPage from "../routes/landing-page";
import SignedInPage from "../routes/signed-in";
import SignInPage from "../routes/sign-in";
import SignUpPage from "../routes/sign-up";
import ResetPasswordPage from "../routes/reset-password";
import VerifyEmailPage from "../routes/verify-email";
import ChangePassword from "../routes/change-password";
import ForgotPassword from "../routes/forgot-password";
import VirtualStore from "../routes/virtual-store";
import ProductDesign from "../routes/product-design";
import FinancialTracking from "../routes/financial-tracking";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = `${process.env.GADGET_APP}`;
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* Landing page is the default route */}
        <Route index element={<LandingPage />} /> 
        <Route path="signed-in" element={<SignedInOrRedirect><SignedInPage /></SignedInOrRedirect>} />
        <Route path="change-password" element={<SignedInOrRedirect><ChangePassword /></SignedInOrRedirect>} />
        <Route path="forgot-password" element={<SignedOutOrRedirect><ForgotPassword /></SignedOutOrRedirect>} />
        <Route path="sign-in" element={<SignedOutOrRedirect><SignInPage /></SignedOutOrRedirect>} />
        <Route path="sign-up" element={<SignedOutOrRedirect><SignUpPage /></SignedOutOrRedirect>} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="virtual-store" element={<VirtualStore />} />
        <Route path="product-design" element={<ProductDesign />} />
        <Route path="financial-tracking" element={<FinancialTracking />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
      </Route>
    )
  );

  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Provider api={api} navigate={navigate} auth={window.gadgetConfig.authentication}>
      <Header />
      <main className="app">
        <div className="app-content">
          <div className="main">
            <Outlet />
          </div>
        </div>
        {/* Footer Section */}
        <footer className="landing-page-footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Kidpreneur Academy. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/about-us" className="footer-link">About Us</Link>
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <Link to="/contact-us" className="footer-link">Contact Us</Link>
            </div>
          </div>
        </footer>
      </main>
    </Provider>
  );
};

const Header = () => (
  <header className="header">
    <a href="/" target="_self" rel="noreferrer" className="logo-link">
      <div className="logo">{process.env.GADGET_APP}</div>
    </a>
    <div className="header-content">
      <SignedOut>
        <Link to="/sign-in" className="header-link">Sign in</Link>
        <Link to="/sign-up" className="header-link">Sign up</Link>
      </SignedOut>
    </div>
  </header>
);

export default App;



