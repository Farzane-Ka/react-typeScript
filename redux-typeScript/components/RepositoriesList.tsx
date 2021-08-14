import {useState} from 'react';
import { useActions } from '../hooks/useActions';
import { searchRepositories } from '../state/action_creator';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { directive } from '@babel/types';




const RepositoriesList:React.FC=()=>{
    const [term, setTerm]=useState('');
    const {searchRepositories}=useActions();
    const {data,error,loading}=useTypeSelector((state)=>state.repositories);
    const onSubmit=(event:React.FormEvent<HTMLFormElement> )=>{
        event.preventDefault();// not to refresh the web each time a form is submitted
        searchRepositories(term);
    };

    return(
    <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e)=>setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>loading ...</h3>}
        {!error && !loading && data.map((name)=>
        <div key={name}> {name}</div>)}
    </div>);

};

export default RepositoriesList;