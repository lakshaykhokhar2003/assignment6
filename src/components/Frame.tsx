import React from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxState, pages} from "../../utils";
import useFunc from "@/hooks/useFunc.ts";

const Frame: React.FC = () => {
    // Destructure the functions and states from the custom hook
    const {disabled, checkboxes, handleSelectAll, handleCheckboxChange, handleDone} = useFunc();

    return (
        <div className="w-80 pt-4 pb-4 pl-3 pr-3 border-[1px] border-[#EEEEEE] bg-white rounded-lg shadow-lg">
            <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                    {/* Select All */}
                    <label htmlFor="selectAll" className="cursor-pointer text-[#1F2128]">
                        All pages
                    </label>
                    <Checkbox
                        id="selectAll"
                        checked={checkboxes.selectAll}
                        onCheckedChange={handleSelectAll}
                    />
                </div>

                {/* Individual Checkboxes */}
                <div className="space-y-4 border-b border-gray-200 pb-3">
                    {pages.map((page, index) => (
                        <div key={page} className="flex justify-between">
                            <label htmlFor={`page-${index}`} className="cursor-pointer text-[#1F2128]">
                                {page.replace("page", "Page ")}
                            </label>
                            <Checkbox
                                id={`page-${index}`}
                                checked={checkboxes[page as keyof CheckboxState]}
                                onCheckedChange={() => handleCheckboxChange(page as keyof CheckboxState)}
                            />
                        </div>
                    ))}
                </div>

                {/* Done Button */}
                <button
                    onClick={handleDone}
                    className={`w-full py-2 px-4 bg-[#FFCE22] hover:bg-[#FFD84D] transition duration-200 rounded-lg shadow ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
                    disabled={disabled}
                >
                    Done
                </button>
            </div>
        </div>
    );
};

export default Frame;
