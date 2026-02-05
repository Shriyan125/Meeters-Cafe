import Layout from "@/components/Layout";

const Menu = () => {
  const menuCategories = [
    {
      name: "Coffee",
      icon: "☕",
      items: [
        { name: "Espresso", price: "$2.50" },
        { name: "Americano", price: "$3.00" },
        { name: "Cappuccino", price: "$4.50" },
        { name: "Latte", price: "$4.75" },
        { name: "Macchiato", price: "$4.00" },
        { name: "Cortado", price: "$3.75" },
        { name: "Flat White", price: "$5.00" },
      ],
    },
    {
      name: "Tea",
      icon: "🍵",
      items: [
        { name: "Green Tea", price: "$3.50" },
        { name: "Black Tea", price: "$3.50" },
        { name: "Herbal Tea", price: "$3.75" },
        { name: "Matcha Latte", price: "$5.00" },
        { name: "Chai Latte", price: "$4.50" },
        { name: "Oolong Tea", price: "$3.75" },
        { name: "English Breakfast", price: "$3.50" },
      ],
    },
    {
      name: "Cold Drinks",
      icon: "🧊",
      items: [
        { name: "Iced Coffee", price: "$3.75" },
        { name: "Iced Latte", price: "$4.75" },
        { name: "Iced Americano", price: "$3.50" },
        { name: "Cold Brew", price: "$4.00" },
        { name: "Iced Matcha", price: "$5.25" },
        { name: "Iced Chai", price: "$4.75" },
      ],
    },
    {
      name: "Pastries",
      icon: "🥐",
      items: [
        { name: "Croissant", price: "$3.50" },
        { name: "Chocolate Croissant", price: "$4.00" },
        { name: "Muffin", price: "$3.75" },
        { name: "Scone", price: "$3.50" },
        { name: "Cookie", price: "$2.50" },
        { name: "Brownie", price: "$3.00" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-foreground/70 text-lg">
              Explore our full selection of fresh brews, pastries, and cold
              drinks.
            </p>
          </div>

          {/* Menu Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {menuCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">{category.icon}</div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 rounded-lg bg-background border border-border/50 hover:border-primary/30 hover:bg-background transition-colors group cursor-pointer"
                    >
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <span className="text-primary font-bold text-lg">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
