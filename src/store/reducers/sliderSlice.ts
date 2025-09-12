import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SliderState } from '@/store/types.ts'
import { slides } from '@/components/Slider/slides.ts'

const initialState: SliderState = {
  sliderNumber: 0,
  slidesCount: slides.length,
}

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    goToSlide: (
      state,
      action: PayloadAction<typeof initialState.sliderNumber>,
    ) => {
      state.sliderNumber = action.payload
    },
  },
})

export const { goToSlide } = sliderSlice.actions
export default sliderSlice.reducer
