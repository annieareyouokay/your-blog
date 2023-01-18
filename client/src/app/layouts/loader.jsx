import React from 'react';
import PropTypes from 'prop-types';
import CircleLoader from '../components/common/circleLoader';
// import { Circles } from 'react-loader-spinner';

const Loader = ({
  height = '140',
  width = '140',
  color = 'hsl(0, 0%, 100%)',
  ariaLabel = 'circles-loading',
  wrapperStyle = {},
  wrapperClass = '',
  visible = true
}) => {
  return (
    <div className="container is-flex is-align-items-center">
      <CircleLoader
        height={height}
        width={width}
        color={color}
        ariaLabel={ariaLabel}
        wrapperStyle={wrapperStyle}
        wrapperClass={wrapperClass}
        visible={visible}
      />
    </div>
  );
};

Loader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  wrapperStyle: PropTypes.object,
  wrapperClass: PropTypes.string,
  visible: PropTypes.bool,
  sizeclassName: PropTypes.string
};
export default Loader;
