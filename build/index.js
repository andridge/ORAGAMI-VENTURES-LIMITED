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
var tailwind_default = "/build/_assets/tailwind-6UGHPWWR.css";

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

// app/routes/aboutus.jsx
var aboutus_exports = {};
__export(aboutus_exports, {
  default: () => Aboutus
});

// app/components/header.jsx
var import_react4 = require("react"), import_react5 = require("@headlessui/react"), import_solid = require("@heroicons/react/20/solid"), import_react_router_dom = require("react-router-dom");
var import_react_router_dom2 = require("react-router-dom"), import_react6 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function header_default() {
  let location = (0, import_react_router_dom2.useLocation)(), [selectedTab, setSelectedTab] = (0, import_react4.useState)("Home"), [isDropdownOpen, setIsDropdownOpen] = (0, import_react4.useState)(!1), handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  (0, import_react6.useEffect)(() => {
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
  let toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full 2xl:container 2xl:mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded shadow-lg py-5 px-7", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "hidden md:flex flex-auto space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Home"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Home" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Home"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 49,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/service", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Services"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Services" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Services"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 62,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/blog", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Blog"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Blog" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "Blog"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 74,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/aboutus", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("About Us"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "About Us" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
            children: "About Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 87,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 86,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 47,
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
            lineNumber: 102,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "font-bold text-2xl leading-6 text-black", children: "ORIGAMI VENTURES LIMITED" }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 113,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 101,
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
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
                    lineNumber: 131,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 123,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 119,
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
                  lineNumber: 151,
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
                  lineNumber: 158,
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
            lineNumber: 142,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 118,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 44,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "block md:hidden w-full mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          onClick: toggleDropdown,
          className: "cursor-pointer px-4 py-3 text-white bg-black rounded flex justify-between items-center w-full",
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
                  lineNumber: 175,
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
                  lineNumber: 183,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/header.jsx",
              lineNumber: 174,
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
                lineNumber: 192,
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
          lineNumber: 170,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Home"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Home" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Home"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 210,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 209,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/service", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Services"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Services" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Services"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 223,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 222,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/blog", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Blog"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Blog" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Blog"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 236,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 235,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/aboutus", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("About Us"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "About Us" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "About Us"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 249,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 248,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 205,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 204,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 169,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

// app/components/contact.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function contact_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { class: "flex items-center bg-stone-100 lg:h-screen font-poppins ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-11 md:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "mb-10 text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { class: "pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-black", children: "Let's Stay Connected" }, void 0, !1, {
      fileName: "app/components/contact.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/contact.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "flex flex-wrap ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "w-full px-4 lg:w-1/2 mb-11 lg:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "flex flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "w-full px-4 mb-10 sm:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "max-w-xs mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "inline-flex items-center justify-center w-12 h-12 mb-6 text-black bg-red-600 rounded-full dark:bg-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-envelope", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 17,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 16,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { class: "mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-black", children: "Email" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#", class: "text-base font-medium text-gray-500 md:text-lg dark:text-black", children: "venturesorigami@gmail.com" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 22,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 14,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/contact.jsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "w-full px-4 mb-10 sm:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "max-w-xs mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "inline-flex items-center justify-center w-12 h-12 mb-6 text-black bg-red-600 rounded-full dark:bg-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-telephone", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 29,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 28,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { class: "mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-black", children: "Phone" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#", class: "text-base font-medium text-gray-500 md:text-lg dark:text-black", children: "+254701238728" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 26,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/contact.jsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "w-full px-4 mb-10 sm:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "max-w-xs mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "inline-flex items-center justify-center w-12 h-12 mb-6 text-black bg-red-600 rounded-full dark:bg-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-geo-alt", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" }, void 0, !1, {
              fileName: "app/components/contact.jsx",
              lineNumber: 41,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }, void 0, !1, {
              fileName: "app/components/contact.jsx",
              lineNumber: 42,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/contact.jsx",
            lineNumber: 40,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { class: "mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-black", children: "Office" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#", class: "text-base font-medium text-gray-500 md:text-lg dark:text-black", children: "Sukedhara, Kathmandu" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 38,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/contact.jsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "w-full px-4 sm:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "max-w-xs mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "inline-flex items-center justify-center w-12 h-12 mb-6  text-black bg-red-600 rounded-full dark:bg-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-grid-3x3", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 55,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 54,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { class: "mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-black", children: "Social" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#", class: "inline-block mr-8 text-red-600 dark:text-red-600 dark:hover:text-black hover:text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "w-6 h-6 bi bi-facebook", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 62,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 61,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#", class: "inline-block mr-8 text-red-600 dark:text-red-600 dark:hover:text-black hover:text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "w-6 h-6 bi bi-twitter", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 67,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 66,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#", class: "inline-block mr-8 text-red-600 dark:text-red-600 dark:hover:text-black hover:text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "w-6 h-6 bi bi-linkedin", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 72,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 71,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 70,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 52,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/contact.jsx",
          lineNumber: 51,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/contact.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/contact.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "w-full px-4 lg:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { action: "", class: "p-6 bg-gray-50 dark:bg-red-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "mb-6 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { for: "firstname", class: "block mb-2 font-bold text-gray-700 uppercase dark:text-black", children: "Email" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", placeholder: "abc@gmail.com", required: "", class: "block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-black border border-gray-200 rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-black dark:bg-black " }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 84,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 81,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "mb-6 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { for: "firstname", class: "block mb-2 font-bold text-gray-700 uppercase dark:text-black", children: "Subject" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", placeholder: "I'm asking information for...", required: "", class: "block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-black border border-gray-200 rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-black dark:bg-black " }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 89,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 86,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "mb-6 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { for: "firstname", class: "block mb-2 font-bold text-gray-700 uppercase dark:text-black", children: "Message" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 92,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("textarea", { type: "message", placeholder: "Describe your problem", required: "", class: "block w-full px-4 leading-tight text-gray-700 bg-black border border-gray-200 rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-black dark:bg-black  " }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 94,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 91,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:venturesorigami@gmail.com", class: "px-4 py-2 font-medium text-gray-100 bg-black rounded shadow hover:bg-blue-700 dark:bg-black dark:hover:bg-red-600", children: "Send" }, void 0, !1, {
          fileName: "app/components/contact.jsx",
          lineNumber: 96,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/contact.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/contact.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/contact.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/contact.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/contact.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/aboutus.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Aboutus() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/aboutus.jsx",
      lineNumber: 6,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(contact_default, {}, void 0, !1, {
      fileName: "app/routes/aboutus.jsx",
      lineNumber: 7,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aboutus.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/service.jsx
var service_exports = {};
__export(service_exports, {
  default: () => Service
});

// app/components/training.jsx
var import_solid2 = require("@heroicons/react/20/solid"), import_react7 = require("react"), import_react8 = require("@headlessui/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), includedFeatures = [
  "Customer service",
  "Food and beverage training",
  "Health and safety",
  "Team building"
];
function training_default() {
  let [open, setOpen] = (0, import_react7.useState)(!0), cancelButtonRef = (0, import_react7.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "TRAINING" }, void 0, !1, {
        fileName: "app/components/training.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "We offer programs tailored to specific needs." }, void 0, !1, {
        fileName: "app/components/training.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/training.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/training.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "Offering access to specialized courses and resources for skill development, enabling professionals to excel in service-related industries through continuous learning and expertise enhancement." }, void 0, !1, {
          fileName: "app/components/training.jsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/training.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/training.jsx",
            lineNumber: 32,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/training.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_solid2.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/training.jsx",
                lineNumber: 40,
                columnNumber: 19
              }, this),
              feature
            ] }, feature, !0, {
              fileName: "app/components/training.jsx",
              lineNumber: 39,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/training.jsx",
            lineNumber: 34,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/training.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-base font-semibold text-gray-600", children: "Pay once" }, void 0, !1, {
          fileName: "app/components/training.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-6 flex items-baseline justify-center gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-5xl font-bold tracking-tight text-gray-900", children: "34900" }, void 0, !1, {
            fileName: "app/components/training.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-sm font-semibold leading-6 tracking-wide text-gray-600", children: "Ksh" }, void 0, !1, {
            fileName: "app/components/training.jsx",
            lineNumber: 52,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/training.jsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "a",
          {
            href: "mailto:venturesorigami@gmail.com",
            className: "mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
            children: "Contact Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/training.jsx",
            lineNumber: 55,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
          fileName: "app/components/training.jsx",
          lineNumber: 61,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/training.jsx",
        lineNumber: 48,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/training.jsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/training.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/training.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/training.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/training.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/components/consultation.jsx
var import_solid3 = require("@heroicons/react/20/solid"), import_react9 = require("react"), import_react10 = require("@headlessui/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), includedFeatures2 = [
  "Experts guidance",
  "Strategic insights",
  "Networking opportunities"
];
function consultation_default() {
  let [open, setOpen] = (0, import_react9.useState)(!0), cancelButtonRef = (0, import_react9.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "CONSULTATION" }, void 0, !1, {
        fileName: "app/components/consultation.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "We empower industry professionals to navigate challenges and optimize their businesses for success and growth." }, void 0, !1, {
        fileName: "app/components/consultation.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/consultation.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "Offering guidance on workforce planning, recruitment, training, and compliance to optimize staff performance, engagement, and overall organizational success within the dynamic hospitality sector." }, void 0, !1, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/consultation.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/consultation.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures2.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid3.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/consultation.jsx",
                lineNumber: 39,
                columnNumber: 19
              }, this),
              feature
            ] }, feature, !0, {
              fileName: "app/components/consultation.jsx",
              lineNumber: 38,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/consultation.jsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/consultation.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-base font-semibold text-gray-600", children: "Pay once" }, void 0, !1, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 flex items-baseline justify-center gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-5xl font-bold tracking-tight text-gray-900", children: "900 /hr" }, void 0, !1, {
            fileName: "app/components/consultation.jsx",
            lineNumber: 50,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-sm font-semibold leading-6 tracking-wide text-gray-600", children: "Ksh" }, void 0, !1, {
            fileName: "app/components/consultation.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "a",
          {
            href: "mailto:venturesorigami@gmail.com",
            className: "mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
            children: "Contact Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/consultation.jsx",
            lineNumber: 54,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/consultation.jsx",
        lineNumber: 47,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/consultation.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/consultation.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/consultation.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/consultation.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/consultation.jsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/hospitality.jsx
var import_solid4 = require("@heroicons/react/20/solid"), import_react11 = require("react"), import_react12 = require("@headlessui/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), includedFeatures3 = [
  "Personalized services",
  "Enhancing travel experiences",
  "Event catering solutions"
];
function hospitality_default() {
  let [open, setOpen] = (0, import_react11.useState)(!0), cancelButtonRef = (0, import_react11.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "HOSPITALITY" }, void 0, !1, {
        fileName: "app/components/hospitality.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "We encompass travel and catering" }, void 0, !1, {
        fileName: "app/components/hospitality.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hospitality.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "Offering exclusive benefits, discounts, and personalized experiences, enhancing both leisure and event-related services for members" }, void 0, !1, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures3.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_solid4.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/hospitality.jsx",
                lineNumber: 39,
                columnNumber: 19
              }, this),
              feature
            ] }, feature, !0, {
              fileName: "app/components/hospitality.jsx",
              lineNumber: 38,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/hospitality.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-base font-semibold text-gray-600", children: "Pay once" }, void 0, !1, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-6 flex items-baseline justify-center gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-5xl font-bold tracking-tight text-gray-900", children: "9000" }, void 0, !1, {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 50,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-sm font-semibold leading-6 tracking-wide text-gray-600", children: "Ksh" }, void 0, !1, {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "a",
          {
            href: "mailto:venturesorigami@gmail.com",
            className: "mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
            children: "Contact Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 54,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/hospitality.jsx",
        lineNumber: 47,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/hospitality.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/hospitality.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hospitality.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/hospitality.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/hospitality.jsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/routes/service.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Service() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/service.jsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(training_default, {}, void 0, !1, {
      fileName: "app/routes/service.jsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(consultation_default, {}, void 0, !1, {
      fileName: "app/routes/service.jsx",
      lineNumber: 10,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(hospitality_default, {}, void 0, !1, {
      fileName: "app/routes/service.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/service.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/img/banner-home.jpeg
var banner_home_default = "/build/_assets/banner-home-RG4OQMPE.jpeg";

// app/components/hero.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function hero_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "h-screen bg-gray-50 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "section",
    {
      className: "bg-cover bg-center py-32 w-full h-full",
      style: { backgroundImage: `url(${banner_home_default})` },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "container mx-auto text-left text-white opacity-105", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-1/2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-5xl  mb-6 text-red-600 font-bold", children: "WELCOME TO ORIGAMI VENTURES LIMITED" }, void 0, !1, {
            fileName: "app/components/hero.jsx",
            lineNumber: 14,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xl mb-12 ", children: "Our vision is to be a holistic partner in the hospitality industry, providing comprehensive solutions and expertise that encompass all aspects of successful hospitality management." }, void 0, !1, {
            fileName: "app/components/hero.jsx",
            lineNumber: 15,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", { href: "/aboutus", className: "bg-red-600 text-white py-4 px-12 rounded-full hover:bg-black", children: "Read More" }, void 0, !1, {
            fileName: "app/components/hero.jsx",
            lineNumber: 18,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/hero.jsx",
          lineNumber: 13,
          columnNumber: 13
        }, this) }, void 0, !1, {
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

// app/img/Swahili-Beach-Resort.jpeg
var Swahili_Beach_Resort_default = "/build/_assets/Swahili-Beach-Resort-5ULHTIBC.jpeg";

// app/components/body.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function body_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "svg",
      {
        className: "absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "pattern",
            {
              id: "e813992c-7d03-4cc4-a2bd-151760b470a0",
              width: 200,
              height: 200,
              x: "50%",
              y: -1,
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M100 200V.5M.5 .5H200", fill: "none" }, void 0, !1, {
                fileName: "app/components/body.jsx",
                lineNumber: 21,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/body.jsx",
              lineNumber: 13,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 12,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { x: "50%", y: -1, className: "overflow-visible fill-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "path",
            {
              d: "M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z",
              strokeWidth: 0
            },
            void 0,
            !1,
            {
              fileName: "app/components/body.jsx",
              lineNumber: 25,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 24,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/body.jsx",
        lineNumber: 8,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/body.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "lg:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "Our comprehensive range of services includes:" }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 37,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "img",
        {
          className: "w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]",
          src: Swahili_Beach_Resort_default,
          alt: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/body.jsx",
          lineNumber: 42,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "max-w-xl text-base leading-7 text-black lg:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { role: "list", className: "mt-8 space-y-8 text-black ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Strategic positioning and planning " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 56,
            columnNumber: 21
          }, this),
          "involving strategic placement and foresight to maximize competitive advantage and guest satisfaction."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 55,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Training " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 63,
            columnNumber: 21
          }, this),
          "programs tailored to specific needs, emphasizing continuous improvement to include but not limited to health and safety, food and beverage training, customer service, team building"
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 62,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 60,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Finance management " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 70,
            columnNumber: 21
          }, this),
          "entailing budgeting, cost control, and revenue optimization to ensure efficient operations, profitability, and sustainable growth within the industry's unique financial dynamics."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 69,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Human Resource advisory level " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 77,
            columnNumber: 21
          }, this),
          "offers expert guidance on workforce planning, recruitment, training, and compliance to optimize staff performance, engagement, and overall organizational success within the dynamic hospitality sector."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 76,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Event management " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 84,
            columnNumber: 21
          }, this),
          "involving orchestrating seamless events, from planning to execution, considering logistics, coordination, and guest experiences, ensuring memorable and successful gatherings within the hospitality industry."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 83,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Pre opening " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 91,
            columnNumber: 21
          }, this),
          "preparatory phase before a new establishment's launch, encompassing staff training, operational setup, marketing strategies, and final touches to ensure a successful opening."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 90,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 88,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Sustainable practices and circular economy " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 98,
            columnNumber: 21
          }, this),
          "emphasizing eco-friendly operations, resource efficiency, waste reduction, and recycling, fostering environmental responsibility and long-term viability while minimizing negative impacts on the ecosystem."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 97,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 95,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Promoting equity and diversity within the hospitality industry " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 105,
            columnNumber: 21
          }, this),
          "fostering inclusive workplaces, embracing varied backgrounds, cultures, and perspectives, ensuring equal opportunities, and enriching the industry's innovation and growth."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 104,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 102,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Crafting and growing unique brands for our clients through strategic positioning " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 112,
            columnNumber: 21
          }, this),
          "aligning values, and creating memorable experiences to establish a distinct identity, attracting and retaining guests effectively."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 111,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 109,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/body.jsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/body.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/body.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/img/Fairmont-Mount-Kenya-Safari-Club3.jpg
