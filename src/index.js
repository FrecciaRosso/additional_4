module.exports = function multiply(first, second) {
  // your solution
/*   var result = first * second + "";
  if (result.indexOf("e") > -1) {
	  var fractionNumber = result.split("e+")[0];
	  var wholePart = fractionNumber.split(".")[0];
	  var fractionPart = fractionNumber.split(".")[1];
	  var zerosNumber = +result.split("e+")[1] - fractionPart.length;
	  var zerosString = "";
	  for (var i = 1; i <= zerosNumber; i++) {
		  zerosString += "0";
	  }
	  
	  result = wholePart + fractionPart + zerosString;
  }
  return result; */
  if (first.length == 0 || second.length == 0) {
		return "";
	}
	if (first == "0" || second == "0") {
		return "0";
	}
	var c1 = first.split('').reverse();
	var c2 = second.split('').reverse();
	var c = [];
	for (var i = 0; i < c1.length + c2.length + 1; i++) {
		c[i] = '0';
	}
	for (var i = 0; i < c2.length; i++) {
		var dig2 = parseInt(c2[i]);
		var carry = 0;
		for (var j = 0; j < c1.length; j++) {
			var dig1 = parseInt(c1[j]);
			var temp = parseInt(c[i + j]);
			var cur = dig1 * dig2 + temp + carry;
			c[i + j] =cur % 10 + '';
			carry = parseInt(cur / 10);
		}
		c[i + c1.length] = carry + '';
	}
	var result = c.reverse().join("");
	console.log(result);
	var pos = 0;
	while(result.charAt(pos) == '0' && pos < result.length) {
		pos++;
	}
	return result.substring(pos);
}
