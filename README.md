
# A custom UI for the foscam cameras

Motivatation:
* I receiving a Foscam camera as a gift 
* reviewing the skin and capabilities of the built-in UI and it doesn't allow me to use this camera online publicly the way I want
* The existing skin is out-dated

* Objectives
 * More modern, hipper looking UI (rounded corners and all the rest)
 * Eliminate the need for a user/operator password to access UI

* Installation
 * Check out this HTML/JS on your webserver
 * For the foscam - 8918w you need an operater role user
  * in the default checkout this is user/user
 * edit the constants.js
  * Update the IP address (dns) of the webcamera
  * Update the user/pass
  * Update the navbar title

* Known issue
 * The AJAX requests aren't really cross-domain safe.  It works but the server response is truncated.  Oh well.
            Console errors like:
            XMLHttpRequest cannot load http://*.*.*.*/decoder_control.cgi?command=95&user=user&pwd=user. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1' is therefore not allowed access.   

# TODO list
* DONE - github - basic directory structure 
* DONE - develop base HTML page
* DONE - create a constants.js (user/pwd/url ...)
* DONE - sketch UI
* DONE - develop camera interface (js)
* DONE - implement a Foscam Fl8918W implementation of the camera interface
* Iterate over the UI.  Over and Over.


