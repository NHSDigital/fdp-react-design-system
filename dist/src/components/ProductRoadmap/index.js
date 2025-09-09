var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames2.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// node_modules/gsap/gsap-core.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var _config, _defaults, _suppressOverwrites, _reverting, _context, _bigNum, _tinyNum, _2PI, _HALF_PI, _gsID, _sqrt, _cos, _sin, _isString, _isFunction, _isNumber, _isUndefined, _isObject, _isNotFalse, _windowExists, _isFuncOrString, _isTypedArray, _isArray, _strictNumExp, _numExp, _numWithUnitExp, _complexStringNumExp, _relExp, _delimitedValueExp, _unitExp, _globalTimeline, _win, _coreInitted, _doc, _globals, _installScope, _coreReady, _install, _missingPlugin, _warn, _addGlobal, _emptyFunc, _startAtRevertConfig, _revertConfigNoKill, _revertConfig, _reservedProps, _lazyTweens, _lazyLookup, _lastRenderedFrame, _plugins, _effects, _nextGCFrame, _harnessPlugins, _callbackNames, _harness, _getCache, _getProperty, _forEachName, _round, _roundPrecise, _parseRelative, _arrayContainsAny, _lazyRender, _isRevertWorthy, _lazySafeRender, _numericIfPossible, _passThrough, _setDefaults, _setKeyframeDefaults, _merge, _mergeDeep, _copyExcluding, _inheritDefaults, _arraysMatch, _addLinkedListItem, _removeLinkedListItem, _removeFromParent, _uncache, _recacheAncestors, _rewindStartAt, _hasNoPausedAncestors, _elapsedCycleDuration, _animationCycle, _parentToChildTotalTime, _setEnd, _alignPlayhead, _postAddChecks, _addToTimeline, _scrollTrigger, _attemptInitTween, _parentPlayheadIsBeforeStart, _isFromOrFromStart, _renderZeroDurationTween, _findNextPauseTween, _setDuration, _onUpdateTotalDuration, _zeroPosition, _parsePosition, _createTweenType, _conditionalReturn, _clamp, getUnit, clamp, _slice, _isArrayLike, _flatten, toArray, selector, shuffle, distribute, _roundModifier, snap, random, pipe, unitize, normalize2, _wrapArray, wrap, wrapYoyo, _replaceRandom, mapRange, interpolate, _getLabelInDirection, _callback, _interrupt, _quickTween, _registerPluginQueue, _createPlugin, _255, _colorLookup, _hue, splitColor, _colorOrderData, _formatColors, _colorExp, _hslExp, _colorStringFilter, _tickerActive, _ticker, _wake, _easeMap, _customEaseExp, _quotesExp, _parseObjectInString, _valueInParentheses, _configEaseFromString, _invertEase, _propagateYoyoEase, _parseEase, _insertEase, _easeInOutFromOut, _configElastic, _configBack, GSCache, Animation, Timeline, _addComplexStringPropTween, _addPropTween, _processVars, _checkPlugin, _overwritingTween, _forceAllPropTweens, _initTween, _updatePropTweens, _addAliasesToVars, _parseKeyframe, _parseFuncOrString, _staggerTweenProps, _staggerPropsToSkip, Tween, _setterPlain, _setterFunc, _setterFuncWithParam, _setterAttribute, _getSetter, _renderPlain, _renderBoolean, _renderComplexString, _renderPropTweens, _addPluginModifier, _killPropTweensOf, _setterWithModifier, _sortPropTweensByPriority, PropTween, _media, _listeners, _emptyArray, _lastMediaTime, _contextID, _dispatch, _onMediaChange, Context, MatchMedia, _gsap, _getPluginPropTween, _addModifiers, _buildModifierPlugin, gsap, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ;
var init_gsap_core = __esm({
  "node_modules/gsap/gsap-core.js"() {
    _config = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    };
    _defaults = {
      duration: 0.5,
      overwrite: false,
      delay: 0
    };
    _bigNum = 1e8;
    _tinyNum = 1 / _bigNum;
    _2PI = Math.PI * 2;
    _HALF_PI = _2PI / 4;
    _gsID = 0;
    _sqrt = Math.sqrt;
    _cos = Math.cos;
    _sin = Math.sin;
    _isString = function _isString2(value) {
      return typeof value === "string";
    };
    _isFunction = function _isFunction2(value) {
      return typeof value === "function";
    };
    _isNumber = function _isNumber2(value) {
      return typeof value === "number";
    };
    _isUndefined = function _isUndefined2(value) {
      return typeof value === "undefined";
    };
    _isObject = function _isObject2(value) {
      return typeof value === "object";
    };
    _isNotFalse = function _isNotFalse2(value) {
      return value !== false;
    };
    _windowExists = function _windowExists2() {
      return typeof window !== "undefined";
    };
    _isFuncOrString = function _isFuncOrString2(value) {
      return _isFunction(value) || _isString(value);
    };
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
    };
    _isArray = Array.isArray;
    _strictNumExp = /(?:-?\.?\d|\.)+/gi;
    _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
    _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
    _relExp = /[+-]=-?[.\d]+/;
    _delimitedValueExp = /[^,'"\[\]\s]+/gi;
    _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
    _globals = {};
    _installScope = {};
    _install = function _install2(scope) {
      return (_installScope = _merge(scope, _globals)) && gsap;
    };
    _missingPlugin = function _missingPlugin2(property, value) {
      return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
    };
    _warn = function _warn2(message, suppress) {
      return !suppress && console.warn(message);
    };
    _addGlobal = function _addGlobal2(name, obj) {
      return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
    };
    _emptyFunc = function _emptyFunc2() {
      return 0;
    };
    _startAtRevertConfig = {
      suppressEvents: true,
      isStart: true,
      kill: false
    };
    _revertConfigNoKill = {
      suppressEvents: true,
      kill: false
    };
    _revertConfig = {
      suppressEvents: true
    };
    _reservedProps = {};
    _lazyTweens = [];
    _lazyLookup = {};
    _plugins = {};
    _effects = {};
    _nextGCFrame = 30;
    _harnessPlugins = [];
    _callbackNames = "";
    _harness = function _harness2(targets) {
      var target = targets[0], harnessPlugin, i;
      _isObject(target) || _isFunction(target) || (targets = [targets]);
      if (!(harnessPlugin = (target._gsap || {}).harness)) {
        i = _harnessPlugins.length;
        while (i-- && !_harnessPlugins[i].targetTest(target)) {
        }
        harnessPlugin = _harnessPlugins[i];
      }
      i = targets.length;
      while (i--) {
        targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
      }
      return targets;
    };
    _getCache = function _getCache2(target) {
      return target._gsap || _harness(toArray(target))[0]._gsap;
    };
    _getProperty = function _getProperty2(target, property, v) {
      return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
    };
    _forEachName = function _forEachName2(names, func) {
      return (names = names.split(",")).forEach(func) || names;
    };
    _round = function _round2(value) {
      return Math.round(value * 1e5) / 1e5 || 0;
    };
    _roundPrecise = function _roundPrecise2(value) {
      return Math.round(value * 1e7) / 1e7 || 0;
    };
    _parseRelative = function _parseRelative2(start, value) {
      var operator = value.charAt(0), end = parseFloat(value.substr(2));
      start = parseFloat(start);
      return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
    };
    _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
      var l = toFind.length, i = 0;
      for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
      }
      return i < l;
    };
    _lazyRender = function _lazyRender2() {
      var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
      _lazyLookup = {};
      _lazyTweens.length = 0;
      for (i = 0; i < l; i++) {
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
      }
    };
    _isRevertWorthy = function _isRevertWorthy2(animation) {
      return !!(animation._initted || animation._startAt || animation.add);
    };
    _lazySafeRender = function _lazySafeRender2(animation, time2, suppressEvents, force) {
      _lazyTweens.length && !_reverting && _lazyRender();
      animation.render(time2, suppressEvents, force || !!(_reverting && time2 < 0 && _isRevertWorthy(animation)));
      _lazyTweens.length && !_reverting && _lazyRender();
    };
    _numericIfPossible = function _numericIfPossible2(value) {
      var n = parseFloat(value);
      return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
    };
    _passThrough = function _passThrough2(p) {
      return p;
    };
    _setDefaults = function _setDefaults2(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || (obj[p] = defaults2[p]);
      }
      return obj;
    };
    _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
      return function(obj, defaults2) {
        for (var p in defaults2) {
          p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
        }
      };
    };
    _merge = function _merge2(base, toMerge) {
      for (var p in toMerge) {
        base[p] = toMerge[p];
      }
      return base;
    };
    _mergeDeep = function _mergeDeep2(base, toMerge) {
      for (var p in toMerge) {
        p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
      }
      return base;
    };
    _copyExcluding = function _copyExcluding2(obj, excluding) {
      var copy2 = {}, p;
      for (p in obj) {
        p in excluding || (copy2[p] = obj[p]);
      }
      return copy2;
    };
    _inheritDefaults = function _inheritDefaults2(vars) {
      var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
      if (_isNotFalse(vars.inherit)) {
        while (parent) {
          func(vars, parent.vars.defaults);
          parent = parent.parent || parent._dp;
        }
      }
      return vars;
    };
    _arraysMatch = function _arraysMatch2(a1, a2) {
      var i = a1.length, match = i === a2.length;
      while (match && i-- && a1[i] === a2[i]) {
      }
      return i < 0;
    };
    _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
      if (firstProp === void 0) {
        firstProp = "_first";
      }
      if (lastProp === void 0) {
        lastProp = "_last";
      }
      var prev = parent[lastProp], t;
      if (sortBy) {
        t = child[sortBy];
        while (prev && prev[sortBy] > t) {
          prev = prev._prev;
        }
      }
      if (prev) {
        child._next = prev._next;
        prev._next = child;
      } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
      }
      if (child._next) {
        child._next._prev = child;
      } else {
        parent[lastProp] = child;
      }
      child._prev = prev;
      child.parent = child._dp = parent;
      return child;
    };
    _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
      if (firstProp === void 0) {
        firstProp = "_first";
      }
      if (lastProp === void 0) {
        lastProp = "_last";
      }
      var prev = child._prev, next = child._next;
      if (prev) {
        prev._next = next;
      } else if (parent[firstProp] === child) {
        parent[firstProp] = next;
      }
      if (next) {
        next._prev = prev;
      } else if (parent[lastProp] === child) {
        parent[lastProp] = prev;
      }
      child._next = child._prev = child.parent = null;
    };
    _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
      child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
      child._act = 0;
    };
    _uncache = function _uncache2(animation, child) {
      if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        var a = animation;
        while (a) {
          a._dirty = 1;
          a = a.parent;
        }
      }
      return animation;
    };
    _recacheAncestors = function _recacheAncestors2(animation) {
      var parent = animation.parent;
      while (parent && parent.parent) {
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
      }
      return animation;
    };
    _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
      return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
    };
    _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
      return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
    };
    _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
      return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
    };
    _animationCycle = function _animationCycle2(tTime, cycleDuration) {
      var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
      return tTime && whole === tTime ? whole - 1 : whole;
    };
    _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
      return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
    };
    _setEnd = function _setEnd2(animation) {
      return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
    };
    _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
      var parent = animation._dp;
      if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation);
      }
      return animation;
    };
    _postAddChecks = function _postAddChecks2(timeline2, child) {
      var t;
      if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
        t = _parentToChildTotalTime(timeline2.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
          child.render(t, true);
        }
      }
      if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
        if (timeline2._dur < timeline2.duration()) {
          t = timeline2;
          while (t._dp) {
            t.rawTime() >= 0 && t.totalTime(t._tTime);
            t = t._dp;
          }
        }
        timeline2._zTime = -_tinyNum;
      }
    };
    _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
      child.parent && _removeFromParent(child);
      child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
      child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
      _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
      _isFromOrFromStart(child) || (timeline2._recent = child);
      skipChecks || _postAddChecks(timeline2, child);
      timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
      return timeline2;
    };
    _scrollTrigger = function _scrollTrigger2(animation, trigger) {
      return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
    };
    _attemptInitTween = function _attemptInitTween2(tween, time2, force, suppressEvents, tTime) {
      _initTween(tween, time2, tTime);
      if (!tween._initted) {
        return 1;
      }
      if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [tTime, suppressEvents];
        return 1;
      }
    };
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
      var parent = _ref.parent;
      return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
    };
    _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
      var data = _ref2.data;
      return data === "isFromStart" || data === "isStart";
    };
    _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
      var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
      if (repeatDelay && tween._repeat) {
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
          prevRatio = 1 - ratio;
          tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
      }
      if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
          return;
        }
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
        suppressEvents || (suppressEvents = totalTime && !prevIteration);
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
          ratio && _removeFromParent(tween, 1);
          if (!suppressEvents && !_reverting) {
            _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
            tween._prom && tween._prom();
          }
        }
      } else if (!tween._zTime) {
        tween._zTime = totalTime;
      }
    };
    _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time2) {
      var child;
      if (time2 > prevTime) {
        child = animation._first;
        while (child && child._start <= time2) {
          if (child.data === "isPause" && child._start > prevTime) {
            return child;
          }
          child = child._next;
        }
      } else {
        child = animation._last;
        while (child && child._start >= time2) {
          if (child.data === "isPause" && child._start < prevTime) {
            return child;
          }
          child = child._prev;
        }
      }
    };
    _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
      var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
      totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
      animation._dur = dur;
      animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
      totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
      animation.parent && _setEnd(animation);
      skipUncache || _uncache(animation.parent, animation);
      return animation;
    };
    _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
      return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
    };
    _zeroPosition = {
      _start: 0,
      endTime: _emptyFunc,
      totalDuration: _emptyFunc
    };
    _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
      var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
      if (_isString(position) && (isNaN(position) || position in labels)) {
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
          i >= 0 && (position = position.replace(/=/, ""));
          return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
          position in labels || (labels[position] = clippedDuration);
          return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) {
          offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        }
        return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
      }
      return position == null ? clippedDuration : +position;
    };
    _createTweenType = function _createTweenType2(type, params, timeline2) {
      var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
      isLegacy && (vars.duration = params[1]);
      vars.parent = timeline2;
      if (type) {
        irVars = vars;
        parent = timeline2;
        while (parent && !("immediateRender" in irVars)) {
          irVars = parent.vars.defaults || {};
          parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
      }
      return new Tween(params[0], vars, params[varsIndex + 1]);
    };
    _conditionalReturn = function _conditionalReturn2(value, func) {
      return value || value === 0 ? func(value) : func;
    };
    _clamp = function _clamp2(min, max, value) {
      return value < min ? min : value > max ? max : value;
    };
    getUnit = function getUnit2(value, v) {
      return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
    };
    clamp = function clamp2(min, max, value) {
      return _conditionalReturn(value, function(v) {
        return _clamp(min, max, v);
      });
    };
    _slice = [].slice;
    _isArrayLike = function _isArrayLike2(value, nonEmpty) {
      return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
    };
    _flatten = function _flatten2(ar, leaveStrings, accumulator) {
      if (accumulator === void 0) {
        accumulator = [];
      }
      return ar.forEach(function(value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
      }) || accumulator;
    };
    toArray = function toArray2(value, scope, leaveStrings) {
      return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
    };
    selector = function selector2(value) {
      value = toArray(value)[0] || _warn("Invalid scope") || {};
      return function(v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
      };
    };
    shuffle = function shuffle2(a) {
      return a.sort(function() {
        return 0.5 - Math.random();
      });
    };
    distribute = function distribute2(v) {
      if (_isFunction(v)) {
        return v;
      }
      var vars = _isObject(v) ? v : {
        each: v
      }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
      if (_isString(from)) {
        ratioX = ratioY = {
          center: 0.5,
          edges: 0.5,
          end: 1
        }[from] || 0;
      } else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
      }
      return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
          wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
          if (!wrapAt) {
            max = -_bigNum;
            while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
            }
            wrapAt < l && wrapAt--;
          }
          distances = cache[l] = [];
          originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
          originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
          max = 0;
          min = _bigNum;
          for (j = 0; j < l; j++) {
            x = j % wrapAt - originX;
            y = originY - (j / wrapAt | 0);
            distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
            d > max && (max = d);
            d < min && (min = d);
          }
          from === "random" && shuffle(distances);
          distances.max = max - min;
          distances.min = min;
          distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
          distances.b = l < 0 ? base - l : base;
          distances.u = getUnit(vars.amount || vars.each) || 0;
          ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
      };
    };
    _roundModifier = function _roundModifier2(v) {
      var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
      return function(raw) {
        var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
      };
    };
    snap = function snap2(snapTo, value) {
      var isArray = _isArray(snapTo), radius, is2D;
      if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
          snapTo = toArray(snapTo.values);
          if (is2D = !_isNumber(snapTo[0])) {
            radius *= radius;
          }
        } else {
          snapTo = _roundModifier(snapTo.increment);
        }
      }
      return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
      } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while (i--) {
          if (is2D) {
            dx = snapTo[i].x - x;
            dy = snapTo[i].y - y;
            dx = dx * dx + dy * dy;
          } else {
            dx = Math.abs(snapTo[i] - x);
          }
          if (dx < min) {
            min = dx;
            closest = i;
          }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
      });
    };
    random = function random2(min, max, roundingIncrement, returnFunction) {
      return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
      });
    };
    pipe = function pipe2() {
      for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
        functions[_key] = arguments[_key];
      }
      return function(value) {
        return functions.reduce(function(v, f) {
          return f(v);
        }, value);
      };
    };
    unitize = function unitize2(func, unit2) {
      return function(value) {
        return func(parseFloat(value)) + (unit2 || getUnit(value));
      };
    };
    normalize2 = function normalize3(min, max, value) {
      return mapRange(min, max, 0, 1, value);
    };
    _wrapArray = function _wrapArray2(a, wrapper, value) {
      return _conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
      });
    };
    wrap = function wrap2(min, max, value) {
      var range = max - min;
      return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
        return (range + (value2 - min) % range) % range + min;
      });
    };
    wrapYoyo = function wrapYoyo2(min, max, value) {
      var range = max - min, total = range * 2;
      return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
        value2 = (total + (value2 - min) % total) % total || 0;
        return min + (value2 > range ? total - value2 : value2);
      });
    };
    _replaceRandom = function _replaceRandom2(value) {
      var prev = 0, s = "", i, nums, end, isArray;
      while (~(i = value.indexOf("random(", prev))) {
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
      }
      return s + value.substr(prev, value.length - prev);
    };
    mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
      var inRange = inMax - inMin, outRange = outMax - outMin;
      return _conditionalReturn(value, function(value2) {
        return outMin + ((value2 - inMin) / inRange * outRange || 0);
      });
    };
    interpolate = function interpolate2(start, end, progress, mutate) {
      var func = isNaN(start + end) ? 0 : function(p2) {
        return (1 - p2) * start + p2 * end;
      };
      if (!func) {
        var isString = _isString(start), master = {}, p, i, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
          start = {
            p: start
          };
          end = {
            p: end
          };
        } else if (_isArray(start) && !_isArray(end)) {
          interpolators = [];
          l = start.length;
          il = l - 2;
          for (i = 1; i < l; i++) {
            interpolators.push(interpolate2(start[i - 1], start[i]));
          }
          l--;
          func = function func2(p2) {
            p2 *= l;
            var i2 = Math.min(il, ~~p2);
            return interpolators[i2](p2 - i2);
          };
          progress = end;
        } else if (!mutate) {
          start = _merge(_isArray(start) ? [] : {}, start);
        }
        if (!interpolators) {
          for (p in end) {
            _addPropTween.call(master, start, p, "get", end[p]);
          }
          func = function func2(p2) {
            return _renderPropTweens(p2, master) || (isString ? start.p : start);
          };
        }
      }
      return _conditionalReturn(progress, func);
    };
    _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
      var labels = timeline2.labels, min = _bigNum, p, distance, label;
      for (p in labels) {
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
          label = p;
          min = distance;
        }
      }
      return label;
    };
    _callback = function _callback2(animation, type, executeLazyFirst) {
      var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
      if (!callback) {
        return;
      }
      params = v[type + "Params"];
      scope = v.callbackScope || animation;
      executeLazyFirst && _lazyTweens.length && _lazyRender();
      context3 && (_context = context3);
      result = params ? callback.apply(scope, params) : callback.call(scope);
      _context = prevContext;
      return result;
    };
    _interrupt = function _interrupt2(animation) {
      _removeFromParent(animation);
      animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
      animation.progress() < 1 && _callback(animation, "onInterrupt");
      return animation;
    };
    _registerPluginQueue = [];
    _createPlugin = function _createPlugin2(config3) {
      if (!config3) return;
      config3 = !config3.name && config3["default"] || config3;
      if (_windowExists() || config3.headless) {
        var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
          this._props = [];
        } : config3, instanceDefaults = {
          init: _emptyFunc,
          render: _renderPropTweens,
          add: _addPropTween,
          kill: _killPropTweensOf,
          modifier: _addPluginModifier,
          rawVars: 0
        }, statics = {
          targetTest: 0,
          get: 0,
          getSetter: _getSetter,
          aliases: {},
          register: 0
        };
        _wake();
        if (config3 !== Plugin) {
          if (_plugins[name]) {
            return;
          }
          _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
          _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
          _plugins[Plugin.prop = name] = Plugin;
          if (config3.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name] = 1;
          }
          name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
        }
        _addGlobal(name, Plugin);
        config3.register && config3.register(gsap, Plugin, PropTween);
      } else {
        _registerPluginQueue.push(config3);
      }
    };
    _255 = 255;
    _colorLookup = {
      aqua: [0, _255, _255],
      lime: [0, _255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, _255],
      navy: [0, 0, 128],
      white: [_255, _255, _255],
      olive: [128, 128, 0],
      yellow: [_255, _255, 0],
      orange: [_255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [_255, 0, 0],
      pink: [_255, 192, 203],
      cyan: [0, _255, _255],
      transparent: [_255, _255, _255, 0]
    };
    _hue = function _hue2(h, m1, m2) {
      h += h < 0 ? 1 : h > 1 ? -1 : 0;
      return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
    };
    splitColor = function splitColor2(v, toHSL, forceAlpha) {
      var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
      if (!a) {
        if (v.substr(-1) === ",") {
          v = v.substr(0, v.length - 1);
        }
        if (_colorLookup[v]) {
          a = _colorLookup[v];
        } else if (v.charAt(0) === "#") {
          if (v.length < 6) {
            r = v.charAt(1);
            g = v.charAt(2);
            b = v.charAt(3);
            v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
          }
          if (v.length === 9) {
            a = parseInt(v.substr(1, 6), 16);
            return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
          }
          v = parseInt(v.substr(1), 16);
          a = [v >> 16, v >> 8 & _255, v & _255];
        } else if (v.substr(0, 3) === "hsl") {
          a = wasHSL = v.match(_strictNumExp);
          if (!toHSL) {
            h = +a[0] % 360 / 360;
            s = +a[1] / 100;
            l = +a[2] / 100;
            g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
            r = l * 2 - g;
            a.length > 3 && (a[3] *= 1);
            a[0] = _hue(h + 1 / 3, r, g);
            a[1] = _hue(h, r, g);
            a[2] = _hue(h - 1 / 3, r, g);
          } else if (~v.indexOf("=")) {
            a = v.match(_numExp);
            forceAlpha && a.length < 4 && (a[3] = 1);
            return a;
          }
        } else {
          a = v.match(_strictNumExp) || _colorLookup.transparent;
        }
        a = a.map(Number);
      }
      if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) {
          h = s = 0;
        } else {
          d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
          h *= 60;
        }
        a[0] = ~~(h + 0.5);
        a[1] = ~~(s * 100 + 0.5);
        a[2] = ~~(l * 100 + 0.5);
      }
      forceAlpha && a.length < 4 && (a[3] = 1);
      return a;
    };
    _colorOrderData = function _colorOrderData2(v) {
      var values = [], c = [], i = -1;
      v.split(_colorExp).forEach(function(v2) {
        var a = v2.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
      });
      values.c = c;
      return values;
    };
    _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
      var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
      if (!colors) {
        return s;
      }
      colors = colors.map(function(color2) {
        return (color2 = splitColor(color2, toHSL, 1)) && type + (toHSL ? color2[0] + "," + color2[1] + "%," + color2[2] + "%," + color2[3] : color2.join(",")) + ")";
      });
      if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
          shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
          l = shell.length - 1;
          for (; i < l; i++) {
            result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
          }
        }
      }
      if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + colors[i];
        }
      }
      return result + shell[l];
    };
    _colorExp = function() {
      var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
      for (p in _colorLookup) {
        s += "|" + p + "\\b";
      }
      return new RegExp(s + ")", "gi");
    }();
    _hslExp = /hsl[a]?\(/;
    _colorStringFilter = function _colorStringFilter2(a) {
      var combined = a.join(" "), toHSL;
      _colorExp.lastIndex = 0;
      if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
        return true;
      }
    };
    _ticker = function() {
      var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time2, frame;
        (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time2 = _lastUpdate - _startTime;
        overlap = time2 - _nextTime;
        if (overlap > 0 || manual) {
          frame = ++_self.frame;
          _delta = time2 - _self.time * 1e3;
          _self.time = time2 = time2 / 1e3;
          _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
          dispatch = 1;
        }
        manual || (_id = _req(_tick2));
        if (dispatch) {
          for (_i = 0; _i < _listeners2.length; _i++) {
            _listeners2[_i](time2, _delta, frame, v);
          }
        }
      };
      _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
          _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
          return _delta / (1e3 / (fps || 60));
        },
        wake: function wake() {
          if (_coreReady) {
            if (!_coreInitted && _windowExists()) {
              _win = _coreInitted = window;
              _doc = _win.document || {};
              _globals.gsap = gsap;
              (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
              _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
              _registerPluginQueue.forEach(_createPlugin);
            }
            _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
            _id && _self.sleep();
            _req = _raf || function(f) {
              return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
            };
            _tickerActive = 1;
            _tick(2);
          }
        },
        sleep: function sleep() {
          (_raf ? cancelAnimationFrame : clearTimeout)(_id);
          _tickerActive = 0;
          _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
          _lagThreshold = threshold || Infinity;
          _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
        },
        fps: function fps(_fps) {
          _gap = 1e3 / (_fps || 240);
          _nextTime = _self.time * 1e3 + _gap;
        },
        add: function add(callback, once, prioritize) {
          var func = once ? function(t, d, f, v) {
            callback(t, d, f, v);
            _self.remove(func);
          } : callback;
          _self.remove(callback);
          _listeners2[prioritize ? "unshift" : "push"](func);
          _wake();
          return func;
        },
        remove: function remove(callback, i) {
          ~(i = _listeners2.indexOf(callback)) && _listeners2.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners2
      };
      return _self;
    }();
    _wake = function _wake2() {
      return !_tickerActive && _ticker.wake();
    };
    _easeMap = {};
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
    _quotesExp = /["']/g;
    _parseObjectInString = function _parseObjectInString2(value) {
      var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
      for (; i < l; i++) {
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
      }
      return obj;
    };
    _valueInParentheses = function _valueInParentheses2(value) {
      var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
      return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
    };
    _configEaseFromString = function _configEaseFromString2(name) {
      var split = (name + "").split("("), ease = _easeMap[split[0]];
      return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
    };
    _invertEase = function _invertEase2(ease) {
      return function(p) {
        return 1 - ease(1 - p);
      };
    };
    _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
      var child = timeline2._first, ease;
      while (child) {
        if (child instanceof Timeline) {
          _propagateYoyoEase2(child, isYoyo);
        } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
          if (child.timeline) {
            _propagateYoyoEase2(child.timeline, isYoyo);
          } else {
            ease = child._ease;
            child._ease = child._yEase;
            child._yEase = ease;
            child._yoyo = isYoyo;
          }
        }
        child = child._next;
      }
    };
    _parseEase = function _parseEase2(ease, defaultEase) {
      return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
    };
    _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
      if (easeOut === void 0) {
        easeOut = function easeOut2(p) {
          return 1 - easeIn(1 - p);
        };
      }
      if (easeInOut === void 0) {
        easeInOut = function easeInOut2(p) {
          return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
        };
      }
      var ease = {
        easeIn,
        easeOut,
        easeInOut
      }, lowercaseName;
      _forEachName(names, function(name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for (var p in ease) {
          _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
        }
      });
      return ease;
    };
    _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
      return function(p) {
        return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
      };
    };
    _configElastic = function _configElastic2(type, amplitude, period) {
      var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
      }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);
      p2 = _2PI / p2;
      ease.config = function(amplitude2, period2) {
        return _configElastic2(type, amplitude2, period2);
      };
      return ease;
    };
    _configBack = function _configBack2(type, overshoot) {
      if (overshoot === void 0) {
        overshoot = 1.70158;
      }
      var easeOut = function easeOut2(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
      }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);
      ease.config = function(overshoot2) {
        return _configBack2(type, overshoot2);
      };
      return ease;
    };
    _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
      var power = i < 5 ? i + 1 : i;
      _insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
      } : function(p) {
        return p;
      }, function(p) {
        return 1 - Math.pow(1 - p, power);
      }, function(p) {
        return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
      });
    });
    _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
    _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
    (function(n, c) {
      var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
      };
      _insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
      }, easeOut);
    })(7.5625, 2.75);
    _insertEase("Expo", function(p) {
      return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
    });
    _insertEase("Circ", function(p) {
      return -(_sqrt(1 - p * p) - 1);
    });
    _insertEase("Sine", function(p) {
      return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
    });
    _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
    _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
      config: function config(steps, immediateStart) {
        if (steps === void 0) {
          steps = 1;
        }
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function(p) {
          return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
      }
    };
    _defaults.ease = _easeMap["quad.out"];
    _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
      return _callbackNames += name + "," + name + "Params,";
    });
    GSCache = function GSCache2(target, harness) {
      this.id = _gsID++;
      target._gsap = this;
      this.target = target;
      this.harness = harness;
      this.get = harness ? harness.get : _getProperty;
      this.set = harness ? harness.getSetter : _getSetter;
    };
    Animation = /* @__PURE__ */ function() {
      function Animation2(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
          this._rDelay = vars.repeatDelay || 0;
          this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if (_context) {
          this._ctx = _context;
          _context.data.push(this);
        }
        _tickerActive || _ticker.wake();
      }
      var _proto = Animation2.prototype;
      _proto.delay = function delay(value) {
        if (value || value === 0) {
          this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
          this._delay = value;
          return this;
        }
        return this._delay;
      };
      _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
      };
      _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) {
          return this._tDur;
        }
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
      };
      _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) {
          return this._tTime;
        }
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
          _alignPlayhead(this, _totalTime);
          !parent._dp || parent.parent || _postAddChecks(parent, this);
          while (parent && parent.parent) {
            if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
              parent.totalTime(parent._tTime, true);
            }
            parent = parent.parent;
          }
          if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
            _addToTimeline(this._dp, this, this._start - this._delay);
          }
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
          this._ts || (this._pTime = _totalTime);
          _lazySafeRender(this, _totalTime, suppressEvents);
        }
        return this;
      };
      _proto.time = function time2(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
      };
      _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
      };
      _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
      };
      _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
      };
      _proto.timeScale = function timeScale(value, suppressEvents) {
        if (!arguments.length) {
          return this._rts === -_tinyNum ? 0 : this._rts;
        }
        if (this._rts === value) {
          return this;
        }
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
        this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
        _setEnd(this);
        return _recacheAncestors(this);
      };
      _proto.paused = function paused(value) {
        if (!arguments.length) {
          return this._ps;
        }
        if (this._ps !== value) {
          this._ps = value;
          if (value) {
            this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
            this._ts = this._act = 0;
          } else {
            _wake();
            this._ts = this._rts;
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
          }
        }
        return this;
      };
      _proto.startTime = function startTime(value) {
        if (arguments.length) {
          this._start = value;
          var parent = this.parent || this._dp;
          parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
          return this;
        }
        return this._start;
      };
      _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      };
      _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp;
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
      };
      _proto.revert = function revert(config3) {
        if (config3 === void 0) {
          config3 = _revertConfig;
        }
        var prevIsReverting = _reverting;
        _reverting = config3;
        if (_isRevertWorthy(this)) {
          this.timeline && this.timeline.revert(config3);
          this.totalTime(-0.01, config3.suppressEvents);
        }
        this.data !== "nested" && config3.kill !== false && this.kill();
        _reverting = prevIsReverting;
        return this;
      };
      _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time2 = arguments.length ? rawTime : animation.rawTime();
        while (animation) {
          time2 = animation._start + time2 / (Math.abs(animation._ts) || 1);
          animation = animation._dp;
        }
        return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time2;
      };
      _proto.repeat = function repeat(value) {
        if (arguments.length) {
          this._repeat = value === Infinity ? -2 : value;
          return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
      };
      _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
          var time2 = this._time;
          this._rDelay = value;
          _onUpdateTotalDuration(this);
          return time2 ? this.time(time2) : this;
        }
        return this._rDelay;
      };
      _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
          this._yoyo = value;
          return this;
        }
        return this._yoyo;
      };
      _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
      };
      _proto.restart = function restart(includeDelay, suppressEvents) {
        this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        this._dur || (this._zTime = -_tinyNum);
        return this;
      };
      _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
      };
      _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
      };
      _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
      };
      _proto.resume = function resume() {
        return this.paused(false);
      };
      _proto.reversed = function reversed(value) {
        if (arguments.length) {
          !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
          return this;
        }
        return this._rts < 0;
      };
      _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
      };
      _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
      };
      _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
          if (!callback) {
            delete vars[type];
          } else {
            vars[type] = callback;
            params && (vars[type + "Params"] = params);
            type === "onUpdate" && (this._onUpdate = callback);
          }
          return this;
        }
        return vars[type];
      };
      _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
          var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
            var _then = self.then;
            self.then = null;
            _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
            resolve(f);
            self.then = _then;
          };
          if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
            _resolve();
          } else {
            self._prom = _resolve;
          }
        });
      };
      _proto.kill = function kill() {
        _interrupt(this);
      };
      return Animation2;
    }();
    _setDefaults(Animation.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: false,
      parent: null,
      _initted: false,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -_tinyNum,
      _prom: 0,
      _ps: false,
      _rts: 1
    });
    Timeline = /* @__PURE__ */ function(_Animation) {
      _inheritsLoose(Timeline2, _Animation);
      function Timeline2(vars, position) {
        var _this;
        if (vars === void 0) {
          vars = {};
        }
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
      }
      var _proto2 = Timeline2.prototype;
      _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
      };
      _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
      };
      _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
      };
      _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
      };
      _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
      };
      _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
      };
      _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
      };
      _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
      };
      _proto2.render = function render3(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time2, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
          if (prevTime !== this._time && dur) {
            tTime += this._time - prevTime;
            totalTime += this._time - prevTime;
          }
          time2 = tTime;
          prevStart = this._start;
          timeScale = this._ts;
          prevPaused = !timeScale;
          if (crossingStart) {
            dur || (prevTime = this._zTime);
            (totalTime || !suppressEvents) && (this._zTime = totalTime);
          }
          if (this._repeat) {
            yoyo = this._yoyo;
            cycleDuration = dur + this._rDelay;
            if (this._repeat < -1 && totalTime < 0) {
              return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
            }
            time2 = _roundPrecise(tTime % cycleDuration);
            if (tTime === tDur) {
              iteration = this._repeat;
              time2 = dur;
            } else {
              prevIteration = _roundPrecise(tTime / cycleDuration);
              iteration = ~~prevIteration;
              if (iteration && iteration === prevIteration) {
                time2 = dur;
                iteration--;
              }
              time2 > dur && (time2 = dur);
            }
            prevIteration = _animationCycle(this._tTime, cycleDuration);
            !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
            if (yoyo && iteration & 1) {
              time2 = dur - time2;
              isYoyo = 1;
            }
            if (iteration !== prevIteration && !this._lock) {
              var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
              iteration < prevIteration && (rewinding = !rewinding);
              prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
              this._lock = 1;
              this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
              this._tTime = tTime;
              !suppressEvents && this.parent && _callback(this, "onRepeat");
              this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
              if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                return this;
              }
              dur = this._dur;
              tDur = this._tDur;
              if (doesWrap) {
                this._lock = 2;
                prevTime = rewinding ? dur : -1e-4;
                this.render(prevTime, true);
                this.vars.repeatRefresh && !isYoyo && this.invalidate();
              }
              this._lock = 0;
              if (!this._ts && !prevPaused) {
                return this;
              }
              _propagateYoyoEase(this, isYoyo);
            }
          }
          if (this._hasPause && !this._forcing && this._lock < 2) {
            pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time2));
            if (pauseTween) {
              tTime -= time2 - (time2 = pauseTween._start);
            }
          }
          this._tTime = tTime;
          this._time = time2;
          this._act = !timeScale;
          if (!this._initted) {
            this._onUpdate = this.vars.onUpdate;
            this._initted = 1;
            this._zTime = totalTime;
            prevTime = 0;
          }
          if (!prevTime && tTime && !suppressEvents && !prevIteration) {
            _callback(this, "onStart");
            if (this._tTime !== tTime) {
              return this;
            }
          }
          if (time2 >= prevTime && totalTime >= 0) {
            child = this._first;
            while (child) {
              next = child._next;
              if ((child._act || time2 >= child._start) && child._ts && pauseTween !== child) {
                if (child.parent !== this) {
                  return this.render(totalTime, suppressEvents, force);
                }
                child.render(child._ts > 0 ? (time2 - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time2 - child._start) * child._ts, suppressEvents, force);
                if (time2 !== this._time || !this._ts && !prevPaused) {
                  pauseTween = 0;
                  next && (tTime += this._zTime = -_tinyNum);
                  break;
                }
              }
              child = next;
            }
          } else {
            child = this._last;
            var adjustedTime = totalTime < 0 ? totalTime : time2;
            while (child) {
              next = child._prev;
              if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                if (child.parent !== this) {
                  return this.render(totalTime, suppressEvents, force);
                }
                child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
                if (time2 !== this._time || !this._ts && !prevPaused) {
                  pauseTween = 0;
                  next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                  break;
                }
              }
              child = next;
            }
          }
          if (pauseTween && !suppressEvents) {
            this.pause();
            pauseTween.render(time2 >= prevTime ? 0 : -_tinyNum)._zTime = time2 >= prevTime ? 1 : -1;
            if (this._ts) {
              this._start = prevStart;
              _setEnd(this);
              return this.render(totalTime, suppressEvents, force);
            }
          }
          this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
          if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
            if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
              if (!this._lock) {
                (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                  _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                  this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
              }
            }
          }
        }
        return this;
      };
      _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) || (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation)) {
          if (_isArray(child)) {
            child.forEach(function(obj) {
              return _this2.add(obj, position);
            });
            return this;
          }
          if (_isString(child)) {
            return this.addLabel(child, position);
          }
          if (_isFunction(child)) {
            child = Tween.delayedCall(0, child);
          } else {
            return this;
          }
        }
        return this !== child ? _addToTimeline(this, child, position) : this;
      };
      _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) {
          nested = true;
        }
        if (tweens === void 0) {
          tweens = true;
        }
        if (timelines === void 0) {
          timelines = true;
        }
        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = -_bigNum;
        }
        var a = [], child = this._first;
        while (child) {
          if (child._start >= ignoreBeforeTime) {
            if (child instanceof Tween) {
              tweens && a.push(child);
            } else {
              timelines && a.push(child);
              nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
            }
          }
          child = child._next;
        }
        return a;
      };
      _proto2.getById = function getById2(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while (i--) {
          if (animations[i].vars.id === id) {
            return animations[i];
          }
        }
      };
      _proto2.remove = function remove(child) {
        if (_isString(child)) {
          return this.removeLabel(child);
        }
        if (_isFunction(child)) {
          return this.killTweensOf(child);
        }
        child.parent === this && _removeLinkedListItem(this, child);
        if (child === this._recent) {
          this._recent = this._last;
        }
        return _uncache(this);
      };
      _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) {
          return this._tTime;
        }
        this._forcing = 1;
        if (!this._dp && this._ts) {
          this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        }
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
      };
      _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
      };
      _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
      };
      _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
      };
      _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while (child) {
          if (child._start === position && child.data === "isPause") {
            _removeFromParent(child);
          }
          child = child._next;
        }
      };
      _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while (i--) {
          _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        }
        return this;
      };
      _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
        while (child) {
          if (child instanceof Tween) {
            if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
              a.push(child);
            }
          } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
            a.push.apply(a, children);
          }
          child = child._next;
        }
        return a;
      };
      _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
          ease: vars.ease || "none",
          lazy: false,
          immediateRender: false,
          time: endTime,
          overwrite: "auto",
          duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
          onStart: function onStart() {
            tl.pause();
            if (!initted) {
              var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
              tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
              initted = 1;
            }
            _onStart && _onStart.apply(tween, onStartParams || []);
          }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
      };
      _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
          startAt: {
            time: _parsePosition(this, fromPosition)
          }
        }, vars));
      };
      _proto2.recent = function recent() {
        return this._recent;
      };
      _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) {
          afterTime = this._time;
        }
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
      };
      _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) {
          beforeTime = this._time;
        }
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
      };
      _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
      };
      _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = 0;
        }
        var child = this._first, labels = this.labels, p;
        while (child) {
          if (child._start >= ignoreBeforeTime) {
            child._start += amount;
            child._end += amount;
          }
          child = child._next;
        }
        if (adjustLabels) {
          for (p in labels) {
            if (labels[p] >= ignoreBeforeTime) {
              labels[p] += amount;
            }
          }
        }
        return _uncache(this);
      };
      _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while (child) {
          child.invalidate(soft);
          child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
      };
      _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) {
          includeLabels = true;
        }
        var child = this._first, next;
        while (child) {
          next = child._next;
          this.remove(child);
          child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
      };
      _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) {
          return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        }
        if (self._dirty) {
          parent = self.parent;
          while (child) {
            prev = child._prev;
            child._dirty && child.totalDuration();
            start = child._start;
            if (start > prevStart && self._sort && child._ts && !self._lock) {
              self._lock = 1;
              _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
            } else {
              prevStart = start;
            }
            if (start < 0 && child._ts) {
              max -= start;
              if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                self._start += start / self._ts;
                self._time -= start;
                self._tTime -= start;
              }
              self.shiftChildren(-start, false, -Infinity);
              prevStart = 0;
            }
            child._end > max && child._ts && (max = child._end);
            child = prev;
          }
          _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
          self._dirty = 0;
        }
        return self._tDur;
      };
      Timeline2.updateRoot = function updateRoot(time2) {
        if (_globalTimeline._ts) {
          _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time2, _globalTimeline));
          _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
          _nextGCFrame += _config.autoSleep || 120;
          var child = _globalTimeline._first;
          if (!child || !child._ts) {
            if (_config.autoSleep && _ticker._listeners.length < 2) {
              while (child && !child._ts) {
                child = child._next;
              }
              child || _ticker.sleep();
            }
          }
        }
      };
      return Timeline2;
    }(Animation);
    _setDefaults(Timeline.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
    });
    _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
      var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color2, endNum, chunk, startNum, hasRandom, a;
      pt.b = start;
      pt.e = end;
      start += "";
      end += "";
      if (hasRandom = ~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (stringFilter) {
        a = [start, end];
        stringFilter(a, target, prop);
        start = a[0];
        end = a[1];
      }
      startNums = start.match(_complexStringNumExp) || [];
      while (result = _complexStringNumExp.exec(end)) {
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color2) {
          color2 = (color2 + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(") {
          color2 = 1;
        }
        if (endNum !== startNums[matchIndex++]) {
          startNum = parseFloat(startNums[matchIndex - 1]) || 0;
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
            m: color2 && color2 < 4 ? Math.round : 0
          };
          index = _complexStringNumExp.lastIndex;
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
      pt.fp = funcParam;
      if (_relExp.test(end) || hasRandom) {
        pt.e = 0;
      }
      this._pt = pt;
      return pt;
    };
    _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
      _isFunction(end) && (end = end(index || 0, target, targets));
      var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
      if (_isString(end)) {
        if (~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }
        if (end.charAt(1) === "=") {
          pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
          if (pt || pt === 0) {
            end = pt;
          }
        }
      }
      if (!optional || parsedStart !== end || _forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
          pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
          funcParam && (pt.fp = funcParam);
          modifier && pt.modifier(modifier, this, target);
          return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
      }
    };
    _processVars = function _processVars2(vars, index, target, targets, tween) {
      _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
      if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
        return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
      }
      var copy2 = {}, p;
      for (p in vars) {
        copy2[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
      }
      return copy2;
    };
    _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
      var plugin, pt, ptLookup, i;
      if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
          ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
          i = plugin._props.length;
          while (i--) {
            ptLookup[plugin._props[i]] = pt;
          }
        }
      }
      return plugin;
    };
    _initTween = function _initTween2(tween, time2, tTime) {
      var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
      tl && (!keyframes || !ease) && (ease = "none");
      tween._ease = _parseEase(ease, _defaults.ease);
      tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
      if (yoyoEase && tween._yoyo && !tween._repeat) {
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
      }
      tween._from = !tl && !!vars.runBackwards;
      if (!tl || keyframes && !vars.stagger) {
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop];
        cleanVars = _copyExcluding(vars, _reservedProps);
        if (prevStartAt) {
          prevStartAt._zTime < 0 && prevStartAt.progress(1);
          time2 < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
          prevStartAt._lazy = 0;
        }
        if (startAt) {
          _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
            data: "isStart",
            overwrite: false,
            parent,
            immediateRender: true,
            lazy: !prevStartAt && _isNotFalse(lazy),
            startAt: null,
            delay: 0,
            onUpdate: onUpdate && function() {
              return _callback(tween, "onUpdate");
            },
            stagger: 0
          }, startAt)));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time2 < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
          if (immediateRender) {
            if (dur && time2 <= 0 && tTime <= 0) {
              time2 && (tween._zTime = time2);
              return;
            }
          }
        } else if (runBackwards && dur) {
          if (!prevStartAt) {
            time2 && (immediateRender = false);
            p = _setDefaults({
              overwrite: false,
              data: "isFromStart",
              //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
              lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
              immediateRender,
              //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
              stagger: 0,
              parent
              //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
            }, cleanVars);
            harnessVars && (p[harness.prop] = harnessVars);
            _removeFromParent(tween._startAt = Tween.set(targets, p));
            tween._startAt._dp = 0;
            tween._startAt._sat = tween;
            time2 < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
            tween._zTime = time2;
            if (!immediateRender) {
              _initTween2(tween._startAt, _tinyNum, _tinyNum);
            } else if (!time2) {
              return;
            }
          }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for (i = 0; i < targets.length; i++) {
          target = targets[i];
          gsData = target._gsap || _harness(targets)[i]._gsap;
          tween._ptLookup[i] = ptLookup = {};
          _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
          index = fullTargets === targets ? i : fullTargets.indexOf(target);
          if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
            tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
            plugin._props.forEach(function(name) {
              ptLookup[name] = pt;
            });
            plugin.priority && (hasPriority = 1);
          }
          if (!harness || harnessVars) {
            for (p in cleanVars) {
              if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                plugin.priority && (hasPriority = 1);
              } else {
                ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
              }
            }
          }
          tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
          if (autoOverwrite && tween._pt) {
            _overwritingTween = tween;
            _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time2));
            overwritten = !tween.parent;
            _overwritingTween = 0;
          }
          tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween);
      }
      tween._onUpdate = onUpdate;
      tween._initted = (!tween._op || tween._pt) && !overwritten;
      keyframes && time2 <= 0 && tl.render(_bigNum, true, true);
    };
    _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time2, skipRecursion) {
      var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
      if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while (i--) {
          pt = lookup[i][property];
          if (pt && pt.d && pt.d._pt) {
            pt = pt.d._pt;
            while (pt && pt.p !== property && pt.fp !== property) {
              pt = pt._next;
            }
          }
          if (!pt) {
            _forceAllPropTweens = 1;
            tween.vars[property] = "+=0";
            _initTween(tween, time2);
            _forceAllPropTweens = 0;
            return skipRecursion ? _warn(property + " not eligible for reset") : 1;
          }
          ptCache.push(pt);
        }
      }
      i = ptCache.length;
      while (i--) {
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT;
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
        rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
      }
    };
    _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
      var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy2, p, i, aliases;
      if (!propertyAliases) {
        return vars;
      }
      copy2 = _merge({}, vars);
      for (p in propertyAliases) {
        if (p in copy2) {
          aliases = propertyAliases[p].split(",");
          i = aliases.length;
          while (i--) {
            copy2[aliases[i]] = copy2[p];
          }
        }
      }
      return copy2;
    };
    _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
      var ease = obj.ease || easeEach || "power1.inOut", p, a;
      if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []);
        obj.forEach(function(value, i) {
          return a.push({
            t: i / (obj.length - 1) * 100,
            v: value,
            e: ease
          });
        });
      } else {
        for (p in obj) {
          a = allProps[p] || (allProps[p] = []);
          p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
          });
        }
      }
    };
    _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
      return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
    };
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
    _staggerPropsToSkip = {};
    _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
      return _staggerPropsToSkip[name] = 1;
    });
    Tween = /* @__PURE__ */ function(_Animation2) {
      _inheritsLoose(Tween2, _Animation2);
      function Tween2(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
          position.duration = vars;
          vars = position;
          position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy2, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = [];
        _this3._overwrite = overwrite;
        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          vars = _this3.vars;
          tl = _this3.timeline = new Timeline({
            data: "nested",
            defaults: defaults2 || {},
            targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
          });
          tl.kill();
          tl.parent = tl._dp = _assertThisInitialized(_this3);
          tl._start = 0;
          if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            l = parsedTargets.length;
            staggerFunc = stagger && distribute(stagger);
            if (_isObject(stagger)) {
              for (p in stagger) {
                if (~_staggerTweenProps.indexOf(p)) {
                  staggerVarsToMerge || (staggerVarsToMerge = {});
                  staggerVarsToMerge[p] = stagger[p];
                }
              }
            }
            for (i = 0; i < l; i++) {
              copy2 = _copyExcluding(vars, _staggerPropsToSkip);
              copy2.stagger = 0;
              yoyoEase && (copy2.yoyoEase = yoyoEase);
              staggerVarsToMerge && _merge(copy2, staggerVarsToMerge);
              curTarget = parsedTargets[i];
              copy2.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
              copy2.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
              if (!stagger && l === 1 && copy2.delay) {
                _this3._delay = delay = copy2.delay;
                _this3._start += delay;
                copy2.delay = 0;
              }
              tl.to(curTarget, copy2, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
              tl._ease = _easeMap.none;
            }
            tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
          } else if (keyframes) {
            _inheritDefaults(_setDefaults(tl.vars.defaults, {
              ease: "none"
            }));
            tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
            var time2 = 0, a, kf, v;
            if (_isArray(keyframes)) {
              keyframes.forEach(function(frame) {
                return tl.to(parsedTargets, frame, ">");
              });
              tl.duration();
            } else {
              copy2 = {};
              for (p in keyframes) {
                p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy2, keyframes.easeEach);
              }
              for (p in copy2) {
                a = copy2[p].sort(function(a2, b) {
                  return a2.t - b.t;
                });
                time2 = 0;
                for (i = 0; i < a.length; i++) {
                  kf = a[i];
                  v = {
                    ease: kf.e,
                    duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                  };
                  v[p] = kf.v;
                  tl.to(parsedTargets, v, time2);
                  time2 += v.duration;
                }
              }
              tl.duration() < duration && tl.to({}, {
                duration: duration - tl.duration()
              });
            }
          }
          duration || _this3.duration(duration = tl.duration());
        } else {
          _this3.timeline = 0;
        }
        if (overwrite === true && !_suppressOverwrites) {
          _overwritingTween = _assertThisInitialized(_this3);
          _globalTimeline.killTweensOf(parsedTargets);
          _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
          _this3._tTime = -_tinyNum;
          _this3.render(Math.max(0, -delay) || 0);
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
      }
      var _proto3 = Tween2.prototype;
      _proto3.render = function render3(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time2, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
        if (!dur) {
          _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
          time2 = tTime;
          timeline2 = this.timeline;
          if (this._repeat) {
            cycleDuration = dur + this._rDelay;
            if (this._repeat < -1 && isNegative) {
              return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
            }
            time2 = _roundPrecise(tTime % cycleDuration);
            if (tTime === tDur) {
              iteration = this._repeat;
              time2 = dur;
            } else {
              prevIteration = _roundPrecise(tTime / cycleDuration);
              iteration = ~~prevIteration;
              if (iteration && iteration === prevIteration) {
                time2 = dur;
                iteration--;
              } else if (time2 > dur) {
                time2 = dur;
              }
            }
            isYoyo = this._yoyo && iteration & 1;
            if (isYoyo) {
              yoyoEase = this._yEase;
              time2 = dur - time2;
            }
            prevIteration = _animationCycle(this._tTime, cycleDuration);
            if (time2 === prevTime && !force && this._initted && iteration === prevIteration) {
              this._tTime = tTime;
              return this;
            }
            if (iteration !== prevIteration) {
              timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
              if (this.vars.repeatRefresh && !isYoyo && !this._lock && time2 !== cycleDuration && this._initted) {
                this._lock = force = 1;
                this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
              }
            }
          }
          if (!this._initted) {
            if (_attemptInitTween(this, isNegative ? totalTime : time2, force, suppressEvents, tTime)) {
              this._tTime = 0;
              return this;
            }
            if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
              return this;
            }
            if (dur !== this._dur) {
              return this.render(totalTime, suppressEvents, force);
            }
          }
          this._tTime = tTime;
          this._time = time2;
          if (!this._act && this._ts) {
            this._act = 1;
            this._lazy = 0;
          }
          this.ratio = ratio = (yoyoEase || this._ease)(time2 / dur);
          if (this._from) {
            this.ratio = ratio = 1 - ratio;
          }
          if (!prevTime && tTime && !suppressEvents && !prevIteration) {
            _callback(this, "onStart");
            if (this._tTime !== tTime) {
              return this;
            }
          }
          pt = this._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
          timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time2 / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
          if (this._onUpdate && !suppressEvents) {
            isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
            _callback(this, "onUpdate");
          }
          this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
          if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
            isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
            (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
            if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
              _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }
        return this;
      };
      _proto3.targets = function targets() {
        return this._targets;
      };
      _proto3.invalidate = function invalidate(soft) {
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
      };
      _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var time2 = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || _initTween(this, time2);
        ratio = this._ease(time2 / this._dur);
        if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time2, skipRecursion)) {
          return this.resetTo(property, value, start, startIsRelative, 1);
        }
        _alignPlayhead(this, 0);
        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
      };
      _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) {
          vars = "all";
        }
        if (!targets && (!vars || vars === "all")) {
          this._lazy = this._pt = 0;
          this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
          return this;
        }
        if (this.timeline) {
          var tDur = this.timeline.totalDuration();
          this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
          this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
          return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
          vars === "all" && (this._pt = 0);
          return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
          if (_isString(vars)) {
            p = {};
            _forEachName(vars, function(name) {
              return p[name] = 1;
            });
            vars = p;
          }
          vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while (i--) {
          if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
              overwrittenProps[i] = vars;
              props = curLookup;
              curOverwriteProps = {};
            } else {
              curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
              props = vars;
            }
            for (p in props) {
              pt = curLookup && curLookup[p];
              if (pt) {
                if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                  _removeLinkedListItem(this, pt, "_pt");
                }
                delete curLookup[p];
              }
              if (curOverwriteProps !== "all") {
                curOverwriteProps[p] = 1;
              }
            }
          }
        }
        this._initted && !this._pt && firstPT && _interrupt(this);
        return this;
      };
      Tween2.to = function to(targets, vars) {
        return new Tween2(targets, vars, arguments[2]);
      };
      Tween2.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
      };
      Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween2(callback, 0, {
          immediateRender: false,
          lazy: false,
          overwrite: false,
          delay,
          onComplete: callback,
          onReverseComplete: callback,
          onCompleteParams: params,
          onReverseCompleteParams: params,
          callbackScope: scope
        });
      };
      Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
      };
      Tween2.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween2(targets, vars);
      };
      Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
      };
      return Tween2;
    }(Animation);
    _setDefaults(Tween.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
    });
    _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
      Tween[name] = function() {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
      };
    });
    _setterPlain = function _setterPlain2(target, property, value) {
      return target[property] = value;
    };
    _setterFunc = function _setterFunc2(target, property, value) {
      return target[property](value);
    };
    _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
      return target[property](data.fp, value);
    };
    _setterAttribute = function _setterAttribute2(target, property, value) {
      return target.setAttribute(property, value);
    };
    _getSetter = function _getSetter2(target, property) {
      return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
    };
    _renderPlain = function _renderPlain2(ratio, data) {
      return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
    };
    _renderBoolean = function _renderBoolean2(ratio, data) {
      return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
    };
    _renderComplexString = function _renderComplexString2(ratio, data) {
      var pt = data._pt, s = "";
      if (!ratio && data.b) {
        s = data.b;
      } else if (ratio === 1 && data.e) {
        s = data.e;
      } else {
        while (pt) {
          s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
          pt = pt._next;
        }
        s += data.c;
      }
      data.set(data.t, data.p, s, data);
    };
    _renderPropTweens = function _renderPropTweens2(ratio, data) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    };
    _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
      var pt = this._pt, next;
      while (pt) {
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
      }
    };
    _killPropTweensOf = function _killPropTweensOf2(property) {
      var pt = this._pt, hasNonDependentRemaining, next;
      while (pt) {
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) {
          _removeLinkedListItem(this, pt, "_pt");
        } else if (!pt.dep) {
          hasNonDependentRemaining = 1;
        }
        pt = next;
      }
      return !hasNonDependentRemaining;
    };
    _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
      data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
    };
    _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
      var pt = parent._pt, next, pt2, first, last;
      while (pt) {
        next = pt._next;
        pt2 = first;
        while (pt2 && pt2.pr > pt.pr) {
          pt2 = pt2._next;
        }
        if (pt._prev = pt2 ? pt2._prev : last) {
          pt._prev._next = pt;
        } else {
          first = pt;
        }
        if (pt._next = pt2) {
          pt2._prev = pt;
        } else {
          last = pt;
        }
        pt = next;
      }
      parent._pt = first;
    };
    PropTween = /* @__PURE__ */ function() {
      function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) {
          next._prev = this;
        }
      }
      var _proto4 = PropTween2.prototype;
      _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set;
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target;
        this.tween = tween;
      };
      return PropTween2;
    }();
    _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
      return _reservedProps[name] = 1;
    });
    _globals.TweenMax = _globals.TweenLite = Tween;
    _globals.TimelineLite = _globals.TimelineMax = Timeline;
    _globalTimeline = new Timeline({
      sortChildren: false,
      defaults: _defaults,
      autoRemoveChildren: true,
      id: "root",
      smoothChildTiming: true
    });
    _config.stringFilter = _colorStringFilter;
    _media = [];
    _listeners = {};
    _emptyArray = [];
    _lastMediaTime = 0;
    _contextID = 0;
    _dispatch = function _dispatch2(type) {
      return (_listeners[type] || _emptyArray).map(function(f) {
        return f();
      });
    };
    _onMediaChange = function _onMediaChange2() {
      var time2 = Date.now(), matches = [];
      if (time2 - _lastMediaTime > 2) {
        _dispatch("matchMediaInit");
        _media.forEach(function(c) {
          var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
          for (p in queries) {
            match = _win.matchMedia(queries[p]).matches;
            match && (anyMatch = 1);
            if (match !== conditions[p]) {
              conditions[p] = match;
              toggled = 1;
            }
          }
          if (toggled) {
            c.revert();
            anyMatch && matches.push(c);
          }
        });
        _dispatch("matchMediaRevert");
        matches.forEach(function(c) {
          return c.onMatch(c, function(func) {
            return c.add(null, func);
          });
        });
        _lastMediaTime = time2;
        _dispatch("matchMedia");
      }
    };
    Context = /* @__PURE__ */ function() {
      function Context2(func, scope) {
        this.selector = scope && selector(scope);
        this.data = [];
        this._r = [];
        this.isReverted = false;
        this.id = _contextID++;
        func && this.add(func);
      }
      var _proto5 = Context2.prototype;
      _proto5.add = function add(name, func, scope) {
        if (_isFunction(name)) {
          scope = func;
          func = name;
          name = _isFunction;
        }
        var self = this, f = function f2() {
          var prev = _context, prevSelector = self.selector, result;
          prev && prev !== self && prev.data.push(self);
          scope && (self.selector = selector(scope));
          _context = self;
          result = func.apply(self, arguments);
          _isFunction(result) && self._r.push(result);
          _context = prev;
          self.selector = prevSelector;
          self.isReverted = false;
          return result;
        };
        self.last = f;
        return name === _isFunction ? f(self, function(func2) {
          return self.add(null, func2);
        }) : name ? self[name] = f : f;
      };
      _proto5.ignore = function ignore(func) {
        var prev = _context;
        _context = null;
        func(this);
        _context = prev;
      };
      _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function(e) {
          return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
      };
      _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
      };
      _proto5.kill = function kill(revert, matchMedia2) {
        var _this4 = this;
        if (revert) {
          (function() {
            var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
            while (i2--) {
              t = _this4.data[i2];
              if (t.data === "isFlip") {
                t.revert();
                t.getChildren(true, true, false).forEach(function(tween) {
                  return tweens.splice(tweens.indexOf(tween), 1);
                });
              }
            }
            tweens.map(function(t2) {
              return {
                g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
                t: t2
              };
            }).sort(function(a, b) {
              return b.g - a.g || -Infinity;
            }).forEach(function(o) {
              return o.t.revert(revert);
            });
            i2 = _this4.data.length;
            while (i2--) {
              t = _this4.data[i2];
              if (t instanceof Timeline) {
                if (t.data !== "nested") {
                  t.scrollTrigger && t.scrollTrigger.revert();
                  t.kill();
                }
              } else {
                !(t instanceof Tween) && t.revert && t.revert(revert);
              }
            }
            _this4._r.forEach(function(f) {
              return f(revert, _this4);
            });
            _this4.isReverted = true;
          })();
        } else {
          this.data.forEach(function(e) {
            return e.kill && e.kill();
          });
        }
        this.clear();
        if (matchMedia2) {
          var i = _media.length;
          while (i--) {
            _media[i].id === this.id && _media.splice(i, 1);
          }
        }
      };
      _proto5.revert = function revert(config3) {
        this.kill(config3 || {});
      };
      return Context2;
    }();
    MatchMedia = /* @__PURE__ */ function() {
      function MatchMedia2(scope) {
        this.contexts = [];
        this.scope = scope;
        _context && _context.data.push(this);
      }
      var _proto6 = MatchMedia2.prototype;
      _proto6.add = function add(conditions, func, scope) {
        _isObject(conditions) || (conditions = {
          matches: conditions
        });
        var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
        _context && !context3.selector && (context3.selector = _context.selector);
        this.contexts.push(context3);
        func = context3.add("onMatch", func);
        context3.queries = conditions;
        for (p in conditions) {
          if (p === "all") {
            active = 1;
          } else {
            mq = _win.matchMedia(conditions[p]);
            if (mq) {
              _media.indexOf(context3) < 0 && _media.push(context3);
              (cond[p] = mq.matches) && (active = 1);
              mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
            }
          }
        }
        active && func(context3, function(f) {
          return context3.add(null, f);
        });
        return this;
      };
      _proto6.revert = function revert(config3) {
        this.kill(config3 || {});
      };
      _proto6.kill = function kill(revert) {
        this.contexts.forEach(function(c) {
          return c.kill(revert, true);
        });
      };
      return MatchMedia2;
    }();
    _gsap = {
      registerPlugin: function registerPlugin() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        args.forEach(function(config3) {
          return _createPlugin(config3);
        });
      },
      timeline: function timeline(vars) {
        return new Timeline(vars);
      },
      getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
      },
      getProperty: function getProperty(target, property, unit2, uncache) {
        _isString(target) && (target = toArray(target)[0]);
        var getter = _getCache(target || {}).get, format = unit2 ? _passThrough : _numericIfPossible;
        unit2 === "native" && (unit2 = "");
        return !target ? target : !property ? function(property2, unit3, uncache2) {
          return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit3, uncache2));
        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit2, uncache));
      },
      quickSetter: function quickSetter(target, property, unit2) {
        target = toArray(target);
        if (target.length > 1) {
          var setters = target.map(function(t) {
            return gsap.quickSetter(t, property, unit2);
          }), l = setters.length;
          return function(value) {
            var i = l;
            while (i--) {
              setters[i](value);
            }
          };
        }
        target = target[0] || {};
        var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
          var p2 = new Plugin();
          _quickTween._pt = 0;
          p2.init(target, unit2 ? value + unit2 : value, _quickTween, 0, [target]);
          p2.render(1, p2);
          _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p);
        return Plugin ? setter : function(value) {
          return setter(target, p, unit2 ? value + unit2 : value, cache, 1);
        };
      },
      quickTo: function quickTo(target, property, vars) {
        var _setDefaults22;
        var tween = gsap.to(target, _setDefaults((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
          return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
      },
      isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
      },
      defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
      },
      config: function config2(value) {
        return _mergeDeep(_config, value || {});
      },
      registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
          return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function(targets, vars, tl) {
          return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
        };
        if (extendTimeline) {
          Timeline.prototype[name] = function(targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
          };
        }
      },
      registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
      },
      parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
      },
      getById: function getById(id) {
        return _globalTimeline.getById(id);
      },
      exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) {
          vars = {};
        }
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0;
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while (child) {
          next = child._next;
          if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
            _addToTimeline(tl, child, child._start - child._delay);
          }
          child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
      },
      context: function context(func, scope) {
        return func ? new Context(func, scope) : _context;
      },
      matchMedia: function matchMedia(scope) {
        return new MatchMedia(scope);
      },
      matchMediaRefresh: function matchMediaRefresh() {
        return _media.forEach(function(c) {
          var cond = c.conditions, found, p;
          for (p in cond) {
            if (cond[p]) {
              cond[p] = false;
              found = 1;
            }
          }
          found && c.revert();
        }) || _onMediaChange();
      },
      addEventListener: function addEventListener(type, callback) {
        var a = _listeners[type] || (_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
      },
      removeEventListener: function removeEventListener(type, callback) {
        var a = _listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
      },
      utils: {
        wrap,
        wrapYoyo,
        distribute,
        random,
        snap,
        normalize: normalize2,
        getUnit,
        clamp,
        splitColor,
        toArray,
        selector,
        mapRange,
        pipe,
        unitize,
        interpolate,
        shuffle
      },
      install: _install,
      effects: _effects,
      ticker: _ticker,
      updateRoot: Timeline.updateRoot,
      plugins: _plugins,
      globalTimeline: _globalTimeline,
      core: {
        PropTween,
        globals: _addGlobal,
        Tween,
        Timeline,
        Animation,
        getCache: _getCache,
        _removeLinkedListItem,
        reverting: function reverting() {
          return _reverting;
        },
        context: function context2(toAdd) {
          if (toAdd && _context) {
            _context.data.push(toAdd);
            toAdd._ctx = _context;
          }
          return _context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
          return _suppressOverwrites = value;
        }
      }
    };
    _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
      return _gsap[name] = Tween[name];
    });
    _ticker.add(Timeline.updateRoot);
    _quickTween = _gsap.to({}, {
      duration: 0
    });
    _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
      var pt = plugin._pt;
      while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
        pt = pt._next;
      }
      return pt;
    };
    _addModifiers = function _addModifiers2(tween, modifiers) {
      var targets = tween._targets, p, i, pt;
      for (p in modifiers) {
        i = targets.length;
        while (i--) {
          pt = tween._ptLookup[i][p];
          if (pt && (pt = pt.d)) {
            if (pt._pt) {
              pt = _getPluginPropTween(pt, p);
            }
            pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
          }
        }
      }
    };
    _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
      return {
        name,
        headless: 1,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init4(target, vars, tween) {
          tween._onInit = function(tween2) {
            var temp, p;
            if (_isString(vars)) {
              temp = {};
              _forEachName(vars, function(name2) {
                return temp[name2] = 1;
              });
              vars = temp;
            }
            if (modifier) {
              temp = {};
              for (p in vars) {
                temp[p] = modifier(vars[p]);
              }
              vars = temp;
            }
            _addModifiers(tween2, vars);
          };
        }
      };
    };
    gsap = _gsap.registerPlugin({
      name: "attr",
      init: function init(target, vars, tween, index, targets) {
        var p, pt, v;
        this.tween = tween;
        for (p in vars) {
          v = target.getAttribute(p) || "";
          pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
          pt.op = p;
          pt.b = v;
          this._props.push(p);
        }
      },
      render: function render(ratio, data) {
        var pt = data._pt;
        while (pt) {
          _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
          pt = pt._next;
        }
      }
    }, {
      name: "endArray",
      headless: 1,
      init: function init2(target, value) {
        var i = value.length;
        while (i--) {
          this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
        }
      }
    }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
    Tween.version = Timeline.version = gsap.version = "3.13.0";
    _coreReady = 1;
    _windowExists() && _wake();
    Power0 = _easeMap.Power0;
    Power1 = _easeMap.Power1;
    Power2 = _easeMap.Power2;
    Power3 = _easeMap.Power3;
    Power4 = _easeMap.Power4;
    Linear = _easeMap.Linear;
    Quad = _easeMap.Quad;
    Cubic = _easeMap.Cubic;
    Quart = _easeMap.Quart;
    Quint = _easeMap.Quint;
    Strong = _easeMap.Strong;
    Elastic = _easeMap.Elastic;
    Back = _easeMap.Back;
    SteppedEase = _easeMap.SteppedEase;
    Bounce = _easeMap.Bounce;
    Sine = _easeMap.Sine;
    Expo = _easeMap.Expo;
    Circ = _easeMap.Circ;
  }
});

