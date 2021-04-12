// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1;
// let yyyy = today.getFullYear();

// today = yyyy + '-' + mm + '-' + dd;
// console.log(today);
// document.getElementById('pop-date').setAttribute('min', today);
// document.getElementById('permanent-date').setAttribute('min', today);

// const popDate = document.getElementById('pop-date');
// console.log(popDate.attributes);

function TDate() {
  var UserDate = document.getElementById("permanent-date").value;
  var ToDate = new Date();

  if (new Date(UserDate).getTime() <= ToDate.getTime()) {
        alert("The Date must be Bigger or Equal to today date");
        return false;
   }
  return true;
}
