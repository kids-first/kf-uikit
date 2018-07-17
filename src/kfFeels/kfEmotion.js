import createEmotion from 'create-emotion';

const context = typeof global !== 'undefined' ? global : {};

if (context.__MY_EMOTION_INSTANCE__ === undefined) {
  context.__MY_EMOTION_INSTANCE__ = {};
}

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  caches
} = createEmotion(context.__MY_EMOTION_INSTANCE__, {
  // The key option is required when there will be multiple instances in a single app
  key: 'some-key'
});
