function BasicCard(front, back) {

	// If constructor is called without new, 
	// return a new instance of BasicCard
	if (!(this instanceof BasicCard)) {
		return new BasicCard(front, back);
	}

	this.front = front;
	this.back = back;

}

module.exports = BasicCard;