let cardContainer = document.getElementById("cardContainer")
let url = "https://kontests.net/api/v1/all";
let response = fetch(url)
let ihtml = ""
response.then((v)=>{
  return v.json()
}).then((contests)=>{
  console.log(contests)
  for(item in contests){
    console.log(contests[item])
    ihtml += ` <div class="card mx-2 my-2 zoom" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXWk3bczHjFJ9wsTXrFFmlKeREeccjC7OTSEeFJPj7A&s" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${contests[item].name}</h5>
    <p class="card-text">Status: ${contests[item].status}</p>
    <p class="card-text">Site: ${contests[item].site}</p>
    <p class="card-text">In 24 Hours?: ${contests[item].in_24_hours}</p>
    <p>Start at: ${contests[item].start_time}</p>
    <p>end at: ${contests[item].end_time}</p>
    <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
  </div>
</div>`
  }
cardContainer.innerHTML = ihtml
})
