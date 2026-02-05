import Layout from "@/components/Layout";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h1>
            <p className="text-foreground/70 text-lg">
              Find us on campus and stop by for your favorite drink.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Information */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-foreground/70">
                    123 Campus Lane<br />
                    Student Center, Building A<br />
                    Your College Town, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-3">Hours</h3>
                  <div className="space-y-2 text-foreground/70 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>7:00am - 8:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00am - 9:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>9:00am - 6:00pm</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-foreground/70">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-foreground/70">hello@meerscafe.com</p>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-colors">
                Get Directions
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="h-96 md:h-full rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-3" />
                <p className="text-foreground/60">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-2">Can't find us?</h3>
            <p className="text-foreground/70 mb-6">
              Ask us to build an interactive map with detailed directions!
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition-colors">
              Request Interactive Map
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Location;
