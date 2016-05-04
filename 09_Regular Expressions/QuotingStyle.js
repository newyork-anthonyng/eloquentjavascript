var text = "'I'm the cook,' he said, 'it's my job.'";
//var regex = /(\W)'|^'|'(\W)|$'/g;
var regex = /(^|\W)'|'($|\W)/g;

console.log(text.replace(regex, '$1"$2') === "\"I'm the cook,\" he said, \"it's my job.\"");
