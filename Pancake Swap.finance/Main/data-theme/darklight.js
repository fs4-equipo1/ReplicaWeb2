function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');

    // Toggle between light and dark themes
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update the data-theme attribute
    html.setAttribute('data-theme', newTheme);
}
