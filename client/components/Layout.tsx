import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Menu", href: "/menu" },
    { label: "Location", href: "/location" },
    { label: "Partners", href: "/partners" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                M
              </span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              Meeter's Café
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full px-6 py-2 rounded-lg font-medium transition-colors mt-2">
                Order Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    M
                  </span>
                </div>
                <span className="font-bold text-lg">Meeter's Café</span>
              </div>
              <p className="text-background/70 text-sm">
                Your favorite student café serving great coffee and vibes since
                day one.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a
                    href="/#about"
                    className="hover:text-background transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="hover:text-background transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="/location"
                    className="hover:text-background transition-colors"
                  >
                    Location
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-bold mb-4">Hours</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Mon - Fri: 7am - 8pm</li>
                <li>Sat: 8am - 9pm</li>
                <li>Sun: 9am - 6pm</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>📍 123 Campus Lane</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ hello@meerscafe.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>&copy; 2024 Meeter's Café. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
