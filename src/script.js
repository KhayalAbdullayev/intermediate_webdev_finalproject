function calculateInterest(principal, rate, years) {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const y = parseFloat(years);
    
    if (isNaN(p) || isNaN(r) || isNaN(y) || p <= 0 || r <= 0 || y <= 0) {
        return null;
    }
    
    return (p * r * y) / 100;
}

document.addEventListener('DOMContentLoaded', function() {
    const computeBtn = document.getElementById('computeBtn');
    const resultSpan = document.getElementById('result');
    
    computeBtn.addEventListener('click', function() {
        const principal = document.getElementById('principal').value;
        const rate = document.getElementById('rate').value;
        const years = document.getElementById('years').value;
        
        const interest = calculateInterest(principal, rate, years);
        
        if (interest === null) {
            resultSpan.textContent = 'Please enter valid positive numbers for all fields.';
        } else {
            resultSpan.textContent = `Interest: ${interest.toFixed(2)}`;
        }
    });
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateInterest };
}
