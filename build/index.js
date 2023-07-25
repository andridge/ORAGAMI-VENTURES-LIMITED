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
var tailwind_default = "/build/_assets/tailwind-UKIRBWBG.css";

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
var import_react4 = require("react");

// app/img/favicon copy.jpeg
var favicon_copy_default = "/build/_assets/favicon copy-WJTYVYXK.jpeg";

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function header_default() {
  let [selectedTab, setSelectedTab] = (0, import_react4.useState)("Home"), [isDropdownOpen, setIsDropdownOpen] = (0, import_react4.useState)(!1), handleTabClick = (tab) => {
    setSelectedTab(tab);
  }, toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "2xl:container 2xl:mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded shadow-lg py-5 px-7", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "hidden md:flex flex-auto space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Home"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Home" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Home"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 21,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Page 1"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Page 1" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Page 1"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 31,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Page 2"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Page 2" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Page 2"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 41,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Page 3"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Page 3" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Page 3"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 51,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Page 4"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Page 4" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Page 4"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 61,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("About"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "About" ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "About"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 71,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-center flex-auto", children: [
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
            lineNumber: 84,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "font-normal text-2xl leading-6 text-red-800", children: "ORIGAMI VENTURES LIMITED" }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 83,
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
                      lineNumber: 113,
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
                      lineNumber: 120,
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
                lineNumber: 105,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 101,
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
                  lineNumber: 139,
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
                  lineNumber: 146,
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
            lineNumber: 130,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 100,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 17,
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
                  lineNumber: 163,
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
                  lineNumber: 171,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/header.jsx",
              lineNumber: 162,
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
                lineNumber: 180,
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
          lineNumber: 158,
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
                onClick: () => handleTabClick("Page 1"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Page 1" ? "text-white bg-indigo-600" : ""}`,
                children: "Page 1"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 197,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Page 2"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Page 2" ? "text-white bg-indigo-600" : ""}`,
                children: "Page 2"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 205,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Page 3"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Page 3" ? "text-white bg-indigo-600" : ""}`,
                children: "Page 3"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 213,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Page 4"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "Page 4" ? "text-white bg-indigo-600" : ""}`,
                children: "Page 4"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 221,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("About"),
                className: `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${selectedTab === "About" ? "text-white bg-indigo-600" : ""}`,
                children: "About"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 229,
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
          lineNumber: 193,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 192,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 157,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/img/banner-home.jpeg
var banner_home_default = "/build/_assets/banner-home-UKE7E2IO.jpeg";

// app/components/hero.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function hero_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-screen bg-gray-50 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "section",
    {
      className: "bg-cover bg-center py-32 w-full h-full",
      style: { backgroundImage: `url(${banner_home_default})` },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container mx-auto text-left text-red-600 opacity-75", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-1/2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-5xl font-medium mb-6", children: "Welcome to Origami Ventures Limited " }, void 0, !1, {
              fileName: "app/components/hero.jsx",
              lineNumber: 14,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xl mb-12", children: "Elevating hospitality with expert consultation and training for exceptional experiences." }, void 0, !1, {
              fileName: "app/components/hero.jsx",
              lineNumber: 15,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#about", className: "bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600", children: "Read More" }, void 0, !1, {
              fileName: "app/components/hero.jsx",
              lineNumber: 18,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/hero.jsx",
            lineNumber: 13,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-1/2 pl-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "img",
            {
              src: favicon_copy_default,
              className: "h-64 w-full object-cover rounded-xl",
              alt: "Layout Image"
            },
            void 0,
            !1,
            {
              fileName: "app/components/hero.jsx",
              lineNumber: 23,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/hero.jsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/hero.jsx",
          lineNumber: 12,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/hero.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/hero.jsx",
      lineNumber: 7,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/hero.jsx",
    lineNumber: 6,
    columnNumber: 1
  }, this);
}

