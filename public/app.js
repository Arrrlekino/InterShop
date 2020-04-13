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