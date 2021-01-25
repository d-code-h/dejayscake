const 	express 		= 	require('express'),
		nodemailer		=	require('nodemailer'),
		router 			= 	express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/', function(req, res){
	var name = req.body.name.trim(),
		email = req.body.email.trim(),
		message = req.body.message.trim();
	if ( name == "" || email == "" || message == ""){
		res.redirect('/#contact-form');
	}else{
		let transport = nodemailer.createTransport({
		    service: 'gmail',
		    auth: {
				user: process.env.EMAIL_USERNAME,
		       	pass: process.env.EMAIL_PASSWORD
		    }
		});
		const mail = {
	    from: process.env.EMAIL_USERNAME, // Sender address
	    to: process.env.EMAIL_USERNAME,         // List of recipients
	    subject: name + " - " + email, // Subject line
	    text: message // Plain text body
		};
		transport.sendMail(mail, function(err, info) {
		    if (err) {
		      console.log(err)
		    } else {
		      console.log(info);
		    }
		});
		res.redirect('/');
	}
});

module.exports = router;