var Fairmont_Mount_Kenya_Safari_Club3_default = "/build/_assets/Fairmont-Mount-Kenya-Safari-Club3-YMJANCI2.jpg";

// app/img/maasai-mara3.jpeg
var maasai_mara3_default = "/build/_assets/maasai-mara3-GXJXOEW6.jpeg";

// app/img/masai-mara.jpg
var masai_mara_default = "/build/_assets/masai-mara-K5JJLBKI.jpg";

// app/img/samburu2.jpeg
var samburu2_default = "/build/_assets/samburu2-KO76T7SK.jpeg";

// app/img/The-Majlis-Hotel-Resort-Manda-Island-Lamu-Pool.jpg
var The_Majlis_Hotel_Resort_Manda_Island_Lamu_Pool_default = "/build/_assets/The-Majlis-Hotel-Resort-Manda-Island-Lamu-Pool-QTU2ZZ6Q.jpg";

// app/img/breakfastwithgiraffe.jpg
var breakfastwithgiraffe_default = "/build/_assets/breakfastwithgiraffe-DENUJ4W2.jpg";

// app/components/grid.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function grid_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { class: "grid grid-cols-2 gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: Fairmont_Mount_Kenya_Safari_Club3_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: maasai_mara3_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: masai_mara_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: samburu2_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: The_Majlis_Hotel_Resort_Manda_Island_Lamu_Pool_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: breakfastwithgiraffe_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/grid.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this);
}

