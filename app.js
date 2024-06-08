document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("profit-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const purchasePrice = parseFloat(document.getElementById("purchase-price").value);
        const salePriceTotal = parseFloat(document.getElementById("sale-price").value);

        if (!isNaN(purchasePrice) && !isNaN(salePriceTotal) && purchasePrice > 0) {
            const profit = ((salePriceTotal - purchasePrice) / purchasePrice) * 100;

            const profitBar = document.getElementById("profit-bar");
            profitBar.style.width = Math.min(profit, 100) + "%";

            if (profit < 10) {
                profitBar.style.backgroundColor = "#FF5252"; // Rojo
            } else if (profit < 50) {
                profitBar.style.backgroundColor = "#FFC107"; // Amarillo
            } else {
                profitBar.style.backgroundColor = "#4CAF50"; // Verde
            }

            document.getElementById("profit-percentage").innerText = "Rentabilidad: " + profit.toFixed(2) + "%";
        } else {
            alert("Por favor, ingrese valores válidos para el precio de compra y el precio de venta.");
        }
    });

    document.getElementById("calculate-partition-btn").addEventListener("click", function() {
        const purchasePrice = parseFloat(document.getElementById("purchase-price").value);
        const quantity = parseFloat(document.getElementById("quantity").value);

        if (!isNaN(purchasePrice) && quantity > 0) {
            const partitionPrice = purchasePrice / quantity;
            document.getElementById("partition-price").value = partitionPrice.toFixed(2);
        } else {
            alert("Por favor, ingrese un precio de compra válido y una cantidad de particiones mayor que cero.");
        }
    });

    document.getElementById("calculate-total-btn").addEventListener("click", function() {
        const partitionPrice = parseFloat(document.getElementById("partition-price").value);
        const multiplyQuantity = parseFloat(document.getElementById("multiply-quantity").value);

        if (!isNaN(partitionPrice) && multiplyQuantity > 0) {
            const totalPrice = partitionPrice * multiplyQuantity;
            document.getElementById("total-price").value = totalPrice.toFixed(2);
        } else {
            alert("Por favor, ingrese un precio por partición válido y una cantidad mayor que cero.");
        }
    });
});
