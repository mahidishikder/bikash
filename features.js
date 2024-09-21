
document.getElementById('btn-add').addEventListener('click',function(){
  document.getElementById('add-form').classList.remove('hidden')
  document.getElementById('out-form').classList.add('hidden')

})  

document.getElementById('btn-out').addEventListener('click',function(){
  document.getElementById('add-form').classList.add('hidden')
  
  document.getElementById('out-form').classList.remove('hidden')
})