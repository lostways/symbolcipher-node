//converts symbols to ascii
module.exports = {
	conversion_table: {"A":"å","B":"∫","C":"ç","D":"∂","E":"´","F":"ƒ","G":"©","H":"˙","I":"ˆ","J":"∆","K":"˚","L":"¬","M":"µ","N":"˜","O":"ø","P":"π","Q":"œ","R":"®","S":"ß","T":"†","U":"¨","V":"√","W":"∑","X":"≈","Y":"¥","Z":"Ω","1":"¡","2":"™","3":"£","4":"¢","5":"∞","6":"§","7":"¶","8":"•","9":"ª","0":"º","`":"`","-":"–","=":"≠","[":"“","]":"‘","\\":"«","/":"÷",";":"…","'":"æ",",":"≤",".":"≥"," ":" ",":":"Ú","?":"¿"},

	encipher: function (pt) {
		var ct = "";
		for ( i = 0; i < pt.length; i++) {
			var match = pt.charAt(i).toUpperCase();
			if(typeof this.conversion_table[match] !== 'undefined') {
				ct += this.conversion_table[match];
			} else {
				ct += pt.charAt(i);
			}
		}
		return ct;
	},

	decipher: function(ct) {
		var pt = "";
		for ( i = 0; i < ct.length; i++ ) {
			for (key in this.conversion_table) {
				if (this.conversion_table[key] === ct.charAt(i)) {
					pt += key;
				}
			}
		}
		return pt;
	}
};
