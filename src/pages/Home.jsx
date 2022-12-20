import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'
import './styles/home.css'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerGlobal(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')
  }

  return (
    <div className='home__ini' >
      <img className='home__img' src="/Home/pokedex.png" alt="" />
      <h1 className='home__trainer' >Hi trainer</h1>
      <p className='hom__msj' >give me your name to start</p>
      <form onSubmit={handleSubmit} action="">
        <input id='name' type="text" />
        <button className='home__btn' >start</button>
      </form>
    </div>
  )
}

export default Home