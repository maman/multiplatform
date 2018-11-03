const process = require('process');
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const config = {
	presets: ['flow'],
	env: {
		development: {
			plugins: [[`${cwd}/babel/babel-multiplatform.js`, {platform: 'rn'}]],
			presets: ['react-native']
		},
		production: {
			plugins: [[`${cwd}/babel/babel-multiplatform.js`, {platform: 'rn'}]],
			presets: ["react-native"]
		},
		"web:development": {
			plugins: [[`${cwd}/babel/babel-multiplatform.js`, {platform: 'web'}]],
			presets: ['react']
		},
		"web:production": {
			plugins: [[`${cwd}/babel/babel-multiplatform.js`, {platform: 'web'}]],
			presets: ['react']
		},
	}
}

fs.writeFileSync(path.join(cwd, '.babelrc'), JSON.stringify(config, null, 2), {encoding: 'utf-8'});