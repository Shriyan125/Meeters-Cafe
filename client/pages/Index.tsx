import Layout from "@/components/Layout";
import { Coffee, Clock, MapPin, Users, Star, ArrowRight } from "lucide-react";

export default function Index() {
  const featuredDishes = [
    {
      id: 1,
      name: "Classic Cappuccino",
      description: "Rich espresso with velvety steamed milk foam",
      price: "$4.50",
      image: "bg-amber-200",
      icon: "☕",
    },
    {
      id: 2,
      name: "Matcha Latte",
      description: "Smooth green tea with creamy oat milk",
      price: "$5.00",
      image: "bg-green-200",
      icon: "🍵",
    },
    {
      id: 3,
      name: "Iced Oat Latte",
      description: "Cold brew espresso with chilled oat milk",
      price: "$4.75",
      image: "bg-blue-100",
      icon: "🧊",
    },
    {
      id: 4,
      name: "Pastry Bundle",
      description: "Croissant with any hot beverage",
      price: "$7.50",
      image: "bg-orange-100",
      icon: "🥐",
    },
  ];

  const partners = [
    { name: "Local Roasters Co.", type: "Coffee Supply" },
    { name: "Fresh Farms Dairy", type: "Milk & Cream" },
    { name: "Campus Events", type: "Event Partner" },
    { name: "Student Union", type: "Community Partner" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-semibold text-sm mb-4 px-3 py-1 bg-primary/10 rounded-full">
                Welcome to Meeter's Café
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                Your Campus Coffee Haven
              </h1>
              <p className="text-lg text-foreground/70 mb-8 max-w-lg">
                Freshly brewed coffee, cozy vibes, and the perfect study spot. Where students connect over great drinks and shared moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  Order Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Menu
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-foreground/60">Happy Students</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-foreground/60">Fresh Brewed</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">7am</p>
                  <p className="text-sm text-foreground/60">Open Daily</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-6xl">☕</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Meeter's Café</h2>
            <p className="text-foreground/70 text-lg">
              Founded by students, for students. We believe great coffee brings people together. Our café is more than just a coffee shop—it's where friendships start, ideas bloom, and late-night study sessions become memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow">
              <Coffee className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Brews</h3>
              <p className="text-foreground/70">
                We source the finest beans from local roasters and craft every drink with care and expertise.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-foreground/70">
                A welcoming space where every student feels at home, whether studying alone or meeting friends.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow">
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Friendly</h3>
              <p className="text-foreground/70">
                Great prices, loyalty rewards, and a space that welcomes you from morning classes to late-night sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Favorites</h2>
            <p className="text-foreground/70 text-lg">
              Start with our most-loved drinks and pastries. Each one crafted to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div
                  className={`${dish.image} h-32 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform`}
                >
                  {dish.icon}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{dish.name}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">{dish.price}</span>
                    <button className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/menu"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Explore Full Menu
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Find Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-foreground/70">
                    123 Campus Lane<br />
                    Student Center, Building A<br />
                    Your College Town
                  </p>
                  <button className="mt-3 text-primary hover:text-primary/80 font-medium text-sm">
                    Get Directions →
                  </button>
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

              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-colors">
                Visit Us Today
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="h-80 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-foreground/60">Campus Location Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-foreground/70 text-lg">
              We collaborate with amazing local businesses and campus communities to bring you the best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{partner.name}</h3>
                <p className="text-sm text-foreground/60">{partner.type}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
            <h3 className="font-semibold text-lg mb-2">Want to Partner With Us?</h3>
            <p className="text-foreground/70 mb-4">
              We're always looking for local businesses and campus groups to collaborate with.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Visit?</h2>
            <p className="text-foreground/70 text-lg mb-8">
              Stop by Meeter's Café today and experience why students love us.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Order Your Favorite Now
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
