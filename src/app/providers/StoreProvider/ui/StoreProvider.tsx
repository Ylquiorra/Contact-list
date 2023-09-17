import React from 'react'
import { Provider } from 'react-redux'
import IStateSchema from '../types/IStateSchema'
import createReduxStore from '../config/store'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface IStoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: ReducersList
}

const StoreProvider: React.FC<IStoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}: IStoreProviderProps) => {
  const store = createReduxStore(initialState as IStateSchema)

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
