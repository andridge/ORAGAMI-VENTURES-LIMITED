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
var tailwind_default = "/build/_assets/tailwind-XP6K5SIV.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("@vercel/analytics/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), { MetaFunction } = require("@vercel/remix"), meta = () => ({
  charset: "utf-8",
  title: "Origami Ventures Limited",
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

// app/routes/consultation.jsx
var consultation_exports = {};
__export(consultation_exports, {
  default: () => Training
});

// app/components/consultation_section.jsx
var import_solid = require("@heroicons/react/20/solid"), import_react4 = require("react"), import_react5 = require("@headlessui/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), includedFeatures = [
  " Crafting Curriculum for Hospitality Operations and Management",
  "Seizing Opportunities within Hospitality Operations and Management",
  "Navigating Challenges in the Management of Hospitality Operations",
  "Exploring Contemporary and Emerging Trends in Hospitality Operations and Management",
  "Efficiently Managing Hospitality Facilities, including Hotels, Restaurants, and Bars",
  "Contemporary Approaches to Managing Hospitality Establishments: Hotels, Restaurants, and Bars"
];
function consultation_section_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "Consultation" }, void 0, !1, {
      fileName: "app/components/consultation_section.jsx",
      lineNumber: 19,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/consultation_section.jsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/consultation_section.jsx",
          lineNumber: 24,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "From Simple Business Concepts to Complex Business Models, our firm will make sure that you Get the Right Answers." }, void 0, !1, {
          fileName: "app/components/consultation_section.jsx",
          lineNumber: 25,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/consultation_section.jsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/consultation_section.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/consultation_section.jsx",
          lineNumber: 28,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_solid.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/consultation_section.jsx",
                lineNumber: 38,
                columnNumber: 19
              }, this),
              feature
            ] }, feature, !0, {
              fileName: "app/components/consultation_section.jsx",
              lineNumber: 37,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/consultation_section.jsx",
            lineNumber: 32,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/consultation_section.jsx",
        lineNumber: 23,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-center items-center p-2 lg:flex lg:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "a",
          {
            href: "mailto:venturesorigami@gmail.com",
            className: "mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
            children: "Contact Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/consultation_section.jsx",
            lineNumber: 58,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
          fileName: "app/components/consultation_section.jsx",
          lineNumber: 64,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/consultation_section.jsx",
        lineNumber: 52,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/consultation_section.jsx",
        lineNumber: 46,
        columnNumber: 20
      }, this) }, void 0, !1, {
        fileName: "app/components/consultation_section.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/consultation_section.jsx",
        lineNumber: 44,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/consultation_section.jsx",
      lineNumber: 22,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/consultation_section.jsx",
    lineNumber: 17,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/consultation_section.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/components/header.jsx
var import_react6 = require("react"), import_react_router_dom = require("react-router-dom"), import_react_router_dom2 = require("react-router-dom"), import_react7 = require("react");

// app/img/logo2.jpg
var logo2_default = "/build/_assets/logo2-GDOYBK3W.jpg";

// app/components/header.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function header_default() {
  let location = (0, import_react_router_dom2.useLocation)(), [selectedTab, setSelectedTab] = (0, import_react6.useState)("Home"), [isDropdownOpen, setIsDropdownOpen] = (0, import_react6.useState)(!1), handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (0, import_react7.useEffect)(() => {
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
  }, [location]), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full 4xl:container 2xl:mx-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { backgroundColor: "transparent" }, className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-center flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "img",
        {
          className: "cursor-pointer",
          src: logo2_default,
          alt: "Logo",
          width: "70%",
          height: "58"
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 53,
          columnNumber: 3
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "hidden md:flex flex justify-end space-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Home"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Home" ? "text-red bg-transparent" : "text-red-600 "} cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`,
            children: "Home"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 64,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative inline-block text-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "li",
            {
              onClick: () => handleTabClick("Hospitality"),
              className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Hospitality" ? "text-red bg-transparent" : "text-red-600 "} cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`,
              children: "Hospitality"
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.jsx",
              lineNumber: 78,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${selectedTab === "Hospitality" ? "block" : "hidden"} origin-top-left absolute left-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "py-1", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/simba", onClick: () => handleTabClick("Simba"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Simba" }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 93,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 92,
              columnNumber: 9
            }, this) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 91,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/chui", onClick: () => handleTabClick("Chui"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Chui" }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 100,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 99,
              columnNumber: 9
            }, this) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 98,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/flamingo", onClick: () => handleTabClick("Flamingo"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Flamingo" }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 108,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 107,
              columnNumber: 9
            }, this) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 106,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/ndovu", onClick: () => handleTabClick("Ndovu"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Ndovu" }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 115,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 114,
              columnNumber: 9
            }, this) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 113,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/header.jsx",
            lineNumber: 90,
            columnNumber: 5
          }, this) }, void 0, !1, {
            fileName: "app/components/header.jsx",
            lineNumber: 89,
            columnNumber: 2
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/header.jsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/training", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Training"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Training" ? "text-red bg-transparent" : "text-red-600  "} cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`,
            children: "Training"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 125,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 124,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/consultation", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Consultation"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Consultation" ? "text-red bg-transparent" : "text-red-600 "} cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`,
            children: "Consultation"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 137,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 136,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/blog", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("Blog"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Blog" ? "text-red bg-transparent" : "text-red-600 "} cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`,
            children: "Blog"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 149,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/aboutus", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "li",
          {
            onClick: () => handleTabClick("About Us"),
            className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "About Us" ? "text-red bg-transparent" : "text-red-600 "} cursor-pointer px-3 py-2.5 font-normal text-s leading-3  rounded`,
            children: "About Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.jsx",
            lineNumber: 162,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 161,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "block md:hidden w-full mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          onClick: () => {
            setIsDropdownOpen((prevState) => !prevState);
          },
          className: "cursor-pointer px-4 py-3 text-white bg-black rounded flex justify-between items-center w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                  lineNumber: 183,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                  lineNumber: 191,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/header.jsx",
              lineNumber: 182,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                lineNumber: 200,
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
          lineNumber: 178,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `relative ${isDropdownOpen ? "" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "ul",
        {
          id: "list",
          className: "font-normal text-base leading-4 absolute top-2 w-full rounded shadow-md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                lineNumber: 218,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 217,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Hospitality"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Hospitality" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Hospitality"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 231,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${selectedTab === "Hospitality" ? "block" : "hidden"} origin-top-left absolute left-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "py-1", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/simba", onClick: () => handleTabClick("Simba"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Simba" }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 246,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 245,
                columnNumber: 9
              }, this) }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 244,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/chui", onClick: () => handleTabClick("Chui"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Chui" }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 253,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 252,
                columnNumber: 9
              }, this) }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 251,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/flamingo", onClick: () => handleTabClick("Flamingo"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Flamingo" }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 260,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 259,
                columnNumber: 9
              }, this) }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 258,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/ndovu", onClick: () => handleTabClick("Ndovu"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900", role: "menuitem", children: "Ndovu" }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 267,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 266,
                columnNumber: 9
              }, this) }, void 0, !1, {
                fileName: "app/components/header.jsx",
                lineNumber: 265,
                columnNumber: 7
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/header.jsx",
              lineNumber: 243,
              columnNumber: 5
            }, this) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 242,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/training", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Hospitality"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Hospitality" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Training"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 275,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 274,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/consultation", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "li",
              {
                onClick: () => handleTabClick("Hospitality"),
                className: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedTab === "Hospitality" ? "text-white bg-black" : "text-gray-600 border border-white bg-gray-50"} cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`,
                children: "Consultation"
              },
              void 0,
              !1,
              {
                fileName: "app/components/header.jsx",
                lineNumber: 288,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 287,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/blog", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                lineNumber: 301,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 300,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom.Link, { to: "/aboutus", onClick: () => handleTabClick("Services"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                lineNumber: 314,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/header.jsx",
              lineNumber: 313,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 213,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 212,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 177,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

// app/components/footer.jsx
var import_react8 = require("react"), import_solid2 = require("@heroicons/react/20/solid"), import_react9 = require("@headlessui/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function footer_default() {
  let [agreed, setAgreed] = (0, import_react8.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { className: "relative bg-blueGray-200 pt-8 pb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h5", { className: "text-lg mt-0 mb-2 text-yellow-600 text-center", children: "We commit to your success, tailoring our approach to meet your unique goals with top-notch professionalism." }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 164,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this);
}

// app/routes/consultation.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Training() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/consultation.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/consultation.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(consultation_section_default, {}, void 0, !1, {
      fileName: "app/routes/consultation.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/consultation.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/flamingo.jsx
var flamingo_exports = {};
__export(flamingo_exports, {
  default: () => flamingo_default
});

// app/components/Flamingo.jsx
var import_solid3 = require("@heroicons/react/20/solid"), import_react10 = require("react"), import_react11 = require("@headlessui/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), includedFeatures2 = [
  "Training, research and development",
  "Strategic positioning"
];
function Flamingo_default() {
  let [open, setOpen] = (0, import_react10.useState)(!0), cancelButtonRef = (0, import_react10.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "FLAMIGO" }, void 0, !1, {
        fileName: "app/components/Flamingo.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "We encompass travel and catering" }, void 0, !1, {
        fileName: "app/components/Flamingo.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Flamingo.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/Flamingo.jsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "Training, research, and development refine expertise and innovation." }, void 0, !1, {
          fileName: "app/components/Flamingo.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/Flamingo.jsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/Flamingo.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Flamingo.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures2.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid3.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/Flamingo.jsx",
                lineNumber: 38,
                columnNumber: 19
              }, this),
              feature
            ] }, feature, !0, {
              fileName: "app/components/Flamingo.jsx",
              lineNumber: 37,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/Flamingo.jsx",
            lineNumber: 32,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Flamingo.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-center items-center p-2 lg:flex lg:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
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
            fileName: "app/components/Flamingo.jsx",
            lineNumber: 58,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
          fileName: "app/components/Flamingo.jsx",
          lineNumber: 64,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Flamingo.jsx",
        lineNumber: 52,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/Flamingo.jsx",
        lineNumber: 46,
        columnNumber: 16
      }, this) }, void 0, !1, {
        fileName: "app/components/Flamingo.jsx",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Flamingo.jsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Flamingo.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Flamingo.jsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Flamingo.jsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/routes/flamingo.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function flamingo_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/flamingo.jsx",
      lineNumber: 7,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/flamingo.jsx",
      lineNumber: 8,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Flamingo_default, { id: "Flamingo" }, void 0, !1, {
      fileName: "app/routes/flamingo.jsx",
      lineNumber: 9,
      columnNumber: 1
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/flamingo.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/training.jsx
var training_exports = {};
__export(training_exports, {
  default: () => Training2
});

// app/components/training_section.jsx
var import_solid4 = require("@heroicons/react/20/solid"), import_react12 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), includedFeatures3 = [
  "Culinary Skills",
  "Public Relations",
  "Hygiene and Safety",
  "Hospitality Research",
  "Events Management",
  "Hospitality Education",
  "Hospitality Marketing"
];
function training_section_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "TRAINING" }, void 0, !1, {
      fileName: "app/components/training_section.jsx",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/training_section.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/training_section.jsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "A sure way of equiping employees with Valuable Skills and Knowledge while Motivating." }, void 0, !1, {
          fileName: "app/components/training_section.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/training_section.jsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/training_section.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/training_section.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures3.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_solid4.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/training_section.jsx",
                lineNumber: 38,
                columnNumber: 19
              }, this),
              feature
            ] }, feature, !0, {
              fileName: "app/components/training_section.jsx",
              lineNumber: 37,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/training_section.jsx",
            lineNumber: 32,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/training_section.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-center items-center p-2 lg:flex lg:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "a",
          {
            href: "mailto:venturesorigami@gmail.com",
            className: "mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
            children: "Contact Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/training_section.jsx",
            lineNumber: 59,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
          fileName: "app/components/training_section.jsx",
          lineNumber: 65,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/training_section.jsx",
        lineNumber: 53,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/training_section.jsx",
        lineNumber: 47,
        columnNumber: 16
      }, this) }, void 0, !1, {
        fileName: "app/components/training_section.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/training_section.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/training_section.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/training_section.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/training_section.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/training.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Training2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/training.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/training.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(training_section_default, {}, void 0, !1, {
      fileName: "app/routes/training.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/training.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/aboutus.jsx
var aboutus_exports = {};
__export(aboutus_exports, {
  default: () => Aboutus
});

// app/components/contact.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function contact_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { class: "flex items-center bg-stone-100 lg:h-screen font-poppins ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-11 md:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "mb-10 text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { class: "pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-black", children: "Let's Stay Connected" }, void 0, !1, {
      fileName: "app/components/contact.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/contact.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "flex flex-wrap ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "w-full px-4 lg:w-1/2 mb-11 lg:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "flex flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "w-full px-4 mb-10 sm:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "max-w-xs mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "inline-flex items-center justify-center w-12 h-12 mb-6 text-black bg-red-600 rounded-full dark:bg-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-envelope", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { class: "mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-black", children: "Email" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "#", class: "text-base font-medium text-gray-500 md:text-lg dark:text-black", children: "venturesorigami@gmail.com" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "w-full px-4 mb-10 sm:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "max-w-xs mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "inline-flex items-center justify-center w-12 h-12 mb-6 text-black bg-red-600 rounded-full dark:bg-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-telephone", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { class: "mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-black", children: "Phone" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "#", class: "text-base font-medium text-gray-500 md:text-lg dark:text-black", children: "+254701238728" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "w-full px-4 mb-10 sm:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "max-w-xs mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "inline-flex items-center justify-center w-12 h-12 mb-6 text-black bg-red-600 rounded-full dark:bg-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-geo-alt", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" }, void 0, !1, {
              fileName: "app/components/contact.jsx",
              lineNumber: 41,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { class: "mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-black", children: "Office" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "#", class: "text-base font-medium text-gray-500 md:text-lg dark:text-black", children: "Nairobi, Kiambu Rd" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "w-full px-4 sm:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "max-w-xs mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "inline-flex items-center justify-center w-12 h-12 mb-6  text-black bg-red-600 rounded-full dark:bg-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-grid-3x3", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { class: "mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-black", children: "Social" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "https://www.facebook.com/venturesorigami", class: "inline-block mr-8 text-red-600 dark:text-red-600 dark:hover:text-black hover:text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "w-6 h-6 bi bi-facebook", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "https://X.com/origamiventure", class: "inline-block mr-8 text-red-600 dark:text-red-600 dark:hover:text-black hover:text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "w-6 h-6 bi bi-twitter", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 68,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 67,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "https://www.instagram.com/origamiventures/", class: "inline-block mr-8 text-red-600 dark:text-red-600 dark:hover:text-black hover:text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "w-6 h-6 bi bi-instagram", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M12.375 0H3.625A3.626 3.626 0 0 0 0 3.625v8.75A3.626 3.626 0 0 0 3.625 16h8.75A3.626 3.626 0 0 0 16 12.375v-8.75A3.626 3.626 0 0 0 12.375 0zm1.167 5.5h-2.334a5.5 5.5 0 1 0 0 11h2.334a5.5 5.5 0 0 0 0-11zM8 4.333a3.667 3.667 0 1 1 0 7.334A3.667 3.667 0 0 1 8 4.333zm4.625-1.61a1.118 1.118 0 1 0 .001 2.236 1.118 1.118 0 0 0-.001-2.236z" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 76,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 75,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 74,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "w-full px-4 lg:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { action: "", class: "p-6 bg-gray-50 dark:bg-red-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "mb-6 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { for: "firstname", class: "block mb-2 font-bold text-gray-700 uppercase dark:text-black", children: "Email" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "text", placeholder: "abc@gmail.com", required: "", class: "block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-black border border-gray-200 rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-black dark:bg-black " }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 89,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 86,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "mb-6 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { for: "firstname", class: "block mb-2 font-bold text-gray-700 uppercase dark:text-black", children: "Subject" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 92,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "text", placeholder: "I'm asking information for...", required: "", class: "block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-black border border-gray-200 rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-black dark:bg-black " }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 94,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 91,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { class: "mb-6 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { for: "firstname", class: "block mb-2 font-bold text-gray-700 uppercase dark:text-black", children: "Message" }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("textarea", { type: "message", placeholder: "Describe your problem", required: "", class: "block w-full px-4 leading-tight text-gray-700 bg-black border border-gray-200 rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-black dark:bg-black  " }, void 0, !1, {
            fileName: "app/components/contact.jsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/contact.jsx",
          lineNumber: 96,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "mailto:venturesorigami@gmail.com", class: "px-4 py-2 font-medium text-gray-100 bg-black rounded shadow hover:bg-blue-700 dark:bg-black dark:hover:bg-red-600", children: "Send" }, void 0, !1, {
          fileName: "app/components/contact.jsx",
          lineNumber: 101,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/contact.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/contact.jsx",
        lineNumber: 84,
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

// app/img/dir2.jpg
var dir2_default = "/build/_assets/dir2-KXCQUIYJ.jpg";

// app/img/dir1.jpg
var dir1_default = "/build/_assets/dir1-6HKC4SKF.jpg";

// app/img/dir3.jpg
var dir3_default = "/build/_assets/dir3-UNMOGLQY.jpg";

// app/components/teamsections.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function teamsections_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-white py-24 sm:py-32 ml-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { role: "list", children: [
    {
      name: "Jovita Ateya",
      role: "Co-Founder",
      imageUrl: dir2_default,
      enclosingMessage: "As a seasoned hospitality consultant, I bring a diverse skill set and extensive experience across hotel, golf club, and restaurant management. My expertise lies in enhancing guest experiences, optimizing operational efficiency, and driving revenue growth for hospitality establishments. With a visionary leadership approach, I am dedicated to cultivating a culture of excellence within organizations. I am passionate about implementing innovative strategies to elevate the reputation and success of my clients businesses."
    },
    {
      name: "Nosiku Small",
      role: "Co-Founder",
      imageUrl: dir1_default,
      enclosingMessage: "As an accomplished hospitality consultant, I excel in developing and executing dynamic marketing strategies to boost sales and revenue while aligning with sustainable business practices. Leveraging data insights, I tailor individualized solutions for clients, incorporating research and development efforts to drive innovation and profitability. Additionally, I specialize in training and integrating new team members for seamless operations and long-term success."
    },
    {
      name: "Esau Odeny",
      role: "Co-Founder",
      imageUrl: dir3_default,
      enclosingMessage: "As a hospitality consultant, I bring extensive experience and a proven track record of success to the table. With over 17 years in the industry, I have honed my skills in customer-centric service delivery, effective communication, and leadership. My commitment to exceeding client expectations and fostering strong team dynamics has consistently led to tangible results for organizations. I am eager to leverage my expertise in a challenging and rewarding environment that values innovation and excellence, ultimately driving both personal and organizational growth while ensuring unparalleled customer satisfaction."
    }
  ].map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex items-center gap-x-6 mb-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "img",
      {
        style: { objectFit: "cover" },
        className: "h-80 w-66 rounded-full",
        src: person.imageUrl,
        alt: `${person.name}'s Image`
      },
      void 0,
      !1,
      {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 34,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 33,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "text-base text-xl font-bold leading-7 tracking-tight text-red-900", children: person.name }, void 0, !1, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 43,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col items-start p-4 rounded-md bg-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h4", { className: "text-xl font-semibold leading-6 text-red-900", children: person.role }, void 0, !1, {
          fileName: "app/components/teamsections.jsx",
          lineNumber: 47,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xl leading-5 text-black-600", children: person.enclosingMessage }, void 0, !1, {
          fileName: "app/components/teamsections.jsx",
          lineNumber: 48,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 41,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/teamsections.jsx",
    lineNumber: 32,
    columnNumber: 13
  }, this) }, person.name, !1, {
    fileName: "app/components/teamsections.jsx",
    lineNumber: 31,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/teamsections.jsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/teamsections.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/aboutus.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Aboutus() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/aboutus.jsx",
      lineNumber: 8,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/aboutus.jsx",
      lineNumber: 9,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(teamsections_default, {}, void 0, !1, {
      fileName: "app/routes/aboutus.jsx",
      lineNumber: 10,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aboutus.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/hero.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function hero_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "h-screen flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: "bg-cover bg-center py-32 w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container mx-auto text-center text-white opacity-105", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-1/2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { style: { color: "#BB2000" }, className: "text-5xl mb-6 font-bold", children: "WELCOME TO ORIGAMI VENTURES LIMITED" }, void 0, !1, {
      fileName: "app/components/hero.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/hero.jsx",
      lineNumber: 15,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-3xl mb-12 text", children: "We Take You there ! !" }, void 0, !1, {
      fileName: "app/components/hero.jsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "/aboutus", className: "bg-red-600 text-white py-4 px-12 rounded-full hover:bg-black", children: "Read More" }, void 0, !1, {
      fileName: "app/components/hero.jsx",
      lineNumber: 19,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/hero.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/hero.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/hero.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/hero.jsx",
    lineNumber: 8,
    columnNumber: 3
  }, this) }, void 0, !1, {
    fileName: "app/components/hero.jsx",
    lineNumber: 7,
    columnNumber: 1
  }, this);
}

