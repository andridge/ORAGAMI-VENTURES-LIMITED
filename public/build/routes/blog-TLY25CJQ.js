import {
  footer_default,
  header_default
} from "/build/_shared/chunk-WHJEUALU.js";
import "/build/_shared/chunk-M74ZA6GI.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FCC3XGIV.js";

// node_modules/scriptjs/dist/script.js
var require_script = __commonJS({
  "node_modules/scriptjs/dist/script.js"(exports, module) {
    (function(name, definition) {
      if (typeof module != "undefined" && module.exports)
        module.exports = definition();
      else if (typeof define == "function" && define.amd)
        define(definition);
      else
        this[name] = definition();
    })("$script", function() {
      var doc = document, head = doc.getElementsByTagName("head")[0], s = "string", f = false, push = "push", readyState = "readyState", onreadystatechange = "onreadystatechange", list = {}, ids = {}, delay = {}, scripts = {}, scriptpath, urlArgs;
      function every(ar, fn) {
        for (var i = 0, j = ar.length; i < j; ++i)
          if (!fn(ar[i]))
            return f;
        return 1;
      }
      function each(ar, fn) {
        every(ar, function(el) {
          fn(el);
          return 1;
        });
      }
      function $script(paths, idOrDone, optDone) {
        paths = paths[push] ? paths : [paths];
        var idOrDoneIsDone = idOrDone && idOrDone.call, done = idOrDoneIsDone ? idOrDone : optDone, id = idOrDoneIsDone ? paths.join("") : idOrDone, queue = paths.length;
        function loopFn(item) {
          return item.call ? item() : list[item];
        }
        function callback() {
          if (!--queue) {
            list[id] = 1;
            done && done();
            for (var dset in delay) {
              every(dset.split("|"), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
            }
          }
        }
        setTimeout(function() {
          each(paths, function loading(path, force) {
            if (path === null)
              return callback();
            if (!force && !/^https?:\/\//.test(path) && scriptpath) {
              path = path.indexOf(".js") === -1 ? scriptpath + path + ".js" : scriptpath + path;
            }
            if (scripts[path]) {
              if (id)
                ids[id] = 1;
              return scripts[path] == 2 ? callback() : setTimeout(function() {
                loading(path, true);
              }, 0);
            }
            scripts[path] = 1;
            if (id)
              ids[id] = 1;
            create(path, callback);
          });
        }, 0);
        return $script;
      }
      function create(path, fn) {
        var el = doc.createElement("script"), loaded;
        el.onload = el.onerror = el[onreadystatechange] = function() {
          if (el[readyState] && !/^c|loade/.test(el[readyState]) || loaded)
            return;
          el.onload = el[onreadystatechange] = null;
          loaded = 1;
          scripts[path] = 2;
          fn();
        };
        el.async = 1;
        el.src = urlArgs ? path + (path.indexOf("?") === -1 ? "?" : "&") + urlArgs : path;
        head.insertBefore(el, head.lastChild);
      }
      $script.get = create;
      $script.order = function(scripts2, id, done) {
        (function callback(s2) {
          s2 = scripts2.shift();
          !scripts2.length ? $script(s2, id, done) : $script(s2, callback);
        })();
      };
      $script.path = function(p) {
        scriptpath = p;
      };
      $script.urlArgs = function(str) {
        urlArgs = str;
      };
      $script.ready = function(deps, ready, req) {
        deps = deps[push] ? deps : [deps];
        var missing = [];
        !each(deps, function(dep) {
          list[dep] || missing[push](dep);
        }) && every(deps, function(dep) {
          return list[dep];
        }) ? ready() : !function(key) {
          delay[key] = delay[key] || [];
          delay[key][push](ready);
          req && req(missing);
        }(deps.join("|"));
        return $script;
      };
      $script.done = function(idOrDone) {
        $script([null], idOrDone);
      };
      return $script;
    });
  }
});

// node_modules/react-twitter-embed/dist/index.modern.js
var import_react = __toESM(require_react());
var twitterWidgetJs = "https://platform.twitter.com/widgets.js";
var methodName$5 = "createTweet";
var TwitterTweetEmbed = function TwitterTweetEmbed2(props) {
  var ref = import_react.default.useRef(null);
  var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
  import_react.default.useEffect(function() {
    var isComponentMounted = true;
    var script = require_script();
    script(twitterWidgetJs, "twitter-embed", function() {
      if (!window.twttr) {
        console.error("Failure to load window.twttr, aborting load");
        return;
      }
      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$5]) {
          console.error("Method " + methodName$5 + " is not present anymore in twttr.widget api");
          return;
        }
        window.twttr.widgets[methodName$5](props.tweetId, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function(element) {
          setLoading(false);
          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function() {
      isComponentMounted = false;
    };
  }, []);
  return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
    ref
  }));
};

// app/components/blog-section.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function blog_section_default() {
  const [isLoading, setIsLoading] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2e3);
    return () => clearTimeout(delay);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "From the blog" }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-lg leading-8 text-gray-600", children: "Learn how to grow your business with our expert consultancy advice." }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/blog-section.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3", children: isLoading ? (
      // Display a simple loading animation with three dots
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center h-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "animate-ping text-3xl text-red-600", children: "Loading..." }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 30,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this)
    ) : (
      // Display tweets once they are loaded
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwitterTweetEmbed, { tweetId: "1707344841334521956" }, void 0, false, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 36,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwitterTweetEmbed, { tweetId: "1707288473160311265" }, void 0, false, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 39,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwitterTweetEmbed, { tweetId: "1707311076679856407" }, void 0, false, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 42,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 41,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ) }, void 0, false, {
      fileName: "app/components/blog-section.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/blog-section.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/blog-section.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this);
}

// app/routes/blog.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 7,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(header_default, {}, void 0, false, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(blog_section_default, {}, void 0, false, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 9,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
export {
  Blog as default
};
/*! Bundled license information:

scriptjs/dist/script.js:
  (*!
    * $script.js JS loader & dependency manager
    * https://github.com/ded/script.js
    * (c) Dustin Diaz 2014 | License MIT
    *)
*/
//# sourceMappingURL=/build/routes/blog-TLY25CJQ.js.map
