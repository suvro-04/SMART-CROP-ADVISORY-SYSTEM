const fertilizer = (plantName) => {
  const data = {
    crops: [
      {
        name: "Rice",
        fertilizers: [
          { type: "Urea", dose: "50 kg basal + 3 splits (tillering, panicle, heading)" },
          { type: "SSP", dose: "60 kg/acre at transplanting" },
          { type: "MOP", dose: "20 kg/acre basal" }
        ],
        tip: "Neem-coated urea & deep placement (USG) saves 30–40% nitrogen in Bengal."
      },
      {
        name: "Potato",
        fertilizers: [
          { type: "Urea", dose: "60 kg/acre (split)" },
          { type: "SSP", dose: "80 kg/acre basal" },
          { type: "MOP", dose: "50 kg/acre basal + split" }
        ],
        tip: "Spray 2% SOP during bulking → bigger tubers; gypsum improves potato skin quality."
      },
      {
        name: "Jute",
        fertilizers: [
          { type: "Urea", dose: "40 kg basal + split at 3–4 weeks" },
          { type: "SSP", dose: "25 kg/acre" },
          { type: "MOP", dose: "20 kg/acre" }
        ],
        tip: "Foliar spray of 2% urea + 1% zinc sulphate improves fibre length & shine."
      },
      {
        name: "Tea",
        fertilizers: [
          { type: "Urea", dose: "80–100 kg/acre in 4–5 splits annually" },
          { type: "SSP", dose: "50 kg/acre annually" },
          { type: "MOP", dose: "40 kg/acre annually" }
        ],
        tip: "Dolomite lime applied every 4–5 years corrects soil acidity in North Bengal tea gardens."
      },
      {
        name: "Mango",
        fertilizers: [
          { type: "Urea", dose: "1–1.5 kg per mature tree/year" },
          { type: "SSP", dose: "1–1.5 kg/tree" },
          { type: "MOP", dose: "1 kg/tree" }
        ],
        tip: "Spray 2% KNO₃ before flowering → better fruit set; Borax spray prevents fruit cracking."
      },
      {
        name: "Banana",
        fertilizers: [
          { type: "Urea", dose: "250 g/plant/year (split)" },
          { type: "SSP", dose: "200 g/plant/year" },
          { type: "MOP", dose: "300 g/plant/year (split)" }
        ],
        tip: "Banana pseudostem sap (local practice) → natural potash-rich fertilizer."
      },
      {
        name: "Maize",
        fertilizers: [
          { type: "Urea", dose: "40 kg basal + 2 splits (knee-high & tasseling)" },
          { type: "SSP", dose: "60 kg/acre basal" },
          { type: "MOP", dose: "20 kg/acre basal" }
        ],
        tip: "Azospirillum seed treatment cuts nitrogen need by 25%."
      },
      {
        name: "Mustard",
        fertilizers: [
          { type: "Urea", dose: "30 kg basal + split at 30 DAS" },
          { type: "SSP", dose: "40 kg/acre" },
          { type: "MOP", dose: "15 kg/acre" }
        ],
        tip: "Spray 2% urea + 0.5% borax → higher oil content."
      },
      {
        name: "Sugarcane",
        fertilizers: [
          { type: "Urea", dose: "100–120 kg/acre (3 splits)" },
          { type: "SSP", dose: "80–100 kg/acre basal" },
          { type: "MOP", dose: "50–60 kg/acre" }
        ],
        tip: "Pressmud from sugar factories improves cane juice quality."
      },
      {
        name: "Tomato",
        fertilizers: [
          { type: "Urea", dose: "30 kg basal + splits during flowering & fruiting" },
          { type: "SSP", dose: "50 kg/acre basal" },
          { type: "MOP", dose: "20 kg basal + split" }
        ],
        tip: "Seaweed extract spray in Sundarbans improves tomato colour & shelf life."
      },
      {
        name: "Chili",
        fertilizers: [
          { type: "Urea", dose: "25 kg basal + 2–3 splits" },
          { type: "SSP", dose: "40 kg/acre basal" },
          { type: "MOP", dose: "20 kg/acre basal" }
        ],
        tip: "Foliar spray of 1% calcium nitrate reduces flower & fruit drop."
      },
      {
        name: "Groundnut",
        fertilizers: [
          { type: "Urea", dose: "20 kg/acre basal" },
          { type: "SSP", dose: "50 kg/acre basal" },
          { type: "MOP", dose: "25 kg/acre basal" },
          { type: "Gypsum", dose: "40 kg/acre at flowering" }
        ],
        tip: "Gypsum → better kernel filling & higher oil content."
      },
      {
        name: "Wheat",
        fertilizers: [
          { type: "Urea", dose: "30 kg basal + splits (crown root initiation, flowering)" },
          { type: "SSP", dose: "40 kg/acre basal" },
          { type: "MOP", dose: "20 kg/acre basal" }
        ],
        tip: "Zinc sulphate (10 kg/acre) prevents yellowing in Bengal soils."
      },
      {
        name: "Pulses",
        fertilizers: [
          { type: "Urea", dose: "15 kg/acre basal" },
          { type: "SSP", dose: "30 kg/acre basal" },
          { type: "MOP", dose: "10 kg/acre basal" }
        ],
        tip: "Rhizobium seed inoculation can nearly replace urea use."
      },
      {
        name: "Turmeric",
        fertilizers: [
          { type: "FYM", dose: "4–5 tons/acre basal" },
          { type: "Urea", dose: "40 kg/acre split" },
          { type: "SSP", dose: "50 kg/acre basal" },
          { type: "MOP", dose: "30 kg/acre basal" }
        ],
        tip: "Mulching with paddy straw conserves moisture & adds natural K."
      },
      {
        name: "Ginger",
        fertilizers: [
          { type: "FYM", dose: "5 tons/acre basal" },
          { type: "Urea", dose: "50 kg/acre split" },
          { type: "SSP", dose: "60 kg/acre basal" },
          { type: "MOP", dose: "40 kg/acre basal" }
        ],
        tip: "Wood ash around rhizomes increases oil content naturally."
      },
      {
        name: "Sesame",
        fertilizers: [
          { type: "Urea", dose: "20 kg basal + split at flowering" },
          { type: "SSP", dose: "35 kg/acre basal" },
          { type: "MOP", dose: "15 kg/acre basal" }
        ],
        tip: "Borax foliar spray (0.5%) reduces flower drop & boosts oil content."
      },
      {
        name: "Pineapple",
        fertilizers: [
          { type: "Urea", dose: "20 g/plant (4 splits annually)" },
          { type: "SSP", dose: "30 g/plant" },
          { type: "MOP", dose: "40 g/plant" }
        ],
        tip: "Azolla liquid biofertilizer used in North Bengal pineapple fields."
      },
      {
        name: "Papaya",
        fertilizers: [
          { type: "Urea", dose: "250 g/plant/year (split)" },
          { type: "SSP", dose: "200 g/plant/year" },
          { type: "MOP", dose: "200 g/plant/year" }
        ],
        tip: "Vermicompost (5 kg/plant) → sweeter fruits & better colour."
      },
      {
        name: "Coconut",
        fertilizers: [
          { type: "Urea", dose: "1 kg/tree/year (split)" },
          { type: "SSP", dose: "1.5 kg/tree/year" },
          { type: "MOP", dose: "1 kg/tree/year" }
        ],
        tip: "Fish waste compost (local practice in coastal Bengal) boosts nut yield."
      },
      {
        name: "Arecanut",
        fertilizers: [
          { type: "Urea", dose: "100 g/tree/year" },
          { type: "SSP", dose: "120 g/tree/year" },
          { type: "MOP", dose: "100 g/tree/year" }
        ],
        tip: "Micronutrient foliar sprays reduce nut shedding in Bengal orchards."
      },
      {
        name: "Betel Leaf",
        fertilizers: [
          { type: "FYM", dose: "5 tons/acre basal" },
          { type: "Urea", dose: "30 kg/acre basal" },
          { type: "SSP", dose: "40 kg/acre basal" },
          { type: "MOP", dose: "20 kg/acre basal" }
        ],
        tip: "Neem cake (200 kg/acre) in Bengal ‘baroj’ fields prevents soil diseases."
      },
      {
        name: "Black Pepper",
        fertilizers: [
          { type: "Urea", dose: "100 g/vine/year" },
          { type: "SSP", dose: "150 g/vine/year" },
          { type: "MOP", dose: "120 g/vine/year" }
        ],
        tip: "Shade-grown pepper in tea gardens performs better with foliar SOP spray."
      },
      {
        name: "Cabbage & Cauliflower",
        fertilizers: [
          { type: "Urea", dose: "40 kg basal + 2 splits" },
          { type: "SSP", dose: "50 kg/acre basal" },
          { type: "MOP", dose: "20 kg/acre basal" }
        ],
        tip: "Borax spray (0.5%) prevents hollow stem in cauliflower."
      }
    ]
  };

  const formattedName = plantName.trim().toLowerCase();
  const allPlants = data.crops;

  // If user asks for overall fertilizer guide
  if (formattedName === "fertilizer guide") {
    return allPlants;
  }

  // Else return specific crop
  const result = allPlants.find(
    plant => plant.name.toLowerCase() === formattedName
  );

  if (result) {
    return result;
  } else {
    return `❌ Sorry, fertilizer data for "${plantName}" is not available.`;
  }
};
