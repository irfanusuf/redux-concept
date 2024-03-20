export const increment = () => (action)=> {
  action({
    type: "actionTypeIncrement",
  });
};


export const decrement = () => (action)=> {
    action({
      type: "actionTypeDecrement",
    });
  };
