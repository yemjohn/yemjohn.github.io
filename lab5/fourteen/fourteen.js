function showForm2(){
    alert("Product Number = "+ document.getElementById("pNumber").value + "\n" + ("Name = "+ document.getElementById("name").value)
    + "\n" + ("Unit Price = "+ document.getElementById("uPrice").value) + "\n" + ("Quantity In Stock = "+ document.getElementById("qtyInStock").value)
    + "\n" + ("Supplier = "+ document.getElementById("supplier").value) + "\n" + ("Suppy Date  = "+ document.getElementById("supplyDate").value) );
}
function showForm1 () {
    console.log("Product Number = "+ document.getElementById("pNumber").value);
    console.log("Name = "+ document.getElementById("name").value);
    console.log("Unit Price = "+ document.getElementById("uPrice").value);
    console.log("Quantity In Stock = "+ document.getElementById("qtyInStock").value);
    console.log("Supplier = "+ document.getElementById("supplier").value);
    console.log("Suppy Date  = "+ document.getElementById("supplyDate").value);
}