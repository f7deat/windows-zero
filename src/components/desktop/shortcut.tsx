import React from "react";
import ReactTooltip from "react-tooltip";

export default function Shortcut() {
    return (
        <div>
            <div className="flex items-center flex-col shadow bg-white rounded-full justify-center h-14  w-14 text-gray-800 hover:shadow-lg mb-4" data-tip="Google Chrome">
                <i className="fab fa-chrome fa-2x"></i>
            </div>

            <div className="flex items-center flex-col shadow bg-white rounded-full justify-center h-14  w-14 text-gray-800 hover:shadow-lg" data-tip="Facebook">
                <i className="fab fa-facebook fa-2x"></i>
            </div>
            <ReactTooltip />
        </div>
    )
}