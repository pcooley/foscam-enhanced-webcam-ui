function FI8918W () {

	this.left = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "decoder_control.cgi?command=6");
		this.stop(baseURL, queryString);
	};

	this.right = function() {
	};
	
	this.up = function() {
	};
	
	this.down = function() {
	};
	
	
	this.up_left = function() {
	};


	this.up_right = function() {
	};
	
	this.down_left = function() {
	};
	
	this.down_right = function() {
	};

	
	this.stop =  function(baseURL,queryString) {
		// this.makeAjaxRequest(baseURL, queryString, "decoder_control.cgi?command=6");

	};
	
	this.ir_on =  function() {
	};
	
	this.ir_off =  function() {
	};

	this.makeAjaxRequest = function(baseURL, queryString, url) {
		$.ajax({
			url: baseURL + url + queryString,	
		});
	};

}
