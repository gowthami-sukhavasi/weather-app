import React, { useRef } from "react";


const SearchCity = (props) => {
    const inputEl = useRef("");

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };

    return (
        <div className="ui raised very padded text container segment" style={{ marginTop: "50px" }}>
            <h3 className="ui header">Enter any city :</h3>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputEl}
                        type="text"
                        placeholder="Search"
                        className="prompt"
                        value={props.term}
                        onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
        </div>
    );
};

export default SearchCity;