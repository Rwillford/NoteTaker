const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

//get all notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results)
})

//adding to notes
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note)
})


module.exports = router;