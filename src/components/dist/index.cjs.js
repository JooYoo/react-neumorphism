'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

var css_248z$4 = "/* -------------------------------------------------------------------------- */\n/*                                   button                                   */\n/* -------------------------------------------------------------------------- */\n/* -------------------------------------------------------------------------- */\n/*                                  TextBlock                                 */\n/* -------------------------------------------------------------------------- */\n.ButtonIsolation-module_host__3T5tD {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid rgba(96, 125, 139, 0.1);\n  border-radius: 0.6rem;\n  background-color: unset;\n  box-shadow: 3px 3px 5px #b4b4b4, -2px -2px 10px white;\n  padding: 2rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  overflow: hidden; }\n  .ButtonIsolation-module_host__3T5tD:active {\n    border: 2px solid rgba(96, 125, 139, 0.1);\n    border-radius: 0.6rem;\n    background-color: rgba(239, 238, 238, 0.5);\n    box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px white; }\n    .ButtonIsolation-module_host__3T5tD:active .ButtonIsolation-module_txt__1DSrg {\n      color: black; }\n\n.ButtonIsolation-module_txt__1DSrg {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 2rem;\n  color: rgba(0, 0, 0, 0.7); }\n\n.ButtonIsolation-module_icon__bOGPi {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n  .ButtonIsolation-module_icon__bOGPi svg {\n    height: 2rem;\n    width: 2rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                    size                                    */\n/* -------------------------------------------------------------------------- */\n.ButtonIsolation-module_size--s__3_N9W {\n  padding: 1rem; }\n  .ButtonIsolation-module_size--s__3_N9W .ButtonIsolation-module_txt__1DSrg {\n    font-size: 1rem; }\n  .ButtonIsolation-module_size--s__3_N9W svg {\n    height: 1rem;\n    width: 1rem; }\n\n.ButtonIsolation-module_size--m__3sLPO {\n  padding: 2rem; }\n  .ButtonIsolation-module_size--m__3sLPO .ButtonIsolation-module_txt__1DSrg {\n    font-size: 2rem; }\n  .ButtonIsolation-module_size--m__3sLPO svg {\n    height: 2rem;\n    width: 2rem; }\n\n.ButtonIsolation-module_size--l__2Fm5a {\n  padding: 3rem; }\n  .ButtonIsolation-module_size--l__2Fm5a .ButtonIsolation-module_txt__1DSrg {\n    font-size: 3rem; }\n  .ButtonIsolation-module_size--l__2Fm5a svg {\n    height: 3rem;\n    width: 3rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                   variant                                  */\n/* -------------------------------------------------------------------------- */\n.ButtonIsolation-module_var__shape--round__KzJZg {\n  border-radius: 50%; }\n  .ButtonIsolation-module_var__shape--round__KzJZg:active {\n    border-radius: 50%; }\n\n.ButtonIsolation-module_var__shape--rhombus__1sH5x {\n  transform: rotate(45deg); }\n  .ButtonIsolation-module_var__shape--rhombus__1sH5x .ButtonIsolation-module_txt__1DSrg {\n    transform: translate(-50%, -50%) rotate(-45deg); }\n  .ButtonIsolation-module_var__shape--rhombus__1sH5x .ButtonIsolation-module_icon__bOGPi {\n    transform: rotate(-45deg); }\n\n.ButtonIsolation-module_var__shape--convex__UB2NB {\n  overflow: hidden; }\n  .ButtonIsolation-module_var__shape--convex__UB2NB::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(145deg, white, #d7d7d7); }\n  .ButtonIsolation-module_var__shape--convex__UB2NB:active::before {\n    content: none; }\n\n.ButtonIsolation-module_var__border--thick__1ZUwF {\n  border: 6px solid rgba(96, 125, 139, 0.1); }\n  .ButtonIsolation-module_var__border--thick__1ZUwF:active {\n    border: 6px solid rgba(240, 240, 240, 0.5);\n    box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px gainsboro; }\n";
var style$4 = {"host":"ButtonIsolation-module_host__3T5tD","txt":"ButtonIsolation-module_txt__1DSrg","icon":"ButtonIsolation-module_icon__bOGPi","size--s":"ButtonIsolation-module_size--s__3_N9W","size--m":"ButtonIsolation-module_size--m__3sLPO","size--l":"ButtonIsolation-module_size--l__2Fm5a","var__shape--round":"ButtonIsolation-module_var__shape--round__KzJZg","var__shape--rhombus":"ButtonIsolation-module_var__shape--rhombus__1sH5x","var__shape--convex":"ButtonIsolation-module_var__shape--convex__UB2NB","var__border--thick":"ButtonIsolation-module_var__border--thick__1ZUwF"};
styleInject(css_248z$4);

