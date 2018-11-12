 k = "foo" && "bar"; // "bar"
console.log(k);
 k = "bar" && "foo"; // "foo"
console.log(k);
 k = "foo" && "";    // ""
console.log(k);
 k = ""    && "foo"; // ""
console.log(k);

 k = "foo" || "bar"; // "foo"
console.log(k);
 k = "bar" || "foo"; // "bar"
console.log(k);
 k = "foo" || "";    // "foo"
console.log(k);
 k = ""    || "foo"; // "foo"
console.log(k);


// false
// undefined
// null
// NaN
// 0 (both +0 and -0)
// ""
var p = function(){
	var l;
	return l;
}


console.log(p());

l = "";
if(l){
	console.log('truthy');
} else {
	console.log('falsy');
}

l = null;
if(l){
	console.log('truthy');
} else {
	console.log('falsy');
}
l = 0;
if(l){
	console.log('truthy');
} else {
	console.log('falsy');
}
l = false;
if(l){
	console.log('truthy');
} else {
	console.log('falsy');
}
