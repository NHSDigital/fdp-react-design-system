import ee, { createContext as ne, useContext as re, useEffect as ie, forwardRef as ae, useMemo as T } from "react";
var M = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo;
function le() {
  if (Uo) return w;
  Uo = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(l, i, s) {
    var P = null;
    if (s !== void 0 && (P = "" + s), i.key !== void 0 && (P = "" + i.key), "key" in i) {
      s = {};
      for (var k in i)
        k !== "key" && (s[k] = i[k]);
    } else s = i;
    return i = s.ref, {
      $$typeof: o,
      type: l,
      key: P,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return w.Fragment = e, w.jsx = n, w.jsxs = n, w;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo;
function se() {
  return Xo || (Xo = 1, process.env.NODE_ENV !== "production" && function() {
    function o(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === Kt ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case fo:
          return "Fragment";
        case Yt:
          return "Profiler";
        case Gt:
          return "StrictMode";
        case Xt:
          return "Suspense";
        case Jt:
          return "SuspenseList";
        case Zt:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case uo:
            return "Portal";
          case qt:
            return (t.displayName || "Context") + ".Provider";
          case Vt:
            return (t._context.displayName || "Context") + ".Consumer";
          case Ut:
            var r = t.render;
            return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case Qt:
            return r = t.displayName || null, r !== null ? r : o(t.type) || "Memo";
          case Oo:
            r = t._payload, t = t._init;
            try {
              return o(t(r));
            } catch {
            }
        }
      return null;
    }
    function e(t) {
      return "" + t;
    }
    function n(t) {
      try {
        e(t);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, c = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), e(t);
      }
    }
    function l(t) {
      if (t === fo) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === Oo)
        return "<...>";
      try {
        var r = o(t);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var t = go.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function P(t) {
      if ($o.call(t, "key")) {
        var r = Object.getOwnPropertyDescriptor(t, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function k(t, r) {
      function a() {
        jo || (jo = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: a,
        configurable: !0
      });
    }
    function co() {
      var t = o(this.type);
      return Go[t] || (Go[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function po(t, r, a, c, z, f, bo, So) {
      return a = f.ref, t = {
        $$typeof: D,
        type: t,
        key: r,
        props: f,
        _owner: z
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: co
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: bo
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: So
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function E(t, r, a, c, z, f, bo, So) {
      var p = r.children;
      if (p !== void 0)
        if (c)
          if (oe(p)) {
            for (c = 0; c < p.length; c++)
              R(p[c]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(p);
      if ($o.call(r, "key")) {
        p = o(t);
        var W = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        c = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", qo[p + c] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          p,
          W,
          p
        ), qo[p + c] = !0);
      }
      if (p = null, a !== void 0 && (n(a), p = "" + a), P(r) && (n(r.key), p = "" + r.key), "key" in r) {
        a = {};
        for (var xo in r)
          xo !== "key" && (a[xo] = r[xo]);
      } else a = r;
      return p && k(
        a,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), po(
        t,
        p,
        f,
        z,
        i(),
        a,
        bo,
        So
      );
    }
    function R(t) {
      typeof t == "object" && t !== null && t.$$typeof === D && t._store && (t._store.validated = 1);
    }
    var v = ee, D = Symbol.for("react.transitional.element"), uo = Symbol.for("react.portal"), fo = Symbol.for("react.fragment"), Gt = Symbol.for("react.strict_mode"), Yt = Symbol.for("react.profiler"), Vt = Symbol.for("react.consumer"), qt = Symbol.for("react.context"), Ut = Symbol.for("react.forward_ref"), Xt = Symbol.for("react.suspense"), Jt = Symbol.for("react.suspense_list"), Qt = Symbol.for("react.memo"), Oo = Symbol.for("react.lazy"), Zt = Symbol.for("react.activity"), Kt = Symbol.for("react.client.reference"), go = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $o = Object.prototype.hasOwnProperty, oe = Array.isArray, mo = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var jo, Go = {}, Yo = v["react-stack-bottom-frame"].bind(
      v,
      s
    )(), Vo = mo(l(s)), qo = {};
    H.Fragment = fo, H.jsx = function(t, r, a, c, z) {
      var f = 1e4 > go.recentlyCreatedOwnerStacks++;
      return E(
        t,
        r,
        a,
        !1,
        c,
        z,
        f ? Error("react-stack-top-frame") : Yo,
        f ? mo(l(t)) : Vo
      );
    }, H.jsxs = function(t, r, a, c, z) {
      var f = 1e4 > go.recentlyCreatedOwnerStacks++;
      return E(
        t,
        r,
        a,
        !0,
        c,
        z,
        f ? Error("react-stack-top-frame") : Yo,
        f ? mo(l(t)) : Vo
      );
    };
  }()), H;
}
var Jo;
function ce() {
  return Jo || (Jo = 1, process.env.NODE_ENV === "production" ? M.exports = le() : M.exports = se()), M.exports;
}
var u = ce();
const Qo = {
  animation: {
    AnimationDurationFast: "150ms",
    AnimationDurationNormal: "300ms",
    AnimationDurationSlow: "500ms",
    AnimationEasingEaseIn: "cubic-bezier(0.4, 0, 1, 1)",
    AnimationEasingEaseOut: "cubic-bezier(0, 0, 0.2, 1)",
    AnimationEasingEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    AnimationEasingBounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  transition: {
    TransitionButtonDefault: "background-color 300ms cubic-bezier(0, 0, 0.2, 1)",
    TransitionButtonShadow: "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)",
    TransitionInputFocus: "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)",
    TransitionCardHover: "border-color 300ms cubic-bezier(0, 0, 0.2, 1)"
  },
  border: {
    BorderWidthDefault: "1px",
    BorderWidthFormElement: "2px",
    BorderWidthFormElementError: "4px",
    BorderWidthCardBottom: "4px",
    BorderWidthPanel: "4px",
    BorderWidthTableHeader: "2px",
    BorderWidthTableCell: "1px",
    BorderRadiusNone: "0px",
    BorderRadiusSmall: "4px",
    BorderRadiusMedium: "8px",
    BorderRadiusLarge: "12px",
    BorderColorDefault: "#d8dde0",
    BorderColorForm: "#4c6272",
    BorderColorCard: "#d8dde0",
    BorderColorCardHover: "#aeb7bd",
    BorderColorError: "#d5281b"
  },
  color: {
    ColorPrimaryBlue: "#005eb8",
    ColorPrimaryWhite: "#ffffff",
    ColorPrimaryBlack: "#212b32",
    ColorPrimaryGreen: "#007f3b",
    ColorPrimaryPurple: "#330072",
    ColorPrimaryDarkPink: "#7c2855",
    ColorPrimaryRed: "#d5281b",
    ColorPrimaryYellow: "#ffeb3b",
    ColorSecondaryPaleYellow: "#fff9c4",
    ColorSecondaryWarmYellow: "#ffb81c",
    ColorSecondaryOrange: "#ed8b00",
    ColorSecondaryAquaGreen: "#00a499",
    ColorSecondaryPink: "#ae2573",
    ColorGrey1: "#4c6272",
    ColorGrey2: "#768692",
    ColorGrey3: "#aeb7bd",
    ColorGrey4: "#d8dde0",
    ColorGrey5: "#f0f4f5",
    ColorTextPrimary: "#212b32",
    ColorTextSecondary: "#4c6272",
    ColorTextReverse: "#ffffff",
    ColorTextPrint: "#212b32",
    ColorLinkDefault: "#005eb8",
    ColorLinkHover: "#7c2855",
    ColorLinkActive: "#003087",
    ColorLinkVisited: "#330072",
    ColorFocusBackground: "#ffeb3b",
    ColorFocusText: "#212b32",
    ColorBorderDefault: "#d8dde0",
    ColorBorderSecondary: "#ffffff33",
    ColorError: "#d5281b",
    ColorFormBorder: "#4c6272",
    ColorFormBackground: "#ffffff",
    ColorButtonPrimaryBackground: "#007f3b",
    ColorButtonPrimaryText: "#ffffff",
    ColorButtonPrimaryHover: "#006530",
    ColorButtonPrimaryActive: "#004021",
    ColorButtonPrimaryShadow: "#004021",
    ColorButtonSecondaryBackground: "#00000000",
    ColorButtonSecondaryBackgroundSolid: "#ffffff",
    ColorButtonSecondaryBorder: "#005eb8",
    ColorButtonSecondaryText: "#005eb8",
    ColorButtonSecondaryHover: "#d9e5f2",
    ColorButtonSecondaryActive: "#c7daf0",
    ColorButtonSecondaryShadow: "#005eb8",
    ColorButtonReverseBackground: "#ffffff",
    ColorButtonReverseText: "#212b32",
    ColorButtonReverseHover: "#d9dde0",
    ColorButtonReverseActive: "#b3bcc2",
    ColorButtonReverseShadow: "#b3bcc2",
    ColorButtonWarningBackground: "#d5281b",
    ColorButtonWarningHover: "#aa2016",
    ColorButtonWarningActive: "#6a140e",
    ColorButtonWarningShadow: "#6a140e",
    ColorButtonLoginBackground: "#005eb8",
    ColorButtonLoginHover: "#004b93",
    ColorButtonLoginActive: "#002f5c",
    ColorButtonLoginShadow: "#002f5c"
  },
  component: {
    ComponentButtonPaddingMobileVertical: "8px",
    ComponentButtonPaddingMobileHorizontal: "16px",
    ComponentButtonPaddingDesktopVertical: "12px",
    ComponentButtonPaddingDesktopHorizontal: "16px",
    ComponentButtonShadowSize: "4px",
    ComponentFormInputMinHeight: "40px",
    ComponentFormInputPadding: "4px",
    ComponentFormCheckboxSize: "40px",
    ComponentFormCheckboxLabelPadding: "12px",
    ComponentCardPaddingMobile: "16px",
    ComponentCardPaddingDesktop: "32px",
    ComponentCardHeadingMargin: "16px",
    ComponentPanelPaddingMobile: "20px",
    ComponentPanelPaddingDesktop: "28px",
    ComponentBreadcrumbChevronMarginLeft: "9px",
    ComponentBreadcrumbChevronMarginRight: "2px",
    ComponentBreadcrumbPaddingTopMobile: "16px",
    ComponentBreadcrumbPaddingTopDesktop: "24px",
    ComponentSummaryListCellPaddingVertical: "8px",
    ComponentSummaryListCellPaddingHorizontal: "24px",
    ComponentSummaryListRowMargin: "16px",
    ComponentSpread: "4px",
    ComponentBlur: "4px",
    ComponentLink: "4px",
    ComponentDetails: "8px",
    ComponentExpander: "4px",
    ComponentPagination: "16px"
  },
  button: {
    ButtonPrimaryBackgroundDefault: "#007f3b",
    ButtonPrimaryBackgroundHover: "#006530",
    ButtonPrimaryBackgroundActive: "#004021",
    ButtonPrimaryBackgroundDisabled: "#d8dde0",
    ButtonPrimaryTextDefault: "#ffffff",
    ButtonPrimaryTextDisabled: "#768692",
    ButtonPrimaryBorderDefault: "#00000000",
    ButtonPrimaryBorderFocus: "#ffeb3b",
    ButtonSecondaryBackgroundDefault: "#00000000",
    ButtonSecondaryBackgroundSolid: "#ffffff",
    ButtonSecondaryBackgroundHover: "#d9e5f2",
    ButtonSecondaryBackgroundActive: "#c7daf0",
    ButtonSecondaryTextDefault: "#005eb8",
    ButtonSecondaryBorderDefault: "#005eb8",
    ButtonSpacingPaddingVerticalMobile: "8px",
    ButtonSpacingPaddingHorizontalMobile: "16px",
    ButtonSpacingPaddingVerticalDesktop: "12px",
    ButtonSpacingPaddingHorizontalDesktop: "16px",
    ButtonBorderWidth: "2px",
    ButtonBorderRadius: "4px",
    ButtonShadowSize: "4px",
    ButtonTypographyWeight: "600"
  },
  card: {
    CardBackgroundDefault: "#ffffff",
    CardBorderDefault: "#d8dde0",
    CardBorderHover: "#aeb7bd",
    CardBorderBottom: "#f0f4f5",
    CardTextHeading: "#212b32",
    CardTextDescription: "#212b32",
    CardTextLink: "#005eb8",
    CardSpacingPaddingMobile: "16px",
    CardSpacingPaddingDesktop: "32px",
    CardSpacingHeadingMargin: "16px",
    CardBorderWidthDefault: "1px",
    CardBorderWidthBottom: "4px",
    CardShadowDefault: "none",
    CardShadowHover: "0 2px 4px rgba(0, 0, 0, 0.1)"
  },
  form: {
    FormInputBackgroundDefault: "#ffffff",
    FormInputBackgroundFocus: "#ffffff",
    FormInputBackgroundDisabled: "#d8dde0",
    FormInputBackgroundError: "#ffffff",
    FormInputBorderDefault: "#4c6272",
    FormInputBorderFocus: "#ffeb3b",
    FormInputBorderError: "#d5281b",
    FormInputBorderDisabled: "#aeb7bd",
    FormInputTextDefault: "#212b32",
    FormInputTextPlaceholder: "#4c6272",
    FormInputTextDisabled: "#768692",
    FormLabelTextDefault: "#212b32",
    FormLabelTextRequired: "#ffffff",
    FormLabelTypographyWeight: "600",
    FormErrorTextDefault: "#d5281b",
    FormErrorTypographyWeight: "600",
    FormHintTextDefault: "#4c6272",
    FormSpacingInputPadding: "4px",
    FormSpacingInputMinHeight: "40px",
    FormSpacingCheckboxSize: "40px",
    FormSpacingCheckboxLabelPadding: "12px",
    FormBorderWidthDefault: "2px",
    FormBorderWidthError: "4px",
    FormBorderRadius: "0px"
  },
  size: {
    SizeIconSmall: "16px",
    SizeIconMedium: "18px",
    SizeIconLarge: "24px",
    SizeIconExtraLarge: "32px",
    SizeIconNhsDefault: "34px",
    SizeFormControlSmall: "32px",
    SizeFormControlMedium: "40px",
    SizeFormControlLarge: "48px",
    SizeFormInputWidthXs: "5.4ex",
    SizeFormInputWidthSm: "7.2ex",
    SizeFormInputWidthMd: "9ex",
    SizeFormInputWidthLg: "10.8ex",
    SizeFormInputWidthXl: "20ex",
    SizeFormInputWidth2xl: "38ex",
    SizeFormInputWidth3xl: "56ex",
    SizeButtonMinHeightMobile: "44px",
    SizeButtonMinHeightDesktop: "40px"
  },
  layout: {
    LayoutContainerMaxWidth: "1020px",
    LayoutColumnFull: "100%",
    LayoutColumnHalf: "50%",
    LayoutColumnThird: "33.333%",
    LayoutColumnQuarter: "25%",
    LayoutColumnActions: "20%"
  },
  breakpoint: {
    BreakpointMobile: "320px",
    BreakpointTablet: "641px",
    BreakpointDesktop: "1025px",
    BreakpointLargeDesktop: "1280px"
  },
  grid: {
    GridPageWidth: "960px",
    GridGutter: "32px",
    GridGutterHalf: "16px"
  },
  state: {
    StateErrorBackground: "#d5281b",
    StateErrorBorder: "#d5281b",
    StateErrorText: "#ffffff",
    StateSuccessBackground: "#007f3b",
    StateSuccessBorder: "#007f3b",
    StateSuccessText: "#ffffff",
    StateWarningBackground: "#ffeb3b",
    StateWarningBorder: "#ffeb3b",
    StateWarningText: "#212b32",
    StateInfoBackground: "#005eb8",
    StateInfoBorder: "#005eb8",
    StateInfoText: "#ffffff",
    StateDisabledBackground: "#d8dde0",
    StateDisabledBorder: "#aeb7bd",
    StateDisabledText: "#768692"
  },
  shadow: {
    ShadowButtonDefault: "0 4px 0 #004021",
    ShadowButtonSecondary: "0 4px 0 #005eb8",
    ShadowButtonWarning: "0 4px 0 #6a140e",
    ShadowButtonFocus: "0 4px 0 #ffeb3b",
    ShadowCardDefault: "none",
    ShadowCardHover: "0 2px 4px rgba(0, 0, 0, 0.1)"
  },
  "focus-outline": {
    FocusOutlineWidth: "4px",
    FocusOutlineOffset: "0px",
    FocusOutlineStyle: "solid"
  },
  "focus-shadow": {
    FocusShadowInput: "0 0 0 3px #ffeb3b",
    FocusShadowButton: "0 0 0 3px #ffeb3b"
  },
  elevation: {
    ElevationNone: "none",
    ElevationLow: "0 1px 3px rgba(0, 0, 0, 0.12)",
    ElevationMedium: "0 2px 6px rgba(0, 0, 0, 0.16)",
    ElevationHigh: "0 4px 12px rgba(0, 0, 0, 0.20)"
  },
  spacing: {
    Spacing0: "0",
    Spacing1: "4px",
    Spacing2: "8px",
    Spacing3: "16px",
    Spacing4: "24px",
    Spacing5: "32px",
    Spacing6: "40px",
    Spacing7: "48px",
    Spacing8: "56px",
    Spacing9: "64px"
  },
  "spacing-responsive": {
    SpacingResponsive0Mobile: "0",
    SpacingResponsive0Tablet: "0",
    SpacingResponsive1Mobile: "4px",
    SpacingResponsive1Tablet: "4px",
    SpacingResponsive2Mobile: "8px",
    SpacingResponsive2Tablet: "8px",
    SpacingResponsive3Mobile: "8px",
    SpacingResponsive3Tablet: "16px",
    SpacingResponsive4Mobile: "16px",
    SpacingResponsive4Tablet: "24px",
    SpacingResponsive5Mobile: "24px",
    SpacingResponsive5Tablet: "32px",
    SpacingResponsive6Mobile: "32px",
    SpacingResponsive6Tablet: "40px",
    SpacingResponsive7Mobile: "40px",
    SpacingResponsive7Tablet: "48px",
    SpacingResponsive8Mobile: "48px",
    SpacingResponsive8Tablet: "56px",
    SpacingResponsive9Mobile: "56px",
    SpacingResponsive9Tablet: "64px"
  },
  font: {
    FontFamilyBase: "Frutiger W01",
    FontFamilyFallback: "Arial, Helvetica, sans-serif",
    FontFamilyPrint: "sans-serif",
    FontWeightNormal: "400",
    FontWeightBold: "600",
    FontWeightLight: "400",
    FontSize14Mobile: "12px",
    FontSize14Tablet: "14px",
    FontSize14Print: "12pt",
    FontSize16Mobile: "14px",
    FontSize16Tablet: "16px",
    FontSize16Print: "12pt",
    FontSize19Mobile: "16px",
    FontSize19Tablet: "19px",
    FontSize19Print: "13pt",
    FontSize22Mobile: "19px",
    FontSize22Tablet: "22px",
    FontSize22Print: "15pt",
    FontSize26Mobile: "22px",
    FontSize26Tablet: "26px",
    FontSize26Print: "17pt",
    FontSize36Mobile: "27px",
    FontSize36Tablet: "36px",
    FontSize36Print: "20pt",
    FontSize48Mobile: "33px",
    FontSize48Tablet: "48px",
    FontSize48Print: "24pt",
    FontSizeBase: "16px",
    FontLineHeightBase: "24px"
  },
  // NHS Typography System
  headings: {
    xl: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
      lineHeight: "1.09",
      marginTop: "0",
      marginBottom: { mobile: "40px", tablet: "48px" }
    },
    l: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
      lineHeight: "1.11",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    m: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
      lineHeight: "1.15",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    s: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
      lineHeight: "1.18",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    xs: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
      lineHeight: "1.26",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    }
  },
  paragraphs: {
    body: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
      lineHeight: "1.47",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    bodyLarge: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
      lineHeight: "1.38",
      marginTop: "0",
      marginBottom: { mobile: "24px", tablet: "32px" }
    },
    bodySmall: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
      lineHeight: "1.5",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    ledeText: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
      lineHeight: "1.38",
      marginTop: "0",
      marginBottom: { mobile: "40px", tablet: "48px" }
    },
    ledeTextSmall: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
      lineHeight: "1.47",
      marginTop: "0",
      marginBottom: { mobile: "24px", tablet: "32px" }
    }
  }
}, Zo = ne(Qo), pe = ({
  children: o,
  theme: e = {}
}) => {
  const n = { ...Qo, ...e };
  return /* @__PURE__ */ u.jsx(Zo.Provider, { value: n, children: o });
}, de = () => {
  const o = re(Zo);
  if (!o)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return o;
};
function ue() {
  return `
	@font-face {
	  font-display: swap;
	  font-family: "Frutiger W01";
	  font-style: normal;
	  font-weight: 400;
	  src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.eot");
	  src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.eot?#iefix") format("embedded-opentype"),
		   url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.woff2") format("woff2"),
		   url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.woff") format("woff");
	}
	
	@font-face {
	  font-display: swap;
	  font-family: "Frutiger W01";
	  font-style: normal;
	  font-weight: 600;
	  src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.eot");
	  src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.eot?#iefix") format("embedded-opentype"),
		   url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.woff2") format("woff2"),
		   url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.woff") format("woff");
	}
  `;
}
function fe() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const o = document.createElement("style");
  o.id = "nhs-fonts", o.textContent = ue(), document.head.appendChild(o);
}
const ea = ({ children: o, theme: e }) => (ie(() => {
  fe();
}, []), /* @__PURE__ */ u.jsx(pe, { theme: e, children: o })), ge = (o, { size: e, fullWidth: n, disabled: l }) => {
  const i = typeof window < "u" && window.innerWidth < 768;
  return {
    // Base button styles from tokens
    fontFamily: `"${o.font.FontFamilyBase}", Arial, Helvetica, sans-serif`,
    fontWeight: o.button.ButtonTypographyWeight,
    borderWidth: o.button.ButtonBorderWidth,
    borderStyle: "solid",
    borderRadius: o.button.ButtonBorderRadius,
    textDecoration: "none",
    textAlign: "center",
    verticalAlign: "top",
    cursor: l ? "not-allowed" : "pointer",
    userSelect: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    display: "inline-block",
    position: "relative",
    // Responsive sizing using tokens
    fontSize: i ? o.font.FontSize19Mobile : o.font.FontSize19Tablet,
    lineHeight: o.font.FontLineHeightBase,
    // Size-specific styles
    ...e === "small" && {
      fontSize: i ? o.font.FontSize16Mobile : o.font.FontSize16Tablet,
      paddingTop: o.spacing.Spacing1,
      paddingBottom: o.spacing.Spacing1,
      paddingLeft: o.spacing.Spacing3,
      paddingRight: o.spacing.Spacing3
    },
    ...e === "default" && {
      paddingTop: i ? o.button.ButtonSpacingPaddingVerticalMobile : o.button.ButtonSpacingPaddingVerticalDesktop,
      paddingBottom: i ? o.button.ButtonSpacingPaddingVerticalMobile : o.button.ButtonSpacingPaddingVerticalDesktop,
      paddingLeft: i ? o.button.ButtonSpacingPaddingHorizontalMobile : o.button.ButtonSpacingPaddingHorizontalDesktop,
      paddingRight: i ? o.button.ButtonSpacingPaddingHorizontalMobile : o.button.ButtonSpacingPaddingHorizontalDesktop,
      minHeight: i ? o.size.SizeButtonMinHeightMobile : o.size.SizeButtonMinHeightDesktop
    },
    ...e === "large" && {
      fontSize: i ? o.font.FontSize22Mobile : o.font.FontSize22Tablet,
      paddingTop: o.spacing.Spacing4,
      paddingBottom: o.spacing.Spacing4,
      paddingLeft: o.spacing.Spacing5,
      paddingRight: o.spacing.Spacing5
    },
    // Full width
    ...n && {
      width: "100%"
    },
    // Disabled state
    ...l && {
      pointerEvents: "none",
      opacity: 0.6
    },
    // Transitions
    transition: o.transition.TransitionButtonDefault
  };
}, me = (o, e, n) => ({
  primary: {
    backgroundColor: n ? o.button.ButtonPrimaryBackgroundDisabled : o.button.ButtonPrimaryBackgroundDefault,
    color: n ? o.button.ButtonPrimaryTextDisabled : o.button.ButtonPrimaryTextDefault,
    borderColor: o.button.ButtonPrimaryBorderDefault,
    boxShadow: `0 ${o.button.ButtonShadowSize} 0 ${o.color.ColorButtonPrimaryShadow}`
  },
  secondary: {
    backgroundColor: o.button.ButtonSecondaryBackgroundSolid,
    color: o.button.ButtonSecondaryTextDefault,
    borderColor: o.button.ButtonSecondaryBorderDefault,
    boxShadow: `0 ${o.button.ButtonShadowSize} 0 ${o.color.ColorButtonSecondaryShadow}`
  },
  reverse: {
    backgroundColor: o.color.ColorButtonReverseBackground,
    color: o.color.ColorButtonReverseText,
    borderColor: o.color.ColorButtonReverseBackground,
    boxShadow: `0 ${o.button.ButtonShadowSize} 0 ${o.color.ColorButtonReverseShadow}`
  },
  warning: {
    backgroundColor: o.color.ColorButtonWarningBackground,
    color: o.color.ColorButtonPrimaryText,
    // White text
    borderColor: o.color.ColorButtonWarningBackground,
    boxShadow: `0 ${o.button.ButtonShadowSize} 0 ${o.color.ColorButtonWarningShadow}`
  },
  login: {
    backgroundColor: o.color.ColorButtonLoginBackground,
    color: o.color.ColorButtonPrimaryText,
    // White text
    borderColor: o.color.ColorButtonLoginBackground,
    boxShadow: `0 ${o.button.ButtonShadowSize} 0 ${o.color.ColorButtonLoginShadow}`
  }
})[e], be = ae(
  ({
    children: o,
    variant: e = "primary",
    size: n = "default",
    disabled: l = !1,
    fullWidth: i = !1,
    type: s = "button",
    className: P = "",
    style: k = {},
    onClick: co,
    ...po
  }, E) => {
    const R = de(), v = ge(R, { size: n, fullWidth: i, disabled: l }), D = me(R, e, l), uo = {
      ...v,
      ...D,
      ...k
    };
    return /* @__PURE__ */ u.jsx(
      "button",
      {
        ref: E,
        type: s,
        disabled: l,
        className: `nhs-button nhs-button--${e} ${n !== "default" ? `nhs-button--${n}` : ""} ${i ? "nhs-button--full-width" : ""} ${l ? "nhs-button--disabled" : ""} ${P}`.trim(),
        style: uo,
        onClick: co,
        ...po,
        children: o
      }
    );
  }
);
be.displayName = "Button";
const Se = "150ms", xe = "300ms", Be = "500ms", Ce = "cubic-bezier(0.4, 0, 1, 1)", Fe = "cubic-bezier(0, 0, 0.2, 1)", he = "cubic-bezier(0.4, 0, 0.2, 1)", ye = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Te = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", ze = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Pe = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", ke = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", ve = "1px", We = "2px", Re = "4px", we = "4px", He = "4px", Ee = "2px", De = "1px", Me = "0px", Le = "4px", Ae = "8px", Ie = "12px", Ko = "#d8dde0", ot = "#4c6272", tt = "#d8dde0", et = "#aeb7bd", nt = "#d5281b", rt = "#005eb8", it = "#ffffff", at = "#212b32", lt = "#007f3b", st = "#330072", ct = "#7c2855", pt = "#d5281b", dt = "#ffeb3b", ut = "#fff9c4", ft = "#ffb81c", gt = "#ed8b00", mt = "#00a499", bt = "#ae2573", St = "#4c6272", xt = "#768692", Bt = "#aeb7bd", Ct = "#d8dde0", Ft = "#f0f4f5", _e = "#212b32", Ne = "#4c6272", Oe = "#ffffff", $e = "#212b32", je = "#005eb8", Ge = "#7c2855", Ye = "#003087", Ve = "#330072", qe = "#ffeb3b", Ue = "#212b32", Xe = "#d8dde0", Je = "#ffffff33", Qe = "#d5281b", Ze = "#4c6272", Ke = "#ffffff", on = "#007f3b", tn = "#ffffff", en = "#006530", nn = "#004021", rn = "#004021", an = "#00000000", ln = "#ffffff", sn = "#005eb8", cn = "#005eb8", pn = "#d9e5f2", dn = "#c7daf0", un = "#005eb8", fn = "#ffffff", gn = "#212b32", mn = "#d9dde0", bn = "#b3bcc2", Sn = "#b3bcc2", xn = "#d5281b", Bn = "#aa2016", Cn = "#6a140e", Fn = "#6a140e", hn = "#005eb8", yn = "#004b93", Tn = "#002f5c", zn = "#002f5c", Pn = "8px", kn = "16px", vn = "12px", Wn = "16px", Rn = "4px", wn = "40px", Hn = "4px", En = "40px", Dn = "12px", Mn = "16px", Ln = "32px", An = "16px", In = "20px", _n = "28px", Nn = "9px", On = "2px", $n = "16px", jn = "24px", Gn = "8px", Yn = "24px", Vn = "16px", qn = "4px", Un = "4px", Xn = "4px", Jn = "8px", Qn = "4px", Zn = "16px", Kn = "#007f3b", or = "#006530", tr = "#004021", er = "#d8dde0", nr = "#ffffff", rr = "#768692", ir = "#00000000", ar = "#ffeb3b", lr = "#00000000", sr = "#ffffff", cr = "#d9e5f2", pr = "#c7daf0", dr = "#005eb8", ur = "#005eb8", ht = "8px", yt = "16px", Tt = "12px", zt = "16px", fr = "2px", gr = "4px", mr = "4px", br = "600", Sr = "#ffffff", xr = "#d8dde0", Br = "#aeb7bd", Cr = "#f0f4f5", Fr = "#212b32", hr = "#212b32", yr = "#005eb8", Pt = "16px", kt = "32px", vt = "16px", Tr = "1px", zr = "4px", Pr = "none", kr = "0 2px 4px rgba(0, 0, 0, 0.1)", vr = "#ffffff", Wr = "#ffffff", Rr = "#d8dde0", wr = "#ffffff", Hr = "#4c6272", Er = "#ffeb3b", Dr = "#d5281b", Mr = "#aeb7bd", Lr = "#212b32", Ar = "#4c6272", Ir = "#768692", _r = "#212b32", Nr = "#ffffff", Or = "600", $r = "#d5281b", jr = "600", Gr = "#4c6272", Wt = "4px", Rt = "40px", wt = "40px", Ht = "12px", Yr = "2px", Vr = "4px", qr = "0px", Ur = "16px", Xr = "18px", Jr = "24px", Qr = "32px", Zr = "34px", Kr = "32px", oi = "40px", ti = "48px", ei = "5.4ex", ni = "7.2ex", ri = "9ex", ii = "10.8ex", ai = "20ex", li = "38ex", si = "56ex", ci = "44px", pi = "40px", di = "1020px", ui = "100%", fi = "50%", gi = "33.333%", mi = "25%", bi = "20%", Si = "320px", xi = "641px", Bi = "1025px", Ci = "1280px", Fi = "960px", hi = "32px", yi = "16px", Ti = "#d5281b", zi = "#d5281b", Pi = "#ffffff", ki = "#007f3b", vi = "#007f3b", Wi = "#ffffff", Ri = "#ffeb3b", wi = "#ffeb3b", Hi = "#212b32", Ei = "#005eb8", Di = "#005eb8", Mi = "#ffffff", Li = "#d8dde0", Ai = "#aeb7bd", Ii = "#768692", _i = "0 4px 0 #004021", Ni = "0 4px 0 #005eb8", Oi = "0 4px 0 #6a140e", $i = "0 4px 0 #ffeb3b", ji = "none", Gi = "0 2px 4px rgba(0, 0, 0, 0.1)", Yi = "4px", Vi = "0px", qi = "solid", Ui = "0 0 0 3px #ffeb3b", Xi = "0 0 0 3px #ffeb3b", Ji = "none", Qi = "0 1px 3px rgba(0, 0, 0, 0.12)", Zi = "0 2px 6px rgba(0, 0, 0, 0.16)", Ki = "0 4px 12px rgba(0, 0, 0, 0.20)", Et = "0", Dt = "4px", Mt = "8px", Lt = "16px", At = "24px", It = "32px", _t = "40px", Nt = "48px", Ot = "56px", $t = "64px", Bo = "0", Co = "0", Fo = "4px", ho = "4px", yo = "8px", To = "8px", zo = "8px", Po = "16px", ko = "16px", vo = "24px", Wo = "24px", Ro = "32px", wo = "32px", Ho = "40px", Eo = "40px", Do = "48px", Mo = "48px", Lo = "56px", Ao = "56px", Io = "64px", L = "Frutiger W01", A = "Arial, Helvetica, sans-serif", I = "sans-serif", _ = "400", N = "600", O = "400", $ = "12px", j = "14px", G = "12pt", Y = "14px", V = "16px", q = "12pt", U = "16px", X = "19px", J = "13pt", Q = "19px", Z = "22px", K = "15pt", oo = "22px", to = "26px", eo = "17pt", no = "27px", ro = "36px", io = "20pt", ao = "33px", lo = "48px", so = "24pt", _o = "16px", No = "24px", g = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, m = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, b = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, S = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, x = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, B = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, C = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, F = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, h = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, y = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Se,
  AnimationDurationNormal: xe,
  AnimationDurationSlow: Be,
  AnimationEasingBounce: ye,
  AnimationEasingEaseIn: Ce,
  AnimationEasingEaseInOut: he,
  AnimationEasingEaseOut: Fe,
  BorderColorCard: tt,
  BorderColorCardHover: et,
  BorderColorDefault: Ko,
  BorderColorError: nt,
  BorderColorForm: ot,
  BorderRadiusLarge: Ie,
  BorderRadiusMedium: Ae,
  BorderRadiusNone: Me,
  BorderRadiusSmall: Le,
  BorderWidthCardBottom: we,
  BorderWidthDefault: ve,
  BorderWidthFormElement: We,
  BorderWidthFormElementError: Re,
  BorderWidthPanel: He,
  BorderWidthTableCell: De,
  BorderWidthTableHeader: Ee,
  BreakpointDesktop: Bi,
  BreakpointLargeDesktop: Ci,
  BreakpointMobile: Si,
  BreakpointTablet: xi,
  ButtonBorderRadius: gr,
  ButtonBorderWidth: fr,
  ButtonPrimaryBackgroundActive: tr,
  ButtonPrimaryBackgroundDefault: Kn,
  ButtonPrimaryBackgroundDisabled: er,
  ButtonPrimaryBackgroundHover: or,
  ButtonPrimaryBorderDefault: ir,
  ButtonPrimaryBorderFocus: ar,
  ButtonPrimaryTextDefault: nr,
  ButtonPrimaryTextDisabled: rr,
  ButtonSecondaryBackgroundActive: pr,
  ButtonSecondaryBackgroundDefault: lr,
  ButtonSecondaryBackgroundHover: cr,
  ButtonSecondaryBackgroundSolid: sr,
  ButtonSecondaryBorderDefault: ur,
  ButtonSecondaryTextDefault: dr,
  ButtonShadowSize: mr,
  ButtonSpacingPaddingHorizontalDesktop: zt,
  ButtonSpacingPaddingHorizontalMobile: yt,
  ButtonSpacingPaddingVerticalDesktop: Tt,
  ButtonSpacingPaddingVerticalMobile: ht,
  ButtonTypographyWeight: br,
  CardBackgroundDefault: Sr,
  CardBorderBottom: Cr,
  CardBorderDefault: xr,
  CardBorderHover: Br,
  CardBorderWidthBottom: zr,
  CardBorderWidthDefault: Tr,
  CardShadowDefault: Pr,
  CardShadowHover: kr,
  CardSpacingHeadingMargin: vt,
  CardSpacingPaddingDesktop: kt,
  CardSpacingPaddingMobile: Pt,
  CardTextDescription: hr,
  CardTextHeading: Fr,
  CardTextLink: yr,
  ColorBorderDefault: Xe,
  ColorBorderSecondary: Je,
  ColorButtonLoginActive: Tn,
  ColorButtonLoginBackground: hn,
  ColorButtonLoginHover: yn,
  ColorButtonLoginShadow: zn,
  ColorButtonPrimaryActive: nn,
  ColorButtonPrimaryBackground: on,
  ColorButtonPrimaryHover: en,
  ColorButtonPrimaryShadow: rn,
  ColorButtonPrimaryText: tn,
  ColorButtonReverseActive: bn,
  ColorButtonReverseBackground: fn,
  ColorButtonReverseHover: mn,
  ColorButtonReverseShadow: Sn,
  ColorButtonReverseText: gn,
  ColorButtonSecondaryActive: dn,
  ColorButtonSecondaryBackground: an,
  ColorButtonSecondaryBackgroundSolid: ln,
  ColorButtonSecondaryBorder: sn,
  ColorButtonSecondaryHover: pn,
  ColorButtonSecondaryShadow: un,
  ColorButtonSecondaryText: cn,
  ColorButtonWarningActive: Cn,
  ColorButtonWarningBackground: xn,
  ColorButtonWarningHover: Bn,
  ColorButtonWarningShadow: Fn,
  ColorError: Qe,
  ColorFocusBackground: qe,
  ColorFocusText: Ue,
  ColorFormBackground: Ke,
  ColorFormBorder: Ze,
  ColorGrey1: St,
  ColorGrey2: xt,
  ColorGrey3: Bt,
  ColorGrey4: Ct,
  ColorGrey5: Ft,
  ColorLinkActive: Ye,
  ColorLinkDefault: je,
  ColorLinkHover: Ge,
  ColorLinkVisited: Ve,
  ColorPrimaryBlack: at,
  ColorPrimaryBlue: rt,
  ColorPrimaryDarkPink: ct,
  ColorPrimaryGreen: lt,
  ColorPrimaryPurple: st,
  ColorPrimaryRed: pt,
  ColorPrimaryWhite: it,
  ColorPrimaryYellow: dt,
  ColorSecondaryAquaGreen: mt,
  ColorSecondaryOrange: gt,
  ColorSecondaryPaleYellow: ut,
  ColorSecondaryPink: bt,
  ColorSecondaryWarmYellow: ft,
  ColorTextPrimary: _e,
  ColorTextPrint: $e,
  ColorTextReverse: Oe,
  ColorTextSecondary: Ne,
  ComponentBlur: Un,
  ComponentBreadcrumbChevronMarginLeft: Nn,
  ComponentBreadcrumbChevronMarginRight: On,
  ComponentBreadcrumbPaddingTopDesktop: jn,
  ComponentBreadcrumbPaddingTopMobile: $n,
  ComponentButtonPaddingDesktopHorizontal: Wn,
  ComponentButtonPaddingDesktopVertical: vn,
  ComponentButtonPaddingMobileHorizontal: kn,
  ComponentButtonPaddingMobileVertical: Pn,
  ComponentButtonShadowSize: Rn,
  ComponentCardHeadingMargin: An,
  ComponentCardPaddingDesktop: Ln,
  ComponentCardPaddingMobile: Mn,
  ComponentDetails: Jn,
  ComponentExpander: Qn,
  ComponentFormCheckboxLabelPadding: Dn,
  ComponentFormCheckboxSize: En,
  ComponentFormInputMinHeight: wn,
  ComponentFormInputPadding: Hn,
  ComponentLink: Xn,
  ComponentPagination: Zn,
  ComponentPanelPaddingDesktop: _n,
  ComponentPanelPaddingMobile: In,
  ComponentSpread: qn,
  ComponentSummaryListCellPaddingHorizontal: Yn,
  ComponentSummaryListCellPaddingVertical: Gn,
  ComponentSummaryListRowMargin: Vn,
  ElevationHigh: Ki,
  ElevationLow: Qi,
  ElevationMedium: Zi,
  ElevationNone: Ji,
  FocusOutlineOffset: Vi,
  FocusOutlineStyle: qi,
  FocusOutlineWidth: Yi,
  FocusShadowButton: Xi,
  FocusShadowInput: Ui,
  FontFamilyBase: L,
  FontFamilyFallback: A,
  FontFamilyPrint: I,
  FontLineHeightBase: No,
  FontSize14Mobile: $,
  FontSize14Print: G,
  FontSize14Tablet: j,
  FontSize16Mobile: Y,
  FontSize16Print: q,
  FontSize16Tablet: V,
  FontSize19Mobile: U,
  FontSize19Print: J,
  FontSize19Tablet: X,
  FontSize22Mobile: Q,
  FontSize22Print: K,
  FontSize22Tablet: Z,
  FontSize26Mobile: oo,
  FontSize26Print: eo,
  FontSize26Tablet: to,
  FontSize36Mobile: no,
  FontSize36Print: io,
  FontSize36Tablet: ro,
  FontSize48Mobile: ao,
  FontSize48Print: so,
  FontSize48Tablet: lo,
  FontSizeBase: _o,
  FontWeightBold: N,
  FontWeightLight: O,
  FontWeightNormal: _,
  FormBorderRadius: qr,
  FormBorderWidthDefault: Yr,
  FormBorderWidthError: Vr,
  FormErrorTextDefault: $r,
  FormErrorTypographyWeight: jr,
  FormHintTextDefault: Gr,
  FormInputBackgroundDefault: vr,
  FormInputBackgroundDisabled: Rr,
  FormInputBackgroundError: wr,
  FormInputBackgroundFocus: Wr,
  FormInputBorderDefault: Hr,
  FormInputBorderDisabled: Mr,
  FormInputBorderError: Dr,
  FormInputBorderFocus: Er,
  FormInputTextDefault: Lr,
  FormInputTextDisabled: Ir,
  FormInputTextPlaceholder: Ar,
  FormLabelTextDefault: _r,
  FormLabelTextRequired: Nr,
  FormLabelTypographyWeight: Or,
  FormSpacingCheckboxLabelPadding: Ht,
  FormSpacingCheckboxSize: wt,
  FormSpacingInputMinHeight: Rt,
  FormSpacingInputPadding: Wt,
  GridGutter: hi,
  GridGutterHalf: yi,
  GridPageWidth: Fi,
  HeadingsNhsukHeadingL: m,
  HeadingsNhsukHeadingM: b,
  HeadingsNhsukHeadingS: S,
  HeadingsNhsukHeadingXl: g,
  HeadingsNhsukHeadingXs: x,
  LayoutColumnActions: bi,
  LayoutColumnFull: ui,
  LayoutColumnHalf: fi,
  LayoutColumnQuarter: mi,
  LayoutColumnThird: gi,
  LayoutContainerMaxWidth: di,
  ParagraphsBody: B,
  ParagraphsBodyLarge: C,
  ParagraphsBodySmall: F,
  ParagraphsLedeText: h,
  ParagraphsLedeTextSmall: y,
  ShadowButtonDefault: _i,
  ShadowButtonFocus: $i,
  ShadowButtonSecondary: Ni,
  ShadowButtonWarning: Oi,
  ShadowCardDefault: ji,
  ShadowCardHover: Gi,
  SizeButtonMinHeightDesktop: pi,
  SizeButtonMinHeightMobile: ci,
  SizeFormControlLarge: ti,
  SizeFormControlMedium: oi,
  SizeFormControlSmall: Kr,
  SizeFormInputWidth2xl: li,
  SizeFormInputWidth3xl: si,
  SizeFormInputWidthLg: ii,
  SizeFormInputWidthMd: ri,
  SizeFormInputWidthSm: ni,
  SizeFormInputWidthXl: ai,
  SizeFormInputWidthXs: ei,
  SizeIconExtraLarge: Qr,
  SizeIconLarge: Jr,
  SizeIconMedium: Xr,
  SizeIconNhsDefault: Zr,
  SizeIconSmall: Ur,
  Spacing0: Et,
  Spacing1: Dt,
  Spacing2: Mt,
  Spacing3: Lt,
  Spacing4: At,
  Spacing5: It,
  Spacing6: _t,
  Spacing7: Nt,
  Spacing8: Ot,
  Spacing9: $t,
  SpacingResponsive0Mobile: Bo,
  SpacingResponsive0Tablet: Co,
  SpacingResponsive1Mobile: Fo,
  SpacingResponsive1Tablet: ho,
  SpacingResponsive2Mobile: yo,
  SpacingResponsive2Tablet: To,
  SpacingResponsive3Mobile: zo,
  SpacingResponsive3Tablet: Po,
  SpacingResponsive4Mobile: ko,
  SpacingResponsive4Tablet: vo,
  SpacingResponsive5Mobile: Wo,
  SpacingResponsive5Tablet: Ro,
  SpacingResponsive6Mobile: wo,
  SpacingResponsive6Tablet: Ho,
  SpacingResponsive7Mobile: Eo,
  SpacingResponsive7Tablet: Do,
  SpacingResponsive8Mobile: Mo,
  SpacingResponsive8Tablet: Lo,
  SpacingResponsive9Mobile: Ao,
  SpacingResponsive9Tablet: Io,
  StateDisabledBackground: Li,
  StateDisabledBorder: Ai,
  StateDisabledText: Ii,
  StateErrorBackground: Ti,
  StateErrorBorder: zi,
  StateErrorText: Pi,
  StateInfoBackground: Ei,
  StateInfoBorder: Di,
  StateInfoText: Mi,
  StateSuccessBackground: ki,
  StateSuccessBorder: vi,
  StateSuccessText: Wi,
  StateWarningBackground: Ri,
  StateWarningBorder: wi,
  StateWarningText: Hi,
  TransitionButtonDefault: Te,
  TransitionButtonShadow: ze,
  TransitionCardHover: ke,
  TransitionInputFocus: Pe
}, Symbol.toStringTag, { value: "Module" })), na = (o, e) => ({
  fontSize: o.mobile,
  marginBottom: e.mobile,
  "@media (min-width: 768px)": {
    fontSize: o.tablet,
    marginBottom: e.tablet
  },
  "@media print": {
    fontSize: o.print || o.tablet
  }
}), ra = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "h1",
  {
    className: e,
    style: {
      fontFamily: g.fontFamily,
      fontWeight: g.fontWeight,
      fontSize: g.fontSize.mobile,
      lineHeight: g.lineHeight,
      marginTop: g.marginTop,
      marginBottom: g.marginBottom.mobile,
      ...n
    },
    children: o
  }
), ia = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "h2",
  {
    className: e,
    style: {
      fontFamily: m.fontFamily,
      fontWeight: m.fontWeight,
      fontSize: m.fontSize.mobile,
      lineHeight: m.lineHeight,
      marginTop: m.marginTop,
      marginBottom: m.marginBottom.mobile,
      ...n
    },
    children: o
  }
), aa = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "h3",
  {
    className: e,
    style: {
      fontFamily: b.fontFamily,
      fontWeight: b.fontWeight,
      fontSize: b.fontSize.mobile,
      lineHeight: b.lineHeight,
      marginTop: b.marginTop,
      marginBottom: b.marginBottom.mobile,
      ...n
    },
    children: o
  }
), la = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "h4",
  {
    className: e,
    style: {
      fontFamily: S.fontFamily,
      fontWeight: S.fontWeight,
      fontSize: S.fontSize.mobile,
      lineHeight: S.lineHeight,
      marginTop: S.marginTop,
      marginBottom: S.marginBottom.mobile,
      ...n
    },
    children: o
  }
), sa = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "h5",
  {
    className: e,
    style: {
      fontFamily: x.fontFamily,
      fontWeight: x.fontWeight,
      fontSize: x.fontSize.mobile,
      lineHeight: x.lineHeight,
      marginTop: x.marginTop,
      marginBottom: x.marginBottom.mobile,
      ...n
    },
    children: o
  }
), ca = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "p",
  {
    className: e,
    style: {
      fontFamily: B.fontFamily,
      fontWeight: B.fontWeight,
      fontSize: B.fontSize.mobile,
      lineHeight: B.lineHeight,
      marginTop: B.marginTop,
      marginBottom: B.marginBottom.mobile,
      ...n
    },
    children: o
  }
), pa = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "p",
  {
    className: e,
    style: {
      fontFamily: C.fontFamily,
      fontWeight: C.fontWeight,
      fontSize: C.fontSize.mobile,
      lineHeight: C.lineHeight,
      marginTop: C.marginTop,
      marginBottom: C.marginBottom.mobile,
      ...n
    },
    children: o
  }
), da = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "p",
  {
    className: e,
    style: {
      fontFamily: F.fontFamily,
      fontWeight: F.fontWeight,
      fontSize: F.fontSize.mobile,
      lineHeight: F.lineHeight,
      marginTop: F.marginTop,
      marginBottom: F.marginBottom.mobile,
      ...n
    },
    children: o
  }
), ua = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "p",
  {
    className: e,
    style: {
      fontFamily: h.fontFamily,
      fontWeight: h.fontWeight,
      fontSize: h.fontSize.mobile,
      lineHeight: h.lineHeight,
      marginTop: h.marginTop,
      marginBottom: h.marginBottom.mobile,
      ...n
    },
    children: o
  }
), fa = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "p",
  {
    className: e,
    style: {
      fontFamily: y.fontFamily,
      fontWeight: y.fontWeight,
      fontSize: y.fontSize.mobile,
      lineHeight: y.lineHeight,
      marginTop: y.marginTop,
      marginBottom: y.marginBottom.mobile,
      ...n
    },
    children: o
  }
), ga = () => T(() => oa, []), ma = () => T(() => ({
  // Border colors
  BorderColorDefault: Ko,
  BorderColorForm: ot,
  BorderColorCard: tt,
  BorderColorCardHover: et,
  BorderColorError: nt,
  // Primary colors
  ColorPrimaryBlue: rt,
  ColorPrimaryWhite: it,
  ColorPrimaryBlack: at,
  ColorPrimaryGreen: lt,
  ColorPrimaryPurple: st,
  ColorPrimaryDarkPink: ct,
  ColorPrimaryRed: pt,
  ColorPrimaryYellow: dt,
  // Secondary colors
  ColorSecondaryPaleYellow: ut,
  ColorSecondaryWarmYellow: ft,
  ColorSecondaryOrange: gt,
  ColorSecondaryAquaGreen: mt,
  ColorSecondaryPink: bt,
  // Grey scale
  ColorGrey1: St,
  ColorGrey2: xt,
  ColorGrey3: Bt,
  ColorGrey4: Ct,
  ColorGrey5: Ft
}), []), ba = () => T(() => ({
  Spacing0: Et,
  Spacing1: Dt,
  Spacing2: Mt,
  Spacing3: Lt,
  Spacing4: At,
  Spacing5: It,
  Spacing6: _t,
  Spacing7: Nt,
  Spacing8: Ot,
  Spacing9: $t
}), []), Sa = () => T(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: $,
    Size16: Y,
    Size19: U,
    Size22: Q,
    Size26: oo,
    Size36: no,
    Size48: ao
  },
  Tablet: {
    Size14: j,
    Size16: V,
    Size19: X,
    Size22: Z,
    Size26: to,
    Size36: ro,
    Size48: lo
  },
  Print: {
    Size14: G,
    Size16: q,
    Size19: J,
    Size22: K,
    Size26: eo,
    Size36: io,
    Size48: so
  },
  Family: {
    Base: L,
    Fallback: A,
    Print: I
  },
  Weight: {
    Normal: _,
    Bold: N,
    Light: O
  },
  Base: {
    Size: _o,
    LineHeight: No
  },
  // Backward compatibility - individual exports
  FontFamilyBase: L,
  FontFamilyFallback: A,
  FontFamilyPrint: I,
  FontWeightNormal: _,
  FontWeightBold: N,
  FontWeightLight: O,
  FontSize14Mobile: $,
  FontSize14Tablet: j,
  FontSize14Print: G,
  FontSize16Mobile: Y,
  FontSize16Tablet: V,
  FontSize16Print: q,
  FontSize19Mobile: U,
  FontSize19Tablet: X,
  FontSize19Print: J,
  FontSize22Mobile: Q,
  FontSize22Tablet: Z,
  FontSize22Print: K,
  FontSize26Mobile: oo,
  FontSize26Tablet: to,
  FontSize26Print: eo,
  FontSize36Mobile: no,
  FontSize36Tablet: ro,
  FontSize36Print: io,
  FontSize48Mobile: ao,
  FontSize48Tablet: lo,
  FontSize48Print: so,
  FontSizeBase: _o,
  FontLineHeightBase: No
}), []), xa = () => T(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Bo,
    Size1: Fo,
    Size2: yo,
    Size3: zo,
    Size4: ko,
    Size5: Wo,
    Size6: wo,
    Size7: Eo,
    Size8: Mo,
    Size9: Ao
  },
  Tablet: {
    Size0: Co,
    Size1: ho,
    Size2: To,
    Size3: Po,
    Size4: vo,
    Size5: Ro,
    Size6: Ho,
    Size7: Do,
    Size8: Lo,
    Size9: Io
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Bo,
  SpacingResponsive0Tablet: Co,
  SpacingResponsive1Mobile: Fo,
  SpacingResponsive1Tablet: ho,
  SpacingResponsive2Mobile: yo,
  SpacingResponsive2Tablet: To,
  SpacingResponsive3Mobile: zo,
  SpacingResponsive3Tablet: Po,
  SpacingResponsive4Mobile: ko,
  SpacingResponsive4Tablet: vo,
  SpacingResponsive5Mobile: Wo,
  SpacingResponsive5Tablet: Ro,
  SpacingResponsive6Mobile: wo,
  SpacingResponsive6Tablet: Ho,
  SpacingResponsive7Mobile: Eo,
  SpacingResponsive7Tablet: Do,
  SpacingResponsive8Mobile: Mo,
  SpacingResponsive8Tablet: Lo,
  SpacingResponsive9Mobile: Ao,
  SpacingResponsive9Tablet: Io
}), []), Ba = () => T(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: ht,
  ButtonSpacingPaddingHorizontalMobile: yt,
  ButtonSpacingPaddingVerticalDesktop: Tt,
  ButtonSpacingPaddingHorizontalDesktop: zt,
  // Card spacing	
  CardSpacingPaddingMobile: Pt,
  CardSpacingPaddingDesktop: kt,
  CardSpacingHeadingMargin: vt,
  // Form spacing
  FormSpacingInputPadding: Wt,
  FormSpacingInputMinHeight: Rt,
  FormSpacingCheckboxSize: wt,
  FormSpacingCheckboxLabelPadding: Ht
}), []), Ca = () => T(() => ({
  xl: g,
  l: m,
  m: b,
  s: S,
  xs: x
}), []), Fa = () => T(() => ({
  body: B,
  bodyLarge: C,
  bodySmall: F,
  ledeText: h,
  ledeTextSmall: y
}), []), ha = () => T(() => ({
  headings: {
    xl: g,
    l: m,
    m: b,
    s: S,
    xs: x
  },
  paragraphs: {
    body: B,
    bodyLarge: C,
    bodySmall: F,
    ledeText: h,
    ledeTextSmall: y
  },
  fonts: {
    family: {
      base: L,
      fallback: A,
      print: I
    },
    weight: {
      normal: _,
      bold: N,
      light: O
    },
    sizes: {
      mobile: {
        size14: $,
        size16: Y,
        size19: U,
        size22: Q,
        size26: oo,
        size36: no,
        size48: ao
      },
      tablet: {
        size14: j,
        size16: V,
        size19: X,
        size22: Z,
        size26: to,
        size36: ro,
        size48: lo
      },
      print: {
        size14: G,
        size16: q,
        size19: J,
        size22: K,
        size26: eo,
        size36: io,
        size48: so
      }
    }
  }
}), []), jt = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, d = {
  normal: {
    woff2: "FrutigerLTW01-55Roman.woff2",
    woff: "FrutigerLTW01-55Roman.woff",
    ttf: "FrutigerLTW01-55Roman.ttf",
    eot: "FrutigerLTW01-55Roman.eot"
  },
  bold: {
    woff2: "FrutigerLTW01-65Bold.woff2",
    woff: "FrutigerLTW01-65Bold.woff",
    ttf: "FrutigerLTW01-65Bold.ttf",
    eot: "FrutigerLTW01-65Bold.eot"
  }
};
function ya(o = {}) {
  const { fontPath: e, fontWeights: n } = { ...jt, ...o }, l = [];
  return n?.includes(400) && l.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${e}${d.normal.eot}?#iefix") format("eot"),
       url("${e}${d.normal.woff2}") format("woff2"),
       url("${e}${d.normal.woff}") format("woff"),
       url("${e}${d.normal.ttf}") format("truetype");
  src: url("${e}${d.normal.eot}");
}`), n?.includes(600) && l.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${e}${d.bold.eot}?#iefix") format("eot"),
       url("${e}${d.bold.woff2}") format("woff2"),
       url("${e}${d.bold.woff}") format("woff"),
       url("${e}${d.bold.ttf}") format("truetype");
  src: url("${e}${d.bold.eot}");
}`), l.join(`
`);
}
function Ta(o = {}) {
  if (typeof document > "u") return;
  const { fontPath: e, fontWeights: n } = { ...jt, ...o };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${e}${d.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${e}${d.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${e}${d.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${e}${d.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((i) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = i.href, s.as = i.as, s.type = i.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const za = '"Frutiger W01", Arial, Helvetica, sans-serif', Pa = "Arial, Helvetica, sans-serif";
async function ka() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Se as AnimationDurationFast,
  xe as AnimationDurationNormal,
  Be as AnimationDurationSlow,
  ye as AnimationEasingBounce,
  Ce as AnimationEasingEaseIn,
  he as AnimationEasingEaseInOut,
  Fe as AnimationEasingEaseOut,
  tt as BorderColorCard,
  et as BorderColorCardHover,
  Ko as BorderColorDefault,
  nt as BorderColorError,
  ot as BorderColorForm,
  Ie as BorderRadiusLarge,
  Ae as BorderRadiusMedium,
  Me as BorderRadiusNone,
  Le as BorderRadiusSmall,
  we as BorderWidthCardBottom,
  ve as BorderWidthDefault,
  We as BorderWidthFormElement,
  Re as BorderWidthFormElementError,
  He as BorderWidthPanel,
  De as BorderWidthTableCell,
  Ee as BorderWidthTableHeader,
  Bi as BreakpointDesktop,
  Ci as BreakpointLargeDesktop,
  Si as BreakpointMobile,
  xi as BreakpointTablet,
  be as Button,
  gr as ButtonBorderRadius,
  fr as ButtonBorderWidth,
  tr as ButtonPrimaryBackgroundActive,
  Kn as ButtonPrimaryBackgroundDefault,
  er as ButtonPrimaryBackgroundDisabled,
  or as ButtonPrimaryBackgroundHover,
  ir as ButtonPrimaryBorderDefault,
  ar as ButtonPrimaryBorderFocus,
  nr as ButtonPrimaryTextDefault,
  rr as ButtonPrimaryTextDisabled,
  pr as ButtonSecondaryBackgroundActive,
  lr as ButtonSecondaryBackgroundDefault,
  cr as ButtonSecondaryBackgroundHover,
  sr as ButtonSecondaryBackgroundSolid,
  ur as ButtonSecondaryBorderDefault,
  dr as ButtonSecondaryTextDefault,
  mr as ButtonShadowSize,
  zt as ButtonSpacingPaddingHorizontalDesktop,
  yt as ButtonSpacingPaddingHorizontalMobile,
  Tt as ButtonSpacingPaddingVerticalDesktop,
  ht as ButtonSpacingPaddingVerticalMobile,
  br as ButtonTypographyWeight,
  Sr as CardBackgroundDefault,
  Cr as CardBorderBottom,
  xr as CardBorderDefault,
  Br as CardBorderHover,
  zr as CardBorderWidthBottom,
  Tr as CardBorderWidthDefault,
  Pr as CardShadowDefault,
  kr as CardShadowHover,
  vt as CardSpacingHeadingMargin,
  kt as CardSpacingPaddingDesktop,
  Pt as CardSpacingPaddingMobile,
  hr as CardTextDescription,
  Fr as CardTextHeading,
  yr as CardTextLink,
  Xe as ColorBorderDefault,
  Je as ColorBorderSecondary,
  Tn as ColorButtonLoginActive,
  hn as ColorButtonLoginBackground,
  yn as ColorButtonLoginHover,
  zn as ColorButtonLoginShadow,
  nn as ColorButtonPrimaryActive,
  on as ColorButtonPrimaryBackground,
  en as ColorButtonPrimaryHover,
  rn as ColorButtonPrimaryShadow,
  tn as ColorButtonPrimaryText,
  bn as ColorButtonReverseActive,
  fn as ColorButtonReverseBackground,
  mn as ColorButtonReverseHover,
  Sn as ColorButtonReverseShadow,
  gn as ColorButtonReverseText,
  dn as ColorButtonSecondaryActive,
  an as ColorButtonSecondaryBackground,
  ln as ColorButtonSecondaryBackgroundSolid,
  sn as ColorButtonSecondaryBorder,
  pn as ColorButtonSecondaryHover,
  un as ColorButtonSecondaryShadow,
  cn as ColorButtonSecondaryText,
  Cn as ColorButtonWarningActive,
  xn as ColorButtonWarningBackground,
  Bn as ColorButtonWarningHover,
  Fn as ColorButtonWarningShadow,
  Qe as ColorError,
  qe as ColorFocusBackground,
  Ue as ColorFocusText,
  Ke as ColorFormBackground,
  Ze as ColorFormBorder,
  St as ColorGrey1,
  xt as ColorGrey2,
  Bt as ColorGrey3,
  Ct as ColorGrey4,
  Ft as ColorGrey5,
  Ye as ColorLinkActive,
  je as ColorLinkDefault,
  Ge as ColorLinkHover,
  Ve as ColorLinkVisited,
  at as ColorPrimaryBlack,
  rt as ColorPrimaryBlue,
  ct as ColorPrimaryDarkPink,
  lt as ColorPrimaryGreen,
  st as ColorPrimaryPurple,
  pt as ColorPrimaryRed,
  it as ColorPrimaryWhite,
  dt as ColorPrimaryYellow,
  mt as ColorSecondaryAquaGreen,
  gt as ColorSecondaryOrange,
  ut as ColorSecondaryPaleYellow,
  bt as ColorSecondaryPink,
  ft as ColorSecondaryWarmYellow,
  _e as ColorTextPrimary,
  $e as ColorTextPrint,
  Oe as ColorTextReverse,
  Ne as ColorTextSecondary,
  Un as ComponentBlur,
  Nn as ComponentBreadcrumbChevronMarginLeft,
  On as ComponentBreadcrumbChevronMarginRight,
  jn as ComponentBreadcrumbPaddingTopDesktop,
  $n as ComponentBreadcrumbPaddingTopMobile,
  Wn as ComponentButtonPaddingDesktopHorizontal,
  vn as ComponentButtonPaddingDesktopVertical,
  kn as ComponentButtonPaddingMobileHorizontal,
  Pn as ComponentButtonPaddingMobileVertical,
  Rn as ComponentButtonShadowSize,
  An as ComponentCardHeadingMargin,
  Ln as ComponentCardPaddingDesktop,
  Mn as ComponentCardPaddingMobile,
  Jn as ComponentDetails,
  Qn as ComponentExpander,
  Dn as ComponentFormCheckboxLabelPadding,
  En as ComponentFormCheckboxSize,
  wn as ComponentFormInputMinHeight,
  Hn as ComponentFormInputPadding,
  Xn as ComponentLink,
  Zn as ComponentPagination,
  _n as ComponentPanelPaddingDesktop,
  In as ComponentPanelPaddingMobile,
  qn as ComponentSpread,
  Yn as ComponentSummaryListCellPaddingHorizontal,
  Gn as ComponentSummaryListCellPaddingVertical,
  Vn as ComponentSummaryListRowMargin,
  jt as DEFAULT_FONT_CONFIG,
  Ki as ElevationHigh,
  Qi as ElevationLow,
  Zi as ElevationMedium,
  Ji as ElevationNone,
  d as FRUTIGER_FONT_FILES,
  Vi as FocusOutlineOffset,
  qi as FocusOutlineStyle,
  Yi as FocusOutlineWidth,
  Xi as FocusShadowButton,
  Ui as FocusShadowInput,
  L as FontFamilyBase,
  A as FontFamilyFallback,
  I as FontFamilyPrint,
  No as FontLineHeightBase,
  $ as FontSize14Mobile,
  G as FontSize14Print,
  j as FontSize14Tablet,
  Y as FontSize16Mobile,
  q as FontSize16Print,
  V as FontSize16Tablet,
  U as FontSize19Mobile,
  J as FontSize19Print,
  X as FontSize19Tablet,
  Q as FontSize22Mobile,
  K as FontSize22Print,
  Z as FontSize22Tablet,
  oo as FontSize26Mobile,
  eo as FontSize26Print,
  to as FontSize26Tablet,
  no as FontSize36Mobile,
  io as FontSize36Print,
  ro as FontSize36Tablet,
  ao as FontSize48Mobile,
  so as FontSize48Print,
  lo as FontSize48Tablet,
  _o as FontSizeBase,
  N as FontWeightBold,
  O as FontWeightLight,
  _ as FontWeightNormal,
  qr as FormBorderRadius,
  Yr as FormBorderWidthDefault,
  Vr as FormBorderWidthError,
  $r as FormErrorTextDefault,
  jr as FormErrorTypographyWeight,
  Gr as FormHintTextDefault,
  vr as FormInputBackgroundDefault,
  Rr as FormInputBackgroundDisabled,
  wr as FormInputBackgroundError,
  Wr as FormInputBackgroundFocus,
  Hr as FormInputBorderDefault,
  Mr as FormInputBorderDisabled,
  Dr as FormInputBorderError,
  Er as FormInputBorderFocus,
  Lr as FormInputTextDefault,
  Ir as FormInputTextDisabled,
  Ar as FormInputTextPlaceholder,
  _r as FormLabelTextDefault,
  Nr as FormLabelTextRequired,
  Or as FormLabelTypographyWeight,
  Ht as FormSpacingCheckboxLabelPadding,
  wt as FormSpacingCheckboxSize,
  Rt as FormSpacingInputMinHeight,
  Wt as FormSpacingInputPadding,
  hi as GridGutter,
  yi as GridGutterHalf,
  Fi as GridPageWidth,
  m as HeadingsNhsukHeadingL,
  b as HeadingsNhsukHeadingM,
  S as HeadingsNhsukHeadingS,
  g as HeadingsNhsukHeadingXl,
  x as HeadingsNhsukHeadingXs,
  bi as LayoutColumnActions,
  ui as LayoutColumnFull,
  fi as LayoutColumnHalf,
  mi as LayoutColumnQuarter,
  gi as LayoutColumnThird,
  di as LayoutContainerMaxWidth,
  ca as NHSBodyText,
  pa as NHSBodyTextLarge,
  da as NHSBodyTextSmall,
  ra as NHSHeading1,
  ia as NHSHeading2,
  aa as NHSHeading3,
  la as NHSHeading4,
  sa as NHSHeading5,
  ua as NHSLedeText,
  fa as NHSLedeTextSmall,
  ea as NHSThemeProvider,
  Pa as NHS_FALLBACK_FONT_STACK,
  za as NHS_FONT_STACK,
  B as ParagraphsBody,
  C as ParagraphsBodyLarge,
  F as ParagraphsBodySmall,
  h as ParagraphsLedeText,
  y as ParagraphsLedeTextSmall,
  _i as ShadowButtonDefault,
  $i as ShadowButtonFocus,
  Ni as ShadowButtonSecondary,
  Oi as ShadowButtonWarning,
  ji as ShadowCardDefault,
  Gi as ShadowCardHover,
  pi as SizeButtonMinHeightDesktop,
  ci as SizeButtonMinHeightMobile,
  ti as SizeFormControlLarge,
  oi as SizeFormControlMedium,
  Kr as SizeFormControlSmall,
  li as SizeFormInputWidth2xl,
  si as SizeFormInputWidth3xl,
  ii as SizeFormInputWidthLg,
  ri as SizeFormInputWidthMd,
  ni as SizeFormInputWidthSm,
  ai as SizeFormInputWidthXl,
  ei as SizeFormInputWidthXs,
  Qr as SizeIconExtraLarge,
  Jr as SizeIconLarge,
  Xr as SizeIconMedium,
  Zr as SizeIconNhsDefault,
  Ur as SizeIconSmall,
  Et as Spacing0,
  Dt as Spacing1,
  Mt as Spacing2,
  Lt as Spacing3,
  At as Spacing4,
  It as Spacing5,
  _t as Spacing6,
  Nt as Spacing7,
  Ot as Spacing8,
  $t as Spacing9,
  Bo as SpacingResponsive0Mobile,
  Co as SpacingResponsive0Tablet,
  Fo as SpacingResponsive1Mobile,
  ho as SpacingResponsive1Tablet,
  yo as SpacingResponsive2Mobile,
  To as SpacingResponsive2Tablet,
  zo as SpacingResponsive3Mobile,
  Po as SpacingResponsive3Tablet,
  ko as SpacingResponsive4Mobile,
  vo as SpacingResponsive4Tablet,
  Wo as SpacingResponsive5Mobile,
  Ro as SpacingResponsive5Tablet,
  wo as SpacingResponsive6Mobile,
  Ho as SpacingResponsive6Tablet,
  Eo as SpacingResponsive7Mobile,
  Do as SpacingResponsive7Tablet,
  Mo as SpacingResponsive8Mobile,
  Lo as SpacingResponsive8Tablet,
  Ao as SpacingResponsive9Mobile,
  Io as SpacingResponsive9Tablet,
  Li as StateDisabledBackground,
  Ai as StateDisabledBorder,
  Ii as StateDisabledText,
  Ti as StateErrorBackground,
  zi as StateErrorBorder,
  Pi as StateErrorText,
  Ei as StateInfoBackground,
  Di as StateInfoBorder,
  Mi as StateInfoText,
  ki as StateSuccessBackground,
  vi as StateSuccessBorder,
  Wi as StateSuccessText,
  Ri as StateWarningBackground,
  wi as StateWarningBorder,
  Hi as StateWarningText,
  Te as TransitionButtonDefault,
  ze as TransitionButtonShadow,
  ke as TransitionCardHover,
  Pe as TransitionInputFocus,
  ka as checkFrutigerLoaded,
  ya as generateFrutigerFontFace,
  na as getResponsiveStyles,
  Ta as preloadFrutigerFonts,
  ma as useColors,
  Ba as useComponentSpacing,
  Ca as useNHSHeadings,
  Fa as useNHSParagraphs,
  de as useNHSTheme,
  ha as useNHSTypographySystem,
  xa as useResponsiveSpacing,
  ba as useSpacing,
  ga as useTokens,
  Sa as useTypography
};
//# sourceMappingURL=index.esm.js.map
