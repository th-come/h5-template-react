const uploadPath = require('./package.json').name;

module.exports = {
	accessKey: '7PxNYDcrqfcsjGVQwI7xBHJ1_jsbpzaiiJIlI30_',
	secretKey: 'SQBkKHUzEfYoHf2V_CcM_uLM9vV1IbRlRzgUoIMa',
	bucket: 'wnlother',
	bucketDomain: 'https://qiniu.other.cq-wnl.com/',
	matchFiles: ['!*.html', '!*.map', '!*.txt', '!*.json'],
	uploadPath: `/${uploadPath}/`,
	usePublicPath: true,
	batch: 10,
	deltaUpdate: true,
	createCli: 'react'
}
