// Clic sur tous les mêmes boutons d'une page 
// dans la console de chrome 
// Trouver la classe du bouton avec l'inspecteur puis les 

$('.df.0.0.0.0.0:2z.0.$right').each(
	function (i) 
	{ var icn = $(this); 
		setTimeout(function () 
			{ icn.click(); }, 
			(10+100*Math.random())*i)
		;}
		);