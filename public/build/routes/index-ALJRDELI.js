import {
  ChevronDownIcon_default,
  header_default
} from "/build/_shared/chunk-L6X4SF5O.js";
import "/build/_shared/chunk-M74ZA6GI.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FCC3XGIV.js";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t5, e2, n) => e2 in t5 ? i(t5, e2, { enumerable: true, configurable: true, writable: true, value: n }) : t5[e2] = n;
var r = (t5, e2, n) => (d(t5, typeof e2 != "symbol" ? e2 + "" : e2, n), n);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e2, f4) => {
  s.isServer ? (0, import_react.useEffect)(e2, f4) : (0, import_react.useLayoutEffect)(e2, f4);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e2) {
  let r4 = (0, import_react2.useRef)(e2);
  return l(() => {
    r4.current = e2;
  }, [e2]), r4;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o10) => setTimeout(() => {
    throw o10;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n = [], r4 = { addEventListener(e2, t5, s6, a3) {
    return e2.addEventListener(t5, s6, a3), r4.add(() => e2.removeEventListener(t5, s6, a3));
  }, requestAnimationFrame(...e2) {
    let t5 = requestAnimationFrame(...e2);
    return r4.add(() => cancelAnimationFrame(t5));
  }, nextFrame(...e2) {
    return r4.requestAnimationFrame(() => r4.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t5 = setTimeout(...e2);
    return r4.add(() => clearTimeout(t5));
  }, microTask(...e2) {
    let t5 = { current: true };
    return t3(() => {
      t5.current && e2[0]();
    }), r4.add(() => {
      t5.current = false;
    });
  }, style(e2, t5, s6) {
    let a3 = e2.style.getPropertyValue(t5);
    return Object.assign(e2.style, { [t5]: s6 }), this.add(() => {
      Object.assign(e2.style, { [t5]: a3 });
    });
  }, group(e2) {
    let t5 = o2();
    return e2(t5), this.add(() => t5.dispose());
  }, add(e2) {
    return n.push(e2), () => {
      let t5 = n.indexOf(e2);
      if (t5 >= 0)
        for (let s6 of n.splice(t5, 1))
          s6();
    };
  }, dispose() {
    for (let e2 of n.splice(0))
      e2();
  } };
  return r4;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e2] = (0, import_react3.useState)(o2);
  return (0, import_react3.useEffect)(() => () => e2.dispose(), [e2]), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);
var o4 = function(t5) {
  let e2 = s2(t5);
  return import_react4.default.useCallback((...r4) => e2.current(...r4), [e2]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react5 = __toESM(require_react(), 1);
function l2() {
  let [e2, f4] = (0, import_react5.useState)(s.isHandoffComplete);
  return e2 && s.isHandoffComplete === false && f4(false), (0, import_react5.useEffect)(() => {
    e2 !== true && f4(true);
  }, [e2]), (0, import_react5.useEffect)(() => s.handoff(), []), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o6;
var I = (o6 = import_react6.default.useId) != null ? o6 : function() {
  let n = l2(), [e2, u5] = import_react6.default.useState(n ? () => s.nextId() : null);
  return l(() => {
    e2 === null && u5(s.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};

// node_modules/@headlessui/react/dist/utils/match.js
function u(r4, n, ...a3) {
  if (r4 in n) {
    let e2 = n[r4];
    return typeof e2 == "function" ? e2(...a3) : e2;
  }
  let t5 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t5, u), t5;
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react7 = __toESM(require_react(), 1);
function i2(t5) {
  var n;
  if (t5.type)
    return t5.type;
  let e2 = (n = t5.as) != null ? n : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s4(t5, e2) {
  let [n, u5] = (0, import_react7.useState)(() => i2(t5));
  return l(() => {
    u5(i2(t5));
  }, [t5.type, t5.as]), l(() => {
    n || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u5("button");
  }, [n, e2]), n;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react8 = __toESM(require_react(), 1);
var u2 = Symbol();
function y(...t5) {
  let n = (0, import_react8.useRef)(t5);
  (0, import_react8.useEffect)(() => {
    n.current = t5;
  }, [t5]);
  let c5 = o4((e2) => {
    for (let o10 of n.current)
      o10 != null && (typeof o10 == "function" ? o10(e2) : o10.current = e2);
  });
  return t5.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u2])) ? void 0 : c5;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e(...n) {
  return n.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S = ((a3) => (a3[a3.None = 0] = "None", a3[a3.RenderStrategy = 1] = "RenderStrategy", a3[a3.Static = 2] = "Static", a3))(S || {});
var j = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(j || {});
function X({ ourProps: r4, theirProps: t5, slot: e2, defaultTag: a3, features: s6, visible: n = true, name: f4 }) {
  let o10 = N(t5, r4);
  if (n)
    return c2(o10, e2, a3, f4);
  let u5 = s6 != null ? s6 : 0;
  if (u5 & 2) {
    let { static: l5 = false, ...p4 } = o10;
    if (l5)
      return c2(p4, e2, a3, f4);
  }
  if (u5 & 1) {
    let { unmount: l5 = true, ...p4 } = o10;
    return u(l5 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c2({ ...p4, hidden: true, style: { display: "none" } }, e2, a3, f4);
    } });
  }
  return c2(o10, e2, a3, f4);
}
function c2(r4, t5 = {}, e2, a3) {
  let { as: s6 = e2, children: n, refName: f4 = "ref", ...o10 } = g(r4, ["unmount", "static"]), u5 = r4.ref !== void 0 ? { [f4]: r4.ref } : {}, l5 = typeof n == "function" ? n(t5) : n;
  "className" in o10 && o10.className && typeof o10.className == "function" && (o10.className = o10.className(t5));
  let p4 = {};
  if (t5) {
    let i6 = false, m3 = [];
    for (let [y4, d4] of Object.entries(t5))
      typeof d4 == "boolean" && (i6 = true), d4 === true && m3.push(y4);
    i6 && (p4["data-headlessui-state"] = m3.join(" "));
  }
  if (s6 === import_react9.Fragment && Object.keys(R(o10)).length > 0) {
    if (!(0, import_react9.isValidElement)(l5) || Array.isArray(l5) && l5.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a3} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o10).map((d4) => `  - ${d4}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d4) => `  - ${d4}`).join(`
`)].join(`
`));
    let i6 = l5.props, m3 = typeof (i6 == null ? void 0 : i6.className) == "function" ? (...d4) => e(i6 == null ? void 0 : i6.className(...d4), o10.className) : e(i6 == null ? void 0 : i6.className, o10.className), y4 = m3 ? { className: m3 } : {};
    return (0, import_react9.cloneElement)(l5, Object.assign({}, N(l5.props, R(g(o10, ["ref"]))), p4, u5, w(l5.ref, u5.ref), y4));
  }
  return (0, import_react9.createElement)(s6, Object.assign({}, g(o10, ["ref"]), s6 !== import_react9.Fragment && u5, s6 !== import_react9.Fragment && p4), l5);
}
function w(...r4) {
  return { ref: r4.every((t5) => t5 == null) ? void 0 : (t5) => {
    for (let e2 of r4)
      e2 != null && (typeof e2 == "function" ? e2(t5) : e2.current = t5);
  } };
}
function N(...r4) {
  var a3;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t5 = {}, e2 = {};
  for (let s6 of r4)
    for (let n in s6)
      n.startsWith("on") && typeof s6[n] == "function" ? ((a3 = e2[n]) != null || (e2[n] = []), e2[n].push(s6[n])) : t5[n] = s6[n];
  if (t5.disabled || t5["aria-disabled"])
    return Object.assign(t5, Object.fromEntries(Object.keys(e2).map((s6) => [s6, void 0])));
  for (let s6 in e2)
    Object.assign(t5, { [s6](n, ...f4) {
      let o10 = e2[s6];
      for (let u5 of o10) {
        if ((n instanceof Event || (n == null ? void 0 : n.nativeEvent) instanceof Event) && n.defaultPrevented)
          return;
        u5(n, ...f4);
      }
    } });
  return t5;
}
function D(r4) {
  var t5;
  return Object.assign((0, import_react9.forwardRef)(r4), { displayName: (t5 = r4.displayName) != null ? t5 : r4.name });
}
function R(r4) {
  let t5 = Object.assign({}, r4);
  for (let e2 in t5)
    t5[e2] === void 0 && delete t5[e2];
  return t5;
}
function g(r4, t5 = []) {
  let e2 = Object.assign({}, r4);
  for (let a3 of t5)
    a3 in e2 && delete e2[a3];
  return e2;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n) {
  let e2 = n.parentElement, l5 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l5 = e2), e2 = e2.parentElement;
  let t5 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t5 && i4(l5) ? false : t5;
}
function i4(n) {
  if (!n)
    return false;
  let e2 = n.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/utils/form.js
function p2(n) {
  var t5;
  let r4 = (t5 = n == null ? void 0 : n.form) != null ? t5 : n.closest("form");
  if (r4) {
    for (let i6 of r4.elements)
      if (i6.tagName === "INPUT" && i6.type === "submit" || i6.tagName === "BUTTON" && i6.type === "submit" || i6.nodeName === "INPUT" && i6.type === "image") {
        i6.click();
        return;
      }
    r4.requestSubmit();
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a2 = "div";
var p3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(p3 || {});
function s5(t5, o10) {
  let { features: n = 1, ...e2 } = t5, d4 = { ref: o10, "aria-hidden": (n & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d4, theirProps: e2, slot: {}, defaultTag: a2, name: "Hidden" });
}
var c3 = D(s5);

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o8 || {});

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react10 = __toESM(require_react(), 1);
function T2(l5, r4, c5) {
  let [i6, s6] = (0, import_react10.useState)(c5), e2 = l5 !== void 0, t5 = (0, import_react10.useRef)(e2), u5 = (0, import_react10.useRef)(false), d4 = (0, import_react10.useRef)(false);
  return e2 && !t5.current && !u5.current ? (u5.current = true, t5.current = e2, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e2 && t5.current && !d4.current && (d4.current = true, t5.current = e2, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e2 ? l5 : i6, o4((n) => (e2 || s6(n), r4 == null ? void 0 : r4(n)))];
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react11 = __toESM(require_react(), 1);
var d2 = (0, import_react11.createContext)(null);
function f2() {
  let r4 = (0, import_react11.useContext)(d2);
  if (r4 === null) {
    let t5 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t5, f2), t5;
  }
  return r4;
}
function M() {
  let [r4, t5] = (0, import_react11.useState)([]);
  return [r4.length > 0 ? r4.join(" ") : void 0, (0, import_react11.useMemo)(() => function(e2) {
    let i6 = o4((s6) => (t5((o10) => [...o10, s6]), () => t5((o10) => {
      let p4 = o10.slice(), c5 = p4.indexOf(s6);
      return c5 !== -1 && p4.splice(c5, 1), p4;
    }))), n = (0, import_react11.useMemo)(() => ({ register: i6, slot: e2.slot, name: e2.name, props: e2.props }), [i6, e2.slot, e2.name, e2.props]);
    return import_react11.default.createElement(d2.Provider, { value: n }, e2.children);
  }, [t5])];
}
var S2 = "p";
function h2(r4, t5) {
  let a3 = I(), { id: e2 = `headlessui-description-${a3}`, ...i6 } = r4, n = f2(), s6 = y(t5);
  l(() => n.register(e2), [e2, n.register]);
  let o10 = { ref: s6, ...n.props, id: e2 };
  return X({ ourProps: o10, theirProps: i6, slot: n.slot || {}, defaultTag: S2, name: n.name || "Description" });
}
var y2 = D(h2);
var b2 = Object.assign(y2, {});

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react12 = __toESM(require_react(), 1);
var d3 = (0, import_react12.createContext)(null);
function u4() {
  let o10 = (0, import_react12.useContext)(d3);
  if (o10 === null) {
    let t5 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t5, u4), t5;
  }
  return o10;
}
function H() {
  let [o10, t5] = (0, import_react12.useState)([]);
  return [o10.length > 0 ? o10.join(" ") : void 0, (0, import_react12.useMemo)(() => function(e2) {
    let s6 = o4((r4) => (t5((l5) => [...l5, r4]), () => t5((l5) => {
      let n = l5.slice(), p4 = n.indexOf(r4);
      return p4 !== -1 && n.splice(p4, 1), n;
    }))), a3 = (0, import_react12.useMemo)(() => ({ register: s6, slot: e2.slot, name: e2.name, props: e2.props }), [s6, e2.slot, e2.name, e2.props]);
    return import_react12.default.createElement(d3.Provider, { value: a3 }, e2.children);
  }, [t5])];
}
var A = "label";
function h3(o10, t5) {
  let i6 = I(), { id: e2 = `headlessui-label-${i6}`, passive: s6 = false, ...a3 } = o10, r4 = u4(), l5 = y(t5);
  l(() => r4.register(e2), [e2, r4.register]);
  let n = { ref: l5, ...r4.props, id: e2 };
  return s6 && ("onClick" in n && (delete n.htmlFor, delete n.onClick), "onClick" in a3 && delete a3.onClick), X({ ourProps: n, theirProps: a3, slot: r4.slot || {}, defaultTag: A, name: r4.name || "Label" });
}
var v = D(h3);
var M2 = Object.assign(v, {});

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react13 = __toESM(require_react(), 1);
var y3 = (0, import_react13.createContext)(null);
y3.displayName = "GroupContext";
var Y = import_react13.Fragment;
function Z(s6) {
  var d4;
  let [n, p4] = (0, import_react13.useState)(null), [c5, f4] = H(), [r4, h4] = M(), l5 = (0, import_react13.useMemo)(() => ({ switch: n, setSwitch: p4, labelledby: c5, describedby: r4 }), [n, p4, c5, r4]), T4 = {}, b4 = s6;
  return import_react13.default.createElement(h4, { name: "Switch.Description" }, import_react13.default.createElement(f4, { name: "Switch.Label", props: { htmlFor: (d4 = l5.switch) == null ? void 0 : d4.id, onClick(t5) {
    n && (t5.currentTarget.tagName === "LABEL" && t5.preventDefault(), n.click(), n.focus({ preventScroll: true }));
  } } }, import_react13.default.createElement(y3.Provider, { value: l5 }, X({ ourProps: T4, theirProps: b4, defaultTag: Y, name: "Switch.Group" }))));
}
var ee = "button";
function te(s6, n) {
  let p4 = I(), { id: c5 = `headlessui-switch-${p4}`, checked: f4, defaultChecked: r4 = false, onChange: h4, name: l5, value: T4, form: b4, ...d4 } = s6, t5 = (0, import_react13.useContext)(y3), u5 = (0, import_react13.useRef)(null), D3 = y(u5, n, t5 === null ? null : t5.setSwitch), [o10, a3] = T2(f4, h4, r4), S3 = o4(() => a3 == null ? void 0 : a3(!o10)), C = o4((e2) => {
    if (r3(e2.currentTarget))
      return e2.preventDefault();
    e2.preventDefault(), S3();
  }), L2 = o4((e2) => {
    e2.key === o8.Space ? (e2.preventDefault(), S3()) : e2.key === o8.Enter && p2(e2.currentTarget);
  }), v2 = o4((e2) => e2.preventDefault()), G = (0, import_react13.useMemo)(() => ({ checked: o10 }), [o10]), R2 = { id: c5, ref: D3, role: "switch", type: s4(s6, u5), tabIndex: 0, "aria-checked": o10, "aria-labelledby": t5 == null ? void 0 : t5.labelledby, "aria-describedby": t5 == null ? void 0 : t5.describedby, onClick: C, onKeyUp: L2, onKeyPress: v2 }, k = p();
  return (0, import_react13.useEffect)(() => {
    var w2;
    let e2 = (w2 = u5.current) == null ? void 0 : w2.closest("form");
    e2 && r4 !== void 0 && k.addEventListener(e2, "reset", () => {
      a3(r4);
    });
  }, [u5, a3]), import_react13.default.createElement(import_react13.default.Fragment, null, l5 != null && o10 && import_react13.default.createElement(c3, { features: p3.Hidden, ...R({ as: "input", type: "checkbox", hidden: true, readOnly: true, form: b4, checked: o10, name: l5, value: T4 }) }), X({ ourProps: R2, theirProps: d4, slot: G, defaultTag: ee, name: "Switch" }));
}
var ne = D(te);
var re = Z;
var Ge = Object.assign(ne, { Group: re, Label: M2, Description: b2 });

// app/img/banner-home.jpeg
var banner_home_default = "/build/_assets/banner-home-RG4OQMPE.jpeg";

// app/components/hero.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function hero_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen bg-gray-50 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "section",
    {
      className: "bg-cover bg-center py-32 w-full h-full",
      style: { backgroundImage: `url(${banner_home_default})` },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto text-left text-white opacity-105", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl  mb-6 text-red-600 font-bold", children: "WELCOME TO ORIGAMI VENTURES LIMITED" }, void 0, false, {
            fileName: "app/components/hero.jsx",
            lineNumber: 14,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl mb-12 ", children: "Our vision is to be a holistic partner in the hospitality industry, providing comprehensive solutions and expertise that encompass all aspects of successful hospitality management." }, void 0, false, {
            fileName: "app/components/hero.jsx",
            lineNumber: 15,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/aboutus", className: "bg-red-600 text-white py-4 px-12 rounded-full hover:bg-black", children: "Read More" }, void 0, false, {
            fileName: "app/components/hero.jsx",
            lineNumber: 18,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/hero.jsx",
          lineNumber: 13,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/hero.jsx",
          lineNumber: 12,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/hero.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/hero.jsx",
      lineNumber: 7,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/hero.jsx",
    lineNumber: 6,
    columnNumber: 1
  }, this);
}

// app/components/body.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function body_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "svg",
      {
        className: "absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "pattern",
            {
              id: "e813992c-7d03-4cc4-a2bd-151760b470a0",
              width: 200,
              height: 200,
              x: "50%",
              y: -1,
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M100 200V.5M.5 .5H200", fill: "none" }, void 0, false, {
                fileName: "app/components/body.jsx",
                lineNumber: 20,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/body.jsx",
              lineNumber: 12,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { x: "50%", y: -1, className: "overflow-visible fill-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "path",
            {
              d: "M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z",
              strokeWidth: 0
            },
            void 0,
            false,
            {
              fileName: "app/components/body.jsx",
              lineNumber: 24,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 23,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/body.jsx",
        lineNumber: 7,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/body.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "Our comprehensive range of services includes:" }, void 0, false, {
        fileName: "app/components/body.jsx",
        lineNumber: 36,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/body.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/body.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/body.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          className: "w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]",
          src: banner_home_default,
          alt: ""
        },
        void 0,
        false,
        {
          fileName: "app/components/body.jsx",
          lineNumber: 41,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/body.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-xl text-base leading-7 text-black lg:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mt-8 space-y-8 text-black ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Strategic positioning and planning " }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 55,
            columnNumber: 21
          }, this),
          "involving strategic placement and foresight to maximize competitive advantage and guest satisfaction."
        ] }, void 0, true, {
          fileName: "app/components/body.jsx",
          lineNumber: 54,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/body.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Training " }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 62,
            columnNumber: 21
          }, this),
          "programs tailored to specific needs, emphasizing continuous improvement to include but not limited to health and safety, food and beverage training, customer service, team building"
        ] }, void 0, true, {
          fileName: "app/components/body.jsx",
          lineNumber: 61,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/body.jsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Finance management " }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 69,
            columnNumber: 21
          }, this),
          "entailing budgeting, cost control, and revenue optimization to ensure efficient operations, profitability, and sustainable growth within the industry's unique financial dynamics."
        ] }, void 0, true, {
          fileName: "app/components/body.jsx",
          lineNumber: 68,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/body.jsx",
          lineNumber: 66,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Human Resource advisory level " }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          "offers expert guidance on workforce planning, recruitment, training, and compliance to optimize staff performance, engagement, and overall organizational success within the dynamic hospitality sector."
        ] }, void 0, true, {
          fileName: "app/components/body.jsx",
          lineNumber: 75,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/body.jsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Event management " }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 83,
            columnNumber: 21
          }, this),
          "involving orchestrating seamless events, from planning to execution, considering logistics, coordination, and guest experiences, ensuring memorable and successful gatherings within the hospitality industry."
        ] }, void 0, true, {
          fileName: "app/components/body.jsx",
          lineNumber: 82,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/body.jsx",
          lineNumber: 80,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Pre opening " }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 90,
            columnNumber: 21
          }, this),
          "preparatory phase before a new establishment's launch, encompassing staff training, operational setup, marketing strategies, and final touches to ensure a successful opening."
        ] }, void 0, true, {
          fileName: "app/components/body.jsx",
          lineNumber: 89,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/body.jsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Sustainable practices and circular economy " }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 97,
            columnNumber: 21
          }, this),
          "emphasizing eco-friendly operations, resource efficiency, waste reduction, and recycling, fostering environmental responsibility and long-term viability while minimizing negative impacts on the ecosystem."
        ] }, void 0, true, {
          fileName: "app/components/body.jsx",
          lineNumber: 96,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/body.jsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Promoting equity and diversity within the hospitality industry " }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 104,
            columnNumber: 21
          }, this),
          "fostering inclusive workplaces, embracing varied backgrounds, cultures, and perspectives, ensuring equal opportunities, and enriching the industry's innovation and growth."
        ] }, void 0, true, {
          fileName: "app/components/body.jsx",
          lineNumber: 103,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/body.jsx",
          lineNumber: 101,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex gap-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-red-600", children: "Crafting and growing unique brands for our clients through strategic positioning " }, void 0, false, {
            fileName: "app/components/body.jsx",
            lineNumber: 111,
            columnNumber: 21
          }, this),
          "aligning values, and creating memorable experiences to establish a distinct identity, attracting and retaining guests effectively."
        ] }, void 0, true, {
          fileName: "app/components/body.jsx",
          lineNumber: 110,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/body.jsx",
          lineNumber: 108,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/body.jsx",
        lineNumber: 51,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/body.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/body.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/body.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/body.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/body.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/grid.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function grid_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { class: "grid grid-cols-2 gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: banner_home_default }, void 0, false, {
      fileName: "app/components/grid.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: banner_home_default }, void 0, false, {
      fileName: "app/components/grid.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: banner_home_default }, void 0, false, {
      fileName: "app/components/grid.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: banner_home_default }, void 0, false, {
      fileName: "app/components/grid.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: banner_home_default }, void 0, false, {
      fileName: "app/components/grid.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: banner_home_default }, void 0, false, {
      fileName: "app/components/grid.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: banner_home_default }, void 0, false, {
      fileName: "app/components/grid.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: banner_home_default }, void 0, false, {
      fileName: "app/components/grid.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/grid.jsx",
    lineNumber: 5,
    columnNumber: 7
  }, this);
}

// app/components/footer.jsx
var import_react14 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function footer_default() {
  const [agreed, setAgreed] = (0, import_react14.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "relative bg-blueGray-200 pt-8 pb-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { action: "mailto:venturesorigami@gmail.com", method: "POST", encType: "text/plain", className: "mx-auto mt-16 max-w-xl sm:mt-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "First name" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 18,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                type: "text",
                name: "first-name",
                id: "first-name",
                autoComplete: "given-name",
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 22,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 21,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 17,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Last name" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 32,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                type: "text",
                name: "last-name",
                id: "last-name",
                autoComplete: "family-name",
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 36,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 35,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "company", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Company" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 46,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                type: "text",
                name: "company",
                id: "company",
                autoComplete: "organization",
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 50,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 45,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Email" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 60,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                type: "email",
                name: "email",
                id: "email",
                autoComplete: "email",
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 64,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 63,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 59,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "phone-number", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Phone number" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative mt-2.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "country", className: "sr-only", children: "Country" }, void 0, false, {
                  fileName: "app/components/footer.jsx",
                  lineNumber: 79,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  "select",
                  {
                    id: "country",
                    name: "country",
                    className: "h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "KENYA" }, void 0, false, {
                        fileName: "app/components/footer.jsx",
                        lineNumber: 87,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "UGANDA" }, void 0, false, {
                        fileName: "app/components/footer.jsx",
                        lineNumber: 88,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "TANZANIA" }, void 0, false, {
                        fileName: "app/components/footer.jsx",
                        lineNumber: 89,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/components/footer.jsx",
                    lineNumber: 82,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  ChevronDownIcon_default,
                  {
                    className: "pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400",
                    "aria-hidden": "true"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/footer.jsx",
                    lineNumber: 91,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/footer.jsx",
                lineNumber: 78,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "input",
                {
                  type: "tel",
                  name: "phone-number",
                  id: "phone-number",
                  autoComplete: "tel",
                  className: "block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                },
                void 0,
                false,
                {
                  fileName: "app/components/footer.jsx",
                  lineNumber: 96,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/footer.jsx",
              lineNumber: 77,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 73,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Message" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 106,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "textarea",
              {
                name: "message",
                id: "message",
                rows: 4,
                className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                defaultValue: ""
              },
              void 0,
              false,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 110,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 109,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 105,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Ge.Group, { as: "div", className: "flex gap-x-4 sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Ge,
              {
                checked: agreed,
                onChange: setAgreed,
                className: classNames(
                  agreed ? "bg-red-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Agree to policies" }, void 0, false, {
                    fileName: "app/components/footer.jsx",
                    lineNumber: 129,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: classNames(
                        agreed ? "translate-x-3.5" : "translate-x-0",
                        "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      )
                    },
                    void 0,
                    false,
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
              true,
              {
                fileName: "app/components/footer.jsx",
                lineNumber: 121,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 120,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Ge.Label, { className: "text-sm leading-6 text-gray-600", children: [
              "By selecting this, you agree to our company's ",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#", className: "font-semibold text-red-600", children: "privacy\xA0policy" }, void 0, false, {
                fileName: "app/components/footer.jsx",
                lineNumber: 141,
                columnNumber: 15
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/components/footer.jsx",
              lineNumber: 139,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 119,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            children: "Let's talk"
          },
          void 0,
          false,
          {
            fileName: "app/components/footer.jsx",
            lineNumber: 149,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 148,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.jsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h5", { className: "text-lg mt-0 mb-2 text-blueGray-600", children: "We are dedicated to helping our clients achieve success, focusing on their specific needs and goals while upholding the highest standards of quality and professionalism. Origami Ventures is ready to embark on a journey with you, providing expert guidance and support to maximize your potential in the dynamic and ever-evolving hospitality industry." }, void 0, false, {
        fileName: "app/components/footer.jsx",
        lineNumber: 163,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/footer.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("hr", { className: "my-6 border-blueGray-300" }, void 0, false, {
      fileName: "app/components/footer.jsx",
      lineNumber: 168,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-wrap items-center md:justify-between justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full md:w-4/12 px-4 mx-auto text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-sm text-blueGray-500 font-semibold py-1", children: [
      "Copyright \xA9 ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { id: "get-current-year", children: "2023" }, void 0, false, {
        fileName: "app/components/footer.jsx",
        lineNumber: 172,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "https://www.creative-tim.com/product/notus-js", className: "text-blueGray-500 hover:text-gray-800", target: "_blank", children: " by " }, void 0, false, {
        fileName: "app/components/footer.jsx",
        lineNumber: 173,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "https://www.creative-tim.com?ref=njs-profile", className: "text-blueGray-500 hover:text-blueGray-800", children: "OPENSEASONS" }, void 0, false, {
        fileName: "app/components/footer.jsx",
        lineNumber: 174,
        columnNumber: 15
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/components/footer.jsx",
      lineNumber: 171,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/footer.jsx",
      lineNumber: 170,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/footer.jsx",
      lineNumber: 169,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/footer.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this);
}

// app/components/teamsections.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function teamsections_default() {
  const people = [
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
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 ", children: "Meet our leadership" }, void 0, false, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-black", children: "Origami Ventures Ltd was founded in 2022. Our training team consists of experienced hospitality trainers who possess in-depth knowledge and practical expertise in various aspects of hotel operations, customer service, and organizational excellence. They are skilled at creating dynamic and engaging learning environments, ensuring that participants gain valuable insights and skills aligned with Origami Ventures' vision and mission." }, void 0, false, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 25,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { role: "list", className: "grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2", children: people.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "h-16 w-16 rounded-full", src: person.imageUrl, alt: `${person.name}'s Image` }, void 0, false, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-base font-semibold leading-7 tracking-tight text-gray-900", children: person.name }, void 0, false, {
          fileName: "app/components/teamsections.jsx",
          lineNumber: 39,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm font-semibold leading-6 text-indigo-600", children: person.role }, void 0, false, {
          fileName: "app/components/teamsections.jsx",
          lineNumber: 40,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/teamsections.jsx",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 36,
      columnNumber: 19
    }, this) }, person.name, false, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)) }, void 0, false, {
      fileName: "app/components/teamsections.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/teamsections.jsx",
    lineNumber: 22,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/teamsections.jsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(header_default, {}, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(hero_default, {}, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(body_default, {}, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(grid_default, {}, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(teamsections_default, {}, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 14,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 15,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-ALJRDELI.js.map
