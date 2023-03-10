client.verify.services(service.sid).verificationChecks.create({
    to: '+1234567890',
    code: '123456',
  })
  .then(check => console.log(check.status))
  .catch(error => console.error(error));
  