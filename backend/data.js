 // --- Farming Database ---
    const farmingDatabase = {
      crops: {
        rice: {
          name: "Rice",
          seasons: ["Kharif (June-October)", "Rabi (November-April)"],
          varieties: ["Basmati", "IR64", "Sona Masuri"],
          sowingTime: "June-July / Nov-Dec",
          harvestTime: "Oct-Nov / Apr-May",
          irrigation: "Flood irrigation",
          fertilizer: "NPK 120:60:60 kg/ha",
          pests: ["Brown planthopper", "Stem borer"],
          diseases: ["Bacterial blight", "Brown spot"],
          marketPrice: "₹1800-2200 per quintal",
          tips: "Maintain 2-3 cm water, transplant 20-25 day seedlings"
        },

        basmati: {
          name: "Basmati Rice",
          seasons: ["Kharif (June-November)"],
          varieties: ["Pusa Basmati 1121", "Pusa Basmati 1509", "Traditional Basmati"],
          sowingTime: "June-July (nursery sowing), transplanting after 25-30 days",
          harvestTime: "October-November (140-150 days after transplanting)",
          irrigation: "Requires continuous standing water (5-10 cm) during growth; avoid water stress at flowering",
          fertilizer: "NPK 150:60:40 kg/ha in split doses + 10-15 tons FYM/ha",
          pests: ["Stem borer", "Brown planthopper", "Leaf folder"],
          diseases: ["Blast", "Sheath blight", "Bacterial leaf blight"],
          marketPrice: "₹60-200 per kg (depending on quality & export demand)",
          tips: "Requires fertile, well-drained loamy soil with good water retention; maintain proper water depth and ensure timely transplanting for aromatic grain quality"
        },

        gobindobhog: {
          name: "Gobindobhog",
          type: "Short-grain, aromatic, premium variety",
          region: "Primarily grown in West Bengal (Burdwan, Hooghly, Nadia, Birbhum districts)",
          grain: "Short, white, aromatic, sticky after cooking",
          seasons: ["Kharif (sown in July-August, harvested in November-December)"],
          uses: [
              "Traditional Bengali dishes like Khichuri, Payesh (rice pudding), Polao",
              "Temple offerings and religious ceremonies",
              "Festive and special occasions due to aroma and softness"
          ],
          special_features: [
              "GI-tagged rice variety of West Bengal",
              "Soft and sticky texture, naturally aromatic",
              "Premium price in local and export markets"
          ]
      },
      tulaipanji: {
      name: "Tulaipanji",
      type: "Medium-grain, aromatic variety",
      region: "North Bengal (Dinajpur, Malda, Uttar Dinajpur districts)",
      grain: "Medium-long, slender, aromatic",
      seasons: ["Kharif (sown in July-August, harvested in November-December)"],
      uses: [
          "Traditional Bengali pulao",
          "Special rice dishes for festivals",
          "Everyday table rice in premium households"
      ],
    special_features: [
        "GI-tagged rice from West Bengal",
        "Delicate aroma similar to basmati",
        "High market demand, exported as specialty rice"
    ]
},

kataribhog: {
    name: "Kataribhog",
    type: "Short-grain, aromatic variety",
    region: "Malda district, West Bengal",
    grain: "Small, white, aromatic, slightly sticky",
    seasons: ["Kharif (sown in July-August, harvested in November-December)"],
    uses: [
        "Sweet dishes like Payesh",
        "Religious offerings in temples",
        "Special occasion cooking"
    ],
    special_features: [
        "Highly aromatic traditional rice",
        "Premium price in local markets",
        "Soft texture after cooking"
    ]
},

    kalajeera: {
        name: "Kalajeera",
        type: "Tiny-grain, aromatic, heritage rice",
        region: "Odisha and West Bengal",
        grain: "Very small, blackish raw grain; turns white when cooked",
        seasons: ["Kharif (sown in July-August, harvested in November-December)"],
        uses: [
            "Delicacy rice for pulao and biryani",
            "Medicinal and traditional health uses",
            "Gifted as premium rice in ceremonies"
        ],
        special_features: [
            "Nicknamed 'Prince of Rice'",
            "High aroma, soft and fluffy texture",
            "Rich in antioxidants and traditional medicinal value"
        ]
        },

        wheat: {
          name: "Wheat",
          seasons: ["Rabi (November-April)"],
          varieties: ["HD 2967", "PBW 343", "Lok-1", "Sharbati"],
          sowingTime: "Nov-Dec",
          harvestTime: "Mar-Apr",
          irrigation: "4-6 irrigations (Critical stages: crown root initiation, tillering, flowering, grain filling)",
          fertilizer: "NPK 120:60:40 kg/ha",
          pests: ["Aphids", "Termites"],
          diseases: ["Rust (Yellow, Brown, Black)", "Smut", "Karnal bunt"],
          marketPrice: "₹2000-2400 per quintal",
          tips: "Use certified seeds, timely irrigation at CRI stage is crucial, avoid late sowing to reduce rust risk"
        },

        maize: {
          name: "Maize",
          seasons: ["Kharif (June-October)", "Rabi (Nov-April)", "Summer (Jan-May)"],
          varieties: ["Ganga-5", "Deccan Hybrid", "HQPM-1", "Vivek-9"],
          sowingTime: "June-July (Kharif), Oct-Nov (Rabi), Jan-Feb (Summer)",
          harvestTime: "Sep-Oct (Kharif), Mar-Apr (Rabi), May (Summer)",
          irrigation: "Requires 3-4 irrigations, critical stages: knee-high, tasseling, silking, grain filling",
          fertilizer: "NPK 150:75:40 kg/ha",
          pests: ["Stem borer", "Fall armyworm", "Shoot fly"],
          diseases: ["Downy mildew", "Turcicum leaf blight", "Rust"],
          marketPrice: "₹1700-2100 per quintal",
          tips: "Maintain proper spacing (60x25 cm), control weeds within first 30 days, use resistant varieties against fall armyworm"
        },

        barley: {
          name: "Barley",
          seasons: ["Rabi (November-April)"],
          varieties: ["RD 2035", "RD 2552", "BH 393", "DL 88"],
          sowingTime: "Nov-Dec",
          harvestTime: "Mar-Apr",
          irrigation: "2-3 irrigations, critical stages: crown root initiation, tillering, grain filling",
          fertilizer: "NPK 60:30:30 kg/ha",
          pests: ["Aphids", "Termites"],
          diseases: ["Stripe rust", "Loose smut", "Powdery mildew"],
          marketPrice: "₹1600-2000 per quintal",
          tips: "Barley is tolerant to salinity and drought, suitable for low-input farming; timely sowing ensures higher yield"
        },

        masur: {
          name: "Masur (Lentil)",
          seasons: ["Rabi (November-April)"],
          varieties: ["Pusa Masur-5", "Pant L-406", "KLS 218", "IPL 81"],
          sowingTime: "Oct-Nov",
          harvestTime: "Mar-Apr",
          irrigation: "Generally rainfed; 1-2 irrigations at pre-flowering and pod filling stage if needed",
          fertilizer: "NPK 20:40:20 kg/ha + Rhizobium inoculation",
          pests: ["Pod borer", "Aphids"],
          diseases: ["Rust", "Wilt", "Collar rot"],
          marketPrice: "₹5500-6500 per quintal",
          tips: "Use certified seeds, ensure proper seed treatment with fungicide & Rhizobium, avoid waterlogging"
        },

        gram: {
          name: "Gram (Chickpea)",
          seasons: ["Rabi (November-April)"],
          varieties: ["Pusa-256", "BG-1053", "JG-11", "Pusa Chana-1003"],
          sowingTime: "Oct-Nov",
          harvestTime: "Mar-Apr",
          irrigation: "Generally rainfed; 1-2 irrigations at flowering and pod development if moisture stress occurs",
          fertilizer: "NPK 20:40:20 kg/ha + Rhizobium inoculation",
          pests: ["Pod borer", "Cutworm", "Aphids"],
          diseases: ["Fusarium wilt", "Ascochyta blight", "Root rot"],
          marketPrice: "₹4800-5500 per quintal",
          tips: "Use wilt-resistant varieties, treat seeds with fungicide and Rhizobium, avoid excessive irrigation to prevent root diseases"
        },

        moong: {
          name: "Moong (Green Gram)",
          seasons: ["Kharif (June-September)", "Summer (March-June)"],
          varieties: ["Pusa Vishal", "SML-668", "PDM-11", "Samrat"],
          sowingTime: "June-July (Kharif), March-April (Summer)",
          harvestTime: "Sep-Oct (Kharif), May-June (Summer)",
          irrigation: "Generally rainfed in Kharif; 2-3 irrigations in Summer at flowering and pod filling stage",
          fertilizer: "NPK 20:40:20 kg/ha + Rhizobium inoculation",
          pests: ["Pod borer", "Whitefly", "Aphids"],
          diseases: ["Yellow mosaic virus (YMV)", "Powdery mildew", "Cercospora leaf spot"],
          marketPrice: "₹6000-7500 per quintal",
          tips: "Use YMV-resistant varieties, ensure timely sowing, avoid waterlogging, and maintain proper crop rotation"
        },

        arhar: {
          name: "Arhar (Pigeon Pea / Tur)",
          seasons: ["Kharif (June-November)"],
          varieties: ["Pusa 992", "ICPL 87119 (Asha)", "Maruti", "Laxmi"],
          sowingTime: "June-July",
          harvestTime: "Nov-Dec",
          irrigation: "Generally rainfed; 1-2 irrigations at flowering and pod development if dry spell occurs",
          fertilizer: "NPK 20:50:20 kg/ha + Rhizobium inoculation",
          pests: ["Pod borer (Helicoverpa)", "Aphids", "Pod fly"],
          diseases: ["Wilt", "Sterility mosaic virus (SMV)", "Phytophthora blight"],
          marketPrice: "₹6000-7000 per quintal",
          tips: "Use wilt & SMV-resistant varieties, practice intercropping with soybean/groundnut, avoid waterlogging for better yield"
        },

        mustard: {
          name: "Mustard",
          seasons: ["Rabi (October-March)"],
          varieties: ["Pusa Bold", "Varuna", "Kranti", "RH-30"],
          sowingTime: "Oct-Nov",
          harvestTime: "Feb-Mar",
          irrigation: "3-4 irrigations, critical stages: pre-flowering, flowering, pod filling",
          fertilizer: "NPK 80:40:40 kg/ha + Sulphur 20 kg/ha",
          pests: ["Aphids", "Mustard sawfly"],
          diseases: ["Alternaria blight", "White rust", "Downy mildew"],
          marketPrice: "₹4800-5500 per quintal",
          tips: "Use certified seeds, timely sowing ensures better yield, avoid excess irrigation, adopt 3-year crop rotation to reduce disease risk"
        },
        
        sesame: {
          name: "Sesame (Til)",
          seasons: ["Kharif (June-September)", "Summer (Feb-May)"],
          varieties: ["T-13", "RT-46", "Gujarat Til-2", "Tilottama"],
          sowingTime: "June-July (Kharif), Feb-March (Summer)",
          harvestTime: "Sep-Oct (Kharif), May (Summer)",
          irrigation: "Rainfed crop; 1-2 irrigations at flowering and capsule formation if required",
          fertilizer: "NPK 40:20:20 kg/ha + 10 kg Sulphur/ha",
          pests: ["Leaf roller", "Gall fly", "Sesame pod borer"],
          diseases: ["Phyllody", "Cercospora leaf spot", "Powdery mildew"],
          marketPrice: "₹7000-8500 per quintal",
          tips: "Use phyllody-resistant varieties, avoid waterlogging, maintain proper spacing (30x10 cm), rotate with non-host crops"
        },

        linseed: {
          name: "Linseed (Flaxseed / Alsi)",
          seasons: ["Rabi (October-March)"],
          varieties: ["T-397", "Pusa-2", "Pusa-3", "Neelum"],
          sowingTime: "Oct-Nov",
          harvestTime: "Feb-Mar",
          irrigation: "Rainfed in many areas; 2-3 irrigations if needed at flowering and seed filling",
          fertilizer: "NPK 40:30:20 kg/ha + 20 kg Sulphur/ha",
          pests: ["Aphids", "Cutworm"],
          diseases: ["Alternaria blight", "Powdery mildew", "Rust"],
          marketPrice: "₹5500-6500 per quintal",
          tips: "Prefers well-drained loamy soil, sow in rows (30 cm apart), avoid waterlogging, rotate with pulses/cereals for better soil health"
        },

        jute: {
          name: "Jute",
          seasons: ["Kharif (March-July)"],
          varieties: ["JRO-524", "JRO-7835", "JBO-2003H", "S-19"],
          sowingTime: "March-April",
          harvestTime: "July-September",
          irrigation: "Mostly rainfed; supplemental irrigation during dry spells, especially at early growth stage",
          fertilizer: "NPK 40:20:20 kg/ha + organic manure (5-10 t/ha)",
          pests: ["Stem weevil", "Hairy caterpillar", "Aphids"],
          diseases: ["Stem rot", "Soft rot", "Anthracnose"],
          marketPrice: "₹4500-6000 per quintal (depending on fiber quality)",
          tips: "Ensure fine tilth seedbed, maintain spacing (30x10 cm), weed at 20-25 days, harvest at 120-130 days for best fiber quality"
        },

        tea: {
          name: "Tea",
          seasons: ["Perennial (Harvest throughout the year with peak flushes in Mar-May & Jul-Sep)"],
          varieties: ["Assam", "Darjeeling", "Nilgiri", "Kangra"],
          sowingTime: "Nursery raising year-round, field planting in monsoon (June-Aug)",
          harvestTime: "Plucking every 7-15 days during active growth season",
          irrigation: "Requires 150-200 cm annual rainfall; supplemental irrigation in dry months",
          fertilizer: "NPK 120:60:60 kg/ha annually in split doses + organic manure",
          pests: ["Tea mosquito bug", "Red spider mite", "Looper caterpillar"],
          diseases: ["Blister blight", "Red rust", "Dieback"],
          marketPrice: "₹120-300 per kg (depending on grade & region)",
          tips: "Requires acidic soil (pH 4.5-5.5), regular pruning maintains bush shape, timely plucking ensures high-quality leaves"
        },
        sugarcane: {
          name: "Sugarcane",
          seasons: ["Perennial (grown in tropical & subtropical regions; main planting in Feb-March & Sept-October)"],
          varieties: ["Co 0238", "Co 86032", "Co 1148", "CoJ 64"],
          sowingTime: "Spring (Feb-March) and Autumn (Sept-October)",
          harvestTime: "10-18 months after planting (varies with variety & region)",
          irrigation: "Requires 1500-2500 mm water annually; critical at tillering, grand growth, and maturity stages",
          fertilizer: "NPK 275:62.5:112.5 kg/ha + 25-50 tons/ha farmyard manure",
          pests: ["Early shoot borer", "Top borer", "White grub", "Scale insects"],
          diseases: ["Red rot", "Smut", "Wilt", "Ratoon stunting disease"],
          marketPrice: "₹3000-3500 per ton (varies regionally & seasonally)",
          tips: "Prefers deep, well-drained loamy soil with pH 6.0-7.5; timely earthing-up and ratoon management increase yield"
        },
        tobacco: {
          name: "Tobacco",
          seasons: ["Rabi (Oct-March)", "Summer (Feb-May)"],
          varieties: ["Virginia", "Burley", "Natu", "Hema", "Jay Shree"],
          sowingTime: "Oct-Nov (Rabi), Feb-March (Summer)",
          harvestTime: "Feb-Apr (Rabi), May-June (Summer)",
          irrigation: "6-8 irrigations depending on soil & climate; critical at transplanting, grand growth, and leaf expansion stage",
          fertilizer: "NPK 80:40:40 kg/ha + FYM 15 t/ha (dose varies with type of tobacco)",
          pests: ["Aphids", "Hornworm", "Whitefly"],
          diseases: ["Black shank", "Brown spot", "Root rot"],
          marketPrice: "₹120-180 per kg (depends on quality and type)",
          tips: "Requires well-drained sandy loam soil, avoid waterlogging, timely topping & sucker removal improves leaf quality"
        },

        potato: {
          name: "Potato",
          seasons: ["Rabi (Oct-March)", "Summer (Feb-May in hills)"],
          varieties: ["Kufri Jyoti", "Kufri Chandramukhi", "Kufri Pukhraj", "Kufri Badshah"],
          sowingTime: "Oct-Nov (plains), Feb-March (hills)",
          harvestTime: "Feb-March (plains), June-July (hills)",
          irrigation: "6-8 irrigations, critical stages: stolon formation, tuber bulking",
          fertilizer: "NPK 120:100:100 kg/ha + FYM 20 t/ha",
          pests: ["Aphids", "Cutworm", "Potato tuber moth"],
          diseases: ["Late blight", "Early blight", "Black scurf"],
          marketPrice: "₹1200-1800 per quintal",
          tips: "Use disease-free seed tubers, adopt crop rotation, earth up plants at 30-40 days for tuber cover"
        },

        brinjal: {
          name: "Brinjal (Eggplant)",
          seasons: ["Kharif (June-Oct)", "Rabi (Oct-Feb)", "Summer (Feb-May)"],
          varieties: ["Pusa Purple Long", "Pusa Kranti", "Pusa Ankur", "Arka Nidhi"],
          sowingTime: "June-July, Oct-Nov, Feb-March",
          harvestTime: "60-70 days after transplanting; harvesting continues for 2-3 months",
          irrigation: "6-8 irrigations, critical stages: flowering and fruiting",
          fertilizer: "NPK 100:60:60 kg/ha + FYM 20 t/ha",
          pests: ["Shoot and fruit borer", "Jassids", "Aphids"],
          diseases: ["Bacterial wilt", "Phomopsis blight", "Little leaf disease"],
          marketPrice: "₹1500-2500 per quintal",
          tips: "Grow resistant varieties, remove borer-affected shoots and fruits, avoid continuous cropping of solanaceous vegetables"
        },

        tomato: {
          name: "Tomato",
          seasons: ["Kharif (June-Oct)", "Rabi (Oct-Feb)", "Summer (Jan-May)"],
          varieties: ["Pusa Ruby", "Pusa 120", "Arka Vikas", "Arka Rakshak"],
          sowingTime: "June-July, Oct-Nov, Jan-Feb",
          harvestTime: "60-75 days after transplanting; continuous harvesting up to 4 months",
          irrigation: "8-10 irrigations, critical stages: flowering and fruiting",
          fertilizer: "NPK 100:50:50 kg/ha + FYM 20 t/ha",
          pests: ["Fruit borer", "Whitefly", "Aphids"],
          diseases: ["Late blight", "Early blight", "Leaf curl virus"],
          marketPrice: "₹1000-2500 per quintal",
          tips: "Stake the plants for better fruit quality, use virus-resistant varieties, avoid overhead irrigation"
        },

        cauliflower: {
          name: "Cauliflower",
          seasons: ["Rabi (Aug-Dec)", "Summer (Feb-April in hills)"],
          varieties: ["Pusa Snowball K-1", "Pusa Deepali", "Pant Gobhi-3", "Early Kunwari"],
          sowingTime: "Aug-Sept (early), Oct-Nov (main season)",
          harvestTime: "3-4 months after sowing depending on variety",
          irrigation: "4-5 irrigations, critical stages: curd initiation and development",
          fertilizer: "NPK 120:60:60 kg/ha + FYM 20 t/ha",
          pests: ["Diamondback moth", "Aphids", "Cabbage butterfly"],
          diseases: ["Downy mildew", "Black rot", "Club root"],
          marketPrice: "₹1500-2500 per quintal",
          tips: "Maintain proper spacing, apply boron to prevent hollow curd, protect curds from sun by tying leaves"
        },

        cabbage: {
          name: "Cabbage",
          seasons: ["Rabi (Oct-Feb)", "Summer (March-June in hills)"],
          varieties: ["Golden Acre", "Pusa Mukta", "Pusa Drumhead", "NS-25"],
          sowingTime: "Sept-Oct (plains), Feb-March (hills)",
          harvestTime: "90-120 days after sowing",
          irrigation: "6-7 irrigations, critical stages: head formation",
          fertilizer: "NPK 100:60:60 kg/ha + FYM 20 t/ha",
          pests: ["Diamondback moth", "Aphids", "Cabbage butterfly"],
          diseases: ["Black rot", "Downy mildew", "Club root"],
          marketPrice: "₹1200-2000 per quintal",
          tips: "Avoid waterlogging, proper spacing ensures firm heads, rotate crops to reduce disease incidence"
        },

        okra: {
          name: "Okra (Ladys Finger)",
          seasons: ["Kharif (June-Sept)", "Summer (Feb-May)"],
          varieties: ["Parbhani Kranti", "Pusa Sawani", "Varsha Uphar", "Arka Anamika"],
          sowingTime: "Feb-March (Summer), June-July (Kharif)",
          harvestTime: "50-60 days after sowing; regular picking for 2-3 months",
          irrigation: "6-7 irrigations, critical stages: flowering and pod development",
          fertilizer: "NPK 100:60:60 kg/ha + FYM 20 t/ha",
          pests: ["Fruit borer", "Whitefly", "Jassids"],
          diseases: ["Yellow vein mosaic virus (YVMV)", "Powdery mildew", "Fusarium wilt"],
          marketPrice: "₹2000-3000 per quintal",
          tips: "Use YVMV-resistant varieties, pick fruits regularly to promote continuous yield"
        },

        cucumber: {
          name: "Cucumber",
          seasons: ["Summer (Feb-May)", "Rainy (June-Sept)"],
          varieties: ["Pusa Sanyog", "Poinsette", "Long Green", "Pant Khira-1"],
          sowingTime: "Feb-March, June-July",
          harvestTime: "45-60 days after sowing; continues for 2 months",
          irrigation: "6-8 irrigations, avoid waterlogging",
          fertilizer: "NPK 80:40:40 kg/ha + FYM 20 t/ha",
          pests: ["Fruit fly", "Red pumpkin beetle", "Aphids"],
          diseases: ["Downy mildew", "Powdery mildew", "Cucumber mosaic virus (CMV)"],
          marketPrice: "₹1800-2500 per quintal",
          tips: "Train vines on trellis, pick fruits at tender stage, maintain soil moisture uniformly"
        },

        pumpkin: {
          name: "Pumpkin",
          seasons: ["Kharif (June-Oct)", "Summer (Feb-May)"],
          varieties: ["Arka Suryamukhi", "Arka Chandan", "CO-1", "Pusa Vishwas"],
          sowingTime: "Feb-March, June-July",
          harvestTime: "90-120 days after sowing",
          irrigation: "6-8 irrigations, critical stages: flowering and fruit development",
          fertilizer: "NPK 100:60:60 kg/ha + FYM 20 t/ha",
          pests: ["Fruit fly", "Red pumpkin beetle"],
          diseases: ["Powdery mildew", "Downy mildew", "Fusarium wilt"],
          marketPrice: "₹1500-2200 per quintal",
          tips: "Use polythene mulch for better growth, train vines properly, pick fruits at optimum maturity"
        },

        gourds: {
          name: "Gourds (Bitter gourd, Bottle gourd, Ridge gourd, Snake gourd, Ash gourd)",
          seasons: ["Summer (Feb-May)", "Rainy (June-Sept)"],
          varieties: ["Pusa Do Mausami", "Arka Bahar", "CO-1", "Punjab Komal"],
          sowingTime: "Feb-March, June-July",
          harvestTime: "60-80 days after sowing; continues for 2-3 months",
          irrigation: "6-8 irrigations, avoid water stagnation",
          fertilizer: "NPK 80:40:40 kg/ha + FYM 20 t/ha",
          pests: ["Fruit fly", "Red pumpkin beetle", "Aphids"],
          diseases: ["Powdery mildew", "Downy mildew", "Anthracnose"],
          marketPrice: "₹1600-2500 per quintal",
          tips: "Train vines on trellis, harvest fruits regularly, use fruit fly traps for pest management"
        }

      },
      fruits: {
        mango: {
          name: "Mango",
          seasons: ["Perennial (fruiting mainly Apr-June)"],
          varieties: ["Alphonso", "Dashehari", "Langra", "Himsagar", "Totapuri"],
          sowingTime: "Grafted plants planted in July-Sept (monsoon) or Feb-March (spring)",
          harvestTime: "Apr-June (depending on region & variety)",
          irrigation: "Young plants: every 7-10 days; mature trees: at flowering and fruit development",
          fertilizer: "NPK 100:50:100 g/tree (young), 1 kg N:0.5 kg P:1 kg K/tree (mature)",
          pests: ["Mango hopper", "Fruit fly", "Mealy bug"],
          diseases: ["Powdery mildew", "Anthracnose", "Dieback"],
          marketPrice: "₹40-120 per kg (depending on variety)",
          tips: "Regular pruning for shape, bagging fruits prevents fruit fly damage, avoid waterlogging"
        },

       himsagar: {
    name: "Himsagar",
    type: "Mango",
    features: "Medium-sized fruit with thin skin, fibreless pulp, and excellent sweetness. Famous for its rich aroma.",
    season: "Mid-May to June",
    yield: "10-15 tons/ha",
    marketPrice: "₹60-120 per kg (premium variety)",
    tips: "Harvest at full maturity for best sweetness; handle carefully as fruits are delicate."
  },

    langra: {
      name: "Langra",
      type: "Mango",
      features: "Medium-large fruit, greenish skin even when ripe, juicy and fibrous pulp with distinct flavour.",
      season: "June-July",
      yield: "12-16 tons/ha",
      marketPrice: "₹40-80 per kg",
      tips: "Prone to powdery mildew; regular orchard sanitation is important."
    },

  fazli: {
    name: "Fazli",
    type: "Mango",
    features: "Large fruit (can weigh up to 1kg), fibreless pulp, used for both table purpose and processing (pickles, pulp).",
    season: "July-August (late season variety)",
    yield: "15-20 tons/ha",
    marketPrice: "₹35-70 per kg",
    tips: "Known as 'Malda Fazli' with GI tag; good for export and processing industries."
  },

  amrapali: {
    name: "Amrapali",
    type: "Mango",
    features: "Hybrid of Dasheri × Neelum; small to medium-sized fruit, deep orange-red pulp, very sweet taste.",
    season: "June-July",
    yield: "16-20 tons/ha (high density planting possible)",
    marketPrice: "₹50-90 per kg",
    tips: "Fruits have shorter shelf-life; best consumed fresh or used for pulp."
  },

  mallika: {
    name: "Mallika",
    type: "Mango",
    features: "Hybrid of Neelum × Dasheri; medium to large fruit, bright yellow skin, fibreless pulp, high sweetness.",
    season: "June-July",
    yield: "14-18 tons/ha",
    marketPrice: "₹60-100 per kg",
    tips: "Maintain proper pruning to control tree size in high-density planting."
  },

  neelum: {
    name: "Neelum",
    type: "Mango",
    features: "Medium-sized fruit, reddish blush on yellow skin, aromatic pulp with good sweetness, late-season variety.",
    season: "July-August",
    yield: "10-14 tons/ha",
    marketPrice: "₹40-80 per kg",
    tips: "Can be planted with Amrapali in high-density orchards for staggered harvest."
  }
},


    jackfruit: {
          name: "Jackfruit",
          seasons: ["Perennial (fruiting Mar-June, Aug-Sept)"],
          varieties: ["Khaja", "Bhusila", "Black Gold", "NS-J1"],
          sowingTime: "Planting in June-July (monsoon)",
          harvestTime: "Mar-June & Aug-Sept",
          irrigation: "Requires 120-150 cm annual rainfall; irrigation during dry months improves yield",
          fertilizer: "10-20 kg FYM + 500 g N:250 g P:250 g K/tree/year",
          pests: ["Fruit fly", "Stem borer"],
          diseases: ["Stem rot", "Leaf spot"],
          marketPrice: "₹20-60 per kg",
          tips: "Provide staking for young plants, harvest fruits at maturity (hollow sound test), practice mulching"
        },

        banana: {
          name: "Banana",
          seasons: ["Perennial (fruiting year-round, peak Oct-March)"],
          varieties: ["Dwarf Cavendish", "Robusta", "Rasthali", "Grand Naine"],
          sowingTime: "Feb-March, Aug-Sept",
          harvestTime: "12-15 months after planting",
          irrigation: "Weekly irrigation required (drip preferred); critical stages: shooting and bunch filling",
          fertilizer: "NPK 200:60:200 g/plant + 10-15 kg FYM",
          pests: ["Banana weevil", "Nematodes"],
          diseases: ["Panama wilt", "Sigatoka leaf spot", "Bunchy top virus"],
          marketPrice: "₹8-30 per kg",
          tips: "Use tissue-cultured plants, desucker regularly, support bunch with bamboo props"
        },

        litchi: {
          name: "Litchi",
          seasons: ["Perennial (fruiting May-June)"],
          varieties: ["Shahi", "China", "Rose Scented", "Bedana"],
          sowingTime: "Planting in June-July",
          harvestTime: "May-June",
          irrigation: "Light irrigation at flowering and fruit development; avoid water stress",
          fertilizer: "20-30 kg FYM + 500 g N:250 g P:250 g K/tree/year",
          pests: ["Fruit borer", "Fruit fly"],
          diseases: ["Fruit cracking", "Leaf spot"],
          marketPrice: "₹80-200 per kg",
          tips: "Provide windbreaks, bag fruits to reduce cracking, avoid irrigation just before harvest"
        },

        guava: {
          name: "Guava",
          seasons: ["Perennial (main harvest Aug-Dec, light harvest Feb-Apr)"],
          varieties: ["Allahabad Safeda", "Lucknow-49", "Arka Mridula", "Lalit"],
          sowingTime: "June-July or Feb-March",
          harvestTime: "Aug-Dec (main), Feb-Apr (spring flush)",
          irrigation: "Irrigate every 15-20 days in dry season; avoid overwatering",
          fertilizer: "20 kg FYM + 500 g N:250 g P:250 g K/tree/year",
          pests: ["Fruit fly", "Mealy bug"],
          diseases: ["Wilt", "Anthracnose"],
          marketPrice: "₹30-80 per kg",
          tips: "Prune lightly after harvest, use fruit fly traps, adopt bahar treatment for off-season fruiting"
        },

        pineapple: {
          name: "Pineapple",
          seasons: ["Perennial (fruiting year-round, peak May-Aug)"],
          varieties: ["Kew", "Queen", "Mauritius", "Giant Kew"],
          sowingTime: "June-July, Aug-Sept",
          harvestTime: "15-18 months after planting",
          irrigation: "Generally rainfed; life-saving irrigation during dry spells improves fruit size",
          fertilizer: "NPK 12:4:12 g/plant/year + FYM",
          pests: ["Mealy bug", "Nematodes"],
          diseases: ["Heart rot", "Leaf spot"],
          marketPrice: "₹20-60 per kg",
          tips: "Maintain spacing 60x30 cm, induce flowering with ethrel spray, avoid waterlogging"
        },

        papaya: {
          name: "Papaya",
          seasons: ["Perennial (fruiting year-round, peak Oct-Jan)"],
          varieties: ["Pusa Delicious", "Pusa Nanha", "Red Lady", "Coorg Honey Dew"],
          sowingTime: "Feb-March, June-July",
          harvestTime: "8-10 months after planting; continuous harvest for 2-3 years",
          irrigation: "Weekly irrigation; critical at flowering and fruit development",
          fertilizer: "NPK 250:250:500 g/plant/year + FYM",
          pests: ["Aphids", "Red spider mite", "Fruit fly"],
          diseases: ["Papaya mosaic virus", "Powdery mildew", "Stem rot"],
          marketPrice: "₹20-50 per kg",
          tips: "Plant dioecious varieties with male:female ratio 1:10, stake plants, intercrop with short-duration crops"
        },

        citrus: {
          name: "Citrus Fruits (Orange, Lemon, Sweet Orange, Kinnow, Lime)",
          seasons: ["Perennial (harvest varies by type: Nov-Feb for oranges, Aug-Oct & Feb-Apr for lime)"],
          varieties: ["Nagpur Orange", "Mosambi", "Kagzi Lime", "Kinnow"],
          sowingTime: "June-July or Feb-March",
          harvestTime: "8-10 months after flowering",
          irrigation: "Irrigate every 10-15 days in summer; critical at fruit set and fruit development",
          fertilizer: "10-20 kg FYM + 500 g N:250 g P:250 g K/tree/year",
          pests: ["Citrus psylla", "Leaf miner", "Fruit fly"],
          diseases: ["Citrus canker", "Greening disease (HLB)", "Root rot"],
          marketPrice: "₹40-120 per kg (depending on type & region)",
          tips: "Use disease-free planting material, adopt ring method irrigation, regular pruning improves fruit quality"
        }

      }

    // --- Chat Functions ---
    function quickQuery(query) {
      document.getElementById('messageInput').value = query;
      sendMessage();
    }

    function sendMessage() {
      const input = document.getElementById('messageInput');
      const text = input.value.trim();
      if (!text) return;

      addMessage(text, true);
      input.value = '';

      setTimeout(() => {
        const response = generateResponse(text.toLowerCase());
        addMessage(response, false);
      }, 1000);
    }

    function addMessage(text, isUser) {
      const chat = document.getElementById('chatMessages');
      const div = document.createElement('div');
      div.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
      div.innerHTML = `<div class="message-content">${text}</div>`;
      chat.appendChild(div);
      chat.scrollTop = chat.scrollHeight;
    }

    function generateResponse(msg) {
      if (msg.includes('rice')) {
        const c = farmingDatabase.crops.rice;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
if (msg.includes('basmati')) {
  const c = farmingDatabase.crops.basmati;
  return `<div class="crop-info">
    <h4> ${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
      <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
      <li><strong>Sowing:</strong> ${c.sowingTime}</li>
      <li><strong>Harvest:</strong> ${c.harvestTime}</li>
      <li><strong>Irrigation:</strong> ${c.irrigation}</li>
      <li><strong>Fertilizer:</strong> ${c.fertilizer}</li>
      <li><strong>Pests:</strong> ${c.pests.join(', ')}</li>
      <li><strong>Diseases:</strong> ${c.diseases.join(', ')}</li>
      <li><strong>Market Price:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}
if (msg.includes('gobindobhog')) {
    const g = farmingDatabase.crops.gobindobhog;
    return `<div class="crop-info">
      <h4> ${g.name} Guide</h4>
      <ul>
        <li><strong>Type:</strong> ${g.type}</li>
        <li><strong>Region:</strong> ${g.region}</li>
        <li><strong>Season:</strong> ${g.seasons.join(', ')}</li>
        <li><strong>Grain:</strong> ${g.grain}</li>
        <li><strong>Uses:</strong> ${g.uses.join(', ')}</li>
        <li><strong>Special Features:</strong> ${g.special_features.join(', ')}</li>
      </ul>
      💡 Premium aromatic short-grain rice, ideal for festive dishes.
    </div>`;
}

if (msg.includes('tulaipanji')) {
    const t = farmingDatabase.crops.tulaipanji;
    return `<div class="crop-info">
      <h4>${t.name} Guide</h4>
      <ul>
        <li><strong>Type:</strong> ${t.type}</li>
        <li><strong>Region:</strong> ${t.region}</li>
        <li><strong>Season:</strong> ${t.seasons.join(', ')}</li>
        <li><strong>Grain:</strong> ${t.grain}</li>
        <li><strong>Uses:</strong> ${t.uses.join(', ')}</li>
        <li><strong>Special Features:</strong> ${t.special_features.join(', ')}</li>
      </ul>
      💡 Famous GI-tagged aromatic rice from North Bengal.
    </div>`;
}

if (msg.includes('kataribhog')) {
    const k = farmingDatabase.crops.kataribhog;
    return `<div class="crop-info">
      <h4>${k.name} Guide</h4>
      <ul>
        <li><strong>Type:</strong> ${k.type}</li>
        <li><strong>Region:</strong> ${k.region}</li>
        <li><strong>Season:</strong> ${k.seasons.join(', ')}</li>
        <li><strong>Grain:</strong> ${k.grain}</li>
        <li><strong>Uses:</strong> ${k.uses.join(', ')}</li>
        <li><strong>Special Features:</strong> ${k.special_features.join(', ')}</li>
      </ul>
      💡 Malda’s famous premium aromatic rice.
    </div>`;
}

if (msg.includes('kalajeera')) {
    const kj = farmingDatabase.crops.kalajeera;
    return `<div class="crop-info">
      <h4>${kj.name} Guide</h4>
      <ul>
        <li><strong>Type:</strong> ${kj.type}</li>
        <li><strong>Region:</strong> ${kj.region}</li>
        <li><strong>Season:</strong> ${kj.seasons.join(', ')}</li>
        <li><strong>Grain:</strong> ${kj.grain}</li>
        <li><strong>Uses:</strong> ${kj.uses.join(', ')}</li>
        <li><strong>Special Features:</strong> ${kj.special_features.join(', ')}</li>
      </ul>
      💡 Nicknamed the 'Prince of Rice' for its tiny aromatic grains.
    </div>`;
}


      if (msg.includes('wheat')) {
        const c = farmingDatabase.crops.wheat;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
      if (msg.includes('maize')) {
        const c = farmingDatabase.crops.maize;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
      if (msg.includes('barley')) {
        const c = farmingDatabase.crops.barley;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
      if (msg.includes('masur')) {
        const c = farmingDatabase.crops.masur;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
      if (msg.includes('gram')) {
        const c = farmingDatabase.crops.gram;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
      if (msg.includes('moong')) {
        const c = farmingDatabase.crops.moong;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
      if (msg.includes('arhar')) {
        const c = farmingDatabase.crops.arhar;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
      if (msg.includes('mustard')) {
        const c = farmingDatabase.crops.mustard;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
      if (msg.includes('sesame')) {
        const c = farmingDatabase.crops.sesame;
        return `<div class="crop-info">
          <h4> ${c.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
            <li><strong>Sowing:</strong> ${c.sowingTime}</li>
            <li><strong>Harvest:</strong> ${c.harvestTime}</li>
            <li><strong>Market:</strong> ${c.marketPrice}</li>
          </ul>
          💡 ${c.tips}
        </div>`;
      }
      if (msg.includes('linseed')) {
        const f = farmingDatabase.crops.linseed;
        return `<div class="crop-info">
          <h4> ${f.name} Guide</h4>
          <ul>
            <li><strong>Season:</strong> ${f.seasons.join(', ')}</li>
            <li><strong>Varieties:</strong> ${f.varieties.join(', ')}</li>
            <li><strong>Planting:</strong> ${f.plantingTime}</li>
            <li><strong>Irrigation:</strong> ${f.irrigation}</li>
            <li><strong>Market:</strong> ${f.marketPrice}</li>
          </ul>
          🌟 ${f.tips}
        </div>`;
      }
      if (msg.includes('jute')) {
  const c = farmingDatabase.crops.jute;
  return `<div class="crop-info">
    <h4> ${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
      <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
      <li><strong>Sowing:</strong> ${c.sowingTime}</li>
      <li><strong>Harvest:</strong> ${c.harvestTime}</li>
      <li><strong>Market:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}

if (msg.includes('tea')) {
  const c = farmingDatabase.crops.tea;
  return `<div class="crop-info">
    <h4> ${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
      <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
      <li><strong>Sowing:</strong> ${c.sowingTime}</li>
      <li><strong>Harvest:</strong> ${c.harvestTime}</li>
      <li><strong>Market:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}

if (msg.includes('sugarcane')) {
  const c = farmingDatabase.crops.sugarcane;
  return `<div class="crop-info">
    <h4> ${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
      <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
      <li><strong>Sowing:</strong> ${c.sowingTime}</li>
      <li><strong>Harvest:</strong> ${c.harvestTime}</li>
      <li><strong>Market:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}

if (msg.includes('tobacco')) {
  const c = farmingDatabase.crops.barley;
  return `<div class="crop-info">
    <h4> ${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
      <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
      <li><strong>Sowing:</strong> ${c.sowingTime}</li>
      <li><strong>Harvest:</strong> ${c.harvestTime}</li>
      <li><strong>Market:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}

if (msg.includes('potato')) {
  const c = farmingDatabase.crops.potato;
  return `<div class="crop-info">
    <h4> ${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
      <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
      <li><strong>Sowing:</strong> ${c.sowingTime}</li>
      <li><strong>Harvest:</strong> ${c.harvestTime}</li>
      <li><strong>Market:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}

if (msg.includes('brinjal')) {
  const c = farmingDatabase.crops.brinjal;
  return `<div class="crop-info">
    <h4> ${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
      <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
      <li><strong>Sowing:</strong> ${c.sowingTime}</li>
      <li><strong>Harvest:</strong> ${c.harvestTime}</li>
      <li><strong>Market:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}
if (msg.includes('tomato')) {
    const c = farmingDatabase.crops.tomato;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('cauliflower')) {
    const c = farmingDatabase.crops.cauliflower;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('cabbage')) {
    const c = farmingDatabase.crops.cabbage;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('okra')) {
    const c = farmingDatabase.crops.okra;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('cucumber')) {
    const c = farmingDatabase.crops.cucumber;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('pumpkin')) {
    const c = farmingDatabase.crops.pumpkin;
    return `<div class="crop-info">
      <h4>${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('gourds')) {
    const c = farmingDatabase.crops.gourds; 
    return `<div class="crop-info">
      <h4>${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('jackfruit')) {
    const c = farmingDatabase.fruits.jackfruit;
    return `<div class="crop-info">
      <h4>${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('banana')) {
    const c = farmingDatabase.fruits.banana;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('litchi')) {
    const c = farmingDatabase.fruits.litchi;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('guava')) {
    const c = farmingDatabase.fruits.guava;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('pineapple')) {
    const c = farmingDatabase.fruits.pineapple;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('papaya')) {
    const c = farmingDatabase.fruits.papaya;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}
if (msg.includes('citrus')) {
    const c = farmingDatabase.fruits.citrus;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}

if (msg.includes('mango')) {
    const c = farmingDatabase.fruits.mango;
    return `<div class="crop-info">
      <h4> ${c.name} Guide</h4>
      <ul>
        <li><strong>Season:</strong> ${c.seasons.join(', ')}</li>
        <li><strong>Varieties:</strong> ${c.varieties.join(', ')}</li>
        <li><strong>Sowing:</strong> ${c.sowingTime}</li>
        <li><strong>Harvest:</strong> ${c.harvestTime}</li>
        <li><strong>Market:</strong> ${c.marketPrice}</li>
      </ul>
      💡 ${c.tips}
    </div>`;
}

if (msg.toLowerCase().includes('himsagar')) {
  const c = farmingDatabase.fruits.himsagar;
  return `<div class="crop-info">
    <h4>${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.season}</li>
      <li><strong>Features:</strong> ${c.features}</li>
      <li><strong>Yield:</strong> ${c.yield}</li>
      <li><strong>Market Price:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}

if (msg.toLowerCase().includes('langra')) {
  const c = farmingDatabase.fruits.langra;
  return `<div class="crop-info">
    <h4>${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.season}</li>
      <li><strong>Features:</strong> ${c.features}</li>
      <li><strong>Yield:</strong> ${c.yield}</li>
      <li><strong>Market Price:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}

if (msg.toLowerCase().includes('fazli')) {
  const c = farmingDatabase.fruits.fazli;
  return `<div class="crop-info">
    <h4>${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.season}</li>
      <li><strong>Features:</strong> ${c.features}</li>
      <li><strong>Yield:</strong> ${c.yield}</li>
      <li><strong>Market Price:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}

if (msg.toLowerCase().includes('amrapali')) {
  const c = farmingDatabase.fruits.amrapali;
  return `<div class="crop-info">
    <h4>${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.season}</li>
      <li><strong>Features:</strong> ${c.features}</li>
      <li><strong>Yield:</strong> ${c.yield}</li>
      <li><strong>Market Price:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}
if (msg.toLowerCase().includes('mallika')) {
  const c = farmingDatabase.fruits.mallika;
  return `<div class="crop-info">
    <h4>${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.season}</li>
      <li><strong>Features:</strong> ${c.features}</li>
      <li><strong>Yield:</strong> ${c.yield}</li>
      <li><strong>Market Price:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}
if (msg.toLowerCase().includes('neelum')) {
  const c = farmingDatabase.fruits.neelum;
  return `<div class="crop-info">
    <h4>${c.name} Guide</h4>
    <ul>
      <li><strong>Season:</strong> ${c.season}</li>
      <li><strong>Features:</strong> ${c.features}</li>
      <li><strong>Yield:</strong> ${c.yield}</li>
      <li><strong>Market Price:</strong> ${c.marketPrice}</li>
    </ul>
    💡 ${c.tips}
  </div>`;
}
 if (msg.includes('pest control')) {
  const result = pestControl('pest control');

  let html = `<div class="crop-info">
    <h4> Pest Control Guide</h4>
    <p>Here’s a pest → pesticide table with special farmer tips </p>`;

  result.forEach(plant => {
    html += `<h5>${plant.name}</h5>`;
    html += `<table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width:100%; margin-bottom:10px;">
              <tr style="background:#E8F5E8;">
                <th>Pest</th>
                <th>Recommended Pesticides</th>
                <th>🌟 Farmer Tip</th>
              </tr>`;

    plant.pests.forEach(p => {
      html += `<tr>
        <td>${p.name}</td>
        <td>${p.pesticides.join(', ')}</td>
        <td>${p.tip ? p.tip : "—"}</td>
      </tr>`;
    });

    html += `</table>`;
  });

  html += `</div>`;
  return html;
}
// --- Fertilizer guide block ---
if (msg.includes('fertilizer guide') || msg.includes('fertilizer for')) {
  let cropName = msg.replace('fertilizer for', '').trim().toLowerCase();

  // If user asks just "fertilizer guide"
  let result;
  if (cropName === '' || cropName === 'fertilizer guide') {
    result = fertilizer('fertilizer guide');  // from fertilizer.js
  } else {
    result = fertilizer(cropName);  // specific crop
  }

  // If result is a string (error)
  if (typeof result === "string") {
    return `<div class="crop-info">${result}</div>`;
  }

  // If result is an array (all crops)
  if (Array.isArray(result)) {
    let html = `<div class="crop-info"><h4>🌱 Fertilizer Guide (West Bengal)</h4>`;
    result.forEach(plant => {
      html += `<h5>${plant.name}</h5>
               <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width:100%; margin-bottom:10px;">
                 <tr style="background:#E8F5E8;">
                   <th>Fertilizer</th><th>Dose</th><th>🌟 Farmer Tip</th>
                 </tr>`;
      plant.fertilizers.forEach(f => {
        html += `<tr>
                   <td>${f.type}</td>
                   <td>${f.dose}</td>
                   <td>${plant.tip}</td>
                 </tr>`;
      });
      html += `</table>`;
    });
    html += `</div>`;
    return html;
  }

  // If result is a single object (specific crop)
  if (result && result.name) {
    let html = `<div class="crop-info"><h4>🌱 Fertilizer Guide: ${result.name}</h4>
                <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width:100%; margin-bottom:10px;">
                  <tr style="background:#E8F5E8;">
                    <th>Fertilizer</th><th>Dose</th><th>🌟 Farmer Tip</th>
                  </tr>`;
    result.fertilizers.forEach(f => {
      html += `<tr>
                 <td>${f.type}</td>
                 <td>${f.dose}</td>
                 <td>${result.tip}</td>
               </tr>`;
    });
    html += `</table></div>`;
    return html;
  }
}
// --- Season Info block ---
if (msg.includes('crop seasons') || msg.includes('season') || msg.includes('what to grow')) {
  const result = seasonInfo(msg);

  if (typeof result === "string") {
    return `<div class="crop-info">${result}</div>`;
  }

  // If result is an array (all seasons)
  if (Array.isArray(result)) {
    let html = `<div class="crop-info"><h4>🌦️ Crop Seasons (West Bengal)</h4>`;
    result.forEach(s => {
      html += `<h5>${s.name}</h5>
               <p><strong>Crops:</strong> ${s.crops.join(', ')}</p>
               <p><strong>Fruits:</strong> ${s.fruits.join(', ')}</p>
               <p><em>${s.tip}</em></p>`;
    });
    html += `</div>`;
    return html;
  }

  // If result is a month
  if (result.month) {
    return `<div class="crop-info">
              <h4>📅 ${result.month} – Seasonal Crops & Fruits</h4>
              <p><strong>Crops:</strong> ${result.crops.join(', ')}</p>
              <p><strong>Fruits:</strong> ${result.fruits.join(', ')}</p>
              <p><em>${result.tip}</em></p>
            </div>`;
  }

  // If result is a specific crop/fruit
  if (result.name) {
    return `<div class="crop-info">
              <h4>🌱 ${result.name}</h4>
              <p><strong>Best Season:</strong> ${result.season}</p>
              <p><em>${result.tip}</em></p>
            </div>`;
  }
}

      return "🤔 Oops! I do not have info on that crop yet!";
 }