import * as React from "react";
import { IEducation } from "../../types";

interface IProps {
    educations: IEducation[]
}

type Props = IProps;

const SideNavBar: React.FC<Props> = (props: Props) => {
    return (
        <div className='sideNavBody'>
            {props.educations.map((education: IEducation, index: number)=>(
                <div>
                    <h4>{education.university} University</h4>
                </div>
            ))}
        </div>
    );
};

export default SideNavBar;
