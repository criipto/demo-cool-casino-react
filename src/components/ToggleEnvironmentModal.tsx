import { Fragment, useState } from 'react';
import { Button, Dialog, DialogBody, Switch } from '@material-tailwind/react';

interface EnvProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

export default function Modal({ onToggleEnv, currentEnvironment }: EnvProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button
        placeholder="switch environment"
        onClick={handleOpen}
        className="bg-primary25 shadow-none p-0 hover:shadow-none"
      >
        <img
          src="/gear-icon.png"
          alt="Gear icon"
          className="h-4 w-4 self-center mr-4"
        />
      </Button>
      <Dialog
        placeholder="switch environment"
        open={open}
        handler={handleOpen}
      >
        <DialogBody placeholder="switch environment">
          <Switch
            crossOrigin={false}
            id="env-toggle"
            label="Production"
            color="indigo"
            checked={currentEnvironment === 'production'}
            onChange={onToggleEnv}
          />
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
