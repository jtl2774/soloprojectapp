const Language = require('../models/languageModels');


module.exports = {
    findAllLanguages: (req, res) => {
        Language.find()
            .then((allLanguages) => {
                res.status(200).json(allLanguages)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    createLanguage: (req, res) => {
        Language.create(req.body)
            .then((newLanguage) => {
                res.status(200).json(newLanguage)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    findOneLanguage: (req, res) => {
        Language.findOne({_id: req.params.id})
            .then((oneLanguage) => {
                res.status(200).json(oneLanguage)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    updateLanguage: (req, res) => {
        Language.findOneAndUpdate(        
            {_id: req.params.id}, 
            req.body, 
            {new:true, runValidators:true})
            .then((updatedLanguage) => {
                res.status(200).json(updatedLanguage)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }, 
    deleteLanguage: (req, res) => {
        Language.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }
}