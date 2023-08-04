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
      case "/service":
        setSelectedTab("Services");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full 2xl:container 2xl:mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded shadow-lg py-5 px-7", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "hidden md:flex flex-auto space-x-2", children: [
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
            lineNumber: 47,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/service", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Services"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Services" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Services"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 60,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 59,
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
            lineNumber: 73,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 72,
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
            lineNumber: 86,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.jsx",
        lineNumber: 45,
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
            lineNumber: 101,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold text-2xl leading-6 text-black", children: "ORIGAMI VENTURES LIMITED" }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 112,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.jsx",
        lineNumber: 100,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-5 justify-center items-center pl-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            onClick: toggleDropdown,
            className: "relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "path",
                    {
                      d: "M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z",
                      stroke: "#1F2937",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/header.jsx",
                      lineNumber: 130,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "path",
                    {
                      d: "M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21",
                      stroke: "#1F2937",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/header.jsx",
                      lineNumber: 137,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 122,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 118,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "svg",
          {
            className: "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "path",
                {
                  d: "M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z",
                  stroke: "#1F2937",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                false,
                {
                  fileName: "app/components/header.jsx",
                  lineNumber: 156,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "path",
                {
                  d: "M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21",
                  stroke: "#1F2937",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
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
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 147,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/header.jsx",
        lineNumber: 117,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.jsx",
      lineNumber: 42,
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
                  lineNumber: 180,
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
                  lineNumber: 188,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/header.jsx",
              lineNumber: 179,
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
                lineNumber: 197,
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
          lineNumber: 175,
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
                lineNumber: 215,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 214,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/service", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Services"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Services" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Services"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 228,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 227,
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
                lineNumber: 241,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 240,
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
                lineNumber: 254,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/header.jsx",
              lineNumber: 253,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 210,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 209,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.jsx",
      lineNumber: 174,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.jsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/header.jsx",
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

export {
  header_default
};
//# sourceMappingURL=/build/_shared/chunk-LJPOMTQJ.js.map