var ButtonIsolation = function ButtonIsolation(props) {
  var size = props.size,
      icon = props.icon,
      text = props.text,
      round = props.round,
      rhombus = props.rhombus,
      thick = props.thick,
      convex = props.convex,
      onClick = props.onClick; // var

  var isRound = round ? 'var__shape--round' : '';
  var isRhombus = rhombus ? 'var__shape--rhombus' : '';
  var isThick = thick ? 'var__border--thick' : '';
  var isConvex = convex ? 'var__shape--convex' : ''; // btn size

  var isSmall = size === 'small' ? 'size--s' : '';
  var isMiddle = size === 'middle' ? 'size--m' : '';
  var isLarge = size === 'large' ? 'size--l' : '';
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: "".concat(style$4['host'], "\n                  ").concat(style$4[isSmall], "\n                  ").concat(style$4[isMiddle], "\n                  ").concat(style$4[isLarge], "\n                  ").concat(style$4[isRound], "\n                  ").concat(style$4[isRhombus], "\n                  ").concat(style$4[isConvex], "\n                  ").concat(style$4[isThick]),
    onClick: onClick
  }, icon ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: style$4.icon
  }, icon) : /*#__PURE__*/React__default['default'].createElement("span", {
    className: style$4.txt
  }, text));
};
/* ---------------------------------- Types ---------------------------------- */

ButtonIsolation.propTypes = {
  /**
   * The size of the button
   */
  size: PropTypes__default['default'].oneOf(['small', 'middle', 'large']),

  /**
   * `react-icons` as rendered component
   */
  icon: PropTypes__default['default'].element,

  /**
   * The **Text** content of the button
   */
  text: PropTypes__default['default'].string,

  /**
   * The shape of the button will be round.
   */
  round: PropTypes__default['default'].bool,

  /**
   * The shape of the button will be rhombus.
   */
  rhombus: PropTypes__default['default'].bool,

  /**
   * The border of the button will be thick.
   */
  thick: PropTypes__default['default'].bool,

  /**
   * The button will have a convex effect.
   */
  convex: PropTypes__default['default'].bool,

  /**
   * Pass EventHandler to handle ClickEvent
   */
  onClick: PropTypes__default['default'].func
};
ButtonIsolation.defaultProps = {
  size: 'middle',
  icon: undefined,
  text: 'H',
  round: false,
  rhombus: false,
  thick: false,
  convex: false,
  onClick: undefined
};

