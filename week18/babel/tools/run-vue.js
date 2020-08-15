const compiler = require('@vue/compiler-sfc');

const output = compiler.compileTemplate({ filename: 'example.vue', source: '<div> hello world! </div>' });

console.log(output);