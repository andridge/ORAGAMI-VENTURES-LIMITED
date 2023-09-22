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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full 4xl:container 2xl:mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { backgroundColor: "#BB2000" }, className: " shadow-lg py-5 px-7", children: [
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
            lineNumber: 68,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
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
            lineNumber: 80,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 79,
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
            lineNumber: 92,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 91,
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
            lineNumber: 104,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 103,
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
            lineNumber: 117,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 116,
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
            lineNumber: 132,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold text-2xl leading-6 text-black", children: "ORIGAMI VENTURES LIMITED" }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 143,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.jsx",
        lineNumber: 131,
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
                  lineNumber: 155,
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
                  lineNumber: 163,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/header.jsx",
              lineNumber: 154,
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
                lineNumber: 172,
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
          lineNumber: 150,
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
                lineNumber: 190,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 189,
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
                lineNumber: 203,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 202,
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
                lineNumber: 216,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 215,
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
                lineNumber: 229,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 228,
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
                lineNumber: 242,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 241,
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
                lineNumber: 255,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 254,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 185,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 184,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.jsx",
      lineNumber: 149,
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

export {
  header_default
};
//# sourceMappingURL=/build/_shared/chunk-UDQA3A3L.js.map