// node_modules/gsap/CSSPlugin.js
var _win2, _doc2, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting2, _windowExists3, _transformProps, _RAD2DEG, _DEG2RAD, _atan2, _bigNum2, _capsExp, _horizontalExp, _complexExp, _propertyAliases, _renderCSSProp, _renderPropWithEnd, _renderCSSPropWithBeginning, _renderRoundedCSSProp, _renderNonTweeningValue, _renderNonTweeningValueOnlyAtEnd, _setterCSSStyle, _setterCSSProp, _setterTransform, _setterScale, _setterScaleWithRender, _setterTransformWithRender, _transformProp, _transformOriginProp, _saveStyle, _removeIndependentTransforms, _revertStyle, _getStyleSaver, _supports3D, _createElement, _getComputedProperty, _prefixes, _checkPropPrefix, _initCore, _getReparentedCloneBBox, _getAttributeFallbacks, _getBBox, _isSVG, _removeProperty, _addNonTweeningPT, _nonConvertibleUnits, _nonStandardLayouts, _convertToUnit, _get, _tweenComplexCSSString, _keywordToPercent, _convertKeywordsToPercentages, _renderClearProps, _specialProps, _identity2DMatrix, _rotationalProperties, _isNullTransform, _getComputedTransformMatrixAsArray, _getMatrix, _applySVGOrigin, _parseTransform, _firstTwoOnly, _addPxTranslate, _renderNon3DTransforms, _zeroDeg, _zeroPx, _endParenthesis, _renderCSSTransforms, _renderSVGTransforms, _addRotationalPropTween, _assign, _addRawTransformPTs, CSSPlugin;
var init_CSSPlugin = __esm({
  "node_modules/gsap/CSSPlugin.js"() {
    init_gsap_core();
    _windowExists3 = function _windowExists4() {
      return typeof window !== "undefined";
    };
    _transformProps = {};
    _RAD2DEG = 180 / Math.PI;
    _DEG2RAD = Math.PI / 180;
    _atan2 = Math.atan2;
    _bigNum2 = 1e8;
    _capsExp = /([A-Z])/g;
    _horizontalExp = /(left|right|width|margin|padding|x)/i;
    _complexExp = /[\s,\(]\S/;
    _propertyAliases = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    };
    _renderCSSProp = function _renderCSSProp2(ratio, data) {
      return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
    };
    _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
      return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
    };
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
      return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
    };
    _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
      var value = data.s + data.c * ratio;
      data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
    };
    _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
      return data.set(data.t, data.p, ratio ? data.e : data.b, data);
    };
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
      return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
    };
    _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
      return target.style[property] = value;
    };
    _setterCSSProp = function _setterCSSProp2(target, property, value) {
      return target.style.setProperty(property, value);
    };
    _setterTransform = function _setterTransform2(target, property, value) {
      return target._gsap[property] = value;
    };
    _setterScale = function _setterScale2(target, property, value) {
      return target._gsap.scaleX = target._gsap.scaleY = value;
    };
    _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
      var cache = target._gsap;
      cache.scaleX = cache.scaleY = value;
      cache.renderTransform(ratio, cache);
    };
    _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
      var cache = target._gsap;
      cache[property] = value;
      cache.renderTransform(ratio, cache);
    };
    _transformProp = "transform";
    _transformOriginProp = _transformProp + "Origin";
    _saveStyle = function _saveStyle2(property, isNotCSS) {
      var _this = this;
      var target = this.target, style = target.style, cache = target._gsap;
      if (property in _transformProps && style) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
          property = _propertyAliases[property] || property;
          ~property.indexOf(",") ? property.split(",").forEach(function(a) {
            return _this.tfm[a] = _get(target, a);
          }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
          property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
        } else {
          return _propertyAliases.transform.split(",").forEach(function(p) {
            return _saveStyle2.call(_this, p, isNotCSS);
          });
        }
        if (this.props.indexOf(_transformProp) >= 0) {
          return;
        }
        if (cache.svg) {
          this.svgo = target.getAttribute("data-svg-origin");
          this.props.push(_transformOriginProp, isNotCSS, "");
        }
        property = _transformProp;
      }
      (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
    };
    _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
      if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
      }
    };
    _revertStyle = function _revertStyle2() {
      var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
      for (i = 0; i < props.length; i += 3) {
        if (!props[i + 1]) {
          props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
        } else if (props[i + 1] === 2) {
          target[props[i]](props[i + 2]);
        } else {
          target[props[i]] = props[i + 2];
        }
      }
      if (this.tfm) {
        for (p in this.tfm) {
          cache[p] = this.tfm[p];
        }
        if (cache.svg) {
          cache.renderTransform();
          target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = _reverting2();
        if ((!i || !i.isStart) && !style[_transformProp]) {
          _removeIndependentTransforms(style);
          if (cache.zOrigin && style[_transformOriginProp]) {
            style[_transformOriginProp] += " " + cache.zOrigin + "px";
            cache.zOrigin = 0;
            cache.renderTransform();
          }
          cache.uncache = 1;
        }
      }
    };
    _getStyleSaver = function _getStyleSaver2(target, properties) {
      var saver = {
        target,
        props: [],
        revert: _revertStyle,
        save: _saveStyle
      };
      target._gsap || gsap.core.getCache(target);
      properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
        return saver.save(p);
      });
      return saver;
    };
    _createElement = function _createElement2(type, ns) {
      var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
      return e && e.style ? e : _doc2.createElement(type);
    };
    _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
      var cs = getComputedStyle(target);
      return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
    };
    _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
    _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
      var e = element || _tempDiv, s = e.style, i = 5;
      if (property in s && !preferPrefix) {
        return property;
      }
      property = property.charAt(0).toUpperCase() + property.substr(1);
      while (i-- && !(_prefixes[i] + property in s)) {
      }
      return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
    };
    _initCore = function _initCore2() {
      if (_windowExists3() && window.document) {
        _win2 = window;
        _doc2 = _win2.document;
        _docElement = _doc2.documentElement;
        _tempDiv = _createElement("div") || {
          style: {}
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
        _supports3D = !!_checkPropPrefix("perspective");
        _reverting2 = gsap.core.reverting;
        _pluginInitted = 1;
      }
    };
    _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
      var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
      clone.style.display = "block";
      svg.appendChild(clone);
      _docElement.appendChild(svg);
      try {
        bbox = clone.getBBox();
      } catch (e) {
      }
      svg.removeChild(clone);
      _docElement.removeChild(svg);
      return bbox;
    };
    _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
      var i = attributesArray.length;
      while (i--) {
        if (target.hasAttribute(attributesArray[i])) {
          return target.getAttribute(attributesArray[i]);
        }
      }
    };
    _getBBox = function _getBBox2(target) {
      var bounds, cloned;
      try {
        bounds = target.getBBox();
      } catch (error) {
        bounds = _getReparentedCloneBBox(target);
        cloned = 1;
      }
      bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
      return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
        y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      } : bounds;
    };
    _isSVG = function _isSVG2(e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
    };
    _removeProperty = function _removeProperty2(target, property) {
      if (property) {
        var style = target.style, first2Chars;
        if (property in _transformProps && property !== _transformOriginProp) {
          property = _transformProp;
        }
        if (style.removeProperty) {
          first2Chars = property.substr(0, 2);
          if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
            property = "-" + property;
          }
          style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
        } else {
          style.removeAttribute(property);
        }
      }
    };
    _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
      var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
      plugin._pt = pt;
      pt.b = beginning;
      pt.e = end;
      plugin._props.push(property);
      return pt;
    };
    _nonConvertibleUnits = {
      deg: 1,
      rad: 1,
      turn: 1
    };
    _nonStandardLayouts = {
      grid: 1,
      flex: 1
    };
    _convertToUnit = function _convertToUnit2(target, property, value, unit2) {
      var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit2 === "px", toPercent = unit2 === "%", px, parent, cache, isSVG;
      if (unit2 === curUnit || !curValue || _nonConvertibleUnits[unit2] || _nonConvertibleUnits[curUnit]) {
        return curValue;
      }
      curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
      isSVG = target.getCTM && _isSVG(target);
      if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
      }
      style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit2);
      parent = unit2 !== "rem" && ~property.indexOf("adius") || unit2 === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
      if (isSVG) {
        parent = (target.ownerSVGElement || {}).parentNode;
      }
      if (!parent || parent === _doc2 || !parent.appendChild) {
        parent = _doc2.body;
      }
      cache = parent._gsap;
      if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
        return _round(curValue / cache.width * amount);
      } else {
        if (toPercent && (property === "height" || property === "width")) {
          var v = target.style[property];
          target.style[property] = amount + unit2;
          px = target[measureProperty];
          v ? target.style[property] = v : _removeProperty(target, property);
        } else {
          (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
          parent === target && (style.position = "static");
          parent.appendChild(_tempDiv);
          px = _tempDiv[measureProperty];
          parent.removeChild(_tempDiv);
          style.position = "absolute";
        }
        if (horizontal && toPercent) {
          cache = _getCache(parent);
          cache.time = _ticker.time;
          cache.width = parent[measureProperty];
        }
      }
      return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
    };
    _get = function _get2(target, property, unit2, uncache) {
      var value;
      _pluginInitted || _initCore();
      if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) {
          property = property.split(",")[0];
        }
      }
      if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
      } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
          value = _specialProps[property] && _specialProps[property](target, property, unit2) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
        }
      }
      return unit2 && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit2) + unit2 : value;
    };
    _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
      if (!start || start === "none") {
        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
          prop = p;
          start = s;
        } else if (prop === "borderColor") {
          start = _getComputedProperty(target, "borderTopColor");
        }
      }
      var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color2, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
      pt.b = start;
      pt.e = end;
      start += "";
      end += "";
      if (end.substring(0, 6) === "var(--") {
        end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
      }
      if (end === "auto") {
        startValue = target.style[prop];
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
      }
      a = [start, end];
      _colorStringFilter(a);
      start = a[0];
      end = a[1];
      startValues = start.match(_numWithUnitExp) || [];
      endValues = end.match(_numWithUnitExp) || [];
      if (endValues.length) {
        while (result = _numWithUnitExp.exec(end)) {
          endValue = result[0];
          chunk = end.substring(index, result.index);
          if (color2) {
            color2 = (color2 + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
            color2 = 1;
          }
          if (endValue !== (startValue = startValues[matchIndex++] || "")) {
            startNum = parseFloat(startValue) || 0;
            startUnit = startValue.substr((startNum + "").length);
            endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
            endNum = parseFloat(endValue);
            endUnit = endValue.substr((endNum + "").length);
            index = _numWithUnitExp.lastIndex - endUnit.length;
            if (!endUnit) {
              endUnit = endUnit || _config.units[prop] || startUnit;
              if (index === end.length) {
                end += endUnit;
                pt.e += endUnit;
              }
            }
            if (startUnit !== endUnit) {
              startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
            }
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
              s: startNum,
              c: endNum - startNum,
              m: color2 && color2 < 4 || prop === "zIndex" ? Math.round : 0
            };
          }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : "";
      } else {
        pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
      }
      _relExp.test(end) && (pt.e = 0);
      this._pt = pt;
      return pt;
    };
    _keywordToPercent = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    };
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
      var split = value.split(" "), x = split[0], y = split[1] || "50%";
      if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        value = x;
        x = y;
        y = value;
      }
      split[0] = _keywordToPercent[x] || x;
      split[1] = _keywordToPercent[y] || y;
      return split.join(" ");
    };
    _renderClearProps = function _renderClearProps2(ratio, data) {
      if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
          style.cssText = "";
          clearTransforms = 1;
        } else {
          props = props.split(",");
          i = props.length;
          while (--i > -1) {
            prop = props[i];
            if (_transformProps[prop]) {
              clearTransforms = 1;
              prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
            }
            _removeProperty(target, prop);
          }
        }
        if (clearTransforms) {
          _removeProperty(target, _transformProp);
          if (cache) {
            cache.svg && target.removeAttribute("transform");
            style.scale = style.rotate = style.translate = "none";
            _parseTransform(target, 1);
            cache.uncache = 1;
            _removeIndependentTransforms(style);
          }
        }
      }
    };
    _specialProps = {
      clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
          var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
          pt.u = endValue;
          pt.pr = -10;
          pt.tween = tween;
          plugin._props.push(property);
          return 1;
        }
      }
      /* className feature (about 0.4kb gzipped).
      , className(plugin, target, property, endValue, tween) {
      	let _renderClassName = (ratio, data) => {
      			data.css.render(ratio, data.css);
      			if (!ratio || ratio === 1) {
      				let inline = data.rmv,
      					target = data.t,
      					p;
      				target.setAttribute("class", ratio ? data.e : data.b);
      				for (p in inline) {
      					_removeProperty(target, p);
      				}
      			}
      		},
      		_getAllStyles = (target) => {
      			let styles = {},
      				computed = getComputedStyle(target),
      				p;
      			for (p in computed) {
      				if (isNaN(p) && p !== "cssText" && p !== "length") {
      					styles[p] = computed[p];
      				}
      			}
      			_setDefaults(styles, _parseTransform(target, 1));
      			return styles;
      		},
      		startClassList = target.getAttribute("class"),
      		style = target.style,
      		cssText = style.cssText,
      		cache = target._gsap,
      		classPT = cache.classPT,
      		inlineToRemoveAtEnd = {},
      		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
      		changingVars = {},
      		startVars = _getAllStyles(target),
      		transformRelated = /(transform|perspective)/i,
      		endVars, p;
      	if (classPT) {
      		classPT.r(1, classPT.d);
      		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
      	}
      	target.setAttribute("class", data.e);
      	endVars = _getAllStyles(target, true);
      	target.setAttribute("class", startClassList);
      	for (p in endVars) {
      		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
      			changingVars[p] = endVars[p];
      			if (!style[p] && style[p] !== "0") {
      				inlineToRemoveAtEnd[p] = 1;
      			}
      		}
      	}
      	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
      	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
      		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
      	}
      	_parseTransform(target, true); //to clear the caching of transforms
      	data.css = new gsap.plugins.css();
      	data.css.init(target, changingVars, tween);
      	plugin._props.push(...data.css._props);
      	return 1;
      }
      */
    };
    _identity2DMatrix = [1, 0, 0, 1, 0, 0];
    _rotationalProperties = {};
    _isNullTransform = function _isNullTransform2(value) {
      return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
    };
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
      var matrixString = _getComputedProperty(target, _transformProp);
      return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
    };
    _getMatrix = function _getMatrix2(target, force2D) {
      var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
      if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix;
        matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
      } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
          addedToDOM = 1;
          nextSibling = target.nextElementSibling;
          _docElement.appendChild(target);
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) {
          nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
        }
      }
      return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
    };
    _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
      var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
      if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
      } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
      }
      if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
      } else {
        cache.xOffset = cache.yOffset = 0;
      }
      cache.xOrigin = xOrigin;
      cache.yOrigin = yOrigin;
      cache.smooth = !!smooth;
      cache.origin = origin;
      cache.originIsAbsolute = !!originIsAbsolute;
      target.style[_transformOriginProp] = "0px 0px";
      if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
      }
      target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
    };
    _parseTransform = function _parseTransform2(target, uncache) {
      var cache = target._gsap || new GSCache(target);
      if ("x" in cache && !uncache && !cache.uncache) {
        return cache;
      }
      var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t12, t2, t3, a13, a23, a33, a42, a43, a32;
      x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
      scaleX = scaleY = 1;
      cache.svg = !!(target.getCTM && _isSVG(target));
      if (cs.translate) {
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
          style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
        }
        style.scale = style.rotate = style.translate = "none";
      }
      matrix = _getMatrix(target, cache.svg);
      if (cache.svg) {
        if (cache.uncache) {
          t2 = target.getBBox();
          origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
          t12 = "";
        } else {
          t12 = !uncache && target.getAttribute("data-svg-origin");
        }
        _applySVGOrigin(target, t12 || origin, !!t12 || cache.originIsAbsolute, cache.smooth !== false, matrix);
      }
      xOrigin = cache.xOrigin || 0;
      yOrigin = cache.yOrigin || 0;
      if (matrix !== _identity2DMatrix) {
        a = matrix[0];
        b = matrix[1];
        c = matrix[2];
        d = matrix[3];
        x = a12 = matrix[4];
        y = a22 = matrix[5];
        if (matrix.length === 6) {
          scaleX = Math.sqrt(a * a + b * b);
          scaleY = Math.sqrt(d * d + c * c);
          rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
          skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
          skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
          if (cache.svg) {
            x -= xOrigin - (xOrigin * a + yOrigin * c);
            y -= yOrigin - (xOrigin * b + yOrigin * d);
          }
        } else {
          a32 = matrix[6];
          a42 = matrix[7];
          a13 = matrix[8];
          a23 = matrix[9];
          a33 = matrix[10];
          a43 = matrix[11];
          x = matrix[12];
          y = matrix[13];
          z = matrix[14];
          angle = _atan2(a32, a33);
          rotationX = angle * _RAD2DEG;
          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t12 = a12 * cos + a13 * sin;
            t2 = a22 * cos + a23 * sin;
            t3 = a32 * cos + a33 * sin;
            a13 = a12 * -sin + a13 * cos;
            a23 = a22 * -sin + a23 * cos;
            a33 = a32 * -sin + a33 * cos;
            a43 = a42 * -sin + a43 * cos;
            a12 = t12;
            a22 = t2;
            a32 = t3;
          }
          angle = _atan2(-c, a33);
          rotationY = angle * _RAD2DEG;
          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t12 = a * cos - a13 * sin;
            t2 = b * cos - a23 * sin;
            t3 = c * cos - a33 * sin;
            a43 = d * sin + a43 * cos;
            a = t12;
            b = t2;
            c = t3;
          }
          angle = _atan2(b, a);
          rotation = angle * _RAD2DEG;
          if (angle) {
            cos = Math.cos(angle);
            sin = Math.sin(angle);
            t12 = a * cos + b * sin;
            t2 = a12 * cos + a22 * sin;
            b = b * cos - a * sin;
            a22 = a22 * cos - a12 * sin;
            a = t12;
            a12 = t2;
          }
          if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
            rotationX = rotation = 0;
            rotationY = 180 - rotationY;
          }
          scaleX = _round(Math.sqrt(a * a + b * b + c * c));
          scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
          angle = _atan2(a12, a22);
          skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
          perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
          t12 = target.getAttribute("transform");
          cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
          t12 && target.setAttribute("transform", t12);
        }
      }
      if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
          scaleX *= -1;
          skewX += rotation <= 0 ? 180 : -180;
          rotation += rotation <= 0 ? 180 : -180;
        } else {
          scaleY *= -1;
          skewX += skewX <= 0 ? 180 : -180;
        }
      }
      uncache = uncache || cache.uncache;
      cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
      cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
      cache.z = z + px;
      cache.scaleX = _round(scaleX);
      cache.scaleY = _round(scaleY);
      cache.rotation = _round(rotation) + deg;
      cache.rotationX = _round(rotationX) + deg;
      cache.rotationY = _round(rotationY) + deg;
      cache.skewX = skewX + deg;
      cache.skewY = skewY + deg;
      cache.transformPerspective = perspective + px;
      if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
        style[_transformOriginProp] = _firstTwoOnly(origin);
      }
      cache.xOffset = cache.yOffset = 0;
      cache.force3D = _config.force3D;
      cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
      cache.uncache = 0;
      return cache;
    };
    _firstTwoOnly = function _firstTwoOnly2(value) {
      return (value = value.split(" "))[0] + " " + value[1];
    };
    _addPxTranslate = function _addPxTranslate2(target, start, value) {
      var unit2 = getUnit(start);
      return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit2))) + unit2;
    };
    _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
      cache.z = "0px";
      cache.rotationY = cache.rotationX = "0deg";
      cache.force3D = 0;
      _renderCSSTransforms(ratio, cache);
    };
    _zeroDeg = "0deg";
    _zeroPx = "0px";
    _endParenthesis = ") ";
    _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
      var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
      if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
      }
      if (transformPerspective !== _zeroPx) {
        transforms += "perspective(" + transformPerspective + _endParenthesis;
      }
      if (xPercent || yPercent) {
        transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
      }
      if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
        transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
      }
      if (rotation !== _zeroDeg) {
        transforms += "rotate(" + rotation + _endParenthesis;
      }
      if (rotationY !== _zeroDeg) {
        transforms += "rotateY(" + rotationY + _endParenthesis;
      }
      if (rotationX !== _zeroDeg) {
        transforms += "rotateX(" + rotationX + _endParenthesis;
      }
      if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
        transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
      }
      if (scaleX !== 1 || scaleY !== 1) {
        transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
      }
      target.style[_transformProp] = transforms || "translate(0, 0)";
    };
    _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
      var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
      rotation = parseFloat(rotation);
      skewX = parseFloat(skewX);
      skewY = parseFloat(skewY);
      if (skewY) {
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
      }
      if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
          skewY *= _DEG2RAD;
          temp = Math.tan(skewX - skewY);
          temp = Math.sqrt(1 + temp * temp);
          a12 *= temp;
          a22 *= temp;
          if (skewY) {
            temp = Math.tan(skewY);
            temp = Math.sqrt(1 + temp * temp);
            a11 *= temp;
            a21 *= temp;
          }
        }
        a11 = _round(a11);
        a21 = _round(a21);
        a12 = _round(a12);
        a22 = _round(a22);
      } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
      }
      if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
      }
      if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
      }
      if (xPercent || yPercent) {
        temp = target.getBBox();
        tx = _round(tx + xPercent / 100 * temp.width);
        ty = _round(ty + yPercent / 100 * temp.height);
      }
      temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
      target.setAttribute("transform", temp);
      forceCSS && (target.style[_transformProp] = temp);
    };
    _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
      var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
      if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
          change %= cap;
          if (change !== change % (cap / 2)) {
            change += change < 0 ? cap : -cap;
          }
        }
        if (direction === "cw" && change < 0) {
          change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
        } else if (direction === "ccw" && change > 0) {
          change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
        }
      }
      plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
      pt.e = finalValue;
      pt.u = "deg";
      plugin._props.push(property);
      return pt;
    };
    _assign = function _assign2(target, source) {
      for (var p in source) {
        target[p] = source[p];
      }
      return target;
    };
    _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
      var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
      if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
      } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
      }
      for (p in _transformProps) {
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
          startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
          endNum = parseFloat(endValue);
          plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
          plugin._pt.u = endUnit || 0;
          plugin._props.push(p);
        }
      }
      _assign(endCache, startCache);
    };
    _forEachName("padding,margin,Width,Radius", function(name, index) {
      var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
      });
      _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
          a = props.map(function(prop) {
            return _get(plugin, prop, property);
          });
          vars = a.join(" ");
          return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
          return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
      };
    });
    CSSPlugin = {
      name: "css",
      register: _initCore,
      targetTest: function targetTest(target) {
        return target.style && target.nodeType;
      },
      init: function init3(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
        _pluginInitted || _initCore();
        this.styles = this.styles || _getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for (p in vars) {
          if (p === "autoRound") {
            continue;
          }
          endValue = vars[p];
          if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
            continue;
          }
          type = typeof endValue;
          specialProp = _specialProps[p];
          if (type === "function") {
            endValue = endValue.call(tween, index, target, targets);
            type = typeof endValue;
          }
          if (type === "string" && ~endValue.indexOf("random(")) {
            endValue = _replaceRandom(endValue);
          }
          if (specialProp) {
            specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
          } else if (p.substr(0, 2) === "--") {
            startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
            endValue += "";
            _colorExp.lastIndex = 0;
            if (!_colorExp.test(startValue)) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
            }
            endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
            this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
            props.push(p);
            inlineProps.push(p, 0, style[p]);
          } else if (type !== "undefined") {
            if (startAt && p in startAt) {
              startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
              _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
              getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
              (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
            } else {
              startValue = _get(target, p);
            }
            startNum = parseFloat(startValue);
            relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
            relative && (endValue = endValue.substr(2));
            endNum = parseFloat(endValue);
            if (p in _propertyAliases) {
              if (p === "autoAlpha") {
                if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                  startNum = 0;
                }
                inlineProps.push("visibility", 0, style.visibility);
                _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
              }
              if (p !== "scale" && p !== "transform") {
                p = _propertyAliases[p];
                ~p.indexOf(",") && (p = p.split(",")[0]);
              }
            }
            isTransformRelated = p in _transformProps;
            if (isTransformRelated) {
              this.styles.save(p);
              if (type === "string" && endValue.substring(0, 6) === "var(--") {
                endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
                endNum = parseFloat(endValue);
              }
              if (!transformPropTween) {
                cache = target._gsap;
                cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                smooth = vars.smoothOrigin !== false && cache.smooth;
                transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                transformPropTween.dep = 1;
              }
              if (p === "scale") {
                this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                this._pt.u = 0;
                props.push("scaleY", p);
                p += "X";
              } else if (p === "transformOrigin") {
                inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                endValue = _convertKeywordsToPercentages(endValue);
                if (cache.svg) {
                  _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                } else {
                  endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                  endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                  _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                }
                continue;
              } else if (p === "svgOrigin") {
                _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                continue;
              } else if (p in _rotationalProperties) {
                _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                continue;
              } else if (p === "smoothOrigin") {
                _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                continue;
              } else if (p === "force3D") {
                cache[p] = endValue;
                continue;
              } else if (p === "transform") {
                _addRawTransformPTs(this, endValue, target);
                continue;
              }
            } else if (!(p in style)) {
              p = _checkPropPrefix(p) || p;
            }
            if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
              startUnit = (startValue + "").substr((startNum + "").length);
              endNum || (endNum = 0);
              endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
              startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
              this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
              this._pt.u = endUnit || 0;
              if (startUnit !== endUnit && endUnit !== "%") {
                this._pt.b = startValue;
                this._pt.r = _renderCSSPropWithBeginning;
              }
            } else if (!(p in style)) {
              if (p in target) {
                this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
              } else if (p !== "parseTransform") {
                _missingPlugin(p, endValue);
                continue;
              }
            } else {
              _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
            }
            isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
            props.push(p);
          }
        }
        hasPriority && _sortPropTweensByPriority(this);
      },
      render: function render2(ratio, data) {
        if (data.tween._time || !_reverting2()) {
          var pt = data._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
        } else {
          data.styles.revert();
        }
      },
      get: _get,
      aliases: _propertyAliases,
      getSetter: function getSetter(target, property, plugin) {
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
      },
      core: {
        _removeProperty,
        _getMatrix
      }
    };
    gsap.utils.checkPrefix = _checkPropPrefix;
    gsap.core.getStyleSaver = _getStyleSaver;
    (function(positionAndScale, rotation, others, aliases) {
      var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
        _transformProps[name] = 1;
      });
      _forEachName(rotation, function(name) {
        _config.units[name] = "deg";
        _rotationalProperties[name] = 1;
      });
      _propertyAliases[all[13]] = positionAndScale + "," + rotation;
      _forEachName(aliases, function(name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
      });
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
      _config.units[name] = "px";
    });
    gsap.registerPlugin(CSSPlugin);
  }
});

