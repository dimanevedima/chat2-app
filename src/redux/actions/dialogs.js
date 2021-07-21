import {dialogsApi} from '../../utils/api';

const actions = {
  setDialogs: items => ({
    type: 'DIALOGS:SET_ITEMS',
    payload: items
  }),

  setCurrentDialogId: id => ({
    type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
    payload: id
  }),

  fetchDialogs: () => async (dispatch) => {
    //console.log('fe');
     await dialogsApi.getAll().then(({data}) => {
     dispatch(actions.setDialogs(data));
    });
  }

};

export default actions;
