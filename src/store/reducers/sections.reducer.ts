import sections from 'sections.json';
import type {Section} from '../types/section.types';

export type SectionsState = Section[];

const initialState = sections as SectionsState;

export const sectionsReducer = (state: SectionsState = initialState) => {
    return state;
}

