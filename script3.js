// Function to split text content into spans if not already split
function splitTextToSpans(targetElement) {
  // Check if already split
  if (targetElement && !targetElement.classList.contains('text-split')) {
    const text = targetElement.textContent.trim();
    targetElement.innerHTML = ''; // Clear existing content

    // Split text into spans
    for (let character of text) {
      const span = document.createElement('span');
      if (character === ' ') {
        span.innerHTML = '&nbsp;'; // Preserve space with non-breaking space
      } else {
        span.textContent = character;
      }
      targetElement.appendChild(span);
    }

    // Mark element as processed
    targetElement.classList.add('text-split');
  }
}

// Select all skills elements and split text into spans
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
  splitTextToSpans(skill);
});

// Event listener for window resize to handle responsive changes if needed
window.addEventListener('resize', () => {
  // Optionally handle responsive adjustments here
});

