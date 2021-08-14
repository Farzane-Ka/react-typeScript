import { ActionTypes } from '../actionTypes';
import { Action } from '../actions';
interface RepositoriesState{
    loading:boolean;
    error:string | null;
    data:string[]
}

const initialState = {
    loading: false,
    error: null,
    data: [],
  };

const reducer=(state:RepositoriesState=initialState, action:Action)=>{
    switch(action.type){
        case ActionTypes.SEARCH_REPOSITORIES:
            return {loading:true, error:null,data:[]};
        case ActionTypes.SEARCH_REPOSITORIES_ERROR:
            return{loading:false,error:action.payload, data:[]};
        case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
            return{loading:false,error:null,data:action.payload};
        default:
            return state;
    }
};

export default reducer;