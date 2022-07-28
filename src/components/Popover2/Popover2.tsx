import * as React from 'react';
import './Popover2.css';
import { cloneElement, useState } from 'react';
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  useId,
  useClick,
  useHover,
  FloatingFocusManager,
} from '@floating-ui/react-dom-interactions';

interface Props {
  render: (data: { close: () => void; descriptionId: string }) => React.ReactNode;
  placement?: Placement;
  children: JSX.Element;
  open: any;
  setOpen: any;
}

export const Popover2 = ({ children, render, placement, open, setOpen }: Props) => {
  //const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(5), flip(), shift()],
    placement,
    whileElementsMounted: autoUpdate,
  });

  const id = useId();
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    //useHover(context),
    useClick(context, {
      enabled: true,
      pointerDown: true,
      toggle: true,
      ignoreMouse: false,
    }),
    useRole(context),
    useDismiss(context, {
      enabled: false,
      escapeKey: false,
      referencePointerDown: true,
      outsidePointerDown: true,
    }),
  ]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref: reference, ...children.props }))}
      {open && (
        <FloatingFocusManager
          context={context}
          modal={false}
          order={['reference', 'content']} //order in which focus cycles.
          returnFocus={false}
        >
          <div
            {...getFloatingProps({
              className: 'Popover',
              ref: floating,
              style: {
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
              },
              'aria-describedby': descriptionId,
            })}
          >
            {render({
              descriptionId,
              close: () => {
                setOpen(false);
              },
            })}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};
