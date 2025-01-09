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
            { id: "feature-1", attributes: { name: "Access to recorded courses" } },
            { id: "feature-2", attributes: { name: "Assignment driven" } },
            { id: "feature-3", attributes: { name: "Online Certification" } },
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
            { id: "feature-3", attributes: { name: "TA support" } },
            { id: "feature-4", attributes: { name: "Access to live cohorts" } },
            { id: "feature-5", attributes: { name: "Community driven" } },
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
            { id: "feature-6", attributes: { name: "Highly customizable" } },
            { id: "feature-7", attributes: { name: "Realtime feedback" } },
            { id: "feature-8", attributes: { name: "Hands-on exercises" } },
            { id: "feature-9", attributes: { name: "24/7 community support" } },
          ],
        },
      },
    ],
  };

  export default PricingData;