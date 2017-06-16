
// HACK: fix for typescript-fsa which assumes it runs in node
// @see: {@link: https://github.com/aikoven/typescript-fsa/issues/30}
// Uncomment below to fix!
// window['process'] = { env: { 'NODE_ENV': 'dev' }};

System.config({
	paths: {
    redux: 'node_modules/redux/dist/redux.min.js',
		'typescript-fsa': 'node_modules/typescript-fsa/lib/index.js',
    'typescript-fsa-reducers': 'node_modules/typescript-fsa-reducers/dist/index.js'
	}
});
