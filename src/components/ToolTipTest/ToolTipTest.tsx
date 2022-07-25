import { arrow, useFloating } from '@floating-ui/react-dom';
import * as React from 'react';
import { useRef } from 'react';

import css from './ToolTipTest.scss';

type ToolTipTestProps = {
  text: string;
};
const ToolTipTest = ({ text }: ToolTipTestProps) => {
  const arrowRef = useRef();
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    middleware: [arrow({ element: arrowRef })],
  });
  return (
    <>
      <button ref={reference}>button</button>
      <div
        className={css.tipBody}
        ref={floating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
      >
        {text}
        Tooltip13
        <div
          className={css.tipArrow}
          ref={arrowRef}
          style={{
            position: 'absolute',
            top: '-4px',
            left: arrowX,
          }}
        />
      </div>
    </>
  );
};

export default ToolTipTest;
