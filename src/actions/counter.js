import { actionsTypes } from "../constants/counter";

//criando as ações

export const actions = {
  decrement: () => ({
    type: actionsTypes.COUNTER_DECREMENT,
  }),
  increment: () => ({
    type: actionsTypes.COUNTER_INCREMENT,
  }),
};
