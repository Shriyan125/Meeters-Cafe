import Layout from "@/components/Layout";
import { Coffee, Zap, BookOpen } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      name: "Coffee",
      icon: "☕",
      items: ["Espresso", "Americano", "Cappuccino", "Latte", "Macchiato"],
    },
    {
      name: "Tea",
      icon: "🍵",
      items: ["Green Tea", "Black Tea", "Herbal Tea", "Matcha", "Chai Latte"],
    },
    {
      name: "Pastries",
      icon: "🥐",
      items: ["Croissant", "Muffin", "Scone", "Cookie", "Brownie"],
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-foreground/70 text-lg">
              Explore our full selection of fresh brews, pastries, and favorites.
            </p>
          </div>

          {/* Placeholder Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {menuCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-foreground/70">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-2">Want to see more?</h3>
            <p className="text-foreground/70 mb-6">
              Ask us to build out the full detailed menu with prices and descriptions!
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition-colors">
              Request Full Menu
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
