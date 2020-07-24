import React, { ReactElement } from 'react';
import NoteIcon from 'assets/images/icons/icon-note.png';
import AppIcon from 'components/AppIcon';

function NoteShortcut(): ReactElement {
  return (
    <AppIcon
      icon={NoteIcon}
      name="note"
      handleDoubleClick={(): void => {
        window.open(
          'https://www.notion.so/maxxlee/Max-s-2837e7f09c574389b0208204b10c72b7',
          '_blank'
        );
      }}
    />
  );
}

export default NoteShortcut;
