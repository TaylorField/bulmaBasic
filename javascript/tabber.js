 document.addEventListener('DOMContentLoaded', () => {
    // Get all tab links and content sections
    const tabLinks = document.querySelectorAll('.tab-link');
    const contentTabs = document.querySelectorAll('.content-tab');

    // Add event listeners to tab links
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default behavior (navigation)
            e.preventDefault();

            // Get the target tab
            const targetTab = e.target.getAttribute('data-tab');

            // Hide all content sections
            contentTabs.forEach(tab => {
                tab.style.display = 'none';
            });

            // Show the selected content section
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.style.display = 'block';
            }

            // Update active tab styling
            tabLinks.forEach(tab => {
                tab.classList.remove('is-primary'); // Remove active class from all
            });
            e.target.classList.add('is-primary'); // Add active class to clicked tab
        });
    });

    // Optionally, set the default tab to be "Overview"
    const defaultTab = document.querySelector('.tab-link[data-tab="overview"]');
    if (defaultTab) {
        defaultTab.click();
    }
});