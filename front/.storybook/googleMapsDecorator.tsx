import React from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { googleMapsApiConfig } from './maps.config'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'

const googlemapsReactWrapperDecorator = (Story) => {
  const render = (status: Status) => {
    if (status === Status.LOADING) return <h3>Loading ...</h3>
    return <></>
  }

  return (
    <Provider store={store}>
      <Wrapper {...googleMapsApiConfig} render={render}>
        <Story />
      </Wrapper>
    </Provider>
  )
}

export default googlemapsReactWrapperDecorator