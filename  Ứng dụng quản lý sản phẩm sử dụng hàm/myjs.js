var product = ["Sony","Samsung"];
var data = '';
function Display() {	
	for (var i = 0; i<product.length; i++) {
		data += "<tr><td id='nameProduct'> " + product[i] + "</td><td><button class='btn btn-success' onclick='editProduct("+i+")'>Edit</button></td><td><button class='btn btn-success' onclick='delProduct("+i+")'>Delete</button></td></tr>";
	}document.getElementById('table').innerHTML = data;	
	data = '';
}

function addProduct() {
	var add = document.getElementById('add').value;	
		product.push(add);
	Display();
} 

function editProduct(abc) {
var name = prompt('Nhập tên sản phẩm','');
	for (var j = 0; j <product.length; j++) {		
		if (product[abc] == product[j]) {
			product[j] = name;
			// console.log(product[abc]);
		}
	}
	Display();
}

function delProduct(abc) {
for (var j = 0; j <product.length; j++) {		
		if (product[abc] == product[j]) {
			product.splice(j,1);		
			// console.log(product[abc]);
		}
	}
	Display();
}