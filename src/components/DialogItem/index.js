import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import PropTypes from 'prop-types';


import {IconRead, Avatar} from '../';

//import './DialogItem.scss';


const getMessageTime = createdAt => {
  if (isToday(createdAt)) {
    return format(createdAt, 'HH:mm');
  } else {
    return format(createdAt, 'dd.MM.yyyy');
  }
};

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt=""
        />
    );
  }else{
    //make avatar
  }
};
// onClick = {onSelect.bind(this, _id)}
const DialogItem = ({_id, user,  unread, isMe, created_at, text, onSelect, currentDialogId}) => (
  <div
    className = {classNames("dialogs__item", {
    "dialogs__item--online": user.isOnline,
    "dialogs__item--selected": currentDialogId === _id
  })}

  onClick = {() => onSelect(_id)}
  >
      <div className="dialogs__item-avatar">
          {/*getAvatar(user.avatar)*/}
          <Avatar user = {user}/>
        </div>
      <div className = "dialogs__item-info">
          <div className="dialogs__item-info-top">
                <b>{user.userName}</b>
          {    /*  <span>{message.created_at}</span>*/}
               <span>{getMessageTime(new Date(created_at))}</span>
          </div>
          <div className="dialogs__item-info-bottom">
                <p>{text}</p>
                {isMe &&( <IconRead isMe = {true} isReaded = {false} />)}
                {!isMe && unread > 0 && (
                  <div className="dialogs__item-info-bottom-count">
                      {unread > 9 ? '9+' : unread}
                  </div>)
                 }
          </div>
      </div>
  </div>
);


DialogItem.defaultProps = {
  user: {},
  message: {}
};

export default DialogItem;
