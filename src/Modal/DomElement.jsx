import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import uuidv1 from 'uuid/v1';

const DomElement = ({children, id}) => {

    const rootElemRef = useRef(document.createElement('div'));
    rootElemRef.current.id = id ? id : uuidv1();
    rootElemRef.current.className = 'Modal';


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