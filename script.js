
// Sezioni a scomparsa: mostra solo la sezione selezionata dal menù
document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('main .section');
	const navLinks = document.querySelectorAll('.mobile-nav a');

	navLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').replace('#', '');
			sections.forEach(section => {
				if (section.id === targetId) {
					section.classList.remove('hidden');
					section.scrollIntoView({behavior: 'smooth', block: 'start'});
				} else {
					section.classList.add('hidden');
				}
			});
		});
	});
});
