import React, {Fragment, useState, useEffect} from 'react';
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

const LOADING_TIME = 3 * 1000;
const INTERVAL = 100;
const STEP = INTERVAL * 100 / LOADING_TIME;

function calcPercentage(percentage, interval) {
    if (percentage <= 100) {
        percentage += STEP;
    }
    if (percentage > 100) {
        percentage = 100;
        clearInterval(interval);
    }
    return percentage;
}

function Main() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(percentage => calcPercentage(percentage, interval));
        }, INTERVAL);
        return () => clearInterval(interval);
    }, []);

    return (
        <Fragment>
            <Image/>
            <StyledProgressBar percentage={percentage}/>
        </Fragment>
    );
}

export default Main;