let a = new Array(30);
let b = new Array(30);
let c = new Array(30);
let html = new String();

function GiveQuestions() {
	for (let i=0;i<10;i++){
		c[i]=Math.round(Math.random() * 100);
		a[i]=Math.round(Math.random() * c[i]);
		b[i]=c[i]-a[i];
	}
	for (let i=10;i<20;i++){
		a[i]=Math.round(Math.random() * 100);
		c[i]=Math.round(Math.random() * a[i]);
		b[i]=a[i]-c[i];
	}
	for (let i=20;i<30;i++){
		c[i]=Math.round(Math.random() * 100) * 10;
		a[i]=Math.round(Math.random() * c[i]/10) * 10;
		b[i]=c[i]-a[i];
	}
}

function ShowResult() {
	let tempHtml = new String();
	for (let i=0;i<10;i++){
		tempHtml = tempHtml + "<tr><td>" + a[i] + "+" + b[i] +"="+ c[i] + "</td><td>" + a[i+10] + "-" + b[i+10] +"="+ c[i+10] + "</td><td>" + a[i+20] + "+" + b[i+20] +"="+ c[i+20] + "</td></tr>";
	}
	table_element = document.getElementById("sheets");
	table_element.innerHTML = tempHtml;
}

function HideResult() {
	let tempHtml = new String();
	for (let i=0;i<10;i++){
		tempHtml = tempHtml + "<tr><td>" + a[i] + "+" + b[i] +"=" + "</td><td>" + a[i+10] + "-" + b[i+10] +"=" + "</td><td>" + a[i+20] + "+" + b[i+20] +"=" + "</td></tr>";
	}
	table_element = document.getElementById("sheets");
	table_element.innerHTML = tempHtml;
}

function ShowQuestions() {
	GiveQuestions();
	let tempHtml = new String();
	for (let i=0;i<10;i++){
		tempHtml = tempHtml + "<tr><td>" + a[i] + "+" + b[i] +"=" + "</td><td>" + a[i+10] + "-" + b[i+10] +"=" + "</td><td>" + a[i+20] + "+" + b[i+20] +"=" + "</td></tr>";
	}
	table_element = document.getElementById("sheets");
	table_element.innerHTML = tempHtml;
}




