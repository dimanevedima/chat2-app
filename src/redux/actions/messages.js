import {messagesApi} from '../../utils/api';

const actions = {
  setMesages: items => ({
    type: 'MESSAGES:SET_ITEMS',
    payload: items
  }),

  // setIsLoading: () => ({
  //   type: 'MESSAGES:SET_IS_LOADING'
  // }),

  setIsLoading: bool => ({
    type: 'MESSAGES:SET_IS_LOADING',
    payload: bool
  }),

  fetchMessages: (dialogId) => async (dispatch) => {
     dispatch(actions.setIsLoading(true));
     dispatch(actions.setIsLoading());
     await messagesApi.getAllByDialogId(dialogId).then(({data}) => {
     dispatch(actions.setMesages(data));
  //   dispatch(actions.setIsLoading(false));
   }).catch(() => {
     dispatch(actions.setIsLoading(false));
   });
  }

};

export default actions;
