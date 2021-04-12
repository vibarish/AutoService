const formAppear = () => {
  addPopUpForm.classList.toggle('visible');
  toggleBackdrop();
}

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const formInputHandler = (inputForm) => {
  const carName = inputForm[0].value;
  const phoneNumber = inputForm[1].value;
  const date = inputForm[2].value;
  
  if (
    carName.trim() === "" ||
    phoneNumber === "" ||
    isNaN(phoneNumber) ||
    date === ""
  ) {
    alert("Вы ввели некорректные данные!");
    return;
  }

  const newRequest = {
    car: carName,
    phone: phoneNumber,
    when: date 
  }
  request.push(newRequest);
  alert('Вы записаны!');
  console.log(request);
  if (inputForm === inputPopUpForm) {
    formAppear();
    clearMovieInput(userInputsPop);
  }
  clearMovieInput(userInputsPermanent);
}

const backdropClickHandler = () => {
  formAppear();
  backdrop.classList.remove('visible');
}

const clearMovieInput = (input) => {
  for (const usrInput of input) {
    usrInput.value = '';
  }
};

backdrop.addEventListener('click', backdropClickHandler);
getCall.addEventListener('click', formAppear);
popUpBooking.addEventListener('click', formInputHandler.bind(this, inputPopUpForm));
permanentBooking.addEventListener('click',formInputHandler.bind(this, inputPermanentForm));
getPrice.addEventListener('click', () => alert('Очень дорого!'));
masterCall.addEventListener('click', () => alert('Наш мастер обязательно Вам перезвонит!'));
knowPrice.addEventListener('click', () => alert('Мы отправили Вам стоимость запчасти'));