import './Popover.css';

import {
  FloatingFocusManager,
  Placement,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import * as React from 'react';
import { Dispatch, SetStateAction, cloneElement } from 'react';

interface Props {
  render: (data: { close: () => void; labelId: string; descriptionId: string }) => React.ReactNode;
  placement?: Placement;
  children: JSX.Element;
  open: boolean;
  setIsOpenPopover: Dispatch<SetStateAction<boolean>>;
}

export const Popover = ({ children, render, placement, open, setIsOpenPopover }: Props) => {
  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setIsOpenPopover,
    middleware: [offset(5), flip(), shift()],
    placement,
    whileElementsMounted: autoUpdate,
  });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context),
  ]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref: reference, ...children.props }))}
      {open && (
        <FloatingFocusManager
          context={context}
          modal={false}
          order={['reference', 'content']}
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
              'aria-labelledby': labelId,
              'aria-describedby': descriptionId,
            })}
          >
            {render({
              labelId,
              descriptionId,
              close: () => {
                setIsOpenPopover(false);
              },
            })}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};
