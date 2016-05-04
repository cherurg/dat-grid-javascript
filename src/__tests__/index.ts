declare let global

import test from 'ava'
import jsdom = require('jsdom')
import datGrid, {_getHTMLElement} from '../index'

test.beforeEach(() => {
  global.document = jsdom.jsdom('<div id="paragraph">text!</div>')
})

test('_getHTMLElement finds existing element', t => t.truthy(_getHTMLElement('#paragraph')))

test(`_getHTMLElement throws exception if element doesn't exist`, t => t.throws(_getHTMLElement.bind(null, '.psdppdpd')))

/*
test(`delete this test`, t => {
  datGrid('#paragraph')()
  t.is(global.document.querySelector('#paragraph').innerHTML, 'hello!')
})
*/
