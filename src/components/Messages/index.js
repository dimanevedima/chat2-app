import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin, Space } from 'antd';
import classNames from 'classnames';

import {Message} from '../';

import './Messages.scss';


const Messages = ({blockRef, isLoading, items}) => {

  return (
 <div ref = {blockRef} className={classNames("messages", {"messages--loading" : isLoading})}>
   {
     isLoading  ? (
         <Spin className = "spin" size="large" tip = "Загрузка сообщений..." />
       ) : (  (items && !isLoading) ? (
         items.length > 0 ?
         <div>
            {items.map(item => <Message {...item}/>)}
         </div>
         : (
           <Empty
           image={Empty.PRESENTED_IMAGE_SIMPLE}
           description = "Диалог пуст" />
         )
             ) : (
         <Empty
         image={Empty.PRESENTED_IMAGE_SIMPLE}
         description = "Откройте диалог" />)
       )
   }

</div>
);

}



Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;




/* <Message avatar = "https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1"
          text = "Здhttp://localhost:3000/imhttp://localhost:3000/imhttp://localhost:3000/imhttp://localhost:3000/im"
          date = "Mon Jun 21 2021 13:10:00"
          attachments = {[
            {
              fileName: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
            },
            {
              fileName: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
            },
            {
              fileName: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
            },
            {
              fileName: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=4&nature,water'
            }
          ]}
          />

    <Message avatar = "https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1"


            attachments = {[
              {
                fileName: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
              }
            ]}
            />


  <Message avatar = "https://sun9-33.userapi.com/s/v1/ig2/pGChHSieeHadmcTsnDIE_aVwi-b3mg9N8vo06w5cIfQ0QUaRHQtCOS5qz5JaEfs-DPcgW_1W6H7QovfIzwh8Kddh.jpg?size=50x0&quality=96&crop=19,20,584,584&ava=1"
    text = "Чего бляяяять"
    date = "Mon Jun 21 2021 13:55:00"
    isMe = {true}
    isReaded = {true}
    />

  <Message avatar = "https://sun9-33.userapi.com/s/v1/ig2/pGChHSieeHadmcTsnDIE_aVwi-b3mg9N8vo06w5cIfQ0QUaRHQtCOS5qz5JaEfs-DPcgW_1W6H7QovfIzwh8Kddh.jpg?size=50x0&quality=96&crop=19,20,584,584&ava=1"
          text = "Эй"
          date = "Mon Jun 21 2021 15:32:15"
          isMe = {true}
          isReaded = {false}
          />

    <Message avatar = "https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1"
    isTyping
          />

    <Message avatar = "https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1"
      text = "Я поеду в ЛЕНИНГРАД!!!"
      date = "Mon Jun 21 2021 15:32:15"
            />
  */

//
//   "_id": "Math.random()",
//   text:
//         'Братишка! Я тебе покушать принесла! Пахомлучший на свете экстраенс',
//   created_at: "Thu Mar 15 2019 13:10:00",
//   user: {
//       _id: '4722574858',
//       userName: 'Annushka',
//       avatar: 'https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1'
//     }
//
// },
//
// {
//   _id: Math.random(),
//   text:
//         'Скоро приду на чай!',
//   created_at: "Wed Jun 23 2021 15:22:37",
//   user: {
//       _id: '8683386',
//       userName: 'Елизавета II',
//       avatar: 'https://n1s2.starhit.ru/bc/94/11/bc9411b66e0a3f22856436c72194a967/444x460_0_019c3f6ae66820c5085844944848406d@480x497_0xc0a8399a_11960572051483298419.jpeg'
//     }
//
// },
//
// {
//   _id: '2vd202c962b3253040878b5853000dc0e9',
//   text:
//         '7 дней',
//   created_at: "Tue Jan 12 2021 12:10:00",
//   user: {
//       _id: '87876836869257',
//       userName: 'Анонимус',
//       avatar: null,
//       isOnline: true
//     }
//
// },
//
// {
//   _id: Math.random(),
//   text:
//         'Здарова! Пройди тест по ссылке плиз',
//   created_at: "Wed Jun 23 2021 14:22:37",
//   user: {
//       _id: "5s45352462757572",
//       userName: 'Алан Тьюринг',
//       avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5P3h1_JXLJSG5J8FfjQcwcS76lKuIqRNxQ&usqp=CAU',
//       isOnline: true
//     }
//
// },
//
// {
//   _id: Math.random(),
//   text:
//         'Я дурачек ляляля',
//   created_at: "Wed Jun 23 2021 16:22:37",
//   user: {
//       _id: "58993657675",
//       userName: 'Руслан Алтынбаев',
//       avatar: 'https://sun9-4.userapi.com/impf/V8r1HQ765ojSZHb1_Pp4Fijw2EQEFAd5xwXQuw/ielQ4ZDvyf0.jpg?size=1280x853&quality=96&sign=6ea05be6580e88acc650b48ff1b1e488&type=album',
//        isOnline: true
//     }
//
// },



