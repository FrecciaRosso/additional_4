module.exports = function multiply(first, second) {
  // your solution
 	if (first == "0" || second == "0") {
		return "0";
	}
	
	if (first.length == 0 || second.length == 0) {
		return "";
	}
	
	var reversed1 = first.split('').reverse();
	var reversed2 = second.split('').reverse();
	var calculationMatrix = [];
	for (var i = 0; i < reversed1.length + reversed2.length + 1; i++) {
		calculationMatrix[i] = '0';
	}
	for (var i = 0; i < reversed2.length; i++) {
		var digit2 = parseInt(reversed2[i]);
		var caret = 0;
		for (var j = 0; j < reversed1.length; j++) {
			var digit1 = parseInt(reversed1[j]);
			var temp = parseInt(calculationMatrix[i + j]);
			var current = digit1 * digit2 + temp + caret;
			calculationMatrix[i + j] = current % 10 + '';
			caret = parseInt(current / 10);
		}
		calculationMatrix[i + reversed1.length] = caret + '';
	}
	var result = calculationMatrix.reverse().join("");
	console.log(result);
	var pos = 0;
	while(result.charAt(pos) == '0' && pos < result.length) {
		pos++;
	}
	return result.substring(pos);
}
