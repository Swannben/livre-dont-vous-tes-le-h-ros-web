



window.addEventListener("load", function(){
	var numchap=1;
	if (window.location.hash.substring(1)){
		numchap=window.location.hash.substring(1);
	}
	
	update(numchap);
	
	});

window.addEventListener("hashchange", function(){
	var numchap=window.location.hash.substring(1);

	update(numchap);
})


function update( numchap){
	fetch("json/chapitre"+numchap+".json")
	.then(function (response){
		return response.json();
	}).then(function(data){
		var paragraphe =document.getElementById("paragraphe");
		var list =document.getElementById("listeLien");
		paragraphe.textContent=data.txt;
		while (list.firstChild){
			list.removeChild(list.firstChild);
		}
		for (element of data.links){
			ea= document.createElement("a");
			ea.setAttribute("href",element.link);
			ea.textContent=element.txt;
			eli= document.createElement("li");
			eli.appendChild(ea);
			list.appendChild(eli);
		}
	})
}	