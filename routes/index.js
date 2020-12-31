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
		    host: 'smtp.mailtrap.io',
		    port: 2525,
		    auth: {
		       user: '268673188a457d',
		       pass: 'ab5215b0977a5b'
		    }
		});
		const mail = {
	    from: email, // Sender address
	    to: 'to@email.com',         // List of recipients
	    subject: name, // Subject line
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
