import React from 'react';

const Collapse = (props) => {
    console.log(props.children)
    return (
        <div>
            <a className="btn btn-primary w-100" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
            </a>
            <div className="collapse show" id={props.href}>
                    {props.children}
            </div>
        </div>
    );
};

export default Collapse;