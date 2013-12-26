function Camera (
    Config
) {
	this.config = Config;

	this.left = function() {
		if( console && console.log ) {
	            console.log("left:" + config['server']);
	            }
	};

	this.right = function() {
		if( console && console.log ) {
	            console.log("right" + config['server']);
	            }
	};
	
	this.up = function() {
		if( console && console.log ) {
	            console.log("up" + config['server']);
	            }
	};
	
	this.down = function() {
		if( console && console.log ) {
	            console.log("down" + config['server']);
	            }
	};
	
	this.stop =  function() {
		if( console && console.log ) {
	            console.log("stop" + config['server']);
	            }
	};
	
	this.ir_on =  function() {
		if( console && console.log ) {
	            console.log("ir_on" + config['server']);
	            }
	};
	
	this.ir_off =  function() {
		if( console && console.log ) {
	            console.log("ir_off" + config['server']);
	            }
	};

}



