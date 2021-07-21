import {withFormik} from 'formik';

import RegisterForm from '../components/RegisterForm';
import validateForm from '../../../utils/validate';

export default withFormik({
// mapPropsToValues: () => ({email: 'qwqwqwqw', password: 'Qwert123!3dd'}),
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
    userName: '',
    password2: ''
  }),
  validate: values => {
    let errors = {};

    validateForm({isAuth: false, values, errors});


  //   if (!values.email) {
  //      errors.email = 'Required';
  //    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //      errors.email = 'Invalid email address';
  //    }
  //
  // if (!values.password) {
  //   errors.password = 'Введите пароль';
  // }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(values.password)){
  //   errors.password = 'Слишком легкий пароль';
  // }
  //
  // if (!values.userName) {
  //   errors.userName = 'Введите имя';
  // }
   return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  diplayName: "RegisterForm"
})(RegisterForm);
