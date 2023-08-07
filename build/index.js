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
var tailwind_default = "/build/_assets/tailwind-TK3EIFGG.css";

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

// app/routes/aboutus.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Aboutus() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(header_default, {}, void 0, !1, {
    fileName: "app/routes/aboutus.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/aboutus.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/service.jsx
var service_exports = {};
__export(service_exports, {
  default: () => Service
});

// app/components/training.jsx
var import_solid2 = require("@heroicons/react/20/solid"), import_react7 = require("react"), import_react8 = require("@headlessui/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), includedFeatures = [
  "Customer service",
  "Food and beverage training",
  "Health and safety",
  "Team building"
];
function training_default() {
  let [open, setOpen] = (0, import_react7.useState)(!0), cancelButtonRef = (0, import_react7.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "TRAINING" }, void 0, !1, {
        fileName: "app/components/training.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "We offer programs tailored to specific needs." }, void 0, !1, {
        fileName: "app/components/training.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/training.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/training.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "Offering access to specialized courses and resources for skill development, enabling professionals to excel in service-related industries through continuous learning and expertise enhancement." }, void 0, !1, {
          fileName: "app/components/training.jsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/training.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/training.jsx",
            lineNumber: 32,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/training.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_solid2.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-base font-semibold text-gray-600", children: "Pay once" }, void 0, !1, {
          fileName: "app/components/training.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-6 flex items-baseline justify-center gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-5xl font-bold tracking-tight text-gray-900", children: "34900" }, void 0, !1, {
            fileName: "app/components/training.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-sm font-semibold leading-6 tracking-wide text-gray-600", children: "Ksh" }, void 0, !1, {
            fileName: "app/components/training.jsx",
            lineNumber: 52,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/training.jsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "a",
          {
            href: "#",
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
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
var import_solid3 = require("@heroicons/react/20/solid"), import_react9 = require("react"), import_react10 = require("@headlessui/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), includedFeatures2 = [
  "Experts guidance",
  "Strategic insights",
  "Networking opportunities"
];
function consultation_default() {
  let [open, setOpen] = (0, import_react9.useState)(!0), cancelButtonRef = (0, import_react9.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "CONSULTATION" }, void 0, !1, {
        fileName: "app/components/consultation.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "We empower industry professionals to navigate challenges and optimize their businesses for success and growth." }, void 0, !1, {
        fileName: "app/components/consultation.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/consultation.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "Offering guidance on workforce planning, recruitment, training, and compliance to optimize staff performance, engagement, and overall organizational success within the dynamic hospitality sector." }, void 0, !1, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/consultation.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/consultation.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures2.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_solid3.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-base font-semibold text-gray-600", children: "Pay once" }, void 0, !1, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-6 flex items-baseline justify-center gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-5xl font-bold tracking-tight text-gray-900", children: "900 /hr" }, void 0, !1, {
            fileName: "app/components/consultation.jsx",
            lineNumber: 50,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-sm font-semibold leading-6 tracking-wide text-gray-600", children: "Ksh" }, void 0, !1, {
            fileName: "app/components/consultation.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/consultation.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "a",
          {
            href: "#",
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
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
var import_solid4 = require("@heroicons/react/20/solid"), import_react11 = require("react"), import_react12 = require("@headlessui/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), includedFeatures3 = [
  "Personalized services",
  "Enhancing travel experiences",
  "Event catering solutions"
];
function hospitality_default() {
  let [open, setOpen] = (0, import_react11.useState)(!0), cancelButtonRef = (0, import_react11.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "HOSPITALITY" }, void 0, !1, {
        fileName: "app/components/hospitality.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "We encompass travel and catering" }, void 0, !1, {
        fileName: "app/components/hospitality.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hospitality.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "Offering exclusive benefits, discounts, and personalized experiences, enhancing both leisure and event-related services for members" }, void 0, !1, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures3.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid4.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-base font-semibold text-gray-600", children: "Pay once" }, void 0, !1, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 flex items-baseline justify-center gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-5xl font-bold tracking-tight text-gray-900", children: "9000" }, void 0, !1, {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 50,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-sm font-semibold leading-6 tracking-wide text-gray-600", children: "Ksh" }, void 0, !1, {
            fileName: "app/components/hospitality.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/hospitality.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "a",
          {
            href: "#",
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
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
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Service() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/service.jsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(training_default, {}, void 0, !1, {
      fileName: "app/routes/service.jsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(consultation_default, {}, void 0, !1, {
      fileName: "app/routes/service.jsx",
      lineNumber: 10,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(hospitality_default, {}, void 0, !1, {
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
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function hero_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-screen bg-gray-50 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "section",
    {
      className: "bg-cover bg-center py-32 w-full h-full",
      style: { backgroundImage: `url(${banner_home_default})` },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container mx-auto text-left text-white opacity-105", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-1/2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-5xl  mb-6 text-red-600 font-bold", children: "WELCOME TO ORIGAMI VENTURES LIMITED" }, void 0, !1, {
            fileName: "app/components/hero.jsx",
            lineNumber: 14,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xl mb-12 ", children: "Our vision is to be a holistic partner in the hospitality industry, providing comprehensive solutions and expertise that encompass all aspects of successful hospitality management." }, void 0, !1, {
            fileName: "app/components/hero.jsx",
            lineNumber: 15,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "/aboutus", className: "bg-red-600 text-white py-4 px-12 rounded-full hover:bg-black", children: "Read More" }, void 0, !1, {
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

// app/components/body.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function body_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "svg",
      {
        className: "absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "pattern",
            {
              id: "e813992c-7d03-4cc4-a2bd-151760b470a0",
              width: 200,
              height: 200,
              x: "50%",
              y: -1,
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M100 200V.5M.5 .5H200", fill: "none" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { x: "50%", y: -1, className: "overflow-visible fill-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "lg:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "Our comprehensive range of services includes:" }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 36,
        columnNumber: 15
      }, this) }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
          lineNumber: 41,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "max-w-xl text-base leading-7 text-black lg:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { role: "list", className: "mt-8 space-y-8 text-black ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Strategic positioning and planning " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 55,
            columnNumber: 21
          }, this),
          "involving strategic placement and foresight to maximize competitive advantage and guest satisfaction."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 54,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Training " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 62,
            columnNumber: 21
          }, this),
          "programs tailored to specific needs, emphasizing continuous improvement to include but not limited to health and safety, food and beverage training, customer service, team building"
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 61,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Finance management " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 69,
            columnNumber: 21
          }, this),
          "entailing budgeting, cost control, and revenue optimization to ensure efficient operations, profitability, and sustainable growth within the industry's unique financial dynamics."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 68,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 66,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Human Resource advisory level " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          "offers expert guidance on workforce planning, recruitment, training, and compliance to optimize staff performance, engagement, and overall organizational success within the dynamic hospitality sector."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 75,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Event management " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 83,
            columnNumber: 21
          }, this),
          "involving orchestrating seamless events, from planning to execution, considering logistics, coordination, and guest experiences, ensuring memorable and successful gatherings within the hospitality industry."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 82,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 80,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Pre opening " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 90,
            columnNumber: 21
          }, this),
          "preparatory phase before a new establishment's launch, encompassing staff training, operational setup, marketing strategies, and final touches to ensure a successful opening."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 89,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Sustainable practices and circular economy " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 97,
            columnNumber: 21
          }, this),
          "emphasizing eco-friendly operations, resource efficiency, waste reduction, and recycling, fostering environmental responsibility and long-term viability while minimizing negative impacts on the ecosystem."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 96,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Promoting equity and diversity within the hospitality industry " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 104,
            columnNumber: 21
          }, this),
          "fostering inclusive workplaces, embracing varied backgrounds, cultures, and perspectives, ensuring equal opportunities, and enriching the industry's innovation and growth."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 103,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 101,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Crafting and growing unique brands for our clients through strategic positioning " }, void 0, !1, {
            fileName: "app/components/body.jsx",
            lineNumber: 111,
            columnNumber: 21
          }, this),
          "aligning values, and creating memorable experiences to establish a distinct identity, attracting and retaining guests effectively."
        ] }, void 0, !0, {
          fileName: "app/components/body.jsx",
          lineNumber: 110,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 108,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/body.jsx",
        lineNumber: 51,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/body.jsx",
        lineNumber: 47,
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
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function grid_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "grid grid-cols-2 gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: banner_home_default }, void 0, !1, {
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
var import_react13 = require("react"), import_solid5 = require("@heroicons/react/20/solid"), import_react14 = require("@headlessui/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function footer_default() {
  let [agreed, setAgreed] = (0, import_react13.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("footer", { className: "relative bg-blueGray-200 pt-8 pb-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "container mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("form", { action: "mailto:venturesorigami@gmail.com", method: "POST", encType: "text/plain", className: "mx-auto mt-16 max-w-xl sm:mt-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "First name" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 18,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "first-name",
                id: "first-name",
                autoComplete: "given-name",
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 22,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 21,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.jsx",
            lineNumber: 17,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Last name" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 32,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "last-name",
                id: "last-name",
                autoComplete: "family-name",
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 36,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 35,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.jsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "company", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Company" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 46,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                name: "company",
                id: "company",
                autoComplete: "organization",
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 50,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.jsx",
            lineNumber: 45,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Email" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 60,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "email",
                name: "email",
                id: "email",
                autoComplete: "email",
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 64,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 63,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.jsx",
            lineNumber: 59,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "phone-number", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Phone number" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative mt-2.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "country", className: "sr-only", children: "Country" }, void 0, !1, {
                  fileName: "app/components/footer.jsx",
                  lineNumber: 79,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  "select",
                  {
                    id: "country",
                    name: "country",
                    className: "h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { children: "KENYA" }, void 0, !1, {
                        fileName: "app/components/footer.jsx",
                        lineNumber: 87,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { children: "UGANDA" }, void 0, !1, {
                        fileName: "app/components/footer.jsx",
                        lineNumber: 88,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { children: "TANZANIA" }, void 0, !1, {
                        fileName: "app/components/footer.jsx",
                        lineNumber: 89,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/footer.jsx",
                    lineNumber: 82,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  import_solid5.ChevronDownIcon,
                  {
                    className: "pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400",
                    "aria-hidden": "true"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/footer.jsx",
                    lineNumber: 91,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/footer.jsx",
                lineNumber: 78,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "input",
                {
                  type: "tel",
                  name: "phone-number",
                  id: "phone-number",
                  autoComplete: "tel",
                  className: "block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/footer.jsx",
                  lineNumber: 96,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/footer.jsx",
              lineNumber: 77,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.jsx",
            lineNumber: 73,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Message" }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 106,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "textarea",
              {
                name: "message",
                id: "message",
                rows: 4,
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                defaultValue: ""
              },
              void 0,
              !1,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 110,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 109,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.jsx",
            lineNumber: 105,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react14.Switch.Group, { as: "div", className: "flex gap-x-4 sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_react14.Switch,
              {
                checked: agreed,
                onChange: setAgreed,
                className: classNames(
                  agreed ? "bg-red-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "sr-only", children: "Agree to policies" }, void 0, !1, {
                    fileName: "app/components/footer.jsx",
                    lineNumber: 129,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: classNames(
                        agreed ? "translate-x-3.5" : "translate-x-0",
                        "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/footer.jsx",
                      lineNumber: 130,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 121,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/footer.jsx",
              lineNumber: 120,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react14.Switch.Label, { className: "text-sm leading-6 text-gray-600", children: [
              "By selecting this, you agree to our company's ",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { href: "#", className: "font-semibold text-red-600", children: "privacy\xA0policy" }, void 0, !1, {
                fileName: "app/components/footer.jsx",
                lineNumber: 141,
                columnNumber: 15
              }, this),
              "."
            ] }, void 0, !0, {
              fileName: "app/components/footer.jsx",
              lineNumber: 139,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.jsx",
            lineNumber: 119,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.jsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: "Let's talk"
          },
          void 0,
          !1,
          {
            fileName: "app/components/footer.jsx",
            lineNumber: 149,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/footer.jsx",
          lineNumber: 148,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.jsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h5", { className: "text-lg mt-0 mb-2 text-blueGray-600", children: "We are dedicated to helping our clients achieve success, focusing on their specific needs and goals while upholding the highest standards of quality and professionalism. Origami Ventures is ready to embark on a journey with you, providing expert guidance and support to maximize your potential in the dynamic and ever-evolving hospitality industry." }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 163,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("hr", { className: "my-6 border-blueGray-300" }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 168,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-wrap items-center md:justify-between justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full md:w-4/12 px-4 mx-auto text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-sm text-blueGray-500 font-semibold py-1", children: [
      "Copyright \xA9 ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { id: "get-current-year", children: "2023" }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 172,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { href: "https://www.creative-tim.com/product/notus-js", className: "text-blueGray-500 hover:text-gray-800", target: "_blank", children: " by " }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 173,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { href: "https://www.creative-tim.com?ref=njs-profile", className: "text-blueGray-500 hover:text-blueGray-800", children: "OPENSEASONS" }, void 0, !1, {
        fileName: "app/components/footer.jsx",
        lineNumber: 174,
        columnNumber: 15
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 171,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 170,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 169,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this);
}

// app/components/teamsections.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function teamsections_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 ", children: "Meet our leadership" }, void 0, !1, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "Origami Ventures Ltd was founded in 2022. Our training team consists of experienced hospitality trainers who possess in-depth knowledge and practical expertise in various aspects of hotel operations, customer service, and organizational excellence. They are skilled at creating dynamic and engaging learning environments, ensuring that participants gain valuable insights and skills aligned with Origami Ventures' vision and mission." }, void 0, !1, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 25,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { role: "list", className: "grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2", children: [
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
    ].map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center gap-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { className: "h-16 w-16 rounded-full", src: person.imageUrl, alt: `${person.name}'s Image` }, void 0, !1, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "text-base font-semibold leading-7 tracking-tight text-gray-900", children: person.name }, void 0, !1, {
          fileName: "app/components/teamsections.jsx",
          lineNumber: 39,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-sm font-semibold leading-6 text-indigo-600", children: person.role }, void 0, !1, {
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
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(hero_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(body_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(grid_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(teamsections_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 14,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(footer_default, {}, void 0, !1, {
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
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(header_default, {}, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
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
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), config = { runtime: "edge" };
function Edge() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { children: "Welcome to Remix@Edge" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-KLVZUYXN.js", imports: ["/build/_shared/chunk-AXARUPOK.js", "/build/_shared/chunk-M74ZA6GI.js", "/build/_shared/chunk-FCC3XGIV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JOWSE5JF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aboutus": { id: "routes/aboutus", parentId: "root", path: "aboutus", index: void 0, caseSensitive: void 0, module: "/build/routes/aboutus-T5PKZVK3.js", imports: ["/build/_shared/chunk-L6X4SF5O.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-4M2WXJDM.js", imports: ["/build/_shared/chunk-L6X4SF5O.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/edge": { id: "routes/edge", parentId: "root", path: "edge", index: void 0, caseSensitive: void 0, module: "/build/routes/edge-AX5KFZEP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ALJRDELI.js", imports: ["/build/_shared/chunk-L6X4SF5O.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service": { id: "routes/service", parentId: "root", path: "service", index: void 0, caseSensitive: void 0, module: "/build/routes/service-VT6DBTU3.js", imports: ["/build/_shared/chunk-L6X4SF5O.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "b85575e3", hmr: void 0, url: "/build/manifest-B85575E3.js" };

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
