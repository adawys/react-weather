import React from 'react';

const SearchCity = (props) => {
    return (
        <div className="container">
            <form className="input-group mb-3 container-padding" onSubmit={props.send}>
                <input 
                className="form-control input-group-append form-control-lg text-center" 
                type="text" 
                placeholder="Podaj miasto" 
                value={props.value} 
                onChange={props.changeInput}
                />
                <button className="btn btn-info btn-lg btn-outline-secondary">Znajdź</button>
            </form>
        </div>
    );
}

export default SearchCity;