import * as React from 'react';
import { Dispatch } from 'react';

import { Popover } from '../Popover/Popover';

const PopoverContentComponent = ({ labelId, descriptionId, close }: any) => {
  return (
    <>
      <h3 id={labelId}>Create new app</h3>
      <p id={descriptionId}>Keep the name short!</p>
      <input placeholder="Name" />
      <button onClick={close}>Create</button>
      <button>Next tip</button>
    </>
  );
};
type PopoverWrapper = {
  isOpenPopover: boolean;
  setIsOpenPopover: Dispatch<React.SetStateAction<boolean>>;
  children: any;
  thisOrder: number;
  currentOrder: number;
};
const PopoverWrapper = ({
  isOpenPopover,
  setIsOpenPopover,
  children,
  thisOrder,
  currentOrder,
}: PopoverWrapper) => {
  return (
    <>
      {thisOrder === currentOrder ? (
        <Popover
          render={({ close, labelId, descriptionId }) => (
            <PopoverContentComponent
              labelId={labelId}
              descriptionId={descriptionId}
              close={close}
            />
          )}
          open={isOpenPopover}
          setIsOpenPopover={setIsOpenPopover}
        >
          {children}
        </Popover>
      ) : (
        <>1</>
      )}
    </>
  );
};

export default PopoverWrapper;