// app/components/footer.jsx
var import_react13 = require("react"), import_solid5 = require("@heroicons/react/20/solid"), import_react14 = require("@headlessui/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function footer_default() {
  let [agreed, setAgreed] = (0, import_react13.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("footer", { className: "relative bg-blueGray-200 pt-8 pb-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h5", { className: "text-lg mt-0 mb-2 text-blueGray-600", children: "We are dedicated to helping our clients achieve success, focusing on their specific needs and goals while upholding the highest standards of quality and professionalism. Origami Ventures is ready to embark on a journey with you, providing expert guidance and support to maximize your potential in the dynamic and ever-evolving hospitality industry." }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 164,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("hr", { className: "my-6 border-blueGray-300" }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 169,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-wrap items-center md:justify-between justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-full md:w-4/12 px-4 mx-auto text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-sm text-blueGray-500 font-semibold py-1", children: [
      "Copyright \xA9 ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { id: "get-current-year", children: "2023" }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 173,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { href: "https://www.creative-tim.com/product/notus-js", className: "text-blueGray-500 hover:text-gray-800", target: "_blank", children: " by " }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 174,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { href: "https://www.creative-tim.com?ref=njs-profile", className: "text-blueGray-500 hover:text-blueGray-800", children: "OPENSEASONS" }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 175,
        columnNumber: 15
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 172,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 171,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 170,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this);
}

// app/components/teamsections.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function teamsections_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 ", children: "Meet our leadership" }, void 0, !1, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "Origami Ventures Ltd was founded in 2022. Our training team consists of experienced hospitality trainers who possess in-depth knowledge and practical expertise in various aspects of hotel operations, customer service, and organizational excellence. They are skilled at creating dynamic and engaging learning environments, ensuring that participants gain valuable insights and skills aligned with Origami Ventures' vision and mission." }, void 0, !1, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 25,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { role: "list", className: "grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2", children: [
      {
        name: "Jovita Ateya",
        role: "Co-Founder",
        imageUrl: "URL_TO_JOVITA_IMAGE"
      },
      {
        name: "Nosiku Small",
        role: "Co-Founder",
        imageUrl: "URL_TO_NOSIKU_IMAGE"
      },
      {
        name: "Esau Odeny",
        role: "Co-Founder",
        imageUrl: "URL_TO_ESAU_IMAGE"
      }
    ].map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center gap-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { className: "h-16 w-16 rounded-full", src: person.imageUrl, alt: `${person.name}'s Image` }, void 0, !1, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-base font-semibold leading-7 tracking-tight text-gray-900", children: person.name }, void 0, !1, {
          fileName: "app/components/teamsections.jsx",
          lineNumber: 39,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-sm font-semibold leading-6 text-indigo-600", children: person.role }, void 0, !1, {
          fileName: "app/components/teamsections.jsx",
          lineNumber: 40,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 36,
      columnNumber: 19
    }, this) }, person.name, !1, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/teamsections.jsx",
    lineNumber: 22,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/teamsections.jsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(hero_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(body_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(grid_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(teamsections_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 14,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(footer_default, {}, void 0, !1, {
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

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog
});

// app/components/blog-section.jsx
var import_react_twitter_embed = require("react-twitter-embed"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function blog_section_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "From the blog" }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "mt-2 text-lg leading-8 text-gray-600", children: "Learn how to grow your business with our expert consultancy advice." }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blog-section.jsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_twitter_embed.TwitterTweetEmbed, { tweetId: "1690982594865741827" }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 79,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_twitter_embed.TwitterTweetEmbed, { tweetId: "1690970414611132416" }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 81,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_twitter_embed.TwitterTweetEmbed, { tweetId: "1691001319488618496" }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 85,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 84,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blog-section.jsx",
      lineNumber: 75,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/blog-section.jsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/blog-section.jsx",
    lineNumber: 66,
    columnNumber: 9
  }, this);
}

