function evaluateScorecard(scorecard) {
    const engineer = scorecard.engineer;
    const captain = scorecard.captain;
    const doctor = scorecard.doctor;
    const redShirt = scorecard.redshirt;

    if(engineer > captain
        && engineer > doctor
        && engineer > redShirt) {
        return 'engineer';
    }
    else if(captain > doctor
        && captain > engineer
        && captain > redShirt) {
        return 'captain';
    }
    else if(doctor > engineer
        && doctor > captain
        && doctor > redShirt) {
        return 'doctor';
    }
    else if(redShirt > engineer
        && redShirt > doctor
        && redShirt > captain) {
        return 'redshirt';
    }
}

export default evaluateScorecard;