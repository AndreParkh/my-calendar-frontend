import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState } from '@/store/types.ts'
import { authorizedUserThunk } from '@/store/thunks/authorizedUserThunk.ts'
import { IUserResponse } from '@/interfaces/UserResponse.interface.ts'

const initialState: IUserState = {
  authorizedUser: null,
  loading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authorizedUserThunk.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(
        authorizedUserThunk.fulfilled,
        (state, action: PayloadAction<IUserResponse>) => {
          state.authorizedUser = action.payload
          state.loading = false
          state.error = ''
        },
      )
      .addCase(
        authorizedUserThunk.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false
          state.error =
            action.payload || 'Ошибка при загрузки авторизованного пользователя'
        },
      )
  },
})

export default userSlice.reducer
