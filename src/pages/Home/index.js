import React from 'react';
import {Route} from 'react-router-dom';
import {TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined} from '@ant-design/icons';
import {Button, Input} from 'antd';

//import {Message} from '../../components';
//import {Dialogs} from '../../components';
import {Status} from '../../components';
import {ChatInput} from '../../components';
import {Dialogs} from '../../containers';
import {Messages} from '../../containers';
//import {Messages} from '../../components';

import './Home.scss';
import '../../styles/layouts/_chat.scss';

const { Search } = Input;

const Home = () => {
console.log(false == 0);
  return  (
      <section className = "home">
        <div className="chat">
            <div className="chat__sidebar">

                <div className="chat__sidebar-header">
                  <div>
                    <Button shape = 'circle' type = 'link'>  <TeamOutlined className= 'chat__icon chat__icon-team'/></Button>

                    <span>Список диалогов</span>
                  </div>
                    <Button shape = 'circle' type = 'link'><FormOutlined className= 'chat__icon chat__icon-edit' /></Button>

                </div>



                <div className="chat__sidebar-dialogs">
                   <Dialogs userId = {0}/>
                </div>

            </div>


            <div className="chat__dialog">
                <div className="chat__dialog-header">
                  <div/>
                  <div className="chat__dialog-header-center">
                        <b className="chat__dialog-header-username">Ann</b>
                        <div className="chat__dialog-header-status">
                          {/*<div className="status status--online">online</div>*/}
                          <Status online/>
                        </div>
                  </div>
                    <Button shape = 'circle' type = 'link'><EllipsisOutlined className= 'chat__icon chat__icon-ellips'/></Button>

                </div>
                <div className="chat__dialog-messages">

                    <Messages/>

                </div>

                  <div className="chat__dialog-input">
                      <ChatInput/>
                  </div>

            </div>

        </div>

      </section>
    );
}

export default Home;



