const schemes = [
            {
                id: 1,
                title: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
                category: "income",
                icon: "fas fa-rupee-sign",
                description: "Direct income support scheme providing ₹6,000 per year to eligible farmer families in three equal installments of ₹2,000 each.",
                benefits: [
                    "₹6,000 annual direct benefit transfer",
                    "No paperwork required after registration",
                    "Direct bank transfer every 4 months",
                    "Covers all landholding farmers"
                ],
                officialLink: "https://pmkisan.gov.in/",
                applyLink: "https://pmkisan.gov.in/RegistrationForm.aspx"
            },
            {
                id: 2,
                title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
                category: "insurance",
                icon: "fas fa-shield-alt",
                description: "Crop insurance scheme providing financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
                benefits: [
                    "Premium subsidy up to 90%",
                    "Coverage for all crops and seasons",
                    "Quick settlement through technology",
                    "Weather-based crop insurance"
                ],
                officialLink: "https://pmfby.gov.in/",
                applyLink: "https://pmfby.gov.in/farmerRegistration"
            },
            {
                id: 3,
                title: "Kisan Credit Card (KCC)",
                category: "credit",
                icon: "fas fa-credit-card",
                description: "Provides timely access to credit for farming activities with flexible repayment options and subsidized interest rates.",
                benefits: [
                    "Credit limit up to ₹3 lakh without collateral",
                    "4% interest rate for timely repayment",
                    "Flexible repayment schedule",
                    "Personal accident insurance coverage"
                ],
                officialLink: "https://www.nabard.org/auth/writereaddata/tender/1608180417KCC-Guidelines-2018.pdf",
                applyLink: "https://www.nabard.org/content1.aspx?to=588&mid=530"
            },
            {
                id: 4,
                title: "PM Kisan Maandhan Yojana",
                category: "income",
                icon: "fas fa-user-shield",
                description: "Pension scheme for small and marginal farmers providing assured monthly pension of ₹3,000 after 60 years of age.",
                benefits: [
                    "₹3,000 monthly pension after 60",
                    "Minimum contribution ₹55 per month",
                    "Family pension in case of death",
                    "Voluntary and contributory scheme"
                ],
                officialLink: "https://maandhan.in/",
                applyLink: "https://maandhan.in/scheme/login"
            },
            {
                id: 5,
                title: "Soil Health Card Scheme",
                category: "technology",
                icon: "fas fa-seedling",
                description: "Promotes soil test based nutrient management for improving productivity and soil health through regular soil testing.",
                benefits: [
                    "Free soil health cards every 2 years",
                    "Crop-wise nutrient recommendations",
                    "Organic carbon improvement guidance",
                    "Digital soil health portal access"
                ],
                officialLink: "https://soilhealth.dac.gov.in/",
                applyLink: "https://soilhealth.dac.gov.in/"
            },
            {
                id: 6,
                title: "e-NAM (National Agriculture Market)",
                category: "marketing",
                icon: "fas fa-shopping-cart",
                description: "Pan-India electronic trading portal providing better price discovery for farm commodities through transparent auctions.",
                benefits: [
                    "Better price realization for farmers",
                    "Transparent auction process",
                    "Reduced transaction costs",
                    "Quality assurance services"
                ],
                officialLink: "https://enam.gov.in/",
                applyLink: "https://enam.gov.in/web/farmer/farmer-registration"
            },
            {
                id: 7,
                title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
                category: "subsidy",
                icon: "fas fa-tint",
                description: "Aimed at expanding cultivated area under assured irrigation, improving on-farm water use efficiency, and sustainable water conservation practices.",
                benefits: [
                    "75% subsidy for drip/sprinkler irrigation",
                    "Micro irrigation promotion",
                    "Watershed development activities",
                    "Per drop more crop initiative"
                ],
                officialLink: "https://pmksy.gov.in/",
                applyLink: "https://pmksy.gov.in/mis/rpt/state_application_status.aspx"
            },
            {
                id: 8,
                title: "Agriculture Infrastructure Fund (AIF)",
                category: "credit",
                icon: "fas fa-warehouse",
                description: "₹1 lakh crore fund for financing agriculture infrastructure including post-harvest management and community farming assets.",
                benefits: [
                    "₹2 crore loan limit per project",
                    "3% interest subvention",
                    "Moratorium up to 2 years",
                    "CGTMSE guarantee coverage"
                ],
                officialLink: "https://agriinfra.dac.gov.in/",
                applyLink: "https://agriinfra.dac.gov.in/Statistics/Public/Index"
            },
            {
                id: 9,
                title: "National Mission on Edible Oils (NMEO)",
                category: "subsidy",
                icon: "fas fa-oil-can",
                description: "Aims to increase domestic production of edible oils and reduce import dependency through area expansion and productivity enhancement.",
                benefits: [
                    "50% subsidy on seed distribution",
                    "Mini oil mill establishment support",
                    "Custom hiring center assistance",
                    "Technology transfer programs"
                ],
                officialLink: "https://nmeo.dac.gov.in/",
                applyLink: "https://farmer.gov.in/"
            },
            {
                id: 10,
                title: "Kisan Drone Scheme",
                category: "technology",
                icon: "fas fa-helicopter",
                description: "Promotes use of drones for crop assessment, pesticide and fertilizer spraying, and land records digitization in agriculture.",
                benefits: [
                    "50% subsidy on drone purchase",
                    "Training and certification programs",
                    "Custom hiring center support",
                    "Technical assistance for operations"
                ],
                officialLink: "https://agricoop.nic.in/",
                applyLink: "https://farmer.gov.in/"
            },
            {
                id: 11,
                title: "Rashtriya Krishi Vikas Yojana (RKVY)",
                category: "subsidy",
                icon: "fas fa-chart-line",
                description: "State plan scheme providing flexibility to states for agriculture and allied sector development based on agro-climatic conditions.",
                benefits: [
                    "100% central assistance to states",
                    "Flexible fund utilization",
                    "Innovation and agri-entrepreneurship",
                    "Value chain development support"
                ],
                officialLink: "https://rkvy.nic.in/",
                applyLink: "https://rkvy.nic.in/"
            },
            {
                id: 12,
                title: "Mission for Integrated Development of Horticulture (MIDH)",
                category: "subsidy",
                icon: "fas fa-apple-alt",
                description: "Holistic growth of horticulture sector covering fruits, vegetables, root & tuber crops, mushrooms, spices, flowers, etc.",
                benefits: [
                    "50% subsidy on planting material",
                    "Pack house and cold storage support",
                    "Organic farming promotion",
                    "Market infrastructure development"
                ],
                officialLink: "https://midh.gov.in/",
                applyLink: "https://midh.gov.in/"
            }
        ];

        function createSchemeCard(scheme) {
            return `
                <div class="scheme-card" data-category="${scheme.category}">
                    <div class="scheme-header">
                        <div class="scheme-icon">
                            <i class="${scheme.icon}"></i>
                        </div>
                        <div class="scheme-title">${scheme.title}</div>
                    </div>
                    <div class="scheme-category">${scheme.category.charAt(0).toUpperCase() + scheme.category.slice(1)}</div>
                    <div class="scheme-description">${scheme.description}</div>
                    <div class="scheme-benefits">
                        <div class="benefits-title">Key Benefits:</div>
                        <ul class="benefits-list">
                            ${scheme.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="scheme-actions">
                        <a href="${scheme.officialLink}" target="_blank" class="action-btn btn-primary">
                            <i class="fas fa-external-link-alt"></i>
                            Official Website
                        </a>
                        <a href="${scheme.applyLink}" target="_blank" class="action-btn btn-secondary">
                            <i class="fas fa-edit"></i>
                            Apply Now
                        </a>
                    </div>
                </div>
            `;
        }

        function renderSchemes(schemesToRender = schemes) {
            const schemesGrid = document.getElementById('schemesGrid');
            const noResults = document.getElementById('noResults');
            
            if (schemesToRender.length === 0) {
                schemesGrid.style.display = 'none';
                noResults.classList.remove('hidden');
            } else {
                schemesGrid.style.display = 'grid';
                noResults.classList.add('hidden');
                schemesGrid.innerHTML = schemesToRender.map(createSchemeCard).join('');
            }
        }

        function filterSchemes() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const selectedCategory = document.getElementById('categoryFilter').value;
            
            let filteredSchemes = schemes;
            
            if (selectedCategory !== 'all') {
                filteredSchemes = filteredSchemes.filter(scheme => scheme.category === selectedCategory);
            }
            
            if (searchTerm) {
                filteredSchemes = filteredSchemes.filter(scheme => 
                    scheme.title.toLowerCase().includes(searchTerm) ||
                    scheme.description.toLowerCase().includes(searchTerm) ||
                    scheme.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm))
                );
            }
            
            renderSchemes(filteredSchemes);
        }

        // Event listeners
        document.getElementById('searchInput').addEventListener('input', filterSchemes);
        document.getElementById('categoryFilter').addEventListener('change', filterSchemes);

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            renderSchemes();
            document.getElementById('totalSchemes').textContent = schemes.length + '+';
        });

        // Smooth scrolling for internal links
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('action-btn')) {
                // Add click analytics or tracking here if needed
                console.log('Scheme link clicked:', e.target.closest('.scheme-card').querySelector('.scheme-title').textContent);
            }
        });