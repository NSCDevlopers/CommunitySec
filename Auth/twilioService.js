const twilio = require('twilio');

const accountSid = 'YOUR_ACCOUNT_SID';
const authToken = 'YOUR_AUTH_TOKEN';
const client = new twilio(accountSid, authToken);

client.verify.services
  .create({
    friendlyName: 'OTP Auth',
    codeLength: 6,
    timeout: 600,
  })
  .then(service => {
    // Initiate verification request
    return client.verify.services(service.sid).verifications.create({
      to: '+1234567890',
      channel: 'sms',
    });
  })
  .then(verification => console.log(verification.sid))
  .catch(error => console.error(error));
