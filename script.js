//your JS code here. If required.
const statusParagraph = document.getElementById('status');
const enterButton = document.getElementById('enterBtn');

enterButton.addEventListener('click', function() {
	// Change the text to "Entered Metaverse" enclosed in an <h1> tag
	statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
});