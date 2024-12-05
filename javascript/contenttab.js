 document.addEventListener('DOMContentLoaded', () => {
    // Handle click on documentation links
    const documentationLinks = document.querySelectorAll('.documentation-link');

    // Add event listener for each subject
    documentationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = e.target.getAttribute('data-content');
            
            // Call the function to update the content based on clicked subject
            updateDocumentationContent(contentId);
        });
    });

    // Function to update the content in the right column
    function updateDocumentationContent(contentId) {
        const content = {
            intro: `
                <h2 class="title is-2">Introduction</h2>
                <p>Welcome to the documentation. Here, you will find everything you need to know about our product, including setup instructions, usage guides, troubleshooting tips, and more.</p>
            `,
            setup: `
                <h2 class="title is-2">Setup</h2>
                <p>Follow these steps to set up the product:</p>
                <ol>
                    <li>Download the software</li>
                    <li>Install the application</li>
                    <li>Configure your settings</li>
                </ol>
            `,
            usage: `
                <h2 class="title is-2">Usage</h2>
                <p>To use the product, simply follow these steps:</p>
                <ul>
                    <li>Open the application</li>
                    <li>Navigate to the dashboard</li>
                    <li>Start adding your devices</li>
                </ul>
            `,
            troubleshooting: `
                <h2 class="title is-2">Troubleshooting</h2>
                <p>If you're experiencing issues, check out these common problems and solutions:</p>
                <ul>
                    <li>Problem 1: Solution</li>
                    <li>Problem 2: Solution</li>
                    <li>Problem 3: Solution</li>
                </ul>
            `,
            faq: `
                <h2 class="title is-2">FAQ</h2>
                <p>Here are some frequently asked questions:</p>
                <ul>
                    <li><strong>Q: How do I install the product?</strong> A: Follow the setup instructions.</li>
                    <li><strong>Q: Is there a free trial?</strong> A: Yes, there is a free tier for up to 50 devices.</li>
                </ul>
            `
        };

        // Update the right column with the content corresponding to the clicked subject
        const contentElement = document.getElementById('documentation-content');
        contentElement.innerHTML = content[contentId] || '<p>Content not available.</p>';
        
        
    }
        // Load the default content for "Introduction" when the page loads
        updateDocumentationContent("intro");
});