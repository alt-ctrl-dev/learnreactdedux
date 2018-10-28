import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
    console.log("Action recieved ",action);

    switch (action.type) {
        case FETCH_WEATHER:{
            let returnVal = [];
            console.log("FETCH_WEATHER",returnVal);
            if(action.error){
                returnVal.push({error:true,message:`Could not find city: ${action.meta.city}`,});
                return returnVal;
            }
            
            returnVal.push(action.payload.data);
            return returnVal;
        }
    }
    return state;
}