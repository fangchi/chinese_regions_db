var fs = require('fs'),
	path = require('path'),
	_ = require('underscore'),
	read = fs.readFileSync,
	write = fs.writeFileSync;
var resault = [];
_.each(JSON.parse(read('./json/index.json')), function(province) {
	var proviceArray = [];
	proviceArray.push(province.n);
	_.each(JSON.parse(read('./json/'+province.i+'.json')),function(city){
		var cityArray = [];
		cityArray.push(city.n);
		var distArray = [];
		if(city.c){
			_.each(city.c,function(dist){
				distArray.push(dist.n);
			});
			cityArray.push(distArray);
		}
		proviceArray.push(cityArray);
	});
	resault.push(proviceArray);
});
//console.info(JSON.stringify(resault));
write('json/zone.json', JSON.stringify(resault));