// app/components/body.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function body_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "svg",
      {
        className: "absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "pattern",
            {
              id: "e813992c-7d03-4cc4-a2bd-151760b470a0",
              width: 200,
              height: 200,
              x: "50%",
              y: -1,
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M100 200V.5M.5 .5H200", fill: "none" }, void 0, !1, {
                fileName: "app/components/body.jsx",
                lineNumber: 20,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/body.jsx",
              lineNumber: 12,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { x: "50%", y: -1, className: "overflow-visible fill-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "path",
            {
              d: "M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z",
              strokeWidth: 0
            },
            void 0,
            !1,
            {
              fileName: "app/components/body.jsx",
              lineNumber: 24,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 23,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/body.jsx",
        lineNumber: 7,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/body.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "lg:max-w-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-base font-semibold leading-7 text-indigo-600", children: "Hospitality,Consultancy & Training" }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 36,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "A Great Comfort" }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 37,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We will help you, your hotel and your team improve operations, increase bookings, and build loyalty with proven strategies, techniques and provides numerous training opportunities through both public and company-specific, on-site courses. Our insights and trainings have helped numerous clients achieve an increase in gross revenue, future bookings, traffic, and rates." }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 38,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/body.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "img",
        {
          className: "w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]",
          src: banner_home_default,
          alt: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/body.jsx",
          lineNumber: 45,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { role: "list", className: "mt-8 space-y-8 text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Training " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 58,
            columnNumber: 21
          }, this),
          "Includes high-quality, interactive training designed to help you implement programs using proven techniques in the areas of marketing, customer service, team building, and much more. After attending our courses, attendees can implement practices immediately and put the information learned into action. Our course attendees will not only learn how to apply the techniques but can take the knowledge gained beyond the classroom and use it in everyday work situations."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 57,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Training " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 65,
            columnNumber: 21
          }, this),
          "Includes high-quality, interactive training designed to help you implement programs using proven techniques in the areas of marketing, customer service, team building, and much more. After attending our courses, attendees can implement practices immediately and put the information learned into action. Our course attendees will not only learn how to apply the techniques but can take the knowledge gained beyond the classroom and use it in everyday work situations."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 64,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 62,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Training " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 72,
            columnNumber: 21
          }, this),
          "Includes high-quality, interactive training designed to help you implement programs using proven techniques in the areas of marketing, customer service, team building, and much more. After attending our courses, attendees can implement practices immediately and put the information learned into action. Our course attendees will not only learn how to apply the techniques but can take the knowledge gained beyond the classroom and use it in everyday work situations."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 71,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 69,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/body.jsx",
        lineNumber: 54,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/body.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/body.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/grid.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function grid_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { class: "grid grid-cols-2 gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/grid.jsx",
    lineNumber: 5,
    columnNumber: 7
  }, this);
}

