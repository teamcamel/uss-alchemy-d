function evaluateScorecard(scorecard) {
    const engineer = scorecard.engineer;
    const captain = scorecard.captain;
    const doctor = scorecard.doctor;
    const redShirt = scorecard.redshirt;

    if(engineer > captain
        && engineer > doctor
        && engineer >= redShirt) {
        return 'Engineer';
    }
    else if(captain >= doctor
        && captain >= engineer
        && captain >= redShirt) {
        return 'Captain';
    }
    else if(doctor >= engineer
        && doctor >= captain
        && doctor > redShirt) {
        return 'Doctor';
    } else {
        return 'Red Shirt';
    }
}

export default evaluateScorecard;