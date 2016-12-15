'use strict';
const fs = require('fs');
const path = require('path');
module.exports = {
	items:[
		{
			name:'css',
			type:'dir',
			items:[]
		},
		{
			name:'img',
			type:'dir'
		},
		{
			name:'js',
			type:'dir'
		},
		{
			name:'index.html',
			type:'file',
			content: fs.readFileSync(path.join(__dirname,'index.html'))
		}
	]
};