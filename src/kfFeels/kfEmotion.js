import createEmotion from 'create-emotion';

const context = typeof global !== 'undefined' ? global : {};

if (context.KF_EMOTION_INSTANCE === undefined) {
  context.KF_EMOTION_INSTANCE = {};
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
  caches,
} = createEmotion(context.KF_EMOTION_INSTANCE, {
  // The key option is required when there will be multiple instances in a single app
  key: 'kf-uikit',
});
