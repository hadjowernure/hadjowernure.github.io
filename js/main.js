$(document).ready(function(){
	//Basic

	/*
	B1.Скрытие/появление блоков информации под заголовками раскрывающиеся 
	по клику на заголовок (информационные блоки).
	*/

	$("#objective h2").click(function(){
		$(this).next("p:visible").slideUp("fast");
		$(this).next("p:hidden").slideToggle("fast");
	});

	/*
	B2.В таблицах при перемещении мышки подсвечивать текущую строку
	*/

	$("tr").mouseover(function(){
		$(this).css("background-color", "#FFF3E0");
	});

	$("tr").mouseleave(function(){
		$(this).css("background-color", "");
	});


	//Medium

	/*
	M1. Добавить горячие клавиши, позволяющие переходить к элементам 
	форм или фрагментам текста страницы (например на определенные 
	заголовки по клавишам ctrl+1 и т.д.)
	*/
	//Переход к форме по ctrl+q

	$(document).bind('keydown', 'ctrl+q', function(){
		$('html, body').animate({
        	scrollTop: $("#form").offset().top
    	}, 1000);
	});

	/*
	M2. Произвести валидацию данных на полях формы (эл. адрес, телефон)
	*/
	//Используется плагин jquery.validate

	$(function(){
		$.validator.addMethod("loginRegex", function(value, element) {
        	return this.optional(element) || /^[a-z0-9\-]+$/i.test(value);
    	}, "Nickname must contain only letters, numbers, or dashes.");

		$("#form form").validate({
			errorClass: "form-error",
			rules: {
				nickname: {
					required: true,
					loginRegex: true
				},
				tags: "required",
				message: "required"

			},
			messages: {
				nickname: {
					required: "Please enter your nickname",
					loginRegex: "Username format not valid"
				},
				tags: "Please enter tag(s)",
				message: "Note should not be empty"

			},
			errorPlacement: function(error, element) {
				$("<br>").appendTo(element.parent().find("label"));
				error.appendTo(element.parent().find("label"));
			}
		});
	});

	/*
	M3.При нажатии на картинку открывать в новом слое окно с изображением 
	и кнопкой закрыть в верхнем правом углу затемняя при этом основную 
	часть сайта
	*/


	$("img").click(function(){
		//Get the modal
		var modal = $("#myModal");

		//Get image and insert it inside the modal - use its 
		//"alt" text as a caption
		var modalImage = $("#img01");
		var captionText = $("#caption");

		//modal.style.display = "block";
		modal.show();
		modalImage.attr("src", $(this).attr("src"));
		captionText.innerHtml = $(this).alt;

		//Get the close span
		var span = $("span.close");

		span.click(function(){
			modal.hide();
		});
	});

	//High

	/*
	H1. Создать галерею фотографий, с прокручивающимися влево или вправо 
	мини картинками (при кликах на картинку выводить окно из задания 
	средней сложности)
	*/

	$(function(){
		var num = 9;
		var ul = $("ul.images");
		var src = 'https://sites.google.com/a/nure.ua/vladyslav-dudar/img/';
		$(".images img").each(function(index, element){
			$(element).attr("src", src + index + ".jpg")
		});

    	/* конфигурация */
    	var width = 165; // ширина изображения
    	var count = 3; // количество изображений

    	var carousel = document.getElementById('carousel');
    	var list = carousel.querySelector('ul');
    	var listElems = carousel.querySelectorAll('li');

    	var position = 0; // текущий сдвиг влево

    	carousel.querySelector('.prev').onclick = function() {
      	// сдвиг влево
      	// последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      	position = Math.min(position + width * count, 0);
      	list.style.marginLeft = position + 'px';
    	};

    	carousel.querySelector('.next').onclick = function() {
      	// сдвиг вправо
      	// последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      	position = Math.max(position - width * count, -width * (listElems.length - count));
      	list.style.marginLeft = position + 'px';
    	};

    	/*
			Методы вызываемые по расписанию
			Прокрутка галереи из начала в конец и обратно
    	*/
    	var isToRight = true;
    	setInterval(function() {
    		var newPosition;
    		newPosition = isToRight 
    		? Math.max(position - width * count, -width * (listElems.length - count))
    		: Math.min(position + width * count, 0);

      		if (newPosition === position) {
      			isToRight = !isToRight;
      			newPosition = isToRight 
    			? Math.max(position - width * count, -width * (listElems.length - count))
    			: Math.min(position + width * count, 0);
      		}
      		position = newPosition;

      		list.style.marginLeft = position + 'px';
    	}, 5000);
	});

	/*
	H2. При переходах на другую страницу, отображать содержимое 
	постепенно (повышая контрастность изображения за некоторое время 
	от нуля до максимума).
	*/

	$("body").fadeIn(1500);

});