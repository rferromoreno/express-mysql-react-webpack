const router = require('express').Router()
const ctrl = require('./controller')

router.get('/all', (req, res) => {
	ctrl.all().then((users) => {
		res.status(200).json(users)
	}, (err) => res.status(400).json(err))
})

router.get('/id/:_id', (req, res) => {
	ctrl.findById(req.params._id).then((users) => {
		res.status(200).json(users)
	}, (err) => res.status(400).json(err))
})

router.post('/', (req, res) => {
	// Example: curl -H 'Content-Type: application/json' --data '{"name":"User 02","age":98}' http://localhost:8080/api/user
	ctrl.create(req.body).then((users) => {
		res.status(200).json(users)
	}, (err) => res.status(400).json(err))
})

module.exports = router
