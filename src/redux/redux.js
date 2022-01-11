//example to understand the redcer

const userReducer = (currentState, action) => {
   switch (action.type) {
      case 'SET_CURRENT_USER':
         return {
            ...currentState,
            currentUser: action.payload
         };
         dfault:
         return currentState;
   }
};