assert = require('assert');
Ampulhetas = require('./ampulhetas').Ampulhetas;


describe('Miojo 3min',function(){
	it('Ampulhetas 5 e 7 toma 10min',function(){
		var ampulhetas = new Ampulhetas(5,7);
		assert(ampulhetas.tempoDePreparo(3) == 10);
	})

	it('Ampulhetas 4 e 5 toma 3min',function(){
		var ampulhetas = new Ampulhetas(4,5);
		assert(ampulhetas.tempoDePreparo(3) == 8);
	})

	it('Ampulhetas 5 e 4 toma 3min',function(){
		var ampulhetas = new Ampulhetas(5,4);
		assert(ampulhetas.tempoDePreparo(3) == 8);
	})

	it('Ampulhetas 5 e 8 toma 8min',function(){
		var ampulhetas = new Ampulhetas(5,8);
		assert.equal(ampulhetas.tempoDePreparo(3), 8);
	})

	it('Ampulhetas 6 e 8 não tem solução',function(){
		var ampulhetas = new Ampulhetas(6,8);
		assert.equal(ampulhetas.tempoDePreparo(3), 0);
	})
})

describe('Miojo 4min',function(){
	it('Ampulhetas 6 e 8 toma 8min',function(){
		var ampulhetas = new Ampulhetas(6,8);
		assert.equal(ampulhetas.tempoDePreparo(4), 12);
	})

	it('Ampulhetas 24 e 16 não tem solução',function(){
		var ampulhetas = new Ampulhetas(16,24);
		assert.equal(ampulhetas.tempoDePreparo(4), 0);
	})
})

describe('Miojo 6min',function(){
	it('Ampulhetas 10 e 20 não tem solução',function(){
		var ampulhetas = new Ampulhetas(10,20);
		assert.equal(ampulhetas.tempoDePreparo(6), 0);
	})
})

describe('Miojo 8min',function(){
	it('Ampulhetas 24 e 16 toma 8min',function(){
		var ampulhetas = new Ampulhetas(16,24);
		assert.equal(ampulhetas.tempoDePreparo(8), 24);
	})
})
