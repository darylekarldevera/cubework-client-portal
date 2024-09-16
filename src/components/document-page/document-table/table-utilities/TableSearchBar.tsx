import React from 'react';
import { CommandItem, CommandList } from 'cmdk';
import { Command, CommandInput } from '@/components/ui/command';

interface TableSearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function TableSearchBar({ search, setSearch }: TableSearchBarProps) {
  return (
    <Command value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}>
      <CommandInput placeholder="Type a command or search..."/>
      <CommandList>
        <CommandItem />
      </CommandList>
    </Command>
  );
}

export default TableSearchBar;
