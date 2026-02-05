import Layout from "@/components/Layout";
import { Users, Handshake } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Local Roasters Co.",
      type: "Coffee Supply",
      description: "Premium coffee beans sourced directly from local roasters",
    },
    {
      name: "Fresh Farms Dairy",
      type: "Dairy & Cream",
      description: "Fresh milk and cream products for all our beverages",
    },
    {
      name: "Campus Events",
      type: "Event Partner",
      description: "Collaborating on student events and campus activities",
    },
    {
      name: "Student Union",
      type: "Community Partner",
      description: "Supporting student initiatives and campus life",
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partners</h1>
            <p className="text-foreground/70 text-lg">
              We work with amazing local businesses and campus communities to bring you the best experience.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{partner.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{partner.type}</p>
                    <p className="text-foreground/70">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership CTA */}
          <div className="p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Interested in Partnering?</h2>
            <p className="text-foreground/70 mb-6">
              We're always looking for local businesses, suppliers, and campus communities to collaborate with. Let's work together!
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </button>
          </div>

          {/* Benefits Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Why Partner With Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-background border border-border text-center">
                <div className="text-3xl mb-3">📍</div>
                <h4 className="font-semibold mb-2">High Visibility</h4>
                <p className="text-foreground/70 text-sm">
                  Reach hundreds of students and campus visitors
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border border-border text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold mb-2">Community Focused</h4>
                <p className="text-foreground/70 text-sm">
                  Be part of a student-first community hub
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background border border-border text-center">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-semibold mb-2">Shared Growth</h4>
                <p className="text-foreground/70 text-sm">
                  Grow together with a mission-driven café
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
