var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 91,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-L2NSGG5B.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("@vercel/analytics/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), { MetaFunction } = require("@vercel/remix"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Analytics, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/header.jsx
var import_react4 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function header_default() {
  let [selectedTab, setSelectedTab] = (0, import_react4.useState)("Collections"), [isDropdownOpen, setIsDropdownOpen] = (0, import_react4.useState)(!1), handleTabClick = (tab) => {
    setSelectedTab(tab);
  }, toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "2xl:container 2xl:mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded shadow-lg py-5 px-7", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center space-x-3 lg:pr-16 pr-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 18,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "font-normal text-2xl leading-6 text-gray-800", children: "OvonRueden" }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 28,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "hidden md:flex flex-auto space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Collections"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Collections" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Collections"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 34,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Arts"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Arts" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Arts"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 44,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Space"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Space" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Space"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 54,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Game"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Game" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Game"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 64,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Utility"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Utility" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Utility"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 74,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Cards"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Cards" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Cards"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 84,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-5 justify-center items-center pl-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            onClick: toggleDropdown,
            className: "relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "path",
                    {
                      d: "M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z",
                      stroke: "#1F2937",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/header.jsx",
                      lineNumber: 108,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    "path",
                    {
                      d: "M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21",
                      stroke: "#1F2937",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
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
              !0,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 100,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 96,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "svg",
          {
            className: "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "path",
                {
                  d: "M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z",
                  stroke: "#1F2937",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/header.jsx",
                  lineNumber: 134,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "path",
                {
                  d: "M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21",
                  stroke: "#1F2937",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                void 0,
                !1,
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
          !0,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 125,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 95,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block md:hidden w-full mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          onClick: toggleDropdown,
          className: "cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
                !0,
                {
                  fileName: "app/components/header.jsx",
                  lineNumber: 158,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "p",
                {
                  id: "textClicked",
                  className: `font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ${isDropdownOpen ? "hidden" : ""}`,
                  children: selectedTab
                },
                void 0,
                !1,
                {
                  fileName: "app/components/header.jsx",
                  lineNumber: 166,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/header.jsx",
              lineNumber: 157,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
              !1,
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
        !0,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 153,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `relative ${isDropdownOpen ? "" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "ul",
        {
          id: "list",
          className: "font-normal text-base leading-4 absolute top-2 w-full rounded shadow-md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Arts"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Arts" ? "text-white bg-indigo-600" : ""}`,
                children: "Arts"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 192,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Space"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Space" ? "text-white bg-indigo-600" : ""}`,
                children: "Space"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 200,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Game"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Game" ? "text-white bg-indigo-600" : ""}`,
                children: "Game"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 208,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Utility"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Utility" ? "text-white bg-indigo-600" : ""}`,
                children: "Utility"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 216,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Cards"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Cards" ? "text-white bg-indigo-600" : ""}`,
                children: "Cards"
              },
              void 0,
              !1,
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
        !0,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 188,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 187,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 152,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(header_default, {}, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 5,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/edge.jsx
var edge_exports = {};
__export(edge_exports, {
  config: () => config,
  default: () => Edge
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), config = { runtime: "edge" };
function Edge() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Welcome to Remix@Edge" }, void 0, !1, {
    fileName: "app/routes/edge.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/edge.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-SO4UDHF2.js", imports: ["/build/_shared/chunk-TIZJ7IZH.js", "/build/_shared/chunk-FCC3XGIV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3L57HHEP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/edge": { id: "routes/edge", parentId: "root", path: "edge", index: void 0, caseSensitive: void 0, module: "/build/routes/edge-AX5KFZEP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-3NCQ6FL6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "a64c0ae0", hmr: void 0, url: "/build/manifest-A64C0AE0.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/edge": {
    id: "routes/edge",
    parentId: "root",
    path: "edge",
    index: void 0,
    caseSensitive: void 0,
    module: edge_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
