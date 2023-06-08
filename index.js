echo '<script>
// Toggle dark theme
function toggleDarkTheme() {
    document.body.classList.toggle("black-theme");
}

// Add event listener for theme toggle
document.addEventListener("keyup", function(e) {
    if (e.key === "t") {
        toggleDarkTheme();
    }
});
</script>';
