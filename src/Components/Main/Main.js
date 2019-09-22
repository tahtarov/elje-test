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
  display: ${props => props.show > 0 ? 'block' : 'none'};
`;

const Button = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: ${props => props.show > 0 ? 'block' : 'none'};
  background: #2374AB;
  text-transform: uppercase;
  color: white;
  border: none;
  padding: 8px; 
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
    const [showBar, setShowBar] = useState(1);
    const [showBtn, setShowBtn] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(percentage => calcPercentage(percentage, interval));
        }, INTERVAL);
        return () => clearInterval(interval);
    }, []);

    if (showBar && percentage >= 100) {
        setTimeout(() => {
            setShowBar(0);
            setShowBtn(1);
        }, 300);
    }

    return (
        <Fragment>
            <Image/>
            <StyledProgressBar percentage={percentage} show={showBar}/>
            <Button show={showBtn}>Закрыть</Button>
        </Fragment>
    );
}

export default Main;