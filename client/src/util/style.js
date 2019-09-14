import classNames from 'classnames/bind';

const styleGetter = style => (...names) =>
  classNames.bind(style)(...names); // TODO Franciskone: add test
export default styleGetter;
