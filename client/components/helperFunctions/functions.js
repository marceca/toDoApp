function addToDoList(input) {
  let newVal = input.target.querySelector('input').value
  var div = document.createElement('div');
  div.innerHTML = newVal;
  document.getElementById('append-list-items').appendChild(div);
}



module.exports = {
  addToDoList
}