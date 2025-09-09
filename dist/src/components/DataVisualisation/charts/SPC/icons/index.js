var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

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

// src/components/DataVisualisation/charts/SPC/SPCIcons/SPCIcon.tsx
import { useId, useMemo } from "react";

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

// src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcDescriptors.ts
var VARIATION_COLOR_TOKENS = {
  improvement: {
    token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)",
    hex: "#00B0F0"
  },
  concern: {
    token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)",
    hex: "#E46C0A"
  },
  none: {
    token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)",
    hex: "#490092"
  },
  neither: {
    token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
    hex: "#A6A6A6"
  }
};

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
var pickTextColour = (hex) => {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const srgb = [r, g, b].map((v) => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
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
    hex: VARIATION_COLOR_TOKENS.none.hex,
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
  else src = POINT_LAYOUTS.special[direction === "lower" /* Lower */ ? "lower" : "higher"];
  return src.map((p) => ({ ...p }));
}

// src/components/DataVisualisation/charts/SPC/SPCIcons/SPCIcon.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
      case "none" /* None */:
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
  const map = {
    ["improving" /* Improving */]: "special_cause_improving" /* SpecialCauseImproving */,
    ["deteriorating" /* Deteriorating */]: "special_cause_deteriorating" /* SpecialCauseDeteriorating */,
    ["no_judgement" /* No_Judgement */]: "special_cause_no_judgement" /* SpecialCauseNoJudgement */,
    ["none" /* None */]: "common_cause" /* CommonCause */
  };
  const state = map[v2.judgement];
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
var buildDefs = (colourHex, shadowId, washId, dropShadow, gradientWash, stops) => /* @__PURE__ */ jsxs("defs", { children: [
  dropShadow && /* @__PURE__ */ jsxs("filter", { id: shadowId, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  gradientWash && /* @__PURE__ */ jsx("linearGradient", { id: washId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: stops.map((s) => /* @__PURE__ */ jsx(
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
  variant = "classic",
  runLength = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode = "polarity",
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
  const { state, direction, polarity } = useMemo(
    () => resolveStateAndLayout(data),
    [data]
  );
  const colour = useMemo(() => getVariationColour(state), [state]);
  const judgement = useMemo(() => getVariationTrend(state), [state]);
  const showLetterForJudgement = judgement === "improving" /* Improving */ || judgement === "deteriorating" /* Deteriorating */;
  let letter = "";
  if (showLetter && showLetterForJudgement) {
    if (letterMode === "polarity") {
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
  const points = useMemo(
    () => computePointPositions(state, direction),
    [state, direction]
  );
  const aria = ariaLabel || `${colour.label}${letter ? direction === "higher" /* Higher */ ? " \u2013 Higher" : " \u2013 Lower" : ""}`;
  const ariaDescription = deriveVariationAriaDescription(
    data
  );
  if (variant === "triangleWithRun") {
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
      shape = /* @__PURE__ */ jsx(
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
      shape = /* @__PURE__ */ jsx(
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
      return /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsxs("g", { transform: groupTransform, children: [
            shape,
            letter && /* @__PURE__ */ jsx(
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
  if (variant === "triangle") {
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
      shape = /* @__PURE__ */ jsx(
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
      shape = /* @__PURE__ */ jsx(
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
      shape = /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
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
          letter && (state === "special_cause_improving" /* SpecialCauseImproving */ || state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) && /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
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
        letter && /* @__PURE__ */ jsx(
          "text",
          {
            fill: colour.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ jsx("tspan", { x: "120", y: direction === "lower" /* Lower */ ? "340" : "155", children: letter })
          }
        ),
        isNoJudgement ? /* @__PURE__ */ jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: colour.hex,
            ...direction === "lower" /* Lower */ ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ jsxs(Fragment, { children: [
          points.length === 5 && /* @__PURE__ */ jsx(
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
            return /* @__PURE__ */ jsx(
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
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": aria,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs2("defs", { children: [
          dropShadow && /* @__PURE__ */ jsxs2("filter", { id: shadowId, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ jsx2("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ jsx2("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ jsx2("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ jsx2("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ jsx2("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          gradientWash && /* @__PURE__ */ jsxs2("linearGradient", { id: washId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsx2("stop", { offset: "0%", stopColor: colour, stopOpacity: parseFloat(gradStart) }),
            /* @__PURE__ */ jsx2("stop", { offset: "65%", stopColor: colour, stopOpacity: parseFloat(gradMid) }),
            /* @__PURE__ */ jsx2("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(gradEnd) })
          ] })
        ] }),
        /* @__PURE__ */ jsx2(
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
        /* @__PURE__ */ jsx2(
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
            children: /* @__PURE__ */ jsx2("tspan", { x: 60, y: 184, children: letter })
          }
        ),
        showTrendLines && /* @__PURE__ */ jsxs2(Fragment2, { children: [
          status === "fail" /* Fail */ ? /* @__PURE__ */ jsx2(
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
          ) : status === "uncertain" /* Uncertain */ ? /* @__PURE__ */ jsx2(
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
          ) : /* @__PURE__ */ jsx2(
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
          /* @__PURE__ */ jsx2(
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
          /* @__PURE__ */ jsx2(
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
export {
  AssuranceResult,
  Direction,
  MetricPolarity,
  SPCAssuranceIcon,
  SPCVariationIcon,
  VariationJudgement,
  VariationState,
  getVariationColour,
  getVariationTrend
};
//# sourceMappingURL=index.js.map
