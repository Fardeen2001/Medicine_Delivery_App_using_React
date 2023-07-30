// import React, { useReducer } from "react";
// import ListContext from "./list-context";
// const defaultListState = {
//   items: [],
// };
// const listReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedItems = state.items.concat(action.item);
//     return {
//       items: updatedItems,
//     };
//   }
//   return defaultListState;
// };
// const ListProvider = (props) => {
//   const [listState, dispatchListAction] = useReducer(
//     listReducer,
//     defaultListState
//   );
//   const addItemsToListHandler = (item) => {
//     dispatchListAction({ type: "ADD", item: item });
//   };
//   const listProvider = {
//     items: listState.items,
//     addItems: addItemsToListHandler,
//   };
//   return (
//     <ListContext.Provider value={listProvider}>
//       {props.children}
//     </ListContext.Provider>
//   );
// };

// export default ListProvider;
import React, { createContext, useState } from "react";
const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [input, setInput] = useState([]);
  return (
    <ListContext.Provider value={{ input, setInput }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContext, ListProvider };
