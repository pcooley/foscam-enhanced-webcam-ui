function Camera (
    Config, CamImpl
) {
	this.config = Config;
	this.camera = CamImpl;

	this.left = function() {
		this.camera.left(this.buildBaseURL(), this.buildQueryString());
		if( console && console.log ) {
	            console.log("left:" + config['server']);
	            }
	};

	this.right = function() {
		this.camera.right();	
		if( console && console.log ) {
	            console.log("right" + config['server']);
	            }
	};
	
	this.up = function() {
		this.camera.up();	
		if( console && console.log ) {
	            console.log("up" + config['server']);
	            }
	};
	
	this.down = function() {
		this.camera.down();
		if( console && console.log ) {
	            console.log("down" + config['server']);
	            }
	};
	
	
	this.up_left = function() {
		this.camera.up_left();
		if( console && console.log ) {
	            console.log("up_left:" + config['server']);
	            }
	};


	this.up_right = function() {
		this.camera.up_right();
		if( console && console.log ) {
	            console.log("up_right" + config['server']);
	            }
	};
	
	this.down_left = function() {
		this.camera.down_left();
		if( console && console.log ) {
	            console.log("down_left" + config['server']);
	            }
	};
	
	this.down_right = function() {
		this.camera.down_right();
		if( console && console.log ) {
	            console.log("down_right" + config['server']);
	            }
	};

	
	this.stop =  function() {
		this.camera.stop();
		if( console && console.log ) {
	            console.log("stop" + config['server']);
	            }
	};
	this.ir_on =  function() {
		this.camera.ir_on();
		if( console && console.log ) {
	            console.log("ir_on" + config['server']);
	            }
	};
	
	this.ir_off =  function() {
		this.camera.ir_off();
		if( console && console.log ) {
	            console.log("ir_off" + config['server']);
	            }
	};
	
	this.buildBaseURL = function() {
		return "http://" + config['server'] + "/";
		}
	
	this.buildQueryString = function() {
		return "&user=" + config['user'] + "&" + "pwd=" + config['password'];
		}

}



