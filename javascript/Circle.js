function circleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    return {
        diameter: diameter,
        circumference: circumference.toFixed(4),
        area: area.toFixed(3)
    };
}

const result = circleProperties(5);
console.log(`Diameter: ${result.diameter}, Circumference: ${result.circumference}, Area: ${result.area}`);