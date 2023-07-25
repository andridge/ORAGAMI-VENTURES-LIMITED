import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FCC3XGIV.js";

// app/components/header.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function header_default() {
  const [selectedTab, setSelectedTab] = (0, import_react.useState)("Collections");
  const [isDropdownOpen, setIsDropdownOpen] = (0, import_react.useState)(false);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "2xl:container 2xl:mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded shadow-lg py-5 px-7", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 lg:pr-16 pr-6", children: [
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
            lineNumber: 18,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-normal text-2xl leading-6 text-gray-800", children: "OvonRueden" }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 28,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "hidden md:flex flex-auto space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Collections"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Collections" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Collections"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 34,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Arts"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Arts" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Arts"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 44,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Space"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Space" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Space"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 54,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Game"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Game" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Game"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 64,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Utility"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Utility" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Utility"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 74,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Cards"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Cards" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Cards"
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 84,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/header.jsx",
        lineNumber: 33,
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
                      lineNumber: 108,
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
                      lineNumber: 115,
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
                lineNumber: 100,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 96,
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
                  lineNumber: 134,
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
                  lineNumber: 141,
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
            lineNumber: 125,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/header.jsx",
        lineNumber: 95,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.jsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block md:hidden w-full mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          onClick: toggleDropdown,
          className: "cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full",
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
                  lineNumber: 158,
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
                  lineNumber: 166,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/header.jsx",
              lineNumber: 157,
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
                lineNumber: 175,
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
          lineNumber: 153,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Arts"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Arts" ? "text-white bg-indigo-600" : ""}`,
                children: "Arts"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 192,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Space"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Space" ? "text-white bg-indigo-600" : ""}`,
                children: "Space"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 200,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Game"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Game" ? "text-white bg-indigo-600" : ""}`,
                children: "Game"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 208,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Utility"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Utility" ? "text-white bg-indigo-600" : ""}`,
                children: "Utility"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 216,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Cards"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Cards" ? "text-white bg-indigo-600" : ""}`,
                children: "Cards"
              },
              void 0,
              false,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 224,
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
          lineNumber: 188,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 187,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.jsx",
      lineNumber: 152,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.jsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/header.jsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(header_default, {}, void 0, false, {
    fileName: "app/routes/index.jsx",
    lineNumber: 5,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/routes/index.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-3NCQ6FL6.js.map
