import React, {Component} from 'react';
import styled from 'styled-components';

import landscape from '../../static/images/landscape.png';
import portrait from '../../static/images/portrait.png';

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

export class Main extends Component {
    render() {
        return (
            <Image/>
        );
    }
}

export default Main;