import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import sortBy from 'lodash/sortBy';
import isToday from 'date-fns/isToday';
import {Button, Input, Empty} from 'antd';


import { DialogItem} from '../';
import './Dialogs.scss';

// user = {item.user}
// message = {item}
// unread = {1}

const Dialogs = ({items, userId, onSearch, inputValue, onSelectDialog, currentDialogId}) => (
  <div className="dialogs">
    <div className="chat__sidebar-search">
        <Input.Search
              value = {inputValue}
              placeholder="Поиск среди контактов"
              onChange = {(e) => onSearch(e.target.value)}
              />
    </div>

        {items.length ? (orderBy(items, ["created_at"], ["desc"]).map(item => (
          <DialogItem
            key = {item._id}
            isMe = {item.user._id === userId}
            {...item}
            onSelect = {onSelectDialog}
            currentDialogId = {currentDialogId}
            />
        ))) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description = "Ничего не найдено" />
        )
      }
    </div>
  );



// const Dialogs = ({items, userId}) => {
//  const orderedItems = orderBy(items, ["created_at"], ["desc"]);
//
//  //console.log(orderedItems);
//   return (
//     <div className="dialogs">
//         {
//           orderedItems.map(item => (
//           <DialogItem
//             key = {item._id}
//             isMe = {item.user._id === userId}
//             {...item}
//             />
//         ))
//       }
//     </div>
//   );
//
// };


// const Dialogs = ({items, userId}) => (
//
//   <div className="dialogs">
//       {sortBy(items, d => d.created_at).reverse().map(item => (
//       <DialogItem
//         key = {item._id}
//         user = {item.user}
//         message = {item.text}
//         unread = {1}
//         isMe = {item.user._id === userId}
//         createdAt = {item.created_at}/>
//     ))}
//   </div>
// );




export default Dialogs;