// node_modules/gsap/index.js
var gsap_exports = {};
__export(gsap_exports, {
  Back: () => Back,
  Bounce: () => Bounce,
  CSSPlugin: () => CSSPlugin,
  Circ: () => Circ,
  Cubic: () => Cubic,
  Elastic: () => Elastic,
  Expo: () => Expo,
  Linear: () => Linear,
  Power0: () => Power0,
  Power1: () => Power1,
  Power2: () => Power2,
  Power3: () => Power3,
  Power4: () => Power4,
  Quad: () => Quad,
  Quart: () => Quart,
  Quint: () => Quint,
  Sine: () => Sine,
  SteppedEase: () => SteppedEase,
  Strong: () => Strong,
  TimelineLite: () => Timeline,
  TimelineMax: () => Timeline,
  TweenLite: () => Tween,
  TweenMax: () => TweenMaxWithCSS,
  default: () => gsapWithCSS,
  gsap: () => gsapWithCSS
});
var gsapWithCSS, TweenMaxWithCSS;
var init_gsap = __esm({
  "node_modules/gsap/index.js"() {
    init_gsap_core();
    init_CSSPlugin();
    gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
    TweenMaxWithCSS = gsapWithCSS.core.Tween;
  }
});

// src/components/ProductRoadmap/ProductRoadmap.tsx
var import_classnames = __toESM(require_classnames(), 1);
import React, { memo, useMemo, useState, useCallback, useLayoutEffect, useRef } from "react";

