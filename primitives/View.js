// @flow

import React from 'react';
import RCT from 'react';
import Platform from '../utils/Platform';

const IS_WEB = Platform.OS === 'web';

const ViewPrimitive = ({children, style, onClick}) => (
	<div style={style} onClick={onClick}>{children}</div>
);

export default IS_WEB ? ViewPrimitive : RCT.View;