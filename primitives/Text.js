// @flow

import React from 'react';
import RCT from 'react';
import Platform from '../utils/Platform';

const IS_WEB = Platform.OS === 'web';

const defaultTextStyle = {
	fontFamily: '-apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
	display: 'block',
};

if (IS_WEB) defaultTextStyle.whiteSpace = 'pre-line';

const TextPrimitive = ({children, type, style}) => {
	const defaultStyle = Object.assign({}, (style || {}), defaultTextStyle);
	const element = IS_WEB ? type || 'span' : 'Text';
	return React.createElement(...[element, {style: defaultStyle}].concat(children))
};

export default IS_WEB ? TextPrimitive : RCT.Text;