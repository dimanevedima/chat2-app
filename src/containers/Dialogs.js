import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';


import {dialogsActions} from '../redux/actions';
import { Dialogs as BaseDialogs} from '../components';

const Dialogs = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId, onSearch}) => {
  const [inputValue, setValue] = useState('');
  const [filtered, setFiltredItems] = useState(items);




  const onChangeInput = value => {
    setFiltredItems(
      Array.from(items).filter(dialog => dialog.user.userName.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    );

    //console.log(inputValue);
    //console.log(filtered);
    setValue(value);
  };



  useEffect(() => {

    if (!items.length){
      fetchDialogs();
    }
    setFiltredItems(items);
  }, [items])

  return <BaseDialogs
            items = {filtered}
            onSearch = {onChangeInput}
            inputValue = {inputValue}
            onSelectDialog = {setCurrentDialogId}
            currentDialogId = {currentDialogId}
            />
};


export default connect(({dialogs}) => dialogs, dialogsActions)(Dialogs);

// dialogs название редьюсера в котором items записываются в айтемс