// node_modules/d3-array/src/ascending.js
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-array/src/descending.js
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x) => ascending(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left, center, right };
}
function zero() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x) {
  return x === null ? NaN : +x;
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}
function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t12, v0, v1, v2, v3) {
  var t2 = t12 * t12, t3 = t2 * t12;
  return ((1 - 3 * t12 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t12 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default = (x) => () => x;

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant_default(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default(isNaN(a) ? b : a);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start, end) {
    var r = color2((start = rgb(start)).r, (end = rgb(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i) x[i] = value_default(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a, b) {
  var d = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};
  for (k in b) {
    if (k in a) {
      i[k] = value_default(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant_default(b) : (t === "number" ? number_default : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
}

// node_modules/d3-interpolate/src/round.js
function round_default(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

// node_modules/d3-scale/src/constant.js
function constants(x) {
  return function() {
    return x;
  };
}

// node_modules/d3-scale/src/number.js
function number2(x) {
  return +x;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) {
    return Math.max(a, Math.min(b, x));
  };
}
function bimap(domain, range, interpolate3) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate3(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate3(r0, r1);
  return function(x) {
    return r0(d0(x));
  };
}
function polymap(domain, range, interpolate3) {
  var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate3(range[i], range[i + 1]);
  }
  return function(x) {
    var i2 = bisect_default(domain, x, 1, j) - 1;
    return r[i2](d[i2](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate3 = value_default, transform, untransform, unknown, clamp4 = identity, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp4 !== identity) clamp4 = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate3)))(transform(clamp4(x)));
  }
  scale.invert = function(y) {
    return clamp4(untransform((input || (input = piecewise(range, domain.map(transform), number_default)))(y)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number2), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate3 = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp4 = _ ? true : identity, rescale()) : clamp4 !== identity;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate3 = _, rescale()) : interpolate3;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity, identity);
}

// node_modules/d3-scale/src/nice.js
function nice(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

// node_modules/d3-time/src/interval.js
var t0 = /* @__PURE__ */ new Date();
var t1 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = (date2) => {
    const d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = (start, stop, step) => {
    const range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range;
    let previous;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };
  interval.filter = (test) => {
    return timeInterval((date2) => {
      if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date2, -1), !test(date2)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date2, 1), !test(date2)) {
          }
        }
      }
    });
  };
  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d) => field(d) % step === 0 : (d) => interval.count(0, d) % step === 0);
    };
  }
  return interval;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date2, step) => {
  date2.setTime(+date2 + step);
}, (start, end) => {
  return end - start;
});
millisecond.every = (k) => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return timeInterval((date2) => {
    date2.setTime(Math.floor(date2 / k) * k);
  }, (date2, step) => {
    date2.setTime(+date2 + step * k);
  }, (start, end) => {
    return (end - start) / k;
  });
};
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds());
}, (date2, step) => {
  date2.setTime(+date2 + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date2) => {
  return date2.getUTCSeconds();
});
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date2) => {
  return date2.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date2) => {
  date2.setUTCSeconds(0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date2) => {
  return date2.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date2) => {
  return date2.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date2) => {
  date2.setUTCMinutes(0, 0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date2) => {
  return date2.getUTCHours();
});
var utcHours = utcHour.range;

// node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date2) => {
  return date2.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date2) => {
  return Math.floor(date2 / durationDay);
});
var unixDays = unixDay.range;

