const seasonInfo = (query) => {
  const data = {
    seasons: [
      {
        name: "Kharif (Monsoon: June – October)",
        crops: ["Rice (Aman, Aus)", "Maize", "Jute", "Groundnut", "Soybean", "Cotton", "Turmeric"],
        fruits: ["Mango (early rains help fruiting)", "Banana", "Papaya", "Pineapple"],
        tip: "🌧️ Kharif crops depend on monsoon rains — farmers in Bengal also use rainwater harvesting ponds (‘pukur’) to ensure water supply."
      },
      {
        name: "Rabi (Winter: November – March)",
        crops: ["Wheat", "Potato", "Mustard", "Lentil", "Gram", "Barley", "Peas"],
        fruits: ["Strawberry (new in Bengal)", "Citrus (Orange, Lemon)", "Guava"],
        tip: "❄️ Rabi crops love the cool, dry winter. In West Bengal, potato is the king crop of Rabi, especially in Hooghly & Burdwan."
      },
      {
        name: "Zaid (Summer: April – June)",
        crops: ["Pumpkin", "Cucumber", "Bitter Gourd", "Watermelon", "Sesame", "Green Gram"],
        fruits: ["Watermelon", "Muskmelon", "Litchi"],
        tip: "☀️ Zaid crops grow on residual soil moisture — farmers often irrigate from tube wells or canals."
      }
    ],
    months: {
      "January": { crops: ["Wheat", "Potato", "Mustard", "Gram"], fruits: ["Guava", "Citrus"], tip: "🌿 Best month for potato harvest in Bengal." },
      "February": { crops: ["Wheat", "Lentil", "Mustard"], fruits: ["Strawberry", "Citrus"], tip: "🌼 Mustard flowers bloom, fields look golden." },
      "March": { crops: ["Barley", "Peas", "Lentil"], fruits: ["Papaya", "Banana"], tip: "🌱 Farmers prepare fields for early Aus rice." },
      "April": { crops: ["Pumpkin", "Cucumber", "Bitter Gourd"], fruits: ["Mango (early)", "Litchi"], tip: "🥭 Mango blossom turns into small fruits this month." },
      "May": { crops: ["Sesame", "Green Gram"], fruits: ["Litchi", "Mango"], tip: "🔥 Hot winds (‘loo’) affect crops, shade nets help vegetables." },
      "June": { crops: ["Paddy (Aus)", "Jute", "Maize"], fruits: ["Mango", "Jackfruit"], tip: "🌧️ Monsoon begins — time for jute sowing in Bengal." },
      "July": { crops: ["Rice (Aman)", "Groundnut", "Soybean"], fruits: ["Banana", "Papaya"], tip: "🌿 Farmers transplant Aman rice seedlings now." },
      "August": { crops: ["Rice", "Maize"], fruits: ["Guava", "Banana"], tip: "🌾 Paddy fields look lush green across Bengal." },
      "September": { crops: ["Rice", "Turmeric"], fruits: ["Papaya"], tip: "🌱 Turmeric fields are harvested in late September." },
      "October": { crops: ["Rice (Aman harvest begins)", "Maize"], fruits: ["Banana", "Pineapple"], tip: "🎉 Rice harvesting coincides with Durga Puja in Bengal." },
      "November": { crops: ["Wheat", "Potato", "Mustard"], fruits: ["Guava", "Strawberry"], tip: "🌟 Sowing season for wheat & potato begins." },
      "December": { crops: ["Wheat", "Potato", "Peas"], fruits: ["Strawberry", "Citrus"], tip: "❄️ Winter vegetables dominate Bengal markets." }
    }
  };

  const formattedQuery = query.trim().toLowerCase();

  // If user asks "crop seasons"
  if (formattedQuery === "crop seasons" || formattedQuery === "seasons") {
    return data.seasons;
  }

  // If user asks month-wise (e.g., "what to grow in July")
  const month = Object.keys(data.months).find(m => formattedQuery.includes(m.toLowerCase()));
  if (month) {
    return { month, ...data.months[month] };
  }

  // If user asks for a specific crop
  const allCrops = data.seasons.flatMap(s => s.crops);
  const allFruits = data.seasons.flatMap(s => s.fruits);
  const foundCrop = allCrops.find(c => formattedQuery.includes(c.toLowerCase()));
  const foundFruit = allFruits.find(f => formattedQuery.includes(f.toLowerCase()));

  if (foundCrop || foundFruit) {
    const found = foundCrop || foundFruit;
    const season = data.seasons.find(s =>
      s.crops.map(c => c.toLowerCase()).includes(found.toLowerCase()) ||
      s.fruits.map(f => f.toLowerCase()).includes(found.toLowerCase())
    );
    return { name: found, season: season.name, tip: season.tip };
  }

  return `❌ Sorry, no seasonal info found for "${query}".`;
};
