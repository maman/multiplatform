// @flow
import RCT from 'react';

const Platform = RCT && RCT.Platform ? RCT.Platform : {
  OS: 'web',
};

export default Platform;