import * as React from 'react';
import { Popover } from '../Popover/Popover';

const PopoverContentComponent = ({ labelId, descriptionId, close }: any) => {
  return (
    <>
      <h3 id={labelId}>Create new app</h3>
      <p id={descriptionId}>Keep the name short!</p>
      <input placeholder="Name" />
      <button onClick={close}>Create</button>
    </>
  );
};

const PopoverWrapper = ({ openPopover, setOpenPopover, children }: any) => {
  return (
    <Popover
      render={({ close, labelId, descriptionId }) => (
        <PopoverContentComponent labelId={labelId} descriptionId={descriptionId} close={close} />
      )}
      open={openPopover}
      setOpenPopover={setOpenPopover}
    >
      {children}
    </Popover>
  );
};

export default PopoverWrapper;
