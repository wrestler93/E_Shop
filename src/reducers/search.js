const intialState = {
  reqEmail: "admin@gmail.com",
  reqPassword: "Abcd@1234",
  CartData: [],
  removeData: [],
  countNum: "",
  countSum: "",
  status: "",
};

const searchTheEmail = (state = intialState, action) => {
  switch (action.type) {
    case "SEARCH_EMAIL":
      const result =
        action.payload.email.toLowerCase().includes(state.reqEmail) &&
        action.payload.password.includes(state.reqPassword);

      console.log("res", result, action.payload);
      return { ...state, status: result };
    case "LOGOUT":
      const data = action.payload.data;
      console.log("data", action.payload);
      return { ...state, status: data };
    case "ITEM_DATA":
      const count = state.CartData.concat(action.payload.data);
      console.log("count", action.payload.data, count);
      const TotalNumE = count.length;
      const TotalSumE = count.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
      return {
        ...state,
        CartData: [...count],
        countNum: TotalNumE,
        countSum: TotalSumE,
      };
      break;
    case "REMOVE_DATA":
      const remove = state.CartData?.findIndex(
        (obj) => obj.id === action.payload.data
      );
      state.CartData.splice(remove, 1);
      console.log("state.CartData", state.CartData);

      return { ...state, removeData: state.CartData };
      break;
    case "DATA_RECORD":
      const TotalNum = action.payload.data.length;
      const TotalSum = action.payload.data.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
      console.log("Data", TotalNum, TotalSum);

      return { ...state, countNum: TotalNum, countSum: TotalSum };
    default:
      return state;
  }
};

export default searchTheEmail;
