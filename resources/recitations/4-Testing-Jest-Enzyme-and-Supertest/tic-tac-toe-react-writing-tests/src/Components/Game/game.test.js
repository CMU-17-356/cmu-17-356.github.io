import React from 'react'
import Game from './game'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />);
});

it('renders game status correctly', () => {
  const wrapper = mount(<Game/>)
  const firstPlayer = wrapper.find('div.game-info').children().first().text()
  expect(firstPlayer).toEqual('Next player: X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  const secondPlayer = wrapper.find('div.game-info').children().first().text()
  expect(secondPlayer).toEqual('Next player: O')

  //player 2
  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click')
  //player 1
  const turn3 = wrapper.find('button.square').at(4)
  turn3.simulate('click')
  //player 2
  const turn4 = wrapper.find('button.square').at(5)
  turn4.simulate('click')
  //player 1
  const turn5 = wrapper.find('button.square').at(8)
  turn5.simulate('click')
  const winner = wrapper.find('div.game-info').children().first().text()
  expect(winner).toEqual('Winner: X')
})