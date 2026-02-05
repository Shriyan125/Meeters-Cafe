import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🤔</div>
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-xl text-foreground/70 mb-6">
            Oops! Page not found
          </p>
          <p className="text-foreground/60 mb-8">
            This page is still being brewed. Feel free to ask us to build it!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              <Home className="w-4 h-4" />
              Return to Home
            </a>
            <a
              href="/#"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/5 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Request Page
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