var css_248z$3 = "/* -------------------------------------------------------------------------- */\n/*                                   button                                   */\n/* -------------------------------------------------------------------------- */\n/* -------------------------------------------------------------------------- */\n/*                                  TextBlock                                 */\n/* -------------------------------------------------------------------------- */\n.Button-module_host__3jgSG {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid rgba(96, 125, 139, 0.1);\n  border-radius: 0.6rem;\n  background-color: unset;\n  box-shadow: 3px 3px 5px #b4b4b4, -2px -2px 10px white;\n  padding: 1rem 2rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n  .Button-module_host__3jgSG:active {\n    border: 2px solid rgba(96, 125, 139, 0.1);\n    border-radius: 0.6rem;\n    background-color: rgba(239, 238, 238, 0.5);\n    box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px white; }\n    .Button-module_host__3jgSG:active .Button-module_txt__3S1LE {\n      color: black; }\n\n.Button-module_txt__3S1LE {\n  font-size: 2rem;\n  color: rgba(0, 0, 0, 0.7); }\n\n.Button-module_icon__A6Ke4 {\n  padding-inline-end: 1.5rem; }\n  .Button-module_icon__A6Ke4 svg {\n    height: 2rem;\n    width: 2rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                    size                                    */\n/* -------------------------------------------------------------------------- */\n.Button-module_size--s__3XmAg {\n  padding: 1rem;\n  padding: 0.5rem 1rem; }\n  .Button-module_size--s__3XmAg .Button-module_txt__3S1LE {\n    font-size: 1rem; }\n  .Button-module_size--s__3XmAg svg {\n    height: 1rem;\n    width: 1rem; }\n  .Button-module_size--s__3XmAg.Button-module_var__icon-position--start__29dJ0 .Button-module_icon__A6Ke4 {\n    padding-inline-end: 0.75rem; }\n  .Button-module_size--s__3XmAg.Button-module_var__icon-position--end__30wbL {\n    flex-direction: row-reverse; }\n    .Button-module_size--s__3XmAg.Button-module_var__icon-position--end__30wbL .Button-module_icon__A6Ke4 {\n      padding-inline-end: unset;\n      padding-inline-start: 0.75rem; }\n\n.Button-module_size--m__1SDU8 {\n  padding: 2rem;\n  padding: 1rem 2rem; }\n  .Button-module_size--m__1SDU8 .Button-module_txt__3S1LE {\n    font-size: 2rem; }\n  .Button-module_size--m__1SDU8 svg {\n    height: 2rem;\n    width: 2rem; }\n  .Button-module_size--m__1SDU8.Button-module_var__icon-position--start__29dJ0 .Button-module_icon__A6Ke4 {\n    padding-inline-end: 1.5rem; }\n  .Button-module_size--m__1SDU8.Button-module_var__icon-position--end__30wbL {\n    flex-direction: row-reverse; }\n    .Button-module_size--m__1SDU8.Button-module_var__icon-position--end__30wbL .Button-module_icon__A6Ke4 {\n      padding-inline-end: unset;\n      padding-inline-start: 1.5rem; }\n\n.Button-module_size--l__1voTL {\n  padding: 3rem;\n  padding: 1.5rem 3rem; }\n  .Button-module_size--l__1voTL .Button-module_txt__3S1LE {\n    font-size: 3rem; }\n  .Button-module_size--l__1voTL svg {\n    height: 3rem;\n    width: 3rem; }\n  .Button-module_size--l__1voTL.Button-module_var__icon-position--start__29dJ0 .Button-module_icon__A6Ke4 {\n    padding-inline-end: 2.25rem; }\n  .Button-module_size--l__1voTL.Button-module_var__icon-position--end__30wbL {\n    flex-direction: row-reverse; }\n    .Button-module_size--l__1voTL.Button-module_var__icon-position--end__30wbL .Button-module_icon__A6Ke4 {\n      padding-inline-end: unset;\n      padding-inline-start: 2.25rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                   variant                                  */\n/* -------------------------------------------------------------------------- */\n.Button-module_var__shape--round__rh0Jn {\n  border-radius: 5rem; }\n  .Button-module_var__shape--round__rh0Jn:active {\n    border-radius: 5rem; }\n\n.Button-module_var__shape--convex__1K5eP {\n  overflow: hidden; }\n  .Button-module_var__shape--convex__1K5eP::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(145deg, white, #d7d7d7); }\n  .Button-module_var__shape--convex__1K5eP .Button-module_txt__3S1LE {\n    z-index: 1; }\n  .Button-module_var__shape--convex__1K5eP:active::before {\n    content: none; }\n\n.Button-module_var__border--thick__3Al8G {\n  border: 6px solid rgba(96, 125, 139, 0.1); }\n  .Button-module_var__border--thick__3Al8G:active {\n    border: 6px solid rgba(240, 240, 240, 0.5);\n    box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px gainsboro; }\n\n.Button-module_var__icon-position--start__29dJ0 .Button-module_icon__A6Ke4 {\n  padding-inline-end: 1.5rem; }\n\n.Button-module_var__icon-position--end__30wbL {\n  flex-direction: row-reverse; }\n  .Button-module_var__icon-position--end__30wbL .Button-module_icon__A6Ke4 {\n    padding-inline-end: unset;\n    padding-inline-start: 1.5rem; }\n";
var style$3 = {"host":"Button-module_host__3jgSG","txt":"Button-module_txt__3S1LE","icon":"Button-module_icon__A6Ke4","size--s":"Button-module_size--s__3XmAg","var__icon-position--start":"Button-module_var__icon-position--start__29dJ0","var__icon-position--end":"Button-module_var__icon-position--end__30wbL","size--m":"Button-module_size--m__1SDU8","size--l":"Button-module_size--l__1voTL","var__shape--round":"Button-module_var__shape--round__rh0Jn","var__shape--convex":"Button-module_var__shape--convex__1K5eP","var__border--thick":"Button-module_var__border--thick__3Al8G"};
styleInject(css_248z$3);

