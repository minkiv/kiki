import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from '~/app/store/hooks'
export const useProductRedux = () => {
    const data = useAppSelector((state: any) => state.client.productReducer as any, shallowEqual)
    const dispatch = useAppDispatch()

    const allActions = {
        // ...productActions,
        // getAllProduct,
        // getProductById
    }

    const actions = useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])

    return {
        data,
        actions
    }
}