import * as React from "react";
import { withRouter } from "react-router-dom"; 
import { Input, Button } from "../../sharedComponents";

interface IProps {}

type Props = IProps;

const HomeScreen: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <p>Hi there! Welcome to your education showcase</p>
            <div>
                <p>Type you name and click "Enter" below to begin</p>
                <Input />
                <Button>
                    Enter
                </Button>
            </div>
        </div>
    );
};

export default withRouter(HomeScreen);
