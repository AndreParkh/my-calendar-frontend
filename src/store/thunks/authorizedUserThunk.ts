import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '@/api/API.ts'
import { IUserResponse } from '@/interfaces/UserResponse.interface.ts'

export const authorizedUserThunk = createAsyncThunk<
  IUserResponse,
  void,
  { rejectValue: string }
>('user/authorizedUser', async (_, thunkAPI) => {
  try {
    const response = await API.user.getAuthorizedUser()
    return response.data
  } catch {
    return thunkAPI.rejectWithValue(
      'Ошибка при загрузке авторизованного пользователя',
    )
  }
})
