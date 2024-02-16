function askBall() {
    oldAnswer = newAnswer;
    while (oldAnswer == newAnswer) {
        rng = Math.floor(Math.random() * advice.length);
        newAnswer = rng;
    };
    updateView();
}
