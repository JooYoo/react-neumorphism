'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "/* -------------------------------------------------------------------------- */\n/*                                   button                                   */\n/* -------------------------------------------------------------------------- */\n.ButtonIsolation-module_host__3T5tD {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.6rem;\n  padding: 2rem;\n  border: 2px solid rgba(96, 125, 139, 0.1);\n  background-color: unset;\n  box-shadow: 3px 3px 5px #b4b4b4, -2px -2px 10px white;\n  overflow: hidden; }\n  .ButtonIsolation-module_host__3T5tD:active {\n    border: 2px solid rgba(96, 125, 139, 0.1);\n    background-color: #ebebeb;\n    box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px white; }\n    .ButtonIsolation-module_host__3T5tD:active .ButtonIsolation-module_txt__1DSrg {\n      color: black; }\n\n.ButtonIsolation-module_txt__1DSrg {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 2rem;\n  color: rgba(0, 0, 0, 0.7); }\n\n.ButtonIsolation-module_icon__bOGPi {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n  .ButtonIsolation-module_icon__bOGPi svg {\n    height: 2rem;\n    width: 2rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                    size                                    */\n/* -------------------------------------------------------------------------- */\n.ButtonIsolation-module_size--s__3_N9W {\n  padding: 1rem; }\n  .ButtonIsolation-module_size--s__3_N9W .ButtonIsolation-module_txt__1DSrg {\n    font-size: 1rem; }\n  .ButtonIsolation-module_size--s__3_N9W svg {\n    height: 1rem;\n    width: 1rem; }\n\n.ButtonIsolation-module_size--m__3sLPO {\n  padding: 2rem; }\n  .ButtonIsolation-module_size--m__3sLPO .ButtonIsolation-module_txt__1DSrg {\n    font-size: 2rem; }\n  .ButtonIsolation-module_size--m__3sLPO svg {\n    height: 2rem;\n    width: 2rem; }\n\n.ButtonIsolation-module_size--l__2Fm5a {\n  padding: 3rem; }\n  .ButtonIsolation-module_size--l__2Fm5a .ButtonIsolation-module_txt__1DSrg {\n    font-size: 3rem; }\n  .ButtonIsolation-module_size--l__2Fm5a svg {\n    height: 3rem;\n    width: 3rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                   variant                                  */\n/* -------------------------------------------------------------------------- */\n.ButtonIsolation-module_var__shape--round__KzJZg {\n  border-radius: 50%; }\n\n.ButtonIsolation-module_var__shape--rhombus__1sH5x {\n  transform: rotate(45deg); }\n  .ButtonIsolation-module_var__shape--rhombus__1sH5x .ButtonIsolation-module_txt__1DSrg {\n    transform: translate(-50%, -50%) rotate(-45deg); }\n  .ButtonIsolation-module_var__shape--rhombus__1sH5x .ButtonIsolation-module_icon__bOGPi {\n    transform: rotate(-45deg); }\n\n.ButtonIsolation-module_var__shape--convex__UB2NB {\n  overflow: hidden; }\n  .ButtonIsolation-module_var__shape--convex__UB2NB::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(145deg, white, #d7d7d7); }\n  .ButtonIsolation-module_var__shape--convex__UB2NB:active::before {\n    content: none; }\n\n.ButtonIsolation-module_var__border--thick__1ZUwF {\n  border: 6px solid rgba(96, 125, 139, 0.1); }\n  .ButtonIsolation-module_var__border--thick__1ZUwF:active {\n    border: 6px solid rgba(240, 240, 240, 0.5);\n    box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px gainsboro; }\n";
var style$1 = {"host":"ButtonIsolation-module_host__3T5tD","txt":"ButtonIsolation-module_txt__1DSrg","icon":"ButtonIsolation-module_icon__bOGPi","size--s":"ButtonIsolation-module_size--s__3_N9W","size--m":"ButtonIsolation-module_size--m__3sLPO","size--l":"ButtonIsolation-module_size--l__2Fm5a","var__shape--round":"ButtonIsolation-module_var__shape--round__KzJZg","var__shape--rhombus":"ButtonIsolation-module_var__shape--rhombus__1sH5x","var__shape--convex":"ButtonIsolation-module_var__shape--convex__UB2NB","var__border--thick":"ButtonIsolation-module_var__border--thick__1ZUwF"};
styleInject(css_248z$1);

