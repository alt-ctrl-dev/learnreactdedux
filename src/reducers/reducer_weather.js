import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
    // console.log("Action recieved ",action);

    switch (action.type) {
        case FETCH_WEATHER:{
            var returnVal = [];
            state.forEach(function(s){
                if(!s.error){
                    returnVal.push(s);
                }
            });

            if(action.error){
                returnVal.push({error:true,message:`Could not find city: ${action.meta.city}`,});
            }else{            
                returnVal.push(action.payload.data);
            }
            return returnVal;
        }
    }
    return state;
}