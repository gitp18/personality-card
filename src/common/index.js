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

/**********************************************************************************************
 * @Purpose: Change the date of birth format
 * @Input: dateString: "yyyy-mm-dd"
 * @Output: "yyyy/mm/dd"
***********************************************************************************************/
const dateFormat = (dateString) => {
  if(dateString) {
    const string_after_splitting = dateString.split('-');
    return string_after_splitting.join('/');
  } else return '';
}

/**********************************************************************************************
 * @Purpose: Remove the x... string from the phone number
 * @Input: phone_number: "string"
 * @Output: "phone_number"": "string"
***********************************************************************************************/
const phoneNumberFormat = (phone_number) => {
  if(phone_number && phone_number.includes('x')) {
    const string_after_splitting = phone_number.split('x');
    return string_after_splitting[0];
  } else{
    return phone_number;
  }
}

export {getAge, dateFormat, phoneNumberFormat};