var ButtonIsolation = function ButtonIsolation(props) {
  var small = props.small,
      middle = props.middle,
      large = props.large,
      text = props.text,
      round = props.round,
      rhombus = props.rhombus,
      thick = props.thick,
      convex = props.convex,
      children = props.children,
      onClick = props.onClick; // var

  var isRound = round ? 'var__shape--round' : '';
  var isRhombus = rhombus ? 'var__shape--rhombus' : '';
  var isThick = thick ? 'var__border--thick' : '';
  var isConvex = convex ? 'var__shape--convex' : ''; // btn size

  var isSmall = small ? 'size--s' : '';
  var isMiddle = middle ? 'size--m' : '';
  var isLarge = large ? 'size--l' : '';
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: "".concat(style$1['host'], " \n                  ").concat(style$1[isSmall], " \n                  ").concat(style$1[isMiddle], " \n                  ").concat(style$1[isLarge], " \n                  ").concat(style$1[isRound], " \n                  ").concat(style$1[isRhombus], " \n                  ").concat(style$1[isConvex], " \n                  ").concat(style$1[isThick]),
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: style$1.txt
  }, text), /*#__PURE__*/React__default['default'].createElement("span", {
    className: style$1.icon
  }, children));
};

var css_248z = "/* -------------------------------------------------------------------------- */\n/*                                   button                                   */\n/* -------------------------------------------------------------------------- */\n.Button-module_host__3jgSG {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.6rem;\n  padding: 2rem;\n  border: 2px solid rgba(96, 125, 139, 0.1);\n  background-color: unset;\n  box-shadow: 3px 3px 5px #b4b4b4, -2px -2px 10px white;\n  padding: 1rem 2rem; }\n  .Button-module_host__3jgSG:active {\n    border: 2px solid rgba(96, 125, 139, 0.1);\n    background-color: #ebebeb;\n    box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px white; }\n    .Button-module_host__3jgSG:active .Button-module_txt__3S1LE {\n      color: black; }\n\n.Button-module_txt__3S1LE {\n  font-size: 2rem;\n  color: rgba(0, 0, 0, 0.7); }\n\n.Button-module_icon__A6Ke4 {\n  padding-inline-end: 1.5rem; }\n  .Button-module_icon__A6Ke4 svg {\n    height: 2rem;\n    width: 2rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                    size                                    */\n/* -------------------------------------------------------------------------- */\n.Button-module_size--s__3XmAg {\n  padding: 1rem;\n  padding: 0.5rem 1rem; }\n  .Button-module_size--s__3XmAg .Button-module_txt__3S1LE {\n    font-size: 1rem; }\n  .Button-module_size--s__3XmAg svg {\n    height: 1rem;\n    width: 1rem; }\n  .Button-module_size--s__3XmAg.Button-module_var__icon-position--start__29dJ0 .Button-module_icon__A6Ke4 {\n    padding-inline-end: 0.75rem; }\n  .Button-module_size--s__3XmAg.Button-module_var__icon-position--end__30wbL {\n    flex-direction: row-reverse; }\n    .Button-module_size--s__3XmAg.Button-module_var__icon-position--end__30wbL .Button-module_icon__A6Ke4 {\n      padding-inline-end: unset;\n      padding-inline-start: 0.75rem; }\n\n.Button-module_size--m__1SDU8 {\n  padding: 2rem;\n  padding: 1rem 2rem; }\n  .Button-module_size--m__1SDU8 .Button-module_txt__3S1LE {\n    font-size: 2rem; }\n  .Button-module_size--m__1SDU8 svg {\n    height: 2rem;\n    width: 2rem; }\n  .Button-module_size--m__1SDU8.Button-module_var__icon-position--start__29dJ0 .Button-module_icon__A6Ke4 {\n    padding-inline-end: 1.5rem; }\n  .Button-module_size--m__1SDU8.Button-module_var__icon-position--end__30wbL {\n    flex-direction: row-reverse; }\n    .Button-module_size--m__1SDU8.Button-module_var__icon-position--end__30wbL .Button-module_icon__A6Ke4 {\n      padding-inline-end: unset;\n      padding-inline-start: 1.5rem; }\n\n.Button-module_size--l__1voTL {\n  padding: 3rem;\n  padding: 1.5rem 3rem; }\n  .Button-module_size--l__1voTL .Button-module_txt__3S1LE {\n    font-size: 3rem; }\n  .Button-module_size--l__1voTL svg {\n    height: 3rem;\n    width: 3rem; }\n  .Button-module_size--l__1voTL.Button-module_var__icon-position--start__29dJ0 .Button-module_icon__A6Ke4 {\n    padding-inline-end: 2.25rem; }\n  .Button-module_size--l__1voTL.Button-module_var__icon-position--end__30wbL {\n    flex-direction: row-reverse; }\n    .Button-module_size--l__1voTL.Button-module_var__icon-position--end__30wbL .Button-module_icon__A6Ke4 {\n      padding-inline-end: unset;\n      padding-inline-start: 2.25rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                   variant                                  */\n/* -------------------------------------------------------------------------- */\n.Button-module_var__shape--round__rh0Jn {\n  border-radius: 5rem; }\n\n.Button-module_var__shape--convex__1K5eP {\n  overflow: hidden; }\n  .Button-module_var__shape--convex__1K5eP::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(145deg, white, #d7d7d7); }\n  .Button-module_var__shape--convex__1K5eP .Button-module_txt__3S1LE {\n    z-index: 1; }\n  .Button-module_var__shape--convex__1K5eP:active::before {\n    content: none; }\n\n.Button-module_var__border--thick__3Al8G {\n  border: 6px solid rgba(96, 125, 139, 0.1); }\n  .Button-module_var__border--thick__3Al8G:active {\n    border: 6px solid rgba(240, 240, 240, 0.5);\n    box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px gainsboro; }\n\n.Button-module_var__icon-position--start__29dJ0 .Button-module_icon__A6Ke4 {\n  padding-inline-end: 1.5rem; }\n\n.Button-module_var__icon-position--end__30wbL {\n  flex-direction: row-reverse; }\n  .Button-module_var__icon-position--end__30wbL .Button-module_icon__A6Ke4 {\n    padding-inline-end: unset;\n    padding-inline-start: 1.5rem; }\n";
var style = {"host":"Button-module_host__3jgSG","txt":"Button-module_txt__3S1LE","icon":"Button-module_icon__A6Ke4","size--s":"Button-module_size--s__3XmAg","var__icon-position--start":"Button-module_var__icon-position--start__29dJ0","var__icon-position--end":"Button-module_var__icon-position--end__30wbL","size--m":"Button-module_size--m__1SDU8","size--l":"Button-module_size--l__1voTL","var__shape--round":"Button-module_var__shape--round__rh0Jn","var__shape--convex":"Button-module_var__shape--convex__1K5eP","var__border--thick":"Button-module_var__border--thick__3Al8G"};
styleInject(css_248z);

