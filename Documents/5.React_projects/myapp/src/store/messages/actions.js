import { AUTHORS, BOTANSWERS } from "../../constants/common";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message
    }
})

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch (addMessage(chatId, message));
    if (message.author !== AUTHORS.bot) {
        const botMessage = {
            author: AUTHORS.bot,
            text: BOTANSWERS[Math.floor(Math.random() * BOTANSWERS.length)]
        }
        
        setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
    }
}
