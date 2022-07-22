import Tippy from '@tippyjs/react';
import * as React from 'react';
import { RefObject } from 'react';
import tippy from 'tippy.js';

type TippyComponentType = {
  newRef: RefObject<HTMLDivElement>;
  tippyContent: string;
  visible: boolean;
  id?: any
};

const TippyComponent = ({ newRef, tippyContent, visible, id }: TippyComponentType) => {
  tippy(id, {
    // default
    arrow: 'narrow',
  });

  return <Tippy content={tippyContent} placement={'top'} visible={visible} reference={newRef} />;
};

export default TippyComponent;
