import React from 'react';
import createEmotionStyled from 'create-emotion-styled';
import * as emotion from './kfEmotion';

export * from './kfEmotion';
export const styled = createEmotionStyled(emotion, React);
