// When the user scrolls the page, execute myFunction
// window.onscroll = function() {detectScroll()};

function detectScroll() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	navShadow(scrolled);
}

function navShadow (scroll) {
	if(scroll == 0) {
		document.getElementById('navigation-container').style.boxShadow = "none";
	} else {
		document.getElementById('navigation-container').style.boxShadow = "0 4px 16px 0 rgba(0,0,0,.2)";
	}
}
