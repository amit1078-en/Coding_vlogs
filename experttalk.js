function check()
{
  var s1 = document.getElementById("mail").value;
  var s2 = document.getElementById("name").value;
  var s3   = document.getElementById("msg").value;
  var s4   = document.getElementById("phone").value;
  if(s1!="" && s2!="" && s3!="" && s4!=""){
    sendMail();
  }
  else if(s1=="")
  {
    alert("Please Fill The Email Correctly");
  }
  else if(s2=="")
  {
    alert("Please Fill The Name Correctly");
  }
  else if(s3=="")
  {
    alert("Please Fill The Query Correctly");
  }
  else if(s4=="")
  {
    alert("Please Fill The Phone number Correctly");
  }
}


function sendMail(params){
  var temParams = {
      name:  document.getElementById("name").value,
      ph : document.getElementById("phone").value,
      email:document.getElementById("mail").value,
      message : document.getElementById("msg").value
  };

  emailjs.send('service_9c7348d','template_nwjhdze',temParams)
  .then(function(res){
      alert("Mail sended successfully")
      console.log("sucess",res.status);
  })  
}