// items = {[
//   {
//     _id: Math.random(),
//     text:
//           'Братишка! Я тебе покушать принесла! Пахомлучший на свете экстраенс',
//     created_at: "Thu Mar 15 2019 13:10:00",
//     user: {
//         _id: '4722574858',
//         userName: 'Annushka',
//         avatar: 'https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1'
//       }
//
//   },
//
//   {
//     _id: Math.random(),
//     text:
//           'Скоро приду на чай!',
//     created_at: "Wed Jun 23 2021 15:22:37",
//     user: {
//         _id: '8683386',
//         userName: 'Елизавета II',
//         avatar: 'https://n1s2.starhit.ru/bc/94/11/bc9411b66e0a3f22856436c72194a967/444x460_0_019c3f6ae66820c5085844944848406d@480x497_0xc0a8399a_11960572051483298419.jpeg'
//       }
//
//   },
//
//   {
//     _id: '2vd202c962b3253040878b5853000dc0e9',
//     text:
//           '7 дней',
//     created_at: "Tue Jan 12 2021 12:10:00",
//     user: {
//         _id: '87876836869257',
//         userName: 'Анонимус',
//         avatar: null,
//         isOnline: true
//       }
//
//   },
//
//   {
//     _id: Math.random(),
//     text:
//           'Здарова! Пройди тест по ссылке плиз',
//     created_at: "Wed Jun 23 2021 14:22:37",
//     user: {
//         _id: '5s45352462757572',
//         userName: 'Алан Тьюринг',
//         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5P3h1_JXLJSG5J8FfjQcwcS76lKuIqRNxQ&usqp=CAU',
//         isOnline: true
//       }
//
//   },
//
//   {
//     _id: Math.random(),
//     text:
//           'Я дурачек ляляля',
//     created_at: "Wed Jun 23 2021 16:22:37",
//     user: {
//         _id: '58993657675',
//         userName: 'Руслан Алтынбаев',
//         avatar: 'https://sun9-4.userapi.com/impf/V8r1HQ765ojSZHb1_Pp4Fijw2EQEFAd5xwXQuw/ielQ4ZDvyf0.jpg?size=1280x853&quality=96&sign=6ea05be6580e88acc650b48ff1b1e488&type=album',
//          isOnline: true
//       }
//
//   },
//
//   {
//     _id: "60d44b3c3ed259a6a45dffb6",
//     text: "Deserunt proident ad adipisicing commodo excepteur enim amet. Et eiusmod magna nulla qui. Ad dolor est culpa fugiat laboris.",
//     created_at: "Fri Jul 06 1973 20:23:42 GMT+0300 (Москва, стандартное время)",
//     user: {
//       _id: "35s60d44b3c5b81e5e9093a4eb1",
//       userName: "Lottie Salazar",
//       avatar: null
//     }
//   },
//
//   {
//     _id: "7bs8260d44be2fc22b8c9436f3e4e",
//     text: "Magna dolore culpa esse enim cillum labore aute. Id ad voluptate cillum proident eiusmod et dolor mollit et. Minim magna do elit non ut nisi.",
//     created_at: "Tue Jan 28 1986 17:24:02 GMT+0300 (Москва, стандартное время)",
//     user: {
//       _id: "h60d44be24980fac38b670532",
//       userName: "Rosalyn Bradley",
//       avatar: null
//     }
//   },
//
//   {
//     _id: "45r760d44c904d3fb3f1ac35ba34",
//     text: "Voluptate tempor deserunt occaecat aliqua sint officia nisi nostrud laborum. Non quis enim proident proident culpa nisi consectetur. Qui in nostrud non occaecat consectetur ea magna quis eu qui.",
//     created_at: "Thu May 27 1982 02:58:58 GMT+0400 (Москва, летнее время)",
//     user: {
//       _id: "6y0d44c903e797e1d479be0cd",
//       userName: "Rogers Hebert",
//       avatar: null
//     }
//   },
//
//   {
//     _id: "61160d44cbd0b0910e172d434c8",
//     text: "Mollit pariatur consectetur minim aliqua consectetur. Nisi quis ut id Lorem duis. Nulla anim occaecat laborum sunt sunt non ipsum commodo minim.",
//     created_at: "Wed Nov 06 2002 04:43:07 GMT+0300 (Москва, стандартное время)",
//     user: {
//       _id: "6wb0d44cbdd723a2931a8e86f0",
//       userName: "Shawna Delacruz",
//       avatar: null
//     }
//   },
//
//   {
//     _id: "76763760d44cce555855b7dc835920",
//     text: "Lorem occaecat amet Lorem consequat do. Tempor occaecat ad minim consectetur ex deserunt ea commodo incididunt commodo occaecat anim aliquip. Sit sit et velit id dolore velit Lorem aliqua sunt duis.",
//     created_at: "Thu Sep 14 1989 03:02:18 GMT+0400 (Москва, летнее время)",
//     user: {
//       _id: "930d44cce0ac88c1378cfbb77",
//       userName: "Gallagher Rose",
//       avatar: null
//     }
//   },
//
//   {
//     _id: "462760d44cce555855b7dc835920",
//     text: "Lorem occaecat amet Lorem consequat do. Tempor occaecat ad minim consectetur ex deserunt ea commodo incididunt commodo occaecat anim aliquip. Sit sit et velit id dolore velit Lorem aliqua sunt duis.",
//     created_at: "Thu Sep 14 2020 03:02:18 GMT+0400 (Москва, летнее время)",
//     user: {
//       _id: "3fg1sd32d44cce0ac88c1378cfbb77",
//       userName: "Ferfgtjtr qervd",
//       avatar: null
//     }
//   },
//
//   {
//     _id: "423760d44cce555855b7dc835920",
//     text: "Lorem occaecat amet Lorem consequat do. Tempor occaecat ad minim consectetur ex deserunt ea commodo incididunt commodo occaecat anim aliquip. Sit sit et velit id dolore velit Lorem aliqua sunt duis.",
//     created_at: "Thu Sep 19 1997 03:02:18 GMT+0400 (Москва, летнее время)",
//     user: {
//       _id: "43ddq30d44cce0ac88c1378cfbb77",
//       userName: "Erroeqdg Rose",
//       avatar: null
//     }
//   },
//
//
//   {
//     _id: "73760d44cce555855b7dc835920",
//     text: "Lorem occaecat amet Lorem consequat do. Tempor occaecat ad minim consectetur ex deserunt ea commodo incididunt commodo occaecat anim aliquip. Sit sit et velit id dolore velit Lorem aliqua sunt duis.",
//     created_at: "Thu Sep 14 1989 03:02:18 GMT+0400 (Москва, летнее время)",
//     user: {
//       _id: "dh3230d44cce0ac88c1378cfbb77",
//       userName: "Sagrhllagher Rose",
//       avatar: null
//     }
//   }
//
// ]
