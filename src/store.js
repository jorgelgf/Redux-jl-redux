//criando uma store
import { createStore } from "redux";

//importando os reducers
import { reducers } from "./reducers";

const store = createStore(reducers);

export { store };
