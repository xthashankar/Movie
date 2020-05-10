navigator.mediaDevices.getUserMedia({
   audio:true,
   video:{
     width:{min:1024,ideal:180,max:1920},
     height:{min:576,ideal:720,max:1080}
   }
   
})
.then(stream=>{
  document.getElementById('cam').srcObject=stream;
}),
function(error)
{
  //error
}