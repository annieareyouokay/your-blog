import React from 'react';
import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';

const CircleLoader = ({
  height = '140',
  width = '140',
  color = 'hsl(0, 0%, 100%)',
  ariaLabel = 'circles-loading',
  wrapperStyle = {},
  wrapperClass = '',
  visible = true
}) => {
  return (
      <Circles
        height={height}
        width={width}
        color={color}
        ariaLabel={ariaLabel}
        wrapperStyle={wrapperStyle}
        wrapperClass={wrapperClass}
        visible={visible}
      />
  );
};

CircleLoader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  wrapperStyle: PropTypes.object,
  wrapperClass: PropTypes.string,
  visible: PropTypes.bool,
  sizeClass: PropTypes.string
};
export default CircleLoader;
