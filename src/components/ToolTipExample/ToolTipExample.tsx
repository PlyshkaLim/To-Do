import {
  Placement,
  autoUpdate,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import * as React from 'react';
import { cloneElement, useMemo } from 'react';
import { mergeRefs } from 'react-merge-refs';

import css from './ToolTipExample.scss';

interface ToolTipExampleProps {
  label: string;
  placement?: Placement;
  children: JSX.Element;
  open: boolean;
  setOpen: any;
}

const ToolTipExample = ({
  children,
  label,
  placement = 'top',
  open,
  setOpen,
}: ToolTipExampleProps) => {
  const { x, y, reference, floating, strategy, context } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [offset(8), flip()],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ]);

  // Preserve the consumer's ref
  const ref = useMemo(() => mergeRefs([reference, (children as any).ref]), [reference, children]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      {open && (
        <div
          className={css.Tooltip}
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            },
          })}
        >
          {label}
          <div className={css.tipCloseCross} onClick={() => setOpen(false)}>
            x
          </div>
        </div>
      )}
    </>
  );
};
export default ToolTipExample;
