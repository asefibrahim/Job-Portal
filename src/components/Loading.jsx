import React from "react";
import PropTypes from 'prop-types';

const Loading = ({ size }) => (
    <ul className="shadow sm:rounded-md bg-white">
        {[...Array(size).keys()].map(i => (
            <li key={i} className="animate-pulse flex py-4 px-4 sm:px-6 border-b border-gray-100 last:border-b-0">
                <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                <div className="flex-1 space-y-4 py-1">
                    <div className="ml-2 h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="space-y-2 ml-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                </div>
            </li>
        ))}
    </ul>
);

Loading.propTypes = {
    size: PropTypes.number
};

export default Loading;
