import React, {useState} from 'react';
import {SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined} from '@ant-design/icons';
import {Button, Input} from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import './ChatInput.scss';


const ChatInput = props => {

  const [value, setValue] = useState('');
  const [emojiPickerVisible, setEmojiPickerVisible ] = useState(false);
  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
    console.log(emojiPickerVisible);
  };
  const addEmoji = (e) => {
      //console.log(e.native);
      setValue(value + e.native);
      console.log(value);
  };


return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
      { emojiPickerVisible &&    <div className="chat-input__emoji-picker">
            <Picker set='apple' onSelect={addEmoji} />
          </div>}

          <Button onClick = {() => setEmojiPickerVisible(!emojiPickerVisible) } shape = 'circle' type = 'link'><SmileOutlined className="chat-input__icon"/></Button>
      </div>
      <Input value = {value} onChange = {e => setValue(e.target.value)} size = 'large' placeholder="Введите текст сообщения"/>
      <div className="chat-input__actions">
          <Button shape = 'circle' type = 'link'>
            <UploadField

                    onFiles={files => console.log(files)}
                    containerProps={{
                      className: 'chat-input__actions-upload-btn'
                    }}
                    uploadProps={{
                      accept: '.png,.jpg,.jpeg,.gif,.bmp',
                      multiple: 'multiple'
                    }}
                  >
                    <CameraOutlined className="chat-input__icon"/>
                  </UploadField>
          </Button>
        <Button shape = 'circle' type = 'link'>
          {value ? <SendOutlined className="chat-input__icon"/> :   <AudioOutlined className="chat-input__icon"/>}
          </Button>
      </div>
    </div>
);
}

ChatInput.propTypes = {
  className: PropTypes.string
};

export default ChatInput;
