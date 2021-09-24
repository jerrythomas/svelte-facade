import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import facade from '../src/index.js'
import Count from './fixtures/counter.js'

const test = suite('env')

test('Should set up globals', () => {
	facade.setup()
	assert.equal(global.window, window)
	assert.equal(global.requestAnimationFrame, null)
})

test('Should reset document', () => {
	facade.reset()
	assert.equal(window.document.title, '')
	assert.equal(window.document.head.innerHTML, '')
	assert.equal(window.document.body.innerHTML, '')
})

test('Should render a component', async () => {
	facade.reset()
	const { container } = facade.render(Count)
	assert.snapshot(
		container.innerHTML,
		`<button id="decr">--</button> <span>5</span> <button id="incr">++</button>`
	)
})

test('Should fire an event', async () => {
	facade.reset()
	const { container } = facade.render(Count)

	assert.snapshot(
		container.innerHTML,
		`<button id="decr">--</button> <span>5</span> <button id="incr">++</button>`
	)

	await facade.fire(container.querySelector('#incr'), 'click')

	assert.snapshot(
		container.innerHTML,
		`<button id="decr">--</button> <span>6</span> <button id="incr">++</button>`
	)
})

test.run()
