
/* global Parse,console,require */

var Mailgun = require('mailgun');
Mailgun.initialize('sandbox97f57fe5c9d14f50b5c4521c43285282.mailgun.org', 'key-0723-mbxn3dxzmowc-mgthmbov4kjzn5');

Parse.Cloud.beforeSave("Email", function(request, response) {

	var text = "Email from Mahaska.com contact form\n" +
		"From: "+request.object.get("name") + "\n\n"+
		"Email: "+request.object.get("email") + "\n\n"+
    "Phone: "+request.object.get("phone") + "\n\n"+
		"Reason: "+request.object.get("reason") + "\n\n"+
		"Message:\n\n" + request.object.get("message");

	Mailgun.sendEmail({
			to: "jdenniston@mahaska.com, dluthi@mahaska.com",
			from: request.object.get("email"),
			subject: "Email For - " + request.object.get("reason"),
			text: text
		}, {
		success: function(httpResponse) {
			response.success();
		},
		error: function(httpResponse) {
			console.error(httpResponse);
			response.error("Uh oh, something went wrong");
		}
	});

});
