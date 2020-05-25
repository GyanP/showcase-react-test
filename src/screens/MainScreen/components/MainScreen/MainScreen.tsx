import * as React from "react";
import { withRouter } from "react-router-dom"; 

interface IProps {}

type Props = IProps;

const MainScreen: React.FC<Props> = (props: Props) => {
    return (
        <div>Main screen</div>
    );
};

export default withRouter(MainScreen);
