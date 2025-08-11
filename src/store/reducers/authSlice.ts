import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/store/types.ts'
import { login } from '@/store/thunks/loginThunk.ts'

const initialState: AuthState = {
  token: null,
  loading: false,
  error: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<typeof initialState.token>) => {
      state.token = action.payload
    },
    clearAuthError: (state) => {
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload
        state.loading = false
        state.error = ''
      })
      .addCase(
        login.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false
          state.error = action.payload || 'Ошибка авторизации'
        },
      )
  },
})

export const { clearAuthError, setToken } = authSlice.actions
export default authSlice.reducer
