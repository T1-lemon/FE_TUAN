import CloseIcon from '@mui/icons-material/Close'
import { Alert, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import '../assets/css/templates/auth_template.css'
import ButtonCustomize from '../components/ButtonCustomize'
import HeaderBoxLogo from '../components/header/HeaderBoxLogo'
import { useAppSelector } from '../redux/hooks'
import { clearMessage } from '../redux/slices/authSlice'
import { checkResponseSuccess } from '../utils/checkResponseStatus'

function AuthTemplate() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { status, message, isAuth, currentUser } = useAppSelector(
    (state) => state.auths
  )

  useEffect(() => {
    if (isAuth) {
      navigate('/home')
    }
    dispatch(clearMessage())
  }, [])

  useEffect(() => {
    if (JSON.stringify(currentUser) !== '{}') {
      navigate('/home')
    }
  }, [currentUser])

  const handleCloseAlert = () => {
    dispatch(clearMessage())
  }

  return (
    <>
      <div className='header'>
        <HeaderBoxLogo />
      </div>
      {message && !checkResponseSuccess(status) ? (
        <Box className='box__alert'>
          <Alert severity='error'>{message}</Alert>
          <ButtonCustomize
            icon={<CloseIcon fontSize='small' />}
            className='btn__alert--close'
            onClickBtn={handleCloseAlert}
          />
        </Box>
      ) : (
        <></>
      )}
      {message && checkResponseSuccess(status) ? (
        <Box className='box__alert'>
          <Alert severity='success'>{message}</Alert>
          <ButtonCustomize
            icon={<CloseIcon fontSize='small' />}
            className='btn__close'
            onClickBtn={handleCloseAlert}
          />
        </Box>
      ) : (
        <></>
      )}
      <Outlet />
    </>
  )
}

export default AuthTemplate
