import {
  footer_default,
  header_default
} from "/build/_shared/chunk-W7GGVX26.js";
import {
  copyright_default
} from "/build/_shared/chunk-YVAXZYNN.js";
import "/build/_shared/chunk-M74ZA6GI.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FCC3XGIV.js";

// app/components/Chui.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var includedFeatures = [
  "On-site visits",
  "Inventory management",
  "Training, research and development",
  "Team building",
  "Financial support",
  "Strategic positioning"
];
function Membership() {
  const [open, setOpen] = (0, import_react.useState)(true);
  const [selectedService, setSelectedService] = (0, import_react.useState)("");
  const cancelButtonRef = (0, import_react.useRef)(null);
  const handleServiceToggle = (service) => {
    setSelectedService(service);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "CHUI" }, void 0, false, {
      fileName: "app/components/Chui.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Chui.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 sm:p-10 lg:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold tracking-tight text-red-600", children: "Membership" }, void 0, false, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-black", children: "An adaptable solution blending operations, innovation, and growth for businesses to ensure effectiveness and success in the business." }, void 0, false, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "flex-none text-sm font-semibold leading-6 text-red-600", children: "What\u2019s included" }, void 0, false, {
            fileName: "app/components/Chui.jsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-px flex-auto bg-gray-100" }, void 0, false, {
            fileName: "app/components/Chui.jsx",
            lineNumber: 38,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-black sm:grid-cols-2 sm:gap-6", children: includedFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex gap-x-3 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
            false,
            {
              fileName: "app/components/Chui.jsx",
              lineNumber: 43,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: feature, className: "cursor-pointer", children: feature }, void 0, false, {
            fileName: "app/components/Chui.jsx",
            lineNumber: 51,
            columnNumber: 19
          }, this)
        ] }, feature, true, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 42,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Chui.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center p-2 lg:flex lg:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:w-full lg:max-w-md lg:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-xs px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Selected Service: ",
          selectedService
        ] }, void 0, true, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            href: "mailto:venturesorigami@gmail.com",
            className: "mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
            children: "Contact Us"
          },
          void 0,
          false,
          {
            fileName: "app/components/Chui.jsx",
            lineNumber: 64,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-xs leading-5 text-gray-600", children: "Invoices and receipts available for easy company reimbursement" }, void 0, false, {
          fileName: "app/components/Chui.jsx",
          lineNumber: 70,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Chui.jsx",
        lineNumber: 60,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Chui.jsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Chui.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Chui.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Chui.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Chui.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/chui.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function chui_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/chui.jsx",
      lineNumber: 8,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(header_default, {}, void 0, false, {
      fileName: "app/routes/chui.jsx",
      lineNumber: 9,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Membership, { id: "Chui" }, void 0, false, {
      fileName: "app/routes/chui.jsx",
      lineNumber: 10,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(copyright_default, {}, void 0, false, {
      fileName: "app/routes/chui.jsx",
      lineNumber: 11,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/chui.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
export {
  chui_default as default
};
//# sourceMappingURL=/build/routes/chui-ED2QTJFK.js.map
