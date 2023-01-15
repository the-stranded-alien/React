import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    // Simple Version - Use when new state doesn't depend on old state
    // const handleClick = (nextIndex) => {
    //     if(expandedIndex === nextIndex) {
    //         setExpandedIndex(-1);
    //     } else {
    //         setExpandedIndex(nextIndex);
    //     }
    // }

    // Functional Version - Use when new state depends on old state
    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => { // currentExpandedIndex -> Guaranteed, the latest value of state
            if(currentExpandedIndex === nextIndex) {
                return - 1;
            } else {
                return nextIndex;
            }
        })
    }


    const renderedItems = items.map((item, index) => {

        const isExpanded = (index === expandedIndex);
        // const content = isExpanded && <div>{item.content}</div>;

        const icon = <span className="text-xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>;

        return (
            <div key={ item.id }>
                {/*<div onClick={() => setExpandedIndex(index)}>{ item.label }</div>*/}
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    { item.label }
                    { icon }
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });
    return <div className="border-x border-t rounded"> { renderedItems } </div>
}

export default Accordion;