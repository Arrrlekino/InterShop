function something()
{
		//alert('Hello! ;-)');
		/* этот код ниже для проверки переменной +-
		*/
		var x = window.localStorage.getItem('bbb'); // x = hh['bbb']
		x = x * 1 + 1; // x * 1 = для того чтобы х перевести в int из String

		window.localStorage.setItem('bbb', x); // hh['bbb'] = x
		alert(x); 
}

	function add_to_cart(id)
	{
		//alert('You add product with id:' + id);    
		var key = 'product_' + id;                                                                 
		var x = window.localStorage.getItem(key);
		x = x * 1 + 1; 
		window.localStorage.setItem(key, x);

		alert('Items in your cart: ' + cart_get_number_of_items()); 
		//add little window for displaying summ all the products
		update_orders_input();
		update_orders_button();
	}

	function update_orders_input()
	{
		var orders = cart_get_orders();
		$('#orders_input').val(orders);
	}

function update_orders_button()
{
	var text = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_button').val(text);
}
/* 1 variant
function get_number_products()
{
		var total = 0;
for (var i = 0; i < window.localStorage.length; i++) 
	{
	var key = window.localStorage.key(i);
		if (key.search("prod")>=0)
		{ 
			total = total * 1 + window.localStorage[key]*1;
		}
	}
document.getElementById("basket").innerHTML = "your basket contans " + total + " products";
} */
// 2 variant
function cart_get_number_of_items () 
{
	var cnt = 0;
	for(var i = 0; i < window.localStorage.length; i++) 
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);
		if(key.indexOf('product_') == 0) 
		{
			//cnt++; calculate amount type products
			cnt = cnt + value * 1; // calculate amount all products
		}
	}
	return cnt;// body...
}
function cart_get_orders()
{
	var orders = '';
	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // get the key
		var value = window.localStorage.getItem(key); // get value
		 if(key.indexOf('product_') == 0)
		 {
		 	orders = orders + key + '=' + value + ',';
		 }
	}
	return orders;
}

function cancel_order()
{
	alert('aaa');
	return false;
}