import React from 'react';
import { Form, Input, Button as BaseButton, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Button, Block } from '../../../components';
import {validateField} from '../../../utils';

// const validate = (key, touched, errors) => {
//   if (touched[key]){
//     if(errors[key]) {
//       return 'error';
//     } else {
//       return 'success';
//     }
//   } else {
//     return null;
//   }
// };

const LoginForm = props =>  {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
    isValid
  } = props;
    //const success = false;

    return (
      <>
        <Block>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста войдите в свой аккаунт</p>
                </div>

      <Form
          name="normal_login"
          className="login-form"
          onSubmit = {handleSubmit}>

                        <Form.Item

                            validateStatus = {validateField('email', touched, errors)}
                            help = {!touched.email ? null : errors.email}
                            style = {{textAlign : "left"}}
                            hasFeedback>
                                                <Input
                                                      id = "email"
                                                      size = 'large'
                                                      prefix={<MailOutlined className="site-form-item-icon" />}
                                                      placeholder="Email"
                                                      value = {values.email}
                                                      onChange = {handleChange}
                                                      onBlur = {handleBlur}
                                                      />
                        </Form.Item>

                        <Form.Item
                          
                          validateStatus = {validateField('password', touched, errors)}
                          help = {
                          !touched.password ? null : errors.password}
                          style = {{textAlign : "left"}}
                          hasFeedback>
                                                          <Input
                                                            id = 'password'
                                                            size = 'large'
                                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                                            type="password"
                                                            placeholder="Password"
                                                            value = {values.password}
                                                            onChange = {handleChange}
                                                            onBlur = {handleBlur}
                                                          />
                        </Form.Item>


                    <Form.Item>
                      <Button onClick = {handleSubmit} type="primary" size = 'large'>
                        Войти в аккаунт
                      </Button>

                    </Form.Item>

                  <Link className = "auth__link" to="/register">Зарегистрироваться</Link>

      </Form>
    </Block>
  </>
    )
};

export default LoginForm;
