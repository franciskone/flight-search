import classNames from 'classnames/bind';

export const styleGetter = style => (...names) =>
  classNames.bind(style)(...names);
