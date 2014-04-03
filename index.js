var TestModule = function(){

	_getCurrentTime = function(cb){
		return cb(null, new Date());
	}

	return {
		getCurrentTime: _getCurrentTime
	}

}();
module.exports = TestModule;

