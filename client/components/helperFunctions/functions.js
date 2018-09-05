function getCurrentWeather(zip) {
  let newZip = zip.target.querySelector('input').value
  console.log(newZip)

  fetch('http://api.openweathermap.org/data/2.5/weather?zip='+newZip+',us&units=imperial&APPID=5b0d33ceb5861a1710e8e05f47b39bfd',
    {
      method: "GET",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
      },
      redirect: "follow",
      referrer: "no-referrer"
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data)
    })
}



// function addToDoList(input, state) {
//     let newVal = input.target.querySelector('input').value
//     // fetch('/add-list-item',
//     // {
//     //   method: "POST",
//     //   mode: "cors",
//     //   headers: {
//     //     'Accept': 'application/json',
//     //       "Content-Type": "application/json; charset=utf-8",
//     //   },
//     //   redirect: "follow",
//     //   referrer: "no-referrer",
//     //   body: JSON.stringify({'item': newVal})
//     // })
//   var div = document.createElement('div');
//   div.innerHTML = newVal;
//   document.getElementById('append-list-items').appendChild(div);
//   state.savedToDoList.push(newVal)
// }



module.exports = {
  // addToDoList,
  getCurrentWeather
}