// app/img/body.jpeg
var body_default = "/build/_assets/body-LWOCLDPC.jpeg";

// app/components/body.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function body_default2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "svg",
      {
        className: "absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "pattern",
            {
              id: "e813992c-7d03-4cc4-a2bd-151760b470a0",
              width: 200,
              height: 200,
              x: "50%",
              y: -1,
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M100 200V.5M.5 .5H200", fill: "none" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { x: "50%", y: -1, className: "overflow-visible fill-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "lg:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "Our comprehensive range of services includes:" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "img",
        {
          className: "w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]",
          src: body_default,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "max-w-xl text-base leading-7 text-black lg:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { role: "list", className: "mt-8 space-y-8 text-black ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "font-semibold text-black", children: " ~ Strategic positioning and planning " }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 56,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 55,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "font-semibold text-black", children: " ~ Training " }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 62,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 61,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "font-semibold text-black", children: " ~ Finance management " }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 68,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 67,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "font-semibold text-black", children: " ~ Human Resource advisory level " }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 74,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 73,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 71,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "font-semibold text-black", children: " ~ Event management " }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 80,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 79,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 77,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "font-semibold text-black", children: " ~ Pre opening " }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 86,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 85,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "font-semibold text-black", children: " ~ Sustainable practices and circular economy " }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 92,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 91,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "font-semibold text-black", children: " ~ Promoting equity and diversity within the hospitality industry " }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 98,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 97,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 95,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "font-semibold text-black", children: " ~ Crafting and growing unique brands for our clients through strategic positioning " }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 104,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 103,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/body.jsx",
          lineNumber: 101,
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

