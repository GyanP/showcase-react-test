import * as React from "react";
import { useState } from "react";
import { Label, Input, Button } from "../../../../sharedComponents";
import { IEducation } from "../../types";
import { setEducationDetails } from "../../actions";
import { Select } from "../AsyncSelect";

interface IProps {
    universities: any;
    setEducationDetails: (details: IEducation) => void;
    getUniversities: (value: string) => void;
}

interface IState {
    formState: IEducation;
}

type Props = IProps;

const ModalContent: React.FC<Props> = (props: Props, state: IState) => {
    const initialState = {
        university: "",
        startYear: "",
        endYear: "",
        degree: "",
        grade: "",
        field: "",
    };
    const [formState, setFormState] = useState(initialState);

    const handleChange = (event: any) => {
        const updatedState = { ...formState, [event.target.name]: event.target.value };
        setFormState(updatedState);
    }

    const handleSubmit = () => {
        setEducationDetails(formState);
    }

    return (
        <div className="w-100 px-4">
            <h6 className='text-left ml-3'>Add Your Education</h6>
            <div className='col-lg-12'>
                <div className="row">
                    <div className="col-12">
                        <Label>University</Label>
                        <Select
                            options={props.universities}
                            getOptions={props.getUniversities}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Label>Start Year</Label>
                        <Input
                            type="text"
                            name="startYear"
                            value={formState.startYear}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <Label>End Year</Label>
                        <Input
                            type="text"
                            name="endYear"
                            value={formState.endYear}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Label>Degree</Label>
                        <Input
                            type="text"
                            name="degree"
                            value={formState.degree}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Label>Grade</Label>
                        <Input
                            type="text"
                            name="grade"
                            value={formState.grade}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Label>Field</Label>
                        <Input
                            type="text"
                            name="field"
                            value={formState.field}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='text-right mt-3'>
                <Button onClick={handleSubmit}>Save</Button>
            </div>
        </div> 
    );
};

export default ModalContent;
