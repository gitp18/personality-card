/**********************************************************************************************
 * @Purpose: Calculate age for a given date of birth
 * @Input: dateString: "yyyy-mm-dd"
 * @Output: "age"": integer
***********************************************************************************************/
const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = parseInt(today.getFullYear(), 10) - parseInt(birthDate.getFullYear(), 10);
  var m = parseInt(today.getMonth(), 10) - parseInt(birthDate.getMonth(), 10);
  if (m < 0 || (m === 0 && parseInt(today.getDate(), 10) < parseInt(birthDate.getDate(), 10))) {
      age--;
  }
  return age;
}
export {getAge};