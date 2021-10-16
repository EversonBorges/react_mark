import React from 'react';

const Highlight = ({ children, toHighlight }) => {
    const regex = new RegExp(`(${toHighlight})`, 'i')
    return children.split(regex).map((chunk, index) => {
        if(lower(chunk) === lower(toHighlight)){
            return <mark key={index}>{chunk}</mark>
        }
        return chunk;
    });

    function lower(string) {
        return string.toLowerCase();
    }
}
export default Highlight;
