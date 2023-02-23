// Show hidden DIV on hover
document.addEventListener('mouseover', function handleMouseOver(e) {
	if (e.target.closest(".equation_left")){
		equation = e.target.closest(".equation_left").parentElement.parentElement.parentElement;
		equation.querySelector('.equation_left_hidden').style.visibility = 'visible';
	 	e.target.closest(".equation_left").style.backgroundColor = "lightgray";
	}
	if (e.target.closest(".equation_right")){
		equation = e.target.closest(".equation_right").parentElement.parentElement.parentElement;
	 	equation.querySelector('.equation_right_hidden').style.visibility = 'visible';
	 	e.target.closest(".equation_right").style.backgroundColor = "lightgray";
	}
});

// Hide DIV on mouse out
document.addEventListener('mouseout', function handleMouseOut(e) {
	if (e.target.closest(".equation_left")){
		equation = e.target.closest(".equation_left").parentElement.parentElement.parentElement;
		equation.querySelector('.equation_left_hidden').style.visibility = 'hidden';
		e.target.closest(".equation_left").style.backgroundColor = "transparent";
	}
	if (e.target.closest(".equation_right")){
		equation = e.target.closest(".equation_right").parentElement.parentElement.parentElement;
	 	equation.querySelector('.equation_right_hidden').style.visibility = 'hidden';
		e.target.closest(".equation_right").style.backgroundColor = "transparent";
	}
});