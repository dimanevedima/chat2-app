export default ({isAuth, values, errors}) => {
  const rules = {
    email: (value) => {
      if (!value) {
         errors.email = 'Required';
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
         errors.email = 'Invalid email address';
       }
    },
    password: (value) => {
      if (!value) {
      errors.password = 'Введите пароль';
      }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(value)){
      errors.password = isAuth ? 'Неверный пароль' : 'Слишком легкий пароль';
      }
    },
    userName: (value) => {
      if(!value) {
        errors.userName = 'Введите имя';
      }
    }
  };

  Object.keys(values).forEach(
    key => rules[key] && rules[key](values[key])
  );

};


// if (!values.email) {
//    errors.email = 'Required';
//  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//    errors.email = 'Invalid email address';
//  }

// if (!values.password) {
// errors.password = 'Введите пароль';
// }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(values.password)){
// errors.password = 'Слишком легкий пароль';
// }
