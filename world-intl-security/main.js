var logo=$('#navbar');
var divBar=$('#mission-content');
var missionBtn=$('#mission-btn');
var divServices=$('#services-content');
var servicesBtn=$('#services-btn');

var form=$('#contact-form');
var formBtn=$('#form-btn');

logo.click(function(e){
e.preventDefault();
console.log('clicked on logo');

});

missionBtn.click(function(e){
  e.preventDefault();
  divBar.toggle();

});
servicesBtn.click(function(e){
  e.preventDefault();
  divServices.toggle();

});
form.submit(function(e){
  e.preventDefault();
  $.ajax({
    url:'http://fvi-grad.com:4004/fakeform',
    method:'POST',
    data:form.serialize()

  })
  .done(function(){
    formBtn.html('Message Sent!');
  })
  .fail(function(){
    formBtn.html('Error sending message');
  });
});
