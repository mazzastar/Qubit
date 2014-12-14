var $ = function (selector) {
  var elements = [];

  ////////////////////
  // Your code here //
  ////////////////////
	var tagRegex = /(^[A-Z|a-z]+)/;
	var tagRegexResults = tagRegex.exec(selector);
	var classRegex = /.*\.([0-9|A-Z|a-z|\_]+)/;
	var classRegexResults = classRegex.exec(selector);
	var idRegex = /.*\#([0-9|A-Z|a-z|\_]+)/;
	var idRegexResults = idRegex.exec(selector);
	
	var tagSearch = ""
	if (!tagRegexResults){
		tagSearch = "*"
	}
	else{
		tagSearch = tagRegexResults[1];
	}
	//Get all possible Tags
	elements = document.getElementsByTagName(tagSearch)
	
	//Apply Filter by class if required	
	if(classRegexResults){
		var newCandidates = [];
		for(var i=0; i<elements.length; i++){
			if(elements[i].classList.contains(classRegexResults[1])){
				newCandidates.push(elements[i]);	
			}
		}
		elements=newCandidates;
	}
	
	//Apply Filter by Id if required	
	if(idRegexResults){
		var newCandidates = [];
		for(var i=0; i<elements.length; i++){
			if(elements[i].id == idRegexResults[1]){
				newCandidates.push(elements[i]);	
			}
		}
		elements=newCandidates;
	}

  return elements;
}