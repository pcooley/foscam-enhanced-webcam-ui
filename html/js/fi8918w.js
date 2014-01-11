function FI8918W () {

	this.URLCONST = "decoder_control.cgi?command=";
	this.STOPDELAY = 1000;
	
	this.left = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "6");
		this.afterCommandRequest(baseURL, queryString);
	};

	this.right = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "4");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	this.up = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "0");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	this.down = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "2");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	
	this.up_left = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "91");
		this.afterCommandRequest(baseURL, queryString);
	};


	this.up_right = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "90");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	this.down_left = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "93");
		this.afterCommandRequest(baseURL, queryString);
	};
	
	this.down_right = function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "92");
		this.afterCommandRequest(baseURL, queryString);
	};

	
	this.stop =  function(baseURL,queryString) {
		this.makeAjaxRequest(baseURL, queryString, "1");

	};
	
	this.center = function(baseURL,queryString) {
		this.makeAjaxRequest(baseURL, queryString, "25");

	};
	
	this.afterCommandRequest = function(baseURL, queryString) {
		setTimeout($.proxy(this.stop, this, baseURL, queryString), this.STOPDELAY);
	}
	
	this.ir_on =  function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "95");
	};
	
	this.ir_off =  function(baseURL, queryString) {
		this.makeAjaxRequest(baseURL, queryString, "94");
	};

	this.makeAjaxRequest = function(baseURL, queryString, commandNum) {
		$.ajax({
			url: baseURL + this.URLCONST + commandNum + queryString,	
		});
	};
	
}

function nullDelay() {}
