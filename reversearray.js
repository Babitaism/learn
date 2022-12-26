//  this.collectiveEdit = []
//
//function editClick(name){
//  alert("Hi "+ name)
//  }
//
//function deleteFunction(userId){
//    alert("Are you sure you want to delete")
//
//    fetch("/test", {
//              method: "POST",
//
//              // Adding body or contents to send
//                body: JSON.stringify({
//                 userId: userId
//                 }),
//                headers: {
//                "Content-type": "application/json; charset=UTF-8"
//                }
//
//             }
//
//  // Converting to JSON
//  .then(response => response.json()) //igonre this
//
//  // Displaying results to console
//  .then((json) => {
//      console.log(json)
//  });
//
//})
//}
//
//function onSelect(userId){
//let checkbox = document.getElementById("name_"+userId)
//if(checkbox.checked){
//  this.collectiveEdit.push(userId)
//}
//else{
//  this.collectiveEdit = this.collectiveEdit.filter(function(e){
//     return e != userId
//    })
//}
//console.log(this.collectiveEdit)
//}
//
//
//function deleteAll(userId){
//alert("Are you sure you want to delete ")
//console.log(this.collectiveEdit)
//
//fetch("/deleteAllIds", {
//  method: "POST",
//
//  // Adding body or contents to send
//  body: JSON.stringify({
//    userId: this.collectiveEdit
//  }),
//
//  // Adding headers to the request
//
//  headers: {
//    "Content-type": "application/json; charset=UTF-8"
//  }
//
//})
//
//// Converting to JSON
//.then(response => response.json()) //igonre this
//
//// Displaying results to console
//.then((json) => {
//    console.log(json)
//});
//
//}