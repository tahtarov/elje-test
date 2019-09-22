import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bar = styled.div`
  width: 100%;
  height: 20px;
`;
const Filler = styled.div`
  background: #2374AB;
  width: ${props => props.percentage || 0};
  height: 100%;
  transition: width .2s ease-in;
`;

function ProgressBar(props) {
        const {percentage, className} = props;
        return (
            <Bar className={className}>
                <Filler percentage={`${percentage}%`}/>
            </Bar>
        );
}

ProgressBar.propTypes = {
    percentage: PropTypes.number,
    className: PropTypes.string
};

ProgressBar.defaultProps = {
  percentage: 0
};

export default ProgressBar;