// app/routes/blog.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 6,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(blog_section_default, {}, void 0, !1, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 7,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/edge.jsx
var edge_exports = {};
__export(edge_exports, {
  config: () => config,
  default: () => Edge
});
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), config = { runtime: "edge" };
function Edge() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { children: "Welcome to Remix@Edge" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-KLVZUYXN.js", imports: ["/build/_shared/chunk-AXARUPOK.js", "/build/_shared/chunk-M74ZA6GI.js", "/build/_shared/chunk-FCC3XGIV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L6FLAUJ3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aboutus": { id: "routes/aboutus", parentId: "root", path: "aboutus", index: void 0, caseSensitive: void 0, module: "/build/routes/aboutus-QQOCENV2.js", imports: ["/build/_shared/chunk-QHXENOSS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-76RZ6FPJ.js", imports: ["/build/_shared/chunk-QHXENOSS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/edge": { id: "routes/edge", parentId: "root", path: "edge", index: void 0, caseSensitive: void 0, module: "/build/routes/edge-AX5KFZEP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-G5VXVLSY.js", imports: ["/build/_shared/chunk-QHXENOSS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service": { id: "routes/service", parentId: "root", path: "service", index: void 0, caseSensitive: void 0, module: "/build/routes/service-KYIBNAMY.js", imports: ["/build/_shared/chunk-QHXENOSS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "e1a9a1bf", hmr: void 0, url: "/build/manifest-E1A9A1BF.js" };

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
  "routes/aboutus": {
    id: "routes/aboutus",
    parentId: "root",
    path: "aboutus",
    index: void 0,
    caseSensitive: void 0,
    module: aboutus_exports
  },
  "routes/service": {
    id: "routes/service",
    parentId: "root",
    path: "service",
    index: void 0,
    caseSensitive: void 0,
    module: service_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
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
