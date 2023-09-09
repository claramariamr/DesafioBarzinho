function calculateBill() {
    const quantidadeChopps = parseFloat(document.getElementById("quantidadeChopps").value);

    const applyDiscount = document.getElementById("desconto").checked;

    let acrescimo;
    if (applyDiscount) {
        acrescimo = 0.10;
    } else {
        acrescimo = 0;
    }

    let totalApagar = quantidadeChopps * 12 + (quantidadeChopps * 12 * acrescimo);

    document.getElementById("totalApagar").textContent = totalApagar.toFixed(2);

    document.getElementById("resultado").style.display = "block";
}