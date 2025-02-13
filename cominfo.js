// Tier 1 Companies
const tier1Companies = [
    { name: "Google", details: "15-20 LPA, Software Engineers" },
    { name: "Amazon", details: "15-20 LPA, Product Managers" },
    { name: "Microsoft", details: "15-20 LPA, Software Engineers" },
    { name: "Apple", details: "15-20 LPA, Hardware Engineers, Software Engineers" },
    { name: "Meta", details: "15-20 LPA, Data Scientists, UX Designers" },
    { name: "Netflix", details: "15-20 LPA, Software Engineers, Content Managers" }
];

// Tier 2 Companies
const tier2Companies = [
    { name: "Acko", details: "10-12 LPA, Data Scientists" },
    { name: "Adobe", details: "10-12 LPA, UX Designers" },
    { name: "Airbus", details: "10-12 LPA, System Designers" },
    { name: "Zebra Medical", details: "10-12 LPA, AI Engineers" },
    { name: "Intuit", details: "10-12 LPA, Software Engineers" },
    { name: "Oracle", details: "10-12 LPA, Product Managers" }
];

// Tier 3 Companies
const tier3Companies = [
    { name: "PhonePe", details: "6-10 LPA, Product Managers" },
    { name: "Sleepwell", details: "6-10 LPA, UX Designers" },
    { name: "Boeing", details: "6-10 LPA, Software Engineers" },
    { name: "Myntra", details: "6-10 LPA, UX Designers" },
    { name: "Swiggy", details: "6-10 LPA, Data Analysts, Software Engineers" },
    { name: "Tata Consultancy Services (TCS)", details: "6-10 LPA, Software Engineers" }
];

// Function to dynamically display company data
function displayCompanies(tierId, companies) {
    const tierElement = document.getElementById(tierId);
    companies.forEach(company => {
        tierElement.innerHTML += `
            <li class="company">
                <input type="checkbox" class="company-checkbox">
                <p><strong>${company.name}</strong></p>
                <p>${company.details}</p>
            </li>
        `;
    });
}

// Populate all tiers
displayCompanies("company-list", tier1Companies.concat(tier2Companies, tier3Companies));

// Function to move selected companies to the right
function moveToRight() {
    const selectedCompanies = document.querySelectorAll('#company-list .company-checkbox:checked');
    selectedCompanies.forEach(company => {
        const clone = company.closest('li').cloneNode(true);
        document.querySelector('.selected-companies').appendChild(clone);
        company.closest('li').remove(); // Remove from the left box
    });
}

// Function to move selected companies from the right box to the left box
function moveToLeft() {
    const selectedCompanies = document.querySelectorAll('.selected-companies .company-checkbox:checked');
    selectedCompanies.forEach(company => {
        const clone = company.closest('li').cloneNode(true);
        document.getElementById('company-list').appendChild(clone);
        company.closest('li').remove(); // Remove from the right box
    });
}

// Function to handle form submission
function submitSelection() {
    const selectedCompanies = document.querySelectorAll('.selected-companies .company');
    
    if (selectedCompanies.length === 0) {
        alert("Please select at least one company before submitting.");
        return;
    }
    
    // Gather the selected companies' names and details
    const selectedList = Array.from(selectedCompanies).map(company => {
        const name = company.querySelector('strong').innerText;
        const details = company.querySelector('p:nth-of-type(2)').innerText;
        return `${name} - ${details}`;
    }).join("\n");

    // For demonstration, we'll display the selected companies in an alert
    alert("You have selected the following companies:\n\n" + selectedList);

    // In a real-world scenario, you might send the data to a server here
    // Example: 
    // fetch('/submit', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ selectedCompanies: selectedList })
    // }).then(response => response.json()).then(data => console.log(data));
}
