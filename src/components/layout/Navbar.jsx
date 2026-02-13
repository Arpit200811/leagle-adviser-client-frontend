import { useState, useEffect } from 'react';
import { Link, NavLink as RouterNavLink, useLocation, Outlet } from 'react-router-dom';
import { Button } from '../common';
import { FaGavel } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import Footer from './Footer';

const NAVBAR_HEIGHT = '4rem'; // h-16

const NavLink = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `relative text-sm font-medium transition-colors ${isActive
        ? 'text-primary'
        : 'text-slate-600 dark:text-slate-300 hover:text-primary'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {children}
        {isActive && (
          <motion.div
            layoutId="activeNav"
            className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </>
    )}
  </RouterNavLink>
);

const MobileLink = ({ to, children, setIsOpen }) => (
  <RouterNavLink
    to={to}
    onClick={() => setIsOpen(false)}
    className={({ isActive }) =>
      `block px-6 py-4 text-lg font-semibold border-b border-slate-100 dark:border-slate-800 transition-all ${isActive
        ? 'bg-primary/5 text-primary border-l-4 border-l-primary px-5'
        : 'text-slate-900 dark:text-white hover:text-primary'
      }`
    }
  >
    {children}
  </RouterNavLink>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200 dark:border-slate-800"
        style={{ height: NAVBAR_HEIGHT }}
      >
        <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 flex items-center justify-center rounded-lg bg-primary text-white">
              <FaGavel />
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white">
              LegalConnect
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* <a href="/#how-it-works" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">How It Works</a> */}
            <NavLink to="/my-consultations">Dashboard</NavLink>
            <NavLink to="/consultation">Consultations</NavLink>
            <NavLink to="/wallet">Wallet</NavLink>
            <NavLink to="/vault">Vault</NavLink>
            {!isLoggedIn ? (
              <NavLink to="/login">Log In</NavLink>
            ) : (
              <button
                onClick={logout}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 transition-colors"
              >
                Log Out
              </button>
            )}
            <Link to="/find-lawyer">
              <Button variant="primary" className="h-10 px-6">
                Find a Lawyer
              </Button>
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <Link
              to="/settings"
              className="size-10 rounded-full bg-cover bg-center ring-2 ring-slate-200 dark:ring-slate-700"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBG05CV5rRh7NSzTis0AIgS31puTsquC3xjJsljfhivd3sFPvUBqjJAD6umNr6_-jyaHLO2prXaRfUwRI5bVNAbIbk7d6y5JffsoDohCNaxotB6uCTob1LX5XCdxQOfXS800lMafNxMuMEn06-bMpURJve2muXh8XtSgpu-uZgNwMWNz1PNF2M07YbrBndM3pLRUJ-Goe0eRRtzOAn3rtHp6K_LckNzdk3Faw5G9Gt-OfnfDpZuXuztiOiW20sprwe7wDQ5-QhsUCA")',
              }}
            />

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(v => !v)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 z-50 pt-20 border-l border-slate-200 dark:border-slate-800"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
            >
              {/* Close Button Inside Drawer */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary transition-all active:scale-95"
                aria-label="Close navigation menu"
              >
                <HiX size={24} />
              </button>

              <MobileLink to="/" setIsOpen={setIsOpen}>Home</MobileLink>
              <a
                href="/#how-it-works"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-lg font-semibold border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white hover:text-primary transition-all"
              >
                How It Works
              </a>
              <MobileLink to="/my-consultations" setIsOpen={setIsOpen}>Dashboard</MobileLink>
              <MobileLink to="/consultation" setIsOpen={setIsOpen}>Consultations</MobileLink>
              <MobileLink to="/wallet" setIsOpen={setIsOpen}>Wallet</MobileLink>
              <MobileLink to="/vault" setIsOpen={setIsOpen}>Vault</MobileLink>

              {!isLoggedIn ? (
                <MobileLink to="/login" setIsOpen={setIsOpen}>Log In</MobileLink>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-6 py-4 text-lg font-semibold border-b border-slate-100 dark:border-slate-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
                >
                  Log Out
                </button>
              )}

              <div className="p-4">
                <Link to="/find-lawyer" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full h-12">
                    Find a Lawyer
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      {/* PAGE CONTENT (FIXES OVERLAP ISSUE) */}
      <main
        className="min-h-screen flex flex-col"
        style={{ paddingTop: NAVBAR_HEIGHT }}
      >
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default NavbarLayout;
