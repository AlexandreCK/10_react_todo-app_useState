import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ItemsList } from '../ItemsList';

describe('ItemsList', () => {
    test('renders the correct number of items', () => {
        const mockItems = [
            {
                id: 1,
                title: 'Task 1',
                description: 'Description 1',
                status: 'Pending',
            },
            {
                id: 2,
                title: 'Task 2',
                description: 'Description 2',
                status: 'In Progress',
            },
        ];

        const { container } = render(<ItemsList itemsList={mockItems} />);
        const items = container.querySelectorAll('li');

        expect(items.length).toBe(2);
    });

    test('renders empty list when no items provided', () => {
        const { container } = render(<ItemsList itemsList={[]} />);

        const items = container.querySelectorAll('li');

        expect(items.length).toBe(0);
    });
});