var Button = function Button(props) {
  var size = props.size,
      icon = props.icon,
      text = props.text,
      round = props.round,
      thick = props.thick,
      convex = props.convex,
      start = props.start,
      end = props.end,
      onClick = props.onClick; // var

  var isRound = round ? 'var__shape--round' : '';
  var isThick = thick ? 'var__border--thick' : '';
  var isConvex = convex ? 'var__shape--convex' : '';
  var isStart = start ? 'var__icon-position--start' : '';
  var isEnd = end ? 'var__icon-position--end' : ''; // size

  var isSmall = size === 'small' ? 'size--s' : '';
  var isMiddle = size === 'middle' ? 'size--m' : '';
  var isLarge = size === 'large' ? 'size--l' : '';
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: "".concat(style$3['host'], "\n                  ").concat(style$3[isSmall], "\n                  ").concat(style$3[isMiddle], "\n                  ").concat(style$3[isLarge], "\n                  ").concat(style$3[isRound], "\n                  ").concat(style$3[isThick], "\n                  ").concat(style$3[isConvex], "\n                  ").concat(style$3[isStart], "\n                  ").concat(style$3[isEnd], " "),
    onClick: onClick
  }, icon ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "".concat(style$3.icon)
  }, icon) : '', /*#__PURE__*/React__default['default'].createElement("span", {
    className: style$3.txt
  }, text));
};
/* ---------------------------------- Types --------------------------------- */

Button.propTypes = {
  /**
   * The size of the button
   */
  size: PropTypes__default['default'].oneOf(['small', 'middle', 'large']),

  /**
   * `react-icons` as rendered component
   */
  icon: PropTypes__default['default'].element,

  /**
   * The **Text** content of the button
   */
  text: PropTypes__default['default'].string,

  /**
   * The shape of the button will be round.
   */
  round: PropTypes__default['default'].bool,

  /**
   * The border of the button will be thick.
   */
  thick: PropTypes__default['default'].bool,

  /**
   * The button will have a convex effect.
   */
  convex: PropTypes__default['default'].bool,

  /**
   * The icon is in the beginning.
   */
  // start: PropTypes.bool,

  /**
   * The icon is in the end,
   */
  end: PropTypes__default['default'].bool,

  /**
   * Pass EventHandler to handle ClickEvent
   */
  onClick: PropTypes__default['default'].func
};
Button.defaultProps = {
  size: 'middle',
  icon: undefined,
  text: 'Press',
  round: false,
  thick: false,
  convex: false,
  // start: false,
  end: false,
  onClick: undefined
};

