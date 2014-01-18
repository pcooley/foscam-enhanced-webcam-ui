function Camera (
    Config, CamImpl
) {
	this.config = Config;
	this.camera = CamImpl;

	this.setPageTitle = function() {
		$("#navtitle").text(	this.config["navtitle"]);
	};

	this.left = function() {
		this.camera.left(this.buildBaseURL(), this.buildAuthQS());
		if( console && console.log ) {
	            console.log("left:" + config['server']);
	            }
	};

	this.right = function() {
		this.camera.right(this.buildBaseURL(), this.buildAuthQS());	
		if( console && console.log ) {
	            console.log("right" + config['server']);
	            }
	};
	
	this.up = function() {
		this.camera.up(this.buildBaseURL(), this.buildAuthQS());	
		if( console && console.log ) {
	            console.log("up" + config['server']);
	            }
	};
	
	this.down = function() {
		this.camera.down(this.buildBaseURL(), this.buildAuthQS());
		if( console && console.log ) {
	            console.log("down" + config['server']);
	            }
	};
	
	
	this.up_left = function() {
		this.camera.up_left(this.buildBaseURL(), this.buildAuthQS());
		if( console && console.log ) {
	            console.log("up_left:" + config['server']);
	            }
	};


	this.up_right = function() {
		this.camera.up_right(this.buildBaseURL(), this.buildAuthQS());
		if( console && console.log ) {
	            console.log("up_right" + config['server']);
	            }
	};
	
	this.down_left = function() {
		this.camera.down_left(this.buildBaseURL(), this.buildAuthQS());
		if( console && console.log ) {
	            console.log("down_left" + config['server']);
	            }
	};
	
	this.down_right = function() {
		this.camera.down_right(this.buildBaseURL(), this.buildAuthQS());
		if( console && console.log ) {
	            console.log("down_right" + config['server']);
	            }
	};

	
	this.stop =  function() {
		this.camera.stop(this.buildBaseURL(), this.buildAuthQS());
		if( console && console.log ) {
	            console.log("stop" + config['server']);
	            }
	};

	this.center =  function() {
		this.camera.center(this.buildBaseURL(), this.buildAuthQS());
	};
	
	
	this.ir_on =  function() {
		this.camera.ir_on(this.buildBaseURL(), this.buildAuthQS());
		if( console && console.log ) {
	            console.log("ir_on" + config['server']);
	            }
	};
	
	this.ir_off =  function() {
		this.camera.ir_off(this.buildBaseURL(), this.buildAuthQS());
		if( console && console.log ) {
	            console.log("ir_off" + config['server']);
	            }
	};
	
	this.goto_preset =  function(preset) {
		this.camera.goto_preset(this.buildBaseURL(), this.buildAuthQS(), preset);
		if( console && console.log ) {
	            console.log("ir_off" + config['server']);
	            }
	};
	
	this.buildBaseURL = function() {
		return "http://" + config['server'] + "/";
		}
	
	this.buildAuthQS = function() {
		return "&user=" + config['user'] + "&" + "pwd=" + config['password'];
		}

}



