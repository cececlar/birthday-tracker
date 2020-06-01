const router = require('express').Router();
let Birthday = require('../models/birthday.model');

router.route('/birthdays').get((req, res) => {
  Birthday.find()
    .then(birthdays => res.json(birthdays))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/birthdays/').post((req, res) => {
  const username = req.body.username;
  const cohort = req.body.cohort;
  const month = req.body.date;
  const date = Number(req.body.date);

  const newBirthday = new Birthday({
    username,
    cohort,
    month,
    date
  });

  newBirthday.save()
  .then(() => res.json('Birthday added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/birthdays/:id').post((req, res) => {
  Birthday.findById(req.params.id)
    .then(birthday => {
      birthday.username = req.body.username;
      birthday.cohort = req.body.cohort
      birthday.month = req.body.description;
      birthday.month = Number(req.body.duration);

      birthday.save()
        .then(() => res.json('Birthday updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/birthdays/:id').delete((req, res) => {
    Birthday.findByIdAndDelete(req.params.id)
      .then(() => res.json('Birthday deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;