document.addEventListener('DOMContentLoaded', function () {
  function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = currentYear;
  }

  updateCopyrightYear();

  // Set up an interval to check and update the year periodically (e.g., every minute)
  setInterval(updateCopyrightYear, 60000); // 60000 milliseconds = 1 minute
});