// app/components/footer.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function footer_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("footer", { className: "relative bg-blueGray-200 pt-8 pb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-wrap text-left lg:text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full lg:w-6/12 px-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "text-3xl fonat-semibold text-blueGray-700", children: "Let's keep in touch!" }, void 0, !1, {
          fileName: "app/components/footer.jsx",
          lineNumber: 7,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h5", { className: "text-lg mt-0 mb-2 text-blueGray-600", children: "Find us on any of these platforms, we respond 1-2 business days." }, void 0, !1, {
          fileName: "app/components/footer.jsx",
          lineNumber: 8,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-6 lg:mb-0 mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2", type: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.75 18c2.5 0 3.2-1.7 3.5-3.2v-.1c0-.1.1-.1.1 0 .4 1.7 1.5 3.2 3.5 3.3 2.3.1 4.1-1.9 4.1-4.2v-2c0-2.3-1.8-4.2-4.1-4.2-1.1 0-2.1.5-2.8 1.2-.7-.6-1.7-1.2-2.8-1.2-2.3 0-4.1 1.9-4.1 4.2 0 2.3 1.8 4.2 4.1 4.2.5 0 1.1-.1 1.5-.3v2.5c0 .7-.6 1.3-1.3 1.3-.8 0-1.3-.6-1.3-1.3v-2.3c-1.2-.8-2-2.2-2-3.8 0-2.7 2.3-5 5-5s5 2.3 5 5c0 2-1.2 3.7-3 4.6-.3.1-.7.2-1.1.3-.3 1.7-1.6 3.1-3.4 3.1h-.3c-1.7-.2-3-1.5-3.3-3.1-.3-.1-.6-.2-.9-.3-1.8-.9-3-2.6-3-4.6-.1-.2-.1-.4-.1-.5 0-.7.6-1.3 1.3-1.3.7 0 1.2.6 1.3 1.3.1.6.3 1.1.5 1.7.2.6.3 1.3.3 2v1.5c-.4.3-.8.4-1.3.5-1.2 0-2.3-.4-3.1-1.2-.8.7-1.9 1.2-3.2 1.2-2.7 0-5-2.3-5-5 0-2.7 2.3-5 5-5s5 2.3 5 5v.2c.6-.3 1.2-.3 1.7-.3 3.3 0 6 2.7 6 6v3c0 3.3-2.7 6-6 6-1.4 0-2.8-.5-3.9-1.3-.2-.1-.4-.2-.7-.3-.3.5-.5 1.1-.5 1.8v.2c0 .7.6 1.3 1.3 1.3.3 0 .6-.1.8-.2 1.3-.8 2.9-1.3 4.6-1.3z" }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 14,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 13,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 12,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2", type: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 2a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h10zM15 10a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 19,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 18,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 17,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2", type: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 22c5.522 0 10-4.477 10-10S17.522 2 12 2 2 6.477 2 12s4.478 10 10 10zm0 0v-8" }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 24,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 23,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 22,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2", type: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 21h4" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 29,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 12l-4 4-4-4m4-4v14" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 30,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.jsx",
            lineNumber: 28,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 27,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.jsx",
          lineNumber: 11,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.jsx",
        lineNumber: 6,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full lg:w-6/12 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-wrap items-top mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full lg:w-4/12 px-4 ml-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "block uppercase text-blueGray-500 text-sm font-semibold mb-2", children: "Useful Links" }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 38,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-unstyled", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm", href: "https://www.creative-tim.com/presentation?ref=njs-profile", children: "About" }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 41,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 40,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 39,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.jsx",
          lineNumber: 37,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full lg:w-4/12 px-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "block uppercase text-blueGray-500 text-sm font-semibold mb-2", children: "Other Resources" }, void 0, !1, {
            fileName: "app/components/footer.jsx",
            lineNumber: 46,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-unstyled", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm", href: "https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile", children: "License" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 49,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 48,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm", href: "https://creative-tim.com/terms?ref=njs-profile", children: "Terms & Conditions" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 52,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 51,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm", href: "https://creative-tim.com/privacy?ref=njs-profile", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 55,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 54,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm", href: "https://creative-tim.com/contact-us?ref=njs-profile", children: "Contact Us" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 58,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 57,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.jsx",
            lineNumber: 47,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.jsx",
          lineNumber: 45,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("hr", { className: "my-6 border-blueGray-300" }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-wrap items-center md:justify-between justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full md:w-4/12 px-4 mx-auto text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-sm text-blueGray-500 font-semibold py-1", children: [
      "Copyright \xA9 ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { id: "get-current-year", children: "2023" }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 69,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "https://www.creative-tim.com/product/notus-js", className: "text-blueGray-500 hover:text-gray-800", target: "_blank", children: " by " }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 70,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "https://www.creative-tim.com?ref=njs-profile", className: "text-blueGray-500 hover:text-blueGray-800", children: "OPENSEASONS" }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 71,
        columnNumber: 15
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(hero_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(body_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(grid_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 15,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/edge.jsx
var edge_exports = {};
__export(edge_exports, {
  config: () => config,
  default: () => Edge
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), config = { runtime: "edge" };
function Edge() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Welcome to Remix@Edge" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-SO4UDHF2.js", imports: ["/build/_shared/chunk-TIZJ7IZH.js", "/build/_shared/chunk-FCC3XGIV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XWKBGQHD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/edge": { id: "routes/edge", parentId: "root", path: "edge", index: void 0, caseSensitive: void 0, module: "/build/routes/edge-AX5KFZEP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-XZBH5OLB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "4f8df6bd", hmr: void 0, url: "/build/manifest-4F8DF6BD.js" };

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
