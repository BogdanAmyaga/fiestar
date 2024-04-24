import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter.test', () => {
    test('should return counter value', () => {
        //! DeepPartial - нам не надо объявлять все поля, достаточно только StateSchema, только
        // ! конкретный кусочек
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
