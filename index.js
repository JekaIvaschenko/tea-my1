// Helper function to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// Helper function to calculate the circumference of a circle
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Main function to display the results
function displayCircleProperties(radius) {
    if (radius <= 0) {
        console.log('Please enter a positive radius');
        return;
    }

    const area = calculateArea(radius);
    const circumference = calculateCircumference(radius);

    console.log(`For a circle with radius ${radius}:`);
    console.log(`Area: ${area.toFixed(2)}`);
    console.log(`Circumference: ${circumference.toFixed(2)}`);
}

// Example usage
const radius = 5;
displayCircleProperties(radius);
