import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const DomElement = ({children}) => {

    const rootElemRef = useRef(document.createElement('div'));

    useEffect(() => {

        const rootElemRef2 = rootElemRef;

        // Look for existing target dom element to append to
        const parentElem = document.querySelector('body');
        // Add the detached element to the parent
        parentElem.appendChild(rootElemRef2.current);
        // This function is run on unmount
        return () => {
            rootElemRef2.current.remove();
        };
    }, []);

    return ReactDOM.createPortal(children, rootElemRef.current);
}

export default DomElement;