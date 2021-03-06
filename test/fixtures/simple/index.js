/**
 * @param {import('tape').Test} t
 * @param {import('../../../index.js').zone} zone
 * @param {import('unist').Node} tree
 */
export default function assertion(t, zone, tree) {
  t.test('range', function (st) {
    st.plan(5)

    zone(tree, 'foo', handle)

    /** @type {import('../../../index.js').Handler} */
    function handle(start, nodes, end) {
      st.equal(start.type, 'html')
      st.equal(start.value, '<!--foo start bar="baz"-->')
      st.deepEqual(nodes, [])
      st.equal(end.type, 'html')
      st.equal(end.value, '<!--foo end qux="quux"-->')
    }
  })
}
