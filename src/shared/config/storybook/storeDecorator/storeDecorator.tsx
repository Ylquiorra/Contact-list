import { Story } from '@storybook/react';
import { StoreProvider, IStateSchema } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {};

function storeDecorator(
    state: DeepPartial<IStateSchema>,
    asyncReducer?: ReducersList,
) {
    // eslint-disable-next-line react/display-name
    return (StoryComponent: Story) => {
        return (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}
            >
                <StoryComponent />
            </StoreProvider>
        );
    };
}

export default storeDecorator;
