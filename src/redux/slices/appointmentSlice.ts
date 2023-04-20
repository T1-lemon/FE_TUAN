import { createSlice } from '@reduxjs/toolkit'

import { AppointmentInforInterface } from '../../interface/AppointmentInterface'
import { getListAppointment } from '../thunk/appointmentThunk'

interface AppointmentState {
  listAppointments: AppointmentInforInterface[]
  loadingAppointment: boolean
}
const initialState: AppointmentState = {
  listAppointments: [],
  loadingAppointment: false
}

export const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListAppointment.pending, (state) => {
        state.loadingAppointment = true
      })
      .addCase(getListAppointment.fulfilled, (state, action: any) => {
        state.loadingAppointment = false
        state.listAppointments = action.payload
      })
  }
})

const appointmentReducer = appointmentSlice.reducer
export default appointmentReducer
