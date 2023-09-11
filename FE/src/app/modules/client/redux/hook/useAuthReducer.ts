import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from '~/app/store/hooks'
import { actions as cartAction } from "../reducer/authSlice/authSlice"
export const useAuthRedux = () => {
    const data = useAppSelector((state: any) => state.client.authReducer as any, shallowEqual)
    const dispatch = useAppDispatch()
    const allActions = {
        ...cartAction,
    }
    const actions = useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
    return {
        data,
        actions
    }
}