// node_modules/d3-time/src/week.js
function timeWeekday(i) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date2) => {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setMonth(date2.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date2) => {
  return date2.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date2) => {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date2) => {
  return date2.getUTCMonth();
});
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/year.js
var timeYear = timeInterval((date2) => {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setFullYear(date2.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date2) => {
  return date2.getFullYear();
});
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date2) => {
    date2.setFullYear(Math.floor(date2.getFullYear() / k) * k);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step * k);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date2) => {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date2) => {
  return date2.getUTCFullYear();
});
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date2) => {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k) * k);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k);
  });
};
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks3 = interval ? interval.range(start, +stop + 1) : [];
    return reverse ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
  return { y, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale2) {
  var locale_dateTime = locale2.dateTime, locale_date = locale2.date, locale_time = locale2.time, locale_periods = locale2.periods, locale_weekdays = locale2.days, locale_shortWeekdays = locale2.shortDays, locale_months = locale2.months, locale_shortMonths = locale2.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c, pad2, format;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad2 = c === "e" ? " " : "0";
          if (format = formats2[c]) c = format(date2, pad2);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
      if (i != string.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c, parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}

// node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number3(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear2 = format("%Y");
  function tickFormat(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y) {
    return new Date(invert(y));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number3)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };
  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// src/components/ProductRoadmap/ProductRoadmap.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var clamp3 = (val, min, max, def) => {
  if (val == null || Number.isNaN(val)) return def;
  return Math.min(max, Math.max(min, val));
};
var RoadmapItem = ({ item, maxLines, enableDrilldown, onExpand, isActive, topLaneIndex }) => {
  const { ariaLabel } = item;
  const left = `${item._pxLeft}px`;
  const width = `${item._pxWidth}px`;
  const top = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${topLaneIndex})`;
  const ariaColIndex = Math.floor(item._startFraction) + 2;
  const ariaColSpan = Math.max(1, Math.round(item._spanColumns));
  const expandable = enableDrilldown && item.childItems && item.childItems.length > 0;
  const handleActivate = (e) => {
    if (!expandable) return;
    e.preventDefault();
    onExpand == null ? void 0 : onExpand(item);
  };
  const interactiveProps = expandable ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": isActive || false,
    onClick: handleActivate,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") handleActivate(e);
      if (e.key === "Escape" && isActive) handleActivate(e);
    }
  } : {};
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: (0, import_classnames.default)("nhsuk-product-roadmap__item", expandable && "nhsuk-product-roadmap__item--expandable", isActive && "nhsuk-product-roadmap__item--active"),
      style: { left, width, top, ["--item-height"]: maxLines },
      role: "gridcell",
      "aria-label": ariaLabel,
      "aria-colindex": ariaColIndex,
      "aria-colspan": ariaColSpan,
      ...interactiveProps,
      children: [
        /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ jsx("span", { className: "nhsuk-product-roadmap__item-title", children: item.title }),
          expandable && /* @__PURE__ */ jsx("span", { className: (0, import_classnames.default)("nhsuk-product-roadmap__item-expander", isActive && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
};
var ProductRoadmap = memo(({
  dateHeadings,
  categories,
  columnWidthPx = 400,
  itemMaxLines = 2,
  className,
  ariaLabel = "Product roadmap",
  enableDrilldown = false,
  onToggleItem,
  drilldownMode = "overlay",
  ...rest
}) => {
  const [activeItemIds, setActiveItemIds] = useState(() => /* @__PURE__ */ new Set());
  const [collapsingIds, setCollapsingIds] = useState(() => /* @__PURE__ */ new Set());
  const prevActiveRef = useRef(/* @__PURE__ */ new Set());
  const isItemActive = useCallback((id) => activeItemIds.has(id), [activeItemIds]);
  const handleExpand = useCallback((item) => {
    setActiveItemIds((curr) => {
      const next = new Set(curr);
      if (next.has(item.id)) {
        next.delete(item.id);
        setCollapsingIds((c) => {
          const copy2 = new Set(c);
          copy2.add(item.id);
          return copy2;
        });
        setTimeout(() => setCollapsingIds((c) => {
          const copy2 = new Set(c);
          copy2.delete(item.id);
          return copy2;
        }), 240);
        onToggleItem == null ? void 0 : onToggleItem(item.id, false);
      } else {
        next.add(item.id);
        onToggleItem == null ? void 0 : onToggleItem(item.id, true);
      }
      return next;
    });
  }, [onToggleItem]);
  useLayoutEffect(() => {
    if (drilldownMode !== "inline" || !enableDrilldown) return;
    const newlyOpened = [];
    activeItemIds.forEach((id) => {
      if (!prevActiveRef.current.has(id)) newlyOpened.push(id);
    });
    prevActiveRef.current = new Set(activeItemIds);
    if (!newlyOpened.length) return;
    const prefersReduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selector3 = newlyOpened.map((id) => `.nhsuk-product-roadmap__inline-children[data-parent="${id}"] .nhsuk-product-roadmap__inline-child`).join(",");
    const nodes = Array.from(document.querySelectorAll(selector3));
    if (!nodes.length) return;
    if (prefersReduce) {
      nodes.forEach((ch) => {
        ch.style.opacity = "1";
        ch.style.transform = "translateY(0)";
      });
      return;
    }
    Promise.resolve().then(() => (init_gsap(), gsap_exports)).then((gsapMod) => {
      const gsap2 = gsapMod.gsap || gsapMod.default || gsapMod;
      gsap2.to(nodes, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
    }).catch(() => {
      nodes.forEach((ch) => {
        ch.style.opacity = "1";
        ch.style.transform = "translateY(0)";
      });
    });
  }, [activeItemIds, drilldownMode, enableDrilldown]);
  const closePanel = useCallback(() => {
    if (activeItemIds.size) {
      setActiveItemIds(/* @__PURE__ */ new Set());
    }
  }, [activeItemIds]);
  const rootCls = (0, import_classnames.default)("nhsuk-product-roadmap", className);
  const colWidth = clamp3(columnWidthPx, 120, 1200, 400);
  const maxLines = clamp3(itemMaxLines, 1, 6, 2);
  const headingDates = useMemo(() => dateHeadings.map((h) => /* @__PURE__ */ new Date(h + " 01")), [dateHeadings]);
  const timeDomain = useMemo(() => {
    if (headingDates.length === 0) {
      const now = /* @__PURE__ */ new Date();
      return [now, now];
    }
    const start = new Date(headingDates[0]);
    const end = timeMonth.offset(new Date(headingDates[headingDates.length - 1]), 1);
    return [start, end];
  }, [headingDates]);
  const xScale = useMemo(() => time().domain(timeDomain).range([0, headingDates.length * colWidth]), [timeDomain, headingDates.length, colWidth]);
  const positionItem = useCallback((it) => {
    var _a, _b, _c, _d, _e;
    if (it.startDate) {
      const start = new Date(it.startDate);
      const end = new Date((_a = it.endDate) != null ? _a : it.startDate);
      if (end < start) end.setTime(start.getTime());
      const pxLeft = xScale(start);
      const visualEnd = timeMonth.offset(new Date(end), 1);
      let pxRight = xScale(visualEnd);
      if (!Number.isFinite(pxRight)) pxRight = pxLeft + colWidth;
      const pxWidth = Math.max(colWidth * 0.25, pxRight - pxLeft);
      const startFraction = pxLeft / colWidth;
      const spanColumns = pxWidth / colWidth;
      return { ...it, _pxLeft: pxLeft, _pxWidth: pxWidth, _startFraction: startFraction, _spanColumns: spanColumns };
    }
    const date2 = (_b = it.date) != null ? _b : 1;
    const dateOffset = (_c = it.dateOffset) != null ? _c : 0;
    const length = (_d = it.length) != null ? _d : 1;
    const partialLength = (_e = it.partialLength) != null ? _e : 1;
    const startCol = date2 - 1 + dateOffset;
    const totalColumns = length - 1 + partialLength;
    return { ...it, _pxLeft: startCol * colWidth, _pxWidth: totalColumns * colWidth, _startFraction: startCol, _spanColumns: totalColumns };
  }, [xScale, colWidth]);
  const packedCategories = useMemo(() => {
    return categories.map((cat) => {
      const normalized = cat.roadmapItems.map((raw) => {
        const base = !raw.childItems && raw.children ? { ...raw, childItems: raw.children } : { ...raw };
        return positionItem(base);
      });
      const sorted = normalized.sort((a, b) => {
        if (a._pxLeft !== b._pxLeft) return a._pxLeft - b._pxLeft;
        return b._pxWidth - a._pxWidth;
      });
      const laneEnds = [];
      sorted.forEach((item) => {
        const start = item._pxLeft;
        const end = item._pxLeft + item._pxWidth;
        let laneIndex = laneEnds.findIndex((lEnd) => lEnd <= start);
        if (laneIndex === -1) {
          laneIndex = laneEnds.length;
          laneEnds.push(0);
        }
        laneEnds[laneIndex] = end;
        item.verticalPosition = laneIndex + 1;
      });
      return { ...cat, roadmapItems: sorted, _laneCount: laneEnds.length };
    });
  }, [categories, positionItem]);
  const categoryLaneHeights = useMemo(() => packedCategories.map((c) => c._laneCount || 1), [packedCategories]);
  const gridTemplateColumns = useMemo(() => `var(--category-width) ${dateHeadings.map(() => "var(--column-width)").join(" ")}`, [dateHeadings]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: rootCls,
      style: { ["--column-width"]: `${colWidth}px`, gridTemplateColumns },
      role: "grid",
      "aria-label": ariaLabel,
      "aria-colcount": dateHeadings.length + 1,
      "aria-rowcount": packedCategories.length + 1,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          dateHeadings.map((heading, i) => /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": i + 2, children: heading }, `${heading}-${i}`))
        ] }),
        packedCategories.map((cat, ci) => {
          const rowIndex = ci + 2;
          const lanes = categoryLaneHeights[ci];
          let containerHeightExpr;
          let totalExtraChildLanes = 0;
          let expandedMeta = [];
          if (enableDrilldown && drilldownMode === "inline") {
            expandedMeta = cat.roadmapItems.filter((it) => isItemActive(it.id) && it.childItems && it.childItems.length).map((it) => ({ id: it.id, lane: it.verticalPosition || 1, count: it.childItems.length })).sort((a, b) => a.lane - b.lane);
            totalExtraChildLanes = expandedMeta.reduce((s, e) => s + e.count, 0);
          }
          const totalLanesWithChildren = lanes + totalExtraChildLanes;
          containerHeightExpr = `calc((${totalLanesWithChildren} * var(--roadmap-item-block-height)) + (max(0, ${totalLanesWithChildren} - 1) * var(--roadmap-row-gap)))`;
          const extraBeforeLane = {};
          let running = 0;
          expandedMeta.forEach((meta) => {
            running += meta.count;
            extraBeforeLane[meta.lane + 1] = running;
          });
          return /* @__PURE__ */ jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": rowIndex, children: [
            /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: cat.heading }),
            /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${dateHeadings.length}`, height: containerHeightExpr }, children: /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: cat.roadmapItems.map((it, idx) => {
              var _a;
              const baseLaneIndex = (it.verticalPosition || 1) - 1;
              const extraAbove = expandedMeta.filter((m) => m.lane - 1 < baseLaneIndex).reduce((s, m) => s + m.count, 0);
              const topLaneIndex = baseLaneIndex + extraAbove;
              const active = isItemActive(it.id);
              const collapsing = collapsingIds.has(it.id);
              return /* @__PURE__ */ jsxs(React.Fragment, { children: [
                /* @__PURE__ */ jsx(RoadmapItem, { item: it, maxLines, enableDrilldown, onExpand: handleExpand, isActive: active, topLaneIndex, laneOffset: extraAbove }),
                enableDrilldown && drilldownMode === "inline" && (active || collapsing) && it.childItems && /* @__PURE__ */ jsx("div", { "data-parent": it.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${it.title} child tasks`, children: it.childItems.map((child, cIdx) => {
                  var _a2;
                  const itemHeight = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let childLeft = it._pxLeft;
                  let childWidth = it._pxWidth;
                  if (child.startDate) {
                    const start = new Date(child.startDate);
                    let end = child.endDate ? new Date(child.endDate) : new Date(start);
                    if (end < start) end = new Date(start);
                    const endPlusOne = new Date(end);
                    endPlusOne.setDate(endPlusOne.getDate() + 1);
                    const pxL = xScale(start);
                    let pxR = xScale(endPlusOne);
                    if (!Number.isFinite(pxR) || pxR <= pxL) pxR = pxL + 6;
                    childLeft = pxL;
                    childWidth = Math.max(6, pxR - pxL);
                  }
                  const childBaseLane = topLaneIndex + 1;
                  const childTopLane = childBaseLane + cIdx;
                  return /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: (0, import_classnames.default)("nhsuk-product-roadmap__inline-child", child.status && `nhsuk-product-roadmap__inline-child--status-${child.status}`, !active && collapsing && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${childLeft}px`, width: `${childWidth}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${childTopLane})`, height: itemHeight, opacity: active ? 0 : void 0, transform: active ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: child.title })
                      ]
                    },
                    (_a2 = child.id) != null ? _a2 : cIdx
                  );
                }) })
              ] }, (_a = it.id) != null ? _a : idx);
            }) }) })
          ] }, `${cat.heading}-${ci}`);
        }),
        enableDrilldown && drilldownMode === "overlay" && activeItemIds.size === 1 && (() => {
          const onlyId = Array.from(activeItemIds)[0];
          const item = categories.flatMap((c) => c.roadmapItems).find((i) => i.id === onlyId);
          if (!item || !item.childItems) return null;
          return /* @__PURE__ */ jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${item.title} details`, children: [
            /* @__PURE__ */ jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: item.title }),
                /* @__PURE__ */ jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: closePanel, "aria-label": "Close details", children: "\xD7" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: item.content }),
              /* @__PURE__ */ jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: item.childItems.map((child, idx) => {
                var _a;
                return /* @__PURE__ */ jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                  /* @__PURE__ */ jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: child.title }),
                  child.content && /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: child.content })
                ] }, (_a = child.id) != null ? _a : idx);
              }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: closePanel, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
ProductRoadmap.displayName = "ProductRoadmap";
export {
  ProductRoadmap
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