var css_248z$2 = "/* -------------------------------------------------------------------------- */\n/*                                   button                                   */\n/* -------------------------------------------------------------------------- */\n/* -------------------------------------------------------------------------- */\n/*                                  TextBlock                                 */\n/* -------------------------------------------------------------------------- */\n.Bg-module_host__3TGCQ {\n  height: 100%;\n  width: 100%;\n  background-color: #efeeee; }\n\n.Bg-module_center--flex-row__1Y2WR {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.Bg-module_center--flex-column__2S0V0 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n";
var style$2 = {"host":"Bg-module_host__3TGCQ","center--flex-row":"Bg-module_center--flex-row__1Y2WR","center--flex-column":"Bg-module_center--flex-column__2S0V0"};
styleInject(css_248z$2);

var Bg = function Bg(props) {
  var centerRow = props.centerRow,
      centerColumn = props.centerColumn,
      padding = props.padding,
      children = props.children;
  var isCenterRow = centerRow ? 'center--flex-row' : '';
  var isCenterColumn = centerColumn ? 'center--flex-column' : '';
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(style$2.host, " \n                  ").concat(style$2[isCenterRow], "\n                  ").concat(style$2[isCenterColumn]),
    style: {
      padding: "".concat(padding)
    }
  }, children);
};

var css_248z$1 = "/* -------------------------------------------------------------------------- */\n/*                                   button                                   */\n/* -------------------------------------------------------------------------- */\n/* -------------------------------------------------------------------------- */\n/*                                  TextBlock                                 */\n/* -------------------------------------------------------------------------- */\n.TextBlock-module_host__NOxyt {\n  border: 2px solid rgba(96, 125, 139, 0.1);\n  border-radius: 0.6rem;\n  background-color: rgba(239, 238, 238, 0.5);\n  box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px white;\n  padding: 1.8rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; }\n\n.TextBlock-module_container__title-icon__3imw2 {\n  display: flex;\n  align-items: center; }\n\n.TextBlock-module_icon__3GGwj {\n  margin-inline-end: 1rem;\n  padding-bottom: 1rem;\n  font-size: 1.3rem; }\n\n.TextBlock-module_title__jTIUF {\n  margin: unset;\n  font-size: 1.5rem;\n  padding-bottom: 1.5rem; }\n\n.TextBlock-module_txt__2QntZ {\n  margin: unset;\n  font-size: 1rem;\n  line-height: 1.5rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                    size                                    */\n/* -------------------------------------------------------------------------- */\n.TextBlock-module_size--s__3wbGJ {\n  padding: 1.8rem; }\n  .TextBlock-module_size--s__3wbGJ .TextBlock-module_icon__3GGwj {\n    margin-inline-end: 1rem;\n    padding-bottom: 1rem;\n    font-size: 1.3rem; }\n  .TextBlock-module_size--s__3wbGJ .TextBlock-module_title__jTIUF {\n    margin: unset;\n    font-size: 1.5rem;\n    padding-bottom: 1.5rem; }\n  .TextBlock-module_size--s__3wbGJ .TextBlock-module_txt__2QntZ {\n    margin: unset;\n    font-size: 1rem;\n    line-height: 1.5rem; }\n\n.TextBlock-module_size--m__1fbI6 {\n  padding: 2.4rem; }\n  .TextBlock-module_size--m__1fbI6 .TextBlock-module_icon__3GGwj {\n    margin-inline-end: 1.5rem;\n    padding-bottom: 1.5rem;\n    font-size: 1.8rem; }\n  .TextBlock-module_size--m__1fbI6 .TextBlock-module_title__jTIUF {\n    margin: unset;\n    font-size: 2rem;\n    padding-bottom: 2rem; }\n  .TextBlock-module_size--m__1fbI6 .TextBlock-module_txt__2QntZ {\n    margin: unset;\n    font-size: 2rem;\n    line-height: 3rem; }\n\n.TextBlock-module_size--l__JfZaI {\n  padding: 3.6rem; }\n  .TextBlock-module_size--l__JfZaI .TextBlock-module_icon__3GGwj {\n    margin-inline-end: 2rem;\n    padding-bottom: 2rem;\n    font-size: 2.3rem; }\n  .TextBlock-module_size--l__JfZaI .TextBlock-module_title__jTIUF {\n    margin: unset;\n    font-size: 3rem;\n    padding-bottom: 3rem; }\n  .TextBlock-module_size--l__JfZaI .TextBlock-module_txt__2QntZ {\n    margin: unset;\n    font-size: 3rem;\n    line-height: 4.5rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                   variant                                  */\n/* -------------------------------------------------------------------------- */\n.TextBlock-module_var__txt-align--right__3n3NX {\n  direction: rtl; }\n\n.TextBlock-module_var__txt-align--center__6W94d {\n  text-align: center; }\n  .TextBlock-module_var__txt-align--center__6W94d .TextBlock-module_container__title-icon__3imw2 {\n    justify-content: center; }\n\n.TextBlock-module_var__txt-oneline__1Q2cl {\n  white-space: nowrap;\n  overflow: hidden; }\n  .TextBlock-module_var__txt-oneline__1Q2cl .TextBlock-module_txt__2QntZ {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n";
var style$1 = {"host":"TextBlock-module_host__NOxyt","container__title-icon":"TextBlock-module_container__title-icon__3imw2","icon":"TextBlock-module_icon__3GGwj","title":"TextBlock-module_title__jTIUF","txt":"TextBlock-module_txt__2QntZ","size--s":"TextBlock-module_size--s__3wbGJ","size--m":"TextBlock-module_size--m__1fbI6","size--l":"TextBlock-module_size--l__JfZaI","var__txt-align--right":"TextBlock-module_var__txt-align--right__3n3NX","var__txt-align--center":"TextBlock-module_var__txt-align--center__6W94d","var__txt-oneline":"TextBlock-module_var__txt-oneline__1Q2cl"};
styleInject(css_248z$1);

