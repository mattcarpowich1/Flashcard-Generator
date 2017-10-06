// ClozeCard constructor
function ClozeCard(text, cloze) {

	// Log an error if the text does not contain cloze
	if (!(text.includes(cloze))) {
		console.log("ERROR: Text of card must contain cloze text.");
		return false;
	}

	// If constructor is called without new, 
	// return a new instance of ClozeCard
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}

	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
	
}

module.exports = ClozeCard;