// <Message
//   user = {
//   {  _id: '233454332',
//     userName: 'Ass'}
//   }
//   avatar = "https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1"
//   date = "Mon Jun 21 2021 15:32:15"
//   audio = "https://notificationsounds.com/storage/sounds/file-de_vuvuzela-power-down.mp3"
//           />
//
//  <Message avatar = "https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1"
//           text = "Здhttp://localhost:3000/imhttp://localhost:3000/imhttp://localhost:3000/imhttp://localhost:3000/im"
//           date = "Mon Jun 21 2021 13:10:00"
//           attachments = {[
//             {
//               fileName: 'image.jpg',
//               url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
//             },
//             {
//               fileName: 'image.jpg',
//               url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
//             },
//             {
//               fileName: 'image.jpg',
//               url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
//             },
//             {
//               fileName: 'image.jpg',
//               url: 'https://source.unsplash.com/100x100/?random=4&nature,water'
//             }
//           ]}
//           />
//
//     <Message avatar = "https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1"
//
//
//             attachments = {[
//               {
//                 fileName: 'image.jpg',
//                 url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
//               }
//             ]}
//             />
//
//
//   <Message avatar = "https://sun9-33.userapi.com/s/v1/ig2/pGChHSieeHadmcTsnDIE_aVwi-b3mg9N8vo06w5cIfQ0QUaRHQtCOS5qz5JaEfs-DPcgW_1W6H7QovfIzwh8Kddh.jpg?size=50x0&quality=96&crop=19,20,584,584&ava=1"
//     text = "Чего бляяяять"
//     date = "Mon Jun 21 2021 13:55:00"
//     isMe = {true}
//     isReaded = {true}
//     />
//
//   <Message avatar = "https://sun9-33.userapi.com/s/v1/ig2/pGChHSieeHadmcTsnDIE_aVwi-b3mg9N8vo06w5cIfQ0QUaRHQtCOS5qz5JaEfs-DPcgW_1W6H7QovfIzwh8Kddh.jpg?size=50x0&quality=96&crop=19,20,584,584&ava=1"
//           text = "Эй"
//           date = "Mon Jun 21 2021 15:32:15"
//           isMe = {true}
//           isReaded = {false}
//           />
//
//     <Message avatar = "https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1"
//     isTyping
//           />
//
//     <Message avatar = "https://sun9-27.userapi.com/s/v1/if1/c56MguvlX_Y4-LaomLqbxC3GTuZ7TRrUjTU1IQfZUAZpshEBhxube-dN-eRm9HmKPKBSqQhi.jpg?size=50x0&quality=96&crop=34,34,794,794&ava=1"
//       text = "Я поеду в ЛЕНИНГРАД!!!"
//       date = "Mon Jun 21 2021 15:32:15"
//             />