var TextBlock = function TextBlock(props) {
  var size = props.size,
      title = props.title,
      titleIcon = props.titleIcon,
      right = props.right,
      center = props.center,
      oneline = props.oneline,
      children = props.children; // size

  var isSmall = size === 'small' ? 'size--s' : '';
  var isMiddle = size === 'middle' ? 'size--m' : '';
  var isLarge = size === 'large' ? 'size--l' : ''; // align

  var isTxtRight = right ? 'var__txt-align--right' : '';
  var isTxtCenter = center ? 'var__txt-align--center' : ''; // var

  var isOneline = oneline ? 'var__txt-oneline' : '';
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(style$1.host, "\n                  ").concat(style$1[isSmall], "\n                  ").concat(style$1[isMiddle], "\n                  ").concat(style$1[isLarge], "\n                  ").concat(style$1[isTxtRight], "\n                  ").concat(style$1[isTxtCenter], "\n                  ").concat(style$1[isOneline])
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: style$1['container__title-icon']
  }, titleIcon ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "".concat(style$1.icon)
  }, titleIcon) : '', title ? /*#__PURE__*/React__default['default'].createElement("h3", {
    className: "".concat(style$1.title)
  }, title) : ''), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "".concat(style$1.txt)
  }, children));
};
/* ---------------------------------- Types --------------------------------- */

TextBlock.propTypes = {
  /**
   * The size of the TextBlock
   */
  size: PropTypes__default['default'].oneOf(['small', 'middle', 'large']),

  /**
   * The title of the TextBlock, default is undefined.
   */
  title: PropTypes__default['default'].string,

  /**
   * The icon next to title, default is undefined.
   */
  titleIcon: PropTypes__default['default'].element,

  /**
   * All the text right alignment.
   */
  right: PropTypes__default['default'].bool,

  /**
   * All the text is centered horizontally.
   */
  center: PropTypes__default['default'].bool,

  /**
   * Disaply only one line text.
   */
  oneline: PropTypes__default['default'].bool,

  /**
   * The text itself,
   */
  children: PropTypes__default['default'].string
};
TextBlock.defaultProps = {
  size: 'small',
  title: undefined,
  titleIcon: undefined,
  right: false,
  center: false,
  oneline: false,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque sit voluptates modi ducimus? Reprehenderit a illo id impedit voluptate!'
};

