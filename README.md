# svelte-facade

A minimal facade for testing svelte components borrowed from [lukeed/uvu](https://github.com/lukeed/uvu/tree/master/examples/svelte).

## Usage

```bash
npm i --save-dev svelte-facade
```

In your component tests

```js
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import facade from 'svelte-facade'

test.before(facade.setup)
test.before.each(facade.reset)

test('should render', () => {
  const { container } = facade.render(Count)

  assert.snapshot(
    container.innerHTML,
    `<button id="decr">--</button> <span>5</span> <button id="incr">++</button>`
  )
})

test.run()
```

## To Do

- Support mock events to test custom events and the payload
