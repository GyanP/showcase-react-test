import * as React from "react";
import { IEducation } from "../../types";

interface IProps {
    educations: IEducation[]
}

type Props = IProps;

const SideNavBar: React.FC<Props> = (props: Props) => {
    return (
        <div className='sideNavBody p-2'>
            {props.educations && props.educations.length > 0 && props.educations.map((education: IEducation, index: number)=>(
                <div key={`side-${index}`}>
                    <h6>Showcase University</h6>
                    <p>{education.university} University</p>
                </div>
            ))}
        </div>
    );
};

export default SideNavBar;