var css_248z = "/* -------------------------------------------------------------------------- */\n/*                                   button                                   */\n/* -------------------------------------------------------------------------- */\n/* -------------------------------------------------------------------------- */\n/*                                  TextBlock                                 */\n/* -------------------------------------------------------------------------- */\n.TextBox-module_host__127ry {\n  margin: 1rem;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content; }\n\n.TextBox-module_label__3Ro9E {\n  display: block;\n  margin-bottom: 0.5rem;\n  margin-left: 0.25rem;\n  font-size: 0.9rem; }\n\n.TextBox-module_input-box__2O9rD {\n  border: 2px solid rgba(96, 125, 139, 0.1);\n  border-radius: 0.6rem;\n  background-color: rgba(239, 238, 238, 0.5);\n  box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px white;\n  padding: 1rem;\n  width: 100%;\n  font-size: 1rem;\n  outline: none; }\n\n.TextBox-module_textarea__Sl1sa {\n  border: 2px solid rgba(96, 125, 139, 0.1);\n  border-radius: 0.6rem;\n  background-color: rgba(239, 238, 238, 0.5);\n  box-shadow: inset 3px 3px 5px #b4b4b4, inset -2px -2px 10px white;\n  padding: 1rem;\n  width: 100%;\n  height: 100%;\n  resize: vertical;\n  font-size: 1rem;\n  font: caption; }\n  .TextBox-module_textarea__Sl1sa:focus-visible {\n    outline: none; }\n\n.TextBox-module_description__JGJsA {\n  margin: 0.25rem 0 2rem 0.25rem;\n  font-size: 0.9rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                    size                                    */\n/* -------------------------------------------------------------------------- */\n.TextBox-module_size--l__RII_R .TextBox-module_label__3Ro9E {\n  margin-bottom: 0.8rem;\n  font-size: 1.3rem; }\n\n.TextBox-module_size--l__RII_R .TextBox-module_input-box__2O9rD {\n  padding: 1.5rem;\n  font-size: 1.5rem; }\n\n.TextBox-module_size--l__RII_R .TextBox-module_textarea__Sl1sa {\n  padding: 1.5rem;\n  font-size: 1.5rem; }\n\n.TextBox-module_size--l__RII_R .TextBox-module_description__JGJsA {\n  margin-top: 0.8rem;\n  font-size: 1.3rem; }\n\n.TextBox-module_size--l__RII_R .TextBox-module_textbox--icon__1rJEh .TextBox-module_icon__RYM1e {\n  font-size: 1.8rem;\n  padding: 1.5rem 1.5rem calc(1.5rem - 6px); }\n\n.TextBox-module_size--l__RII_R .TextBox-module_textbox--icon__1rJEh .TextBox-module_input-box__2O9rD {\n  padding-left: 4.8rem; }\n\n/* -------------------------------------------------------------------------- */\n/*                                   variant                                  */\n/* -------------------------------------------------------------------------- */\n.TextBox-module_textbox--valid__2pB1e {\n  border: 1px green solid; }\n\n.TextBox-module_textbox--invalid__kl1MP {\n  border: 1px #cb444a solid; }\n\n.TextBox-module_textbox--disable__2GHFj {\n  border: 2px solid rgba(96, 125, 139, 0.1);\n  border-radius: 0.6rem;\n  background-color: unset;\n  box-shadow: 3px 3px 5px #b4b4b4, -2px -2px 10px white;\n  pointer-events: none; }\n\n.TextBox-module_textbox--icon__1rJEh {\n  display: flex;\n  align-items: center; }\n  .TextBox-module_textbox--icon__1rJEh .TextBox-module_icon__RYM1e {\n    position: absolute;\n    font-size: 1.2rem;\n    padding: 1rem 1rem calc(1rem - 3px); }\n  .TextBox-module_textbox--icon__1rJEh .TextBox-module_input-box__2O9rD {\n    padding-left: 2.8rem; }\n";
var style = {"host":"TextBox-module_host__127ry","label":"TextBox-module_label__3Ro9E","input-box":"TextBox-module_input-box__2O9rD","textarea":"TextBox-module_textarea__Sl1sa","description":"TextBox-module_description__JGJsA","size--l":"TextBox-module_size--l__RII_R","textbox--icon":"TextBox-module_textbox--icon__1rJEh","icon":"TextBox-module_icon__RYM1e","textbox--valid":"TextBox-module_textbox--valid__2pB1e","textbox--invalid":"TextBox-module_textbox--invalid__kl1MP","textbox--disable":"TextBox-module_textbox--disable__2GHFj"};
styleInject(css_248z);

