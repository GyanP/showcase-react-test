import * as React from "react";
import { withRouter } from "react-router-dom"; 

interface IProps {}

type Props = IProps;

const HomeScreen: React.FC<Props> = (props: Props) => {
    return (
        <div>home screen</div>
    );
};

export default withRouter(HomeScreen);
