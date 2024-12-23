const PricingData = {
    id: "pricing-section-1",
    title: "Choose Your Plan",
    plans: [
      {
        id: "plan-1",
        name: "Basic Plan",
        description: "Ideal for individuals.",
        price: 499,
        pricePeriod: "Month",
        isRecommended: false,
        product_features: {
          data: [
            { id: "feature-1", attributes: { name: "Feature 1 of Basic" } },
            { id: "feature-2", attributes: { name: "Feature 2 of Basic" } },
            { id: "feature-3", attributes: { name: "Feature 3 of Basic" } },
          ],
        },
      },
      {
        id: "plan-2",
        name: "Pro Plan",
        description: "Perfect for professionals.",
        price: 1499,
        pricePeriod: "Month",
        isRecommended: true,
        product_features: {
          data: [
            { id: "feature-3", attributes: { name: "Feature 1 of Pro" } },
            { id: "feature-4", attributes: { name: "Feature 2 of Pro" } },
            { id: "feature-5", attributes: { name: "Feature 3 of Pro" } },
          ],
        },
      },
      {
        id: "plan-3",
        name: "Enterprise Plan",
        description: "Designed for large teams.",
        price: 4599,
        pricePeriod: "Month",
        isRecommended: false,
        product_features: {
          data: [
            { id: "feature-6", attributes: { name: "Feature 1 of Enterprise" } },
            { id: "feature-7", attributes: { name: "Feature 2 of Enterprise" } },
            { id: "feature-8", attributes: { name: "Feature 3 of Enterprise" } },
            { id: "feature-9", attributes: { name: "Feature 4 of Enterprise" } },
          ],
        },
      },
    ],
  };

  export default PricingData;