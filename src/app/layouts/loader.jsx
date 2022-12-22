import React from 'react';
import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';

const Loader = ({
  height = '140',
  width = '140',
  color = '#4fa94d',
  ariaLabel = 'circles-loading',
  wrapperStyle = {},
  wrapperClass = '',
  visible = true
}) => {
  return (
    <div className="container is-flex is-justify-content-center is-align-content-center">
      <Circles
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
  sizeClass: PropTypes.string
};
export default Loader;
