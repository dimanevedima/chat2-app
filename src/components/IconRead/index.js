import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

import readedSvg from '../../assets/img/readed.svg';
import noReadedSvg from '../../assets/img/noreaded.svg';

import './IconRead.scss';


const IconRead = ({isMe, isReaded}) =>
  isMe &&
  (isReaded ? (
    <img className =  "message__icon-readed" src={readedSvg} alt="Readed Icon"/>
  ) : (
    <img
      className =  "message__icon-readed message__icon-readed--no"
      src={noReadedSvg}
      alt="Readed Icon"
      />
  ));


IconRead.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool
};

export default IconRead;
