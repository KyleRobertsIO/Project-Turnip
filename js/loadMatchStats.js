let index = sessionStorage.getItem('match-breakdown-index');
let fileCollection = JSON.parse(sessionStorage.getItem('fileCollection'));
let filePath = fileCollection[index];

console.log(fileCollection[index]);