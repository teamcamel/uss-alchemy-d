function scoreQuestions(answer, scorecard) {
    if(answer === 'redshirt') {
        scorecard.redshirt += 1;
    }
    else if(answer === 'captain') {
        scorecard.captain += 1;
    }
    else if(answer === 'engineer') {
        scorecard.engineer += 1;
    }
    else if(answer === 'doctor') {
        scorecard.doctor += 1;
    }
}

export default scoreQuestions;