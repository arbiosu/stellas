import { Button } from './ui/button';
import { PhoneOutgoing } from 'lucide-react';

export default function CallButton() {
  return (
    <Button size={'icon'}>
      <PhoneOutgoing />
    </Button>
  );
}
