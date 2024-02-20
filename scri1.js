let v1 = window.document.getElementsByClassName('li_listi');
let counter = 0;
for(counter = 0; counter < v1.length; counter += 1){ 
	v1[counter].style = 'margin-left:4%;'
}

let ongoing = window.document.getElementsByClassName('ongoing');
ongoing[0].onclick = () =>{
	window.alert('Ongoing project');
	console.log('I\'ll let you all knwo when it\'s ready');
}