var Button = function Button(props) {
  var small = props.small,
      middle = props.middle,
      large = props.large,
      text = props.text,
      round = props.round,
      thick = props.thick,
      convex = props.convex,
      start = props.start,
      end = props.end,
      children = props.children,
      onClick = props.onClick; // var

  var isRound = round ? 'var__shape--round' : '';
  var isThick = thick ? 'var__border--thick' : '';
  var isConvex = convex ? 'var__shape--convex' : '';
  var isStart = start ? 'var__icon-position--start' : '';
  var isEnd = end ? 'var__icon-position--end' : ''; // size

  var isSmall = small ? 'size--s' : '';
  var isMiddle = middle ? 'size--m' : '';
  var isLarge = large ? 'size--l' : '';
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: "".concat(style['host'], "\n                        ").concat(style[isSmall], "\n                        ").concat(style[isMiddle], "\n                        ").concat(style[isLarge], "\n                        ").concat(style[isRound], "\n                        ").concat(style[isThick], "\n                        ").concat(style[isConvex], "\n                        ").concat(style[isStart], "\n                        ").concat(style[isEnd], " "),
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: style.icon
  }, children), /*#__PURE__*/React__default['default'].createElement("span", {
    className: style.txt
  }, text));
};

var components = function components() {
  return {
    ButtonIsolation: ButtonIsolation,
    Button: Button
  };
};

var index = components();

module.exports = index;
