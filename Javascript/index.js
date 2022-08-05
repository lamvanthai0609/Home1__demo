const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);





(() =>{
	const obSever = new IntersectionObserver(entries =>{
	entries.forEach(entry =>{
		
			const {target} = entry;
			target.classList.toggle('activee',entry.isIntersecting)
		})
	},{
		rootMargin:"0px"
	})
	$$('.element').forEach(element =>{
		obSever.observe(element);
	});
})();


window.addEventListener('scroll', ()=>{
	const scroll = window.scrollY;
	if (scroll>5) {
		$('#header').classList.add('Header__scroll');
	}
	else{
		$('#header').classList.remove('Header__scroll');	
	}
});



$('#scrollBtn').addEventListener("click",()=>{
	window.scrollTo({
		top:0,
		behavior: 'smooth',
	});
});
