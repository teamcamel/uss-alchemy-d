import scoreQuestions from '../results-calculate/score-answers.js';
import evaluateScorecard from '../results-calculate/scorecard.js';

function quizResult(answers) {
    const scorecard = { redshirt: 0, engineer: 0, captain: 0, doctor: 0 };
    scoreQuestions(answers.quiz, scorecard);
    const result = evaluateScorecard(scorecard);

    return result;
}

export default quizResult;