// app/components/grid.jsx
var import_react13 = require("@remix-run/react");

// app/img/1.png
var __default = "/build/_assets/1-AUGGQDDC.png";

// app/img/2.png
var __default2 = "/build/_assets/2-26BNSTVB.png";

// app/img/4.png
var __default3 = "/build/_assets/4-F2VQRVW5.png";

// app/img/3.png
var __default4 = "/build/_assets/3-7TLHGAUQ.png";

// app/components/grid.jsx
var import_react14 = require("react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function grid_default() {
  let images = [__default, __default2, __default3, __default4], titles = ["Simba", "Ndovu", "Flamingo", "Chui"], descriptions = [
    "A comprehensive solution that is effective operational and innovative.",
    "Offering guidance to optimize overall organizational success and growth .",
    "An adaptable solution blending operations, innovation and growth .",
    "Training, research, and development refine expertise,growth and innovation."
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex overflow-x-auto items-center justify-center w-full h-120 px-4", children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "max-w-sm w-full lg:max-w-full lg:flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "h-72 lg:h-auto lg:w-72 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden", style: { backgroundImage: `url('${image}')` }, title: `Image ${index}` }, void 0, !1, {
      fileName: "app/components/grid.jsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-sm text-gray-600 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("svg", { className: "fill-current text-gray-500 w-3 h-3 mr-2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("path", { d: "M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" }, void 0, !1, {
            fileName: "app/components/grid.jsx",
            lineNumber: 28,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/grid.jsx",
            lineNumber: 27,
            columnNumber: 17
          }, this),
          "Members only"
        ] }, void 0, !0, {
          fileName: "app/components/grid.jsx",
          lineNumber: 26,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-gray-900 font-bold text-xl mb-2", children: titles[index] }, void 0, !1, {
          fileName: "app/components/grid.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-gray-700 text-base", children: descriptions[index] }, void 0, !1, {
          fileName: "app/components/grid.jsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/grid.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react13.Link, { to: `/${titles[index].toLowerCase().replace(/\s+/g, "-")}`, className: "text-red-900 leading-none", children: "Apply option" }, void 0, !1, {
        fileName: "app/components/grid.jsx",
        lineNumber: 37,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/grid.jsx",
        lineNumber: 36,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/grid.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/grid.jsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, index, !0, {
    fileName: "app/components/grid.jsx",
    lineNumber: 21,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/grid.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/img/Kentwood.jpeg
var Kentwood_default = "/build/_assets/Kentwood-X37BYEDP.jpeg";

// app/img/meggawatt.jpeg
var meggawatt_default = "/build/_assets/meggawatt-45EYTBZQ.jpeg";

// app/img/infinity.jpeg
var infinity_default = "/build/_assets/infinity-5A33YU2B.jpeg";

// app/components/testimony.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function testimony_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { class: "mb-32 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { class: "mb-12 text-3xl font-bold", children: "Testimonials" }, void 0, !1, {
      fileName: "app/components/testimony.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { class: "grid gap-x-6 md:grid-cols-3 lg:gap-x-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { class: "mb-12 md:mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { class: "mb-6 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "img",
          {
            src: Kentwood_default,
            class: "w-32 rounded-full shadow-lg dark:shadow-black/20"
          },
          void 0,
          !1,
          {
            fileName: "app/components/testimony.jsx",
            lineNumber: 12,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h5", { class: "mb-2 text-lg font-bold", children: "Kentwood " }, void 0, !1, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h6", { class: "mb-4 font-medium text-primary dark:text-primary-400", children: "Kenya,Nairobi" }, void 0, !1, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { class: "mb-4", children: [
          "Origami Ventures' strategic positioning and planning services have been a game-changer for our business. Their team's insightful strategies and meticulous planning have helped us not only identify our unique market niche but also leverage it for growth. With their guidance, we've seen a significant increase in our market share and profitability. Their expertise in this area is truly unmatched.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "inline-block w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 22,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 21,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { class: "mb-0 flex justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 29,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 28,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 35,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 34,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 41,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 40,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 47,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 46,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 45,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 53,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 52,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 51,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/testimony.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { class: "mb-12 md:mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { class: "mb-6 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "img",
          {
            src: meggawatt_default,
            class: "w-32 rounded-full shadow-lg dark:shadow-black/20"
          },
          void 0,
          !1,
          {
            fileName: "app/components/testimony.jsx",
            lineNumber: 61,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h5", { class: "mb-2 text-lg font-bold", children: "Megawatt restaurant" }, void 0, !1, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h6", { class: "mb-4 font-medium text-primary dark:text-primary-400", children: "Kenya,Nairobi" }, void 0, !1, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { class: "mb-4", children: [
          "Origami Ventures has been instrumental in optimizing our financial management. Their attention to detail and data-driven approach have resulted in improved financial stability and profitability for our company. Their team's ability to provide clear and actionable financial insights has been a game-changer for us. We now feel more confident in our financial decisions, thanks to their expert guidance.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "inline-block w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 71,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 70,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { class: "mb-0 flex justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 78,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 77,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 84,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 83,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 90,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 89,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 96,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 95,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 94,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 102,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 101,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 100,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/testimony.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { class: "mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { class: "mb-6 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "img",
          {
            src: infinity_default,
            class: "w-32 rounded-full shadow-lg dark:shadow-black/20"
          },
          void 0,
          !1,
          {
            fileName: "app/components/testimony.jsx",
            lineNumber: 110,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h5", { class: "mb-2 text-lg font-bold", children: "Infinity Sport Bar DMS Urbanable" }, void 0, !1, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h6", { class: "mb-4 font-medium text-primary dark:text-primary-400", children: "United States" }, void 0, !1, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { class: "mb-4", children: [
          "Origami Ventures' human resource advisory services have been a lifeline for our organization. Their expert team helped us streamline our HR processes, implement best practices, and foster a positive workplace culture. Their support has not only improved employee satisfaction but also reduced turnover rates. We can't thank them enough for their invaluable guidance and expertise.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "inline-block w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 120,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { class: "mb-0 flex justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 127,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 133,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 132,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 139,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 138,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 145,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 144,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", class: "w-5 text-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "path",
            {
              fill: "currentColor",
              d: "m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/testimony.jsx",
              lineNumber: 151,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 150,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/testimony.jsx",
            lineNumber: 149,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/testimony.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/testimony.jsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/testimony.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/testimony.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/components/sir.jsx
var import_react_router_dom3 = require("react-router-dom"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function sir_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { "text-center": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid grid-cols-1 grid-rows-1 md:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h5", { className: "mb-2 text-xl font-medium leading-tight text-black dark:text-white", children: "TRAINING" }, void 0, !1, {
        fileName: "app/components/sir.jsx",
        lineNumber: 8,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mb-4 text-base text-neutral-600 dark:text-neutral-200", children: "Equiping Employees With Valuable Skills and Knowledge" }, void 0, !1, {
        fileName: "app/components/sir.jsx",
        lineNumber: 9,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_router_dom3.Link, { to: "/training", className: "inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#d64545] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] focus:bg-red-700 focus:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] dark:shadow-[0_4px_9px_-4px_rgba(214, 69, 69, 0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)]", children: "Book Training" }, void 0, !1, {
        fileName: "app/components/sir.jsx",
        lineNumber: 12,
        columnNumber: 24
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sir.jsx",
      lineNumber: 7,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/sir.jsx",
      lineNumber: 6,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h5", { className: "mb-2 text-xl font-medium leading-tight text-black dark:text-white", children: "CONSULTANCY" }, void 0, !1, {
        fileName: "app/components/sir.jsx",
        lineNumber: 20,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mb-4 text-base text-neutral-600 dark:text-neutral-200", children: "From Simple Business Concepts to Complex Business Models, our firm will make sure that you Get the Right Answers." }, void 0, !1, {
        fileName: "app/components/sir.jsx",
        lineNumber: 21,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_router_dom3.Link, { to: "/consultation", className: "inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#d64545] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] focus:bg-red-700 focus:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] dark:shadow-[0_4px_9px_-4px_rgba(214, 69, 69, 0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)]", children: "Book Consultancy" }, void 0, !1, {
        fileName: "app/components/sir.jsx",
        lineNumber: 24,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sir.jsx",
      lineNumber: 19,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/sir.jsx",
      lineNumber: 18,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/sir.jsx",
    lineNumber: 5,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/sir.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/components/copyright.jsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function copyright_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-wrap items-center md:justify-between justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "w-full md:w-4/12 px-4 mx-auto text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-sm text-blueGray-500 font-semibold py-1", children: [
    "Copyright \xA9 ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { id: "get-current-year", children: "2023" }, void 0, !1, {
      fileName: "app/components/copyright.jsx",
      lineNumber: 6,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { href: "https://www.creative-tim.com/product/notus-js", className: "text-blueGray-500 hover:text-gray-800", target: "_blank", children: " by " }, void 0, !1, {
      fileName: "app/components/copyright.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { href: "https://www.creative-tim.com?ref=njs-profile", className: "text-blueGray-500 hover:text-blueGray-800", children: "OPENSEASONS" }, void 0, !1, {
      fileName: "app/components/copyright.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    "."
  ] }, void 0, !0, {
    fileName: "app/components/copyright.jsx",
    lineNumber: 5,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/copyright.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/copyright.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/img/background.jpg
var background_default = "/build/_assets/background-MDYPBWT7.jpg";

// app/routes/index.jsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "div",
      {
        style: {
          backgroundImage: `url(${background_default})`,
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.4",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "100%",
          // Set width to 100% of the viewport width
          height: "100vh",
          // Set height to 100% of the viewport height
          minHeight: "100vh",
          position: "relative"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(footer_default, {}, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 30,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(header_default, {}, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 31,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(hero_default, {}, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 32,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 16,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(body_default2, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 35,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(grid_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 36,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 37,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 38,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(testimony_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 39,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 40,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(sir_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 41,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(contact_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 42,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(copyright_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 44,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/ndovu.jsx
var ndovu_exports = {};
__export(ndovu_exports, {
  default: () => ndovu_default
});

// app/components/Ndovu.jsx
var import_solid5 = require("@heroicons/react/20/solid"), import_react15 = require("react"), import_react16 = require("@headlessui/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), includedFeatures4 = [
  "Inventory management",
  "Training, research and development",
  "Financial support",
  "Strategic positioning"
];
function Ndovu_default() {
  let [open, setOpen] = (0, import_react15.useState)(!0), cancelButtonRef = (0, import_react15.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "NDOVU" }, void 0, !1, {
        fileName: "app/components/Ndovu.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "We empower industry professionals to navigate challenges and optimize their businesses for success and growth." }, void 0, !1, {
        fileName: "app/components/Ndovu.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Ndovu.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/Ndovu.jsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "Offering guidance to optimize overall organizational success." }, void 0, !1, {
          fileName: "app/components/Ndovu.jsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/Ndovu.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/Ndovu.jsx",
            lineNumber: 32,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Ndovu.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures4.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid5.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/Ndovu.jsx",
                lineNumber: 40,
                columnNumber: 19
              }, this),
              feature
            ] }, feature, !0, {
              fileName: "app/components/Ndovu.jsx",
              lineNumber: 39,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/Ndovu.jsx",
            lineNumber: 34,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Ndovu.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex justify-center items-center p-2 lg:flex lg:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "a",
          {
            href: "mailto:venturesorigami@gmail.com",
            className: "mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
            children: "Contact Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Ndovu.jsx",
            lineNumber: 60,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
          fileName: "app/components/Ndovu.jsx",
          lineNumber: 66,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Ndovu.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/Ndovu.jsx",
        lineNumber: 48,
        columnNumber: 16
      }, this) }, void 0, !1, {
        fileName: "app/components/Ndovu.jsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Ndovu.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Ndovu.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Ndovu.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Ndovu.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/routes/ndovu.jsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function ndovu_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/ndovu.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/ndovu.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Ndovu_default, { id: "Ndovu" }, void 0, !1, {
      fileName: "app/routes/ndovu.jsx",
      lineNumber: 9,
      columnNumber: 1
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ndovu.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/simba.jsx
var simba_exports = {};
__export(simba_exports, {
  default: () => simba_default
});

// app/components/Simba.jsx
var import_solid6 = require("@heroicons/react/20/solid"), import_react17 = require("react"), import_react18 = require("@headlessui/react"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), includedFeatures5 = [
  "On-site visits",
  "Inventory management",
  "Training, research and development",
  "Team building",
  "Financial support",
  "Strategic positioning"
];
function Simba_default() {
  let [open, setOpen] = (0, import_react17.useState)(!0), cancelButtonRef = (0, import_react17.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "SIMBA " }, void 0, !1, {
        fileName: "app/components/Simba.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "A 360 PACKAGE DEAL" }, void 0, !1, {
        fileName: "app/components/Simba.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Simba.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/Simba.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "A comprehensive solution that ensures effective operations, innovation, and growth for businesses" }, void 0, !1, {
          fileName: "app/components/Simba.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/Simba.jsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/Simba.jsx",
            lineNumber: 34,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Simba.jsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "ul",
          {
            role: "list",
            className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6",
            children: includedFeatures5.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_solid6.CheckIcon, { className: "h-6 w-5 flex-none text-red-600", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/Simba.jsx",
                lineNumber: 42,
                columnNumber: 19
              }, this),
              feature
            ] }, feature, !0, {
              fileName: "app/components/Simba.jsx",
              lineNumber: 41,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/Simba.jsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Simba.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex justify-center items-center p-2 lg:flex lg:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "a",
          {
            href: "mailto:venturesorigami@gmail.com",
            className: "mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
            children: "Contact Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Simba.jsx",
            lineNumber: 62,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
          fileName: "app/components/Simba.jsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Simba.jsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/Simba.jsx",
        lineNumber: 50,
        columnNumber: 16
      }, this) }, void 0, !1, {
        fileName: "app/components/Simba.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Simba.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Simba.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Simba.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Simba.jsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/routes/simba.jsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function simba_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/simba.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/simba.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Simba_default, { id: "Simba" }, void 0, !1, {
      fileName: "app/routes/simba.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/simba.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog
});

// app/components/blog-section.jsx
var import_react_twitter_embed = require("react-twitter-embed"), import_react19 = require("react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function blog_section_default() {
  let [isLoading, setIsLoading] = (0, import_react19.useState)(!0);
  return (0, import_react19.useEffect)(() => {
    let delay = setTimeout(() => {
      setIsLoading(!1);
    }, 2e3);
    return () => clearTimeout(delay);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "From the blog" }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "mt-2 text-lg leading-8 text-gray-600", children: "Learn how to grow your business with our expert consultancy advice." }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blog-section.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3", children: isLoading ? (
      // Display a simple loading animation with three dots
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center justify-center h-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "animate-ping text-3xl text-red-600", children: "Loading..." }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 30,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this)
    ) : (
      // Display tweets once they are loaded
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_twitter_embed.TwitterTweetEmbed, { tweetId: "1707344841334521956" }, void 0, !1, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 36,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_twitter_embed.TwitterTweetEmbed, { tweetId: "1707288473160311265" }, void 0, !1, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 39,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_twitter_embed.TwitterTweetEmbed, { tweetId: "1707311076679856407" }, void 0, !1, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 42,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 41,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ) }, void 0, !1, {
      fileName: "app/components/blog-section.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/blog-section.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/blog-section.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this);
}

// app/routes/blog.jsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 7,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(blog_section_default, {}, void 0, !1, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 9,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/chui.jsx
var chui_exports = {};
__export(chui_exports, {
  default: () => chui_default
});

// app/components/Chui.jsx
var import_solid7 = require("@heroicons/react/20/solid"), import_react20 = require("react"), import_react21 = require("@headlessui/react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), includedFeatures6 = [
  "On-site visits",
  "Inventory management",
  "Training, research and development",
  "Team building",
  "Financial support",
  "Strategic positioning"
];
function Membership() {
  let [open, setOpen] = (0, import_react20.useState)(!0), [selectedService, setSelectedService] = (0, import_react20.useState)(""), cancelButtonRef = (0, import_react20.useRef)(null), handleServiceToggle = (service) => {
    setSelectedService(service);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "CHUI" }, void 0, !1, {
      fileName: "app/components/Chui.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Chui.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, !1, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "An adaptable solution blending operations, innovation, and growth for businesses to ensure effectiveness and success in the business." }, void 0, !1, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, !1, {
            fileName: "app/components/Chui.jsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, !1, {
            fileName: "app/components/Chui.jsx",
            lineNumber: 38,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("ul", { role: "list", className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6", children: includedFeatures6.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "flex gap-x-3 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
            "input",
            {
              type: "radio",
              id: feature,
              name: "selectedService",
              checked: selectedService === feature,
              onChange: () => handleServiceToggle(feature),
              className: "h-5 w-5 text-red-600"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Chui.jsx",
              lineNumber: 43,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: feature, className: "cursor-pointer", children: feature }, void 0, !1, {
            fileName: "app/components/Chui.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this)
        ] }, feature, !0, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 42,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Chui.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex justify-center items-center p-2 lg:flex lg:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: [
          "Selected Service: ",
          selectedService
        ] }, void 0, !0, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          "a",
          {
            href: "mailto:venturesorigami@gmail.com",
            className: "mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
            children: "Contact Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Chui.jsx",
            lineNumber: 64,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, !1, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 70,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Chui.jsx",
        lineNumber: 60,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Chui.jsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Chui.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Chui.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Chui.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Chui.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/chui.jsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function chui_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(footer_default, {}, void 0, !1, {
      fileName: "app/routes/chui.jsx",
      lineNumber: 7,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(header_default, {}, void 0, !1, {
      fileName: "app/routes/chui.jsx",
      lineNumber: 8,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Membership, { id: "Chui" }, void 0, !1, {
      fileName: "app/routes/chui.jsx",
      lineNumber: 9,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/chui.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/edge.jsx
var edge_exports = {};
__export(edge_exports, {
  config: () => config,
  default: () => Edge
});
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), config = { runtime: "edge" };
function Edge() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h1", { children: "Welcome to Remix@Edge" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-IDAOXEZQ.js", imports: ["/build/_shared/chunk-ZHQLR6A3.js", "/build/_shared/chunk-M74ZA6GI.js", "/build/_shared/chunk-FCC3XGIV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RGRBHQDU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aboutus": { id: "routes/aboutus", parentId: "root", path: "aboutus", index: void 0, caseSensitive: void 0, module: "/build/routes/aboutus-LLGFZLJ3.js", imports: ["/build/_shared/chunk-FSC4NDS7.js", "/build/_shared/chunk-MEKP4LGO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-Q7XCPWGD.js", imports: ["/build/_shared/chunk-MEKP4LGO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chui": { id: "routes/chui", parentId: "root", path: "chui", index: void 0, caseSensitive: void 0, module: "/build/routes/chui-LWXXOPR7.js", imports: ["/build/_shared/chunk-MEKP4LGO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/consultation": { id: "routes/consultation", parentId: "root", path: "consultation", index: void 0, caseSensitive: void 0, module: "/build/routes/consultation-DRFKGOWN.js", imports: ["/build/_shared/chunk-MEKP4LGO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/edge": { id: "routes/edge", parentId: "root", path: "edge", index: void 0, caseSensitive: void 0, module: "/build/routes/edge-AX5KFZEP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flamingo": { id: "routes/flamingo", parentId: "root", path: "flamingo", index: void 0, caseSensitive: void 0, module: "/build/routes/flamingo-JHOVZYCW.js", imports: ["/build/_shared/chunk-MEKP4LGO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-UKSNDSVO.js", imports: ["/build/_shared/chunk-FSC4NDS7.js", "/build/_shared/chunk-MEKP4LGO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ndovu": { id: "routes/ndovu", parentId: "root", path: "ndovu", index: void 0, caseSensitive: void 0, module: "/build/routes/ndovu-A6BTVYW3.js", imports: ["/build/_shared/chunk-MEKP4LGO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/simba": { id: "routes/simba", parentId: "root", path: "simba", index: void 0, caseSensitive: void 0, module: "/build/routes/simba-KNXHKWPD.js", imports: ["/build/_shared/chunk-MEKP4LGO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/training": { id: "routes/training", parentId: "root", path: "training", index: void 0, caseSensitive: void 0, module: "/build/routes/training-LLTD2ULT.js", imports: ["/build/_shared/chunk-MEKP4LGO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "7fc0804c", hmr: void 0, url: "/build/manifest-7FC0804C.js" };

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
  "routes/consultation": {
    id: "routes/consultation",
    parentId: "root",
    path: "consultation",
    index: void 0,
    caseSensitive: void 0,
    module: consultation_exports
  },
  "routes/flamingo": {
    id: "routes/flamingo",
    parentId: "root",
    path: "flamingo",
    index: void 0,
    caseSensitive: void 0,
    module: flamingo_exports
  },
  "routes/training": {
    id: "routes/training",
    parentId: "root",
    path: "training",
    index: void 0,
    caseSensitive: void 0,
    module: training_exports
  },
  "routes/aboutus": {
    id: "routes/aboutus",
    parentId: "root",
    path: "aboutus",
    index: void 0,
    caseSensitive: void 0,
    module: aboutus_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/ndovu": {
    id: "routes/ndovu",
    parentId: "root",
    path: "ndovu",
    index: void 0,
    caseSensitive: void 0,
    module: ndovu_exports
  },
  "routes/simba": {
    id: "routes/simba",
    parentId: "root",
    path: "simba",
    index: void 0,
    caseSensitive: void 0,
    module: simba_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/chui": {
    id: "routes/chui",
    parentId: "root",
    path: "chui",
    index: void 0,
    caseSensitive: void 0,
    module: chui_exports
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
