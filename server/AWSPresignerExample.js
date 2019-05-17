const { generateGetUrl, generatePutUrl } = require('./AWSPresigner');

let Key = 'file-to-read.jpeg';
generateGetUrl(Key)
.then(getUrl=>{
  console.log('getUrl',': ', getUrl);
});

Key =  'file-to-upload.jpeg';
generatePutUrl(Key)
.then(getUrl=>{
  console.log('getUrl',': ', getUrl);
});