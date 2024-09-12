const FILE_SYSTEM_PICKER_OPTIONS: SaveFilePickerOptions = {
  types: [
    {
      description: 'PDF Files',
      accept: {
        'application/pdf': ['.pdf'],
      },
    },
  ],
};

export { FILE_SYSTEM_PICKER_OPTIONS };