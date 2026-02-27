import type { DropdownOption } from '../types';

interface NamedItem {
  id: number;
  name: string;
}

/**
 * Convert normal object array to dropdown array
 */
export const convertToDropdownArray = (array: NamedItem[]): DropdownOption[] => {
    if (!array || !Array.isArray(array)) return [];

    const dropdownArray = array.map(obj => {
        return {
            label: obj.name,
            value: obj.id
        };
    });

    return dropdownArray;
};
