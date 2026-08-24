function calculateInterest(principal, rate, years) {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const y = parseFloat(years);

    if (isNaN(p) || isNaN(r) || isNaN(y) || p <= 0) {
        return null;
    }
    return (p * r * y) / 100;
}

function updateCompute() {
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");
    const resultSpan = document.getElementById("result");

    if (principalInput && rateInput && yearsInput && resultSpan) {
        const interest = calculateInterest(principalInput.value, rateInput.value, yearsInput.value);
        if (interest !== null) {
            resultSpan.innerText = interest;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("computeBtn");
    if (btn) {
        btn.addEventListener("click", updateCompute);
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateInterest };
}
