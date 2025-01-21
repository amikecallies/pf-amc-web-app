// Fetch the Data and call this event from the Contact page: TODO for P163 Servant

function SubmitEmail(userName, userEmail, userSubject, userMessage) {

  //'use strict';
  
  var aws = require('aws-sdk');

  const environment = process.env;

  console.log(environment);
  
  // Provide the full path to your config.json file. 
  //aws.config.loadFromPath('../config.json');
  // Initialize the Amazon Cognito credentials provider
  aws.config.region = 'us-west-2'; // Region
  aws.config.credentials = new aws.CognitoIdentityCredentials({
      IdentityPoolId: 'us-west-2:5fbc0fc2-75c8-4cc2-a6fd-5b4c74a62d6e',
});  
  
  // Replace sender@example.com with your "From" address.
  // This address must be verified with Amazon SES.
  const sender = "amcallies2018@gmail.com";
  
  // Replace recipient@example.com with a "To" address. If your account 
  // is still in the sandbox, this address must be verified.
  const recipient = "amcallies2018@gmail.com";
  
  // Specify a configuration set. If you do not want to use a configuration
  // set, comment the following variable, and the 
  // ConfigurationSetName : configuration_set argument below.
  //const configuration_set = "ConfigSet";
  
  // The subject line for the email.
  const subject = "New message from a user at adriancallies.com!";
  
  // The email body for recipients with non-HTML email clients.
  const body_text = userName + ' from ' + userEmail + ' has sent the following message below: ' + userMessage;
              
  // The HTML body of the email.
  const body_html = `<html>
  <body>
    <h1>Adrian! Someone has reached out to you from your website!</h1>
  </body>
  <br>
  </html>`;
  
  // The character encoding for the email.
  const charset = "UTF-8";
  
  // Create a new SES object. 
  var ses = new aws.SES();
  
  // Specify the parameters to pass to the API.
  var params = { 
    Source: sender, 
    Destination: { 
      ToAddresses: [
        recipient 
      ],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset
      },
      Body: {
        Text: {
          Data: body_text,
          Charset: charset 
        },
        Html: {
          Data: body_html + body_text,
          Charset: charset
        }
      }
    },
    //ConfigurationSetName: configuration_set
  };
  
  //Try to send the email.
  ses.sendEmail(params, function(err, data) {
    // If something goes wrong, print an error message.
    if(err) {
      //alert(err.message);
      console.log(err.message);
    } else {
      //alert("Succes!");
      console.log("Email sent! Message ID: ", data.MessageId);
    }
  });  
    

}
export default SubmitEmail;
