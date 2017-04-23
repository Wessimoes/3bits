 const indexController = {
	// Route Index
	index: (req, res, next) => {
		res.render('index');
	},
	sendemail: (req, res, next) => {
		res.send('send email here');
	}
}

module.exports = indexController;