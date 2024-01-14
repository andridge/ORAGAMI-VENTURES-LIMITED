import {
  Link,
  init_dist,
  useLocation
} from "/build/_shared/chunk-M74ZA6GI.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FCC3XGIV.js";

// app/components/header.jsx
var import_react = __toESM(require_react());
init_dist();
init_dist();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function header_default() {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = (0, import_react.useState)("Home");
  const [isDropdownOpen, setIsDropdownOpen] = (0, import_react.useState)(false);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  (0, import_react2.useEffect)(() => {
    switch (location.pathname) {
      case "/":
        setSelectedTab("Home");
        break;
      case "/hospitality":
        setSelectedTab("Hospitality");
        break;
      case "/training":
        setSelectedTab("Training");
        break;
      case "/consultation":
        setSelectedTab("Consultation");
        break;
      case "/blog":
        setSelectedTab("Blog");
        break;
      case "/aboutus":
        setSelectedTab("About Us");
        break;
      default:
        setSelectedTab("Home");
        break;
    }
  }, [location]);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full 4xl:container 2xl:mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { backgroundColor: "transparent" }, className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "hidden md:flex flex-auto space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Home"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Home" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Home"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 55,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative inline-block text-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "li",
            {
              onClick: () => handleTabClick("Hospitality"),
              className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Hospitality" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
              children: "Hospitality"
            },
            void 0,
            false,
            {
              fileName: "app/components/header.jsx",
              lineNumber: 69,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${selectedTab === "Hospitality" ? "block" : "hidden"} origin-top-left absolute left-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "py-1", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/simba", onClick: () => handleTabClick("Simba"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Simba" }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 84,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 83,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 82,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/chui", onClick: () => handleTabClick("Chui"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Chui" }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 91,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 90,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 89,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/flamingo", onClick: () => handleTabClick("Flamingo"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Flamingo" }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 98,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 97,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 96,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/ndovu", onClick: () => handleTabClick("Ndovu"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Ndovu" }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 105,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 104,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 103,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/header.jsx",
            lineNumber: 81,
            columnNumber: 5
          }, this) }, void 0, false, {
            fileName: "app/components/header.jsx",
            lineNumber: 80,
            columnNumber: 2
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/header.jsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/training", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Training"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Training" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Training"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 115,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 114,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/consultation", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Consultation"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Consultation" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Consultation"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 127,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 126,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Blog"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Blog" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Blog"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 139,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 138,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/aboutus", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("About Us"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "About Us" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "About Us"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 152,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 151,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.jsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "svg",
          {
            className: "cursor-pointer",
            width: "34",
            height: "34",
            viewBox: "0 0 34 34",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 167,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold text-2xl leading-6 text-white", children: "ORIGAMI VENTURES LIMITED" }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 178,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.jsx",
        lineNumber: 166,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.jsx",
      lineNumber: 50,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block md:hidden w-full mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          onClick: toggleDropdown,
          className: "cursor-pointer px-4 py-3 text-white bg-black rounded flex justify-between items-center w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "span",
                {
                  id: "s1",
                  className: `font-semibold text-sm leading-3 ${isDropdownOpen ? "" : "hidden"}`,
                  children: [
                    "Selected: ",
                    selectedTab
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/header.jsx",
                  lineNumber: 190,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "p",
                {
                  id: "textClicked",
                  className: `font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ${isDropdownOpen ? "hidden" : ""}`,
                  children: selectedTab
                },
                void 0,
                false,
                {
                  fileName: "app/components/header.jsx",
                  lineNumber: 198,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/header.jsx",
              lineNumber: 189,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "svg",
              {
                id: "ArrowSVG",
                className: `transform ${isDropdownOpen ? "rotate-180" : ""}`,
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 207,
                columnNumber: 15
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 185,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `relative ${isDropdownOpen ? "" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "ul",
        {
          id: "list",
          className: "font-normal text-base leading-4 absolute top-2 w-full rounded shadow-md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Home"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Home" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Home"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 225,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 224,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/hospitality", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Hospitality"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Hospitality" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Hospitality"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 238,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 237,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/training", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Hospitality"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Hospitality" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Training"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 251,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 250,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/consultation", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Hospitality"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Hospitality" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Consultation"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 264,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 263,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Blog"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Blog" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Blog"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 277,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 276,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/aboutus", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("About Us"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "About Us" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "About Us"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 290,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 289,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 220,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 219,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.jsx",
      lineNumber: 184,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.jsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/header.jsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
}

// app/components/footer.jsx
var import_react3 = __toESM(require_react());

// node_modules/@heroicons/react/20/solid/esm/CheckIcon.js
var React2 = __toESM(require_react(), 1);
function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React2.forwardRef(CheckIcon);
var CheckIcon_default = ForwardRef;

// app/components/footer.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function footer_default() {
  const [agreed, setAgreed] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "relative bg-blueGray-200 pt-8 pb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { className: "text-lg mt-0 mb-2 text-yellow-600 text-center", children: "Origami Ventures is committed to your success, tailoring our approach to meet your unique goals with top-notch professionalism." }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 164,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this);
}

export {
  CheckIcon_default,
  header_default,
  footer_default
};
//# sourceMappingURL=/build/_shared/chunk-NDXE4BPZ.js.map
