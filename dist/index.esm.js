import ee, { createContext as ne, useContext as re, forwardRef as ie, useMemo as T } from "react";
var M = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function ae() {
  if (qo) return H;
  qo = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(c, i, l) {
    var P = null;
    if (l !== void 0 && (P = "" + l), i.key !== void 0 && (P = "" + i.key), "key" in i) {
      l = {};
      for (var k in i)
        k !== "key" && (l[k] = i[k]);
    } else l = i;
    return i = l.ref, {
      $$typeof: o,
      type: c,
      key: P,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return H.Fragment = e, H.jsx = n, H.jsxs = n, H;
}
var w = {};
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
function le() {
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
          case Ut:
            return (t.displayName || "Context") + ".Provider";
          case Vt:
            return (t._context.displayName || "Context") + ".Consumer";
          case qt:
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
        var a = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), e(t);
      }
    }
    function c(t) {
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
    function l() {
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
    function so() {
      var t = o(this.type);
      return Go[t] || (Go[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function po(t, r, a, s, z, f, mo, So) {
      return a = f.ref, t = {
        $$typeof: D,
        type: t,
        key: r,
        props: f,
        _owner: z
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: so
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
        value: mo
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: So
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function E(t, r, a, s, z, f, mo, So) {
      var p = r.children;
      if (p !== void 0)
        if (s)
          if (oe(p)) {
            for (s = 0; s < p.length; s++)
              W(p[s]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else W(p);
      if ($o.call(r, "key")) {
        p = o(t);
        var R = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        s = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", Uo[p + s] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          p,
          R,
          p
        ), Uo[p + s] = !0);
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
        mo,
        So
      );
    }
    function W(t) {
      typeof t == "object" && t !== null && t.$$typeof === D && t._store && (t._store.validated = 1);
    }
    var v = ee, D = Symbol.for("react.transitional.element"), uo = Symbol.for("react.portal"), fo = Symbol.for("react.fragment"), Gt = Symbol.for("react.strict_mode"), Yt = Symbol.for("react.profiler"), Vt = Symbol.for("react.consumer"), Ut = Symbol.for("react.context"), qt = Symbol.for("react.forward_ref"), Xt = Symbol.for("react.suspense"), Jt = Symbol.for("react.suspense_list"), Qt = Symbol.for("react.memo"), Oo = Symbol.for("react.lazy"), Zt = Symbol.for("react.activity"), Kt = Symbol.for("react.client.reference"), go = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $o = Object.prototype.hasOwnProperty, oe = Array.isArray, bo = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var jo, Go = {}, Yo = v["react-stack-bottom-frame"].bind(
      v,
      l
    )(), Vo = bo(c(l)), Uo = {};
    w.Fragment = fo, w.jsx = function(t, r, a, s, z) {
      var f = 1e4 > go.recentlyCreatedOwnerStacks++;
      return E(
        t,
        r,
        a,
        !1,
        s,
        z,
        f ? Error("react-stack-top-frame") : Yo,
        f ? bo(c(t)) : Vo
      );
    }, w.jsxs = function(t, r, a, s, z) {
      var f = 1e4 > go.recentlyCreatedOwnerStacks++;
      return E(
        t,
        r,
        a,
        !0,
        s,
        z,
        f ? Error("react-stack-top-frame") : Yo,
        f ? bo(c(t)) : Vo
      );
    };
  }()), w;
}
var Jo;
function ce() {
  return Jo || (Jo = 1, process.env.NODE_ENV === "production" ? M.exports = ae() : M.exports = le()), M.exports;
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
}, Zo = ne(Qo), oa = ({
  children: o,
  theme: e = {}
}) => {
  const n = { ...Qo, ...e };
  return /* @__PURE__ */ u.jsx(Zo.Provider, { value: n, children: o });
}, se = () => {
  const o = re(Zo);
  if (!o)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return o;
}, pe = (o, { size: e, fullWidth: n, disabled: c }) => {
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
    cursor: c ? "not-allowed" : "pointer",
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
    ...c && {
      pointerEvents: "none",
      opacity: 0.6
    },
    // Transitions
    transition: o.transition.TransitionButtonDefault
  };
}, de = (o, e, n) => ({
  primary: {
    backgroundColor: n ? o.button.ButtonPrimaryBackgroundDisabled : o.button.ButtonPrimaryBackgroundDefault,
    color: n ? o.button.ButtonPrimaryTextDisabled : o.button.ButtonPrimaryTextDefault,
    borderColor: o.button.ButtonPrimaryBorderDefault,
    boxShadow: `0 ${o.button.ButtonShadowSize} 0 ${o.color.ColorButtonPrimaryShadow}`
  },
  secondary: {
    backgroundColor: o.button.ButtonSecondaryBackgroundDefault,
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
})[e], ue = ie(
  ({
    children: o,
    variant: e = "primary",
    size: n = "default",
    disabled: c = !1,
    fullWidth: i = !1,
    type: l = "button",
    className: P = "",
    style: k = {},
    onClick: so,
    ...po
  }, E) => {
    const W = se(), v = pe(W, { size: n, fullWidth: i, disabled: c }), D = de(W, e, c), uo = {
      ...v,
      ...D,
      ...k
    };
    return /* @__PURE__ */ u.jsx(
      "button",
      {
        ref: E,
        type: l,
        disabled: c,
        className: `nhs-button nhs-button--${e} ${n !== "default" ? `nhs-button--${n}` : ""} ${i ? "nhs-button--full-width" : ""} ${c ? "nhs-button--disabled" : ""} ${P}`.trim(),
        style: uo,
        onClick: so,
        ...po,
        children: o
      }
    );
  }
);
ue.displayName = "Button";
const fe = "150ms", ge = "300ms", be = "500ms", me = "cubic-bezier(0.4, 0, 1, 1)", Se = "cubic-bezier(0, 0, 0.2, 1)", xe = "cubic-bezier(0.4, 0, 0.2, 1)", Be = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Ce = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Fe = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", ye = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", he = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Te = "1px", ze = "2px", Pe = "4px", ke = "4px", ve = "4px", Re = "2px", We = "1px", He = "0px", we = "4px", Ee = "8px", De = "12px", Ko = "#d8dde0", ot = "#4c6272", tt = "#d8dde0", et = "#aeb7bd", nt = "#d5281b", rt = "#005eb8", it = "#ffffff", at = "#212b32", lt = "#007f3b", ct = "#330072", st = "#7c2855", pt = "#d5281b", dt = "#ffeb3b", ut = "#fff9c4", ft = "#ffb81c", gt = "#ed8b00", bt = "#00a499", mt = "#ae2573", St = "#4c6272", xt = "#768692", Bt = "#aeb7bd", Ct = "#d8dde0", Ft = "#f0f4f5", Me = "#212b32", Le = "#4c6272", Ae = "#ffffff", Ie = "#212b32", _e = "#005eb8", Ne = "#7c2855", Oe = "#003087", $e = "#330072", je = "#ffeb3b", Ge = "#212b32", Ye = "#d8dde0", Ve = "#ffffff33", Ue = "#d5281b", qe = "#4c6272", Xe = "#ffffff", Je = "#007f3b", Qe = "#ffffff", Ze = "#006530", Ke = "#004021", on = "#004021", tn = "#00000000", en = "#ffffff", nn = "#005eb8", rn = "#005eb8", an = "#d9e5f2", ln = "#c7daf0", cn = "#005eb8", sn = "#ffffff", pn = "#212b32", dn = "#d9dde0", un = "#b3bcc2", fn = "#b3bcc2", gn = "#d5281b", bn = "#aa2016", mn = "#6a140e", Sn = "#6a140e", xn = "#005eb8", Bn = "#004b93", Cn = "#002f5c", Fn = "#002f5c", yn = "8px", hn = "16px", Tn = "12px", zn = "16px", Pn = "4px", kn = "40px", vn = "4px", Rn = "40px", Wn = "12px", Hn = "16px", wn = "32px", En = "16px", Dn = "20px", Mn = "28px", Ln = "9px", An = "2px", In = "16px", _n = "24px", Nn = "8px", On = "24px", $n = "16px", jn = "4px", Gn = "4px", Yn = "4px", Vn = "8px", Un = "4px", qn = "16px", Xn = "#007f3b", Jn = "#006530", Qn = "#004021", Zn = "#d8dde0", Kn = "#ffffff", or = "#768692", tr = "#00000000", er = "#ffeb3b", nr = "#00000000", rr = "#ffffff", ir = "#d9e5f2", ar = "#c7daf0", lr = "#005eb8", cr = "#005eb8", yt = "8px", ht = "16px", Tt = "12px", zt = "16px", sr = "2px", pr = "4px", dr = "4px", ur = "600", fr = "#ffffff", gr = "#d8dde0", br = "#aeb7bd", mr = "#f0f4f5", Sr = "#212b32", xr = "#212b32", Br = "#005eb8", Pt = "16px", kt = "32px", vt = "16px", Cr = "1px", Fr = "4px", yr = "none", hr = "0 2px 4px rgba(0, 0, 0, 0.1)", Tr = "#ffffff", zr = "#ffffff", Pr = "#d8dde0", kr = "#ffffff", vr = "#4c6272", Rr = "#ffeb3b", Wr = "#d5281b", Hr = "#aeb7bd", wr = "#212b32", Er = "#4c6272", Dr = "#768692", Mr = "#212b32", Lr = "#ffffff", Ar = "600", Ir = "#d5281b", _r = "600", Nr = "#4c6272", Rt = "4px", Wt = "40px", Ht = "40px", wt = "12px", Or = "2px", $r = "4px", jr = "0px", Gr = "16px", Yr = "18px", Vr = "24px", Ur = "32px", qr = "34px", Xr = "32px", Jr = "40px", Qr = "48px", Zr = "5.4ex", Kr = "7.2ex", oi = "9ex", ti = "10.8ex", ei = "20ex", ni = "38ex", ri = "56ex", ii = "44px", ai = "40px", li = "1020px", ci = "100%", si = "50%", pi = "33.333%", di = "25%", ui = "20%", fi = "320px", gi = "641px", bi = "1025px", mi = "1280px", Si = "960px", xi = "32px", Bi = "16px", Ci = "#d5281b", Fi = "#d5281b", yi = "#ffffff", hi = "#007f3b", Ti = "#007f3b", zi = "#ffffff", Pi = "#ffeb3b", ki = "#ffeb3b", vi = "#212b32", Ri = "#005eb8", Wi = "#005eb8", Hi = "#ffffff", wi = "#d8dde0", Ei = "#aeb7bd", Di = "#768692", Mi = "0 4px 0 #004021", Li = "0 4px 0 #005eb8", Ai = "0 4px 0 #6a140e", Ii = "0 4px 0 #ffeb3b", _i = "none", Ni = "0 2px 4px rgba(0, 0, 0, 0.1)", Oi = "4px", $i = "0px", ji = "solid", Gi = "0 0 0 3px #ffeb3b", Yi = "0 0 0 3px #ffeb3b", Vi = "none", Ui = "0 1px 3px rgba(0, 0, 0, 0.12)", qi = "0 2px 6px rgba(0, 0, 0, 0.16)", Xi = "0 4px 12px rgba(0, 0, 0, 0.20)", Et = "0", Dt = "4px", Mt = "8px", Lt = "16px", At = "24px", It = "32px", _t = "40px", Nt = "48px", Ot = "56px", $t = "64px", Bo = "0", Co = "0", Fo = "4px", yo = "4px", ho = "8px", To = "8px", zo = "8px", Po = "16px", ko = "16px", vo = "24px", Ro = "24px", Wo = "32px", Ho = "32px", wo = "40px", Eo = "40px", Do = "48px", Mo = "48px", Lo = "56px", Ao = "56px", Io = "64px", L = "Frutiger W01", A = "Arial, Helvetica, sans-serif", I = "sans-serif", _ = "400", N = "600", O = "400", $ = "12px", j = "14px", G = "12pt", Y = "14px", V = "16px", U = "12pt", q = "16px", X = "19px", J = "13pt", Q = "19px", Z = "22px", K = "15pt", oo = "22px", to = "26px", eo = "17pt", no = "27px", ro = "36px", io = "20pt", ao = "33px", lo = "48px", co = "24pt", _o = "16px", No = "24px", g = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, b = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, m = {
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
}, y = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, h = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: fe,
  AnimationDurationNormal: ge,
  AnimationDurationSlow: be,
  AnimationEasingBounce: Be,
  AnimationEasingEaseIn: me,
  AnimationEasingEaseInOut: xe,
  AnimationEasingEaseOut: Se,
  BorderColorCard: tt,
  BorderColorCardHover: et,
  BorderColorDefault: Ko,
  BorderColorError: nt,
  BorderColorForm: ot,
  BorderRadiusLarge: De,
  BorderRadiusMedium: Ee,
  BorderRadiusNone: He,
  BorderRadiusSmall: we,
  BorderWidthCardBottom: ke,
  BorderWidthDefault: Te,
  BorderWidthFormElement: ze,
  BorderWidthFormElementError: Pe,
  BorderWidthPanel: ve,
  BorderWidthTableCell: We,
  BorderWidthTableHeader: Re,
  BreakpointDesktop: bi,
  BreakpointLargeDesktop: mi,
  BreakpointMobile: fi,
  BreakpointTablet: gi,
  ButtonBorderRadius: pr,
  ButtonBorderWidth: sr,
  ButtonPrimaryBackgroundActive: Qn,
  ButtonPrimaryBackgroundDefault: Xn,
  ButtonPrimaryBackgroundDisabled: Zn,
  ButtonPrimaryBackgroundHover: Jn,
  ButtonPrimaryBorderDefault: tr,
  ButtonPrimaryBorderFocus: er,
  ButtonPrimaryTextDefault: Kn,
  ButtonPrimaryTextDisabled: or,
  ButtonSecondaryBackgroundActive: ar,
  ButtonSecondaryBackgroundDefault: nr,
  ButtonSecondaryBackgroundHover: ir,
  ButtonSecondaryBackgroundSolid: rr,
  ButtonSecondaryBorderDefault: cr,
  ButtonSecondaryTextDefault: lr,
  ButtonShadowSize: dr,
  ButtonSpacingPaddingHorizontalDesktop: zt,
  ButtonSpacingPaddingHorizontalMobile: ht,
  ButtonSpacingPaddingVerticalDesktop: Tt,
  ButtonSpacingPaddingVerticalMobile: yt,
  ButtonTypographyWeight: ur,
  CardBackgroundDefault: fr,
  CardBorderBottom: mr,
  CardBorderDefault: gr,
  CardBorderHover: br,
  CardBorderWidthBottom: Fr,
  CardBorderWidthDefault: Cr,
  CardShadowDefault: yr,
  CardShadowHover: hr,
  CardSpacingHeadingMargin: vt,
  CardSpacingPaddingDesktop: kt,
  CardSpacingPaddingMobile: Pt,
  CardTextDescription: xr,
  CardTextHeading: Sr,
  CardTextLink: Br,
  ColorBorderDefault: Ye,
  ColorBorderSecondary: Ve,
  ColorButtonLoginActive: Cn,
  ColorButtonLoginBackground: xn,
  ColorButtonLoginHover: Bn,
  ColorButtonLoginShadow: Fn,
  ColorButtonPrimaryActive: Ke,
  ColorButtonPrimaryBackground: Je,
  ColorButtonPrimaryHover: Ze,
  ColorButtonPrimaryShadow: on,
  ColorButtonPrimaryText: Qe,
  ColorButtonReverseActive: un,
  ColorButtonReverseBackground: sn,
  ColorButtonReverseHover: dn,
  ColorButtonReverseShadow: fn,
  ColorButtonReverseText: pn,
  ColorButtonSecondaryActive: ln,
  ColorButtonSecondaryBackground: tn,
  ColorButtonSecondaryBackgroundSolid: en,
  ColorButtonSecondaryBorder: nn,
  ColorButtonSecondaryHover: an,
  ColorButtonSecondaryShadow: cn,
  ColorButtonSecondaryText: rn,
  ColorButtonWarningActive: mn,
  ColorButtonWarningBackground: gn,
  ColorButtonWarningHover: bn,
  ColorButtonWarningShadow: Sn,
  ColorError: Ue,
  ColorFocusBackground: je,
  ColorFocusText: Ge,
  ColorFormBackground: Xe,
  ColorFormBorder: qe,
  ColorGrey1: St,
  ColorGrey2: xt,
  ColorGrey3: Bt,
  ColorGrey4: Ct,
  ColorGrey5: Ft,
  ColorLinkActive: Oe,
  ColorLinkDefault: _e,
  ColorLinkHover: Ne,
  ColorLinkVisited: $e,
  ColorPrimaryBlack: at,
  ColorPrimaryBlue: rt,
  ColorPrimaryDarkPink: st,
  ColorPrimaryGreen: lt,
  ColorPrimaryPurple: ct,
  ColorPrimaryRed: pt,
  ColorPrimaryWhite: it,
  ColorPrimaryYellow: dt,
  ColorSecondaryAquaGreen: bt,
  ColorSecondaryOrange: gt,
  ColorSecondaryPaleYellow: ut,
  ColorSecondaryPink: mt,
  ColorSecondaryWarmYellow: ft,
  ColorTextPrimary: Me,
  ColorTextPrint: Ie,
  ColorTextReverse: Ae,
  ColorTextSecondary: Le,
  ComponentBlur: Gn,
  ComponentBreadcrumbChevronMarginLeft: Ln,
  ComponentBreadcrumbChevronMarginRight: An,
  ComponentBreadcrumbPaddingTopDesktop: _n,
  ComponentBreadcrumbPaddingTopMobile: In,
  ComponentButtonPaddingDesktopHorizontal: zn,
  ComponentButtonPaddingDesktopVertical: Tn,
  ComponentButtonPaddingMobileHorizontal: hn,
  ComponentButtonPaddingMobileVertical: yn,
  ComponentButtonShadowSize: Pn,
  ComponentCardHeadingMargin: En,
  ComponentCardPaddingDesktop: wn,
  ComponentCardPaddingMobile: Hn,
  ComponentDetails: Vn,
  ComponentExpander: Un,
  ComponentFormCheckboxLabelPadding: Wn,
  ComponentFormCheckboxSize: Rn,
  ComponentFormInputMinHeight: kn,
  ComponentFormInputPadding: vn,
  ComponentLink: Yn,
  ComponentPagination: qn,
  ComponentPanelPaddingDesktop: Mn,
  ComponentPanelPaddingMobile: Dn,
  ComponentSpread: jn,
  ComponentSummaryListCellPaddingHorizontal: On,
  ComponentSummaryListCellPaddingVertical: Nn,
  ComponentSummaryListRowMargin: $n,
  ElevationHigh: Xi,
  ElevationLow: Ui,
  ElevationMedium: qi,
  ElevationNone: Vi,
  FocusOutlineOffset: $i,
  FocusOutlineStyle: ji,
  FocusOutlineWidth: Oi,
  FocusShadowButton: Yi,
  FocusShadowInput: Gi,
  FontFamilyBase: L,
  FontFamilyFallback: A,
  FontFamilyPrint: I,
  FontLineHeightBase: No,
  FontSize14Mobile: $,
  FontSize14Print: G,
  FontSize14Tablet: j,
  FontSize16Mobile: Y,
  FontSize16Print: U,
  FontSize16Tablet: V,
  FontSize19Mobile: q,
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
  FontSize48Print: co,
  FontSize48Tablet: lo,
  FontSizeBase: _o,
  FontWeightBold: N,
  FontWeightLight: O,
  FontWeightNormal: _,
  FormBorderRadius: jr,
  FormBorderWidthDefault: Or,
  FormBorderWidthError: $r,
  FormErrorTextDefault: Ir,
  FormErrorTypographyWeight: _r,
  FormHintTextDefault: Nr,
  FormInputBackgroundDefault: Tr,
  FormInputBackgroundDisabled: Pr,
  FormInputBackgroundError: kr,
  FormInputBackgroundFocus: zr,
  FormInputBorderDefault: vr,
  FormInputBorderDisabled: Hr,
  FormInputBorderError: Wr,
  FormInputBorderFocus: Rr,
  FormInputTextDefault: wr,
  FormInputTextDisabled: Dr,
  FormInputTextPlaceholder: Er,
  FormLabelTextDefault: Mr,
  FormLabelTextRequired: Lr,
  FormLabelTypographyWeight: Ar,
  FormSpacingCheckboxLabelPadding: wt,
  FormSpacingCheckboxSize: Ht,
  FormSpacingInputMinHeight: Wt,
  FormSpacingInputPadding: Rt,
  GridGutter: xi,
  GridGutterHalf: Bi,
  GridPageWidth: Si,
  HeadingsNhsukHeadingL: b,
  HeadingsNhsukHeadingM: m,
  HeadingsNhsukHeadingS: S,
  HeadingsNhsukHeadingXl: g,
  HeadingsNhsukHeadingXs: x,
  LayoutColumnActions: ui,
  LayoutColumnFull: ci,
  LayoutColumnHalf: si,
  LayoutColumnQuarter: di,
  LayoutColumnThird: pi,
  LayoutContainerMaxWidth: li,
  ParagraphsBody: B,
  ParagraphsBodyLarge: C,
  ParagraphsBodySmall: F,
  ParagraphsLedeText: y,
  ParagraphsLedeTextSmall: h,
  ShadowButtonDefault: Mi,
  ShadowButtonFocus: Ii,
  ShadowButtonSecondary: Li,
  ShadowButtonWarning: Ai,
  ShadowCardDefault: _i,
  ShadowCardHover: Ni,
  SizeButtonMinHeightDesktop: ai,
  SizeButtonMinHeightMobile: ii,
  SizeFormControlLarge: Qr,
  SizeFormControlMedium: Jr,
  SizeFormControlSmall: Xr,
  SizeFormInputWidth2xl: ni,
  SizeFormInputWidth3xl: ri,
  SizeFormInputWidthLg: ti,
  SizeFormInputWidthMd: oi,
  SizeFormInputWidthSm: Kr,
  SizeFormInputWidthXl: ei,
  SizeFormInputWidthXs: Zr,
  SizeIconExtraLarge: Ur,
  SizeIconLarge: Vr,
  SizeIconMedium: Yr,
  SizeIconNhsDefault: qr,
  SizeIconSmall: Gr,
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
  SpacingResponsive1Tablet: yo,
  SpacingResponsive2Mobile: ho,
  SpacingResponsive2Tablet: To,
  SpacingResponsive3Mobile: zo,
  SpacingResponsive3Tablet: Po,
  SpacingResponsive4Mobile: ko,
  SpacingResponsive4Tablet: vo,
  SpacingResponsive5Mobile: Ro,
  SpacingResponsive5Tablet: Wo,
  SpacingResponsive6Mobile: Ho,
  SpacingResponsive6Tablet: wo,
  SpacingResponsive7Mobile: Eo,
  SpacingResponsive7Tablet: Do,
  SpacingResponsive8Mobile: Mo,
  SpacingResponsive8Tablet: Lo,
  SpacingResponsive9Mobile: Ao,
  SpacingResponsive9Tablet: Io,
  StateDisabledBackground: wi,
  StateDisabledBorder: Ei,
  StateDisabledText: Di,
  StateErrorBackground: Ci,
  StateErrorBorder: Fi,
  StateErrorText: yi,
  StateInfoBackground: Ri,
  StateInfoBorder: Wi,
  StateInfoText: Hi,
  StateSuccessBackground: hi,
  StateSuccessBorder: Ti,
  StateSuccessText: zi,
  StateWarningBackground: Pi,
  StateWarningBorder: ki,
  StateWarningText: vi,
  TransitionButtonDefault: Ce,
  TransitionButtonShadow: Fe,
  TransitionCardHover: he,
  TransitionInputFocus: ye
}, Symbol.toStringTag, { value: "Module" })), ta = (o, e) => ({
  fontSize: o.mobile,
  marginBottom: e.mobile,
  "@media (min-width: 768px)": {
    fontSize: o.tablet,
    marginBottom: e.tablet
  },
  "@media print": {
    fontSize: o.print || o.tablet
  }
}), ea = ({
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
), na = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "h2",
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
), ra = ({
  children: o,
  className: e = "",
  style: n = {}
}) => /* @__PURE__ */ u.jsx(
  "h3",
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
), ia = ({
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
), aa = ({
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
), la = ({
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
), ca = ({
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
), sa = ({
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
), pa = ({
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
), da = ({
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
), ua = () => T(() => Ji, []), fa = () => T(() => ({
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
  ColorPrimaryPurple: ct,
  ColorPrimaryDarkPink: st,
  ColorPrimaryRed: pt,
  ColorPrimaryYellow: dt,
  // Secondary colors
  ColorSecondaryPaleYellow: ut,
  ColorSecondaryWarmYellow: ft,
  ColorSecondaryOrange: gt,
  ColorSecondaryAquaGreen: bt,
  ColorSecondaryPink: mt,
  // Grey scale
  ColorGrey1: St,
  ColorGrey2: xt,
  ColorGrey3: Bt,
  ColorGrey4: Ct,
  ColorGrey5: Ft
}), []), ga = () => T(() => ({
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
}), []), ba = () => T(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: $,
    Size16: Y,
    Size19: q,
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
    Size16: U,
    Size19: J,
    Size22: K,
    Size26: eo,
    Size36: io,
    Size48: co
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
  FontSize16Print: U,
  FontSize19Mobile: q,
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
  FontSize48Print: co,
  FontSizeBase: _o,
  FontLineHeightBase: No
}), []), ma = () => T(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Bo,
    Size1: Fo,
    Size2: ho,
    Size3: zo,
    Size4: ko,
    Size5: Ro,
    Size6: Ho,
    Size7: Eo,
    Size8: Mo,
    Size9: Ao
  },
  Tablet: {
    Size0: Co,
    Size1: yo,
    Size2: To,
    Size3: Po,
    Size4: vo,
    Size5: Wo,
    Size6: wo,
    Size7: Do,
    Size8: Lo,
    Size9: Io
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Bo,
  SpacingResponsive0Tablet: Co,
  SpacingResponsive1Mobile: Fo,
  SpacingResponsive1Tablet: yo,
  SpacingResponsive2Mobile: ho,
  SpacingResponsive2Tablet: To,
  SpacingResponsive3Mobile: zo,
  SpacingResponsive3Tablet: Po,
  SpacingResponsive4Mobile: ko,
  SpacingResponsive4Tablet: vo,
  SpacingResponsive5Mobile: Ro,
  SpacingResponsive5Tablet: Wo,
  SpacingResponsive6Mobile: Ho,
  SpacingResponsive6Tablet: wo,
  SpacingResponsive7Mobile: Eo,
  SpacingResponsive7Tablet: Do,
  SpacingResponsive8Mobile: Mo,
  SpacingResponsive8Tablet: Lo,
  SpacingResponsive9Mobile: Ao,
  SpacingResponsive9Tablet: Io
}), []), Sa = () => T(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: yt,
  ButtonSpacingPaddingHorizontalMobile: ht,
  ButtonSpacingPaddingVerticalDesktop: Tt,
  ButtonSpacingPaddingHorizontalDesktop: zt,
  // Card spacing  
  CardSpacingPaddingMobile: Pt,
  CardSpacingPaddingDesktop: kt,
  CardSpacingHeadingMargin: vt,
  // Form spacing
  FormSpacingInputPadding: Rt,
  FormSpacingInputMinHeight: Wt,
  FormSpacingCheckboxSize: Ht,
  FormSpacingCheckboxLabelPadding: wt
}), []), xa = () => T(() => ({
  xl: g,
  l: b,
  m,
  s: S,
  xs: x
}), []), Ba = () => T(() => ({
  body: B,
  bodyLarge: C,
  bodySmall: F,
  ledeText: y,
  ledeTextSmall: h
}), []), Ca = () => T(() => ({
  headings: {
    xl: g,
    l: b,
    m,
    s: S,
    xs: x
  },
  paragraphs: {
    body: B,
    bodyLarge: C,
    bodySmall: F,
    ledeText: y,
    ledeTextSmall: h
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
        size19: q,
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
        size16: U,
        size19: J,
        size22: K,
        size26: eo,
        size36: io,
        size48: co
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
function Fa(o = {}) {
  const { fontPath: e, fontWeights: n } = { ...jt, ...o }, c = [];
  return n?.includes(400) && c.push(`
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
}`), n?.includes(600) && c.push(`
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
}`), c.join(`
`);
}
function Qi(o = {}) {
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
    const l = document.createElement("link");
    l.rel = "preload", l.href = i.href, l.as = i.as, l.type = i.type, l.crossOrigin = "anonymous", document.head.appendChild(l);
  });
}
const ya = '"Frutiger W01", Arial, Helvetica, sans-serif', ha = "Arial, Helvetica, sans-serif";
async function Zi() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
function Ta(o = {}) {
  const [e, n] = React.useState(!1), [c, i] = React.useState(!1);
  return React.useEffect(() => {
    Qi(o), Zi().then((l) => {
      n(l), l || console.warn("NHS Frutiger fonts not loaded. Using fallback fonts.");
    }).catch(() => {
      i(!0), console.warn("Error checking NHS Frutiger font loading. Using fallback fonts.");
    });
  }, []), { fontsLoaded: e, fontsError: c };
}
export {
  fe as AnimationDurationFast,
  ge as AnimationDurationNormal,
  be as AnimationDurationSlow,
  Be as AnimationEasingBounce,
  me as AnimationEasingEaseIn,
  xe as AnimationEasingEaseInOut,
  Se as AnimationEasingEaseOut,
  tt as BorderColorCard,
  et as BorderColorCardHover,
  Ko as BorderColorDefault,
  nt as BorderColorError,
  ot as BorderColorForm,
  De as BorderRadiusLarge,
  Ee as BorderRadiusMedium,
  He as BorderRadiusNone,
  we as BorderRadiusSmall,
  ke as BorderWidthCardBottom,
  Te as BorderWidthDefault,
  ze as BorderWidthFormElement,
  Pe as BorderWidthFormElementError,
  ve as BorderWidthPanel,
  We as BorderWidthTableCell,
  Re as BorderWidthTableHeader,
  bi as BreakpointDesktop,
  mi as BreakpointLargeDesktop,
  fi as BreakpointMobile,
  gi as BreakpointTablet,
  ue as Button,
  pr as ButtonBorderRadius,
  sr as ButtonBorderWidth,
  Qn as ButtonPrimaryBackgroundActive,
  Xn as ButtonPrimaryBackgroundDefault,
  Zn as ButtonPrimaryBackgroundDisabled,
  Jn as ButtonPrimaryBackgroundHover,
  tr as ButtonPrimaryBorderDefault,
  er as ButtonPrimaryBorderFocus,
  Kn as ButtonPrimaryTextDefault,
  or as ButtonPrimaryTextDisabled,
  ar as ButtonSecondaryBackgroundActive,
  nr as ButtonSecondaryBackgroundDefault,
  ir as ButtonSecondaryBackgroundHover,
  rr as ButtonSecondaryBackgroundSolid,
  cr as ButtonSecondaryBorderDefault,
  lr as ButtonSecondaryTextDefault,
  dr as ButtonShadowSize,
  zt as ButtonSpacingPaddingHorizontalDesktop,
  ht as ButtonSpacingPaddingHorizontalMobile,
  Tt as ButtonSpacingPaddingVerticalDesktop,
  yt as ButtonSpacingPaddingVerticalMobile,
  ur as ButtonTypographyWeight,
  fr as CardBackgroundDefault,
  mr as CardBorderBottom,
  gr as CardBorderDefault,
  br as CardBorderHover,
  Fr as CardBorderWidthBottom,
  Cr as CardBorderWidthDefault,
  yr as CardShadowDefault,
  hr as CardShadowHover,
  vt as CardSpacingHeadingMargin,
  kt as CardSpacingPaddingDesktop,
  Pt as CardSpacingPaddingMobile,
  xr as CardTextDescription,
  Sr as CardTextHeading,
  Br as CardTextLink,
  Ye as ColorBorderDefault,
  Ve as ColorBorderSecondary,
  Cn as ColorButtonLoginActive,
  xn as ColorButtonLoginBackground,
  Bn as ColorButtonLoginHover,
  Fn as ColorButtonLoginShadow,
  Ke as ColorButtonPrimaryActive,
  Je as ColorButtonPrimaryBackground,
  Ze as ColorButtonPrimaryHover,
  on as ColorButtonPrimaryShadow,
  Qe as ColorButtonPrimaryText,
  un as ColorButtonReverseActive,
  sn as ColorButtonReverseBackground,
  dn as ColorButtonReverseHover,
  fn as ColorButtonReverseShadow,
  pn as ColorButtonReverseText,
  ln as ColorButtonSecondaryActive,
  tn as ColorButtonSecondaryBackground,
  en as ColorButtonSecondaryBackgroundSolid,
  nn as ColorButtonSecondaryBorder,
  an as ColorButtonSecondaryHover,
  cn as ColorButtonSecondaryShadow,
  rn as ColorButtonSecondaryText,
  mn as ColorButtonWarningActive,
  gn as ColorButtonWarningBackground,
  bn as ColorButtonWarningHover,
  Sn as ColorButtonWarningShadow,
  Ue as ColorError,
  je as ColorFocusBackground,
  Ge as ColorFocusText,
  Xe as ColorFormBackground,
  qe as ColorFormBorder,
  St as ColorGrey1,
  xt as ColorGrey2,
  Bt as ColorGrey3,
  Ct as ColorGrey4,
  Ft as ColorGrey5,
  Oe as ColorLinkActive,
  _e as ColorLinkDefault,
  Ne as ColorLinkHover,
  $e as ColorLinkVisited,
  at as ColorPrimaryBlack,
  rt as ColorPrimaryBlue,
  st as ColorPrimaryDarkPink,
  lt as ColorPrimaryGreen,
  ct as ColorPrimaryPurple,
  pt as ColorPrimaryRed,
  it as ColorPrimaryWhite,
  dt as ColorPrimaryYellow,
  bt as ColorSecondaryAquaGreen,
  gt as ColorSecondaryOrange,
  ut as ColorSecondaryPaleYellow,
  mt as ColorSecondaryPink,
  ft as ColorSecondaryWarmYellow,
  Me as ColorTextPrimary,
  Ie as ColorTextPrint,
  Ae as ColorTextReverse,
  Le as ColorTextSecondary,
  Gn as ComponentBlur,
  Ln as ComponentBreadcrumbChevronMarginLeft,
  An as ComponentBreadcrumbChevronMarginRight,
  _n as ComponentBreadcrumbPaddingTopDesktop,
  In as ComponentBreadcrumbPaddingTopMobile,
  zn as ComponentButtonPaddingDesktopHorizontal,
  Tn as ComponentButtonPaddingDesktopVertical,
  hn as ComponentButtonPaddingMobileHorizontal,
  yn as ComponentButtonPaddingMobileVertical,
  Pn as ComponentButtonShadowSize,
  En as ComponentCardHeadingMargin,
  wn as ComponentCardPaddingDesktop,
  Hn as ComponentCardPaddingMobile,
  Vn as ComponentDetails,
  Un as ComponentExpander,
  Wn as ComponentFormCheckboxLabelPadding,
  Rn as ComponentFormCheckboxSize,
  kn as ComponentFormInputMinHeight,
  vn as ComponentFormInputPadding,
  Yn as ComponentLink,
  qn as ComponentPagination,
  Mn as ComponentPanelPaddingDesktop,
  Dn as ComponentPanelPaddingMobile,
  jn as ComponentSpread,
  On as ComponentSummaryListCellPaddingHorizontal,
  Nn as ComponentSummaryListCellPaddingVertical,
  $n as ComponentSummaryListRowMargin,
  jt as DEFAULT_FONT_CONFIG,
  Xi as ElevationHigh,
  Ui as ElevationLow,
  qi as ElevationMedium,
  Vi as ElevationNone,
  d as FRUTIGER_FONT_FILES,
  $i as FocusOutlineOffset,
  ji as FocusOutlineStyle,
  Oi as FocusOutlineWidth,
  Yi as FocusShadowButton,
  Gi as FocusShadowInput,
  L as FontFamilyBase,
  A as FontFamilyFallback,
  I as FontFamilyPrint,
  No as FontLineHeightBase,
  $ as FontSize14Mobile,
  G as FontSize14Print,
  j as FontSize14Tablet,
  Y as FontSize16Mobile,
  U as FontSize16Print,
  V as FontSize16Tablet,
  q as FontSize19Mobile,
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
  co as FontSize48Print,
  lo as FontSize48Tablet,
  _o as FontSizeBase,
  N as FontWeightBold,
  O as FontWeightLight,
  _ as FontWeightNormal,
  jr as FormBorderRadius,
  Or as FormBorderWidthDefault,
  $r as FormBorderWidthError,
  Ir as FormErrorTextDefault,
  _r as FormErrorTypographyWeight,
  Nr as FormHintTextDefault,
  Tr as FormInputBackgroundDefault,
  Pr as FormInputBackgroundDisabled,
  kr as FormInputBackgroundError,
  zr as FormInputBackgroundFocus,
  vr as FormInputBorderDefault,
  Hr as FormInputBorderDisabled,
  Wr as FormInputBorderError,
  Rr as FormInputBorderFocus,
  wr as FormInputTextDefault,
  Dr as FormInputTextDisabled,
  Er as FormInputTextPlaceholder,
  Mr as FormLabelTextDefault,
  Lr as FormLabelTextRequired,
  Ar as FormLabelTypographyWeight,
  wt as FormSpacingCheckboxLabelPadding,
  Ht as FormSpacingCheckboxSize,
  Wt as FormSpacingInputMinHeight,
  Rt as FormSpacingInputPadding,
  xi as GridGutter,
  Bi as GridGutterHalf,
  Si as GridPageWidth,
  b as HeadingsNhsukHeadingL,
  m as HeadingsNhsukHeadingM,
  S as HeadingsNhsukHeadingS,
  g as HeadingsNhsukHeadingXl,
  x as HeadingsNhsukHeadingXs,
  ui as LayoutColumnActions,
  ci as LayoutColumnFull,
  si as LayoutColumnHalf,
  di as LayoutColumnQuarter,
  pi as LayoutColumnThird,
  li as LayoutContainerMaxWidth,
  la as NHSBodyText,
  ca as NHSBodyTextLarge,
  sa as NHSBodyTextSmall,
  ea as NHSHeading1,
  na as NHSHeading2,
  ra as NHSHeading3,
  ia as NHSHeading4,
  aa as NHSHeading5,
  pa as NHSLedeText,
  da as NHSLedeTextSmall,
  oa as NHSThemeProvider,
  ha as NHS_FALLBACK_FONT_STACK,
  ya as NHS_FONT_STACK,
  B as ParagraphsBody,
  C as ParagraphsBodyLarge,
  F as ParagraphsBodySmall,
  y as ParagraphsLedeText,
  h as ParagraphsLedeTextSmall,
  Mi as ShadowButtonDefault,
  Ii as ShadowButtonFocus,
  Li as ShadowButtonSecondary,
  Ai as ShadowButtonWarning,
  _i as ShadowCardDefault,
  Ni as ShadowCardHover,
  ai as SizeButtonMinHeightDesktop,
  ii as SizeButtonMinHeightMobile,
  Qr as SizeFormControlLarge,
  Jr as SizeFormControlMedium,
  Xr as SizeFormControlSmall,
  ni as SizeFormInputWidth2xl,
  ri as SizeFormInputWidth3xl,
  ti as SizeFormInputWidthLg,
  oi as SizeFormInputWidthMd,
  Kr as SizeFormInputWidthSm,
  ei as SizeFormInputWidthXl,
  Zr as SizeFormInputWidthXs,
  Ur as SizeIconExtraLarge,
  Vr as SizeIconLarge,
  Yr as SizeIconMedium,
  qr as SizeIconNhsDefault,
  Gr as SizeIconSmall,
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
  yo as SpacingResponsive1Tablet,
  ho as SpacingResponsive2Mobile,
  To as SpacingResponsive2Tablet,
  zo as SpacingResponsive3Mobile,
  Po as SpacingResponsive3Tablet,
  ko as SpacingResponsive4Mobile,
  vo as SpacingResponsive4Tablet,
  Ro as SpacingResponsive5Mobile,
  Wo as SpacingResponsive5Tablet,
  Ho as SpacingResponsive6Mobile,
  wo as SpacingResponsive6Tablet,
  Eo as SpacingResponsive7Mobile,
  Do as SpacingResponsive7Tablet,
  Mo as SpacingResponsive8Mobile,
  Lo as SpacingResponsive8Tablet,
  Ao as SpacingResponsive9Mobile,
  Io as SpacingResponsive9Tablet,
  wi as StateDisabledBackground,
  Ei as StateDisabledBorder,
  Di as StateDisabledText,
  Ci as StateErrorBackground,
  Fi as StateErrorBorder,
  yi as StateErrorText,
  Ri as StateInfoBackground,
  Wi as StateInfoBorder,
  Hi as StateInfoText,
  hi as StateSuccessBackground,
  Ti as StateSuccessBorder,
  zi as StateSuccessText,
  Pi as StateWarningBackground,
  ki as StateWarningBorder,
  vi as StateWarningText,
  Ce as TransitionButtonDefault,
  Fe as TransitionButtonShadow,
  he as TransitionCardHover,
  ye as TransitionInputFocus,
  Zi as checkFrutigerLoaded,
  Fa as generateFrutigerFontFace,
  ta as getResponsiveStyles,
  Qi as preloadFrutigerFonts,
  fa as useColors,
  Sa as useComponentSpacing,
  Ta as useFrutigerFonts,
  xa as useNHSHeadings,
  Ba as useNHSParagraphs,
  se as useNHSTheme,
  Ca as useNHSTypographySystem,
  ma as useResponsiveSpacing,
  ga as useSpacing,
  ua as useTokens,
  ba as useTypography
};
//# sourceMappingURL=index.esm.js.map
