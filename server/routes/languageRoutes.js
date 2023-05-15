const LanguageController = require('../controllers/languageController');

module.exports = app => {
    app.get('/api/allLanguages', LanguageController.findAllLanguages);
    app.post('/api/newLanguage', LanguageController.createLanguage);
    app.get('/api/oneLanguage/:id', LanguageController.findOneLanguage);
    app.put('/api/updateLanguage/:id', LanguageController.updateLanguage);
    app.delete('/api/deleteLanguage/:id', LanguageController.deleteLanguage);
}