import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

import landscape from '../../static/images/landscape.png';
import portrait from '../../static/images/portrait.png';

import ProgressBar from "../../Controls/ProgressBar/ProgressBar";

const Image = styled.div`
    background: no-repeat center center ;
    background-size: contain;
    width: 100%;
    min-height: 100%;
    @media (orientation: landscape) {
     background-image: url(${landscape}) ;
    }
    @media (orientation: portrait) {
     background-image: url(${portrait}) ;
    }
`;

const StyledProgressBar = styled(ProgressBar)`
  position: absolute;
  bottom: 0;
`;

export class Main extends Component {
    render() {
        return (
            <Fragment>
                <Image/>
                <StyledProgressBar percentage={10}/>
            </Fragment>
        );
    }
}

export default Main;