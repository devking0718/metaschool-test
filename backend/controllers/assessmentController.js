const db = require("../models");
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const Assessment = db.assessment;

module.exports = {
    async createAssessment(req, res) {
        try {
            const { title, description } = req.body;

            if (title === "" || description === "") {
                return res.status(500).json({ message: `Please input assessment informations`, status: 'Please input assessment informations' });
            }

            const newAssessment = {
                title: title,
                description: description,
            };

            await Assessment.create(newAssessment);

            res.status(200).json({ message: 'Accessment Created!' });
        } catch (error) {
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },
    async getAllAssessment(req, res) {
        try {

            const assessment = await Assessment.findAll();

            res.status(200).json({ message: 'All assessment list', data: assessment });
        } catch (error) {
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },
    async getAssessment(req, res) {
        try {
            const { id } = req.params;
            const assessment = await Assessment.findOne({
                where: {
                    id: id
                }
            });

            res.status(200).json({ message: 'assessment data', data: assessment });
        } catch (error) {
            res.status(500).json({ error: 'Error', 'Server Error:': error });
        }
    },
}