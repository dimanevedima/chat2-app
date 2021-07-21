import React, { Component } from 'react';
import { Form, Input, Button as BaseButton, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import { Link, Route} from 'react-router-dom';

import { Button, Block } from '../../../components';
import {validateField} from '../../../utils';

const RegisterForm = props => {
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
  //console.log(values);
    const success = false;
    return (
      <>
        <Block>
          <div className="auth__top">
                <h2>Регистрация</h2>
                <p className = "auth__p">Для входа в чат вам нужно зарегистрироваться</p>
          </div>


          {!success ? (
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

                              validateStatus = {
                                !touched.userName ? '' : errors.userName ? 'error' : 'success'}
                              help = {!touched.userName ? null : errors.userName}
                              style = {{textAlign : "left"}}
                              hasFeedback>
                                                    <Input
                                                        id = 'userName'
                                                        size = 'large'
                                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                                        placeholder="Username"
                                                        value = {values.userName}
                                                        onChange = {handleChange}
                                                        onBlur = {handleBlur} />
                        </Form.Item>



                  <Form.Item
                    validateStatus = {
                    !touched.password ? '' : errors.password ? 'error' : 'success'}
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
                              <Input
                                size = 'large'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Repeat Password"
                              />
                  </Form.Item>

                  <Form.Item>
                          <Button
                            type="primary"
                            size = 'large'
                            onClick = {handleSubmit} >
                            Зарегистрироваться
                          </Button>
                  </Form.Item>

                  <Link className = "auth__link" to="/login">Войти в аккаунт</Link>


        </Form>

          ) : (

            <div className = "auth__success">
              <InfoCircleTwoTone className = "auth__icon"/>
              <h3>Подтвердите аккаунт</h3>
              <p className = "auth__p">На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
            </div>
          )}
      </Block>
  </>
    )

}

export default RegisterForm;
