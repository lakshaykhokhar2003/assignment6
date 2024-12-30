import {useState} from "react";
import {CheckboxState} from "../../utils";
import {toast} from "sonner";

const useFunc = () => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState<CheckboxState>({
        selectAll: false,
        page1: false,
        page2: false,
        page3: false,
        page4: false,
    });

    {/* Handle "Select All" toggle */}
    const handleSelectAll = () => {
        const isChecked = !checkboxes.selectAll;
        setCheckboxes({
            selectAll: isChecked,
            page1: isChecked,
            page2: isChecked,
            page3: isChecked,
            page4: isChecked,
        });
    };

    {/* Handle individual page toggles */}
    const handleCheckboxChange = (key: keyof CheckboxState) => {
        const updatedCheckboxes = {
            ...checkboxes,
            [key]: !checkboxes[key],
        };
        const allSelected = Object.values(updatedCheckboxes).slice(1).every((val) => val);
        setCheckboxes({...updatedCheckboxes, selectAll: allSelected});
    };

    {/* Gets values of selected pages */}
    const getSelectedPages = () => {
        return Object.keys(checkboxes)
            .filter((key) => checkboxes[key as keyof CheckboxState])
            .map((key) => key.replace("page", "Page "));
    };

    {/* Handle "Done" button click */}
    const handleDone = () => {
        const selectedPages = getSelectedPages();
        console.log(selectedPages);

        if (selectedPages.length === 0) return toast.error("Please select at least one page");

        {/* Disable the button for 1.5 seconds */}
        setDisabled(true);
        setTimeout(() => setDisabled(false), 1500);

        if (selectedPages.length > 4) toast.success("All pages selected");
        else toast.success("Selected Pages: " + selectedPages.join(", "));

        setCheckboxes({
            selectAll: false,
            page1: false,
            page2: false,
            page3: false,
            page4: false,
        });
    };

    return {checkboxes, disabled, handleSelectAll, handleCheckboxChange, handleDone};
}

export default useFunc;