import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ItemCard } from '../ItemCard';

describe('ItemCard', () => {
    test('renders with pending styles correctly', () => {
        const item = {
            id: 1,
            title: 'Test Task',
            description: 'Test Description',
            status: 'Pending',
        };

        const { container } = render(<ItemCard item={item} />);
        
        const titleElement = container.querySelector('h4');
        const statusElement = container.querySelector('span');
        
        expect(titleElement.className).toContain('itemcard__title--pending');
        expect(statusElement.className).toContain('itemcard__status--pending');
    });

    test('renders with in-progress styles correctly', () => {
        const item = {
            id: 2,
            title: 'In Progress Task',
            description: 'Test Description',
            status: 'In Progress',
        };

        const { container } = render(<ItemCard item={item} />);
        
        const titleElement = container.querySelector('h4');
        const statusElement = container.querySelector('span');
        
        expect(titleElement.className).toContain('itemcard__title--in-progress');
        expect(statusElement.className).toContain('itemcard__status--in-progress');
    });

    test('renders with done styles correctly', () => {
        const item = {
            id: 3,
            title: 'Done Task',
            description: 'Test Description',
            status: 'Done',
        };

        const { container } = render(<ItemCard item={item} />);
        
        const titleElement = container.querySelector('h4');
        const statusElement = container.querySelector('span');
        
        expect(titleElement.className).toContain('itemcard__title--done');
        expect(statusElement.className).toContain('itemcard__status--done');
    });
});
