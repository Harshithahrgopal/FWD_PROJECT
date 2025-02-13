// Tier 1 Companies
const tier1Companies = [
  { name: "Google",  details: "15-20 LPA, Software Engineers" },
  { name: "Amazon",  details: "15-20 LPA, Product Managers" },
  { name: "Microsoft",  details: "15-20 LPA, Software Engineers" },
  { name: "Apple", details: "15-20 LPA, Hardware Engineers, Software Engineers" },
  { name: "Meta", details: "15-20 LPA, Data Scientists, UX Designers" },
  { name: "Netflix", details: "15-20 LPA, Software Engineers, Content Managers" }
];

// Tier 2 Companies
const tier2Companies = [
  { name: "Acko",  details: "10-12 LPA, Data Scientists" },
  { name: "Adobe",  details: "10-12 LPA, UX Designers" },
  { name: "Airbus", details: "10-12 LPA, System Designers" },
  { name: "Zebra Medical", details: "10-12 LPA, AI Engineers" },
  { name: "Intuit", details: "10-12 LPA, Software Engineers" },
  { name: "Oracle", details: "10-12 LPA, Product Managers" }
];

// Tier 3 Companies
const tier3Companies = [
  { name: "PhonePe",  details: "6-10 LPA, Product Managers" },
  { name: "Sleepwell",  details: "6-10 LPA, UX Designers" },
  { name: "Boeing",  details: "6-10 LPA, Software Engineers" },
  { name: "Myntra", details: "6-10 LPA, UX Designers" },
  { name: "Swiggy", details: "6-10 LPA, Data Analysts, Software Engineers" },
  { name: "Tata Consultancy Services (TCS)", details: "6-10 LPA, Software Engineers" }
];

// Function to dynamically display company data
function displayCompanies(tierId, companies) {
  const tierElement = document.getElementById(tierId);
  companies.forEach(company => {
    tierElement.innerHTML += `
      <div class="company">
        <p><strong>${company.name}</strong></p>
        <p>${company.details}</p>
      </div>
    `;
  });
}

// Populate all tiers
displayCompanies("tier1-companies", tier1Companies);
displayCompanies("tier2-companies", tier2Companies);
displayCompanies("tier3-companies", tier3Companies);
