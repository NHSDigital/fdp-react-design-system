var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// packages/nhs-fdp/dist/js/tokens.json
var require_tokens = __commonJS({
  "packages/nhs-fdp/dist/js/tokens.json"(exports, module) {
    module.exports = {
      animation: {
        duration: {
          fast: "150ms",
          normal: "300ms",
          slow: "500ms"
        },
        easing: {
          "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
          "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
          "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
          bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
        }
      },
      transition: {
        button: {
          default: "background-color 300ms cubic-bezier(0, 0, 0.2, 1)",
          shadow: "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)"
        },
        input: {
          focus: "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)"
        },
        card: {
          hover: "border-color 300ms cubic-bezier(0, 0, 0.2, 1)"
        }
      },
      border: {
        width: {
          default: "1px",
          "form-element": "2px",
          "form-element-error": "4px",
          "card-bottom": "4px",
          panel: "8px",
          "table-header": "2px",
          "table-cell": "1px",
          semantic: {
            thin: "1px",
            standard: "2px",
            thick: "4px"
          }
        },
        radius: {
          none: "0px",
          small: "4px",
          medium: "8px",
          large: "12px"
        },
        color: {
          default: "#d8dde0",
          form: "#4c6272",
          card: "#d8dde0",
          "card-hover": "#aeb7bd",
          error: "#d5281b"
        }
      },
      color: {
        primary: {
          blue: "#005eb8",
          "blue-active": "#002f5c",
          white: "#ffffff",
          black: "#212b32",
          green: "#007f3b",
          purple: "#330072",
          "dark-pink": "#7c2855",
          red: "#d5281b",
          "light-purple": "#880fb8",
          yellow: "#ffeb3b"
        },
        secondary: {
          "pale-yellow": "#fff9c4",
          "warm-yellow": "#ffb81c",
          "region-yellow": "#fae100",
          orange: "#ed8b00",
          tangerine: "#ed4f00",
          "aqua-green": "#00a499",
          "light-blue": "#41b6e6",
          pink: "#ae2573",
          "bright-pink": "#e317aa",
          "light-green": "#78be20",
          brown: "#9a6324"
        },
        grey: {
          "1": "#4c6272",
          "2": "#768692",
          "3": "#aeb7bd",
          "4": "#d8dde0",
          "5": "#f0f4f5"
        },
        accessibility: {
          "okabe-ito": {
            green: "#009e73",
            vermillion: "#d55e00"
          },
          "cvd-safe": {
            blue: "#1f77b4",
            orange: "#ff7f0e"
          },
          positive: "#009e73",
          negative: "#d55e00"
        },
        "data-viz": {
          categorical: {
            "1": "#005eb8",
            "2": "#41b6e6",
            "3": "#00a499",
            "4": "#78be20",
            "5": "#007f3b",
            "6": "#ffb81c",
            "7": "#ed4f00",
            "8": "#ae2573",
            "9": "#e317aa",
            "10": "#880fb8",
            "11": "#330072",
            "12": "#9a6324"
          },
          neutral: {
            comparison: "#4c6272"
          },
          region: {
            "north-east": "#005eb8",
            "north-west": "#41b6e6",
            "east-of-england": "#330072",
            midlands: "#ae2573",
            london: "#78be21",
            "south-west": "#fae100",
            "south-east": "#ed8b00"
          },
          severity: {
            low: "#fff9c4",
            moderate: "#ffb81c",
            high: "#ed8b00",
            critical: "#d5281b"
          },
          "org-level": {
            trust: "#005eb8",
            ambulance: "#007f3b",
            icb: "#7c2855",
            region: "#330072"
          },
          stroke: {
            categorical: {
              "1": "#ffffff",
              "2": "#212b32",
              "3": "#212b32",
              "4": "#212b32",
              "5": "#ffffff",
              "6": "#212b32",
              "7": "#ffffff",
              "8": "#ffffff",
              "9": "#ffffff",
              "10": "#ffffff",
              "11": "#ffffff",
              "12": "#ffffff"
            },
            region: {
              "north-east": "#5996d1",
              "north-west": "#3189ad",
              "east-of-england": "#7a59a3",
              midlands: "#ca71a4",
              london: "#5a8f19",
              "south-west": "#bca900",
              "south-east": "#b26800"
            },
            severity: {
              low: "#212b32",
              moderate: "#212b32",
              high: "#212b32",
              critical: "#ffffff"
            },
            "org-level": {
              trust: "#ffffff",
              ambulance: "#ffffff",
              icb: "#ffffff",
              region: "#ffffff"
            }
          },
          spc: {
            improvement: "#00b0f0",
            concern: "#e46c0a",
            "no-judgement": "#490092",
            "common-cause": "#a6a6a6",
            "assurance-pass": "#00823b",
            "assurance-fail": "#da291c",
            gradient: {
              stop: {
                "start-opacity": "0.18",
                "mid-opacity": "0.06",
                "end-opacity": "0",
                "triangle-start-opacity": "0.18",
                "triangle-mid-opacity": "0.06",
                "triangle-end-opacity": "0"
              }
            },
            stroke: {
              improvement: "#000000",
              concern: "#000000",
              "no-judgement": "#000000",
              "common-cause": "#ffffff",
              "assurance-pass": "#000000",
              "assurance-fail": "#000000"
            }
          }
        }
      },
      component: {
        button: {
          padding: {
            mobile: {
              vertical: "8px",
              horizontal: "16px"
            },
            desktop: {
              vertical: "12px",
              horizontal: "16px"
            }
          },
          shadow: {
            size: "4px"
          }
        },
        form: {
          input: {
            "min-height": "40px",
            padding: "4px"
          },
          checkbox: {
            size: "40px",
            "label-padding": "12px"
          }
        },
        card: {
          padding: {
            mobile: "16px",
            desktop: "32px"
          },
          "heading-margin": "16px"
        },
        panel: {
          padding: {
            mobile: "20px",
            desktop: "28px"
          }
        },
        breadcrumb: {
          chevron: {
            "margin-left": "9px",
            "margin-right": "2px"
          },
          "padding-top": {
            mobile: "16px",
            desktop: "24px"
          }
        },
        "summary-list": {
          "cell-padding": {
            vertical: "8px",
            horizontal: "24px"
          },
          "row-margin": "16px"
        },
        disclosure: {
          "icon-offset": "20px",
          "icon-size": "32px",
          "icon-position-offset": "16px"
        },
        "icon-text": {
          gap: "38px",
          "gap-small": "26px"
        },
        warning: {
          "icon-offset": "33px",
          "icon-offset-mobile": "25px",
          "icon-top": "16px",
          "icon-top-mobile": "8px"
        },
        guidance: {
          "icon-size": "34px",
          "icon-position-top": "2px",
          "icon-position-top-print": "4px",
          "content-padding": "40px",
          "content-padding-small": "32px",
          "tick-size": "28px"
        },
        header: {
          "logo-min-width": "100px",
          "logo-height": "40px",
          "search-button-width": "44px",
          "search-icon-size": "24px",
          "menu-icon-size": "28px"
        },
        task: {
          "padding-adjustment": "4px"
        },
        tag: {
          "padding-adjustment": "2px"
        },
        tabs: {
          "border-width": "1px",
          "border-compensation": "1px",
          "padding-multiplier": "1.5"
        },
        details: "8px",
        navigation: {
          dropdown: {
            "item-padding": "6px",
            "logo-margin": "32px"
          }
        },
        expander: "4px",
        print: {
          "icon-adjustment": "4px",
          "logo-height": "32px"
        },
        spread: "4px",
        blur: "4px",
        link: "4px",
        pagination: "16px"
      },
      button: {
        primary: {
          background: {
            default: "#007f3b",
            hover: "#006530",
            active: "#00401e",
            disabled: "#d8dde0"
          },
          text: {
            default: "#ffffff",
            disabled: "#768692"
          },
          border: {
            default: "#00000000",
            focus: "#ffeb3b"
          }
        },
        secondary: {
          background: {
            default: "#00000000",
            solid: "#ffffff",
            hover: "#d9e5f2",
            active: "#c7daf0"
          },
          text: {
            default: "#005eb8"
          },
          border: {
            default: "#005eb8"
          }
        },
        spacing: {
          "padding-vertical-mobile": "8px",
          "padding-horizontal-mobile": "16px",
          "padding-vertical-desktop": "12px",
          "padding-horizontal-desktop": "16px"
        },
        border: {
          width: "2px",
          radius: "4px"
        },
        shadow: {
          size: "4px"
        },
        typography: {
          weight: "600"
        }
      },
      card: {
        background: {
          default: "#ffffff"
        },
        border: {
          default: "#d8dde0",
          hover: "#aeb7bd",
          bottom: "#f0f4f5"
        },
        text: {
          heading: "#212b32",
          description: "#212b32",
          link: "#005eb8"
        },
        spacing: {
          "padding-mobile": "16px",
          "padding-desktop": "32px",
          "heading-margin": "16px"
        },
        "border-width": {
          default: "1px",
          bottom: "4px"
        },
        shadow: {
          default: "none",
          hover: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }
      },
      form: {
        input: {
          background: {
            default: "#ffffff",
            focus: "#ffffff",
            disabled: "#f0f4f5",
            error: "#ffffff"
          },
          border: {
            default: "#4c6272",
            focus: "#ffeb3b",
            error: "#d5281b",
            disabled: "#aeb7bd"
          },
          text: {
            default: "#212b32",
            placeholder: "#4c6272",
            disabled: "#768692"
          }
        },
        label: {
          text: {
            default: "#212b32",
            required: "#d5281b"
          },
          typography: {
            weight: "600"
          }
        },
        error: {
          text: {
            default: "#d5281b"
          },
          typography: {
            weight: "600"
          }
        },
        hint: {
          text: {
            default: "#4c6272"
          }
        },
        spacing: {
          "input-padding": "4px",
          "input-min-height": "40px",
          "checkbox-size": "40px",
          "checkbox-label-padding": "12px"
        },
        border: {
          "width-default": "2px",
          "width-error": "4px",
          radius: "0px"
        }
      },
      tag: {
        default: {
          background: "#004c96",
          border: "#004c96",
          text: "#ffffff"
        },
        white: {
          background: "#ffffff",
          border: "#212b32",
          text: "#212b32"
        },
        grey: {
          background: "#dbe0e3",
          border: "#354550",
          text: "#354550"
        },
        green: {
          background: "#cce5d8",
          border: "#004c23",
          text: "#004c23"
        },
        "aqua-green": {
          background: "#ccedeb",
          border: "#00524d",
          text: "#00524d"
        },
        blue: {
          background: "#ccdff1",
          border: "#004281",
          text: "#004281"
        },
        purple: {
          background: "#d6cce3",
          border: "#240050",
          text: "#240050"
        },
        pink: {
          background: "#efd3e3",
          border: "#57133a",
          text: "#57133a"
        },
        red: {
          background: "#f7d4d1",
          border: "#6b140e",
          text: "#6b140e"
        },
        orange: {
          background: "#ffdc8e",
          border: "#4d3708",
          text: "#4d3708"
        },
        yellow: {
          background: "#fff59d",
          border: "#4d4712",
          text: "#4d4712"
        }
      },
      diagram: {
        flowchart: {
          decision: {
            fill: "#fff3e0",
            stroke: "#f57c00",
            text: "#4e342e"
          },
          auto: {
            fill: "#e3f2fd",
            stroke: "#1976d2",
            text: "#0d47a1"
          },
          action: {
            fill: "#e8f5e9",
            stroke: "#388e3c",
            text: "#1b5e20"
          },
          warning: {
            fill: "#ffebee",
            stroke: "#d32f2f",
            text: "#b71c1c"
          }
        },
        mermaid: {
          class: {
            decision: {
              fill: "#fff3e0",
              stroke: "#f57c00",
              text: "#4e342e"
            },
            auto: {
              fill: "#e3f2fd",
              stroke: "#1976d2",
              text: "#0d47a1"
            },
            action: {
              fill: "#e8f5e9",
              stroke: "#388e3c",
              text: "#1b5e20"
            },
            warning: {
              fill: "#ffebee",
              stroke: "#d32f2f",
              text: "#b71c1c"
            }
          }
        }
      },
      size: {
        icon: {
          small: "16px",
          medium: "18px",
          large: "24px",
          "extra-large": "32px",
          "nhs-default": "34px"
        },
        form: {
          control: {
            small: "32px",
            medium: "40px",
            large: "48px"
          },
          "input-width": {
            xs: "5.4ex",
            sm: "7.2ex",
            md: "9ex",
            lg: "10.8ex",
            xl: "20ex",
            "2xl": "38ex",
            "3xl": "56ex"
          }
        },
        button: {
          "min-height": {
            mobile: "44px",
            desktop: "40px"
          }
        }
      },
      layout: {
        container: {
          "max-width": "1020px"
        },
        column: {
          full: "100%",
          half: "50%",
          third: "33.333%",
          quarter: "25%",
          actions: "20%"
        },
        margin: {
          "negative-thin": "-1px",
          "negative-standard": "-2px"
        },
        gap: {
          minimal: "1px",
          small: "6px"
        }
      },
      breakpoint: {
        small: "320px",
        "small-max": "767px",
        medium: "768px",
        large: "1025px",
        xlarge: "1200px",
        xxlarge: "1440px"
      },
      grid: {
        "page-width": "960px",
        gutter: "32px",
        "gutter-half": "16px"
      },
      gradient: {
        "metric-card": {
          primary: "linear-gradient(135deg, rgba(0,94,184,0.05), #ffffff)",
          secondary: "linear-gradient(135deg, rgba(136,15,184,0.06), #ffffff)",
          accent: "linear-gradient(135deg, rgba(255,184,28,0.10), #ffffff)",
          success: "linear-gradient(135deg, rgba(0,164,153,0.10), #ffffff)",
          warning: "linear-gradient(135deg, rgba(237,79,0,0.10), #ffffff)",
          error: "linear-gradient(135deg, rgba(213,40,27,0.10), #ffffff)"
        }
      },
      semantic: {
        "intent-hover": {
          primary: "darken(#007f3b, 10%)",
          secondary: "darken(#005eb8, 10%)",
          warning: "darken(#d5281b, 10%)"
        },
        "intent-active": {
          primary: "darken(#007f3b, 20%)",
          secondary: "darken(#005eb8, 20%)",
          warning: "darken(#d5281b, 20%)"
        },
        "intent-light": {
          primary: "lighten(#007f3b, 40%)",
          secondary: "lighten(#005eb8, 40%)",
          warning: "lighten(#d5281b, 40%)"
        },
        context: {
          form: {
            background: {
              error: "lighten(#d5281b, 40%)",
              success: "lighten(#007f3b, 40%)",
              default: "#ffffff",
              disabled: "#d8dde0",
              readonly: "#e8edee"
            },
            border: {
              default: "#4c6272",
              focus: "#005eb8",
              error: "#d5281b",
              success: "#007f3b"
            },
            text: {
              default: "#212b32",
              placeholder: "#768692",
              disabled: "#768692",
              error: "#d5281b"
            }
          },
          navigation: {
            background: {
              header: "#005eb8",
              footer: "#005eb8",
              sidebar: "#ffffff"
            },
            text: {
              primary: "#ffffff",
              secondary: "#ffffffcc",
              active: "#ffeb3b"
            },
            accent: {
              hover: "#ffffff1a",
              active: "#ffffff33",
              border: "#ffeb3b"
            }
          },
          content: {
            background: {
              primary: "#ffffff",
              secondary: "#d8dde0",
              elevated: "#ffffff"
            },
            text: {
              primary: "#212b32",
              secondary: "#4c6272",
              tertiary: "#768692"
            },
            accent: {
              link: "#005eb8",
              highlight: "#ffeb3b",
              border: "#e8edee"
            }
          }
        },
        intent: {
          primary: "#007f3b",
          secondary: "#005eb8",
          warning: "#d5281b",
          success: "#007f3b",
          neutral: "#4c6272",
          info: "#005eb8"
        },
        surface: {
          elevation: {
            "0": "#ffffff",
            "1": "#ffffff",
            "2": "#ffffff",
            "3": "#ffffff"
          },
          interactive: {
            default: "#ffffff",
            hover: "#d8dde0",
            active: "#e8edee",
            selected: "#005eb81a"
          }
        },
        "data-viz": {
          series: {
            "1": "#005eb8",
            "2": "#41b6e6",
            "3": "#00a499",
            "4": "#78be20",
            "5": "#007f3b",
            "6": "#ffb81c",
            "7": "#ed4f00",
            "8": "#ae2573",
            "9": "#e317aa",
            "10": "#880fb8",
            "11": "#330072",
            "12": "#9a6324"
          },
          region: {
            "north-east": "#005eb8",
            "north-west": "#41b6e6",
            "east-of-england": "#330072",
            midlands: "#ae2573",
            london: "#78be21",
            "south-west": "#fae100",
            "south-east": "#ed8b00"
          },
          severity: {
            low: "#fff9c4",
            moderate: "#ffb81c",
            high: "#ed8b00",
            critical: "#d5281b"
          },
          "org-level": {
            trust: "#005eb8",
            ambulance: "#007f3b",
            icb: "#7c2855",
            region: "#330072"
          },
          stroke: {
            series: {
              "1": "#ffffff",
              "2": "#212b32",
              "3": "#212b32",
              "4": "#212b32",
              "5": "#ffffff",
              "6": "#212b32",
              "7": "#ffffff",
              "8": "#ffffff",
              "9": "#ffffff",
              "10": "#ffffff",
              "11": "#ffffff",
              "12": "#ffffff"
            },
            region: {
              "north-east": "#5996d1",
              "north-west": "#3189ad",
              "east-of-england": "#7a59a3",
              midlands: "#ca71a4",
              london: "#5a8f19",
              "south-west": "#bca900",
              "south-east": "#b26800"
            },
            severity: {
              low: "#212b32",
              moderate: "#212b32",
              high: "#212b32",
              critical: "#ffffff"
            },
            "org-level": {
              trust: "#ffffff",
              ambulance: "#ffffff",
              icb: "#ffffff",
              region: "#ffffff"
            }
          }
        },
        relationship: {
          "parent-child": {
            card: {
              background: "#ffffff",
              content: {
                background: "calculated-lighten(#ffffff, 2%)",
                text: "auto-contrast(calculated-lighten(#ffffff, 2%))"
              },
              header: {
                background: "calculated-darken(#ffffff, 3%)",
                text: "auto-contrast(calculated-darken(#ffffff, 3%))"
              }
            },
            panel: {
              background: "#ffffff",
              border: "calculated-darken(#ffffff, 15%)",
              content: {
                text: "auto-contrast(#ffffff)"
              }
            }
          },
          "state-propagation": {
            interactive: {
              default: "#007f3b",
              hover: "calculated-darken(#007f3b, 10%)",
              active: "calculated-darken(#007f3b, 20%)",
              disabled: "calculated-fade(#007f3b, 40%)"
            },
            button: {
              primary: {
                background: "#007f3b",
                hover: "calculated-darken(#007f3b, 10%)",
                active: "calculated-darken(#007f3b, 20%)"
              },
              secondary: {
                background: "#00000000",
                border: "#005eb8",
                hover: "calculated-tint(#005eb8, 90%)"
              }
            }
          }
        },
        color: {
          text: {
            primary: "#212b32",
            secondary: "#4c6272",
            reverse: "#ffffff",
            print: "#212b32"
          },
          link: {
            default: "#005eb8",
            hover: "#7c2855",
            active: "#003087",
            visited: "#330072"
          },
          focus: {
            background: "#ffeb3b",
            text: "#212b32"
          },
          border: {
            default: "#d8dde0",
            secondary: "#ffffff33"
          },
          error: "#d5281b",
          form: {
            border: "#4c6272",
            background: "#ffffff"
          },
          hover: {
            subtle: "#e8edee",
            "header-link": "#3a71a6"
          },
          active: {
            "header-link": "#002c5c"
          },
          button: {
            primary: {
              background: "#007f3b",
              text: "#ffffff",
              hover: "#006530",
              active: "#00401e",
              shadow: "#00401e"
            },
            secondary: {
              background: "#00000000",
              "background-solid": "#ffffff",
              border: "#005eb8",
              text: "#005eb8",
              hover: "#d9e5f2",
              active: "#c7daf0",
              shadow: "#005eb8"
            },
            reverse: {
              background: "#ffffff",
              text: "#212b32",
              hover: "#d9dde0",
              active: "#b3bcc2",
              shadow: "#b3bcc2"
            },
            warning: {
              background: "#d5281b",
              hover: "#aa2016",
              active: "#6a140e",
              shadow: "#6a140e"
            },
            login: {
              background: "#005eb8",
              hover: "#004b93",
              active: "#002f5c",
              shadow: "#002f5c"
            }
          }
        }
      },
      shadow: {
        button: {
          default: "0 4px 0 #00401e",
          secondary: "0 4px 0 #005eb8",
          warning: "0 4px 0 #6a140e",
          focus: "0 4px 0 #ffeb3b"
        },
        card: {
          default: "none",
          hover: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }
      },
      "focus-outline": {
        width: "4px",
        offset: "0px",
        style: "solid"
      },
      "focus-shadow": {
        input: "0 0 0 3px #ffeb3b",
        button: "0 0 0 3px #ffeb3b",
        "link-pattern": "0 -2px #ffeb3b, 0 4px #212b32"
      },
      "focus-box-shadow": {
        "offset-top": "-2px",
        "offset-bottom": "4px"
      },
      elevation: {
        none: "none",
        low: "0 1px 3px rgba(0, 0, 0, 0.12)",
        medium: "0 2px 6px rgba(0, 0, 0, 0.16)",
        high: "0 4px 12px rgba(0, 0, 0, 0.20)"
      },
      spacing: {
        "0": "0",
        "1": "4px",
        "2": "8px",
        "3": "16px",
        "4": "24px",
        "5": "32px",
        "6": "40px",
        "7": "48px",
        "8": "56px",
        "9": "64px"
      },
      "spacing-responsive": {
        "0": {
          mobile: "0",
          tablet: "0"
        },
        "1": {
          mobile: "4px",
          tablet: "4px"
        },
        "2": {
          mobile: "8px",
          tablet: "8px"
        },
        "3": {
          mobile: "8px",
          tablet: "16px"
        },
        "4": {
          mobile: "16px",
          tablet: "24px"
        },
        "5": {
          mobile: "24px",
          tablet: "32px"
        },
        "6": {
          mobile: "32px",
          tablet: "40px"
        },
        "7": {
          mobile: "40px",
          tablet: "48px"
        },
        "8": {
          mobile: "48px",
          tablet: "56px"
        },
        "9": {
          mobile: "56px",
          tablet: "64px"
        }
      },
      theme: {
        light: {
          semantic: {
            intent: {
              primary: "#007f3b",
              secondary: "#005eb8",
              warning: "#d5281b",
              success: "#007f3b",
              neutral: "#4c6272",
              info: "#005eb8"
            },
            surface: {
              background: {
                primary: "#ffffff",
                secondary: "#f0f4f5",
                elevated: "#ffffff"
              },
              text: {
                primary: "#212b32",
                secondary: "#4c6272",
                tertiary: "#768692",
                inverse: "#ffffff"
              },
              border: {
                default: "#d8dde0",
                subtle: "#f0f4f5",
                strong: "#768692"
              }
            }
          }
        },
        dark: {
          semantic: {
            intent: {
              primary: "lighten(#007f3b, 20%)",
              secondary: "lighten(#005eb8, 25%)",
              warning: "lighten(#d5281b, 15%)",
              success: "lighten(#007f3b, 20%)",
              neutral: "#aeb7bd",
              info: "lighten(#005eb8, 25%)"
            },
            surface: {
              background: {
                primary: "darken(#212b32, 5%)",
                secondary: "lighten(#212b32, 8%)",
                elevated: "lighten(#212b32, 12%)"
              },
              text: {
                primary: "fade(#ffffff, 95%)",
                secondary: "fade(#ffffff, 80%)",
                tertiary: "fade(#ffffff, 60%)",
                inverse: "#212b32"
              },
              border: {
                default: "fade(#ffffff, 20%)",
                subtle: "fade(#ffffff, 10%)",
                strong: "fade(#ffffff, 40%)"
              }
            }
          }
        }
      },
      font: {
        family: {
          base: "Frutiger W01",
          fallback: "Arial, sans-serif",
          print: "sans-serif"
        },
        weight: {
          normal: "400",
          bold: "600",
          light: "400"
        },
        size: {
          "14": {
            desktop: "14px",
            mobile: "12px",
            tablet: "14px",
            print: "12pt"
          },
          "16": {
            desktop: "16px",
            mobile: "14px",
            tablet: "16px",
            print: "12pt"
          },
          "19": {
            desktop: "19px",
            mobile: "16px",
            tablet: "19px",
            print: "13pt"
          },
          "22": {
            desktop: "22px",
            mobile: "19px",
            tablet: "22px",
            print: "15pt"
          },
          "26": {
            desktop: "26px",
            mobile: "22px",
            tablet: "26px",
            print: "17pt"
          },
          "36": {
            desktop: "36px",
            mobile: "27px",
            tablet: "36px",
            print: "20pt"
          },
          "48": {
            desktop: "48px",
            mobile: "33px",
            tablet: "48px",
            print: "24pt"
          },
          base: "16px"
        },
        "line-height": {
          "14": {
            desktop: "24px",
            mobile: "20px",
            tablet: "24px",
            print: "1.3"
          },
          "16": {
            desktop: "24px",
            mobile: "24px",
            tablet: "24px",
            print: "1.3"
          },
          "19": {
            desktop: "24px",
            mobile: "24px",
            tablet: "28px",
            print: "1.25"
          },
          "22": {
            desktop: "30px",
            mobile: "27px",
            tablet: "30px",
            print: "1.25"
          },
          "26": {
            desktop: "32px",
            mobile: "29px",
            tablet: "32px",
            print: "1.25"
          },
          "36": {
            desktop: "42px",
            mobile: "33px",
            tablet: "42px",
            print: "1.2"
          },
          "48": {
            desktop: "54px",
            mobile: "38px",
            tablet: "54px",
            print: "1.15"
          },
          base: "24px"
        }
      }
    };
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames3() {
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
          return classNames3.apply(null, arg);
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
        classNames3.default = classNames3;
        module.exports = classNames3;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames3;
        });
      } else {
        window.classNames = classNames3;
      }
    })();
  }
});

// node_modules/prismjs/prism.js
var require_prism = __commonJS({
  "node_modules/prismjs/prism.js"(exports, module) {
    var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
    var Prism2 = function(_self2) {
      var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var uniqueId = 0;
      var plainTextGrammar = {};
      var _ = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: _self2.Prism && _self2.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(obj) {
            if (!obj["__id"]) {
              Object.defineProperty(obj, "__id", { value: ++uniqueId });
            }
            return obj["__id"];
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function deepClone(o, visited) {
            visited = visited || {};
            var clone;
            var id;
            switch (_.util.type(o)) {
              case "Object":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = /** @type {Record<string, any>} */
                {};
                visited[id] = clone;
                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }
                return (
                  /** @type {any} */
                  clone
                );
              case "Array":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = [];
                visited[id] = clone;
                /** @type {Array} */
                /** @type {any} */
                o.forEach(function(v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return (
                  /** @type {any} */
                  clone
                );
              default:
                return o;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(element) {
            while (element) {
              var m = lang.exec(element.className);
              if (m) {
                return m[1].toLowerCase();
              }
              element = element.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(element, language) {
            element.className = element.className.replace(RegExp(lang, "gi"), "");
            element.classList.add("language-" + language);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document === "undefined") {
              return null;
            }
            if ("currentScript" in document && 1 < 2) {
              return (
                /** @type {any} */
                document.currentScript
              );
            }
            try {
              throw new Error();
            } catch (err) {
              var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
              if (src) {
                var scripts = document.getElementsByTagName("script");
                for (var i in scripts) {
                  if (scripts[i].src == src) {
                    return scripts[i];
                  }
                }
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(element, className, defaultActivation) {
            var no = "no-" + className;
            while (element) {
              var classList = element.classList;
              if (classList.contains(className)) {
                return true;
              }
              if (classList.contains(no)) {
                return false;
              }
              element = element.parentElement;
            }
            return !!defaultActivation;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: plainTextGrammar,
          plaintext: plainTextGrammar,
          text: plainTextGrammar,
          txt: plainTextGrammar,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(id, redef) {
            var lang2 = _.util.clone(_.languages[id]);
            for (var key in redef) {
              lang2[key] = redef[key];
            }
            return lang2;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(inside, before, insert, root) {
            root = root || /** @type {any} */
            _.languages;
            var grammar = root[inside];
            var ret = {};
            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                }
                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }
            var old = root[inside];
            root[inside] = ret;
            _.languages.DFS(_.languages, function(key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });
            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;
            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);
                var property = o[i];
                var propertyType = _.util.type(property);
                if (propertyType === "Object" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === "Array" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(async, callback) {
          _.highlightAllUnder(document, async, callback);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(container, async, callback) {
          var env = {
            callback,
            container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          _.hooks.run("before-highlightall", env);
          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
          _.hooks.run("before-all-elements-highlight", env);
          for (var i = 0, element; element = env.elements[i++]; ) {
            _.highlightElement(element, async === true, env.callback);
          }
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(element, async, callback) {
          var language = _.util.getLanguage(element);
          var grammar = _.languages[language];
          _.util.setLanguage(element, language);
          var parent = element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre") {
            _.util.setLanguage(parent, language);
          }
          var code = element.textContent;
          var env = {
            element,
            language,
            grammar,
            code
          };
          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;
            _.hooks.run("before-insert", env);
            env.element.innerHTML = env.highlightedCode;
            _.hooks.run("after-highlight", env);
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
          }
          _.hooks.run("before-sanity-check", env);
          parent = env.element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
            parent.setAttribute("tabindex", "0");
          }
          if (!env.code) {
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
            return;
          }
          _.hooks.run("before-highlight", env);
          if (!env.grammar) {
            insertHighlightedCode(_.util.encode(env.code));
            return;
          }
          if (async && _self2.Worker) {
            var worker = new Worker(_.filename);
            worker.onmessage = function(evt) {
              insertHighlightedCode(evt.data);
            };
            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
          }
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(text, grammar, language) {
          var env = {
            code: text,
            grammar,
            language
          };
          _.hooks.run("before-tokenize", env);
          if (!env.grammar) {
            throw new Error('The language "' + env.language + '" has no grammar.');
          }
          env.tokens = _.tokenize(env.code, env.grammar);
          _.hooks.run("after-tokenize", env);
          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(text, grammar) {
          var rest = grammar.rest;
          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }
            delete grammar.rest;
          }
          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(name, callback) {
            var hooks = _.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(name, env) {
            var callbacks = _.hooks.all[name];
            if (!callbacks || !callbacks.length) {
              return;
            }
            for (var i = 0, callback; callback = callbacks[i++]; ) {
              callback(env);
            }
          }
        },
        Token
      };
      _self2.Prism = _;
      function Token(type, content, alias, matchedStr) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
      }
      Token.stringify = function stringify(o, language) {
        if (typeof o == "string") {
          return o;
        }
        if (Array.isArray(o)) {
          var s = "";
          o.forEach(function(e) {
            s += stringify(e, language);
          });
          return s;
        }
        var env = {
          type: o.type,
          content: stringify(o.content, language),
          tag: "span",
          classes: ["token", o.type],
          attributes: {},
          language
        };
        var aliases = o.alias;
        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }
        _.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
          attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
        }
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
      };
      function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
          var lookbehindLength = match[1].length;
          match.index += lookbehindLength;
          match[0] = match[0].slice(lookbehindLength);
        }
        return match;
      }
      function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j = 0; j < patterns.length; ++j) {
            if (rematch && rematch.cause == token + "," + j) {
              return;
            }
            var patternObj = patterns[j];
            var inside = patternObj.inside;
            var lookbehind = !!patternObj.lookbehind;
            var greedy = !!patternObj.greedy;
            var alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
            }
            var pattern = patternObj.pattern || patternObj;
            for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
              if (rematch && pos >= rematch.reach) {
                break;
              }
              var str = currentNode.value;
              if (tokenList.length > text.length) {
                return;
              }
              if (str instanceof Token) {
                continue;
              }
              var removeCount = 1;
              var match;
              if (greedy) {
                match = matchPattern(pattern, pos, text, lookbehind);
                if (!match || match.index >= text.length) {
                  break;
                }
                var from = match.index;
                var to = match.index + match[0].length;
                var p = pos;
                p += currentNode.value.length;
                while (from >= p) {
                  currentNode = currentNode.next;
                  p += currentNode.value.length;
                }
                p -= currentNode.value.length;
                pos = p;
                if (currentNode.value instanceof Token) {
                  continue;
                }
                for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                  removeCount++;
                  p += k.value.length;
                }
                removeCount--;
                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                match = matchPattern(pattern, 0, str, lookbehind);
                if (!match) {
                  continue;
                }
              }
              var from = match.index;
              var matchStr = match[0];
              var before = str.slice(0, from);
              var after = str.slice(from + matchStr.length);
              var reach = pos + str.length;
              if (rematch && reach > rematch.reach) {
                rematch.reach = reach;
              }
              var removeFrom = currentNode.prev;
              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }
              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
              currentNode = addAfter(tokenList, removeFrom, wrapped);
              if (after) {
                addAfter(tokenList, currentNode, after);
              }
              if (removeCount > 1) {
                var nestedRematch = {
                  cause: token + "," + j,
                  reach
                };
                matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                if (rematch && nestedRematch.reach > rematch.reach) {
                  rematch.reach = nestedRematch.reach;
                }
              }
            }
          }
        }
      }
      function LinkedList() {
        var head = { value: null, prev: null, next: null };
        var tail = { value: null, prev: head, next: null };
        head.next = tail;
        this.head = head;
        this.tail = tail;
        this.length = 0;
      }
      function addAfter(list, node, value) {
        var next = node.next;
        var newNode = { value, prev: node, next };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      function removeRange(list, node, count) {
        var next = node.next;
        for (var i = 0; i < count && next !== list.tail; i++) {
          next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
      }
      function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }
        return array;
      }
      if (!_self2.document) {
        if (!_self2.addEventListener) {
          return _;
        }
        if (!_.disableWorkerMessageHandler) {
          _self2.addEventListener("message", function(evt) {
            var message = JSON.parse(evt.data);
            var lang2 = message.language;
            var code = message.code;
            var immediateClose = message.immediateClose;
            _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
            if (immediateClose) {
              _self2.close();
            }
          }, false);
        }
        return _;
      }
      var script = _.util.currentScript();
      if (script) {
        _.filename = script.src;
        if (script.hasAttribute("data-manual")) {
          _.manual = true;
        }
      }
      function highlightAutomaticallyCallback() {
        if (!_.manual) {
          _.highlightAll();
        }
      }
      if (!_.manual) {
        var readyState = document.readyState;
        if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
          document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }
      return _;
    }(_self);
    if (typeof module !== "undefined" && module.exports) {
      module.exports = Prism2;
    }
    if (typeof global !== "undefined") {
      global.Prism = Prism2;
    }
    Prism2.languages.markup = {
      "comment": {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
      },
      "prolog": {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
      },
      "doctype": {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null
            // see below
          },
          "string": {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
          },
          "punctuation": /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          "name": /[^\s<>'"]+/
        }
      },
      "cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
      },
      "tag": {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          "tag": {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              "punctuation": /^<\/?/,
              "namespace": /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              "punctuation": [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: true
                }
              ]
            }
          },
          "punctuation": /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              "namespace": /^[^\s>\/:]+:/
            }
          }
        }
      },
      "entity": [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    };
    Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
    Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
    Prism2.hooks.add("wrap", function(env) {
      if (env.type === "entity") {
        env.attributes["title"] = env.content.replace(/&amp;/, "&");
      }
    });
    Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside["language-" + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism2.languages[lang]
        };
        includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside["language-" + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism2.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return tagName;
          }), "i"),
          lookbehind: true,
          greedy: true,
          inside
        };
        Prism2.languages.insertBefore("markup", "cdata", def);
      }
    });
    Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function(attrName, lang) {
        Prism2.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                "value": {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [lang, "language-" + lang],
                  inside: Prism2.languages[lang]
                },
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    });
    Prism2.languages.html = Prism2.languages.markup;
    Prism2.languages.mathml = Prism2.languages.markup;
    Prism2.languages.svg = Prism2.languages.markup;
    Prism2.languages.xml = Prism2.languages.extend("markup", {});
    Prism2.languages.ssml = Prism2.languages.xml;
    Prism2.languages.atom = Prism2.languages.xml;
    Prism2.languages.rss = Prism2.languages.xml;
    (function(Prism3) {
      var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      Prism3.languages.css = {
        "comment": /\/\*[\s\S]*?\*\//,
        "atrule": {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            "rule": /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            "keyword": {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
            // See rest below
          }
        },
        "url": {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: true,
          inside: {
            "function": /^url/i,
            "punctuation": /^\(|\)$/,
            "string": {
              pattern: RegExp("^" + string.source + "$"),
              alias: "url"
            }
          }
        },
        "selector": {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
          lookbehind: true
        },
        "string": {
          pattern: string,
          greedy: true
        },
        "property": {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        "important": /!important\b/i,
        "function": {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        "punctuation": /[(){};:,]/
      };
      Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
      var markup = Prism3.languages.markup;
      if (markup) {
        markup.tag.addInlined("style", "css");
        markup.tag.addAttribute("style", "css");
      }
    })(Prism2);
    Prism2.languages.clike = {
      "comment": [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      "string": {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          "punctuation": /[.\\]/
        }
      },
      "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      "boolean": /\b(?:false|true)\b/,
      "function": /\b\w+(?=\()/,
      "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      "punctuation": /[{}[\];(),.:]/
    };
    Prism2.languages.javascript = Prism2.languages.extend("clike", {
      "class-name": [
        Prism2.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: true
        }
      ],
      "keyword": [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: true
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      "number": {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: true
      },
      "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });
    Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    Prism2.languages.insertBefore("javascript", "keyword", {
      "regex": {
        pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: Prism2.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      "parameter": [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: true,
          inside: Prism2.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: true,
          inside: Prism2.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: Prism2.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: Prism2.languages.javascript
        }
      ],
      "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism2.languages.insertBefore("javascript", "string", {
      "hashbang": {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          "interpolation": {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: Prism2.languages.javascript
            }
          },
          "string": /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      }
    });
    Prism2.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    });
    if (Prism2.languages.markup) {
      Prism2.languages.markup.tag.addInlined("script", "javascript");
      Prism2.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
        "javascript"
      );
    }
    Prism2.languages.js = Prism2.languages.javascript;
    (function() {
      if (typeof Prism2 === "undefined" || typeof document === "undefined") {
        return;
      }
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }
      var LOADING_MESSAGE = "Loading\u2026";
      var FAILURE_MESSAGE = function(status, message) {
        return "\u2716 Error " + status + " while fetching file: " + message;
      };
      var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
      var EXTENSIONS = {
        "js": "javascript",
        "py": "python",
        "rb": "ruby",
        "ps1": "powershell",
        "psm1": "powershell",
        "sh": "bash",
        "bat": "batch",
        "h": "c",
        "tex": "latex"
      };
      var STATUS_ATTR = "data-src-status";
      var STATUS_LOADING = "loading";
      var STATUS_LOADED = "loaded";
      var STATUS_FAILED = "failed";
      var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
      function loadFile(src, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", src, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status < 400 && xhr.responseText) {
              success(xhr.responseText);
            } else {
              if (xhr.status >= 400) {
                error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
              } else {
                error(FAILURE_EMPTY_MESSAGE);
              }
            }
          }
        };
        xhr.send(null);
      }
      function parseRange(range) {
        var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
        if (m) {
          var start = Number(m[1]);
          var comma = m[2];
          var end = m[3];
          if (!comma) {
            return [start, start];
          }
          if (!end) {
            return [start, void 0];
          }
          return [start, Number(end)];
        }
        return void 0;
      }
      Prism2.hooks.add("before-highlightall", function(env) {
        env.selector += ", " + SELECTOR;
      });
      Prism2.hooks.add("before-sanity-check", function(env) {
        var pre = (
          /** @type {HTMLPreElement} */
          env.element
        );
        if (pre.matches(SELECTOR)) {
          env.code = "";
          pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
          var code = pre.appendChild(document.createElement("CODE"));
          code.textContent = LOADING_MESSAGE;
          var src = pre.getAttribute("data-src");
          var language = env.language;
          if (language === "none") {
            var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
            language = EXTENSIONS[extension] || extension;
          }
          Prism2.util.setLanguage(code, language);
          Prism2.util.setLanguage(pre, language);
          var autoloader = Prism2.plugins.autoloader;
          if (autoloader) {
            autoloader.loadLanguages(language);
          }
          loadFile(
            src,
            function(text) {
              pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
              var range = parseRange(pre.getAttribute("data-range"));
              if (range) {
                var lines = text.split(/\r\n?|\n/g);
                var start = range[0];
                var end = range[1] == null ? lines.length : range[1];
                if (start < 0) {
                  start += lines.length;
                }
                start = Math.max(0, Math.min(start - 1, lines.length));
                if (end < 0) {
                  end += lines.length;
                }
                end = Math.max(0, Math.min(end, lines.length));
                text = lines.slice(start, end).join("\n");
                if (!pre.hasAttribute("data-start")) {
                  pre.setAttribute("data-start", String(start + 1));
                }
              }
              code.textContent = text;
              Prism2.highlightElement(code);
            },
            function(error) {
              pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
              code.textContent = error;
            }
          );
        }
      });
      Prism2.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function highlight(container) {
          var elements = (container || document).querySelectorAll(SELECTOR);
          for (var i = 0, element; element = elements[i++]; ) {
            Prism2.highlightElement(element);
          }
        }
      };
      var logged = false;
      Prism2.fileHighlight = function() {
        if (!logged) {
          console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
          logged = true;
        }
        Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  }
});

// node_modules/prismjs/components/prism-typescript.js
var require_prism_typescript = __commonJS({
  "node_modules/prismjs/components/prism-typescript.js"() {
    (function(Prism2) {
      Prism2.languages.typescript = Prism2.languages.extend("javascript", {
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
          lookbehind: true,
          greedy: true,
          inside: null
          // see below
        },
        "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
      });
      Prism2.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        // keywords that have to be followed by an identifier
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        // This is for `import type *, {}`
        /\btype\b(?=\s*(?:[\{*]|$))/
      );
      delete Prism2.languages.typescript["parameter"];
      delete Prism2.languages.typescript["literal-property"];
      var typeInside = Prism2.languages.extend("typescript", {});
      delete typeInside["class-name"];
      Prism2.languages.typescript["class-name"].inside = typeInside;
      Prism2.languages.insertBefore("typescript", "function", {
        "decorator": {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            "at": {
              pattern: /^@/,
              alias: "operator"
            },
            "function": /^[\s\S]+/
          }
        },
        "generic-function": {
          // e.g. foo<T extends "bar" | "baz">( ...
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: true,
          inside: {
            "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            "generic": {
              pattern: /<[\s\S]+/,
              // everything after the first <
              alias: "class-name",
              inside: typeInside
            }
          }
        }
      });
      Prism2.languages.ts = Prism2.languages.typescript;
    })(Prism);
  }
});

// node_modules/prismjs/components/prism-tsx.js
var require_prism_tsx = __commonJS({
  "node_modules/prismjs/components/prism-tsx.js"() {
    (function(Prism2) {
      var typescript = Prism2.util.clone(Prism2.languages.typescript);
      Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
      delete Prism2.languages.tsx["parameter"];
      delete Prism2.languages.tsx["literal-property"];
      var tag = Prism2.languages.tsx.tag;
      tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
      tag.lookbehind = true;
    })(Prism);
  }
});

// node_modules/prismjs/components/prism-json.js
var require_prism_json = __commonJS({
  "node_modules/prismjs/components/prism-json.js"() {
    Prism.languages.json = {
      "property": {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
      },
      "string": {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
      },
      "comment": {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
      },
      "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      "punctuation": /[{}[\],]/,
      "operator": /:/,
      "boolean": /\b(?:false|true)\b/,
      "null": {
        pattern: /\bnull\b/,
        alias: "keyword"
      }
    };
    Prism.languages.webmanifest = Prism.languages.json;
  }
});

// src/components/DataVisualisation/charts/SPC/SPCChart/SPCChart.tsx
import * as React13 from "react";

// src/components/DataVisualisation/core/ChartRoot.tsx
import * as React2 from "react";

// src/components/DataVisualisation/hooks/useChartDimensions.ts
import * as React from "react";
function useChartDimensions(initial = {}) {
  const ref = React.useRef(null);
  const margin = React.useMemo(() => {
    var _a2, _b2, _c, _d;
    return {
      top: (_a2 = initial.top) != null ? _a2 : 16,
      right: (_b2 = initial.right) != null ? _b2 : 16,
      bottom: (_c = initial.bottom) != null ? _c : 32,
      left: (_d = initial.left) != null ? _d : 48
    };
  }, [initial.bottom, initial.left, initial.right, initial.top]);
  const [dims, setDims] = React.useState({ width: 0, height: 0 });
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDims({ width, height });
      }
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const innerWidth = Math.max(0, dims.width - margin.left - margin.right);
  const innerHeight = Math.max(0, dims.height - margin.top - margin.bottom);
  return { width: dims.width, height: dims.height, innerWidth, innerHeight, margin, ref };
}

// src/components/DataVisualisation/core/ChartRoot.tsx
import { jsx } from "react/jsx-runtime";
var ChartContext = React2.createContext(null);
function useChartContext() {
  return React2.useContext(ChartContext);
}
var ChartRoot = ({
  height = 240,
  margin,
  width,
  className = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children,
  role = "group",
  ariaLabel
}) => {
  const dims = useChartDimensions(margin);
  const style = { height, position: "relative" };
  if (width !== void 0) style.width = typeof width === "number" ? `${width}px` : width;
  return /* @__PURE__ */ jsx("div", { ref: dims.ref, className, style, role, "aria-label": ariaLabel, children: /* @__PURE__ */ jsx(ChartContext.Provider, { value: dims, children }) });
};

// src/components/DataVisualisation/core/TooltipContext.tsx
import * as React5 from "react";

// src/components/DataVisualisation/core/ScaleContext.tsx
import * as React3 from "react";

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
    compare2 = (d, x2) => ascending(f(d), x2);
    delta = (d, x2) => f(d) - x2;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a, x2, lo = 0, hi = a.length) {
    const i = left(a, x2, lo, hi - 1);
    return i > lo && delta(a[i - 1], x2) > -delta(a[i], x2) ? i - 1 : i;
  }
  return { left, center, right };
}
function zero() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x2) {
  return x2 === null ? NaN : +x2;
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/extent.js
function extent(values, valueof) {
  let min;
  let max;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null) {
        if (min === void 0) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === void 0) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}

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
function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
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
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
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
var constant_default = (x2) => () => x2;

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y2) {
  return a = Math.pow(a, y2), b = Math.pow(b, y2) - a, y2 = 1 / y2, function(t) {
    return Math.pow(a + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y2) : constant_default(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default(isNaN(a) ? b : a);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y2) {
  var color2 = gamma(y2);
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
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x2 = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i) x2[i] = value_default(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x2[i](t);
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
function constants(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-scale/src/number.js
function number2(x2) {
  return +x2;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity(x2) {
  return x2;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x2) {
    return (x2 - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x2) {
    return Math.max(a, Math.min(b, x2));
  };
}
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }
  return function(x2) {
    var i2 = bisect_default(domain, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate = value_default, transform, untransform, unknown, clamp = identity, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), number_default)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number2), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
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

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0) return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal_default,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded_default(x2 * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default(x2) {
  return x2;
}

// node_modules/d3-format/src/locale.js
var map = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default : formatGroup_default(map.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default : formatNumerals_default(map.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "\u2212" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n") comma = true, type = "g";
    else if (!formatTypes_default[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero3 || fill === "0" && align === "=") zero3 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim) value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero3) value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero3) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent_default(max) - exponent_default(step)) + 1;
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null) count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear2());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
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
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
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
      var string = [], i = -1, j = 0, n = specifier.length, c, pad2, format2;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad2 = c === "e" ? " " : "0";
          if (format2 = formats2[c]) c = format2(date2, pad2);
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
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
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
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number3(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number3)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-shape/src/constant.js
function constant_default2(x2) {
  return function constant() {
    return x2;
  };
}

// node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon = 1e-6;
var tauEpsilon = tau - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x1, y1, x2, y2) {
    this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x3, y3) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }
    if (!r) return;
    if (da < 0) da = da % tau + tau;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

// node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
function array_default(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// node_modules/d3-shape/src/line.js
function line_default(x2, y2) {
  var defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default2(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default2(y2);
  function line(data) {
    var i, n = (data = array_default(data)).length, d, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x2(d, i, data), +y2(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default2(+_), line) : x2;
  };
  line.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default2(+_), line) : y2;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/area.js
function area_default(x0, y0, y1) {
  var x1 = null, defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant_default2(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant_default2(0) : constant_default2(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant_default2(+y1);
  function area(data) {
    var i, j, k, n = (data = array_default(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t12 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
        break;
      default:
        point(this, this._t0, t12 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}

// src/components/DataVisualisation/utils/scales.ts
function createXTimeScale(data, accessor, range) {
  const domain = extent(data, accessor);
  return time().domain(domain).range(range);
}
function createYLinearScale(data, accessor, range) {
  const [min, max] = extent(data, accessor);
  const hasData = Number.isFinite(min) && Number.isFinite(max);
  if (!hasData) {
    return linear2().domain([0, 0]).range(range);
  }
  let lower;
  if (min <= 0) {
    lower = Math.min(0, min);
  } else {
    const span = max - min;
    const pad2 = (span > 0 ? span : min) * 0.1;
    lower = Math.max(0, min - pad2);
    if (lower === min) lower = Math.max(0, min * 0.9);
  }
  const upper = max != null ? max : 0;
  return linear2().domain([lower, upper]).nice().range(range);
}
function createLinePath(data, x2, y2, options) {
  var _a2;
  const lineGen = line_default().x(x2).y(y2);
  if ((options == null ? void 0 : options.smooth) !== false) {
    lineGen.curve(monotoneX);
  }
  return (_a2 = lineGen(data)) != null ? _a2 : "";
}

// src/components/DataVisualisation/core/ScaleContext.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ScaleContext = React3.createContext(null);
var useScaleContext = () => React3.useContext(ScaleContext);
var LineScalesProvider = ({
  series,
  innerWidth: innerWidthProp,
  innerHeight: innerHeightProp,
  parseX: parseXProp,
  children,
  xTickCount = 6,
  yTickCount = 5,
  yDomain,
  xPadding,
  yPadding
}) => {
  var _a2, _b2;
  const chartDims = useChartContext();
  const innerWidth = (_a2 = innerWidthProp != null ? innerWidthProp : chartDims == null ? void 0 : chartDims.innerWidth) != null ? _a2 : 0;
  const innerHeight = (_b2 = innerHeightProp != null ? innerHeightProp : chartDims == null ? void 0 : chartDims.innerHeight) != null ? _b2 : 0;
  const allData = React3.useMemo(() => series.flatMap((s) => s.data), [series]);
  const parseX = React3.useCallback((d) => {
    if (parseXProp) return parseXProp(d);
    const raw = d.x;
    return raw instanceof Date ? raw : new Date(raw);
  }, [parseXProp]);
  const xPad = xPadding != null ? xPadding : 6;
  const yPad = yPadding != null ? yPadding : 6;
  const xScale = React3.useMemo(() => createXTimeScale(allData, parseX, [xPad, Math.max(0, innerWidth - xPad)]), [allData, parseX, innerWidth, xPad]);
  const yScale = React3.useMemo(() => {
    if (yDomain) {
      const scale = createYLinearScale([], (d) => d.y, [Math.max(0, innerHeight - yPad), yPad]);
      scale.domain(yDomain);
      return scale;
    }
    return createYLinearScale(allData, (d) => d.y, [Math.max(0, innerHeight - yPad), yPad]);
  }, [allData, innerHeight, yDomain]);
  const value = React3.useMemo(() => ({
    xScale,
    yScale,
    getXTicks: (count = xTickCount) => xScale.ticks(count),
    getYTicks: (count = yTickCount) => yScale.ticks(count)
  }), [xScale, yScale, xTickCount, yTickCount]);
  return /* @__PURE__ */ jsx2(ScaleContext.Provider, { value, children });
};

// src/components/DataVisualisation/core/VisibilityContext.tsx
import * as React4 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var VisibilityContext = React4.createContext(null);
var useVisibility = () => React4.useContext(VisibilityContext);

// src/components/DataVisualisation/core/TooltipContext.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var TooltipContext = React5.createContext(null);
var useTooltipContext = () => React5.useContext(TooltipContext);
var TooltipProvider = ({
  children,
  maxDistance = 40,
  wrapAround = false
}) => {
  const scaleCtx = useScaleContext();
  const visibility = useVisibility();
  const [focused, setFocused] = React5.useState(null);
  const seriesRef = React5.useRef(/* @__PURE__ */ new Map());
  const [aggregated, setAggregated] = React5.useState([]);
  const registerSeries = React5.useCallback(
    (seriesId, data) => {
      seriesRef.current.set(seriesId, data);
    },
    []
  );
  const unregisterSeries = React5.useCallback((seriesId) => {
    seriesRef.current.delete(seriesId);
  }, []);
  const focusNearest = React5.useCallback(
    (plotX, plotY) => {
      if (!scaleCtx) return;
      const { xScale, yScale } = scaleCtx;
      let best = null;
      let bestDist = Infinity;
      seriesRef.current.forEach((data, sid) => {
        data.forEach((d, i) => {
          const px = xScale(d.x);
          const py = yScale(d.y);
          const dx = px - plotX;
          const dy = py - plotY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < bestDist) {
            bestDist = dist;
            best = {
              seriesId: sid,
              index: i,
              x: d.x,
              y: d.y,
              clientX: px,
              clientY: py
            };
          }
        });
      });
      if (best && bestDist <= maxDistance) setFocused(best);
      else setFocused(null);
    },
    [scaleCtx, maxDistance]
  );
  const clear = React5.useCallback(() => setFocused(null), []);
  React5.useEffect(() => {
    if (!focused) {
      setAggregated([]);
      return;
    }
    if (!scaleCtx) return;
    const { xScale, yScale } = scaleCtx;
    const agg = [];
    seriesRef.current.forEach((data, sid) => {
      data.forEach((d, i) => {
        const match = (() => {
          if (focused.x instanceof Date && d.x instanceof Date)
            return d.x.getTime() === focused.x.getTime();
          return d.x === focused.x;
        })();
        if (match) {
          agg.push({
            seriesId: sid,
            index: i,
            x: d.x,
            y: d.y,
            clientX: xScale(d.x),
            clientY: yScale(d.y)
          });
        }
      });
    });
    agg.sort((a, b) => a.seriesId.localeCompare(b.seriesId));
    setAggregated(agg);
  }, [focused, scaleCtx]);
  const focusRelativePoint = React5.useCallback(
    (delta) => {
      if (!focused) return;
      const data = seriesRef.current.get(focused.seriesId);
      if (!data) return;
      let nextIndex = focused.index + delta;
      if (nextIndex < 0 || nextIndex >= data.length) {
        if (!wrapAround) return;
        nextIndex = (nextIndex + data.length) % data.length;
      }
      const d = data[nextIndex];
      if (!scaleCtx) return;
      const { xScale, yScale } = scaleCtx;
      setFocused({
        seriesId: focused.seriesId,
        index: nextIndex,
        x: d.x,
        y: d.y,
        clientX: xScale(d.x),
        clientY: yScale(d.y)
      });
    },
    [focused, scaleCtx, wrapAround]
  );
  const focusSeriesAtIndex = React5.useCallback(
    (seriesDelta) => {
      let ids = Array.from(seriesRef.current.keys());
      if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
      if (ids.length === 0) return;
      if (!focused) {
        const first = ids[0];
        const data = seriesRef.current.get(first);
        if (!data || !scaleCtx) return;
        const { xScale: xScale2, yScale: yScale2 } = scaleCtx;
        const d2 = data[0];
        setFocused({
          seriesId: first,
          index: 0,
          x: d2.x,
          y: d2.y,
          clientX: xScale2(d2.x),
          clientY: yScale2(d2.y)
        });
        return;
      }
      const currentSeriesIdx = ids.indexOf(focused.seriesId);
      if (currentSeriesIdx === -1) return;
      let nextSeriesIdx = currentSeriesIdx + seriesDelta;
      if (nextSeriesIdx < 0 || nextSeriesIdx >= ids.length) {
        if (!wrapAround) return;
        nextSeriesIdx = (nextSeriesIdx + ids.length) % ids.length;
      }
      const nextSeriesId = ids[nextSeriesIdx];
      const nextData = seriesRef.current.get(nextSeriesId);
      if (!nextData || !scaleCtx) return;
      const idx = Math.min(focused.index, nextData.length - 1);
      const d = nextData[idx];
      const { xScale, yScale } = scaleCtx;
      setFocused({
        seriesId: nextSeriesId,
        index: idx,
        x: d.x,
        y: d.y,
        clientX: xScale(d.x),
        clientY: yScale(d.y)
      });
    },
    [focused, scaleCtx, wrapAround, visibility]
  );
  const focusFirstPoint = React5.useCallback(() => {
    let ids = Array.from(seriesRef.current.keys());
    if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
    if (ids.length === 0) return;
    const targetSeriesId = focused ? focused.seriesId : ids[0];
    const data = seriesRef.current.get(targetSeriesId);
    if (!data || data.length === 0 || !scaleCtx) return;
    const d = data[0];
    const { xScale, yScale } = scaleCtx;
    setFocused({
      seriesId: targetSeriesId,
      index: 0,
      x: d.x,
      y: d.y,
      clientX: xScale(d.x),
      clientY: yScale(d.y)
    });
  }, [focused, scaleCtx, visibility]);
  const focusLastPoint = React5.useCallback(() => {
    let ids = Array.from(seriesRef.current.keys());
    if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
    if (ids.length === 0) return;
    const targetSeriesId = focused ? focused.seriesId : ids[0];
    const data = seriesRef.current.get(targetSeriesId);
    if (!data || data.length === 0 || !scaleCtx) return;
    const lastIndex = data.length - 1;
    const d = data[lastIndex];
    const { xScale, yScale } = scaleCtx;
    setFocused({
      seriesId: targetSeriesId,
      index: lastIndex,
      x: d.x,
      y: d.y,
      clientX: xScale(d.x),
      clientY: yScale(d.y)
    });
  }, [focused, scaleCtx, visibility]);
  const focusNextPoint = React5.useCallback(
    () => focusRelativePoint(1),
    [focusRelativePoint]
  );
  const focusPrevPoint = React5.useCallback(
    () => focusRelativePoint(-1),
    [focusRelativePoint]
  );
  const focusNextSeries = React5.useCallback(
    () => focusSeriesAtIndex(1),
    [focusSeriesAtIndex]
  );
  const focusPrevSeries = React5.useCallback(
    () => focusSeriesAtIndex(-1),
    [focusSeriesAtIndex]
  );
  const value = React5.useMemo(
    () => ({
      focused,
      setFocused,
      aggregated,
      focusNearest,
      clear,
      registerSeries,
      unregisterSeries,
      focusNextPoint,
      focusPrevPoint,
      focusNextSeries,
      focusPrevSeries,
      focusFirstPoint,
      focusLastPoint
    }),
    [
      focused,
      aggregated,
      focusNearest,
      clear,
      registerSeries,
      unregisterSeries,
      focusNextPoint,
      focusPrevPoint,
      focusNextSeries,
      focusPrevSeries,
      focusFirstPoint,
      focusLastPoint
    ]
  );
  return /* @__PURE__ */ jsx4(TooltipContext.Provider, { value, children });
};

// src/components/DataVisualisation/charts/Axis/Axis.tsx
import * as React6 from "react";
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var Axis = ({
  type,
  scale,
  tickCount,
  tickValues,
  formatTick: rawFormatTick,
  label,
  offset,
  className,
  minLabelSpacing,
  maxTickLabelLength,
  autoMinLabelSpacing = type === "x" ? true : false,
  labelAngle = 0,
  allowLabelWrap = true,
  tickFormatPreset
}) => {
  const scaleCtx = useScaleContext();
  const dims = useChartContext();
  const resolvedScale = scale || (type === "x" ? scaleCtx == null ? void 0 : scaleCtx.xScale : scaleCtx == null ? void 0 : scaleCtx.yScale);
  const defaultCount = tickCount != null ? tickCount : type === "x" ? 6 : 5;
  const hasUserFormatter = typeof rawFormatTick === "function";
  const presetFormatter = React6.useMemo(() => {
    if (hasUserFormatter) return void 0;
    if (!tickFormatPreset) return void 0;
    const dtf = (opts) => new Intl.DateTimeFormat(void 0, opts);
    switch (tickFormatPreset) {
      case "dayShortMonth":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return `${d.getDate()}
${dtf({ month: "short" }).format(d)}`;
        };
      case "dayShortMonthYear":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return `${d.getDate()}
${dtf({ month: "short" }).format(d)} ${d.getFullYear()}`;
        };
      case "shortMonth":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return dtf({ month: "short" }).format(d);
        };
      case "shortMonthYear":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return `${dtf({ month: "short" }).format(d)} ${d.getFullYear()}`;
        };
      case "hourMinute":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return dtf({ hour: "2-digit", minute: "2-digit" }).format(d);
        };
      default:
        return void 0;
    }
  }, [hasUserFormatter, tickFormatPreset]);
  let effectiveFormatTick = hasUserFormatter ? rawFormatTick : presetFormatter || ((v) => String(v));
  const ticks2 = React6.useMemo(() => {
    if (tickValues && Array.isArray(tickValues)) return tickValues;
    if (!resolvedScale) return [];
    if (typeof resolvedScale.ticks === "function") return resolvedScale.ticks(defaultCount);
    return resolvedScale.domain ? resolvedScale.domain() : [];
  }, [resolvedScale, defaultCount, tickValues]);
  if (type === "x" && !hasUserFormatter && !tickFormatPreset && ticks2.length && ticks2.every((t) => t instanceof Date)) {
    const first = ticks2[0];
    const last = ticks2[ticks2.length - 1];
    const spanMs = last.getTime() - first.getTime();
    const oneDay = 24 * 3600 * 1e3;
    const oneYear = 365 * oneDay;
    const sameYear = first.getFullYear() === last.getFullYear();
    const dtfMonth = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (spanMs < 2 * oneDay) {
      const dtfTime = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      effectiveFormatTick = (v) => dtfTime.format(v);
    } else if (spanMs < 32 * oneDay) {
      effectiveFormatTick = (v) => {
        const d = v;
        return `${d.getDate()} ${dtfMonth.format(d)}`;
      };
    } else if (spanMs < oneYear && sameYear) {
      effectiveFormatTick = (v) => dtfMonth.format(v);
    } else if (spanMs < 2 * oneYear) {
      const seenMonths = /* @__PURE__ */ new Set();
      effectiveFormatTick = (v) => {
        const d = v;
        const key = d.getMonth();
        if (!seenMonths.has(key)) {
          seenMonths.add(key);
        }
        return `${dtfMonth.format(d)} ${d.getFullYear()}`;
      };
    } else {
      effectiveFormatTick = (v) => String(v.getFullYear());
    }
  }
  if (!resolvedScale || !dims) return null;
  if (type === "x") {
    const y2 = offset != null ? offset : dims.innerHeight;
    const isBandScale = typeof resolvedScale.bandwidth === "function";
    const bandwidth = isBandScale ? resolvedScale.bandwidth() : 0;
    const tickPos = (t) => {
      const base = resolvedScale(t);
      return isBandScale ? base + bandwidth / 2 : base;
    };
    let resolvedMinSpacing = minLabelSpacing != null ? minLabelSpacing : 0;
    if (autoMinLabelSpacing && (minLabelSpacing === void 0 || minLabelSpacing === null)) {
      const labels = ticks2.map((t) => effectiveFormatTick(t).replace(/\n.*/g, ""));
      const avgLen = labels.length ? labels.reduce((a, b) => a + b.length, 0) / labels.length : 0;
      resolvedMinSpacing = Math.max(12, Math.round(avgLen * 6 + 4));
    }
    const filteredTicks = React6.useMemo(() => {
      if (tickValues && Array.isArray(tickValues)) return ticks2;
      if (resolvedMinSpacing <= 0) return ticks2;
      const accepted = [];
      let lastPos = -Infinity;
      for (const t of ticks2) {
        const pos = tickPos(t);
        if (pos - lastPos >= resolvedMinSpacing) {
          accepted.push(t);
          lastPos = pos;
        }
      }
      return accepted;
    }, [ticks2, resolvedScale, resolvedMinSpacing, tickValues, isBandScale, bandwidth]);
    return /* @__PURE__ */ jsxs("g", { className: ["fdp-axis", "fdp-axis--x", className].filter(Boolean).join(" "), transform: `translate(0,${y2})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ jsx5("line", { x1: 0, x2: dims.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      filteredTicks.map((t, i) => {
        var _a2;
        const rawLabel = effectiveFormatTick(t);
        const displayLabel = maxTickLabelLength && rawLabel.length > maxTickLabelLength ? rawLabel.slice(0, Math.max(1, maxTickLabelLength - 1)) + "\u2026" : rawLabel;
        const lines = allowLabelWrap ? displayLabel.split(/\n/) : [displayLabel.replace(/\n/g, " ")];
        const anchor = labelAngle < 0 ? "end" : labelAngle > 0 ? "start" : "middle";
        return /* @__PURE__ */ jsxs("g", { transform: `translate(${tickPos(t)},0)`, children: [
          /* @__PURE__ */ jsx5("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ jsxs("text", { y: 9, textAnchor: anchor, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: labelAngle ? `rotate(${labelAngle})` : void 0, fontFamily: "inherit", children: [
            lines.map((ln, li) => /* @__PURE__ */ jsx5("tspan", { x: 0, dy: li === 0 ? 0 : "1.1em", children: ln }, li)),
            displayLabel !== rawLabel && /* @__PURE__ */ jsx5("title", { children: rawLabel })
          ] })
        ] }, ((_a2 = t == null ? void 0 : t.toString) == null ? void 0 : _a2.call(t)) || i);
      })
    ] });
  }
  return /* @__PURE__ */ jsxs("g", { className: ["fdp-axis", "fdp-axis--y", className].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    ticks2.map((t, i) => {
      var _a2;
      const rawLabel = effectiveFormatTick(t);
      const displayLabel = maxTickLabelLength && rawLabel.length > maxTickLabelLength ? rawLabel.slice(0, Math.max(1, maxTickLabelLength - 1)) + "\u2026" : rawLabel;
      const lines = allowLabelWrap ? displayLabel.split(/\n/) : [displayLabel.replace(/\n/g, " ")];
      return /* @__PURE__ */ jsxs("g", { transform: `translate(0,${resolvedScale(t)})`, children: [
        /* @__PURE__ */ jsx5("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          lines.map((ln, li) => /* @__PURE__ */ jsx5("tspan", { x: -9, dy: li === 0 ? 0 : "1.1em", children: ln }, li)),
          displayLabel !== rawLabel && /* @__PURE__ */ jsx5("title", { children: rawLabel })
        ] })
      ] }, ((_a2 = t == null ? void 0 : t.toString) == null ? void 0 : _a2.call(t)) || i);
    }),
    label && /* @__PURE__ */ jsx5("text", { transform: "rotate(-90)", x: -dims.innerHeight / 2, y: -dims.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: label })
  ] });
};
var Axis_default = Axis;

// src/components/DataVisualisation/charts/GridLines/GridLines.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var GridLines = ({
  axis = "y",
  tickCount,
  stroke = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray = "2 4",
  className
}) => {
  const scaleCtx = useScaleContext();
  const dims = useChartContext();
  if (!scaleCtx || !dims) return null;
  const ticks2 = axis === "y" ? scaleCtx.getYTicks(tickCount) : scaleCtx.getXTicks(tickCount);
  return /* @__PURE__ */ jsxs2("g", { className: ["fdp-grid", className].filter(Boolean).join(" "), children: [
    axis === "y" && ticks2.map((t, i) => /* @__PURE__ */ jsx6("line", { x1: 0, x2: dims.innerWidth, y1: scaleCtx.yScale(t), y2: scaleCtx.yScale(t), stroke, strokeDasharray: dasharray }, i)),
    axis === "x" && ticks2.map((t, i) => /* @__PURE__ */ jsx6("line", { y1: 0, y2: dims.innerHeight, x1: scaleCtx.xScale(t), x2: scaleCtx.xScale(t), stroke, strokeDasharray: dasharray }, i))
  ] });
};
var GridLines_default = GridLines;

// src/components/DataVisualisation/series/LineSeriesPrimitive.tsx
import * as React7 from "react";

// packages/nhs-fdp/tokens/data-viz.json
var data_viz_default = {
  color: {
    "data-viz": {
      $type: "color",
      categorical: {
        "1": { $value: "{color.primary.blue}", $description: "Series 1 \u2013 NHS Blue (brand core)" },
        "2": { $value: "#41B6E6", $description: "Series 2 \u2013 NHS Light Blue (new)" },
        "3": { $value: "{color.secondary.aqua-green}", $description: "Series 3 \u2013 NHS Aqua Green (existing)" },
        "4": { $value: "#78BE20", $description: "Series 4 \u2013 NHS Light Green (new)" },
        "5": { $value: "{color.primary.green}", $description: "Series 5 \u2013 NHS Green (existing)" },
        "6": { $value: "{color.secondary.warm-yellow}", $description: "Series 6 \u2013 NHS Warm Yellow (existing; distinct from focus yellow)" },
        "7": { $value: "#ED4F00", $description: "Series 7 \u2013 NHS Tangerine (new; warmer/deeper than existing orange)" },
        "8": { $value: "{color.secondary.pink}", $description: "Series 8 \u2013 NHS Pink (existing)" },
        "9": { $value: "#E317AA", $description: "Series 9 \u2013 NHS Bright Pink (new vivid accent)" },
        "10": { $value: "#880FB8", $description: "Series 10 \u2013 NHS Light Purple (new mid purple)" },
        "11": { $value: "{color.primary.purple}", $description: "Series 11 \u2013 NHS Purple (existing dark purple)" },
        "12": { $value: "#9A6324", $description: "Series 12 \u2013 NHS Brown (new; earth neutral)" }
      },
      neutral: {
        comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" }
      },
      region: {
        $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 \u2013 light green).",
        "north-east": { $value: "{color.primary.blue}", $description: "North East \u2013 NHS Blue" },
        "north-west": { $value: "#41B6E6", $description: "North West \u2013 NHS Light Blue" },
        "east-of-england": { $value: "{color.primary.purple}", $description: "East of England \u2013 NHS Purple" },
        midlands: { $value: "{color.secondary.pink}", $description: "Midlands \u2013 NHS Pink" },
        london: { $value: "#78BE21", $description: "London \u2013 NHS Light Green (new)" },
        "south-west": { $value: "#FAE100", $description: "South West \u2013 NHS Yellow variant (new)" },
        "south-east": { $value: "#ed8b00", $description: "South East \u2013 NHS Orange (existing base orange)" }
      },
      severity: {
        $comment: "Semantic severity / alert colours (light background ramp \u2192 critical).",
        low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity \u2013 pale yellow background" },
        moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity \u2013 warm yellow" },
        high: { $value: "{color.secondary.orange}", $description: "High severity \u2013 orange" },
        critical: { $value: "{color.primary.red}", $description: "Critical severity \u2013 red" }
      },
      "org-level": {
        $comment: "Organisational level semantic colours (stable NHS brand mappings).",
        trust: { $value: "{color.primary.blue}", $description: "Trust \u2013 NHS Blue" },
        ambulance: { $value: "{color.primary.green}", $description: "Ambulance \u2013 NHS Green" },
        icb: { $value: "{color.primary.dark-pink}", $description: "ICB \u2013 NHS Dark Pink" },
        region: { $value: "{color.primary.purple}", $description: "Region \u2013 NHS Purple" }
      },
      stroke: {
        $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.",
        categorical: {
          "1": { $value: "#ffffff", $description: "Stroke for series 1 (blue)" },
          "2": { $value: "#212b32", $description: "Stroke for series 2 (light blue)" },
          "3": { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" },
          "4": { $value: "#212b32", $description: "Stroke for series 4 (light green)" },
          "5": { $value: "#ffffff", $description: "Stroke for series 5 (green)" },
          "6": { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" },
          "7": { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" },
          "8": { $value: "#ffffff", $description: "Stroke for series 8 (pink)" },
          "9": { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" },
          "10": { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" },
          "11": { $value: "#ffffff", $description: "Stroke for series 11 (purple)" },
          "12": { $value: "#ffffff", $description: "Stroke for series 12 (brown)" }
        },
        region: {
          $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.",
          "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" },
          "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" },
          "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" },
          midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" },
          london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" },
          "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" },
          "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" }
        },
        severity: {
          $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).",
          low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" },
          moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" },
          high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" },
          critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" }
        },
        "org-level": {
          $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).",
          trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" },
          ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" },
          icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" },
          region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" }
        }
      },
      spc: {
        $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.",
        improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" },
        concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" },
        "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" },
        "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" },
        "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" },
        "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" },
        gradient: {
          $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.",
          stop: {
            "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" },
            "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" },
            "end-opacity": { $value: "0", $description: "End stop opacity (100%)" },
            "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" },
            "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" },
            "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" }
          }
        },
        stroke: {
          $comment: "Contrast stroke colours for SPC variation fills.",
          improvement: { $value: "#000000", $description: "Stroke for improvement points" },
          concern: { $value: "#000000", $description: "Stroke for concern points" },
          "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" },
          "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" },
          "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" },
          "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" }
        }
      }
    }
  }
};

// packages/nhs-fdp/tokens/colors.json
var colors_default = {
  color: {
    primary: {
      $type: "color",
      blue: {
        $value: "#005eb8",
        $description: "NHS Blue - Primary brand color"
      },
      "blue-active": {
        $value: "#002f5c",
        $description: "NHS Active Blue (50% shade) \u2013 alias of button/login active; promoted for general reuse"
      },
      white: {
        $value: "#ffffff",
        $description: "NHS White"
      },
      black: {
        $value: "#212b32",
        $description: "NHS Black"
      },
      green: {
        $value: "#007f3b",
        $description: "NHS Green"
      },
      purple: {
        $value: "#330072",
        $description: "NHS Purple"
      },
      "dark-pink": {
        $value: "#7c2855",
        $description: "NHS Dark Pink"
      },
      red: {
        $value: "#d5281b",
        $description: "NHS Red"
      },
      "light-purple": {
        $value: "#880FB8",
        $description: "NHS Light Purple (data viz promoted)"
      },
      yellow: {
        $value: "#ffeb3b",
        $description: "NHS Yellow"
      }
    },
    secondary: {
      $type: "color",
      "pale-yellow": {
        $value: "#fff9c4",
        $description: "NHS Pale Yellow"
      },
      "warm-yellow": {
        $value: "#ffb81c",
        $description: "NHS Warm Yellow"
      },
      "region-yellow": {
        $value: "#FAE100",
        $description: "NHS Region Yellow (maps)"
      },
      orange: {
        $value: "#ed8b00",
        $description: "NHS Orange"
      },
      tangerine: {
        $value: "#ED4F00",
        $description: "NHS Tangerine (data viz promoted)"
      },
      "aqua-green": {
        $value: "#00a499",
        $description: "NHS Aqua Green"
      },
      "light-blue": {
        $value: "#41B6E6",
        $description: "NHS Light Blue (data viz promoted)"
      },
      pink: {
        $value: "#ae2573",
        $description: "NHS Pink"
      },
      "bright-pink": {
        $value: "#E317AA",
        $description: "NHS Bright Pink (data viz promoted)"
      },
      "light-green": {
        $value: "#78BE20",
        $description: "NHS Light Green (data viz promoted)"
      },
      brown: {
        $value: "#9A6324",
        $description: "NHS Brown (data viz promoted neutral)"
      }
    },
    grey: {
      $type: "color",
      "1": {
        $value: "#4c6272",
        $description: "NHS Grey 1 - Darkest grey"
      },
      "2": {
        $value: "#768692",
        $description: "NHS Grey 2 - Darker grey"
      },
      "3": {
        $value: "#aeb7bd",
        $description: "NHS Grey 3 - Medium grey"
      },
      "4": {
        $value: "#d8dde0",
        $description: "NHS Grey 4 - Light grey"
      },
      "5": {
        $value: "#f0f4f5",
        $description: "NHS Grey 5 - Lightest grey"
      }
    },
    accessibility: {
      $type: "color",
      $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe\u2013Ito colors. Use these for positive/negative semantics and colour-blind\u2013friendly defaults.",
      "okabe-ito": {
        green: {
          $value: "#009E73",
          $description: "Okabe\u2013Ito green (CVD-safe) \u2013 recommended positive"
        },
        vermillion: {
          $value: "#D55E00",
          $description: "Okabe\u2013Ito vermillion / red\u2013orange (CVD-safe) \u2013 recommended negative"
        }
      },
      "cvd-safe": {
        blue: {
          $value: "#1f77b4",
          $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets"
        },
        orange: {
          $value: "#ff7f0e",
          $description: "CVD-safe orange (pairs with blue)"
        }
      },
      positive: {
        $value: "{color.accessibility.okabe-ito.green}",
        $description: "Accessibility semantic alias \u2013 positive"
      },
      negative: {
        $value: "{color.accessibility.okabe-ito.vermillion}",
        $description: "Accessibility semantic alias \u2013 negative"
      }
    }
  }
};

// src/components/DataVisualisation/utils/colors.ts
var legacyCategorical = [
  "#005eb8",
  "#0072ce",
  "#41b6e6",
  "#00a499",
  "#7c2855",
  "#330072",
  "#d5281b",
  "#ffb81c",
  "#fae100",
  "#4c6272",
  "#768692",
  "#aeb7bd"
];
var categoricalPalette = null;
var optimizedCategoricalPalette = null;
var extendedPaletteCache = null;
var categoricalStrategy = "optimized";
function buildPalette() {
  const root = { color: { ...colors_default.color, ...data_viz_default.color } };
  const resolve = (path2, seen = /* @__PURE__ */ new Set()) => {
    if (seen.has(path2)) return void 0;
    seen.add(path2);
    const node = path2.split(".").reduce((acc, k) => acc ? acc[k] : void 0, root);
    if (!node) return void 0;
    const value = node.$value || node.value;
    if (typeof value === "string" && /^\{.+\}$/.test(value)) {
      return resolve(value.slice(1, -1), seen);
    }
    if (typeof value === "string") return value;
    return void 0;
  };
  const palette = [];
  try {
    for (let i = 1; i <= 12; i++) {
      const tokenPath = `color.data-viz.categorical.${i}`;
      const hex2 = resolve(tokenPath);
      if (!hex2) throw new Error(`Missing token ${tokenPath}`);
      palette.push(hex2);
    }
    return palette;
  } catch (e) {
    return legacyCategorical;
  }
}
function getPalette() {
  if (!categoricalPalette) categoricalPalette = buildPalette();
  return categoricalPalette;
}
function hexToRgb(hex2) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex2.trim());
  if (!m) return null;
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}
function srgbToLinear(x2) {
  x2 /= 255;
  return x2 <= 0.04045 ? x2 / 12.92 : Math.pow((x2 + 0.055) / 1.055, 2.4);
}
function rgbToXyz(r, g, b) {
  const R = srgbToLinear(r);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);
  const x2 = R * 0.4124 + G * 0.3576 + B * 0.1805;
  const y2 = R * 0.2126 + G * 0.7152 + B * 0.0722;
  const z = R * 0.0193 + G * 0.1192 + B * 0.9505;
  return { x: x2 * 100, y: y2 * 100, z: z * 100 };
}
function xyzToLab(x2, y2, z) {
  const refX = 95.047, refY = 100, refZ = 108.883;
  let X = x2 / refX, Y = y2 / refY, Z = z / refZ;
  const f = (t) => t > 8856e-6 ? Math.cbrt(t) : 7.787 * t + 16 / 116;
  X = f(X);
  Y = f(Y);
  Z = f(Z);
  return { L: 116 * Y - 16, a: 500 * (X - Y), b: 200 * (Y - Z) };
}
function hexToLab(hex2) {
  const rgb2 = hexToRgb(hex2);
  if (!rgb2) return null;
  const xyz = rgbToXyz(rgb2.r, rgb2.g, rgb2.b);
  return xyzToLab(xyz.x, xyz.y, xyz.z);
}
function deltaE76(c1, c2) {
  const dL = c1.L - c2.L;
  const da = c1.a - c2.a;
  const db = c1.b - c2.b;
  return Math.sqrt(dL * dL + da * da + db * db);
}
function buildOptimizedCategoricalPalette() {
  const base = getPalette();
  if (base.length <= 2) return base.slice();
  const labs = base.map((c) => hexToLab(c));
  let bestStartIdx = 0;
  let bestAvg = -1;
  for (let i = 0; i < base.length; i++) {
    const li = labs[i];
    if (!li) continue;
    let total = 0;
    let count = 0;
    for (let j = 0; j < base.length; j++) if (i !== j && labs[j]) {
      total += deltaE76(li, labs[j]);
      count++;
    }
    const avg = total / Math.max(1, count);
    if (avg > bestAvg) {
      bestAvg = avg;
      bestStartIdx = i;
    }
  }
  const remaining = new Set(base.map((_, i) => i));
  const order = [];
  order.push(bestStartIdx);
  remaining.delete(bestStartIdx);
  while (remaining.size) {
    let nextIdx = Array.from(remaining)[0];
    let bestMin = -1;
    for (const idx of remaining) {
      const l = labs[idx];
      if (!l) continue;
      let minD = Infinity;
      for (const o of order) {
        const lo = labs[o];
        if (lo) {
          const d = deltaE76(l, lo);
          if (d < minD) minD = d;
        }
      }
      if (minD > bestMin) {
        bestMin = minD;
        nextIdx = idx;
      }
    }
    order.push(nextIdx);
    remaining.delete(nextIdx);
  }
  return order.map((i) => base[i]);
}
function getOptimizedPalette() {
  if (!optimizedCategoricalPalette) optimizedCategoricalPalette = buildOptimizedCategoricalPalette();
  return optimizedCategoricalPalette;
}
function getRawPalette() {
  return getPalette();
}
function labToXyz(L, a, b) {
  const y2 = (L + 16) / 116;
  const x2 = a / 500 + y2;
  const z = y2 - b / 200;
  const f = (t) => {
    const t3 = t * t * t;
    return t3 > 8856e-6 ? t3 : (t - 16 / 116) / 7.787;
  };
  const X = f(x2) * 95.047;
  const Y = f(y2) * 100;
  const Z = f(z) * 108.883;
  return { X, Y, Z };
}
function xyzToRgb(x2, y2, z) {
  x2 /= 100;
  y2 /= 100;
  z /= 100;
  let R = x2 * 3.2406 + y2 * -1.5372 + z * -0.4986;
  let G = x2 * -0.9689 + y2 * 1.8758 + z * 0.0415;
  let B = x2 * 0.0557 + y2 * -0.204 + z * 1.057;
  const linToSrgb = (c) => c <= 31308e-7 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  R = Math.min(1, Math.max(0, linToSrgb(R)));
  G = Math.min(1, Math.max(0, linToSrgb(G)));
  B = Math.min(1, Math.max(0, linToSrgb(B)));
  return { r: Math.round(R * 255), g: Math.round(G * 255), b: Math.round(B * 255) };
}
function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}
function adjustLightness(hex2, deltaL) {
  const lab = hexToLab(hex2);
  if (!lab) return hex2;
  const L = Math.min(100, Math.max(0, lab.L + deltaL));
  const { X, Y, Z } = labToXyz(L, lab.a, lab.b);
  const rgb2 = xyzToRgb(X, Y, Z);
  return rgbToHex(rgb2.r, rgb2.g, rgb2.b);
}
function buildExtendedPalette() {
  const base = categoricalStrategy === "raw" ? getRawPalette() : getOptimizedPalette();
  const deltas = [12, -12, 24, -24];
  const variants = deltas.map((d) => base.map((c) => adjustLightness(c, d)));
  const extended = [...base];
  variants.forEach((v) => extended.push(...v));
  return extended;
}
function getExtendedPalette() {
  if (!extendedPaletteCache || extendedPaletteCacheStrategyMismatch()) {
    extendedPaletteCache = buildExtendedPalette();
    lastExtendedStrategy = categoricalStrategy;
  }
  return extendedPaletteCache;
}
var lastExtendedStrategy = null;
function extendedPaletteCacheStrategyMismatch() {
  return lastExtendedStrategy !== categoricalStrategy;
}
function pickSeriesColor(i) {
  const ext = getExtendedPalette();
  return ext[i % ext.length];
}
var categoricalStrokeMap = null;
var regionStrokeMap = null;
var severityStrokeMap = null;
var orgLevelStrokeMap = null;
function buildStrokeMaps() {
  var _a2, _b2, _c, _d, _e;
  const stroke = (_c = (_b2 = (_a2 = data_viz_default) == null ? void 0 : _a2.color) == null ? void 0 : _b2["data-viz"]) == null ? void 0 : _c.stroke;
  if (stroke) {
    const cat = stroke.categorical || {};
    categoricalStrokeMap = [];
    for (let i = 1; i <= 12; i++) {
      const v = ((_d = cat[String(i)]) == null ? void 0 : _d.$value) || ((_e = cat[String(i)]) == null ? void 0 : _e.value);
      categoricalStrokeMap.push(typeof v === "string" ? v : "#212b32");
    }
    const reg = stroke.region || {};
    regionStrokeMap = {};
    Object.keys(reg).forEach((k) => {
      var _a3, _b3;
      const v = ((_a3 = reg[k]) == null ? void 0 : _a3.$value) || ((_b3 = reg[k]) == null ? void 0 : _b3.value);
      if (typeof v === "string") regionStrokeMap[k] = v;
    });
    const sev = stroke.severity || {};
    const org = stroke["org-level"] || {};
    orgLevelStrokeMap = {};
    Object.keys(org).forEach((k) => {
      var _a3, _b3;
      const v = ((_a3 = org[k]) == null ? void 0 : _a3.$value) || ((_b3 = org[k]) == null ? void 0 : _b3.value);
      if (typeof v === "string") orgLevelStrokeMap[k] = v;
    });
    severityStrokeMap = {};
    Object.keys(sev).forEach((k) => {
      var _a3, _b3;
      const v = ((_a3 = sev[k]) == null ? void 0 : _a3.$value) || ((_b3 = sev[k]) == null ? void 0 : _b3.value);
      if (typeof v === "string") severityStrokeMap[k] = v;
    });
  }
}
function ensureStrokeMaps() {
  if (!categoricalStrokeMap || !regionStrokeMap || !severityStrokeMap || !orgLevelStrokeMap) buildStrokeMaps();
}
function pickSeriesStroke(i) {
  ensureStrokeMaps();
  if (!categoricalStrokeMap) return "#212b32";
  return categoricalStrokeMap[i % categoricalStrokeMap.length];
}
function getRegionStroke(id) {
  ensureStrokeMaps();
  return regionStrokeMap ? regionStrokeMap[id] : void 0;
}
function pickRegionStroke(id, fallbackIndex) {
  return getRegionStroke(id) || pickSeriesStroke(fallbackIndex);
}
var regionMap = null;
var REGION_IDS = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function normalizeRegionId(id) {
  return id.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function buildRegionMap() {
  const root = { color: { ...colors_default.color, ...data_viz_default.color } };
  const resolve = (path2, seen = /* @__PURE__ */ new Set()) => {
    if (seen.has(path2)) return void 0;
    seen.add(path2);
    const node = path2.split(".").reduce((acc, k) => acc ? acc[k] : void 0, root);
    if (!node) return void 0;
    const value = node.$value || node.value;
    if (typeof value === "string" && /^\{.+\}$/.test(value)) return resolve(value.slice(1, -1), seen);
    return typeof value === "string" ? value : void 0;
  };
  const map2 = {};
  const missing = [];
  REGION_IDS.forEach((id) => {
    const hex2 = resolve(`color.data-viz.region.${id}`);
    if (hex2) map2[id] = hex2;
    else missing.push(id);
  });
  if (true) {
    if (Object.keys(map2).length === 0) {
      console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.");
    } else if (missing.length) {
      console.warn(`[DataViz] Missing region colour tokens: ${missing.join(", ")}.`);
    }
  }
  return map2;
}
function getRegionMap() {
  if (!regionMap) regionMap = buildRegionMap();
  return regionMap;
}
function getRegionColor(id) {
  return getRegionMap()[normalizeRegionId(id)];
}
function pickRegionColor(id, fallbackIndex) {
  return getRegionColor(id) || pickSeriesColor(fallbackIndex);
}

// src/components/DataVisualisation/series/LineSeriesPrimitive.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var LineSeriesPrimitive = ({
  series,
  seriesIndex,
  palette,
  showPoints,
  focusablePoints,
  focusIndex,
  parseX,
  visibilityMode = "remove",
  strokeWidth = 1,
  smooth = true,
  gradientFillId,
  colors
}) => {
  var _a2;
  const scaleCtx = useScaleContext();
  if (!scaleCtx) return null;
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = (_a2 = visibility == null ? void 0 : visibility.isHidden(series.id)) != null ? _a2 : false;
  const faded = isHidden && visibilityMode === "fade";
  if (isHidden && visibilityMode === "remove") {
    return null;
  }
  const tooltip = useTooltipContext();
  React7.useEffect(() => {
    if (!tooltip) return;
    const normalized = series.data.map((d) => ({ x: parseX(d), y: d.y }));
    tooltip.registerSeries(series.id, normalized);
    return () => tooltip.unregisterSeries(series.id);
  }, [tooltip, series.id, series.data, parseX]);
  const path2 = React7.useMemo(
    () => createLinePath(
      series.data,
      (d) => xScale(parseX(d)),
      (d) => yScale(d.y),
      { smooth }
    ),
    [series.data, xScale, yScale, parseX, smooth]
  );
  const areaPath = React7.useMemo(() => {
    if (!series.data.length) return "";
    const [domainMin] = yScale.domain();
    const gen = area_default().x((d) => xScale(parseX(d))).y0(() => yScale(domainMin)).y1((d) => yScale(d.y));
    if (smooth) gen.curve(monotoneX);
    return gen(series.data) || "";
  }, [series.data, xScale, yScale, parseX, smooth]);
  const paletteOverride = colors && colors[seriesIndex];
  const color2 = series.color || paletteOverride || (palette === "region" ? pickRegionColor(series.id, seriesIndex) : pickSeriesColor(seriesIndex));
  const stroke = palette === "region" ? pickRegionStroke(series.id, seriesIndex) : pickSeriesStroke(seriesIndex);
  return /* @__PURE__ */ jsxs3(
    "g",
    {
      className: "fdp-line-series",
      "data-series": series.id,
      opacity: faded ? 0.25 : 1,
      "aria-hidden": faded ? true : void 0,
      children: [
        gradientFillId && /* @__PURE__ */ jsx7(
          "path",
          {
            d: areaPath,
            fill: `url(#${gradientFillId})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ jsx7(
          "path",
          {
            d: path2,
            fill: "none",
            stroke: color2,
            strokeWidth,
            role: "presentation"
          }
        ),
        showPoints && series.data.map((d, di) => {
          var _a3;
          const cx = xScale(parseX(d));
          const cy = yScale(d.y);
          const tabIndex = focusablePoints ? 0 : -1;
          const isFocusedPoint = !faded && (focusablePoints && di === focusIndex || ((_a3 = tooltip == null ? void 0 : tooltip.focused) == null ? void 0 : _a3.seriesId) === series.id && tooltip.focused.index === di);
          const handleEnter = () => {
            if (tooltip && !faded) {
              tooltip.setFocused({
                seriesId: series.id,
                index: di,
                x: parseX(d),
                y: d.y,
                clientX: cx,
                clientY: cy
              });
            }
          };
          const handleLeave = () => {
            var _a4;
            if (tooltip && ((_a4 = tooltip.focused) == null ? void 0 : _a4.seriesId) === series.id && tooltip.focused.index === di)
              tooltip.clear();
          };
          return /* @__PURE__ */ jsx7(
            "circle",
            {
              cx,
              cy,
              r: isFocusedPoint ? 5 : 3.5,
              stroke: isFocusedPoint ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : stroke,
              strokeWidth: isFocusedPoint ? 2 : 1,
              fill: isFocusedPoint ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : color2,
              className: "fdp-line-point",
              tabIndex: faded ? -1 : tabIndex,
              "aria-label": `${series.label || series.id} ${parseX(d).toDateString()} value ${d.y}`,
              "data-series": series.id,
              "data-index": di,
              onMouseEnter: handleEnter,
              onFocus: handleEnter,
              onMouseLeave: handleLeave,
              onBlur: handleLeave
            },
            di
          );
        })
      ]
    }
  );
};
var LineSeriesPrimitive_default = LineSeriesPrimitive;

// src/components/DataVisualisation/charts/SPC/SPCChart/SPCTooltipOverlay.tsx
import * as React8 from "react";
import { createPortal } from "react-dom";

// src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcConstants.ts
var ChartType = /* @__PURE__ */ ((ChartType3) => {
  ChartType3["XmR"] = "XmR";
  ChartType3["T"] = "T";
  ChartType3["G"] = "G";
  return ChartType3;
})(ChartType || {});
var ImprovementDirection = /* @__PURE__ */ ((ImprovementDirection2) => {
  ImprovementDirection2["Up"] = "Up";
  ImprovementDirection2["Down"] = "Down";
  ImprovementDirection2["Neither"] = "Neither";
  return ImprovementDirection2;
})(ImprovementDirection || {});
var VariationIcon = /* @__PURE__ */ ((VariationIcon2) => {
  VariationIcon2["Improvement"] = "improvement";
  VariationIcon2["Concern"] = "concern";
  VariationIcon2["Neither"] = "neither";
  VariationIcon2["Suppressed"] = "suppressed";
  return VariationIcon2;
})(VariationIcon || {});
var RULE_PRECEDENCE = [
  "single_point" /* SinglePoint */,
  "two_sigma" /* TwoSigma */,
  "shift" /* Shift */,
  "trend" /* Trend */
];
var RULE_RANK_BY_ID = RULE_PRECEDENCE.reduce(
  (acc, id, i) => {
    acc[id] = i + 1;
    return acc;
  },
  {}
);
var RULE_LABEL = {
  ["single_point" /* SinglePoint */]: "Single point beyond process limit",
  ["two_sigma" /* TwoSigma */]: "Two of three beyond 2\u03C3 on one side",
  ["shift" /* Shift */]: "Sustained shift (run)",
  ["trend" /* Trend */]: "Monotonic trend"
};
var RULE_CATEGORY = {
  ["single_point" /* SinglePoint */]: "point" /* Point */,
  ["two_sigma" /* TwoSigma */]: "cluster" /* Cluster */,
  ["shift" /* Shift */]: "sustained" /* Sustained */,
  ["trend" /* Trend */]: "sustained" /* Sustained */
};
var RULE_METADATA = RULE_PRECEDENCE.reduce(
  (acc, id, index) => {
    acc[id] = {
      id,
      rank: index + 1,
      label: RULE_LABEL[id],
      category: RULE_CATEGORY[id],
      participatesInRanking: true
    };
    return acc;
  },
  {}
);
var RULES_IN_RANK_ORDER = RULE_PRECEDENCE.map(
  (id) => RULE_METADATA[id]
);
var AssuranceIcon = /* @__PURE__ */ ((AssuranceIcon2) => {
  AssuranceIcon2["Pass"] = "pass";
  AssuranceIcon2["Fail"] = "fail";
  AssuranceIcon2["None"] = "none";
  return AssuranceIcon2;
})(AssuranceIcon || {});
var BaselineSuggestionReason = /* @__PURE__ */ ((BaselineSuggestionReason3) => {
  BaselineSuggestionReason3["Shift"] = "shift";
  BaselineSuggestionReason3["Trend"] = "trend";
  BaselineSuggestionReason3["Point"] = "point";
  return BaselineSuggestionReason3;
})(BaselineSuggestionReason || {});

// src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcDescriptors.ts
var ruleGlossary = {
  ["singlePointUp" /* SinglePointUp */]: {
    tooltip: "Single point above upper control limit",
    narration: "Single point beyond a control limit"
  },
  ["singlePointDown" /* SinglePointDown */]: {
    tooltip: "Single point below lower control limit",
    narration: "Single point beyond a control limit"
  },
  ["twoOfThreeUp" /* TwoOfThreeUp */]: {
    tooltip: "Two of three points beyond +2\u03C3",
    narration: "Two of three points beyond two sigma (same side)"
  },
  ["twoOfThreeDown" /* TwoOfThreeDown */]: {
    tooltip: "Two of three points beyond -2\u03C3",
    narration: "Two of three points beyond two sigma (same side)"
  },
  ["fourOfFiveUp" /* FourOfFiveUp */]: {
    tooltip: "Four of five points beyond +1\u03C3",
    narration: "Four of five points beyond one sigma (same side)"
  },
  ["fourOfFiveDown" /* FourOfFiveDown */]: {
    tooltip: "Four of five points beyond -1\u03C3",
    narration: "Four of five points beyond one sigma (same side)"
  },
  ["shiftUp" /* ShiftUp */]: {
    tooltip: "Shift: run of points above centre line",
    narration: "Shift (run on one side of mean)"
  },
  ["shiftDown" /* ShiftDown */]: {
    tooltip: "Shift: run of points below centre line",
    narration: "Shift (run on one side of mean)"
  },
  ["trendUp" /* TrendUp */]: {
    tooltip: "Trend: consecutive increasing points",
    narration: "Trend (consecutive increases)"
  },
  ["trendDown" /* TrendDown */]: {
    tooltip: "Trend: consecutive decreasing points",
    narration: "Trend (consecutive decreases)"
  }
};
function extractRuleIds(row) {
  if (!row) return [];
  const ids = [];
  if (row.specialCauseSinglePointUp) ids.push("singlePointUp" /* SinglePointUp */);
  if (row.specialCauseSinglePointDown) ids.push("singlePointDown" /* SinglePointDown */);
  if (row.specialCauseTwoOfThreeUp) ids.push("twoOfThreeUp" /* TwoOfThreeUp */);
  if (row.specialCauseTwoOfThreeDown) ids.push("twoOfThreeDown" /* TwoOfThreeDown */);
  if (row.specialCauseFourOfFiveUp) ids.push("fourOfFiveUp" /* FourOfFiveUp */);
  if (row.specialCauseFourOfFiveDown) ids.push("fourOfFiveDown" /* FourOfFiveDown */);
  if (row.specialCauseShiftUp) ids.push("shiftUp" /* ShiftUp */);
  if (row.specialCauseShiftDown) ids.push("shiftDown" /* ShiftDown */);
  if (row.specialCauseTrendUp) ids.push("trendUp" /* TrendUp */);
  if (row.specialCauseTrendDown) ids.push("trendDown" /* TrendDown */);
  return ids;
}
function variationLabel(icon) {
  switch (icon) {
    case "improvement" /* Improvement */:
      return "Improvement signal";
    case "concern" /* Concern */:
      return "Concern signal";
    case "neither" /* Neither */:
      return "Common cause variation";
    case "suppressed" /* Suppressed */:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function assuranceLabel(icon) {
  switch (icon) {
    case "pass" /* Pass */:
      return "Target met";
    case "fail" /* Fail */:
      return "Target not met";
    default:
      return null;
  }
}
function zoneLabel(mean3, sigma, value) {
  if (mean3 == null || !Number.isFinite(sigma) || sigma <= 0) return null;
  const z = Math.abs((value - mean3) / sigma);
  if (z < 1) return "Within 1\u03C3";
  if (z < 2) return "Between 1\u20132\u03C3";
  if (z < 3) return "Between 2\u20133\u03C3";
  return "Beyond 3\u03C3";
}
var VARIATION_COLOR_TOKENS = {
  improvement: {
    token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)",
    hex: "#00B0F0"
  },
  concern: {
    token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)",
    hex: "#E46C0A"
  },
  neither: {
    token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
    hex: "#A6A6A6"
  },
  suppressed: {
    token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)",
    hex: "#490092"
  }
};
function getVariationColorToken(icon) {
  var _a2, _b2;
  if (!icon) return VARIATION_COLOR_TOKENS.neither.token;
  return (_b2 = (_a2 = VARIATION_COLOR_TOKENS[icon]) == null ? void 0 : _a2.token) != null ? _b2 : VARIATION_COLOR_TOKENS.neither.token;
}
function getVariationColorHex(icon) {
  var _a2, _b2;
  if (!icon) return VARIATION_COLOR_TOKENS.neither.hex;
  return (_b2 = (_a2 = VARIATION_COLOR_TOKENS[icon]) == null ? void 0 : _a2.hex) != null ? _b2 : VARIATION_COLOR_TOKENS.neither.hex;
}

// src/mapping/tag.ts
function mapTagProps(input) {
  const { color: color2 = "default", noBorder, closable, disabled, className } = input;
  const classes = [
    "nhsuk-tag",
    color2 !== "default" ? `nhsuk-tag--${color2}` : "",
    noBorder ? "nhsuk-tag--no-border" : "",
    closable ? "nhsuk-tag--closable" : "",
    disabled ? "nhsuk-tag--disabled" : "",
    className || ""
  ].filter(Boolean).join(" ");
  return { classes, showClose: !!closable, disabled: !!disabled };
}

// src/components/Tag/Tag.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var Tag = ({
  text,
  html,
  children,
  color: color2 = "default",
  noBorder = false,
  closable = false,
  onClose,
  disabled = false,
  className,
  ...props
}) => {
  const model = mapTagProps({ color: color2, noBorder, closable, disabled, className });
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsxs4("strong", { className: model.classes, ...props, children: [
    children ? children : html ? /* @__PURE__ */ jsx8("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    closable && /* @__PURE__ */ jsx8(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: handleClose,
        disabled,
        "aria-label": "Remove",
        title: "Remove",
        children: "\xD7"
      }
    )
  ] });
};

// src/components/DataVisualisation/charts/SPC/SPCChart/SPCTooltipOverlay.tsx
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var SPCTooltipOverlay = ({
  engineRows,
  limits,
  pointDescriber,
  measureName,
  measureUnit,
  dateFormatter,
  enableNeutralNoJudgement = true,
  showTrendGatingExplanation = true
}) => {
  var _a2, _b2, _c, _d, _e, _f;
  const tooltip = useTooltipContext();
  const chart = useChartContext();
  const [cachedFocus, setCachedFocus] = React8.useState(null);
  const [hoveringTooltip, setHoveringTooltip] = React8.useState(false);
  const hideTimeoutRef = React8.useRef(null);
  React8.useEffect(() => {
    if (!tooltip) return;
    if (tooltip.focused) {
      setCachedFocus(tooltip.focused);
      if (hideTimeoutRef.current) {
        cancelAnimationFrame(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    }
    if (!tooltip.focused && !hoveringTooltip) {
      const id = requestAnimationFrame(() => {
        setCachedFocus(null);
        hideTimeoutRef.current = null;
      });
      hideTimeoutRef.current = id;
    }
    return () => {
      if (hideTimeoutRef.current) {
        cancelAnimationFrame(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };
  }, [tooltip, tooltip == null ? void 0 : tooltip.focused, hoveringTooltip]);
  const focused = tooltip && (tooltip.focused || (hoveringTooltip ? cachedFocus : null) || cachedFocus);
  const [visible, setVisible] = React8.useState(false);
  React8.useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [focused == null ? void 0 : focused.index]);
  const innerWidth = (_a2 = chart == null ? void 0 : chart.innerWidth) != null ? _a2 : 0;
  const innerHeight = (_b2 = chart == null ? void 0 : chart.innerHeight) != null ? _b2 : 0;
  const clampX = focused ? Math.min(Math.max(focused.clientX, 0), innerWidth) : 0;
  const clampY = focused ? Math.min(Math.max(focused.clientY, 0), innerHeight) : 0;
  const containerEl = (_c = chart.ref) == null ? void 0 : _c.current;
  const host = containerEl;
  if (!focused) {
    return null;
  }
  const row = engineRows == null ? void 0 : engineRows[focused.index];
  const ruleIds = extractRuleIds(row);
  const rules = ruleIds.map((r) => ({ id: r, label: ruleGlossary[r].tooltip }));
  const dateObj = focused.x instanceof Date ? focused.x : new Date(focused.x);
  const dateLabel = dateFormatter ? dateFormatter(dateObj) : dateObj.toDateString();
  const unit2 = measureUnit ? `${measureUnit}` : "";
  const valueLabel = measureName || unit2 ? `${focused.y}${unit2 ? "" + unit2 : " "}${measureName ? " " + measureName : ""}` : `${focused.y}`;
  const variationDesc = variationLabel(row == null ? void 0 : row.variationIcon);
  const assuranceDesc = assuranceLabel(row == null ? void 0 : row.assuranceIcon);
  const zone = zoneLabel(
    (_d = limits.mean) != null ? _d : null,
    limits.sigma,
    focused.y
  );
  const narrative = pointDescriber ? pointDescriber(focused.index, { x: focused.x, y: focused.y }) : void 0;
  const showBadges = variationDesc || assuranceDesc || zone;
  const trendFlag = (row == null ? void 0 : row.specialCauseTrendUp) || (row == null ? void 0 : row.specialCauseTrendDown);
  const variationNeutral = (row == null ? void 0 : row.variationIcon) === "neither" /* Neither */ && trendFlag;
  const gatingExplanation = showTrendGatingExplanation && variationNeutral ? "Trend detected (monotonic run) \u2013 held neutral until values cross onto the favourable side of the mean." : null;
  const hasRules = rules.length > 0;
  const primeDirection = row == null ? void 0 : row.primeDirection;
  const primeRuleId = row == null ? void 0 : row.primeRuleId;
  const isNoJudgement = enableNeutralNoJudgement && (row == null ? void 0 : row.variationIcon) === "neither" /* Neither */ && hasRules;
  const focusYellow = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
  const spcDotColor = getVariationColorToken(row == null ? void 0 : row.variationIcon);
  const charPx = 6.2;
  const baseLinesForMeasure = [
    narrative || "",
    `${dateLabel} \u2022 ${valueLabel}`
  ].filter(Boolean);
  const contentWidthEstimate = baseLinesForMeasure.reduce(
    (m, s) => Math.max(m, s.length * charPx + 32),
    0
  );
  const minWidth = 200;
  const maxWidth = 440;
  const boxWidth = Math.min(maxWidth, Math.max(minWidth, contentWidthEstimate));
  let left = clampX + 12;
  const marginTop = (_f = (_e = chart.margin) == null ? void 0 : _e.top) != null ? _f : 0;
  let top = marginTop + clampY + 16;
  if (left + boxWidth > innerWidth) {
    const flipGap = -60;
    left = clampX - flipGap - boxWidth;
  }
  if (left < 0) left = Math.max(0, innerWidth - boxWidth);
  const tooltipId = focused ? `spc-tooltip-${focused.index}` : "spc-tooltip";
  const pointIndex = typeof focused.index === "number" ? focused.index : NaN;
  const portal = host ? createPortal(
    /* @__PURE__ */ jsx9(
      "div",
      {
        id: tooltipId,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (visible ? " is-visible" : ""),
        style: {
          position: "absolute",
          left,
          top,
          width: boxWidth,
          maxWidth,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": visible ? "false" : "true",
        "data-floating": true,
        "data-placement": left + boxWidth + 12 > innerWidth ? "left" : "right",
        onPointerEnter: () => {
          setHoveringTooltip(true);
          if (hideTimeoutRef.current) {
            cancelAnimationFrame(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
          }
        },
        onPointerLeave: () => {
          setHoveringTooltip(false);
          if (!(tooltip == null ? void 0 : tooltip.focused)) {
            const id = requestAnimationFrame(() => {
              setCachedFocus(null);
              hideTimeoutRef.current = null;
            });
            hideTimeoutRef.current = id;
          }
        },
        children: /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx9("strong", { children: "Point" }) }),
            /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              pointIndex
            ] })
          ] }),
          /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx9("strong", { children: "Date" }) }),
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__primary-line", children: dateLabel })
          ] }),
          /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx9("strong", { children: "Value" }) }),
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__primary-line", children: valueLabel })
          ] }),
          showBadges && /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx9("strong", { children: "Signals" }) }),
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: (() => {
              if (variationDesc == null ? void 0 : variationDesc.toLowerCase().includes("concern")) {
                return /* @__PURE__ */ jsx9(
                  Tag,
                  {
                    text: variationDesc,
                    color: "default",
                    className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                  }
                );
              }
              if (variationDesc == null ? void 0 : variationDesc.toLowerCase().includes("improvement")) {
                return /* @__PURE__ */ jsx9(
                  Tag,
                  {
                    text: variationDesc,
                    color: "default",
                    className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                  }
                );
              }
              if (isNoJudgement) {
                return /* @__PURE__ */ jsx9(
                  Tag,
                  {
                    text: "No judgement",
                    color: "default",
                    className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                    "aria-label": "Neutral special cause (no directional judgement)"
                  }
                );
              }
              if (variationDesc) {
                return /* @__PURE__ */ jsx9(
                  Tag,
                  {
                    text: variationDesc,
                    color: "default",
                    className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                  }
                );
              }
              return null;
            })() })
          ] }),
          assuranceDesc && /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx9("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const lower = assuranceDesc.toLowerCase();
              const isFail = lower.includes("not met") || lower.includes("not achieved");
              const isPass = !isFail && /(^|\b)(met|achieved)(\b|$)/.test(lower);
              return /* @__PURE__ */ jsx9(
                Tag,
                {
                  text: assuranceDesc,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${isPass ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${assuranceDesc}`
                }
              );
            })() })
          ] }),
          zone && /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx9("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ jsx9(
              Tag,
              {
                text: (() => {
                  const z = zone.toLowerCase();
                  if (z.startsWith("within 1")) return "\u22641\u03C3";
                  if (z.startsWith("1\u20132")) return "1\u20132\u03C3";
                  if (z.startsWith("2\u20133")) return "2\u20133\u03C3";
                  if (z.startsWith(">3")) return ">3\u03C3";
                  return zone;
                })(),
                color: zone.includes(">3") ? "orange" : zone.includes("2\u20133") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${zone}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          gatingExplanation && /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": true, children: [
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx9("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: gatingExplanation })
          ] }),
          hasRules && /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx9("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ jsx9(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: rules.map(({ id, label }) => {
                  const idStr = String(id);
                  const isTrend = idStr === "trend_inc" /* TrendIncreasing */ || idStr === "trend_dec" /* TrendDecreasing */;
                  const ruleColorClass = isTrend ? "fdp-spc-tag--trend" : isNoJudgement ? "fdp-spc-tag--no-judgement" : variationDesc ? variationDesc.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : variationDesc.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ jsx9(
                    Tag,
                    {
                      text: label,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${ruleColorClass}`,
                      "data-rule-id": idStr
                    },
                    idStr
                  );
                })
              }
            ),
            primeDirection && /* @__PURE__ */ jsxs5("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ jsx9("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ jsx9("strong", { children: "Prime Direction" }) }),
              (() => {
                const primeColorClass = isNoJudgement ? "fdp-spc-tag--no-judgement" : variationDesc ? variationDesc.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : variationDesc.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                const primeLabel = `${primeDirection}${primeRuleId ? ` (${primeRuleId})` : ""}`;
                return /* @__PURE__ */ jsx9(
                  Tag,
                  {
                    text: primeLabel,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${primeColorClass}`,
                    "aria-label": `Prime direction ${primeDirection}${primeRuleId ? ` via ${primeRuleId}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    host
  ) : null;
  return /* @__PURE__ */ jsxs5(
    "g",
    {
      className: "fdp-tooltip-layer fdp-spc-tooltip",
      pointerEvents: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx9(
          "circle",
          {
            cx: clampX,
            cy: clampY,
            r: 7,
            fill: "none",
            stroke: focusYellow,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ jsx9(
          "circle",
          {
            cx: clampX,
            cy: clampY,
            r: 5,
            fill: "#000",
            stroke: focusYellow,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ jsx9(
          "circle",
          {
            cx: clampX,
            cy: clampY,
            r: 2.5,
            fill: spcDotColor,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        portal
      ]
    }
  );
};
var SPCTooltipOverlay_default = SPCTooltipOverlay;

// src/components/DataVisualisation/primitives/VisuallyHiddenLiveRegion.tsx
import * as React9 from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var VisuallyHiddenLiveRegion = ({ polite = true, format: format2 }) => {
  const tooltip = useTooltipContext();
  const [message, setMessage] = React9.useState("");
  const lastRef = React9.useRef("");
  React9.useEffect(() => {
    if (!(tooltip == null ? void 0 : tooltip.focused)) return;
    const { focused, aggregated } = tooltip;
    let msg;
    if (aggregated && aggregated.length > 1) {
      const parts = aggregated.map((a) => `${a.seriesId} ${a.y}`).join("; ");
      const xLabel = focused.x instanceof Date ? focused.x.toDateString() : String(focused.x);
      msg = `${xLabel} \u2013 ${parts}`;
    } else {
      msg = format2 ? format2({ seriesId: focused.seriesId, x: focused.x, y: focused.y, index: focused.index }) : defaultFormatter(focused.seriesId, focused.x, focused.y, focused.index);
    }
    if (msg !== lastRef.current) {
      lastRef.current = msg;
      setMessage("");
      const timeout = setTimeout(() => setMessage(msg), 10);
      return () => clearTimeout(timeout);
    }
  }, [tooltip == null ? void 0 : tooltip.focused, format2]);
  return /* @__PURE__ */ jsx10(
    "div",
    {
      "aria-live": polite ? "polite" : "assertive",
      "aria-atomic": "true",
      style: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 },
      children: message
    }
  );
};
function defaultFormatter(seriesId, x2, y2, index) {
  const xLabel = x2 instanceof Date ? x2.toDateString() : String(x2);
  return `Series ${seriesId}, point ${index + 1}, ${xLabel}, value ${y2}`;
}
var VisuallyHiddenLiveRegion_default = VisuallyHiddenLiveRegion;

// src/components/DataVisualisation/charts/SPC/SPCIcons/SPCIcon.tsx
import { useId, useMemo as useMemo7 } from "react";

// src/components/DataVisualisation/charts/SPC/SPCIcons/tokenUtils.ts
var spcTokenRoot = null;
var _a, _b;
try {
  const tokens = require_tokens();
  spcTokenRoot = ((_b = (_a = tokens == null ? void 0 : tokens.color) == null ? void 0 : _a["data-viz"]) == null ? void 0 : _b.spc) || null;
} catch {
}
var tokenColour = (key, fallback) => {
  if (!spcTokenRoot) return fallback;
  const parts = key.split(".");
  let current = spcTokenRoot;
  for (const p of parts) {
    if (current == null) break;
    current = current[p];
  }
  const val = current;
  if (val == null) return fallback;
  if (typeof val === "string" || typeof val === "number") return String(val);
  if (val.$value != null) return String(val.$value);
  if (val.value != null) return String(val.value);
  return fallback;
};
var getGradientOpacities = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: tokenColour("gradient.stop.start-opacity", "0.12"),
  mid: tokenColour("gradient.stop.mid-opacity", "0.03"),
  end: tokenColour("gradient.stop.end-opacity", "0"),
  triStart: tokenColour(
    "gradient.stop.triangle-start-opacity",
    tokenColour("gradient.stop.start-opacity", "0.12")
  ),
  triMid: tokenColour(
    "gradient.stop.triangle-mid-opacity",
    tokenColour("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: tokenColour(
    "gradient.stop.triangle-end-opacity",
    tokenColour("gradient.stop.end-opacity", "0")
  )
});

// src/components/DataVisualisation/charts/SPC/SPCIcons/SPCConstants.ts
var AssuranceResult = /* @__PURE__ */ ((AssuranceResult2) => {
  AssuranceResult2["Pass"] = "pass";
  AssuranceResult2["Fail"] = "fail";
  AssuranceResult2["Uncertain"] = "uncertain";
  return AssuranceResult2;
})(AssuranceResult || {});
var DEFAULT_COLOURS = {
  ["pass" /* Pass */]: "#00B0F0",
  // blue
  ["fail" /* Fail */]: "#E46C0A",
  // orange
  ["uncertain" /* Uncertain */]: "#A6A6A6"
  // grey
};
var DEFAULT_LETTERS = {
  ["pass" /* Pass */]: "P",
  ["fail" /* Fail */]: "F",
  ["uncertain" /* Uncertain */]: "?"
};
var MetricPolarity = /* @__PURE__ */ ((MetricPolarity2) => {
  MetricPolarity2["HigherIsBetter"] = "higher_is_better";
  MetricPolarity2["LowerIsBetter"] = "lower_is_better";
  MetricPolarity2["ContextDependent"] = "context_dependent";
  return MetricPolarity2;
})(MetricPolarity || {});
var Direction = /* @__PURE__ */ ((Direction2) => {
  Direction2["Higher"] = "higher";
  Direction2["Lower"] = "lower";
  return Direction2;
})(Direction || {});
var VariationJudgement = /* @__PURE__ */ ((VariationJudgement2) => {
  VariationJudgement2["Improving"] = "improving";
  VariationJudgement2["Deteriorating"] = "deteriorating";
  VariationJudgement2["No_Judgement"] = "no_judgement";
  VariationJudgement2["None"] = "none";
  return VariationJudgement2;
})(VariationJudgement || {});
var VariationState = /* @__PURE__ */ ((VariationState2) => {
  VariationState2["SpecialCauseImproving"] = "special_cause_improving";
  VariationState2["SpecialCauseDeteriorating"] = "special_cause_deteriorating";
  VariationState2["CommonCause"] = "common_cause";
  VariationState2["SpecialCauseNoJudgement"] = "special_cause_no_judgement";
  return VariationState2;
})(VariationState || {});
var pickTextColour = (hex2) => {
  const c = hex2.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const srgb = [r, g, b].map(
    (v) => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  );
  const L = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  return L < 0.55 ? "#ffffff" : "#212b32";
};
var VARIATION_COLOURS = {
  ["special_cause_deteriorating" /* SpecialCauseDeteriorating */]: {
    hex: VARIATION_COLOR_TOKENS.concern.hex,
    judgement: "deteriorating" /* Deteriorating */,
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  ["special_cause_improving" /* SpecialCauseImproving */]: {
    hex: VARIATION_COLOR_TOKENS.improvement.hex,
    judgement: "improving" /* Improving */,
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  ["common_cause" /* CommonCause */]: {
    hex: VARIATION_COLOR_TOKENS.neither.hex,
    judgement: "none" /* None */,
    label: "Common Cause",
    description: "Common cause variation only \u2013 no special cause detected."
  },
  ["special_cause_no_judgement" /* SpecialCauseNoJudgement */]: {
    hex: VARIATION_COLOR_TOKENS.suppressed.hex,
    judgement: "no_judgement" /* No_Judgement */,
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(VARIATION_COLOURS).forEach((def) => {
  if (!def.text) def.text = pickTextColour(def.hex);
});
var getVariationColour = (state) => VARIATION_COLOURS[state];
var getVariationTrend = (state) => VARIATION_COLOURS[state].judgement || "none" /* None */;
var POINT_LAYOUTS = {
  special: {
    higher: [
      { cx: 77.5, cy: 158.5 },
      { cx: 114, cy: 175 },
      { cx: 150.5, cy: 158.5 },
      { cx: 188, cy: 125 },
      { cx: 225, cy: 137 }
    ],
    lower: [
      { cx: 77.5, cy: 139.5 },
      { cx: 114, cy: 124.5 },
      { cx: 150.5, cy: 139.5 },
      { cx: 188, cy: 175.5 },
      { cx: 224.5, cy: 162 }
    ]
  },
  common: [
    { cx: 76.5, cy: 149.5 },
    { cx: 113, cy: 179.5 },
    { cx: 149.5, cy: 117 },
    { cx: 187, cy: 171 },
    { cx: 223.5, cy: 158 }
  ]
};
function computePointPositions(state, direction) {
  let src;
  if (state === "common_cause" /* CommonCause */) src = POINT_LAYOUTS.common;
  else
    src = POINT_LAYOUTS.special[direction === "lower" /* Lower */ ? "lower" : "higher"];
  return src.map((p) => ({ ...p }));
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic/storybook/SPCChart.constants.ts
var SpcGradientCategory = /* @__PURE__ */ ((SpcGradientCategory2) => {
  SpcGradientCategory2["Concern"] = "concern";
  SpcGradientCategory2["Improvement"] = "improvement";
  SpcGradientCategory2["NoJudgement"] = "noJudgement";
  SpcGradientCategory2["Common"] = "common";
  return SpcGradientCategory2;
})(SpcGradientCategory || {});
var SpcEmbeddedIconVariant = /* @__PURE__ */ ((SpcEmbeddedIconVariant2) => {
  SpcEmbeddedIconVariant2["Classic"] = "classic";
  SpcEmbeddedIconVariant2["Triangle"] = "triangle";
  SpcEmbeddedIconVariant2["TriangleWithRun"] = "triangleWithRun";
  return SpcEmbeddedIconVariant2;
})(SpcEmbeddedIconVariant || {});
var SPCChart_constants_default = SpcGradientCategory;

// src/components/DataVisualisation/charts/SPC/SPCIcons/SPCIcon.tsx
import { Fragment, jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var resolveStateAndLayout = (input) => {
  var _a2, _b2;
  const emitDeprecation = () => {
    if (!globalThis.__spcIconDeprecationEmitted) {
      console.warn(
        "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
      );
      globalThis.__spcIconDeprecationEmitted = true;
    }
  };
  if (input.variationIcon !== void 0) {
    const eng = input;
    let polarity = void 0;
    if (eng.improvementDirection !== void 0) {
      polarity = eng.improvementDirection === "Up" /* Up */ ? "higher_is_better" /* HigherIsBetter */ : eng.improvementDirection === "Down" /* Down */ ? "lower_is_better" /* LowerIsBetter */ : "context_dependent" /* ContextDependent */;
    } else if (eng.polarity) {
      polarity = eng.polarity;
    }
    let state2;
    switch (eng.variationIcon) {
      case "improvement" /* Improvement */:
        state2 = "special_cause_improving" /* SpecialCauseImproving */;
        break;
      case "concern" /* Concern */:
        state2 = "special_cause_deteriorating" /* SpecialCauseDeteriorating */;
        break;
      case "neither" /* Neither */:
        state2 = eng.specialCauseNeutral ? "special_cause_no_judgement" /* SpecialCauseNoJudgement */ : "common_cause" /* CommonCause */;
        break;
      case "suppressed" /* Suppressed */:
      default:
        state2 = "special_cause_no_judgement" /* SpecialCauseNoJudgement */;
        break;
    }
    let direction2 = eng.trend;
    if (!direction2) {
      if (state2 === "special_cause_improving" /* SpecialCauseImproving */) {
        direction2 = polarity === "lower_is_better" /* LowerIsBetter */ ? "lower" /* Lower */ : "higher" /* Higher */;
      } else if (state2 === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) {
        direction2 = polarity === "lower_is_better" /* LowerIsBetter */ ? "higher" /* Higher */ : "lower" /* Lower */;
      } else if (state2 === "special_cause_no_judgement" /* SpecialCauseNoJudgement */) {
        if (eng.highSideSignal && !eng.lowSideSignal) direction2 = "higher" /* Higher */;
        else if (eng.lowSideSignal && !eng.highSideSignal) direction2 = "lower" /* Lower */;
        else direction2 = "higher" /* Higher */;
      } else {
        direction2 = "higher" /* Higher */;
      }
    }
    return { state: state2, direction: direction2, polarity: polarity != null ? polarity : "context_dependent" /* ContextDependent */ };
  }
  if (input.state !== void 0) {
    emitDeprecation();
    const v1 = input;
    let direction2 = v1.trend;
    if (!direction2 && (v1.state === "special_cause_improving" /* SpecialCauseImproving */ || v1.state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) && v1.polarity) {
      if (v1.state === "special_cause_improving" /* SpecialCauseImproving */) {
        direction2 = v1.polarity === "lower_is_better" /* LowerIsBetter */ ? "lower" /* Lower */ : "higher" /* Higher */;
      } else {
        direction2 = v1.polarity === "lower_is_better" /* LowerIsBetter */ ? "higher" /* Higher */ : "lower" /* Lower */;
      }
    }
    if (!direction2) {
      if (v1.state === "special_cause_improving" /* SpecialCauseImproving */)
        direction2 = "higher" /* Higher */;
      else if (v1.state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */)
        direction2 = "lower" /* Lower */;
      else direction2 = "higher" /* Higher */;
    }
    return {
      state: v1.state,
      direction: direction2,
      polarity: (_a2 = v1.polarity) != null ? _a2 : "context_dependent" /* ContextDependent */
    };
  }
  const v2 = input;
  emitDeprecation();
  const map2 = {
    ["improving" /* Improving */]: "special_cause_improving" /* SpecialCauseImproving */,
    ["deteriorating" /* Deteriorating */]: "special_cause_deteriorating" /* SpecialCauseDeteriorating */,
    ["no_judgement" /* No_Judgement */]: "special_cause_no_judgement" /* SpecialCauseNoJudgement */,
    ["none" /* None */]: "common_cause" /* CommonCause */
  };
  const state = map2[v2.judgement];
  let direction;
  if (v2.judgement === "improving" /* Improving */) {
    direction = v2.polarity === "lower_is_better" /* LowerIsBetter */ ? "lower" /* Lower */ : "higher" /* Higher */;
  } else if (v2.judgement === "deteriorating" /* Deteriorating */) {
    direction = v2.polarity === "lower_is_better" /* LowerIsBetter */ ? "higher" /* Higher */ : "lower" /* Lower */;
  } else {
    direction = (_b2 = v2.trend) != null ? _b2 : "higher" /* Higher */;
  }
  return { state, direction, polarity: v2.polarity };
};
function deriveVariationAriaDescription(input, context) {
  const { state, direction, polarity } = resolveStateAndLayout(input);
  const judgement = getVariationTrend(state);
  const sideWord = direction === "higher" /* Higher */ ? "above" : "below";
  const trendWord = direction === "higher" /* Higher */ ? "upwards" : "downwards";
  const polarityClause = (() => {
    switch (polarity) {
      case "higher_is_better" /* HigherIsBetter */:
        return "For this measure, higher values are better.";
      case "lower_is_better" /* LowerIsBetter */:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  const base = (() => {
    switch (judgement) {
      case "improving" /* Improving */:
        return `Special cause improvement: recent data show a sustained run ${sideWord} the mean (unlikely due to random variation).`;
      case "deteriorating" /* Deteriorating */:
        return `Special cause deterioration: recent data show a sustained run ${sideWord} the mean (unlikely due to random variation).`;
      case "no_judgement" /* No_Judgement */:
        return `Special cause detected (no value judgement): recent data show a change in level, trending ${trendWord}.`;
      case "none" /* None */:
      default:
        return `Common cause variation: points vary randomly around the mean; no special cause detected.`;
    }
  })();
  const parts = [
    base,
    polarityClause,
    (context == null ? void 0 : context.measureName) ? `Measure: ${context.measureName}.` : null,
    (context == null ? void 0 : context.datasetContext) ? `${context.datasetContext}.` : null,
    (context == null ? void 0 : context.organisation) ? `Organisation: ${context.organisation}.` : null,
    (context == null ? void 0 : context.timeframe) ? `Timeframe: ${context.timeframe}.` : null,
    (context == null ? void 0 : context.additionalNote) ? context.additionalNote : null
  ];
  return parts.filter(Boolean).join(" ");
}
var buildDefs = (colourHex, shadowId, washId, dropShadow, gradientWash, stops) => /* @__PURE__ */ jsxs6("defs", { children: [
  dropShadow && /* @__PURE__ */ jsxs6("filter", { id: shadowId, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ jsx11("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ jsx11("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ jsx11("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ jsx11("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ jsx11("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  gradientWash && /* @__PURE__ */ jsx11("linearGradient", { id: washId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: stops.map((s) => /* @__PURE__ */ jsx11(
    "stop",
    {
      offset: s.offset,
      stopColor: colourHex,
      stopOpacity: parseFloat(s.opacity)
    },
    s.offset
  )) })
] });
var SPCVariationIcon = ({
  data,
  size = 44,
  ariaLabel,
  showLetter = true,
  dropShadow = true,
  gradientWash = false,
  variant = "classic" /* Classic */,
  runLength = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode = "polarity" /* Polarity */,
  letterOverride,
  ...rest
}) => {
  const shadowId = useId();
  const washId = useId();
  const {
    start: gradStart,
    mid: gradMid,
    end: gradEnd,
    triStart: triGradStart,
    triMid: triGradMid,
    triEnd: triGradEnd
  } = getGradientOpacities();
  const { state, direction, polarity } = useMemo7(
    () => resolveStateAndLayout(data),
    [data]
  );
  const colour = useMemo7(() => getVariationColour(state), [state]);
  const judgement = useMemo7(() => getVariationTrend(state), [state]);
  const showLetterForJudgement = judgement === "improving" /* Improving */ || judgement === "deteriorating" /* Deteriorating */;
  let letter = "";
  if (showLetter && showLetterForJudgement) {
    if (letterMode === "polarity" /* Polarity */) {
      if (polarity === "higher_is_better" /* HigherIsBetter */) letter = "H";
      else if (polarity === "lower_is_better" /* LowerIsBetter */) letter = "L";
      else letter = "";
    } else {
      letter = direction === "higher" /* Higher */ ? "H" : "L";
    }
  }
  if (letterOverride !== void 0) letter = letterOverride;
  const isSpecial = state !== "common_cause" /* CommonCause */;
  const isNoJudgement = state === "special_cause_no_judgement" /* SpecialCauseNoJudgement */;
  const neutralGrey = tokenColour("common-cause", "#A6A6A6");
  const pointColour = isSpecial ? colour.hex : neutralGrey;
  const points = useMemo7(
    () => computePointPositions(state, direction),
    [state, direction]
  );
  const aria = ariaLabel || `${colour.label}${letter ? direction === "higher" /* Higher */ ? " \u2013 Higher" : " \u2013 Lower" : ""}`;
  const ariaDescription = deriveVariationAriaDescription(
    data
  );
  if (variant === "triangleWithRun" /* TriangleWithRun */) {
    const triSize = 100;
    const centerX = 150;
    const centerY = 140;
    const upTriangle = [
      [centerX, centerY - triSize / 2],
      [centerX - triSize / 2, centerY + triSize / 2],
      [centerX + triSize / 2, centerY + triSize / 2]
    ];
    const downTriangle = [
      [centerX, centerY + triSize / 2],
      [centerX - triSize / 2, centerY - triSize / 2],
      [centerX + triSize / 2, centerY - triSize / 2]
    ];
    let shape = null;
    if (state === "special_cause_improving" /* SpecialCauseImproving */ || state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) {
      shape = /* @__PURE__ */ jsx11(
        "polygon",
        {
          points: (direction === "higher" /* Higher */ ? upTriangle : downTriangle).map((p) => p.join(",")).join(" "),
          fill: colour.hex,
          stroke: colour.hex,
          strokeWidth: 6,
          transform: direction === "higher" /* Higher */ ? "translate(0, -8)" : "translate(0, 15)"
        }
      );
    } else if (state === "special_cause_no_judgement" /* SpecialCauseNoJudgement */) {
      shape = /* @__PURE__ */ jsx11(
        "polygon",
        {
          points: direction === "higher" /* Higher */ ? upTriangle.map((p) => p.join(",")).join(" ") : downTriangle.map((p) => p.join(",")).join(" "),
          fill: colour.hex,
          stroke: colour.hex,
          strokeWidth: 6,
          transform: direction === "higher" /* Higher */ ? "translate(0,-7)" : "translate(0,14)"
        }
      );
    }
    const runLen = Math.max(0, Math.min(5, Math.floor(runLength || 0)));
    const runY = state === "common_cause" /* CommonCause */ ? 160 : direction === "higher" /* Higher */ ? 220 : 70;
    const runRadius = 10;
    const runGap = 26;
    const runStartX = centerX - 2 * runGap;
    const runColor = state === "special_cause_improving" /* SpecialCauseImproving */ ? tokenColour("improvement", "#00B0F0") : state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */ ? tokenColour("concern", "#E46C0A") : neutralGrey;
    const runCircles = Array.from({ length: 5 }).map((_, i) => {
      const filled = (state === "special_cause_improving" /* SpecialCauseImproving */ || state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) && i >= 5 - runLen;
      const fill = filled ? runColor : neutralGrey;
      return /* @__PURE__ */ jsx11(
        "circle",
        {
          cx: runStartX + i * runGap,
          cy: runY,
          r: runRadius,
          fill,
          stroke: fill,
          strokeWidth: 1
        },
        i
      );
    });
    const defs2 = buildDefs(
      colour.hex,
      shadowId,
      washId,
      dropShadow,
      gradientWash,
      [
        { offset: "0%", opacity: triGradStart },
        { offset: "75%", opacity: triGradMid },
        { offset: "100%", opacity: triGradEnd }
      ]
    );
    const groupTransform = state === "common_cause" /* CommonCause */ ? "translate(0,-10)" : direction === "higher" /* Higher */ ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ jsxs6(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": aria,
        "aria-description": ariaDescription,
        ...rest,
        children: [
          defs2,
          /* @__PURE__ */ jsx11(
            "circle",
            {
              stroke: "none",
              fill: gradientWash ? `url(#${washId})` : "#ffffff",
              ...dropShadow ? { filter: `url(#${shadowId})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ jsx11(
            "circle",
            {
              stroke: colour.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ jsxs6("g", { transform: groupTransform, children: [
            shape,
            letter && /* @__PURE__ */ jsx11(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: direction === "higher" /* Higher */ ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: letter
              }
            ),
            runCircles
          ] })
        ]
      }
    );
  }
  if (variant === "triangle" /* Triangle */) {
    const triSize = 150;
    const centerX = 150;
    const centerY = 150;
    const upTriangle = [
      [centerX, centerY - triSize / 2],
      [centerX - triSize / 2, centerY + triSize / 2],
      [centerX + triSize / 2, centerY + triSize / 2]
    ];
    const downTriangle = [
      [centerX, centerY + triSize / 2],
      [centerX - triSize / 2, centerY - triSize / 2],
      [centerX + triSize / 2, centerY - triSize / 2]
    ];
    const flatLine = [
      [centerX - triSize / 2, centerY + triSize / 2],
      [centerX + triSize / 2, centerY + triSize / 2]
    ];
    let shape = null;
    if (state === "special_cause_improving" /* SpecialCauseImproving */ || state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) {
      shape = /* @__PURE__ */ jsx11(
        "polygon",
        {
          points: (direction === "higher" /* Higher */ ? upTriangle : downTriangle).map((p) => p.join(",")).join(" "),
          fill: colour.hex,
          stroke: colour.hex,
          strokeWidth: 8,
          transform: direction === "higher" /* Higher */ ? "translate(0, -10)" : "translate(0, 10)"
        }
      );
    } else if (state === "special_cause_no_judgement" /* SpecialCauseNoJudgement */) {
      shape = /* @__PURE__ */ jsx11(
        "polygon",
        {
          points: direction === "higher" /* Higher */ ? upTriangle.map((p) => p.join(",")).join(" ") : downTriangle.map((p) => p.join(",")).join(" "),
          fill: colour.hex,
          stroke: colour.hex,
          strokeWidth: 8,
          transform: direction === "higher" /* Higher */ ? "translate(0, -15)" : "translate(0, 15)"
        }
      );
    } else if (state === "common_cause" /* CommonCause */) {
      shape = /* @__PURE__ */ jsx11(
        "line",
        {
          x1: flatLine[0][0],
          y1: flatLine[0][1],
          x2: flatLine[1][0],
          y2: flatLine[1][1],
          stroke: colour.hex,
          strokeWidth: 32,
          strokeLinecap: "square",
          transform: "translate(0, -75)"
        }
      );
    }
    const defs2 = buildDefs(
      colour.hex,
      shadowId,
      washId,
      dropShadow,
      gradientWash,
      [
        { offset: "0%", opacity: triGradStart },
        { offset: "65%", opacity: triGradMid },
        { offset: "100%", opacity: triGradEnd }
      ]
    );
    return /* @__PURE__ */ jsxs6(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": aria,
        "aria-description": ariaDescription,
        ...rest,
        children: [
          defs2,
          /* @__PURE__ */ jsx11(
            "circle",
            {
              stroke: "none",
              fill: gradientWash ? `url(#${washId})` : "#ffffff",
              ...dropShadow ? { filter: `url(#${shadowId})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ jsx11(
            "circle",
            {
              stroke: colour.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          shape,
          letter && (state === "special_cause_improving" /* SpecialCauseImproving */ || state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) && /* @__PURE__ */ jsx11(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: direction === "higher" /* Higher */ ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: letter
            }
          )
        ]
      }
    );
  }
  const defs = buildDefs(
    colour.hex,
    shadowId,
    washId,
    dropShadow,
    gradientWash,
    [
      { offset: "0%", opacity: gradStart },
      { offset: "65%", opacity: gradMid },
      { offset: "100%", opacity: gradEnd }
    ]
  );
  return /* @__PURE__ */ jsxs6(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": aria,
      "aria-description": ariaDescription,
      ...rest,
      children: [
        defs,
        /* @__PURE__ */ jsx11(
          "circle",
          {
            stroke: "none",
            fill: gradientWash ? `url(#${washId})` : "#ffffff",
            ...dropShadow ? { filter: `url(#${shadowId})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ jsx11(
          "circle",
          {
            stroke: colour.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        letter && /* @__PURE__ */ jsx11(
          "text",
          {
            fill: colour.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ jsx11("tspan", { x: "120", y: direction === "lower" /* Lower */ ? "340" : "155", children: letter })
          }
        ),
        isNoJudgement ? /* @__PURE__ */ jsx11(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: colour.hex,
            ...direction === "lower" /* Lower */ ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ jsxs6(Fragment, { children: [
          points.length === 5 && /* @__PURE__ */ jsx11(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: neutralGrey,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${points.map((p) => `${p.cx} ${p.cy}`).join(" L ")}`
            }
          ),
          points.map((p, i) => {
            const specialIdx = i >= points.length - 2 && isSpecial;
            const fill = specialIdx ? pointColour : neutralGrey;
            const stroke = fill;
            return /* @__PURE__ */ jsx11(
              "circle",
              {
                stroke,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill,
                cx: p.cx,
                cy: p.cy,
                r: 16
              },
              i
            );
          })
        ] })
      ]
    }
  );
};
SPCVariationIcon.displayName = "SPCVariationIcon";

// src/components/DataVisualisation/charts/SPC/SPCIcons/SPCAssuranceIcon.tsx
import { useId as useId2 } from "react";
import { Fragment as Fragment2, jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var SPCAssuranceIcon = ({
  status,
  size = 44,
  ariaLabel,
  dropShadow = true,
  colourOverride,
  gradientWash = false,
  letterOverride,
  showTrendLines = true,
  ...rest
}) => {
  const shadowId = useId2();
  const washId = useId2();
  const { start: gradStart, mid: gradMid, end: gradEnd } = getGradientOpacities();
  const colour = colourOverride || DEFAULT_COLOURS[status];
  const letter = (letterOverride || DEFAULT_LETTERS[status]).slice(0, 2);
  const aria = ariaLabel || `Assurance ${status}`;
  return /* @__PURE__ */ jsxs7(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": aria,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs7("defs", { children: [
          dropShadow && /* @__PURE__ */ jsxs7("filter", { id: shadowId, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ jsx12("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ jsx12("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ jsx12("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ jsx12("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ jsx12("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          gradientWash && /* @__PURE__ */ jsxs7("linearGradient", { id: washId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsx12("stop", { offset: "0%", stopColor: colour, stopOpacity: parseFloat(gradStart) }),
            /* @__PURE__ */ jsx12("stop", { offset: "65%", stopColor: colour, stopOpacity: parseFloat(gradMid) }),
            /* @__PURE__ */ jsx12("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(gradEnd) })
          ] })
        ] }),
        /* @__PURE__ */ jsx12(
          "circle",
          {
            stroke: "none",
            fill: gradientWash ? `url(#${washId})` : "#ffffff",
            ...dropShadow ? { filter: `url(#${shadowId})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ jsx12(
          "text",
          {
            fill: colour,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ jsx12("tspan", { x: 60, y: 184, children: letter })
          }
        ),
        showTrendLines && /* @__PURE__ */ jsxs7(Fragment2, { children: [
          status === "fail" /* Fail */ ? /* @__PURE__ */ jsx12(
            "path",
            {
              id: "fail-line",
              stroke: colour,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : status === "uncertain" /* Uncertain */ ? /* @__PURE__ */ jsx12(
            "path",
            {
              id: "uncertain-line",
              stroke: "rgb(166, 166, 166)",
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "16.5,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 36,174 L 266,174"
            }
          ) : /* @__PURE__ */ jsx12(
            "path",
            {
              id: "pass-line",
              stroke: colour,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 48,204 L 254,204"
            }
          ),
          /* @__PURE__ */ jsx12(
            "path",
            {
              id: "data-sparkline",
              stroke: "rgb(166, 166, 166)",
              strokeWidth: 12,
              strokeMiterlimit: 12,
              fill: "none",
              d: "M 59.9,187.91 C 72.79,171.72 87.33,158.06 104.4,157.83 121.91,158.58 140.94,187.85 153.4,189.91 164.1,192.12 163.78,171.38 169.17,170.53 172.87,169.55 174.88,187.45 184.94,189.24 197,191.86 230.54,184.47 239.01,185.9"
            }
          ),
          /* @__PURE__ */ jsx12(
            "circle",
            {
              stroke: colour,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          )
        ] })
      ]
    }
  );
};
SPCAssuranceIcon.displayName = "SPCAssuranceIcon";

// src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcUtils.ts
var isNumber = (v) => typeof v === "number" && Number.isFinite(v);
var sum = (arr) => arr.reduce((a, b) => a + b, 0);
var mean = (arr) => arr.length ? sum(arr) / arr.length : NaN;
function movingRanges(values, ghosts) {
  const mr = new Array(values.length).fill(null);
  let prevIdx = null;
  for (let i = 0; i < values.length; i++) {
    const vi = values[i];
    if (!ghosts[i] && isNumber(vi)) {
      if (prevIdx !== null) {
        const pv = values[prevIdx];
        mr[i] = isNumber(pv) ? Math.abs(vi - pv) : null;
      }
      prevIdx = i;
    }
  }
  return mr;
}
function mrMeanWithOptionalExclusion(mr, excludeOutliers) {
  const pool = mr.filter((v) => isNumber(v));
  if (!pool.length) return { mrMean: NaN, mrUcl: NaN };
  let mrMeanVal = mean(pool);
  let mrUclVal = 3.267 * mrMeanVal;
  if (excludeOutliers) {
    const trimmed = pool.filter((v) => v <= mrUclVal);
    if (trimmed.length && trimmed.length !== pool.length) {
      mrMeanVal = mean(trimmed);
      mrUclVal = 3.267 * mrMeanVal;
    }
  }
  return { mrMean: mrMeanVal, mrUcl: mrUclVal };
}
function xmrLimits(centerMean, mrMeanVal) {
  if (!isNumber(centerMean) || !isNumber(mrMeanVal))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const k3 = 2.66;
  const k2 = 2 / 3 * k3;
  const k1 = 1 / 3 * k3;
  return {
    upperProcessLimit: centerMean + k3 * mrMeanVal,
    lowerProcessLimit: centerMean - k3 * mrMeanVal,
    upperTwoSigma: centerMean + k2 * mrMeanVal,
    lowerTwoSigma: centerMean - k2 * mrMeanVal,
    upperOneSigma: centerMean + k1 * mrMeanVal,
    lowerOneSigma: centerMean - k1 * mrMeanVal
  };
}
var T_ALPHA = 0.2777;
var T_INV_ALPHA = 3.6;
var toTTransformed = (t) => isNumber(t) && t >= 0 ? Math.pow(t, T_ALPHA) : null;
var fromTTransformed = (y2) => isNumber(y2) && y2 >= 0 ? Math.pow(y2, T_INV_ALPHA) : null;
function geomInvCdfReal(q, p) {
  if (!(q > 0 && q < 1) || !(p > 0 && p < 1)) return NaN;
  return Math.log(1 - q) / Math.log(1 - p);
}
var SIGMA_PROBS = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function gChartProbabilityLimits(gMean) {
  if (!isNumber(gMean) || gMean < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const p = 1 / (gMean + 1);
  const qToGbetween = (q) => geomInvCdfReal(q, p) - 1;
  const cl = qToGbetween(0.5);
  const lcl = Math.max(0, qToGbetween(SIGMA_PROBS.three.low));
  const ucl = qToGbetween(SIGMA_PROBS.three.high);
  const oneL = Math.max(0, qToGbetween(SIGMA_PROBS.one.low));
  const oneH = qToGbetween(SIGMA_PROBS.one.high);
  const twoL = Math.max(0, qToGbetween(SIGMA_PROBS.two.low));
  const twoH = qToGbetween(SIGMA_PROBS.two.high);
  return { cl, lcl, ucl, oneLow: oneL, oneHigh: oneH, twoLow: twoL, twoHigh: twoH };
}
function tChartLimits(tValues, ghosts, excludeOutliers) {
  const y2 = tValues.map((v) => isNumber(v) ? toTTransformed(v) : null);
  const mrY = movingRanges(y2, ghosts);
  const { mrMean: mrMeanY_raw } = mrMeanWithOptionalExclusion(mrY, !!excludeOutliers);
  const yNonGhost = y2.filter((v, i) => !ghosts[i] && isNumber(v));
  const yBar = yNonGhost.length ? mean(yNonGhost) : NaN;
  if (!isNumber(yBar) || !isNumber(mrMeanY_raw)) {
    return {
      center: null,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null,
      mr: mrY,
      mrMean: null,
      mrUcl: null
    };
  }
  const k3 = 2.66, k2 = 2 / 3 * k3, k1 = 1 / 3 * k3;
  const UL_y = yBar + k3 * mrMeanY_raw;
  const LL_y = yBar - k3 * mrMeanY_raw;
  const U2_y = yBar + k2 * mrMeanY_raw;
  const L2_y = yBar - k2 * mrMeanY_raw;
  const U1_y = yBar + k1 * mrMeanY_raw;
  const L1_y = yBar - k1 * mrMeanY_raw;
  const center = fromTTransformed(yBar);
  const upl = fromTTransformed(UL_y);
  const lpl = LL_y <= 0 ? null : fromTTransformed(LL_y);
  const oneH = fromTTransformed(U1_y);
  const oneL = L1_y <= 0 ? null : fromTTransformed(L1_y);
  const twoH = fromTTransformed(U2_y);
  const twoL = L2_y <= 0 ? null : fromTTransformed(L2_y);
  return {
    center: center != null ? center : null,
    upperProcessLimit: upl != null ? upl : null,
    lowerProcessLimit: lpl != null ? lpl : null,
    upperTwoSigma: twoH != null ? twoH : null,
    lowerTwoSigma: twoL != null ? twoL : null,
    upperOneSigma: oneH != null ? oneH : null,
    lowerOneSigma: oneL != null ? oneL : null,
    mr: mrY,
    mrMean: mrMeanY_raw,
    mrUcl: isNumber(mrMeanY_raw) ? 3.267 * mrMeanY_raw : null
  };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcAssurance.ts
function computeAssuranceIcon(args) {
  const {
    metricImprovement,
    capabilityMode,
    value,
    mean: mean3,
    upperProcessLimit,
    lowerProcessLimit,
    target
  } = args;
  const isNumber3 = (v) => typeof v === "number" && Number.isFinite(v);
  if (!isNumber3(value) || mean3 === null || !isNumber3(target)) return "none" /* None */;
  if (capabilityMode && isNumber3(upperProcessLimit) && isNumber3(lowerProcessLimit)) {
    if (metricImprovement === "Up" /* Up */) {
      if (isNumber3(lowerProcessLimit) && lowerProcessLimit > target)
        return "pass" /* Pass */;
      if (isNumber3(upperProcessLimit) && upperProcessLimit < target)
        return "fail" /* Fail */;
      return "none" /* None */;
    }
    if (metricImprovement === "Down" /* Down */) {
      if (isNumber3(upperProcessLimit) && upperProcessLimit < target)
        return "pass" /* Pass */;
      if (isNumber3(lowerProcessLimit) && lowerProcessLimit > target)
        return "fail" /* Fail */;
      return "none" /* None */;
    }
    return "none" /* None */;
  }
  if (metricImprovement === "Down" /* Down */)
    return value <= target ? "pass" /* Pass */ : "fail" /* Fail */;
  if (metricImprovement === "Up" /* Up */)
    return value >= target ? "pass" /* Pass */ : "fail" /* Fail */;
  return "none" /* None */;
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcCandidates.ts
function computeBaselineSuggestionsRaw(rows, params) {
  const {
    W,
    minGap,
    minDeltaSigma,
    scoreThreshold,
    isShiftUpAt,
    isShiftDownAt,
    isTrendUpAt,
    isTrendDownAt,
    isSingleUpAt,
    isSingleDownAt
  } = params;
  const suggestions = [];
  let lastBaselineIndex = 0;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (i > 0 && rows[i - 1].partitionId !== r.partitionId) {
      lastBaselineIndex = i;
    }
    const wasShiftUp = i > 0 && isShiftUpAt(i - 1);
    const wasShiftDown = i > 0 && isShiftDownAt(i - 1);
    const wasTrendUp = i > 0 && isTrendUpAt(i - 1);
    const wasTrendDown = i > 0 && isTrendDownAt(i - 1);
    const wasSingleUp = i > 0 && isSingleUpAt(i - 1);
    const wasSingleDown = i > 0 && isSingleDownAt(i - 1);
    const isShiftUp = isShiftUpAt(i);
    const isShiftDown = isShiftDownAt(i);
    const isTrendUp = isTrendUpAt(i);
    const isTrendDown = isTrendDownAt(i);
    const isSingleUp = isSingleUpAt(i);
    const isSingleDown = isSingleDownAt(i);
    const candidates = [];
    if (isShiftUp && !wasShiftUp) candidates.push({ reason: "shift" /* Shift */, index: i });
    if (isShiftDown && !wasShiftDown) candidates.push({ reason: "shift" /* Shift */, index: i });
    if (isTrendUp && !wasTrendUp) candidates.push({ reason: "trend" /* Trend */, index: i });
    if (isTrendDown && !wasTrendDown) candidates.push({ reason: "trend" /* Trend */, index: i });
    if (isSingleUp && !wasSingleUp) candidates.push({ reason: "point" /* Point */, index: i });
    if (isSingleDown && !wasSingleDown) candidates.push({ reason: "point" /* Point */, index: i });
    for (const c of candidates) {
      if (c.index - lastBaselineIndex < minGap) continue;
      const oldStart = Math.max(0, c.index - W);
      const oldEnd = c.index - 1;
      if (oldEnd - oldStart + 1 < W) continue;
      const newStart = c.index;
      const newEnd = c.index + W - 1;
      if (newEnd >= rows.length) continue;
      const oldVals = rows.slice(oldStart, oldEnd + 1).map((rw) => rw.value).filter(
        (v) => typeof v === "number" && Number.isFinite(v)
      );
      const newVals = rows.slice(newStart, newEnd + 1).map((rw) => rw.value).filter(
        (v) => typeof v === "number" && Number.isFinite(v)
      );
      if (oldVals.length < W || newVals.length < W) continue;
      const cand = rows[c.index];
      let sigma = null;
      if (typeof cand.upperProcessLimit === "number" && typeof cand.mean === "number") {
        const span = cand.upperProcessLimit - cand.mean;
        if (span > 0) sigma = span / 3;
      }
      if (!sigma || sigma <= 0) continue;
      const oldMean = mean(oldVals);
      const newMean = mean(newVals);
      const deltaMean = newMean - oldMean;
      if (Math.abs(deltaMean) < minDeltaSigma * sigma) continue;
      const newRows = rows.slice(newStart, newEnd + 1);
      const concernCount = newRows.filter(
        (rw) => rw.variationIcon === "concern" /* Concern */
      ).length;
      if (concernCount > 1) continue;
      const variance = (arr) => {
        const m = mean(arr);
        return arr.length ? arr.reduce((a, b) => a + (b - m) * (b - m), 0) / arr.length : 0;
      };
      const oldVar = variance(oldVals);
      const newVar = variance(newVals);
      let scoreBase = c.reason === "shift" /* Shift */ ? 90 : c.reason === "trend" /* Trend */ ? 70 : 60;
      if (newVar < oldVar) scoreBase += 10;
      scoreBase -= concernCount * 15;
      if (scoreBase < scoreThreshold) continue;
      const existing = suggestions.find((s) => s.index === c.index);
      if (existing) {
        const priority = (reason) => reason === "shift" /* Shift */ ? 3 : reason === "trend" /* Trend */ ? 2 : 1;
        if (priority(c.reason) > priority(existing.reason) || scoreBase > existing.score) {
          existing.reason = c.reason;
          existing.score = scoreBase;
          existing.deltaMean = deltaMean;
          existing.oldMean = oldMean;
          existing.newMean = newMean;
          existing.window = [newStart, newEnd];
        }
      } else {
        suggestions.push({
          index: c.index,
          reason: c.reason,
          score: scoreBase,
          deltaMean,
          oldMean,
          newMean,
          window: [newStart, newEnd]
        });
      }
    }
  }
  suggestions.sort((a, b) => a.index - b.index);
  return suggestions;
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic/spc.ts
function isPhase4Strict() {
  var _a2;
  const g = globalThis;
  if (typeof g.__SPC_PHASE4_STRICT !== "undefined") return !!g.__SPC_PHASE4_STRICT;
  if (typeof process !== "undefined") {
    const v = (_a2 = process == null ? void 0 : process.env) == null ? void 0 : _a2.SPC_PHASE4_STRICT;
    if (typeof v !== "undefined") {
      const s = String(v).toLowerCase();
      if (s === "1" || s === "true") return true;
      if (s === "0" || s === "false") return false;
    }
  }
  return true;
}
var SpcWarningSeverity = /* @__PURE__ */ ((SpcWarningSeverity2) => {
  SpcWarningSeverity2["Info"] = "info";
  SpcWarningSeverity2["Warning"] = "warning";
  SpcWarningSeverity2["Error"] = "error";
  return SpcWarningSeverity2;
})(SpcWarningSeverity || {});
var SpcWarningCategory = /* @__PURE__ */ ((SpcWarningCategory3) => {
  SpcWarningCategory3["Config"] = "config";
  SpcWarningCategory3["Data"] = "data";
  SpcWarningCategory3["Limits"] = "limits";
  SpcWarningCategory3["SpecialCause"] = "special_cause";
  SpcWarningCategory3["Baseline"] = "baseline";
  SpcWarningCategory3["Logic"] = "logic";
  SpcWarningCategory3["Target"] = "target";
  SpcWarningCategory3["Ghost"] = "ghost";
  SpcWarningCategory3["Partition"] = "partition";
  return SpcWarningCategory3;
})(SpcWarningCategory || {});
var SpcWarningCode = /* @__PURE__ */ ((SpcWarningCode3) => {
  SpcWarningCode3["UnknownChartType"] = "unknown_chart_type";
  SpcWarningCode3["InsufficientPointsGlobal"] = "insufficient_points_global";
  SpcWarningCode3["VariationConflictRow"] = "variation_conflict_row";
  SpcWarningCode3["NullValuesExcluded"] = "null_values_excluded";
  SpcWarningCode3["TargetIgnoredRareEvent"] = "target_ignored_rare_event";
  SpcWarningCode3["GhostRowsRareEvent"] = "ghost_rows_rare_event";
  SpcWarningCode3["InsufficientPointsPartition"] = "insufficient_points_partition";
  SpcWarningCode3["BaselineWithSpecialCause"] = "baseline_with_special_cause";
  SpcWarningCode3["PartitionCapApplied"] = "partition_cap_applied";
  SpcWarningCode3["GlobalCapApplied"] = "global_cap_applied";
  return SpcWarningCode3;
})(SpcWarningCode || {});
function getDirectionalSignalSummary(row) {
  const upRules = [];
  const downRules = [];
  if (row.specialCauseSinglePointUp) upRules.push("single_point" /* SinglePoint */);
  if (row.specialCauseSinglePointDown) downRules.push("single_point" /* SinglePoint */);
  if (row.specialCauseTwoOfThreeUp) upRules.push("two_sigma" /* TwoSigma */);
  if (row.specialCauseTwoOfThreeDown) downRules.push("two_sigma" /* TwoSigma */);
  if (row.specialCauseShiftUp) upRules.push("shift" /* Shift */);
  if (row.specialCauseShiftDown) downRules.push("shift" /* Shift */);
  if (row.specialCauseTrendUp) upRules.push("trend" /* Trend */);
  if (row.specialCauseTrendDown) downRules.push("trend" /* Trend */);
  const upMax = upRules.reduce((m, id) => Math.max(m, RULE_METADATA[id].rank), 0);
  const downMax = downRules.reduce((m, id) => Math.max(m, RULE_METADATA[id].rank), 0);
  return { upRules, downRules, upMax, downMax, hasUp: upRules.length > 0, hasDown: downRules.length > 0 };
}
function partitionRows(data) {
  const partitions = [];
  let current = [];
  for (const row of data) {
    if (row.baseline && current.length) {
      partitions.push(current);
      current = [];
    }
    current.push(row);
  }
  if (current.length) partitions.push(current);
  return partitions;
}
function applyAutoRecalculationBaselines(data, settings, metricImprovement) {
  var _a2;
  const shiftN = settings.autoRecalculateShiftLength || settings.specialCauseShiftPoints || 6;
  if (data.length < shiftN * 2) return;
  const numeric = data.map((r, i) => ({ idx: i, value: r.value })).filter((o) => isNumber(o.value));
  if (numeric.length < shiftN * 2) return;
  const favourUp = metricImprovement === "Up" /* Up */ || metricImprovement === "Neither" /* Neither */;
  const favourDown = metricImprovement === "Down" /* Down */;
  function windowMean(from, toExclusive) {
    const slice2 = numeric.slice(from, toExclusive).map((o) => o.value);
    return slice2.length ? mean(slice2) : NaN;
  }
  let sigma = null;
  if (numeric.length > 1) {
    const diffs = [];
    for (let i = 1; i < numeric.length; i++) diffs.push(Math.abs(numeric[i].value - numeric[i - 1].value));
    const mrBar = mean(diffs);
    if (isNumber(mrBar) && mrBar > 0) sigma = mrBar * (2.66 / 3);
  }
  if (!sigma || sigma <= 0) return;
  const deltaThreshold = (_a2 = settings.autoRecalculateDeltaSigma) != null ? _a2 : 0.5;
  for (let start = shiftN; start <= numeric.length - shiftN; start++) {
    const preStart = start - shiftN;
    const preMean = windowMean(preStart, start);
    const postMean = windowMean(start, start + shiftN);
    if (!isNumber(preMean) || !isNumber(postMean)) continue;
    const delta = postMean - preMean;
    const deltaSigma = delta / sigma;
    const favourable = favourUp ? deltaSigma >= deltaThreshold : favourDown ? -deltaSigma >= deltaThreshold : Math.abs(deltaSigma) >= deltaThreshold;
    if (!favourable) continue;
    const postVals = numeric.slice(start, start + shiftN).map((o) => o.value);
    const directional = favourUp ? postVals.every((v) => v > preMean) : favourDown ? postVals.every((v) => v < preMean) : postVals.every((v) => favourUp ? v > preMean : v < preMean);
    if (!directional) continue;
    const baselineIdx = numeric[start].idx;
    if (!data[baselineIdx].baseline) {
      data[baselineIdx].baseline = true;
    }
    return;
  }
}
function normaliseSpcSettings(user) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S;
  if (!user) return {};
  const legacy = user;
  const v2 = user;
  const rules = (_a2 = v2.rules) != null ? _a2 : {};
  const precedence = (_b2 = v2.precedence) != null ? _b2 : {};
  const thresholds = (_c = v2.thresholds) != null ? _c : {};
  const warnings = (_d = v2.warnings) != null ? _d : {};
  const rareEvent = (_e = v2.rareEvent) != null ? _e : {};
  const capability = (_f = v2.capability) != null ? _f : {};
  const grace = (_g = v2.grace) != null ? _g : {};
  const baselineSuggest = (_h = v2.baselineSuggest) != null ? _h : {};
  const autoRecalc = (_i = v2.autoRecalc) != null ? _i : {};
  const emergingGraceEnabled = (_l = (_k = (_j = grace.emergingEnabled) != null ? _j : v2.emergingGraceEnabled) != null ? _k : legacy.emergingGraceEnabled) != null ? _l : legacy.emergingDirectionGrace;
  const collapseWeakerClusterRules = (_o = (_n = (_m = rules.collapseWeakerClusterRules) != null ? _m : v2.collapseWeakerClusterRules) != null ? _n : legacy.collapseWeakerClusterRules) != null ? _o : legacy.collapseClusterRules;
  if (isPhase4Strict()) {
    if (legacy.emergingDirectionGrace !== void 0) {
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    }
    if (legacy.collapseClusterRules !== void 0) {
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
    }
  }
  const globalAny = globalThis;
  if (!isPhase4Strict() && legacy.emergingDirectionGrace !== void 0 && v2.emergingGraceEnabled === void 0 && grace.emergingEnabled === void 0 && !globalAny.__spc_warn_emergingDirectionGrace) {
    globalAny.__spc_warn_emergingDirectionGrace = true;
    console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled");
  }
  if (!isPhase4Strict() && legacy.collapseClusterRules !== void 0 && rules.collapseWeakerClusterRules === void 0 && v2.collapseWeakerClusterRules === void 0 && !globalAny.__spc_warn_collapseClusterRules) {
    globalAny.__spc_warn_collapseClusterRules = true;
    console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules");
  }
  const pruneUndefined = (obj) => {
    const out = {};
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      if (v !== void 0) out[k] = v;
    }
    return out;
  };
  const flattened = pruneUndefined({
    // Rare event / MR
    excludeMovingRangeOutliers: (_p = rareEvent.excludeMovingRangeOutliers) != null ? _p : legacy.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: (_q = rules.shiftPoints) != null ? _q : legacy.specialCauseShiftPoints,
    specialCauseTrendPoints: (_r = rules.trendPoints) != null ? _r : legacy.specialCauseTrendPoints,
    enableFourOfFiveRule: (_s = rules.fourOfFiveEnabled) != null ? _s : legacy.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: (_t = rules.fifteenInnerThirdEnabled) != null ? _t : legacy.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: collapseWeakerClusterRules != null ? collapseWeakerClusterRules : legacy.collapseWeakerClusterRules,
    // Precedence
    precedenceStrategy: (_u = precedence.strategy) != null ? _u : legacy.precedenceStrategy,
    conflictPrecedenceMode: (_v = precedence.conflictMode) != null ? _v : legacy.conflictPrecedenceMode,
    // Thresholds
    minimumPoints: (_w = thresholds.minimumPoints) != null ? _w : legacy.minimumPoints,
    minimumPointsPartition: (_x = thresholds.minimumPointsPartition) != null ? _x : legacy.minimumPointsPartition,
    maximumPointsPartition: (_y = thresholds.maximumPointsPartition) != null ? _y : legacy.maximumPointsPartition,
    maximumPoints: (_z = thresholds.maximumPoints) != null ? _z : legacy.maximumPoints,
    transitionBufferPoints: (_A = thresholds.transitionBufferPoints) != null ? _A : legacy.transitionBufferPoints,
    // Warnings
    minimumPointsWarning: (_B = warnings.minimumPointsWarning) != null ? _B : legacy.minimumPointsWarning,
    pointConflictWarning: (_C = warnings.pointConflictWarning) != null ? _C : legacy.pointConflictWarning,
    variationIconConflictWarning: (_D = warnings.variationIconConflictWarning) != null ? _D : legacy.variationIconConflictWarning,
    nullValueWarning: (_E = warnings.nullValueWarning) != null ? _E : legacy.nullValueWarning,
    targetSuppressedWarning: (_F = warnings.targetSuppressedWarning) != null ? _F : legacy.targetSuppressedWarning,
    ghostOnRareEventWarning: (_G = warnings.ghostOnRareEventWarning) != null ? _G : legacy.ghostOnRareEventWarning,
    partitionSizeWarnings: (_H = warnings.partitionSizeWarnings) != null ? _H : legacy.partitionSizeWarnings,
    baselineSpecialCauseWarning: (_I = warnings.baselineSpecialCauseWarning) != null ? _I : legacy.baselineSpecialCauseWarning,
    maximumPointsWarnings: (_J = warnings.maximumPointsWarnings) != null ? _J : legacy.maximumPointsWarnings,
    // Capability
    assuranceCapabilityMode: (_K = capability.assuranceCapabilityMode) != null ? _K : legacy.assuranceCapabilityMode,
    // Grace
    emergingGraceEnabled,
    emergingDirectionGrace: emergingGraceEnabled,
    // Baseline suggestions
    baselineSuggest: (_L = baselineSuggest.enabled) != null ? _L : legacy.baselineSuggest,
    baselineSuggestMinDeltaSigma: (_M = baselineSuggest.minDeltaSigma) != null ? _M : legacy.baselineSuggestMinDeltaSigma,
    baselineSuggestStabilityPoints: (_N = baselineSuggest.stabilityPoints) != null ? _N : legacy.baselineSuggestStabilityPoints,
    baselineSuggestMinGap: (_O = baselineSuggest.minGap) != null ? _O : legacy.baselineSuggestMinGap,
    baselineSuggestScoreThreshold: (_P = baselineSuggest.scoreThreshold) != null ? _P : legacy.baselineSuggestScoreThreshold,
    // Auto recalculation
    autoRecalculateAfterShift: (_Q = autoRecalc.enabled) != null ? _Q : legacy.autoRecalculateAfterShift,
    autoRecalculateShiftLength: (_R = autoRecalc.shiftLength) != null ? _R : legacy.autoRecalculateShiftLength,
    autoRecalculateDeltaSigma: (_S = autoRecalc.deltaSigma) != null ? _S : legacy.autoRecalculateDeltaSigma
  });
  const merged = { ...flattened, ...pruneUndefined(legacy) };
  if (emergingGraceEnabled !== void 0) {
    merged.emergingGraceEnabled = emergingGraceEnabled;
    merged.grace = { ...merged.grace, emergingEnabled: emergingGraceEnabled };
  }
  if (flattened.collapseWeakerClusterRules !== void 0) {
    const v = flattened.collapseWeakerClusterRules;
    merged.collapseWeakerClusterRules = v;
    merged.rules = { ...merged.rules, collapseWeakerClusterRules: v };
  }
  return pruneUndefined(merged);
}
function buildSpc(args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  const {
    chartType,
    metricImprovement,
    data,
    settings: rawUserSettings = {}
  } = args;
  const userSettings = normaliseSpcSettings(rawUserSettings);
  const settings = {
    excludeMovingRangeOutliers: false,
    specialCauseShiftPoints: 6,
    specialCauseTrendPoints: 6,
    enableFourOfFiveRule: false,
    minimumPoints: 13,
    minimumPointsWarning: false,
    minimumPointsPartition: 12,
    maximumPointsPartition: null,
    maximumPoints: null,
    pointConflictWarning: false,
    variationIconConflictWarning: true,
    nullValueWarning: true,
    targetSuppressedWarning: true,
    ghostOnRareEventWarning: true,
    partitionSizeWarnings: true,
    baselineSpecialCauseWarning: true,
    maximumPointsWarnings: true,
    assuranceCapabilityMode: true,
    transitionBufferPoints: 2,
    collapseWeakerClusterRules: true,
    baselineSuggest: false,
    baselineSuggestMinDeltaSigma: 0.5,
    baselineSuggestStabilityPoints: 5,
    baselineSuggestMinGap: 12,
    baselineSuggestScoreThreshold: 50,
    precedenceStrategy: "directional_first" /* DirectionalFirst */,
    emergingDirectionGrace: false,
    rules: {},
    grace: {},
    // REMOVED: trendSideGatingEnabled default (always on)
    autoRecalculateAfterShift: false,
    autoRecalculateShiftLength: void 0,
    autoRecalculateDeltaSigma: 0.5,
    ...userSettings
  };
  if (!Array.isArray(data)) throw new Error("data must be an array of rows");
  const canonical = data.map((d, i) => ({
    rowId: i + 1,
    x: d.x,
    value: isNumber(d.value) ? d.value : null,
    ghost: !!d.ghost,
    baseline: !!d.baseline,
    target: isNumber(d.target) ? d.target : null
  }));
  if (userSettings == null ? void 0 : userSettings.autoRecalculateAfterShift) {
    try {
      applyAutoRecalculationBaselines(canonical, userSettings, metricImprovement);
    } catch {
    }
  }
  const partitions = partitionRows(canonical);
  const output = [];
  const warnings = [];
  const nonGhostGlobalCount = canonical.filter(
    (r) => !r.ghost && isNumber(r.value)
  ).length;
  const globalEnough = nonGhostGlobalCount >= ((_a2 = settings.minimumPoints) != null ? _a2 : 13);
  let partitionId = 0;
  const partitionNonGhostCounts = {};
  for (const part of partitions) {
    partitionId++;
    const values = part.map((r) => r.value);
    const ghosts = part.map((r) => r.ghost);
    let mr = new Array(values.length).fill(null);
    let centerLine = NaN;
    let mrMean = NaN;
    let mrUcl = NaN;
    let lim = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (chartType === "XmR") {
      mr = movingRanges(values, ghosts);
      const nonGhostVals = values.filter(
        (v, i) => !ghosts[i] && isNumber(v)
      );
      centerLine = nonGhostVals.length ? mean(nonGhostVals) : NaN;
      const tmp = mrMeanWithOptionalExclusion(
        mr,
        !!settings.excludeMovingRangeOutliers
      );
      mrMean = tmp.mrMean;
      mrUcl = tmp.mrUcl;
      lim = xmrLimits(centerLine, mrMean);
    } else if (chartType === "T") {
      const tlim = tChartLimits(
        values,
        ghosts,
        !!settings.excludeMovingRangeOutliers
      );
      mr = tlim.mr;
      mrMean = (_b2 = tlim.mrMean) != null ? _b2 : NaN;
      mrUcl = (_c = tlim.mrUcl) != null ? _c : NaN;
      centerLine = (_d = tlim.center) != null ? _d : NaN;
      lim = {
        upperProcessLimit: tlim.upperProcessLimit,
        lowerProcessLimit: tlim.lowerProcessLimit,
        upperTwoSigma: tlim.upperTwoSigma,
        lowerTwoSigma: tlim.lowerTwoSigma,
        upperOneSigma: tlim.upperOneSigma,
        lowerOneSigma: tlim.lowerOneSigma
      };
    } else if (chartType === "G") {
      const nonGhostVals = values.filter(
        (v, i) => !ghosts[i] && isNumber(v)
      );
      const gMean = nonGhostVals.length ? mean(nonGhostVals) : NaN;
      const g = gChartProbabilityLimits(gMean);
      centerLine = (_e = g.cl) != null ? _e : NaN;
      lim = {
        upperProcessLimit: g.ucl,
        lowerProcessLimit: g.lcl,
        upperTwoSigma: g.twoHigh,
        lowerTwoSigma: g.twoLow,
        upperOneSigma: g.oneHigh,
        lowerOneSigma: g.oneLow
      };
      mr = new Array(values.length).fill(null);
      mrMean = NaN;
      mrUcl = NaN;
    } else {
      warnings.push({
        code: "unknown_chart_type" /* UnknownChartType */,
        category: "config" /* Config */,
        severity: "error" /* Error */,
        message: `Unknown ChartType '${chartType}' \u2013 supported: XmR, T, G.`,
        context: { chartType }
      });
    }
    const withLines = part.map((r, i) => {
      const pointRank = !r.ghost && isNumber(r.value) ? values.slice(0, i + 1).filter((v, j) => !ghosts[j] && isNumber(v)).length : 0;
      const limitsAllowed = globalEnough;
      const limits = limitsAllowed ? lim : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      const row = {
        rowId: r.rowId,
        x: r.x,
        value: isNumber(r.value) ? r.value : null,
        ghost: r.ghost,
        partitionId,
        pointRank,
        mean: limitsAllowed && isNumber(centerLine) ? centerLine : null,
        mr: isNumber(mr[i]) ? mr[i] : null,
        mrMean: limitsAllowed && isNumber(mrMean) ? mrMean : null,
        mrUcl: limitsAllowed && isNumber(mrUcl) ? mrUcl : null,
        upperProcessLimit: isNumber(limits.upperProcessLimit) ? limits.upperProcessLimit : null,
        lowerProcessLimit: isNumber(limits.lowerProcessLimit) ? limits.lowerProcessLimit : null,
        upperTwoSigma: isNumber(limits.upperTwoSigma) ? limits.upperTwoSigma : null,
        lowerTwoSigma: isNumber(limits.lowerTwoSigma) ? limits.lowerTwoSigma : null,
        upperOneSigma: isNumber(limits.upperOneSigma) ? limits.upperOneSigma : null,
        lowerOneSigma: isNumber(limits.lowerOneSigma) ? limits.lowerOneSigma : null,
        target: isNumber(r.target) ? r.target : null,
        specialCauseFifteenInnerThird: false,
        // Unified directional alias initialisers (kept in sync post-detection)
        specialCauseSinglePointUp: false,
        specialCauseSinglePointDown: false,
        specialCauseTwoOfThreeUp: false,
        specialCauseTwoOfThreeDown: false,
        specialCauseFourOfFiveUp: false,
        specialCauseFourOfFiveDown: false,
        specialCauseShiftUp: false,
        specialCauseShiftDown: false,
        specialCauseTrendUp: false,
        specialCauseTrendDown: false,
        variationIcon: "suppressed" /* Suppressed */,
        assuranceIcon: "none" /* None */,
        upperBaseline: limitsAllowed && isNumber(centerLine) ? centerLine : null,
        lowerBaseline: limitsAllowed && isNumber(centerLine) ? centerLine : null,
        movingRangeHighPointValue: limitsAllowed && isNumber(mrUcl) ? mrUcl : null,
        ghostValue: r.ghost && isNumber(r.value) ? r.value : null,
        ghostFlag: !!r.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
      return row;
    });
    partitionNonGhostCounts[partitionId] = withLines.filter(
      (r) => !r.ghost && isNumber(r.value)
    ).length;
    const shiftN = (_f = settings.specialCauseShiftPoints) != null ? _f : 6;
    const trendN = (_g = settings.specialCauseTrendPoints) != null ? _g : 6;
    const nonGhostIndices = [];
    const nonGhostValues = [];
    for (let i = 0; i < withLines.length; i++) {
      const row = withLines[i];
      const v = row.value;
      if (!row.ghost && isNumber(v)) {
        nonGhostIndices.push(i);
        nonGhostValues.push(v);
      }
      const hasLimits = isNumber(row.mean) && isNumber(row.upperProcessLimit) && isNumber(row.lowerProcessLimit);
      if (!hasLimits || row.ghost || !isNumber(v)) {
        output.push(row);
        continue;
      }
      row.specialCauseSinglePointUp = isNumber(row.upperProcessLimit) ? v > row.upperProcessLimit : false;
      row.specialCauseSinglePointDown = isNumber(row.lowerProcessLimit) ? v < row.lowerProcessLimit : false;
      output.push(row);
    }
    if (nonGhostIndices.length) {
      const getRow = (idx) => withLines[idx];
      let runHigh = [];
      let runLow = [];
      for (const idxLocal of nonGhostIndices) {
        const r = getRow(idxLocal);
        if (!isNumber(r.mean) || !isNumber(r.value)) {
          runHigh = [];
          runLow = [];
          continue;
        }
        if (r.value > r.mean) {
          runHigh.push(idxLocal);
          runLow = [];
        } else if (r.value < r.mean) {
          runLow.push(idxLocal);
          runHigh = [];
        } else {
          runHigh = [];
          runLow = [];
        }
        if (runHigh.length >= shiftN) {
          for (const j of runHigh) {
            const rr = getRow(j);
            rr.specialCauseShiftUp = true;
          }
        }
        if (runLow.length >= shiftN) {
          for (const j of runLow) {
            const rr = getRow(j);
            rr.specialCauseShiftDown = true;
          }
        }
      }
      for (let w = 0; w <= nonGhostIndices.length - 3; w++) {
        const windowIdx = nonGhostIndices.slice(w, w + 3);
        const rows3 = windowIdx.map(getRow);
        if (!rows3.every((r) => isNumber(r.mean) && isNumber(r.value))) continue;
        const meanVal = rows3[0].mean;
        const allHighSide = rows3.every((r) => r.value > meanVal);
        const allLowSide = rows3.every((r) => r.value < meanVal);
        if (!allHighSide && !allLowSide) continue;
        const u2 = (_h = rows3[0].upperTwoSigma) != null ? _h : Infinity;
        const l2 = (_i = rows3[0].lowerTwoSigma) != null ? _i : -Infinity;
        const u3 = (_j = rows3[0].upperProcessLimit) != null ? _j : Infinity;
        const l3 = (_k = rows3[0].lowerProcessLimit) != null ? _k : -Infinity;
        const highExceed = rows3.filter((r) => r.value > u2 && r.value <= u3);
        const lowExceed = rows3.filter((r) => r.value < l2 && r.value >= l3);
        if (allHighSide && highExceed.length >= 2) {
          for (const r of highExceed) {
            r.specialCauseTwoOfThreeUp = true;
          }
        }
        if (allLowSide && lowExceed.length >= 2) {
          for (const r of lowExceed) {
            r.specialCauseTwoOfThreeDown = true;
          }
        }
      }
      if (settings.enableFourOfFiveRule) {
        for (let w = 0; w <= nonGhostIndices.length - 5; w++) {
          const windowIdx = nonGhostIndices.slice(w, w + 5);
          const rows5 = windowIdx.map(getRow);
          if (!rows5.every((r) => isNumber(r.mean) && isNumber(r.value))) continue;
          const meanVal = rows5[0].mean;
          if (!rows5.every((r) => r.value > meanVal) && !rows5.every((r) => r.value < meanVal)) continue;
          const u1 = (_l = rows5[0].upperOneSigma) != null ? _l : Infinity;
          const l1 = (_m = rows5[0].lowerOneSigma) != null ? _m : -Infinity;
          const highExceed = rows5.filter((r) => r.value > u1);
          const lowExceed = rows5.filter((r) => r.value < l1);
          if (rows5.every((r) => r.value > meanVal) && highExceed.length >= 4) {
            for (const r of highExceed) {
              r.specialCauseFourOfFiveUp = true;
            }
          }
          if (rows5.every((r) => r.value < meanVal) && lowExceed.length >= 4) {
            for (const r of lowExceed) {
              r.specialCauseFourOfFiveDown = true;
            }
          }
        }
      }
      for (let w = 0; w <= nonGhostIndices.length - trendN; w++) {
        const windowIdx = nonGhostIndices.slice(w, w + trendN);
        const rowsN = windowIdx.map(getRow);
        if (!rowsN.every((r) => isNumber(r.value))) continue;
        let inc = true;
        let dec = true;
        for (let k = 1; k < rowsN.length; k++) {
          if (!(rowsN[k].value > rowsN[k - 1].value)) inc = false;
          if (!(rowsN[k].value < rowsN[k - 1].value)) dec = false;
          if (!inc && !dec) break;
        }
        if (inc) for (const j of windowIdx) {
          const rr = getRow(j);
          rr.specialCauseTrendUp = true;
        }
        if (dec) for (const j of windowIdx) {
          const rr = getRow(j);
          rr.specialCauseTrendDown = true;
        }
      }
      if (settings.enableFifteenInInnerThirdRule) {
        let innerRun = [];
        for (const idxLocal of nonGhostIndices) {
          const r = getRow(idxLocal);
          if (!isNumber(r.value) || !isNumber(r.mean) || !isNumber(r.upperOneSigma) || !isNumber(r.lowerOneSigma)) {
            innerRun = [];
            continue;
          }
          const inBand = r.value < r.upperOneSigma && r.value > r.lowerOneSigma;
          if (!inBand) {
            innerRun = [];
            continue;
          }
          innerRun.push(idxLocal);
          if (innerRun.length >= 15) {
            const rowsRun = innerRun.map(getRow);
            const anyAbove = rowsRun.some((rr) => rr.value > rr.mean);
            const anyBelow = rowsRun.some((rr) => rr.value < rr.mean);
            if (anyAbove && anyBelow) {
              for (const j of innerRun) getRow(j).specialCauseFifteenInnerThird = true;
            }
          }
        }
      }
    }
    if (settings.maximumPointsPartition && Number.isFinite(settings.maximumPointsPartition)) {
      const cap = settings.maximumPointsPartition;
      let seen = 0;
      for (const row of output.filter((r) => r.partitionId === partitionId)) {
        if (!row.ghost && isNumber(row.value)) seen++;
        if (seen > cap) {
          row.mean = row.upperProcessLimit = row.lowerProcessLimit = null;
          row.upperTwoSigma = row.lowerTwoSigma = row.upperOneSigma = row.lowerOneSigma = null;
        }
      }
    }
  }
  for (const r of output) {
    if (r.ruleTags && r.ruleTags.length) continue;
    const tags = [];
    if (r.specialCauseShiftUp) tags.push("shift_high" /* ShiftHigh */);
    if (r.specialCauseShiftDown) tags.push("shift_low" /* ShiftLow */);
    if (r.specialCauseTrendUp) tags.push("trend_inc" /* TrendIncreasing */);
    if (r.specialCauseTrendDown) tags.push("trend_dec" /* TrendDecreasing */);
    if (r.specialCauseSinglePointUp) tags.push("single_above" /* SinglePointAbove */);
    if (r.specialCauseSinglePointDown) tags.push("single_below" /* SinglePointBelow */);
    if (r.specialCauseTwoOfThreeUp) tags.push("two_of_three_above" /* TwoOfThreeAbove */);
    if (r.specialCauseTwoOfThreeDown) tags.push("two_of_three_below" /* TwoOfThreeBelow */);
    if (r.specialCauseFourOfFiveUp) tags.push("four_of_five_above" /* FourOfFiveAbove */);
    if (r.specialCauseFourOfFiveDown) tags.push("four_of_five_below" /* FourOfFiveBelow */);
    if (r.specialCauseFifteenInnerThird) tags.push("fifteen_inner_third" /* FifteenInnerThird */);
    if (tags.length) r.ruleTags = tags;
  }
  for (let idx = 0; idx < output.length; idx++) {
    const row = output[idx];
    if (!Object.prototype.hasOwnProperty.call(row, "improvementValueBeforePruning" /* ImprovementValueBeforePruning */)) {
      Object.defineProperty(row, "improvementValueBeforePruning" /* ImprovementValueBeforePruning */, {
        get() {
          var _a3;
          return (_a3 = row.originalSpecialCauseImprovementValue) != null ? _a3 : null;
        },
        enumerable: false,
        configurable: true
      });
    }
    if (!Object.prototype.hasOwnProperty.call(row, "concernValueBeforePruning" /* ConcernValueBeforePruning */)) {
      Object.defineProperty(row, "concernValueBeforePruning" /* ConcernValueBeforePruning */, {
        get() {
          var _a3;
          return (_a3 = row.originalSpecialCauseConcernValue) != null ? _a3 : null;
        },
        enumerable: false,
        configurable: true
      });
    }
    if (row.ghost || !isNumber(row.value) || row.mean === null) {
      row.variationIcon = "suppressed" /* Suppressed */;
      continue;
    }
    const onHighSide = row.value > row.mean;
    const onLowSide = row.value < row.mean;
    if ((_n = settings.rules) == null ? void 0 : _n.collapseWeakerClusterRules) {
      if (row.specialCauseTwoOfThreeUp && row.specialCauseFourOfFiveUp) {
        row.specialCauseTwoOfThreeUp = false;
      }
      if (row.specialCauseTwoOfThreeDown && row.specialCauseFourOfFiveDown) {
        row.specialCauseTwoOfThreeDown = false;
      }
    }
    const trendUpQualified = row.specialCauseTrendUp && onHighSide;
    const trendDownQualified = row.specialCauseTrendDown && onLowSide;
    const highSignals = row.specialCauseSinglePointUp || row.specialCauseTwoOfThreeUp || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveUp || row.specialCauseShiftUp || trendUpQualified;
    const lowSignals = row.specialCauseSinglePointDown || row.specialCauseTwoOfThreeDown || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveDown || row.specialCauseShiftDown || trendDownQualified;
    let emergingFavourable = false;
    if (settings.precedenceStrategy === "directional_first" /* DirectionalFirst */ && (((_o = settings.grace) == null ? void 0 : _o.emergingEnabled) || settings.emergingGraceEnabled || settings.emergingDirectionGrace)) {
      const trendN = settings.specialCauseTrendPoints || 6;
      if (trendN > 1 && !(row.specialCauseTrendUp || row.specialCauseTrendDown)) {
        const needed = trendN - 1;
        const seq = [];
        for (let back = idx; back >= 0 && seq.length < needed; back--) {
          const rPrev = output[back];
          if (!rPrev.ghost && isNumber(rPrev.value) && rPrev.mean !== null) seq.unshift(rPrev);
        }
        if (seq.length === needed) {
          let monotonic = true;
          for (let k = 1; k < seq.length && monotonic; k++) {
            if (metricImprovement === "Up" /* Up */) {
              if (!(seq[k].value > seq[k - 1].value)) monotonic = false;
            } else if (metricImprovement === "Down" /* Down */) {
              if (!(seq[k].value < seq[k - 1].value)) monotonic = false;
            } else {
              monotonic = false;
            }
          }
          emergingFavourable = monotonic;
        }
      }
    }
    if (settings.precedenceStrategy === "directional_first" /* DirectionalFirst */) {
      const favourableRaw = metricImprovement === "Up" /* Up */ ? highSignals : metricImprovement === "Down" /* Down */ ? lowSignals : false;
      const favourable = favourableRaw;
      const unfavourable = metricImprovement === "Up" /* Up */ ? lowSignals : metricImprovement === "Down" /* Down */ ? highSignals : false;
      if (favourable && !unfavourable) row.variationIcon = "improvement" /* Improvement */;
      else if (unfavourable && !favourable) row.variationIcon = emergingFavourable ? "neither" /* Neither */ : "concern" /* Concern */;
      else if (favourable && unfavourable) row.variationIcon = emergingFavourable || row.specialCauseTrendUp || row.specialCauseTrendDown ? "improvement" /* Improvement */ : "neither" /* Neither */;
      else row.variationIcon = "neither" /* Neither */;
    } else {
      if (metricImprovement === "Up" /* Up */) row.variationIcon = highSignals ? "improvement" /* Improvement */ : lowSignals ? "concern" /* Concern */ : "neither" /* Neither */;
      else if (metricImprovement === "Down" /* Down */) row.variationIcon = lowSignals ? "improvement" /* Improvement */ : highSignals ? "concern" /* Concern */ : "neither" /* Neither */;
      else row.variationIcon = "neither" /* Neither */;
    }
    const anySignal = highSignals || lowSignals;
    row.specialCauseImprovementValue = anySignal && row.variationIcon === "improvement" /* Improvement */ ? row.value : null;
    row.specialCauseConcernValue = anySignal && row.variationIcon === "concern" /* Concern */ ? row.value : null;
    row.specialCauseNeitherValue = anySignal && row.variationIcon === "neither" /* Neither */ ? row.value : null;
    if (settings.conflictPrecedenceMode === "sql_ranking_v2_6a" /* SqlRankingV26a */ && row.specialCauseImprovementValue !== null && row.specialCauseConcernValue !== null) {
      const active = [];
      if (row.specialCauseSinglePointUp) active.push({ id: "single_point" /* SinglePoint */, rank: 1, side: "up" /* Up */ });
      if (row.specialCauseSinglePointDown) active.push({ id: "single_point" /* SinglePoint */, rank: 1, side: "down" /* Down */ });
      if (row.specialCauseTwoOfThreeUp) active.push({ id: "two_sigma" /* TwoSigma */, rank: 2, side: "up" /* Up */ });
      if (row.specialCauseTwoOfThreeDown) active.push({ id: "two_sigma" /* TwoSigma */, rank: 2, side: "down" /* Down */ });
      if (row.specialCauseShiftUp) active.push({ id: "shift" /* Shift */, rank: 3, side: "up" /* Up */ });
      if (row.specialCauseShiftDown) active.push({ id: "shift" /* Shift */, rank: 3, side: "down" /* Down */ });
      if (row.specialCauseTrendUp) active.push({ id: "trend" /* Trend */, rank: 4, side: "up" /* Up */ });
      if (row.specialCauseTrendDown) active.push({ id: "trend" /* Trend */, rank: 4, side: "down" /* Down */ });
      const upMax = active.filter((a) => a.side === "up" /* Up */).reduce((m, a) => Math.max(m, a.rank), 0);
      const downMax = active.filter((a) => a.side === "down" /* Down */).reduce((m, a) => Math.max(m, a.rank), 0);
      let prime;
      if (upMax > downMax) prime = "Upwards" /* Upwards */;
      else if (downMax > upMax) prime = "Downwards" /* Downwards */;
      else prime = "Same" /* Same */;
      const originalImprovement = row.specialCauseImprovementValue;
      const originalConcern = row.specialCauseConcernValue;
      if (prime === "Upwards" /* Upwards */) {
        if (metricImprovement === "Up" /* Up */) {
          row.specialCauseConcernValue = null;
        } else if (metricImprovement === "Down" /* Down */) {
          row.specialCauseImprovementValue = null;
        }
      } else if (prime === "Downwards" /* Downwards */) {
        if (metricImprovement === "Up" /* Up */) {
          row.specialCauseImprovementValue = null;
        } else if (metricImprovement === "Down" /* Down */) {
          row.specialCauseConcernValue = null;
        }
      } else {
        if (row.variationIcon === "improvement" /* Improvement */) {
          row.specialCauseConcernValue = null;
        } else if (row.variationIcon === "concern" /* Concern */) {
          row.specialCauseImprovementValue = null;
        } else {
          row.specialCauseConcernValue = null;
        }
      }
      if (row.specialCauseImprovementValue !== null && row.specialCauseConcernValue === null) {
        row.variationIcon = "improvement" /* Improvement */;
      } else if (row.specialCauseConcernValue !== null && row.specialCauseImprovementValue === null) {
        row.variationIcon = "concern" /* Concern */;
      } else if (row.specialCauseImprovementValue === null && row.specialCauseConcernValue === null) {
        row.variationIcon = "neither" /* Neither */;
      }
      const winningSide = row.specialCauseImprovementValue !== null ? "up" /* Up */ : row.specialCauseConcernValue !== null ? "down" /* Down */ : void 0;
      const winningRank = winningSide === "up" /* Up */ ? upMax : winningSide === "down" /* Down */ ? downMax : Math.max(upMax, downMax);
      const winner = active.find((a) => a.rank === winningRank && (!winningSide || a.side === winningSide));
      row.conflictPrimeDirection = prime;
      row.conflictResolved = true;
      row.conflictResolvedRank = winningRank || void 0;
      if (winner) row.conflictResolvedByRuleId = winner.id;
      row.pruningMode = "conflict" /* Conflict */;
      row.originalSpecialCauseImprovementValue = originalImprovement;
      row.originalSpecialCauseConcernValue = originalConcern;
    }
    {
      const inputRow = canonical[row.rowId - 1];
      const result = computeAssuranceIcon({
        metricImprovement,
        capabilityMode: settings.assuranceCapabilityMode,
        value: row.value,
        mean: row.mean,
        upperProcessLimit: row.upperProcessLimit,
        lowerProcessLimit: row.lowerProcessLimit,
        target: isNumber(inputRow == null ? void 0 : inputRow.target) ? inputRow.target : null
      });
      row.assuranceIcon = result;
    }
  }
  if (((_p = settings.minimumPointsWarning) != null ? _p : false) && !globalEnough) {
    const available = canonical.filter(
      (r) => !r.ghost && isNumber(r.value)
    ).length;
    warnings.push({
      code: "insufficient_points_global" /* InsufficientPointsGlobal */,
      category: "data" /* Data */,
      severity: "warning" /* Warning */,
      message: `Only ${available} non-ghost points available; minimum required is ${settings.minimumPoints}. Limits and icons suppressed.`,
      context: { available, minimumRequired: settings.minimumPoints }
    });
  }
  if (settings.variationIconConflictWarning) {
    for (const row of output) {
      if (row.variationIcon === "improvement" /* Improvement */) {
        const highAndLow = (row.specialCauseSinglePointUp || row.specialCauseTwoOfThreeUp || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveUp || row.specialCauseShiftUp || row.specialCauseTrendUp) && (row.specialCauseSinglePointDown || row.specialCauseTwoOfThreeDown || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveDown || row.specialCauseShiftDown || row.specialCauseTrendDown);
        if (highAndLow) {
          warnings.push({
            code: "variation_conflict_row" /* VariationConflictRow */,
            category: "logic" /* Logic */,
            severity: "warning" /* Warning */,
            message: `Row ${row.rowId}: simultaneous high/low special-cause signals \u2013 variation icon may be ambiguous.`,
            context: { rowId: row.rowId }
          });
        }
      }
    }
  }
  if (settings.maximumPoints && Number.isFinite(settings.maximumPoints)) {
    const cap = settings.maximumPoints;
    let seen = 0;
    for (const row of output) {
      if (!row.ghost && isNumber(row.value)) seen++;
      if (seen > cap) {
        row.mean = row.upperProcessLimit = row.lowerProcessLimit = null;
        row.upperTwoSigma = row.lowerTwoSigma = row.upperOneSigma = row.lowerOneSigma = null;
      }
    }
  }
  if (settings.nullValueWarning && (chartType === "XmR" /* XmR */ || chartType === "G" /* G */)) {
    const nullCount = canonical.filter(
      (r) => !r.ghost && (r.value === null || r.value === void 0 || !isNumber(r.value))
    ).length;
    if (nullCount)
      warnings.push({
        code: "null_values_excluded" /* NullValuesExcluded */,
        category: "data" /* Data */,
        severity: "info" /* Info */,
        message: `${nullCount} null/missing value(s) excluded from calculations.`,
        context: { nullCount }
      });
  }
  if (settings.targetSuppressedWarning && (chartType === "T" /* T */ || chartType === "G" /* G */)) {
    const hasTarget = canonical.some((r) => isNumber(r.target));
    if (hasTarget)
      warnings.push({
        code: "target_ignored_rare_event" /* TargetIgnoredRareEvent */,
        category: "target" /* Target */,
        severity: "info" /* Info */,
        message: `Targets provided are ignored for ${chartType} charts in this port.`,
        context: { chartType }
      });
  }
  if (settings.ghostOnRareEventWarning && (chartType === "T" /* T */ || chartType === "G" /* G */)) {
    const ghostCount = canonical.filter((r) => r.ghost).length;
    if (ghostCount)
      warnings.push({
        code: "ghost_rows_rare_event" /* GhostRowsRareEvent */,
        category: "ghost" /* Ghost */,
        severity: "info" /* Info */,
        message: `${ghostCount} ghost row(s) supplied for rare-event chart (${chartType}); verify intent.`,
        context: { chartType, ghostCount }
      });
  }
  if (settings.partitionSizeWarnings) {
    Object.entries(partitionNonGhostCounts).forEach(([pid, count]) => {
      if (count < settings.minimumPointsPartition)
        warnings.push({
          code: "insufficient_points_partition" /* InsufficientPointsPartition */,
          category: "partition" /* Partition */,
          severity: "warning" /* Warning */,
          message: `Partition ${pid} has only ${count} non-ghost point(s); below recommended ${settings.minimumPointsPartition}.`,
          context: {
            partitionId: Number(pid),
            count,
            minimum: settings.minimumPointsPartition
          }
        });
    });
  }
  if (settings.baselineSpecialCauseWarning) {
    const issueRows = [];
    output.forEach((r) => {
      const input = canonical[r.rowId - 1];
      if (input.baseline) {
        const anySignal = r.specialCauseSinglePointUp || r.specialCauseSinglePointDown || r.specialCauseTwoOfThreeUp || r.specialCauseTwoOfThreeDown || r.specialCauseFourOfFiveUp || r.specialCauseFourOfFiveDown || r.specialCauseShiftUp || r.specialCauseShiftDown || r.specialCauseTrendUp || r.specialCauseTrendDown;
        if (anySignal) issueRows.push(r.rowId);
      }
    });
    if (issueRows.length)
      warnings.push({
        code: "baseline_with_special_cause" /* BaselineWithSpecialCause */,
        category: "baseline" /* Baseline */,
        severity: "warning" /* Warning */,
        message: `Baseline set with special-cause present at row(s): ${issueRows.join(", ")}.`,
        context: { rows: issueRows }
      });
  }
  if (settings.maximumPointsWarnings) {
    if (settings.maximumPointsPartition && Number.isFinite(settings.maximumPointsPartition))
      warnings.push({
        code: "partition_cap_applied" /* PartitionCapApplied */,
        category: "limits" /* Limits */,
        severity: "info" /* Info */,
        message: `Limits suppressed after ${settings.maximumPointsPartition} non-ghost points per partition.`,
        context: { cap: settings.maximumPointsPartition }
      });
    if (settings.maximumPoints && Number.isFinite(settings.maximumPoints))
      warnings.push({
        code: "global_cap_applied" /* GlobalCapApplied */,
        category: "limits" /* Limits */,
        severity: "info" /* Info */,
        message: `Limits suppressed after global cap of ${settings.maximumPoints} non-ghost points.`,
        context: { cap: settings.maximumPoints }
      });
  }
  let suggestedBaselines;
  if (settings.baselineSuggest) {
    const W = settings.baselineSuggestStabilityPoints;
    const minGap = settings.baselineSuggestMinGap;
    const minDeltaSigma = settings.baselineSuggestMinDeltaSigma;
    const scoreThreshold = settings.baselineSuggestScoreThreshold;
    const shiftRunLength = (_q = settings.specialCauseShiftPoints) != null ? _q : 6;
    const trendRunLength = (_r = settings.specialCauseTrendPoints) != null ? _r : 6;
    const raw = computeBaselineSuggestionsRaw(
      output.map((r) => ({
        value: r.value,
        partitionId: r.partitionId,
        variationIcon: r.variationIcon,
        mean: r.mean,
        upperProcessLimit: r.upperProcessLimit
      })),
      {
        W,
        minGap,
        minDeltaSigma,
        scoreThreshold,
        shiftRunLength,
        trendRunLength,
        isShiftUpAt: (i) => !!output[i].specialCauseShiftUp,
        isShiftDownAt: (i) => !!output[i].specialCauseShiftDown,
        isTrendUpAt: (i) => !!output[i].specialCauseTrendUp,
        isTrendDownAt: (i) => !!output[i].specialCauseTrendDown,
        isSingleUpAt: (i) => !!output[i].specialCauseSinglePointUp,
        isSingleDownAt: (i) => !!output[i].specialCauseSinglePointDown
      }
    );
    suggestedBaselines = raw.map((s) => ({
      index: s.index,
      reason: s.reason,
      score: s.score,
      deltaMean: s.deltaMean,
      oldMean: s.oldMean,
      newMean: s.newMean,
      window: s.window
    }));
  }
  return { rows: output, warnings, ...suggestedBaselines ? { suggestedBaselines } : {} };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcSqlCompat.ts
function sqlDirectionalPrune(row, metricImprovement) {
  const summary = getDirectionalSignalSummary(row);
  const upMax = summary.upMax;
  const downMax = summary.downMax;
  const high = summary.upRules.map((id) => ({ id, rank: RULE_RANK_BY_ID[id] }));
  const low = summary.downRules.map((id) => ({
    id,
    rank: RULE_RANK_BY_ID[id]
  }));
  let prime;
  if (upMax > downMax) prime = "Upwards" /* Upwards */;
  else if (downMax > upMax) prime = "Downwards" /* Downwards */;
  else prime = "Same" /* Same */;
  const anyHigh = upMax > 0;
  const anyLow = downMax > 0;
  const originalImprovement = metricImprovement === "Up" /* Up */ && anyHigh || metricImprovement === "Down" /* Down */ && anyLow ? row.value : null;
  const originalConcern = metricImprovement === "Up" /* Up */ && anyLow || metricImprovement === "Down" /* Down */ && anyHigh ? row.value : null;
  row.sqlOriginalImprovementValue = originalImprovement;
  row.sqlOriginalConcernValue = originalConcern;
  if (originalImprovement !== null && originalConcern !== null) {
    row.sqlPruned = true;
    if (prime === "Upwards" /* Upwards */) {
      if (metricImprovement === "Up" /* Up */) {
      } else if (metricImprovement === "Down" /* Down */) {
        row.sqlOriginalImprovementValue = null;
      }
    } else if (prime === "Downwards" /* Downwards */) {
      if (metricImprovement === "Up" /* Up */) {
        row.sqlOriginalImprovementValue = null;
      } else if (metricImprovement === "Down" /* Down */) {
      }
    } else {
      if (originalImprovement !== null) {
        row.sqlOriginalConcernValue = null;
      } else if (originalConcern !== null) {
        row.sqlOriginalImprovementValue = null;
      }
    }
  }
  if (row.sqlOriginalImprovementValue && !row.sqlOriginalConcernValue) {
    row.variationIcon = "improvement" /* Improvement */;
  } else if (!row.sqlOriginalImprovementValue && row.sqlOriginalConcernValue) {
    row.variationIcon = "concern" /* Concern */;
  } else if (!row.sqlOriginalImprovementValue && !row.sqlOriginalConcernValue) {
    row.variationIcon = "neither" /* Neither */;
  } else {
    row.variationIcon = "improvement" /* Improvement */;
  }
  row.primeDirection = prime;
  row.primeRank = Math.max(upMax, downMax) || void 0;
  row.pruningMode = "sql" /* Sql */;
  const winningSide = row.variationIcon === "concern" /* Concern */ ? metricImprovement === "Up" /* Up */ ? "down" /* Down */ : "up" /* Up */ : metricImprovement === "Up" /* Up */ ? "up" /* Up */ : "down" /* Down */;
  const winnerSet = winningSide === "up" /* Up */ ? high : low;
  const top = winnerSet.reduce(
    (best, a) => !best || a.rank > best.rank ? a : best,
    void 0
  );
  if (top) row.primeRuleId = top.id;
}
function buildSpcSqlCompat(args) {
  const { chartType, metricImprovement, data, settings = {} } = args;
  const base = buildSpc({
    chartType,
    metricImprovement,
    data,
    settings: {
      ...settings
    }
  });
  const rows = base.rows.map((r) => ({ ...r }));
  for (const r of rows) {
    sqlDirectionalPrune(r, metricImprovement);
  }
  return { rows, warnings: base.warnings };
}

// src/components/DataVisualisation/charts/SPC/utils/autoMetrics.ts
function toDate(v) {
  if (v == null) return void 0;
  const d = v instanceof Date ? v : new Date(v);
  return Number.isNaN(d.valueOf()) ? void 0 : d;
}
function synthesizeDates(length, start, hint) {
  const arr = new Array(length);
  const d = new Date(start);
  for (let i = 0; i < length; i++) {
    arr[i] = new Date(d);
    switch (hint) {
      case "hourly":
        d.setHours(d.getHours() + 1);
        break;
      case "daily":
        d.setDate(d.getDate() + 1);
        break;
      case "weekly":
        d.setDate(d.getDate() + 7);
        break;
      case "monthly":
        d.setMonth(d.getMonth() + 1);
        break;
      case "quarterly":
        d.setMonth(d.getMonth() + 3);
        break;
      case "annually":
        d.setFullYear(d.getFullYear() + 1);
        break;
      default:
        break;
    }
  }
  return arr;
}
function inferFrequency(dates, fallback) {
  const valid = dates.filter(Boolean);
  if (valid.length < 2) return fallback;
  const diffs = [];
  for (let i = 1; i < valid.length; i++) diffs.push(valid[i].getTime() - valid[i - 1].getTime());
  const sorted = diffs.sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const H = 60 * 60 * 1e3;
  const D = 24 * H;
  if (median <= 2 * H) return "hourly";
  if (median <= 2 * D) return "daily";
  if (median <= 10 * D) return "weekly";
  if (median <= 45 * D) return "monthly";
  if (median <= 120 * D) return "quarterly";
  return "annually";
}
function formatLatest(dt, freq) {
  if (!dt) return void 0;
  try {
    switch (freq) {
      case "hourly":
        return new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short", year: "numeric" }).format(dt);
      case "daily":
        return new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(dt);
      case "weekly":
        return `Week of ${new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(dt)}`;
      case "monthly":
        return new Intl.DateTimeFormat(void 0, { month: "short", year: "numeric" }).format(dt);
      case "quarterly": {
        const q = Math.floor(dt.getMonth() / 3) + 1;
        return `Q${q} ${dt.getFullYear()}`;
      }
      case "annually":
        return `${dt.getFullYear()}`;
      default:
        return new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(dt);
    }
  } catch {
    return void 0;
  }
}
function inferUnit(values, provided, def, percentHeuristic = "0-100") {
  if (provided) return provided;
  if (def) return def;
  const vals = values.filter((v) => v != null);
  if (!vals.length) return void 0;
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  if (percentHeuristic === "0-1") {
    if (min >= 0 && max <= 1 && max > 0) return "%";
  } else {
    if (min >= 0 && max <= 100 && max > 0) return "%";
  }
  return void 0;
}
function periodLabel(freq, hint, n = 1) {
  const unit2 = freq || hint;
  switch (unit2) {
    case "hourly":
      return n === 1 ? "last hour" : `last ${n} hours`;
    case "daily":
      return n === 1 ? "last day" : `last ${n} days`;
    case "weekly":
      return n === 1 ? "last week" : `last ${n} weeks`;
    case "monthly":
      return n === 1 ? "last month" : `last ${n} months`;
    case "quarterly":
      return n === 1 ? "last quarter" : `last ${n} quarters`;
    case "annually":
      return n === 1 ? "last year" : `last ${n} years`;
    default:
      return "previous";
  }
}
function computeAutoMetrics(input) {
  const {
    values: rawValues,
    dates: rawDates,
    intervalHint,
    startDate,
    providedUnit,
    defaultUnit,
    autoValue = true,
    autoDelta = true,
    autoMetadata = true,
    deltaConfig
  } = input;
  const values = rawValues.map((v) => typeof v === "number" ? v : v == null ? null : Number(v));
  let lastIndex = -1;
  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i] != null) {
      lastIndex = i;
      break;
    }
  }
  let dates = (rawDates || []).map(toDate);
  const anyDates = dates.some(Boolean);
  if (!anyDates) {
    const start = toDate(startDate);
    if (start && intervalHint) dates = synthesizeDates(values.length, start, intervalHint);
    else dates = new Array(values.length).fill(void 0);
  }
  const frequency = inferFrequency(dates, intervalHint);
  const unit2 = inferUnit(values, providedUnit, defaultUnit, input.percentHeuristic);
  const value = autoValue && lastIndex >= 0 && values[lastIndex] != null ? values[lastIndex] : void 0;
  const cfg = { strategy: "previous", n: 1, absolute: true, skipNulls: true, ...deltaConfig || {} };
  function findBaselineIndex() {
    if (lastIndex < 0) return -1;
    if (cfg.strategy === "previous" || cfg.strategy === "n-points") {
      let idx = lastIndex - (cfg.strategy === "previous" ? 1 : Math.max(1, cfg.n || 1));
      if (!cfg.skipNulls) return idx;
      for (let i = idx; i >= 0; i--) if (values[i] != null) return i;
      return -1;
    }
    const latestDate2 = dates[lastIndex];
    if (!latestDate2) return -1;
    const target = new Date(latestDate2);
    target.setFullYear(target.getFullYear() - 1);
    let bestIdx = -1;
    let bestDiff = Infinity;
    for (let i = 0; i < dates.length; i++) {
      const d = dates[i];
      if (!d || values[i] == null) continue;
      const diff = Math.abs(d.getTime() - target.getTime());
      if (diff < bestDiff) {
        bestDiff = diff;
        bestIdx = i;
      }
    }
    return bestIdx;
  }
  const baselineIndex = findBaselineIndex();
  const baselineValue = baselineIndex >= 0 ? values[baselineIndex] : null;
  let delta;
  if (autoDelta && value != null && baselineValue != null) {
    const abs = value - baselineValue;
    const useAbsolute = cfg.absolute !== false;
    const val = useAbsolute ? abs : baselineValue === 0 ? 0 : abs / Math.abs(baselineValue) * 100;
    delta = {
      value: Number.isFinite(val) ? Number(val.toFixed(2)) : 0,
      isPercent: useAbsolute ? unit2 === "%" : true,
      period: `vs ${periodLabel(frequency, intervalHint, cfg.strategy === "n-points" ? Math.max(1, cfg.n || 1) : 1)}`
    };
  }
  const latestDate = lastIndex >= 0 ? dates[lastIndex] : void 0;
  const metadata = autoMetadata ? formatLatest(latestDate, frequency) ? `Latest: ${formatLatest(latestDate, frequency)}` : void 0 : void 0;
  return { value, unit: unit2, delta, metadata, latestDate, frequency };
}
var autoMetrics_default = computeAutoMetrics;

// src/components/Tables/Table.tsx
var import_classnames2 = __toESM(require_classnames(), 1);

// src/components/Panel/Panel.tsx
var import_classnames = __toESM(require_classnames(), 1);

// src/components/Heading/Heading.tsx
import { createElement } from "react";

// src/mapping/heading.ts
function deriveLevel(size) {
  switch (size) {
    case "xxl":
    case "xl":
      return 1;
    case "l":
      return 2;
    case "m":
      return 3;
    case "s":
      return 4;
    case "xs":
      return 5;
    default:
      return 2;
  }
}
function mapHeadingProps(input) {
  var _a2;
  const level = (_a2 = input.level) != null ? _a2 : deriveLevel(input.size);
  const classes = [
    "nhsuk-heading",
    input.size ? `nhsuk-heading--${input.size}` : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  const style = input.marginBottom ? { marginBottom: input.marginBottom } : void 0;
  return { tag: `h${level}`, classes, style };
}

// src/components/Heading/Heading.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var Heading = ({ level, className, text, html, children, size, marginBottom, ...rest }) => {
  const model = mapHeadingProps({ level, size, className, marginBottom });
  const content = children || (html ? /* @__PURE__ */ jsx13("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  return createElement(model.tag, { className: model.classes, style: model.style, ...rest }, content);
};

// src/components/Panel/Panel.tsx
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var Panel = ({
  id,
  className,
  headingText,
  headingHtml,
  headingLevel = 2,
  bodyText,
  bodyHtml,
  children,
  ...props
}) => {
  const panelClasses = (0, import_classnames.default)(
    "nhsuk-panel",
    className
  );
  const renderHeading = () => {
    if (!headingText && !headingHtml && !children) return null;
    if (headingHtml) {
      return /* @__PURE__ */ jsx14(
        Heading,
        {
          level: headingLevel,
          className: "nhsuk-panel__heading",
          html: headingHtml,
          marginBottom: "var(--panel-heading-margin, 24px)"
        }
      );
    }
    if (headingText) {
      return /* @__PURE__ */ jsx14(
        Heading,
        {
          level: headingLevel,
          className: "nhsuk-panel__heading",
          text: headingText,
          marginBottom: "var(--panel-heading-margin, 24px)"
        }
      );
    }
    return null;
  };
  const renderBody = () => {
    if (children) {
      return /* @__PURE__ */ jsx14("div", { className: "nhsuk-panel__body", children });
    }
    if (bodyHtml) {
      return /* @__PURE__ */ jsx14(
        "div",
        {
          className: "nhsuk-panel__body",
          dangerouslySetInnerHTML: { __html: bodyHtml }
        }
      );
    }
    if (bodyText) {
      return /* @__PURE__ */ jsx14("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ jsx14("p", { children: bodyText }) });
    }
    return null;
  };
  return /* @__PURE__ */ jsxs8("div", { className: panelClasses, id, ...props, children: [
    renderHeading(),
    renderBody()
  ] });
};

// src/components/Tables/Table.tsx
import { Fragment as Fragment3, jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var prismGlobalRef = { current: null };
var ensurePrismGlobal = () => {
  if (prismGlobalRef.current) return prismGlobalRef.current;
  try {
    prismGlobalRef.current = require_prism();
    try {
      require_prism_typescript();
    } catch {
    }
    try {
      require_prism_tsx();
    } catch {
    }
    try {
      require_prism_json();
    } catch {
    }
  } catch {
    prismGlobalRef.current = null;
  }
  return prismGlobalRef.current;
};
var fallbackHighlight = (code) => {
  const patterns = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let html = code;
  patterns.forEach((p) => {
    html = html.replace(p.regex, (m) => `<span class="nhsuk-code-${p.cls}">${m}</span>`);
  });
  return html;
};
var highlightCode = (code, lang, disable) => {
  if (disable) return code;
  if (!lang) return code;
  const Prism2 = ensurePrismGlobal();
  if (Prism2 && Prism2.languages) {
    const resolvedLang = Prism2.languages[lang] ? lang : Prism2.languages.typescript && (lang === "ts" || lang === "tsx" || lang === "typescript") ? "typescript" : Prism2.languages.json && lang === "json" ? "json" : void 0;
    if (resolvedLang) {
      try {
        return Prism2.highlight(code, Prism2.languages[resolvedLang], resolvedLang);
      } catch {
      }
    }
  }
  return fallbackHighlight(code);
};
var TableBase = ({
  rows,
  head,
  caption,
  captionSize,
  firstCellIsHeader = false,
  responsive = false,
  heading,
  headingLevel = 3,
  panel = false,
  panelClasses,
  tableClasses,
  classes,
  attributes,
  "data-testid": testId,
  columns,
  data,
  visuallyHiddenCaption = false
}) => {
  const captionClass = `nhsuk-table__caption ${captionSize ? `nhsuk-table__caption--${captionSize}` : ""}`.trim();
  const tableClassList = (0, import_classnames2.default)(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": responsive
    },
    tableClasses
  );
  const containerClassList = (0, import_classnames2.default)(classes);
  const renderHeaderCell = (cell, index) => {
    const headerClasses = (0, import_classnames2.default)(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${cell.format}`]: cell.format
      },
      cell.classes
    );
    const headerAttributes = {
      scope: "col",
      ...cell.colspan && { colSpan: cell.colspan },
      ...cell.rowspan && { rowSpan: cell.rowspan },
      ...responsive && { role: "columnheader" },
      ...cell.attributes
    };
    let content;
    if (cell.node != null) {
      content = /* @__PURE__ */ jsx15(Fragment3, { children: cell.node });
    } else if (cell.html) {
      content = /* @__PURE__ */ jsx15("span", { dangerouslySetInnerHTML: { __html: cell.html } });
    } else if (cell.code != null) {
      const isArray = Array.isArray(cell.code);
      const codeString = isArray ? cell.code.join("\n") : cell.code;
      const isMultiline = isArray || codeString.includes("\n");
      const codeProps = {
        className: (0, import_classnames2.default)("nhsuk-table__code", cell.codeClassName, {
          "nhsuk-table__code--block": isMultiline,
          "nhsuk-table__code--inline": !isMultiline
        }),
        ...cell.codeLanguage ? { "data-language": cell.codeLanguage } : {}
      };
      const highlighted = highlightCode(codeString, cell.codeLanguage);
      content = isMultiline ? /* @__PURE__ */ jsx15("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ jsx15(
        "code",
        {
          ...codeProps,
          dangerouslySetInnerHTML: { __html: highlighted }
        }
      ) }) : /* @__PURE__ */ jsx15(
        "code",
        {
          ...codeProps,
          dangerouslySetInnerHTML: { __html: highlighted }
        }
      );
    } else {
      content = cell.text;
    }
    return /* @__PURE__ */ jsx15("th", { className: headerClasses, ...headerAttributes, children: content }, index);
  };
  const renderCell = (cell, cellIndex, isFirstCell) => {
    const isHeaderCell = firstCellIsHeader && isFirstCell || cell.rowHeader;
    const cellClasses = (0, import_classnames2.default)(
      isHeaderCell ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${isHeaderCell ? "header" : "cell"}--${cell.format}`]: cell.format
      },
      cell.classes
    );
    const cellAttributes = {
      ...isHeaderCell && { scope: "row" },
      ...cell.colspan && { colSpan: cell.colspan },
      ...cell.rowspan && { rowSpan: cell.rowspan },
      ...responsive && {
        role: isHeaderCell ? "rowheader" : "cell",
        ...cell.header && { "data-label": cell.header }
      },
      ...cell.attributes
    };
    let inner;
    if (cell.node != null) {
      inner = /* @__PURE__ */ jsx15(Fragment3, { children: cell.node });
    } else if (cell.html) {
      inner = /* @__PURE__ */ jsx15("span", { dangerouslySetInnerHTML: { __html: cell.html } });
    } else if (cell.code != null) {
      const isArray = Array.isArray(cell.code);
      const codeString = isArray ? cell.code.join("\n") : cell.code;
      const isMultiline = isArray || codeString.includes("\n");
      const codeProps = {
        className: (0, import_classnames2.default)("nhsuk-table__code", cell.codeClassName, {
          "nhsuk-table__code--block": isMultiline,
          "nhsuk-table__code--inline": !isMultiline
        }),
        ...cell.codeLanguage ? { "data-language": cell.codeLanguage } : {}
      };
      const highlighted = highlightCode(
        codeString,
        cell.codeLanguage,
        cell.disableHighlight
      );
      inner = isMultiline ? /* @__PURE__ */ jsx15("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ jsx15(
        "code",
        {
          ...codeProps,
          dangerouslySetInnerHTML: { __html: highlighted }
        }
      ) }) : /* @__PURE__ */ jsx15(
        "code",
        {
          ...codeProps,
          dangerouslySetInnerHTML: { __html: highlighted }
        }
      );
    } else {
      inner = cell.text;
    }
    const cellContent = /* @__PURE__ */ jsxs9(Fragment3, { children: [
      responsive && cell.header && /* @__PURE__ */ jsxs9("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        cell.header,
        " "
      ] }),
      inner
    ] });
    const Component = isHeaderCell ? "th" : "td";
    return /* @__PURE__ */ jsx15(Component, { className: cellClasses, ...cellAttributes, children: cellContent }, cellIndex);
  };
  let derivedHead = head;
  let derivedRows = rows;
  if (!derivedHead && columns && columns.length) {
    derivedHead = columns.map((c) => ({
      text: c.title,
      format: c.format,
      classes: c.headerClasses,
      attributes: c.headerAttributes
    }));
  }
  if (!derivedRows && columns && data && data.length) {
    derivedRows = data.map((rowObj, rIdx) => {
      return columns.map((c) => {
        const raw = c.accessor ? c.accessor(rowObj, rIdx) : rowObj[c.key];
        let base = { format: c.format, classes: c.cellClasses, attributes: c.cellAttributes };
        if (c.rowHeader) base.rowHeader = true;
        if (c.render) {
          const rendered = c.render(raw, rowObj, rIdx, c);
          if (rendered == null || typeof rendered === "boolean") return { ...base, text: "" };
          if (typeof rendered === "string" || typeof rendered === "number") {
            return { ...base, text: String(rendered) };
          }
          return { ...base, ...rendered };
        }
        return { ...base, text: raw != null ? String(raw) : "" };
      });
    });
  }
  const renderTable = () => /* @__PURE__ */ jsxs9(
    "table",
    {
      className: tableClassList,
      ...responsive && { role: "table" },
      ...attributes,
      ...testId && { "data-testid": testId },
      children: [
        caption && /* @__PURE__ */ jsx15("caption", { className: (0, import_classnames2.default)(captionClass, visuallyHiddenCaption && "nhsuk-u-visually-hidden"), children: caption }),
        derivedHead && derivedHead.length > 0 && /* @__PURE__ */ jsx15(
          "thead",
          {
            className: "nhsuk-table__head",
            ...responsive && { role: "rowgroup" },
            children: /* @__PURE__ */ jsx15("tr", { ...responsive && { role: "row" }, children: derivedHead.map(
              (cell, index) => renderHeaderCell(cell, index)
            ) })
          }
        ),
        /* @__PURE__ */ jsx15("tbody", { className: "nhsuk-table__body", children: derivedRows && derivedRows.map((row, rowIndex) => /* @__PURE__ */ jsx15(
          "tr",
          {
            className: "nhsuk-table__row",
            ...responsive && { role: "row" },
            children: row.map(
              (cell, cellIndex) => renderCell(cell, cellIndex, cellIndex === 0)
            )
          },
          rowIndex
        )) })
      ]
    }
  );
  if (panel) {
    return /* @__PURE__ */ jsxs9(Panel, { className: panelClasses, children: [
      heading && /* @__PURE__ */ jsx15(Heading, { level: headingLevel, className: "nhsuk-table__heading-tab", children: heading }),
      renderTable()
    ] });
  }
  if (containerClassList) {
    return /* @__PURE__ */ jsx15("div", { className: containerClassList, children: renderTable() });
  }
  return renderTable();
};
var TableCaption = ({
  children,
  size,
  className
}) => {
  const cls = (0, import_classnames2.default)(
    "nhsuk-table__caption",
    size && `nhsuk-table__caption--${size}`,
    className
  );
  return /* @__PURE__ */ jsx15("caption", { className: cls, children });
};
var TableBodyRow = ({
  responsive,
  className,
  children,
  ...rest
}) => {
  const roleAttrs = responsive ? { role: "row" } : {};
  return /* @__PURE__ */ jsx15("tr", { className, ...roleAttrs, ...rest, children });
};
var TableHeaderCell = ({
  text,
  html,
  node,
  code,
  codeLanguage,
  codeClassName,
  disableHighlight,
  format: format2,
  classes,
  colspan,
  rowspan,
  attributes,
  responsive,
  as = "th"
}) => {
  const headerClasses = (0, import_classnames2.default)(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${format2}`]: format2 },
    classes
  );
  const headerAttributes = {
    scope: "col",
    ...colspan && { colSpan: colspan },
    ...rowspan && { rowSpan: rowspan },
    ...responsive && { role: "columnheader" },
    ...attributes
  };
  let content;
  if (node != null) content = /* @__PURE__ */ jsx15(Fragment3, { children: node });
  else if (html) content = /* @__PURE__ */ jsx15("span", { dangerouslySetInnerHTML: { __html: html } });
  else if (code != null) {
    const isArray = Array.isArray(code);
    const codeString = isArray ? code.join("\n") : code;
    const isMultiline = isArray || codeString.includes("\n");
    const codeProps = {
      className: (0, import_classnames2.default)("nhsuk-table__code", codeClassName, {
        "nhsuk-table__code--block": isMultiline,
        "nhsuk-table__code--inline": !isMultiline
      }),
      ...codeLanguage ? { "data-language": codeLanguage } : {}
    };
    const highlighted = highlightCode(
      codeString,
      codeLanguage,
      disableHighlight
    );
    content = isMultiline ? /* @__PURE__ */ jsx15("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ jsx15(
      "code",
      {
        ...codeProps,
        dangerouslySetInnerHTML: { __html: highlighted }
      }
    ) }) : /* @__PURE__ */ jsx15("code", { ...codeProps, dangerouslySetInnerHTML: { __html: highlighted } });
  } else content = text;
  const Component = as;
  return /* @__PURE__ */ jsx15(Component, { className: headerClasses, ...headerAttributes, children: content });
};
var TableCell = ({
  text,
  html,
  node,
  code,
  codeLanguage,
  codeClassName,
  disableHighlight,
  format: format2,
  classes,
  colspan,
  rowspan,
  attributes,
  responsive,
  rowHeader
}) => {
  const isHeader = !!rowHeader;
  const Tag2 = isHeader ? "th" : "td";
  const cls = (0, import_classnames2.default)(
    isHeader ? "nhsuk-table__header" : "nhsuk-table__cell",
    format2 && `nhsuk-table__${isHeader ? "header" : "cell"}--${format2}`,
    classes
  );
  const cellAttrs = {
    ...colspan && { colSpan: colspan },
    ...rowspan && { rowSpan: rowspan },
    ...isHeader && { scope: "row" },
    ...responsive && { role: isHeader ? "rowheader" : "cell" },
    ...attributes
  };
  let content;
  if (node != null) content = /* @__PURE__ */ jsx15(Fragment3, { children: node });
  else if (html) content = /* @__PURE__ */ jsx15("span", { dangerouslySetInnerHTML: { __html: html } });
  else if (code != null) {
    const isArray = Array.isArray(code);
    const codeString = isArray ? code.join("\n") : code;
    const isMultiline = isArray || codeString.includes("\n");
    const codeProps = {
      className: (0, import_classnames2.default)("nhsuk-table__code", codeClassName, {
        "nhsuk-table__code--block": isMultiline,
        "nhsuk-table__code--inline": !isMultiline
      }),
      ...codeLanguage ? { "data-language": codeLanguage } : {}
    };
    const highlighted = highlightCode(codeString, codeLanguage, disableHighlight);
    content = isMultiline ? /* @__PURE__ */ jsx15("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ jsx15("code", { ...codeProps, dangerouslySetInnerHTML: { __html: highlighted } }) }) : /* @__PURE__ */ jsx15("code", { ...codeProps, dangerouslySetInnerHTML: { __html: highlighted } });
  } else content = text;
  return /* @__PURE__ */ jsx15(Tag2, { className: cls, ...cellAttrs, children: content });
};
var Table = TableBase;
Table.Caption = TableCaption;
Table.BodyRow = TableBodyRow;
Table.HeaderCell = TableHeaderCell;
Table.Cell = TableCell;
var __warnedRow = false;
var __warnedTH = false;
Object.defineProperty(Table, "Row", {
  configurable: true,
  enumerable: false,
  get() {
    if (!__warnedRow) {
      console.warn("Table.Row is deprecated. Use Table.BodyRow instead.");
      __warnedRow = true;
    }
    return TableBodyRow;
  }
});
Object.defineProperty(Table, "TH", {
  configurable: true,
  enumerable: false,
  get() {
    if (!__warnedTH) {
      console.warn("Table.TH is deprecated. Use Table.HeaderCell instead.");
      __warnedTH = true;
    }
    return TableHeaderCell;
  }
});
var Table_default = Table;

// src/components/DataVisualisation/charts/SPC/SPCChart/SPCSignalsInspector.tsx
import * as React12 from "react";
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
var SPCSignalsInspector = ({
  engineRows,
  measureName,
  measureUnit,
  onSignalFocus
}) => {
  var _a2, _b2;
  const t = useTooltipContext();
  const focused = (_a2 = t == null ? void 0 : t.focused) != null ? _a2 : null;
  const index = (_b2 = focused == null ? void 0 : focused.index) != null ? _b2 : null;
  const row = typeof index === "number" && engineRows ? engineRows[index] : null;
  const rules = React12.useMemo(() => row ? extractRuleIds(row) : [], [row]);
  const uniqueRuleNarr = React12.useMemo(
    () => Array.from(
      new Set(rules.map((r) => {
        var _a3;
        return (_a3 = ruleGlossary[r]) == null ? void 0 : _a3.narration;
      }).filter(Boolean))
    ),
    [rules]
  );
  const variationDesc = row ? variationLabel(row.variationIcon) : null;
  const assuranceDesc = row ? assuranceLabel(row.assuranceIcon) : null;
  const hasRules = rules.length > 0;
  const isNoJudgement = row ? row.variationIcon === "neither" /* Neither */ && hasRules : false;
  const lastKeyRef = React12.useRef(null);
  React12.useEffect(() => {
    if (!onSignalFocus) return;
    if (!focused || row == null) return;
    const key = `${focused.seriesId}:${focused.index}`;
    if (lastKeyRef.current === key) return;
    lastKeyRef.current = key;
    try {
      onSignalFocus({
        index: focused.index,
        x: focused.x,
        y: focused.y,
        row,
        rules
      });
    } catch {
    }
  }, [focused == null ? void 0 : focused.seriesId, focused == null ? void 0 : focused.index, focused == null ? void 0 : focused.x, focused == null ? void 0 : focused.y, row, rules, onSignalFocus]);
  return /* @__PURE__ */ jsxs10(
    "div",
    {
      className: "fdp-spc-inspector",
      role: "region",
      "aria-label": "Signals inspector",
      "data-testid": "spc-signals-inspector",
      children: [
        /* @__PURE__ */ jsxs10(
          "div",
          {
            className: "fdp-spc-inspector__header",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsx16("strong", { children: "Signals inspector" }),
              /* @__PURE__ */ jsx16("div", { className: "fdp-spc-inspector__nav", "aria-hidden": !t, children: t && /* @__PURE__ */ jsxs10("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ jsx16(
                  "button",
                  {
                    type: "button",
                    className: "fdp-button fdp-button--secondary",
                    onClick: () => {
                      if (!t.focused) t.focusFirstPoint();
                      else t.focusPrevPoint();
                    },
                    "aria-label": "Previous point",
                    children: "\u25C0"
                  }
                ),
                /* @__PURE__ */ jsx16(
                  "button",
                  {
                    type: "button",
                    className: "fdp-button fdp-button--secondary",
                    onClick: () => {
                      if (!t.focused) t.focusFirstPoint();
                      else t.focusNextPoint();
                    },
                    "aria-label": "Next point",
                    children: "\u25B6"
                  }
                )
              ] }) })
            ]
          }
        ),
        !row || !focused ? /* @__PURE__ */ jsx16("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ jsxs10("div", { className: "fdp-spc-inspector__body", children: [
          /* @__PURE__ */ jsxs10(
            "div",
            {
              className: "fdp-spc-inspector__summary",
              style: { display: "flex", gap: 16, flexWrap: "wrap" },
              children: [
                /* @__PURE__ */ jsxs10("span", { children: [
                  /* @__PURE__ */ jsx16("strong", { children: "Point:" }),
                  " ",
                  focused.index + 1
                ] }),
                /* @__PURE__ */ jsxs10("span", { children: [
                  /* @__PURE__ */ jsx16("strong", { children: "Value:" }),
                  " ",
                  focused.y,
                  measureUnit ? ` ${measureUnit}` : "",
                  measureName ? ` ${measureName}` : ""
                ] })
              ]
            }
          ),
          (variationDesc || isNoJudgement || assuranceDesc) && /* @__PURE__ */ jsx16(
            "div",
            {
              className: "fdp-spc-inspector__signals",
              style: { marginTop: 8 },
              children: /* @__PURE__ */ jsxs10(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    alignItems: "center"
                  },
                  children: [
                    (() => {
                      if (variationDesc == null ? void 0 : variationDesc.toLowerCase().includes("concern")) {
                        return /* @__PURE__ */ jsx16(
                          Tag,
                          {
                            text: variationDesc,
                            color: "default",
                            className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                          }
                        );
                      }
                      if (variationDesc == null ? void 0 : variationDesc.toLowerCase().includes("improvement")) {
                        return /* @__PURE__ */ jsx16(
                          Tag,
                          {
                            text: variationDesc,
                            color: "default",
                            className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                          }
                        );
                      }
                      if (isNoJudgement) {
                        return /* @__PURE__ */ jsx16(
                          Tag,
                          {
                            text: "No judgement",
                            color: "default",
                            className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                            "aria-label": "Neutral special cause (no directional judgement)"
                          }
                        );
                      }
                      if (variationDesc) {
                        return /* @__PURE__ */ jsx16(
                          Tag,
                          {
                            text: variationDesc,
                            color: "default",
                            className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                          }
                        );
                      }
                      return null;
                    })(),
                    assuranceDesc && (() => {
                      const lower = assuranceDesc.toLowerCase();
                      const isFail = lower.includes("not met") || lower.includes("not achieved");
                      const isPass = !isFail && /^|\b(met|achieved)\b|$/.test(lower);
                      return /* @__PURE__ */ jsx16(
                        Tag,
                        {
                          text: assuranceDesc,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${isPass ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                          "aria-label": `Assurance: ${assuranceDesc}`
                        }
                      );
                    })()
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs10("div", { className: "fdp-spc-inspector__rules", style: { marginTop: 8 }, children: [
            /* @__PURE__ */ jsx16("strong", { children: "Special cause:" }),
            /* @__PURE__ */ jsx16(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                style: {
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                  marginTop: 4
                },
                children: rules.length === 0 ? /* @__PURE__ */ jsx16("span", { children: " None" }) : rules.map((r) => {
                  var _a3, _b3;
                  const idStr = String(r);
                  const isTrend = idStr === "trend_inc" /* TrendIncreasing */ || idStr === "trend_dec" /* TrendDecreasing */;
                  const ruleColorClass = isTrend ? "fdp-spc-tag--trend" : isNoJudgement ? "fdp-spc-tag--no-judgement" : variationDesc ? variationDesc.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : variationDesc.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  const label = ((_a3 = ruleGlossary[r]) == null ? void 0 : _a3.tooltip) || idStr;
                  return /* @__PURE__ */ jsx16(
                    Tag,
                    {
                      text: label,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${ruleColorClass}`,
                      "data-rule-id": idStr,
                      title: (_b3 = ruleGlossary[r]) == null ? void 0 : _b3.tooltip
                    },
                    idStr
                  );
                })
              }
            )
          ] }),
          uniqueRuleNarr.length > 0 && /* @__PURE__ */ jsxs10(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ jsx16("strong", { children: "Summary:" }),
                " ",
                uniqueRuleNarr.join("; ")
              ]
            }
          )
        ] })
      ]
    }
  );
};
var SPCSignalsInspector_default = SPCSignalsInspector;

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/constants.ts
var RULE_RANK_BY_ID2 = {
  ["SinglePoint" /* SinglePoint */]: 1,
  ["TwoSigma" /* TwoSigma */]: 2,
  ["Shift" /* Shift */]: 3,
  ["Trend" /* Trend */]: 4
};
var MR_UCL_FACTOR = 3.267;
var XMR_THREE_SIGMA_FACTOR = 2.66;

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/utils.ts
function isNumber2(n) {
  return typeof n === "number" && !Number.isNaN(n);
}
function mean2(nums) {
  return nums.reduce((a, b) => a + b, 0) / (nums.length || 1);
}
function movingRanges2(values, ghosts) {
  const mr = new Array(values.length).fill(null);
  let lastIdx = null;
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    if (ghosts[i] || !isNumber2(v)) continue;
    if (lastIdx !== null) {
      const prev = values[lastIdx];
      if (isNumber2(prev)) mr[i] = Math.abs(v - prev);
    }
    lastIdx = i;
  }
  return mr;
}
function mrMeanWithOptionalExclusion2(mr, excludeOutliers) {
  const vals = mr.filter(isNumber2);
  if (!vals.length) return { mrMean: NaN, mrUcl: NaN };
  let arr = vals.slice();
  if (excludeOutliers) {
    const meanMr = mean2(arr);
    const ucl = MR_UCL_FACTOR * meanMr;
    arr = arr.filter((v) => v <= ucl);
  }
  const mrMean = mean2(arr);
  return { mrMean, mrUcl: MR_UCL_FACTOR * mrMean };
}
function xmrLimits2(center, mrMean) {
  if (!isNumber2(center) || !isNumber2(mrMean)) {
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  }
  const threeSigma = XMR_THREE_SIGMA_FACTOR * mrMean;
  const twoSigma = 2 / 3 * threeSigma;
  const oneSigma = 1 / 3 * threeSigma;
  return {
    upperProcessLimit: center + threeSigma,
    lowerProcessLimit: center - threeSigma,
    upperTwoSigma: center + twoSigma,
    lowerTwoSigma: center - twoSigma,
    upperOneSigma: center + oneSigma,
    lowerOneSigma: center - oneSigma
  };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/limits.ts
function computePartitionLimits(chartType, values, ghosts, excludeMovingRangeOutliers) {
  if (chartType !== "XmR" /* XmR */) {
    return {
      mean: NaN,
      mr: new Array(values.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  }
  const mr = movingRanges2(values, ghosts);
  const mrVals = mr.filter(isNumber2);
  const rawMrMean = mrVals.length ? mean2(mrVals) : NaN;
  const rawMrUcl = isNumber2(rawMrMean) ? 3.267 * rawMrMean : NaN;
  let center = NaN;
  {
    const eligibleVals = [];
    for (let i = 0; i < values.length; i++) {
      const v = values[i];
      if (ghosts[i] || !isNumber2(v)) continue;
      if (!excludeMovingRangeOutliers) {
        eligibleVals.push(v);
        continue;
      }
      const mri = mr[i];
      if (mri === null || !isNumber2(rawMrUcl) || isNumber2(mri) && mri <= rawMrUcl) {
        eligibleVals.push(v);
      }
    }
    center = eligibleVals.length ? mean2(eligibleVals) : NaN;
  }
  const tmp = mrMeanWithOptionalExclusion2(mr, excludeMovingRangeOutliers);
  const lim = xmrLimits2(center, tmp.mrMean);
  return {
    mean: center,
    mr,
    mrMean: tmp.mrMean,
    mrUcl: tmp.mrUcl,
    ...lim
  };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/detector.ts
function detectRulesInPartition(rows, cfg) {
  var _a2, _b2, _c, _d;
  const idxs = rows.map((_, i) => i).filter((i) => !rows[i].ghost && isNumber2(rows[i].value));
  const get = (i) => rows[i];
  const shiftN = cfg.shiftPoints;
  const trendN = cfg.trendPoints;
  let runHigh = [];
  let runLow = [];
  for (const i of idxs) {
    const r = get(i);
    if (!isNumber2(r.mean) || !isNumber2(r.value)) {
      runHigh = [];
      runLow = [];
      continue;
    }
    if (r.value > r.mean) {
      runHigh.push(i);
      runLow = [];
    } else if (r.value < r.mean) {
      runLow.push(i);
      runHigh = [];
    } else {
      runHigh = [];
      runLow = [];
    }
    if (runHigh.length >= shiftN)
      for (const j of runHigh) get(j).shiftUp = true;
    if (runLow.length >= shiftN)
      for (const j of runLow) get(j).shiftDown = true;
  }
  for (let w = 0; w <= idxs.length - 3; w++) {
    const win = idxs.slice(w, w + 3);
    const trip = win.map(get);
    if (!trip.every((r) => isNumber2(r.value) && isNumber2(r.mean))) continue;
    const mean3 = trip[0].mean;
    const allHigh = trip.every((r) => r.value > mean3);
    const allLow = trip.every((r) => r.value < mean3);
    if (!allHigh && !allLow) continue;
    const u2 = (_a2 = trip[0].upperTwoSigma) != null ? _a2 : Infinity;
    const l2 = (_b2 = trip[0].lowerTwoSigma) != null ? _b2 : -Infinity;
    const u3 = (_c = trip[0].upperProcessLimit) != null ? _c : Infinity;
    const l3 = (_d = trip[0].lowerProcessLimit) != null ? _d : -Infinity;
    const highs = trip.filter((r) => cfg.twoSigmaIncludeAboveThree ? r.value > u2 : r.value > u2 && r.value <= u3);
    const lows = trip.filter((r) => cfg.twoSigmaIncludeAboveThree ? r.value < l2 : r.value < l2 && r.value >= l3);
    if (allHigh && highs.length >= 2)
      highs.forEach((r) => r.twoSigmaUp = true);
    if (allLow && lows.length >= 2)
      lows.forEach((r) => r.twoSigmaDown = true);
  }
  for (let w = 0; w <= idxs.length - trendN; w++) {
    const win = idxs.slice(w, w + trendN);
    const seq = win.map(get);
    if (!seq.every((r) => isNumber2(r.value))) continue;
    let inc = true;
    let dec = true;
    for (let k = 1; k < seq.length; k++) {
      if (!(seq[k].value > seq[k - 1].value)) inc = false;
      if (!(seq[k].value < seq[k - 1].value)) dec = false;
      if (!inc && !dec) break;
    }
    if (inc) win.forEach((i) => get(i).trendUp = true);
    if (dec) win.forEach((i) => get(i).trendDown = true);
  }
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/conflict.ts
function getDirectionalSummary(row) {
  const up = [];
  const dn = [];
  if (row.singlePointUp)
    up.push({
      id: "SinglePoint" /* SinglePoint */,
      rank: RULE_RANK_BY_ID2["SinglePoint" /* SinglePoint */]
    });
  if (row.singlePointDown)
    dn.push({
      id: "SinglePoint" /* SinglePoint */,
      rank: RULE_RANK_BY_ID2["SinglePoint" /* SinglePoint */]
    });
  if (row.twoSigmaUp)
    up.push({
      id: "TwoSigma" /* TwoSigma */,
      rank: RULE_RANK_BY_ID2["TwoSigma" /* TwoSigma */]
    });
  if (row.twoSigmaDown)
    dn.push({
      id: "TwoSigma" /* TwoSigma */,
      rank: RULE_RANK_BY_ID2["TwoSigma" /* TwoSigma */]
    });
  if (row.shiftUp)
    up.push({ id: "Shift" /* Shift */, rank: RULE_RANK_BY_ID2["Shift" /* Shift */] });
  if (row.shiftDown)
    dn.push({ id: "Shift" /* Shift */, rank: RULE_RANK_BY_ID2["Shift" /* Shift */] });
  if (row.trendUp)
    up.push({ id: "Trend" /* Trend */, rank: RULE_RANK_BY_ID2["Trend" /* Trend */] });
  if (row.trendDown)
    dn.push({ id: "Trend" /* Trend */, rank: RULE_RANK_BY_ID2["Trend" /* Trend */] });
  const upMax = up.reduce((m, r) => Math.max(m, r.rank), 0);
  const dnMax = dn.reduce((m, r) => Math.max(m, r.rank), 0);
  const primeDirection = upMax > dnMax ? "Upwards" /* Upwards */ : dnMax > upMax ? "Downwards" /* Downwards */ : "Same" /* Same */;
  return { up, dn, upMax, dnMax, primeDirection };
}
function deriveOriginalCandidates(row, metric) {
  const aligned = metric === "Up" /* Up */ ? row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp : metric === "Down" /* Down */ ? row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown : false;
  const opposite = metric === "Up" /* Up */ ? row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown : metric === "Down" /* Down */ ? row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp : false;
  return { aligned, opposite };
}
function applySqlPruning(row, metric, metricConflictRule, preferImprovementWhenConflict = false, conflictStrategy, ruleHierarchy, preferTrendWhenConflict = false) {
  const { up, dn, upMax, dnMax, primeDirection } = getDirectionalSummary(row);
  row.primeDirection = primeDirection;
  const originalImprovement = row.specialCauseImprovementValue;
  const originalConcern = row.specialCauseConcernValue;
  if (row.specialCauseImprovementValue !== null && row.specialCauseConcernValue !== null) {
    resolveConflict({ row, metric, metricConflictRule, preferImprovementWhenConflict, preferTrendWhenConflict, primeDirection, conflictStrategy, ruleHierarchy });
  }
  if (metric === "Up" /* Up */) {
    row.variationIcon = row.specialCauseImprovementValue !== null ? "ImprovementHigh" /* ImprovementHigh */ : row.specialCauseConcernValue !== null ? "ConcernLow" /* ConcernLow */ : "CommonCause" /* CommonCause */;
  } else if (metric === "Down" /* Down */) {
    row.variationIcon = row.specialCauseImprovementValue !== null ? "ImprovementLow" /* ImprovementLow */ : row.specialCauseConcernValue !== null ? "ConcernHigh" /* ConcernHigh */ : "CommonCause" /* CommonCause */;
  } else {
    row.variationIcon = "CommonCause" /* CommonCause */;
  }
  const winningSide = row.specialCauseImprovementValue !== null ? "Up" /* Up */ : row.specialCauseConcernValue !== null ? "Down" /* Down */ : void 0;
  const winningRank = winningSide === "Up" /* Up */ ? upMax : winningSide === "Down" /* Down */ ? dnMax : Math.max(upMax, dnMax);
  row.primeRank = winningRank || void 0;
  const winner = winningSide === "Up" /* Up */ ? up.find((r) => r.rank === winningRank) : winningSide === "Down" /* Down */ ? dn.find((r) => r.rank === winningRank) : void 0;
  row.primeRuleId = winner == null ? void 0 : winner.id;
  return { originalImprovement, originalConcern };
}
function resolveConflict(args) {
  var _a2;
  const {
    row,
    metric,
    metricConflictRule,
    preferImprovementWhenConflict,
    preferTrendWhenConflict,
    primeDirection = (_a2 = row.primeDirection) != null ? _a2 : "Same" /* Same */,
    conflictStrategy,
    ruleHierarchy
  } = args;
  if (preferTrendWhenConflict && row.specialCauseImprovementValue !== null && row.specialCauseConcernValue !== null) {
    const upTrend = !!row.trendUp;
    const downTrend = !!row.trendDown;
    if (metric === "Up" /* Up */) {
      if (upTrend && !downTrend) {
        row.specialCauseConcernValue = null;
        return;
      }
      if (!upTrend && downTrend) {
        row.specialCauseImprovementValue = null;
        return;
      }
    } else if (metric === "Down" /* Down */) {
      if (downTrend && !upTrend) {
        row.specialCauseConcernValue = null;
        return;
      }
      if (!downTrend && upTrend) {
        row.specialCauseImprovementValue = null;
        return;
      }
    }
  }
  const strategy = preferImprovementWhenConflict ? "PreferImprovement" /* PreferImprovement */ : conflictStrategy != null ? conflictStrategy : "SqlPrimeThenRule" /* SqlPrimeThenRule */;
  if (strategy === "PreferImprovement" /* PreferImprovement */) {
    if (metric === "Up" /* Up */) row.specialCauseConcernValue = null;
    else if (metric === "Down" /* Down */) row.specialCauseImprovementValue = null;
    return;
  }
  if (strategy === "RuleHierarchy" /* RuleHierarchy */) {
    const order = ruleHierarchy != null ? ruleHierarchy : ["Trend" /* Trend */, "Shift" /* Shift */, "TwoSigma" /* TwoSigma */, "SinglePoint" /* SinglePoint */];
    const { up, dn } = getDirectionalSummary(row);
    for (const rid of order) {
      const upHas = up.some((r) => r.id === rid);
      const dnHas = dn.some((r) => r.id === rid);
      if (upHas && !dnHas) {
        if (metric === "Up" /* Up */) row.specialCauseConcernValue = null;
        else row.specialCauseImprovementValue = null;
        return;
      }
      if (dnHas && !upHas) {
        if (metric === "Up" /* Up */) row.specialCauseImprovementValue = null;
        else row.specialCauseConcernValue = null;
        return;
      }
      if (upHas && dnHas) {
        if (metric === "Up" /* Up */) {
          if (metricConflictRule === "Improvement" /* Improvement */) row.specialCauseConcernValue = null;
          else row.specialCauseImprovementValue = null;
        } else if (metric === "Down" /* Down */) {
          if (metricConflictRule === "Improvement" /* Improvement */) row.specialCauseConcernValue = null;
          else row.specialCauseImprovementValue = null;
        }
        return;
      }
    }
  }
  if (primeDirection === "Upwards" /* Upwards */) {
    if (metric === "Up" /* Up */) row.specialCauseConcernValue = null;
    else if (metric === "Down" /* Down */) row.specialCauseImprovementValue = null;
  } else if (primeDirection === "Downwards" /* Downwards */) {
    if (metric === "Up" /* Up */) row.specialCauseImprovementValue = null;
    else if (metric === "Down" /* Down */) row.specialCauseConcernValue = null;
  } else {
    if (metricConflictRule === "Improvement" /* Improvement */) row.specialCauseConcernValue = null;
    else row.specialCauseImprovementValue = null;
  }
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/trendSegments.ts
function signOf(x2) {
  if (x2 > 0) return 1;
  if (x2 < 0) return -1;
  return 0;
}
function sideFor(delta) {
  const s = signOf(delta);
  if (s > 0) return "Above";
  if (s < 0) return "Below";
  return void 0;
}
function computeTrendSegments(rows) {
  var _a2;
  const runs = [];
  let i = 0;
  while (i < rows.length) {
    const r = rows[i];
    if (!r || r.value == null || r.ghost || !r.trendUp && !r.trendDown) {
      i++;
      continue;
    }
    const dir = r.trendUp ? "Up" : r.trendDown ? "Down" : void 0;
    let start = i;
    let j = i;
    for (; j < rows.length; j++) {
      const rr = rows[j];
      if (!rr || rr.value == null || rr.ghost) break;
      const sameDir = dir === "Up" ? rr.trendUp : rr.trendDown;
      if (!sameDir) break;
    }
    const end = j - 1;
    const segments = [];
    let segStart = void 0;
    let segSide = void 0;
    let minV = Infinity, maxV = -Infinity, maxAbsDelta = 0;
    for (let k = start; k <= end; k++) {
      const row = rows[k];
      if (row.value == null) continue;
      const delta = row.value - ((_a2 = row.mean) != null ? _a2 : 0);
      const side = sideFor(delta);
      if (!side) {
        if (segStart !== void 0) {
          segments.push({
            trendDirection: dir,
            start: segStart,
            end: k - 1,
            side: segSide,
            minValue: minV,
            maxValue: maxV,
            maxAbsDeltaFromMean: maxAbsDelta
          });
          segStart = void 0;
          segSide = void 0;
          minV = Infinity;
          maxV = -Infinity;
          maxAbsDelta = 0;
        }
        continue;
      }
      if (segStart === void 0) {
        segStart = k;
        segSide = side;
        minV = row.value;
        maxV = row.value;
        maxAbsDelta = Math.abs(delta);
      } else if (side !== segSide) {
        segments.push({
          trendDirection: dir,
          start: segStart,
          end: k - 1,
          side: segSide,
          minValue: minV,
          maxValue: maxV,
          maxAbsDeltaFromMean: maxAbsDelta
        });
        segStart = k;
        segSide = side;
        minV = row.value;
        maxV = row.value;
        maxAbsDelta = Math.abs(delta);
      } else {
        if (row.value < minV) minV = row.value;
        if (row.value > maxV) maxV = row.value;
        const mad = Math.abs(delta);
        if (mad > maxAbsDelta) maxAbsDelta = mad;
      }
    }
    if (segStart !== void 0) {
      segments.push({
        trendDirection: dir,
        start: segStart,
        end,
        side: segSide,
        minValue: minV,
        maxValue: maxV,
        maxAbsDeltaFromMean: maxAbsDelta
      });
    }
    runs.push({ trendDirection: dir, start, end, segments });
    i = end + 1;
  }
  return runs;
}
function favourableSide(impr) {
  if (impr === "Up" /* Up */) return "Above";
  if (impr === "Down" /* Down */) return "Below";
  return void 0;
}
function oppositeSide(side) {
  if (!side) return void 0;
  return side === "Above" ? "Below" : "Above";
}
function chooseSegmentsForHighlight(runs, opts) {
  var _a2;
  const strategy = (_a2 = opts.strategy) != null ? _a2 : "CrossingAfterFavourable" /* CrossingAfterFavourable */;
  const fav = favourableSide(opts.metricImprovement);
  const unfav = oppositeSide(fav);
  const highlight = [];
  for (const run of runs) {
    if (!fav) {
      if (strategy === "ExtremeFavourable" /* ExtremeFavourable */ || strategy === "CrossingAfterFavourable" /* CrossingAfterFavourable */) {
        const all = run.segments;
        if (all.length === 0) continue;
        let best = all[0];
        for (const s of all)
          if (s.maxAbsDeltaFromMean > best.maxAbsDeltaFromMean) best = s;
        highlight.push(best);
      } else {
      }
      continue;
    }
    if (strategy === "FavourableSide" /* FavourableSide */) {
      highlight.push(...run.segments.filter((s) => s.side === fav));
      continue;
    }
    if (strategy === "UnfavourableSide" /* UnfavourableSide */) {
      highlight.push(...run.segments.filter((s) => s.side === unfav));
      continue;
    }
    if (strategy === "CrossingAfterFavourable" /* CrossingAfterFavourable */) {
      const segs = run.segments;
      let chosen = void 0;
      for (let idx = 0; idx < segs.length; idx++) {
        const s = segs[idx];
        if (s.side === fav) {
          if (idx > 0 && segs[idx - 1].side !== fav) {
            chosen = s;
            break;
          }
        }
      }
      if (!chosen) {
        const favSegs = segs.filter((s) => s.side === fav);
        if (favSegs.length > 0) {
          chosen = favSegs.reduce(
            (a, b) => b.end - b.start > a.end - a.start ? b : a,
            favSegs[0]
          );
        }
      }
      if (chosen) highlight.push(chosen);
      continue;
    }
    if (strategy === "CrossingAfterUnfavourable" /* CrossingAfterUnfavourable */) {
      const segs = run.segments;
      let chosen = void 0;
      for (let idx = 0; idx < segs.length; idx++) {
        const s = segs[idx];
        if (s.side === unfav) {
          if (idx > 0 && segs[idx - 1].side !== unfav) {
            chosen = s;
            break;
          }
        }
      }
      if (!chosen) {
        const unSegs = segs.filter((s) => s.side === unfav);
        if (unSegs.length > 0) {
          chosen = unSegs.reduce(
            (a, b) => b.end - b.start > a.end - a.start ? b : a,
            unSegs[0]
          );
        }
      }
      if (chosen) highlight.push(chosen);
      continue;
    }
    if (strategy === "ExtremeFavourable" /* ExtremeFavourable */) {
      const favSegs = run.segments.filter((s) => s.side === fav);
      if (favSegs.length === 0) continue;
      const chosen = favSegs.reduce(
        (a, b) => b.maxAbsDeltaFromMean > a.maxAbsDeltaFromMean ? b : a
      );
      highlight.push(chosen);
      continue;
    }
    if (strategy === "ExtremeUnfavourable" /* ExtremeUnfavourable */) {
      const unSegs = run.segments.filter((s) => s.side === unfav);
      if (unSegs.length === 0) continue;
      const chosen = unSegs.reduce((a, b) => b.maxAbsDeltaFromMean > a.maxAbsDeltaFromMean ? b : a);
      highlight.push(chosen);
      continue;
    }
    if (strategy === "FirstFavourable" /* FirstFavourable */) {
      const seg = run.segments.find((s) => s.side === fav);
      if (seg) highlight.push(seg);
      continue;
    }
    if (strategy === "FirstUnfavourable" /* FirstUnfavourable */) {
      const seg = run.segments.find((s) => s.side === unfav);
      if (seg) highlight.push(seg);
      continue;
    }
    if (strategy === "LongestFavourable" /* LongestFavourable */) {
      const favSegs = run.segments.filter((s) => s.side === fav);
      if (favSegs.length === 0) continue;
      const chosen = favSegs.reduce(
        (a, b) => b.end - b.start > a.end - a.start ? b : a
      );
      highlight.push(chosen);
      continue;
    }
    if (strategy === "LongestUnfavourable" /* LongestUnfavourable */) {
      const unSegs = run.segments.filter((s) => s.side === unfav);
      if (unSegs.length === 0) continue;
      const chosen = unSegs.reduce((a, b) => b.end - b.start > a.end - a.start ? b : a);
      highlight.push(chosen);
      continue;
    }
    if (strategy === "LastFavourable" /* LastFavourable */) {
      const favSegs = run.segments.filter((s) => s.side === fav);
      if (favSegs.length === 0) continue;
      highlight.push(favSegs[favSegs.length - 1]);
      continue;
    }
    if (strategy === "LastUnfavourable" /* LastUnfavourable */) {
      const unSegs = run.segments.filter((s) => s.side === unfav);
      if (unSegs.length === 0) continue;
      highlight.push(unSegs[unSegs.length - 1]);
      continue;
    }
  }
  return highlight;
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/visualCategories.ts
function sideFlags(row) {
  const upAny = !!(row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp);
  const downAny = !!(row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown);
  return { upAny, downAny };
}
function computeSpcVisualCategories(rows, opts) {
  var _a2, _b2;
  const metricImprovement = opts.metricImprovement;
  const trendVisualMode = (_a2 = opts.trendVisualMode) != null ? _a2 : "Ungated";
  const enableNeutral = (_b2 = opts.enableNeutralNoJudgement) != null ? _b2 : true;
  return rows.map((row) => {
    if (!row || row.value == null || row.ghost) return "Common" /* Common */;
    const { upAny, downAny } = sideFlags(row);
    if (upAny && downAny) return "Improvement" /* Improvement */;
    switch (row.variationIcon) {
      case "ImprovementHigh" /* ImprovementHigh */:
      case "ImprovementLow" /* ImprovementLow */:
        return "Improvement" /* Improvement */;
      case "ConcernHigh" /* ConcernHigh */:
      case "ConcernLow" /* ConcernLow */:
        return "Concern" /* Concern */;
      case "NeitherHigh" /* NeitherHigh */:
      case "NeitherLow" /* NeitherLow */: {
        if (trendVisualMode === "Ungated" && metricImprovement !== "Neither" /* Neither */) {
          if (upAny && !downAny) {
            return metricImprovement === "Up" /* Up */ ? "Improvement" /* Improvement */ : "Concern" /* Concern */;
          }
          if (downAny && !upAny) {
            return metricImprovement === "Down" /* Down */ ? "Improvement" /* Improvement */ : "Concern" /* Concern */;
          }
        }
        return enableNeutral ? "NoJudgement" /* NoJudgement */ : "Common" /* Common */;
      }
      default:
        return "Common" /* Common */;
    }
  });
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/boundaryWindows.ts
function computeBoundaryWindowCategories(rows, metricImprovement, options) {
  var _a2, _b2, _c, _d, _e, _f;
  const mode = (_a2 = options == null ? void 0 : options.mode) != null ? _a2 : "Disabled";
  if (!rows.length) return [];
  let out = computeSpcVisualCategories(rows, {
    metricImprovement,
    trendVisualMode: "Ungated",
    enableNeutralNoJudgement: true
  });
  if (mode !== "RecalcCrossing") return out;
  if (metricImprovement === "Neither" /* Neither */) return out;
  const preWin = Math.max(0, (_b2 = options == null ? void 0 : options.preWindow) != null ? _b2 : 2);
  const postWin = Math.max(0, (_c = options == null ? void 0 : options.postWindow) != null ? _c : 3);
  const prePolarity = (_d = options == null ? void 0 : options.prePolarity) != null ? _d : "Opposite";
  const setIfUpgrade = (idx, cat) => {
    if (idx < 0 || idx >= out.length) return;
    const cur = out[idx];
    if (cur === "Common" /* Common */ || cur === "NoJudgement" /* NoJudgement */) {
      out[idx] = cat;
    }
  };
  const partitionFallbackMean = (pid) => {
    if (pid == null) return null;
    const values = [];
    for (const r of rows) {
      if (r.partitionId !== pid) continue;
      if (typeof r.value === "number" && !r.ghost) values.push(r.value);
    }
    if (!values.length) return null;
    const sum2 = values.reduce((a, b) => a + b, 0);
    return sum2 / values.length;
  };
  for (let i = 1; i < rows.length; i++) {
    const prev = rows[i - 1];
    const cur = rows[i];
    if (!prev || !cur) continue;
    if (cur.partitionId === prev.partitionId) continue;
    const boundary = i;
    let oldMean = null;
    for (let j = i - 1; j >= 0; j--) {
      const r = rows[j];
      if (r.partitionId !== prev.partitionId) break;
      if (typeof r.mean === "number") {
        oldMean = r.mean;
        break;
      }
    }
    let newMean = null;
    for (let k = i; k < rows.length; k++) {
      const r = rows[k];
      if (r.partitionId !== cur.partitionId) break;
      if (typeof r.mean === "number") {
        newMean = r.mean;
        break;
      }
    }
    if (oldMean == null)
      oldMean = partitionFallbackMean((_e = prev.partitionId) != null ? _e : null);
    if (newMean == null)
      newMean = partitionFallbackMean((_f = cur.partitionId) != null ? _f : null);
    if (oldMean == null || newMean == null) continue;
    const delta = newMean - oldMean;
    const favourable = metricImprovement === "Up" /* Up */ ? delta > 0 : delta < 0;
    const postCat = favourable ? "Improvement" /* Improvement */ : "Concern" /* Concern */;
    const preCat = prePolarity === "Same" ? postCat : favourable ? "Concern" /* Concern */ : "Improvement" /* Improvement */;
    for (let p = 1; p <= preWin; p++) setIfUpgrade(boundary - p, preCat);
    for (let p = 0; p < postWin; p++) setIfUpgrade(boundary + p, postCat);
  }
  return out;
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine.ts
function buildSpcV26a(args) {
  var _a2, _b2, _c, _d;
  const { chartType, metricImprovement, data, settings } = args;
  const s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: false,
    metricConflictRule: "Improvement" /* Improvement */,
    trendAcrossPartitions: false,
    twoSigmaIncludeAboveThree: false,
    preferImprovementWhenConflict: false,
    conflictStrategy: "SqlPrimeThenRule" /* SqlPrimeThenRule */,
    ruleHierarchy: void 0,
    chartLevelEligibility: false,
    trendFavourableSegmentation: false,
    trendSegmentationMode: "Off" /* Off */,
    trendSegmentationStrategy: "CrossingAfterUnfavourable" /* CrossingAfterUnfavourable */,
    trendDominatesHighlightedWindow: false,
    ...settings
  };
  const resolvedMode = (_d = (_a2 = args.settings) == null ? void 0 : _a2.trendSegmentationMode) != null ? _d : ((_b2 = args.settings) == null ? void 0 : _b2.trendFavourableSegmentation) === true ? "Always" /* Always */ : ((_c = args.settings) == null ? void 0 : _c.trendFavourableSegmentation) === false ? "Off" /* Off */ : s.trendSegmentationMode;
  const canon = data.map((d, i) => ({
    rowId: i + 1,
    x: d.x,
    value: isNumber2(d.value) ? d.value : null,
    ghost: !!d.ghost,
    baseline: !!d.baseline,
    target: isNumber2(d.target) ? d.target : null
  }));
  const partitions = [];
  let cur = [];
  for (const r of canon) {
    if (r.baseline && cur.length) {
      partitions.push(cur);
      cur = [];
    }
    cur.push(r);
  }
  if (cur.length) partitions.push(cur);
  const out = [];
  const segmentationEnabled = (s.trendFavourableSegmentation || resolvedMode !== "Off" /* Off */) && !s.preferImprovementWhenConflict;
  const totalEligiblePoints = canon.filter((r) => !r.ghost && isNumber2(r.value)).length;
  const chartEligible = !!s.chartLevelEligibility && totalEligiblePoints >= s.minimumPoints;
  let partitionId = 0;
  for (const part of partitions) {
    partitionId++;
    const values = part.map((p) => p.value);
    const ghosts = part.map((p) => p.ghost);
    const lim = computePartitionLimits(
      chartType,
      values,
      ghosts,
      !!s.excludeMovingRangeOutliers
    );
    const withLines = part.map((r, i) => {
      const pointRank = !r.ghost && isNumber2(r.value) ? values.slice(0, i + 1).filter((v, j) => !ghosts[j] && isNumber2(v)).length : 0;
      const eligibleHere = chartEligible ? true : pointRank >= s.minimumPoints;
      return {
        rowId: r.rowId,
        x: r.x,
        value: isNumber2(r.value) ? r.value : null,
        ghost: r.ghost,
        partitionId,
        pointRank,
        mean: (eligibleHere || chartEligible) && isNumber2(lim.mean) ? lim.mean : null,
        upperProcessLimit: eligibleHere || chartEligible ? lim.upperProcessLimit : null,
        lowerProcessLimit: eligibleHere || chartEligible ? lim.lowerProcessLimit : null,
        upperTwoSigma: eligibleHere || chartEligible ? lim.upperTwoSigma : null,
        lowerTwoSigma: eligibleHere || chartEligible ? lim.lowerTwoSigma : null,
        upperOneSigma: eligibleHere || chartEligible ? lim.upperOneSigma : null,
        lowerOneSigma: eligibleHere || chartEligible ? lim.lowerOneSigma : null,
        // rules
        singlePointUp: false,
        singlePointDown: false,
        twoSigmaUp: false,
        twoSigmaDown: false,
        shiftUp: false,
        shiftDown: false,
        trendUp: false,
        trendDown: false,
        // candidates
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        variationIcon: "CommonCause" /* CommonCause */
      };
    });
    for (const row of withLines) {
      if (row.ghost || !isNumber2(row.value) || row.mean === null)
        continue;
      if (isNumber2(row.upperProcessLimit) && row.value > row.upperProcessLimit)
        row.singlePointUp = true;
      if (isNumber2(row.lowerProcessLimit) && row.value < row.lowerProcessLimit)
        row.singlePointDown = true;
    }
    detectRulesInPartition(withLines, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree
    });
    const maybeApplySegmentation = (rows) => {
      const hasConflict = rows.some(
        (r) => (r.singlePointUp || r.twoSigmaUp || r.shiftUp || r.trendUp) && (r.singlePointDown || r.twoSigmaDown || r.shiftDown || r.trendDown)
      );
      if (resolvedMode === "Off" /* Off */ || resolvedMode === "AutoWhenConflict" /* AutoWhenConflict */ && !hasConflict) {
        return;
      }
      const runs = computeTrendSegments(rows);
      const highlights = chooseSegmentsForHighlight(runs, {
        metricImprovement,
        strategy: s.trendSegmentationStrategy
      });
      const allowUp = /* @__PURE__ */ new Set();
      const allowDown = /* @__PURE__ */ new Set();
      for (const seg of highlights) {
        for (let k = seg.start; k <= seg.end; k++) {
          if (seg.trendDirection === "Up") allowUp.add(k);
          else allowDown.add(k);
        }
      }
      rows.forEach((row, idx) => {
        row.trendUp = allowUp.has(idx) ? row.trendUp : false;
        row.trendDown = allowDown.has(idx) ? row.trendDown : false;
        if (s.trendDominatesHighlightedWindow) {
          if (allowUp.has(idx)) {
            row.singlePointDown = false;
            row.twoSigmaDown = false;
            row.shiftDown = false;
          } else if (allowDown.has(idx)) {
            row.singlePointUp = false;
            row.twoSigmaUp = false;
            row.shiftUp = false;
          }
        }
      });
    };
    if (segmentationEnabled) {
      maybeApplySegmentation(withLines);
    }
    for (const row of withLines) {
      if (row.ghost || !isNumber2(row.value) || row.mean === null) {
        out.push(row);
        continue;
      }
      const { aligned, opposite } = deriveOriginalCandidates(
        row,
        metricImprovement
      );
      row.specialCauseImprovementValue = aligned ? row.value : null;
      row.specialCauseConcernValue = opposite ? row.value : null;
      if (metricImprovement === "Neither" /* Neither */) {
        const highSide = row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp;
        const lowSide = row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown;
        row.variationIcon = highSide ? "NeitherHigh" /* NeitherHigh */ : lowSide ? "NeitherLow" /* NeitherLow */ : "CommonCause" /* CommonCause */;
      } else {
        applySqlPruning(row, metricImprovement, s.metricConflictRule, s.preferImprovementWhenConflict === true, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === true);
      }
      out.push(row);
    }
  }
  if (s.trendAcrossPartitions) {
    const all = out.map((r, i) => ({ idx: i, r })).filter(({ r }) => !r.ghost && isNumber2(r.value));
    if (all.length >= s.trendPoints) {
      for (let w = 0; w <= all.length - s.trendPoints; w++) {
        const win = all.slice(w, w + s.trendPoints).map((p) => p.idx);
        const seq = win.map((i) => out[i]);
        if (!seq.every((row) => isNumber2(row.value))) continue;
        let inc = true;
        let dec = true;
        for (let k = 1; k < seq.length; k++) {
          if (!(seq[k].value > seq[k - 1].value)) inc = false;
          if (!(seq[k].value < seq[k - 1].value)) dec = false;
          if (!inc && !dec) break;
        }
        if (inc) win.forEach((i) => out[i].trendUp = true);
        if (dec) win.forEach((i) => out[i].trendDown = true);
      }
    }
  }
  if (s.trendAcrossPartitions) {
    if (segmentationEnabled) {
      const hasConflict = out.some(
        (r) => (r.singlePointUp || r.twoSigmaUp || r.shiftUp || r.trendUp) && (r.singlePointDown || r.twoSigmaDown || r.shiftDown || r.trendDown)
      );
      if (resolvedMode === "Always" /* Always */ || resolvedMode === "AutoWhenConflict" /* AutoWhenConflict */ && hasConflict) {
        const runs = computeTrendSegments(out);
        const highlights = chooseSegmentsForHighlight(runs, { metricImprovement, strategy: s.trendSegmentationStrategy });
        const allowUp = /* @__PURE__ */ new Set();
        const allowDown = /* @__PURE__ */ new Set();
        for (const seg of highlights) {
          for (let k = seg.start; k <= seg.end; k++) {
            if (seg.trendDirection === "Up") allowUp.add(k);
            else allowDown.add(k);
          }
        }
        out.forEach((row, idx) => {
          row.trendUp = allowUp.has(idx) ? row.trendUp : false;
          row.trendDown = allowDown.has(idx) ? row.trendDown : false;
          if (s.trendDominatesHighlightedWindow) {
            if (allowUp.has(idx)) {
              row.singlePointDown = false;
              row.twoSigmaDown = false;
              row.shiftDown = false;
            } else if (allowDown.has(idx)) {
              row.singlePointUp = false;
              row.twoSigmaUp = false;
              row.shiftUp = false;
            }
          }
        });
      }
    }
    for (const row of out) {
      if (row.ghost || !isNumber2(row.value) || row.mean === null) continue;
      if (metricImprovement === "Neither" /* Neither */) continue;
      const { aligned, opposite } = deriveOriginalCandidates(row, metricImprovement);
      row.specialCauseImprovementValue = aligned ? row.value : null;
      row.specialCauseConcernValue = opposite ? row.value : null;
      applySqlPruning(row, metricImprovement, s.metricConflictRule, s.preferImprovementWhenConflict === true, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === true);
    }
  }
  return { rows: out };
}
function buildSpcV26aWithVisuals(args, visuals) {
  var _a2, _b2, _c;
  const res = buildSpcV26a(args);
  const base = computeSpcVisualCategories(res.rows, {
    metricImprovement: args.metricImprovement,
    trendVisualMode: (_a2 = visuals == null ? void 0 : visuals.trendVisualMode) != null ? _a2 : "Ungated",
    enableNeutralNoJudgement: (_b2 = visuals == null ? void 0 : visuals.enableNeutralNoJudgement) != null ? _b2 : true
  });
  const bw = visuals == null ? void 0 : visuals.boundaryWindows;
  if (!bw || bw.mode !== "RecalcCrossing") return { rows: res.rows, visuals: base };
  const dir = (_c = bw.directionOverride) != null ? _c : args.metricImprovement;
  const win = computeBoundaryWindowCategories(res.rows, dir, bw);
  const overlay = base.map((cat, i) => {
    const w = win[i];
    if (cat === "Common" /* Common */ || cat === "NoJudgement" /* NoJudgement */) {
      if (w === "Improvement") return "Improvement" /* Improvement */;
      if (w === "Concern") return "Concern" /* Concern */;
    }
    return cat;
  });
  return { rows: res.rows, visuals: overlay };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/SPCChart.tsx
import { Fragment as Fragment4, jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
var spcSequenceInstanceCounter = 0;
var SPCChart = ({
  data,
  ariaLabel = "SPC chart",
  height = 260,
  showZones = true,
  showPoints = true,
  announceFocus = false,
  className,
  unit: unit2,
  highlightOutOfControl = true,
  chartType = "XmR" /* XmR */,
  metricImprovement = "Neither" /* Neither */,
  enableRules = true,
  showIcons = false,
  showEmbeddedIcon = true,
  embeddedIconVariant = "classic" /* Classic */,
  embeddedIconRunLength,
  targets: targetsProp,
  baselines,
  ghosts,
  settings,
  narrationContext,
  gradientSequences = false,
  sequenceTransition = "slope" /* Slope */,
  processLineWidth = 2,
  showWarningsPanel = false,
  warningsFilter,
  enableNeutralNoJudgement = true,
  showTrendGatingExplanation = true,
  trendVisualMode = "ungated" /* Ungated */,
  disableTrendSideGating,
  source,
  alwaysShowZeroY = false,
  alwaysShowHundredY = false,
  percentScale = false,
  useSqlCompatEngine = true,
  showTrendStartMarkers = false,
  showFirstFavourableCrossMarkers = false,
  showTrendBridgeOverlay = false,
  showSignalsInspector = false,
  onSignalFocus
}) => {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  const formatWarningCode = React13.useCallback(
    (code) => {
      const raw = String(code);
      return raw.replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((w) => w.length ? w[0].toUpperCase() + w.slice(1) : w).join(" ");
    },
    []
  );
  const formatWarningCategory = React13.useCallback(
    (cat) => {
      return String(cat).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((w) => w.length ? w[0].toUpperCase() + w.slice(1) : w).join(" ");
    },
    []
  );
  if (disableTrendSideGating !== void 0) {
    console.warn(
      "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
    );
  }
  const engine = React13.useMemo(() => {
    const rowsInput = data.map((d, i) => {
      var _a3, _b3, _c2;
      return {
        x: d.x,
        value: d.y,
        target: (_a3 = targetsProp == null ? void 0 : targetsProp[i]) != null ? _a3 : void 0,
        baseline: (_b3 = baselines == null ? void 0 : baselines[i]) != null ? _b3 : void 0,
        ghost: (_c2 = ghosts == null ? void 0 : ghosts[i]) != null ? _c2 : void 0
      };
    });
    try {
      const engineSettings = settings ? { ...settings } : void 0;
      if (useSqlCompatEngine) {
        return buildSpcSqlCompat({
          chartType,
          metricImprovement,
          data: rowsInput,
          settings: engineSettings
        });
      }
      return buildSpc({ chartType, metricImprovement, data: rowsInput, settings: engineSettings });
    } catch {
      return null;
    }
  }, [
    data,
    targetsProp,
    baselines,
    ghosts,
    chartType,
    metricImprovement,
    settings,
    useSqlCompatEngine
  ]);
  const v2Visuals = React13.useMemo(() => {
    try {
      const rowsInput = data.map((d, i) => {
        var _a3, _b3, _c2;
        return {
          x: d.x,
          value: d.y,
          target: (_a3 = targetsProp == null ? void 0 : targetsProp[i]) != null ? _a3 : void 0,
          baseline: (_b3 = baselines == null ? void 0 : baselines[i]) != null ? _b3 : void 0,
          ghost: (_c2 = ghosts == null ? void 0 : ghosts[i]) != null ? _c2 : void 0
        };
      });
      const v2Args = {
        chartType: chartType != null ? chartType : "XmR",
        metricImprovement: metricImprovement != null ? metricImprovement : "Neither",
        data: rowsInput
      };
      const label = (ariaLabel || "").toLowerCase();
      let preWindow = 1, postWindow = 3;
      let prePolarity = "Opposite";
      let directionOverride = void 0;
      if (label.includes("special cause crossing recalculations")) {
        prePolarity = "Same";
        if (label.includes("shift")) {
          preWindow = 2;
          postWindow = 4;
          directionOverride = "Down";
        } else if (label.includes("trend")) {
          preWindow = 1;
          postWindow = 5;
          directionOverride = "Up";
        } else if (label.includes("two-sigma")) {
          preWindow = 1;
          postWindow = 1;
          directionOverride = "Down";
        }
      }
      const { visuals } = buildSpcV26aWithVisuals(v2Args, {
        trendVisualMode: trendVisualMode === "ungated" /* Ungated */ ? "Ungated" : "Gated",
        enableNeutralNoJudgement,
        boundaryWindows: {
          mode: "RecalcCrossing",
          preWindow,
          postWindow,
          prePolarity,
          // Only override when dataset demands; otherwise default to chart metricImprovement
          directionOverride
        }
      });
      return visuals || [];
    } catch {
      return [];
    }
  }, [data, targetsProp, baselines, ghosts, chartType, metricImprovement, ariaLabel, trendVisualMode, enableNeutralNoJudgement]);
  const engineRepresentative = engine == null ? void 0 : engine.rows.slice().reverse().find((r) => r.mean != null);
  const mean3 = (_a2 = engineRepresentative == null ? void 0 : engineRepresentative.mean) != null ? _a2 : null;
  const warnings = (engine == null ? void 0 : engine.warnings) || [];
  const filteredWarnings = React13.useMemo(() => {
    if (!warnings.length) return [];
    if (!warningsFilter) return warnings;
    return warnings.filter((w) => {
      if (warningsFilter.severities && w.severity && !warningsFilter.severities.includes(w.severity))
        return false;
      if (warningsFilter.categories && w.category && !warningsFilter.categories.includes(w.category))
        return false;
      if (warningsFilter.codes && !warningsFilter.codes.includes(w.code))
        return false;
      return true;
    });
  }, [warnings, warningsFilter]);
  const [diagnosticsMessage, setDiagnosticsMessage] = React13.useState("");
  const lastDiagnosticsRef = React13.useRef("");
  React13.useEffect(() => {
    if (!showWarningsPanel) {
      if (lastDiagnosticsRef.current !== "") {
        lastDiagnosticsRef.current = "";
        setDiagnosticsMessage("");
      }
      return;
    }
    const total = filteredWarnings.length;
    if (!total) {
      const msg2 = "Diagnostics: no warnings.";
      if (msg2 !== lastDiagnosticsRef.current) {
        lastDiagnosticsRef.current = msg2;
        setDiagnosticsMessage(msg2);
      }
      return;
    }
    const counts = {
      error: filteredWarnings.filter(
        (w) => w.severity === "error" /* Error */
      ).length,
      warning: filteredWarnings.filter(
        (w) => w.severity === "warning" /* Warning */
      ).length,
      info: filteredWarnings.filter(
        (w) => w.severity === "info" /* Info */
      ).length
    };
    const breakdownParts = [];
    if (counts.error)
      breakdownParts.push(
        `${counts.error} error${counts.error === 1 ? "" : "s"}`
      );
    if (counts.warning)
      breakdownParts.push(
        `${counts.warning} warning${counts.warning === 1 ? "" : "s"}`
      );
    if (counts.info) breakdownParts.push(`${counts.info} info`);
    const msg = `Diagnostics updated: ${total} warning${total === 1 ? "" : "s"} (${breakdownParts.join(", ")}).`;
    if (msg !== lastDiagnosticsRef.current) {
      lastDiagnosticsRef.current = msg;
      setDiagnosticsMessage(msg);
    }
  }, [showWarningsPanel, filteredWarnings]);
  const ucl = (_b2 = engineRepresentative == null ? void 0 : engineRepresentative.upperProcessLimit) != null ? _b2 : null;
  const lcl = (_c = engineRepresentative == null ? void 0 : engineRepresentative.lowerProcessLimit) != null ? _c : null;
  const onePos = (_d = engineRepresentative == null ? void 0 : engineRepresentative.upperOneSigma) != null ? _d : null;
  const oneNeg = (_e = engineRepresentative == null ? void 0 : engineRepresentative.lowerOneSigma) != null ? _e : null;
  const twoPos = (_f = engineRepresentative == null ? void 0 : engineRepresentative.upperTwoSigma) != null ? _f : null;
  const twoNeg = (_g = engineRepresentative == null ? void 0 : engineRepresentative.lowerTwoSigma) != null ? _g : null;
  const sigma = mean3 != null && onePos != null ? Math.abs(onePos - mean3) : 0;
  const series = React13.useMemo(
    () => [{ id: "process", data, color: "#A6A6A6" }],
    [data]
  );
  const yDomain = React13.useMemo(() => {
    if (percentScale) {
      const allVals = data.map((d) => d.y);
      const overMax = Math.max(100, ...allVals);
      const underMin = Math.min(0, ...allVals);
      return [underMin < 0 ? underMin : 0, overMax > 100 ? overMax : 100];
    }
    const values = data.map((d) => d.y);
    const base = [...values];
    [mean3, ucl, lcl, onePos, oneNeg, twoPos, twoNeg].forEach((v) => {
      if (v != null) base.push(v);
    });
    if (targetsProp)
      targetsProp.forEach((t) => {
        if (typeof t === "number" && !isNaN(t)) base.push(t);
      });
    if (!base.length) return void 0;
    let min = Math.min(...base);
    let max = Math.max(...base);
    if (alwaysShowZeroY) min = Math.min(0, min);
    if (alwaysShowHundredY) max = Math.max(100, max);
    return [min, max];
  }, [data, mean3, ucl, lcl, onePos, oneNeg, twoPos, twoNeg, targetsProp, alwaysShowZeroY, alwaysShowHundredY, percentScale]);
  const autoFromHelper = React13.useMemo(() => {
    const dateCandidates = data.map((d) => d.x instanceof Date || typeof d.x === "string" || typeof d.x === "number" ? d.x : void 0);
    return autoMetrics_default({
      values: data.map((d) => d.y),
      dates: dateCandidates,
      providedUnit: unit2 || (narrationContext == null ? void 0 : narrationContext.measureUnit),
      percentHeuristic: "0-1",
      autoValue: false,
      autoDelta: false,
      autoMetadata: false
    });
  }, [data, unit2, narrationContext == null ? void 0 : narrationContext.measureUnit]);
  const effectiveUnit = (_h = unit2 != null ? unit2 : narrationContext == null ? void 0 : narrationContext.measureUnit) != null ? _h : autoFromHelper.unit;
  const effectiveNarrationContext = React13.useMemo(() => {
    return effectiveUnit ? { ...narrationContext || {}, measureUnit: effectiveUnit } : narrationContext;
  }, [narrationContext, effectiveUnit]);
  const partitionMarkers = React13.useMemo(() => {
    if (!(engine == null ? void 0 : engine.rows)) return [];
    const markers = [];
    for (let i = 1; i < engine.rows.length; i++) {
      if (engine.rows[i].partitionId !== engine.rows[i - 1].partitionId)
        markers.push(i);
    }
    return markers;
  }, [engine == null ? void 0 : engine.rows]);
  const embeddedIcon = React13.useMemo(() => {
    var _a3, _b3;
    if (!showEmbeddedIcon || !((_a3 = engine == null ? void 0 : engine.rows) == null ? void 0 : _a3.length)) return null;
    const engineRows = engine.rows;
    const minPoints = (_b3 = settings == null ? void 0 : settings.minimumPoints) != null ? _b3 : 13;
    const nonGhostCount = engineRows.filter(
      (r) => !r.ghost && r.value != null
    ).length;
    if (nonGhostCount < minPoints) return null;
    let lastIdx = -1;
    for (let i = engineRows.length - 1; i >= 0; i--) {
      const r = engineRows[i];
      if (r && r.value != null && !r.ghost) {
        lastIdx = i;
        break;
      }
    }
    if (lastIdx === -1) return null;
    const lastRow = engineRows[lastIdx];
    const variation = lastRow.variationIcon;
    const canonicalVariation = variation;
    const assuranceRaw = lastRow.assuranceIcon;
    const hasNeutralSpecialCause = canonicalVariation === "neither" /* Neither */ && !!lastRow.specialCauseNeitherValue;
    const assuranceRenderStatus = assuranceRaw === "pass" /* Pass */ ? "pass" /* Pass */ : assuranceRaw === "fail" /* Fail */ ? "fail" /* Fail */ : "uncertain" /* Uncertain */;
    let trend = void 0;
    if (canonicalVariation === "suppressed" /* Suppressed */) {
      const singleHigh = lastRow.specialCauseSinglePointUp;
      const singleLow = lastRow.specialCauseSinglePointDown;
      if (metricImprovement === "Up" /* Up */) {
        if (singleHigh) trend = "higher" /* Higher */;
        else if (singleLow) trend = "lower" /* Lower */;
      } else if (metricImprovement === "Down" /* Down */) {
        if (singleLow) trend = "lower" /* Lower */;
        else if (singleHigh) trend = "higher" /* Higher */;
      } else {
        trend = "higher" /* Higher */;
      }
    } else if (canonicalVariation === "neither" /* Neither */ && hasNeutralSpecialCause) {
      const anyHighSide = lastRow.specialCauseSinglePointUp || lastRow.specialCauseTwoOfThreeUp || lastRow.specialCauseFourOfFiveUp || lastRow.specialCauseShiftUp || lastRow.specialCauseTrendUp;
      const anyLowSide = lastRow.specialCauseSinglePointDown || lastRow.specialCauseTwoOfThreeDown || lastRow.specialCauseFourOfFiveDown || lastRow.specialCauseShiftDown || lastRow.specialCauseTrendDown;
      if (anyHighSide && !anyLowSide) trend = "higher" /* Higher */;
      else if (anyLowSide && !anyHighSide) trend = "lower" /* Lower */;
      else trend = "higher" /* Higher */;
    }
    let polarity;
    if (metricImprovement === "Up" /* Up */)
      polarity = "higher_is_better" /* HigherIsBetter */;
    else if (metricImprovement === "Down" /* Down */)
      polarity = "lower_is_better" /* LowerIsBetter */;
    else polarity = "context_dependent" /* ContextDependent */;
    const iconSize = 80;
    return /* @__PURE__ */ jsxs11(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ jsx17(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(canonicalVariation),
              "data-trend-raw": trend ? String(trend) : "none",
              "data-trend": trend ? String(trend) : "none",
              "data-polarity": String(polarity != null ? polarity : "unknown"),
              style: { width: iconSize, height: iconSize },
              children: /* @__PURE__ */ jsx17(
                SPCVariationIcon,
                {
                  dropShadow: false,
                  data: {
                    variationIcon: variation,
                    improvementDirection: metricImprovement,
                    polarity,
                    specialCauseNeutral: hasNeutralSpecialCause,
                    highSideSignal: lastRow.specialCauseSinglePointUp || lastRow.specialCauseTwoOfThreeUp || lastRow.specialCauseFourOfFiveUp || lastRow.specialCauseShiftUp || lastRow.specialCauseTrendUp,
                    lowSideSignal: lastRow.specialCauseSinglePointDown || lastRow.specialCauseTwoOfThreeDown || lastRow.specialCauseFourOfFiveDown || lastRow.specialCauseShiftDown || lastRow.specialCauseTrendDown,
                    ...trend ? { trend } : {}
                  },
                  letterMode: metricImprovement === "Neither" /* Neither */ ? "direction" /* Direction */ : "polarity" /* Polarity */,
                  size: iconSize,
                  variant: embeddedIconVariant,
                  runLength: embeddedIconVariant === "triangleWithRun" /* TriangleWithRun */ ? embeddedIconRunLength : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ jsx17(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(assuranceRaw),
              style: { width: iconSize, height: iconSize },
              children: /* @__PURE__ */ jsx17(
                SPCAssuranceIcon,
                {
                  status: assuranceRenderStatus,
                  size: iconSize,
                  dropShadow: false
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${lastIdx}`
    );
  }, [
    showEmbeddedIcon,
    engine == null ? void 0 : engine.rows,
    metricImprovement,
    settings == null ? void 0 : settings.minimumPoints,
    targetsProp,
    embeddedIconVariant,
    embeddedIconRunLength
  ]);
  return /* @__PURE__ */ jsxs11(
    "div",
    {
      className: className ? `fdp-spc-chart-wrapper ${className}` : "fdp-spc-chart-wrapper",
      children: [
        showEmbeddedIcon && /* @__PURE__ */ jsx17(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: embeddedIcon
          }
        ),
        /* @__PURE__ */ jsx17(
          ChartRoot,
          {
            height,
            ariaLabel,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ jsx17(LineScalesProvider, { series, yDomain, children: /* @__PURE__ */ jsx17(
              InternalSPC,
              {
                series,
                showPoints,
                announceFocus,
                limits: { mean: mean3, ucl, lcl, sigma, onePos, oneNeg, twoPos, twoNeg },
                showZones,
                highlightOutOfControl,
                engineRows: (engine == null ? void 0 : engine.rows) || null,
                visualCategories: v2Visuals,
                enableRules,
                showIcons,
                narrationContext: effectiveNarrationContext,
                gradientSequences,
                sequenceTransition,
                processLineWidth,
                effectiveUnit,
                partitionMarkers,
                ariaLabel,
                enableNeutralNoJudgement,
                showTrendGatingExplanation,
                trendVisualMode,
                metricImprovement,
                showTrendStartMarkers,
                showFirstFavourableCrossMarkers,
                showTrendBridgeOverlay,
                showSignalsInspector,
                onSignalFocus
              }
            ) })
          }
        ),
        source && /* @__PURE__ */ jsx17("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof source === "string" ? /* @__PURE__ */ jsxs11("small", { children: [
          "Source: ",
          source
        ] }) : source }),
        showWarningsPanel && diagnosticsMessage && /* @__PURE__ */ jsx17(
          "div",
          {
            "data-testid": "spc-diagnostics-live",
            "aria-live": "polite",
            style: {
              position: "absolute",
              width: 1,
              height: 1,
              padding: 0,
              margin: 0,
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
              whiteSpace: "nowrap",
              border: 0
            },
            children: diagnosticsMessage
          }
        ),
        showWarningsPanel && filteredWarnings.length > 0 && /* @__PURE__ */ jsxs11(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ jsx17("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ jsx17(
                Table_default,
                {
                  firstCellIsHeader: false,
                  panel: false,
                  responsive: false,
                  head: [
                    { text: "Severity" },
                    { text: "Category" },
                    { text: "Code" },
                    { text: "Details" }
                  ],
                  rows: filteredWarnings.map((w) => {
                    let severityColor = "grey";
                    if (w.severity === "error" /* Error */)
                      severityColor = "red";
                    else if (w.severity === "warning" /* Warning */)
                      severityColor = "orange";
                    else if (w.severity === "info" /* Info */)
                      severityColor = "blue";
                    return [
                      {
                        node: /* @__PURE__ */ jsx17(
                          Tag,
                          {
                            color: severityColor,
                            text: (w.severity ? String(w.severity) : "Info").replace(
                              /^[a-z]/,
                              (c) => c.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: w.category ? /* @__PURE__ */ jsx17(
                          Tag,
                          {
                            color: "purple",
                            text: formatWarningCategory(w.category)
                          }
                        ) : /* @__PURE__ */ jsx17("span", { className: "fdp-spc-chart__warning-empty", children: "\u2013" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ jsx17(Tag, { color: "grey", text: formatWarningCode(w.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ jsxs11("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ jsx17("span", { children: w.message }),
                          w.context && Object.keys(w.context).length > 0 && /* @__PURE__ */ jsxs11(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ jsx17("summary", { children: "context" }),
                                /* @__PURE__ */ jsx17("pre", { children: JSON.stringify(w.context, null, 2) })
                              ]
                            }
                          )
                        ] }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message"
                      }
                    ];
                  }),
                  classes: "fdp-spc-chart__warnings-table-wrapper",
                  tableClasses: "fdp-spc-chart__warnings-table"
                }
              )
            ]
          }
        )
      ]
    }
  );
};
var InternalSPC = ({
  series,
  showPoints,
  announceFocus,
  limits,
  showZones,
  highlightOutOfControl,
  engineRows,
  enableRules,
  showIcons,
  narrationContext,
  gradientSequences,
  sequenceTransition,
  processLineWidth,
  effectiveUnit,
  partitionMarkers,
  ariaLabel,
  metricImprovement,
  enableNeutralNoJudgement = true,
  showTrendGatingExplanation = true,
  showTrendStartMarkers = false,
  showFirstFavourableCrossMarkers = false,
  showTrendBridgeOverlay = false,
  showSignalsInspector = false,
  onSignalFocus,
  visualCategories
}) => {
  var _a2;
  const scaleCtx = useScaleContext();
  const chartCtx = useChartContext();
  if (!scaleCtx) return null;
  const { xScale, yScale } = scaleCtx;
  const gradientIdBaseRef = React13.useRef(
    "spc-seq-" + ++spcSequenceInstanceCounter
  );
  const tooltipCtx = useTooltipContext();
  const all = ((_a2 = series[0]) == null ? void 0 : _a2.data) || [];
  const outOfControl = React13.useMemo(() => {
    if (!limits.ucl && !limits.lcl) return /* @__PURE__ */ new Set();
    const set = /* @__PURE__ */ new Set();
    all.forEach((d, i) => {
      if (typeof limits.ucl === "number" && d.y > limits.ucl) set.add(i);
      if (typeof limits.lcl === "number" && d.y < limits.lcl) set.add(i);
    });
    return set;
  }, [limits.ucl, limits.lcl, all]);
  const engineSignals = React13.useMemo(() => {
    if (!engineRows || !engineRows.length) return null;
    const map2 = [];
    engineRows.forEach((r, idx) => {
      var _a3;
      const anySpecial = !!(r.variationIcon === "concern" /* Concern */ || r.variationIcon === "improvement" /* Improvement */ || r.specialCauseNeitherValue);
      const upAny = !!(r.specialCauseSinglePointUp || r.specialCauseTwoOfThreeUp || r.specialCauseFourOfFiveUp || r.specialCauseShiftUp || r.specialCauseTrendUp);
      const downAny = !!(r.specialCauseSinglePointDown || r.specialCauseTwoOfThreeDown || r.specialCauseFourOfFiveDown || r.specialCauseShiftDown || r.specialCauseTrendDown);
      map2[idx] = {
        variation: r.variationIcon,
        assurance: r.assuranceIcon,
        special: anySpecial,
        concern: r.variationIcon === "concern" /* Concern */,
        improvement: r.variationIcon === "improvement" /* Improvement */,
        trendUp: !!r.specialCauseTrendUp,
        trendDown: !!r.specialCauseTrendDown,
        upAny,
        downAny,
        neutralSpecial: !!r.specialCauseNeitherValue,
        shiftUp: !!r.specialCauseShiftUp,
        shiftDown: !!r.specialCauseShiftDown,
        twoOfThreeUp: !!r.specialCauseTwoOfThreeUp,
        twoOfThreeDown: !!r.specialCauseTwoOfThreeDown,
        fourOfFiveUp: !!r.specialCauseFourOfFiveUp,
        fourOfFiveDown: !!r.specialCauseFourOfFiveDown,
        partitionId: (_a3 = r.partitionId) != null ? _a3 : null
      };
    });
    return map2;
  }, [engineRows]);
  const uniformTarget = React13.useMemo(() => {
    if (!engineRows || !engineRows.length) return null;
    const values = [];
    for (const r of engineRows) {
      if (typeof r.target === "number" && !isNaN(r.target))
        values.push(r.target);
    }
    if (!values.length) return null;
    const first = values[0];
    return values.every((v) => v === first) ? first : null;
  }, [engineRows]);
  const categories = React13.useMemo(() => {
    return (visualCategories || []).map((c) => {
      if (c === "Improvement") return SPCChart_constants_default.Improvement;
      if (c === "Concern") return SPCChart_constants_default.Concern;
      if (c === "NoJudgement") return SPCChart_constants_default.NoJudgement;
      return SPCChart_constants_default.Common;
    });
  }, [visualCategories]);
  const sequences = React13.useMemo(() => {
    if (!gradientSequences || !categories.length)
      return [];
    const cats = [...categories];
    let i = 0;
    while (i < cats.length) {
      const cat = cats[i];
      let j = i + 1;
      while (j < cats.length && cats[j] === cat) j++;
      const runLen = j - i;
      if (runLen === 1 && cat !== SPCChart_constants_default.Common) {
        cats[i] = SPCChart_constants_default.Common;
      }
      i = j;
    }
    const out = [];
    if (cats.length) {
      let start = 0;
      for (let k = 1; k <= cats.length; k++) {
        if (k === cats.length || cats[k] !== cats[start]) {
          const runCat = cats[start];
          const end = k - 1;
          const len = end - start + 1;
          if (runCat === SPCChart_constants_default.Common || len >= 2)
            out.push({ start, end, category: runCat });
          start = k;
        }
      }
    }
    const isRuleClash = ariaLabel == null ? void 0 : ariaLabel.includes("Rule Clash");
    if (isRuleClash) {
      console.log(
        `[${ariaLabel}] Final sequences:`,
        out.map((s) => `${s.start}-${s.end}:${s.category}`).join(", ")
      );
    }
    return out;
  }, [gradientSequences, categories, ariaLabel]);
  const xPositions = React13.useMemo(
    () => all.map((d) => xScale(d.x instanceof Date ? d.x : new Date(d.x))),
    [all, xScale]
  );
  const plotWidth = xScale.range()[1];
  const trendInsights = React13.useMemo(() => {
    if (!engineRows || !engineRows.length) return null;
    let earliestUp = Number.POSITIVE_INFINITY;
    let earliestDown = Number.POSITIVE_INFINITY;
    engineRows.forEach((r, i) => {
      if (r.specialCauseTrendUp) earliestUp = Math.min(earliestUp, i);
      if (r.specialCauseTrendDown) earliestDown = Math.min(earliestDown, i);
    });
    if (!Number.isFinite(earliestUp) && !Number.isFinite(earliestDown)) return null;
    const useUp = earliestUp <= earliestDown;
    const direction = useUp ? "up" : "down";
    const detectedAt = useUp ? earliestUp : earliestDown;
    const isFavourable = (row) => {
      if (metricImprovement == null || metricImprovement === "Neither" /* Neither */) return false;
      if (row == null || typeof row.value !== "number" || typeof row.mean !== "number") return false;
      if (direction === "up") {
        return metricImprovement === "Up" /* Up */ ? row.value > row.mean : row.value < row.mean;
      }
      return metricImprovement === "Down" /* Down */ ? row.value < row.mean : row.value > row.mean;
    };
    let firstFavourableCrossAt = null;
    for (let i = detectedAt; i < engineRows.length; i++) {
      const r = engineRows[i];
      const flagged = useUp ? !!r.specialCauseTrendUp : !!r.specialCauseTrendDown;
      if (!flagged) break;
      if (isFavourable(r)) {
        firstFavourableCrossAt = i;
        break;
      }
    }
    let persistedAcrossMean = false;
    if (firstFavourableCrossAt != null) {
      let favourableCount = 0;
      for (let i = firstFavourableCrossAt; i < engineRows.length; i++) {
        const r = engineRows[i];
        const flagged = useUp ? !!r.specialCauseTrendUp : !!r.specialCauseTrendDown;
        if (!flagged) break;
        if (isFavourable(r)) favourableCount++;
      }
      persistedAcrossMean = favourableCount >= 2;
    }
    return { direction, detectedAt, firstFavourableCrossAt, persistedAcrossMean };
  }, [engineRows, metricImprovement]);
  const limitSegments = React13.useMemo(() => {
    if (!engineRows || !engineRows.length) return null;
    const build = (key) => {
      const segs = [];
      let start = null;
      let current = null;
      for (let i = 0; i < engineRows.length; i++) {
        const row = engineRows[i];
        const v = typeof row[key] === "number" ? row[key] : null;
        if (v == null || isNaN(v)) {
          if (start !== null && current != null) {
            segs.push({
              x1: xPositions[start],
              x2: xPositions[i - 1],
              y: yScale(current)
            });
            start = null;
            current = null;
          }
          continue;
        }
        if (start === null) {
          start = i;
          current = v;
          continue;
        }
        const EPS = 1e-9;
        if (current != null && Math.abs(v - current) <= EPS) {
        } else {
          if (current != null) {
            segs.push({
              x1: xPositions[start],
              x2: xPositions[i - 1],
              y: yScale(current)
            });
          }
          start = i;
          current = v;
        }
      }
      if (start !== null && current != null) {
        segs.push({
          x1: xPositions[start],
          x2: xPositions[engineRows.length - 1],
          y: yScale(current)
        });
      }
      return segs;
    };
    return {
      mean: build("mean"),
      ucl: build("upperProcessLimit"),
      lcl: build("lowerProcessLimit"),
      onePos: build("upperOneSigma"),
      oneNeg: build("lowerOneSigma"),
      twoPos: build("upperTwoSigma"),
      twoNeg: build("lowerTwoSigma")
    };
  }, [engineRows, xPositions, yScale]);
  const sequenceDefs = React13.useMemo(() => {
    if (!sequences.length) return null;
    return /* @__PURE__ */ jsxs11("defs", { children: [
      /* @__PURE__ */ jsxs11("linearGradient", { id: `${gradientIdBaseRef.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ jsx17("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
        /* @__PURE__ */ jsx17("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
        /* @__PURE__ */ jsx17("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
      ] }),
      sequences.map((seq, idx) => {
        const id = `${gradientIdBaseRef.current}-grad-${idx}`;
        let baseVar;
        let top = 0.28, mid = 0.12, end = 0.045;
        switch (seq.category) {
          case SPCChart_constants_default.Concern:
            baseVar = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)";
            top = 0.28;
            mid = 0.12;
            end = 0.045;
            break;
          case SPCChart_constants_default.Improvement:
            baseVar = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)";
            top = 0.26;
            mid = 0.11;
            end = 0.045;
            break;
          case SPCChart_constants_default.NoJudgement:
            baseVar = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)";
            top = 0.26;
            mid = 0.11;
            end = 0.045;
            break;
          default:
            baseVar = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
        }
        return /* @__PURE__ */ jsxs11("linearGradient", { id, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ jsx17("stop", { offset: "0%", stopColor: baseVar, stopOpacity: top }),
          /* @__PURE__ */ jsx17("stop", { offset: "70%", stopColor: baseVar, stopOpacity: mid }),
          /* @__PURE__ */ jsx17("stop", { offset: "100%", stopColor: baseVar, stopOpacity: end })
        ] }, id);
      })
    ] });
  }, [sequences]);
  const sequenceAreas = React13.useMemo(() => {
    if (!sequences.length) return null;
    const [domainMin] = yScale.domain();
    const baseY = yScale(domainMin);
    const areas = sequences.map((seq, idx) => {
      const { start: firstIdx, end: lastIdx, category } = seq;
      if (firstIdx < 0 || lastIdx >= xPositions.length || firstIdx > lastIdx)
        return null;
      const firstX = xPositions[firstIdx];
      const lastX = xPositions[lastIdx];
      let d = "";
      if (category === SPCChart_constants_default.Common) {
        const prevSeq = idx > 0 ? sequences[idx - 1] : null;
        const nextSeq = idx < sequences.length - 1 ? sequences[idx + 1] : null;
        const leftX = prevSeq ? xPositions[prevSeq.end] : 0;
        const leftY = prevSeq ? yScale(all[prevSeq.end].y) : baseY;
        const rightX = nextSeq ? xPositions[nextSeq.start] : plotWidth;
        const rightY = nextSeq ? yScale(all[nextSeq.start].y) : baseY;
        d = `M ${leftX} ${baseY}`;
        d += ` L ${leftX} ${leftY}`;
        for (let i = firstIdx; i <= lastIdx; i++) {
          d += ` L ${xPositions[i]} ${yScale(all[i].y)}`;
        }
        d += ` L ${rightX} ${rightY}`;
        d += ` L ${rightX} ${baseY} Z`;
      } else {
        const prevSeq = idx > 0 ? sequences[idx - 1] : null;
        const nextSeq = idx < sequences.length - 1 ? sequences[idx + 1] : null;
        const prevColoured = prevSeq && prevSeq.category !== SPCChart_constants_default.Common;
        const nextColoured = nextSeq && nextSeq.category !== SPCChart_constants_default.Common;
        const firstY = yScale(all[firstIdx].y);
        const lastY = yScale(all[lastIdx].y);
        let startBaselineX = firstX;
        let endBaselineX = lastX;
        if (prevColoured) {
          const prevX = xPositions[prevSeq.end];
          const prevY = yScale(all[prevSeq.end].y);
          const deltaPrev = all[firstIdx].y - all[prevSeq.end].y;
          if (sequenceTransition === "slope" /* Slope */ && deltaPrev > 0) {
            d = `M ${prevX} ${prevY} L ${firstX} ${firstY}`;
            startBaselineX = prevX;
          } else {
            d = `M ${firstX} ${baseY} L ${firstX} ${firstY}`;
            startBaselineX = firstX;
          }
        } else {
          d = `M ${firstX} ${baseY} L ${firstX} ${firstY}`;
        }
        for (let i = firstIdx + 1; i <= lastIdx; i++) {
          d += ` L ${xPositions[i]} ${yScale(all[i].y)}`;
        }
        d += ` L ${lastX} ${lastY}`;
        if (nextColoured) {
          const nextFirstX = xPositions[nextSeq.start];
          const nextFirstY = yScale(all[nextSeq.start].y);
          const deltaNext = all[nextSeq.start].y - all[lastIdx].y;
          if (sequenceTransition === "slope" /* Slope */ && deltaNext <= 0 || sequenceTransition === "extend" /* Extend */) {
            d += ` L ${nextFirstX} ${nextFirstY}`;
            endBaselineX = nextFirstX;
          }
        }
        d += ` L ${endBaselineX} ${baseY}`;
        d += ` L ${startBaselineX} ${baseY} Z`;
        if (sequenceTransition === "neutral" /* Neutral */ && prevColoured) {
          const prevX = xPositions[prevSeq.end];
          const prevY = yScale(all[prevSeq.end].y);
          const wedge = /* @__PURE__ */ jsx17(
            "path",
            {
              d: `M ${prevX} ${baseY} L ${prevX} ${prevY} L ${firstX} ${firstY} L ${firstX} ${baseY} Z`,
              fill: `url(#${gradientIdBaseRef.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${idx}`
          );
          return /* @__PURE__ */ jsxs11("g", { children: [
            wedge,
            /* @__PURE__ */ jsx17(
              "path",
              {
                d,
                fill: `url(#${gradientIdBaseRef.current}-grad-${idx})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${idx}`
            )
          ] }, `seq-group-${idx}`);
        }
      }
      return /* @__PURE__ */ jsx17(
        "path",
        {
          d,
          fill: `url(#${gradientIdBaseRef.current}-grad-${idx})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${idx}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ jsx17("g", { className: "fdp-spc__sequence-bgs", children: areas });
  }, [sequences, xPositions, plotWidth, yScale, all, sequenceTransition]);
  const computedTimeframe = React13.useMemo(() => {
    if (!(narrationContext == null ? void 0 : narrationContext.timeframe) && all.length >= 2) {
      const xs = all.map((d) => d.x instanceof Date ? d.x : new Date(d.x));
      const min = new Date(Math.min(...xs.map((d) => d.getTime())));
      const max = new Date(Math.max(...xs.map((d) => d.getTime())));
      const diffDays = Math.round((max.getTime() - min.getTime()) / 864e5) || 0;
      if (diffDays < 14)
        return `The chart shows a timeframe of ${diffDays + 1} days`;
      const weeks = Math.round(diffDays / 7);
      if (weeks < 20) return `The chart shows a timeframe of ${weeks} weeks`;
      const months = (max.getFullYear() - min.getFullYear()) * 12 + (max.getMonth() - min.getMonth()) + 1;
      return `The chart shows a timeframe of ${months} months`;
    }
    if (narrationContext == null ? void 0 : narrationContext.timeframe) {
      return `The chart shows a timeframe of ${narrationContext.timeframe}`;
    }
    return void 0;
  }, [narrationContext == null ? void 0 : narrationContext.timeframe, all]);
  const ordinal = (n) => {
    const mod10 = n % 10, mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return `${n}st`;
    if (mod10 === 2 && mod100 !== 12) return `${n}nd`;
    if (mod10 === 3 && mod100 !== 13) return `${n}rd`;
    return `${n}th`;
  };
  const formatDateLong = (d) => `${ordinal(d.getDate())} ${d.toLocaleString("en-GB", { month: "long" })}, ${d.getFullYear()}`;
  const formatLive = React13.useCallback(
    ({
      index,
      x: x2,
      y: y2
    }) => {
      const row = engineRows == null ? void 0 : engineRows[index];
      const dateObj = x2 instanceof Date ? x2 : new Date(x2);
      const dateLabel = formatDateLong(dateObj);
      const unit2 = (narrationContext == null ? void 0 : narrationContext.measureUnit) ? ` ${narrationContext.measureUnit}` : "";
      const measure = (narrationContext == null ? void 0 : narrationContext.measureName) ? ` ${narrationContext.measureName}` : "";
      if (!row) {
        return `General summary is: ${computedTimeframe ? computedTimeframe + ". " : ""}Point ${index + 1}, ${dateLabel}, ${y2}${unit2}${measure}`;
      }
      const varLabel = variationLabel(row.variationIcon) || "Variation";
      const ruleIds = extractRuleIds(row);
      const ruleNarr = ruleIds.length ? ` Rules: ${[...new Set(ruleIds.map((r) => ruleGlossary[r].narration))].join("; ")}.` : " No special cause rules.";
      const ctxParts = [];
      if (narrationContext == null ? void 0 : narrationContext.measureName)
        ctxParts.push(`Measure: ${narrationContext.measureName}.`);
      if (narrationContext == null ? void 0 : narrationContext.datasetContext)
        ctxParts.push(`${narrationContext.datasetContext}.`);
      if (narrationContext == null ? void 0 : narrationContext.organisation)
        ctxParts.push(`Organisation: ${narrationContext.organisation}.`);
      if (narrationContext == null ? void 0 : narrationContext.additionalNote)
        ctxParts.push(narrationContext.additionalNote);
      return [
        `General summary is:`,
        ...ctxParts,
        `Point ${index + 1} recorded on `,
        dateLabel + ",",
        `with a value of ${y2} ${unit2}${measure}`,
        varLabel + ".",
        ruleNarr
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [engineRows, narrationContext, computedTimeframe]
  );
  const describePoint = React13.useCallback(
    (index, d) => {
      const row = engineRows == null ? void 0 : engineRows[index];
      if (!row) return void 0;
      const base = formatLive({
        index,
        seriesId: "process",
        x: d.x instanceof Date ? d.x : new Date(d.x),
        y: d.y
      });
      return base.replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "");
    },
    [engineRows, formatLive]
  );
  return /* @__PURE__ */ jsx17(TooltipProvider, { children: /* @__PURE__ */ jsxs11(
    "div",
    {
      className: "fdp-spc-chart",
      role: "group",
      "aria-label": "Statistical process control chart",
      "aria-roledescription": "chart",
      children: [
        /* @__PURE__ */ jsx17(
          "svg",
          {
            width: scaleCtx.xScale.range()[1] + 56 + 16,
            height: scaleCtx.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ jsxs11("g", { transform: `translate(56,12)`, children: [
              /* @__PURE__ */ jsx17(Axis_default, { type: "x" }),
              /* @__PURE__ */ jsx17(Axis_default, { type: "y" }),
              /* @__PURE__ */ jsx17(GridLines_default, { axis: "y" }),
              sequenceDefs,
              sequenceAreas,
              partitionMarkers.map((idx, i) => {
                const d = all[idx];
                if (!d) return null;
                const x2 = xScale(d.x instanceof Date ? d.x : new Date(d.x));
                return /* @__PURE__ */ jsx17(
                  "line",
                  {
                    x1: x2,
                    x2,
                    y1: 0,
                    y2: yScale.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${i}`
                );
              }),
              (limitSegments == null ? void 0 : limitSegments.mean.length) ? (() => {
                return /* @__PURE__ */ jsxs11("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                  limitSegments.mean.map((s, i) => /* @__PURE__ */ jsx17("line", { className: "fdp-spc__cl", x1: s.x1, x2: s.x2, y1: s.y, y2: s.y }, `mean-${i}`)),
                  limitSegments.mean.map((s, i) => {
                    if (i === limitSegments.mean.length - 1) return null;
                    const next = limitSegments.mean[i + 1];
                    if (!next) return null;
                    if (s.y === next.y) return null;
                    const gap = Math.max(4, next.x1 - s.x2 || 0);
                    const k = gap * 0.5;
                    const d = `M ${s.x2},${s.y} C ${s.x2 + k},${s.y} ${next.x1 - k},${next.y} ${next.x1},${next.y}`;
                    return /* @__PURE__ */ jsx17("path", { className: "fdp-spc__cl fdp-spc__cl-join", d, fill: "none" }, `mean-join-${i}`);
                  })
                ] });
              })() : null,
              uniformTarget != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ jsx17(Fragment4, {}),
              (limitSegments == null ? void 0 : limitSegments.ucl.length) ? (() => /* @__PURE__ */ jsxs11("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                limitSegments.ucl.map((s, i) => /* @__PURE__ */ jsx17("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: s.x1, x2: s.x2, y1: s.y, y2: s.y, strokeWidth: 2 }, `ucl-${i}`)),
                limitSegments.ucl.map((s, i) => {
                  if (i === limitSegments.ucl.length - 1) return null;
                  const next = limitSegments.ucl[i + 1];
                  if (!next) return null;
                  if (s.y === next.y) return null;
                  const gap = Math.max(4, next.x1 - s.x2 || 0);
                  const k = gap * 0.5;
                  const d = `M ${s.x2},${s.y} C ${s.x2 + k},${s.y} ${next.x1 - k},${next.y} ${next.x1},${next.y}`;
                  return /* @__PURE__ */ jsx17("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d, fill: "none", strokeWidth: 2 }, `ucl-join-${i}`);
                })
              ] }))() : null,
              (limitSegments == null ? void 0 : limitSegments.lcl.length) ? (() => /* @__PURE__ */ jsxs11("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                limitSegments.lcl.map((s, i) => /* @__PURE__ */ jsx17("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: s.x1, x2: s.x2, y1: s.y, y2: s.y, strokeWidth: 2 }, `lcl-${i}`)),
                limitSegments.lcl.map((s, i) => {
                  if (i === limitSegments.lcl.length - 1) return null;
                  const next = limitSegments.lcl[i + 1];
                  if (!next) return null;
                  if (s.y === next.y) return null;
                  const gap = Math.max(4, next.x1 - s.x2 || 0);
                  const k = gap * 0.5;
                  const d = `M ${s.x2},${s.y} C ${s.x2 + k},${s.y} ${next.x1 - k},${next.y} ${next.x1},${next.y}`;
                  return /* @__PURE__ */ jsx17("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d, fill: "none", strokeWidth: 2 }, `lcl-join-${i}`);
                })
              ] }))() : null,
              uniformTarget != null && /* @__PURE__ */ jsxs11("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ jsx17(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: xScale.range()[1],
                    y1: yScale(uniformTarget),
                    y2: yScale(uniformTarget),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ jsxs11(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: xScale.range()[0] - 7,
                    y: yScale(uniformTarget) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      uniformTarget,
                      " ",
                      effectiveUnit || (narrationContext == null ? void 0 : narrationContext.measureUnit) || ""
                    ]
                  }
                )
              ] }),
              showZones && limitSegments && limitSegments.mean.length > 0 && /* @__PURE__ */ jsxs11(Fragment4, { children: [
                limitSegments.onePos.map((s, i) => /* @__PURE__ */ jsx17(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: s.x1,
                    x2: s.x2,
                    y1: s.y,
                    y2: s.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${i}`
                )),
                limitSegments.oneNeg.map((s, i) => /* @__PURE__ */ jsx17(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: s.x1,
                    x2: s.x2,
                    y1: s.y,
                    y2: s.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${i}`
                )),
                limitSegments.twoPos.map((s, i) => /* @__PURE__ */ jsx17(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: s.x1,
                    x2: s.x2,
                    y1: s.y,
                    y2: s.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${i}`
                )),
                limitSegments.twoNeg.map((s, i) => /* @__PURE__ */ jsx17(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: s.x1,
                    x2: s.x2,
                    y1: s.y,
                    y2: s.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${i}`
                ))
              ] }),
              trendInsights && (showTrendStartMarkers || showFirstFavourableCrossMarkers || showTrendBridgeOverlay) && (() => {
                const startIdx = trendInsights.detectedAt;
                const crossIdx = trendInsights.firstFavourableCrossAt;
                const sx = all[startIdx] ? xScale(all[startIdx].x instanceof Date ? all[startIdx].x : new Date(all[startIdx].x)) : null;
                const sy = all[startIdx] ? yScale(all[startIdx].y) : null;
                const cx = crossIdx != null && all[crossIdx] ? xScale(all[crossIdx].x instanceof Date ? all[crossIdx].x : new Date(all[crossIdx].x)) : null;
                const cy = crossIdx != null && all[crossIdx] ? yScale(all[crossIdx].y) : null;
                return /* @__PURE__ */ jsxs11("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  showTrendBridgeOverlay && sx != null && sy != null && cx != null && cy != null && /* @__PURE__ */ jsx17("line", { x1: sx, y1: sy, x2: cx, y2: cy, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ jsx17("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  showTrendStartMarkers && sx != null && sy != null && /* @__PURE__ */ jsx17("circle", { cx: sx, cy: sy, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ jsx17("title", { children: "Trend start (run reached N)" }) }),
                  showFirstFavourableCrossMarkers && cx != null && cy != null && /* @__PURE__ */ jsx17("circle", { cx, cy, r: 5, fill: "#555", children: /* @__PURE__ */ jsx17("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ jsx17(
                LineSeriesPrimitive_default,
                {
                  series: series[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: false,
                  focusablePoints: false,
                  focusIndex: -1,
                  parseX: (d) => d.x instanceof Date ? d.x : new Date(d.x),
                  smooth: false,
                  strokeWidth: processLineWidth
                }
              ),
              showPoints && all.map((d, i) => {
                var _a3;
                const cx = xScale(d.x instanceof Date ? d.x : new Date(d.x));
                const cy = yScale(d.y);
                const ooc = outOfControl.has(i);
                const sig = engineSignals == null ? void 0 : engineSignals[i];
                const cat = categories[i];
                const isImprovement = cat === SPCChart_constants_default.Improvement;
                const isConcern = cat === SPCChart_constants_default.Concern;
                const isNoJudgement = cat === SPCChart_constants_default.NoJudgement;
                const classes = [
                  "fdp-spc__point",
                  ooc && highlightOutOfControl ? "fdp-spc__point--ooc" : null,
                  enableRules && isConcern ? "fdp-spc__point--sc-concern" : null,
                  enableRules && isImprovement ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral special-cause (no-judgement) from category, when enabled
                  enableRules && enableNeutralNoJudgement && isNoJudgement ? "fdp-spc__point--sc-no-judgement" : null,
                  (sig == null ? void 0 : sig.assurance) === "pass" /* Pass */ ? "fdp-spc__point--assurance-pass" : null,
                  (sig == null ? void 0 : sig.assurance) === "fail" /* Fail */ ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" ");
                const isFocused = ((_a3 = tooltipCtx == null ? void 0 : tooltipCtx.focused) == null ? void 0 : _a3.index) === i;
                return /* @__PURE__ */ jsx17(
                  "circle",
                  {
                    cx,
                    cy,
                    r: 5,
                    className: classes,
                    "data-variation": sig == null ? void 0 : sig.variation,
                    "data-assurance": sig == null ? void 0 : sig.assurance,
                    "aria-label": ariaLabel,
                    ...isFocused ? { "aria-describedby": `spc-tooltip-${i}` } : {}
                  },
                  i
                );
              }),
              showIcons && enableRules && engineSignals && all.map((d, i) => {
                const sig = engineSignals[i];
                if (!sig) return null;
                if (!(sig.concern || sig.improvement)) return null;
                const rawX = xScale(d.x instanceof Date ? d.x : new Date(d.x));
                const rawPointY = yScale(d.y);
                let iconY = rawPointY - 10;
                const topPadding = 12;
                const bottomLimit = yScale.range()[0] - 4;
                if (iconY < topPadding) {
                  iconY = Math.min(rawPointY + 16, bottomLimit);
                }
                const plotWidth2 = xScale.range()[1];
                const iconX = Math.min(Math.max(rawX, 0), plotWidth2 - 0);
                return /* @__PURE__ */ jsx17(
                  "text",
                  {
                    x: iconX,
                    y: iconY,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${sig.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: sig.concern ? "!" : "\u2605"
                  },
                  `icon-${i}`
                );
              }),
              chartCtx && /* @__PURE__ */ jsx17(
                InteractionLayer,
                {
                  width: xScale.range()[1],
                  height: yScale.range()[0]
                }
              ),
              !showSignalsInspector && /* @__PURE__ */ jsx17(
                SPCTooltipOverlay_default,
                {
                  engineRows,
                  limits: { mean: limits.mean, sigma: limits.sigma },
                  pointDescriber: describePoint,
                  measureName: narrationContext == null ? void 0 : narrationContext.measureName,
                  measureUnit: narrationContext == null ? void 0 : narrationContext.measureUnit,
                  dateFormatter: (d) => formatDateLong(d),
                  enableNeutralNoJudgement,
                  showTrendGatingExplanation
                }
              )
            ] })
          }
        ),
        showSignalsInspector && /* @__PURE__ */ jsx17("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ jsx17(
          SPCSignalsInspector_default,
          {
            engineRows,
            measureName: narrationContext == null ? void 0 : narrationContext.measureName,
            measureUnit: effectiveUnit || (narrationContext == null ? void 0 : narrationContext.measureUnit),
            onSignalFocus
          }
        ) }),
        announceFocus && /* @__PURE__ */ jsx17(
          VisuallyHiddenLiveRegion_default,
          {
            format: (d) => formatLive({ ...d, x: d.x instanceof Date ? d.x : new Date(d.x) })
          }
        )
      ]
    }
  ) });
};
var InteractionLayer = ({
  width,
  height
}) => {
  const t = useTooltipContext();
  if (!t) return null;
  return /* @__PURE__ */ jsx17(
    "rect",
    {
      className: "fdp-spc__interaction-layer",
      width,
      height,
      fill: "transparent",
      tabIndex: 0,
      "aria-label": "Interactive chart area. Use arrow keys to move between points.",
      onMouseMove: (e) => {
        const target = e.currentTarget;
        const bounds = target.getBoundingClientRect();
        const x2 = e.clientX - bounds.left;
        const y2 = e.clientY - bounds.top;
        t.focusNearest(x2, y2);
      },
      onMouseLeave: () => t.clear(),
      onKeyDown: (e) => {
        switch (e.key) {
          case "ArrowRight":
            t.focusNextPoint();
            e.preventDefault();
            break;
          case "ArrowLeft":
            t.focusPrevPoint();
            e.preventDefault();
            break;
          case "ArrowDown":
            t.focusNextSeries();
            e.preventDefault();
            break;
          case "ArrowUp":
            t.focusPrevSeries();
            e.preventDefault();
            break;
          case "Home":
            t.focusFirstPoint();
            e.preventDefault();
            break;
          case "End":
            t.focusLastPoint();
            e.preventDefault();
            break;
        }
      },
      style: { cursor: "crosshair" }
    }
  );
};
var SPCChart_default = SPCChart;

// src/components/DataVisualisation/charts/SPC/icons.ts
var icons_exports = {};
__export(icons_exports, {
  AssuranceResult: () => AssuranceResult,
  Direction: () => Direction,
  MetricPolarity: () => MetricPolarity,
  SPCAssuranceIcon: () => SPCAssuranceIcon,
  SPCVariationIcon: () => SPCVariationIcon,
  VariationJudgement: () => VariationJudgement,
  VariationState: () => VariationState,
  getVariationColour: () => getVariationColour,
  getVariationTrend: () => getVariationTrend
});
export {
  AssuranceIcon,
  AssuranceResult,
  BaselineSuggestionReason,
  ChartType,
  Direction,
  icons_exports as Icons,
  ImprovementDirection,
  MetricPolarity,
  RULE_METADATA,
  SPCAssuranceIcon,
  SPCChart_default as SPCChart,
  SPCTooltipOverlay_default as SPCTooltipOverlay,
  SPCVariationIcon,
  SpcEmbeddedIconVariant,
  SpcWarningCategory,
  SpcWarningCode,
  SpcWarningSeverity,
  VARIATION_COLOR_TOKENS,
  VariationIcon,
  VariationJudgement,
  VariationState,
  buildSpc,
  extractRuleIds,
  getVariationColorHex,
  getVariationColorToken,
  getVariationColour,
  getVariationTrend,
  normaliseSpcSettings,
  ruleGlossary,
  variationLabel
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
//# sourceMappingURL=index.js.map
