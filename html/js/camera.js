function Camera (
    Config, CamImpl
) {
	this.isIE = document.all&&navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&!navigator.userAgent.toLowerCase().indexOf("opera")!=-1;
	this.config = Config;
	this.camera = CamImpl;

	this.setPageTitle = function() {
		$("#navtitle").text(	this.config["navtitle"]);
	};
	
	this.setVideoStream = function(id) {
		if (this.isIE) {
			srcString = this.buildBaseURL() + this.camera.getSnapshotEndPoint() + this.buildAuthQS();		
			} else {
			srcString = this.buildBaseURL() + this.camera.getVideoStreamEndPoint() + this.buildAuthQS();
		}
		videoStreamEle = $(id);
		videoStreamEle.attr(
			'src',
			 srcString
			);
		};

	this.left = function() {
		this.camera.left(this.buildBaseURL(), this.buildAuthQS());
	};

	this.right = function() {
		this.camera.right(this.buildBaseURL(), this.buildAuthQS());	
	};
	
	this.up = function() {
		this.camera.up(this.buildBaseURL(), this.buildAuthQS());	
	};
	
	this.down = function() {
		this.camera.down(this.buildBaseURL(), this.buildAuthQS());
	};
	
	
	this.up_left = function() {
		this.camera.up_left(this.buildBaseURL(), this.buildAuthQS());
	};

	this.up_right = function() {
		this.camera.up_right(this.buildBaseURL(), this.buildAuthQS());
	};
	
	this.down_left = function() {
		this.camera.down_left(this.buildBaseURL(), this.buildAuthQS());
	};
	
	this.down_right = function() {
		this.camera.down_right(this.buildBaseURL(), this.buildAuthQS());
	};
	
	this.stop =  function() {
		this.camera.stop(this.buildBaseURL(), this.buildAuthQS());
	};

	this.center =  function() {
		this.camera.center(this.buildBaseURL(), this.buildAuthQS());
	};
	
	this.ir_on =  function() {
		this.camera.ir_on(this.buildBaseURL(), this.buildAuthQS());
	};
	
	this.ir_off =  function() {
		this.camera.ir_off(this.buildBaseURL(), this.buildAuthQS());
	};
	
	this.goto_preset =  function(preset) {
		this.camera.goto_preset(this.buildBaseURL(), this.buildAuthQS(), preset);
	};
	
	this.buildBaseURL = function() {
		return "http://" + config['server'] + "/";
		}
	
	this.buildAuthQS = function() {
		return "&user=" + config['user'] + "&" + "pwd=" + config['password'];
		}

}



