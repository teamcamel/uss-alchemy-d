import scoreQuestions from '../results-calculate/score-answers.js';
import evaluateScorecard from '../results-calculate/scorecard.js';

function quizResult(answers) {
    const scorecard = { redshirt: 0, engineer: 0, captain: 0, doctor: 0 };
    scoreQuestions(answers.interest, scorecard);
    scoreQuestions(answers.quote, scorecard);
    scoreQuestions(answers.bestQuality, scorecard);
    scoreQuestions(answers.unknownPlanet, scorecard);
    scoreQuestions(answers.shipTime, scorecard);

    const result = evaluateScorecard(scorecard);

    return result;
}

export default quizResult;