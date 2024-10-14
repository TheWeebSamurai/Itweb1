let password = document.getElementById('pass')
password.addEventListener('keypress', (keyboard) => {
  if(keyboard.key === "Enter") {
    submit()
  }
})

function submit() {
  let acc = document.getElementById('acc').value
  let pass = document.getElementById('pass').value
  let matchFound;



  let accArray = [{username: "admin", password: "password"}, {username: 'developer', password: "strong"}, {username: "lmao", password: 'getRekt'}]


  accArray.forEach(account => {
    if(acc === account.username && pass === account.password) {
      matchFound = true
    }
  })

  if(matchFound) {
    window.location.href = "https://google.com"

  } else {
    alert("Invalid Credentials!")
  }


}

