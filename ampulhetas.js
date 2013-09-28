exports.Ampulhetas = function(ampulheta1, ampulheta2) {
	this.tempoDePreparo = function(tempoMiojo) {
		if (ampulheta1 % 2 == 0 && ampulheta2 % 2 == 0 && tempoMiojo % 2 == 1){
			return 0;
		}

		if (Math.max(ampulheta1,ampulheta2) % Math.min(ampulheta1,ampulheta2) == 0) {
			return 0;
		}

		var x = 1, y = 1;
		var solucao = false;

		while (Math.abs(ampulheta1 * x - ampulheta2 * y) != tempoMiojo) {
			
			if (x * ampulheta1 == y * ampulheta2) {
				return 0;
			}

			if (x * ampulheta1 < y * ampulheta2) {
				x++;
			} else {
				y++;
			}

			
		}
 
		return Math.max(x * ampulheta1, y * ampulheta2);
	}
}