const pestControl = (plantName) => {
  const data = {
    crops: [
      {
        name: "Rice",
        pests: [
          {
            name: "Stem Borer",
            pesticides: ["Cartap Hydrochloride 4G", "Fipronil 0.3% GR", "Chlorantraniliprole 0.4% GR"],
            tip: "Farmers in Bengal use light traps at night – it reduces moth population drastically."
          },
          {
            name: "Brown Planthopper (BPH)",
            pesticides: ["Imidacloprid 17.8% SL", "Thiamethoxam 25% WG", "Pymetrozine 50% WG"],
            tip: "Keeping 20 cm row spacing reduces humidity in fields, discouraging BPH breeding."
          },
          {
            name: "Leaf Folder",
            pesticides: ["Flubendiamide 20% WG", "Chlorantraniliprole 18.5% SC"],
            tip: "Ducks in paddy fields eat larvae naturally – a traditional eco-friendly control."
          }
        ]
      },
      {
        name: "Jute",
        pests: [
          {
            name: "Jute Semilooper",
            pesticides: ["Emamectin Benzoate 5% SG", "Chlorpyrifos 20% EC"],
            tip: "Intercropping jute with maize reduces semilooper infestation naturally."
          },
          {
            name: "Yellow Mite",
            pesticides: ["Spiromesifen 22.9% SC", "Propargite 57% EC"],
            tip: "Spraying neem seed kernel extract (5%) is as effective as chemicals in early stages."
          },
          {
            name: "Bihar Hairy Caterpillar",
            pesticides: ["Lambda-cyhalothrin 5% EC"],
            tip: "Farmers tie bonfires near fields at night — moths are attracted to flame and perish."
          }
        ]
      },
      {
        name: "Potato",
        pests: [
          {
            name: "Aphids",
            pesticides: ["Imidacloprid 17.8% SL", "Thiamethoxam 25% WG"],
            tip: "Spraying sugar water attracts ladybird beetles that feed on aphids."
          },
          {
            name: "Cutworms",
            pesticides: ["Chlorpyrifos 20% EC (for soil drenching)"],
            tip: "Burying crushed neem seed cake in ridges reduces cutworm survival."
          },
          {
            name: "Late Blight (Fungal Disease)",
            pesticides: ["Mancozeb 75% WP", "Metalaxyl 8% + Mancozeb 64% WP"],
            tip: "Spraying garlic extract (10%) slows blight spread – an old farmer’s trick in Bihar."
          }
        ]
      },
      {
        name: "Tea",
        pests: [
          {
            name: "Tea Mosquito Bug",
            pesticides: ["Thiamethoxam 25% WG", "Deltamethrin 2.8% EC"],
            tip: "Shade trees in plantations naturally reduce mosquito bug outbreaks."
          },
          {
            name: "Red Spider Mite",
            pesticides: ["Propargite 57% EC", "Fenazaquin 10% EC"],
            tip: "Mites avoid dusty conditions – sprinkling water on leaves reduces infestation."
          },
          {
            name: "Looper Caterpillar",
            pesticides: ["Emamectin Benzoate 5% SG", "Deltamethrin 2.8% EC"],
            tip: "Encouraging bird perches in gardens keeps loopers in check."
          }
        ]
      },
      {
        name: "Vegetables",
        pests: [
          {
            name: "Fruit and Shoot Borer (Brinjal)",
            pesticides: ["Emamectin Benzoate 5% SG", "Spinosad 45% SC"],
            tip: "Farmers in Odisha cover brinjal fruits with newspaper sleeves — prevents borers."
          },
          {
            name: "Whitefly (Tomato, Brinjal)",
            pesticides: ["Diafenthiuron 50% WP", "Acetamiprid 20% SP"],
            tip: "Yellow sticky traps (bright plastic smeared with grease) attract & kill whiteflies cheaply."
          }
        ]
      }
    ],
    fruits: [
      {
        name: "Mango",
        pests: [
          {
            name: "Hoppers",
            pesticides: ["Imidacloprid 17.8% SL", "Thiamethoxam 25% WG"],
            tip: "Smoking the orchard with dried leaves in evening reduces hopper activity."
          },
          {
            name: "Fruit Fly",
            pesticides: ["Bait spray using Malathion 50% EC + jaggery", "Cover spray with Deltamethrin 2.8% EC"],
            tip: "Hanging banana fruit bait traps is an indigenous practice to lure fruit flies."
          },
          {
            name: "Mealybug",
            pesticides: ["Chlorpyrifos 20% EC (for soil/banding)", "Imidacloprid 17.8% SL"],
            tip: "Wrapping mango tree trunk with polythene band stops mealybug crawlers from climbing."
          }
        ]
      },
      {
        name: "Litchi",
        pests: [
          {
            name: "Fruit Borer",
            pesticides: ["Cypermethrin 25% EC", "Deltamethrin 2.8% EC"],
            tip: "Spraying neem oil (2%) before flowering drastically reduces borer attack."
          },
          {
            name: "Litchi Mite (Erinose)",
            pesticides: ["Wettable Sulphur 80% WP", "Dicofol 18.5% EC"],
            tip: "Applying wood ash on leaves was traditionally used to check mites."
          }
        ]
      },
      {
        name: "Banana",
        pests: [
          {
            name: "Rhizome Weevil",
            pesticides: ["Chlorpyrifos 20% EC (soil drenching)"],
            tip: "Placing chopped pseudostem traps attracts adult weevils – then destroy them manually."
          },
          {
            name: "Pseudostem Borer",
            pesticides: ["Chlorpyrifos 20% EC (stem injection)"],
            tip: "Using cow dung paste on cut surfaces reduces entry of borers."
          }
        ]
      },
      {
        name: "Guava",
        pests: [
          {
            name: "Fruit Fly",
            pesticides: ["Bait spray using Malathion 50% EC + jaggery", "Cover spray with Deltamethrin 2.8% EC"],
            tip: "Covering fruits with paper/polybags avoids chemical use entirely."
          },
          {
            name: "Mealybug",
            pesticides: ["Imidacloprid 17.8% SL", "Thiamethoxam 25% WG"],
            tip: "Planting marigold around guava orchard reduces mealybug movement."
          }
        ]
      }
    ]
  };

  const formattedPlantName = plantName.trim().toLowerCase();
  const allPlants = [...data.crops, ...data.fruits];

  //  If user types "pest control", return all data
  if (formattedPlantName === "pest control") {
    return allPlants;
  }

  // Else return specific crop/fruit
  const result = allPlants.find(
    plant => plant.name.toLowerCase() === formattedPlantName
  );

  if (result) {
    return result;
  } else {
    return `❌ Sorry, pest control data for "${plantName}" could not be found.`;
  }
};
