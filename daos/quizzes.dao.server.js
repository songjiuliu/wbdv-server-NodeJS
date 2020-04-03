const quizzesModel = require('../models/quizzes/quizzes.models.server')

const findAllQuizzes = () =>
    quizzesModel.find()
        .populate('questions')
const findQuizById = (qid) => quizzesModel.findById(qid)
const createQuiz = (quiz) => quizzesModel.create(quiz)

module.exports = {
    findAllQuizzes, findQuizById, createQuiz
}