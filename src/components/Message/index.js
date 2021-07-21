import React, {useState, useRef, useEffect} from 'react';
import {Button as BaseButton} from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import { Emoji } from 'emoji-mart';

import readedSvg from '../../assets/img/readed.svg';
import noReadedSvg from '../../assets/img/noreaded.svg';
import waveSvg from '../../assets/img/wave.svg';
import playSvg from '../../assets/img/play.svg';
import pauseSvg from '../../assets/img/pause.svg';

import { convertCurrentTime, isAudio } from '../../utils';
import {IconRead, Time, Avatar} from '../';

import './Message.scss';

//<button onClick = {() => {togglePlay(); setPlay(!isPlay); console.log(isPlay)}}>

const MessageAudio = ({ audioSrc }) => {
  const audioElem = useRef(null);
  const [isPlay, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if(!isPlay){
        audioElem.current.play();
    } else {
        audioElem.current.pause();
    }
  };

  useEffect(() => {
    audioElem.current.volume = 0.1;
    audioElem.current.addEventListener(
      'playing',
      () => {
        setPlay(true);
      },
       false
     );

    audioElem.current.addEventListener(
      'ended',
      () => {
        setPlay(false);
        setProgress(0);
        setCurrentTime(0);
      },
       false
     );

     audioElem.current.addEventListener(
       'pause',
       () => {
         setPlay(false);
       },
         false
      );

      audioElem.current.addEventListener('timeupdate', () => {
         const duration = (audioElem.current && audioElem.current.duration) || 0;
         setCurrentTime(audioElem.current.currentTime);
         setProgress(((audioElem.current.currentTime / duration) * 100) + (duration*0.5));
   });

  }, [isPlay]);
  //
//  <Avatar user= {user} />
  return (
     <div className="message__bubble">
            <div className="message__audio">
              <audio ref = {audioElem} src = {audioSrc} preload = "auto" />
                    <div
                        className="message__audio-progress"
                        style = {{ width: progress + '%' }}
                      />

                    <div className="message__audio-info">
                        <div className="message__audio-btn">
                              <button onClick = {togglePlay}>
                              <img src={!isPlay ? playSvg : pauseSvg } alt="Play/Pause"/>
                              </button>
                        </div>

                        <div className="message__audio-wave">
                              <img src={waveSvg} alt="Wave svg"/>
                        </div>

                        <span className="message__audio-duration">
                              {convertCurrentTime(currentTime)}
                        </span>

                        </div>
                  </div>
      </div>
 );
};

const Message = ({
  avatar,
  user,
  text,
  date,
  audio,
  isMe,
  isReaded,
  attachments,
  isTyping
}) => {

  // <img src={avatar} alt={`Avatar ${user.fullname}`}/>
//  <Avatar user= {user} />
  // <p className="message__text">{text} <Emoji emoji=':santa::skin-tone-3:' size={16} /></p>
  return (

  <div className={classNames('message', {
      'message--isme' : isMe,
      'message--is-typing' : isTyping,
      'message--image' : attachments && attachments.length === 1,
      'message--is-audio' : audio
    })}>


    <div className="message__avatar">
      <Avatar user= {user} />

    </div>


    <div className = "message__info">
            <div className="message__content">
                  <div className = "message__readed">
                      {isMe && isReaded ?   <img src={readedSvg} alt=""/> : null}
                      {isMe && !isReaded ?     <img src={noReadedSvg} alt=""/> : null}
                  </div>
                {text ? (  <div className="message__bubble">
                        <p className="message__text">{text}</p>
                  </div>) : (  <div style = {{  display: 'none'}} className="message__bubble">
                          <p className="message__text">{text}</p>
                    </div>)}

                    {isTyping && (  <div class="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>)}

                    { audio && <MessageAudio audioSrc = {audio}/> }

                    <div className="message__attachments">
                    {
                      attachments && attachments.map(item => (

                        <div className="message__attachments-item">
                            <img src={item.url} alt={item.fileName}/>
                        </div>
                      ))
                    }

                  </div>
              {date && (    <span className="message__date">
                          {<Time date = {date} />}
                  </span>) }

            </div>



    </div>


  </div>
);}



Message.defaultProps = {
  user: {},
  // audio: 's'
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
//
// {formatDistanceToNow(new Date(date), {addSuffix: true, locale: ruLocale})}
