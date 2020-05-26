import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

type Props = {
    options: any;
    getOptions: (value: string) => void;
}

type State = {
  inputValue: string,
};

const Select: React.FC<Props> = (props: Props, state: State) => {
    const[inputValue, setInputValue] = useState<string>("");
    
    const filtersOptions = () => {
        return (props.options && props.options.length > 0) 
            ? props.options.map((option: any) => {
                return ({ value: option.name, label: option.name });
            })
            : [];
    } 

    const loadOptions = (inputValue: string, callback: any) => {
        setTimeout(() => {
            callback(filtersOptions());
        }, 1000);
    };
    
    const handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        setInputValue(inputValue);
        props.getOptions(inputValue);
        return inputValue;
    };
    
    return (
        <div className="select">
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={handleInputChange}
            />
        </div>
    );
};

export default Select;
