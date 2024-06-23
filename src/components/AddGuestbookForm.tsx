'use client';

import { GuestbookForm } from './Card';

const AddGuestbookForm = () => (
  <GuestbookForm
    onValid={async (data) => {
      await fetch(`/api/guestbook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    }}
  />
);

export { AddGuestbookForm };
