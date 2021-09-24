/* file:///src/components/Count.svelte generated by Svelte v3.42.6 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	space,
	text,
} from 'svelte/internal'

function create_fragment(ctx) {
	let button0
	let t1
	let span
	let t2
	let t3
	let button1
	let mounted
	let dispose

	return {
		c() {
			button0 = element('button')
			button0.textContent = '--'
			t1 = space()
			span = element('span')
			t2 = text(/*count*/ ctx[0])
			t3 = space()
			button1 = element('button')
			button1.textContent = '++'
			attr(button0, 'id', 'decr')
			attr(button1, 'id', 'incr')
		},
		m(target, anchor) {
			insert(target, button0, anchor)
			insert(target, t1, anchor)
			insert(target, span, anchor)
			append(span, t2)
			insert(target, t3, anchor)
			insert(target, button1, anchor)

			if (!mounted) {
				dispose = [
					listen(button0, 'click', /*decrement*/ ctx[2]),
					listen(button1, 'click', /*increment*/ ctx[1]),
				]

				mounted = true
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*count*/ 1) set_data(t2, /*count*/ ctx[0])
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(button0)
			if (detaching) detach(t1)
			if (detaching) detach(span)
			if (detaching) detach(t3)
			if (detaching) detach(button1)
			mounted = false
			run_all(dispose)
		},
	}
}

function instance($$self, $$props, $$invalidate) {
	let { count = 5 } = $$props

	function increment() {
		$$invalidate(0, count++, count)
	}

	function decrement() {
		$$invalidate(0, count--, count)
	}

	$$self.$$set = ($$props) => {
		if ('count' in $$props) $$invalidate(0, (count = $$props.count))
	}

	return [count, increment, decrement]
}

class Count extends SvelteComponent {
	constructor(options) {
		super()
		init(this, options, instance, create_fragment, safe_not_equal, { count: 0 })
	}
}

export default Count
