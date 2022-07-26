import './tippyCustom.css';

import Tippy from '@tippyjs/react';
import * as React from 'react';
import { RefObject } from 'react';
//import 'tippy.js/dist/tippy.css';

type TippyComponentType = {
  newRef: RefObject<HTMLDivElement>;
  tippyContent: string;
  visible: boolean;
  direction?: any;
};

const TippyComponent = ({ newRef, tippyContent, visible, direction }: TippyComponentType) => {
  return (
    <Tippy
      content={tippyContent}
      placement={direction ?? 'top'}
      visible={visible}
      reference={newRef}
    />
  );
};

export default TippyComponent;
