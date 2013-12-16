
module.exports = {
  task: function() {
    return {
	    options: {
      	mode: 0700,
	    },
	    tmp: {
		    options: {
	        create: ['.tmp']	    		
	    	}
	    }
    };
  }
};
