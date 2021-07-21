import React, { useState, useEffect, useRef } from 'react';
import {connect} from 'react-redux';


import { messagesActions } from '../redux/actions';
import { Messages as BaseMessages} from '../components';

const Messages = ({ currentDialogId, fetchMessages, items, isLoading}) => {
  //console.log(currentDialogId);
  const messagesRef = useRef(null);

  useEffect(() => {
    if(currentDialogId){
        fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

   useEffect(() => {
    // console.log(messagesRef.current);
     if(messagesRef.current){
       messagesRef.current.scrollTo(0,9999);
     }

   }, [items]);

  return <BaseMessages
            blockRef = {messagesRef}
            items = {items}
            isLoading = {isLoading}
            />
};


export default connect(({dialogs,messages}) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading
}), messagesActions)(Messages);

// dialog название редьюсера в котором items записываются в айтемс
