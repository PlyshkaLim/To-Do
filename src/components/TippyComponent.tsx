import Tippy from '@tippyjs/react';
import * as React from 'react';
import { RefObject } from 'react';
import { Placement } from 'tippy.js';
//import Tippy from '@tippyjs/react/headless';

type TippyComponentType = {
  newRef: RefObject<HTMLDivElement>;
  tippyContent: string;
  visible: boolean;
  direction?: Placement;
};

const TippyComponent = ({
  newRef,
  tippyContent,
  visible,
  direction = 'top',
}: TippyComponentType) => {
  return (
    <Tippy content={tippyContent} placement={direction} visible={visible} reference={newRef} />
    // <Tippy
    //   visible={visible}
    //   reference={newRef}
    //   render={(attrs) => <div {...attrs}>{tippyContent}</div>}
    // />
  );
};

export default TippyComponent;