var TextBox = function TextBox(props) {
  var large = props.large,
      label = props.label,
      placeholder = props.placeholder,
      description = props.description,
      textarea = props.textarea,
      valid = props.valid,
      invalid = props.invalid,
      disable = props.disable,
      icon = props.icon; // size

  var isLarge = large ? 'size--l' : ''; // var

  var isValid = valid ? 'textbox--valid' : '';
  var isInvalid = invalid ? 'textbox--invalid' : '';
  var isIcon = icon ? 'textbox--icon' : '';
  var isDisable = disable ? 'textbox--disable' : '';
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(style.host, " ").concat(style[isLarge])
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    className: style.label
  }, label), textarea ? /*#__PURE__*/React__default['default'].createElement("textarea", {
    className: "".concat(style.textarea, " ").concat(style[isValid], " ").concat(style[isInvalid], " ").concat(style[isDisable]),
    placeholder: placeholder
  }) : /*#__PURE__*/React__default['default'].createElement("div", {
    className: style[isIcon]
  }, icon ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: style.icon
  }, icon) : '', /*#__PURE__*/React__default['default'].createElement("input", {
    className: "".concat(style['input-box'], " ").concat(style[isValid], " ").concat(style[isInvalid], " ").concat(style[isDisable]),
    type: "text",
    placeholder: placeholder
  })), description ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: style.description
  }, description) : '');
};
/* ---------------------------------- Types --------------------------------- */

TextBox.propTypes = {
  /**
   * The size of the TextBox. Default is middle.
   */
  large: PropTypes__default['default'].bool,

  /**
   * The label of the TextBox
   */
  label: PropTypes__default['default'].string,

  /**
   * The placeholder in the TextBox
   */
  placeholder: PropTypes__default['default'].string,

  /**
   * The description under the TextBox
   */
  description: PropTypes__default['default'].string,

  /**
   * Turn the TextBox to a textarea, resizable vertically
   */
  textarea: PropTypes__default['default'].bool,

  /**
   * Display data valid layout
   */
  valid: PropTypes__default['default'].bool,

  /**
   * Diaply data invalid layout
   */
  invalid: PropTypes__default['default'].bool,

  /**
   * The TextBox is disable.
   */
  disable: PropTypes__default['default'].bool,

  /**
   * `react-icons` as rendered component
   */
  icon: PropTypes__default['default'].element
};
TextBox.defaultProps = {
  large: false,
  label: '',
  placeholder: '',
  description: '',
  textarea: '',
  valid: false,
  invalid: false,
  disable: false,
  icon: undefined
};

var components = function components() {
  return {
    ButtonIsolation: ButtonIsolation,
    Button: Button,
    Bg: Bg,
    TextBlock: TextBlock,
    TextBox: TextBox
  };
};

var index = components();

module.exports = index;
