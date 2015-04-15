// ==============
// Encode URL 
// ==============
// Source: http://webapps.stackexchange.com/questions/66827/how-do-i-convert-a-cell-to-rfc-3986-standard-urlencoded-in-google-spreadsheets
// Yes, you can create a custom function for that.
// Click Tools → Script Editor. Select Create blank project.
// In the script editor window, paste the following code:

function encode(value) {
  return encodeURIComponent(value);
}
