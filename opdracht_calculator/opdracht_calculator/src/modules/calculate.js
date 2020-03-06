/* Delen van twee waarden*/
import{add} from './add.js'
import{divide} from './divide.js'
import{multiply} from './multiply.js'
import{substract} from './substract.js'

function calculate(a, b, operator) {
  "use strict";
	var c = 0;
  switch (operator) {
		case "+":
			c = add(a, b);
			break;
		case "-":
			c = substract(a, b);
			break;
		case "*":
			c = multiply(a, b);
			break;
		case "/":
			c = divide(a, b);
			break;
		default:
			c = 0;
	}
	return c;
}
export{calculate}
