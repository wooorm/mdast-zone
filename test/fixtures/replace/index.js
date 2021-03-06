/**
 * @param {import('tape').Test} _
 * @param {import('../../../index.js').zone} zone
 * @param {import('unist').Node} tree
 */
export default function assertion(_, zone, tree) {
  zone(tree, 'foo', handle)

  function handle() {
    return [
      {
        type: 'heading',
        depth: 2,
        children: [{type: 'text', value: 'Bar'}]
      }
    ]
  }
}
