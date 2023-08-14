import {
  header_default
} from "/build/_shared/chunk-QHXENOSS.js";
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var posts = [
  {
    id: 1,
    title: "Nurturing Connections: The Heartbeat of Hospitality \u{1F3E8}",
    href: "#",
    description: "Embracing the warmth of hospitality: where every smile is a welcome, every gesture is a comfort, and every guest is family. Join us in creating moments of genuine connection and unforgettable experiences. #HospitalityMagic \u2728\u{1F3E8} #GuestsFirst #ServiceExcellence",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Hospitality", href: "#" },
    author: {
      name: "Jovita Ateya",
      role: "Co-Founder",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    id: 2,
    title: "Unlocking Excellence: Elevate Your Business with Hospitality Consultancy",
    href: "#",
    description: "Transform your hospitality venture with expert guidance. Our consultancy brings tailored strategies for exceptional guest experiences, operational efficiency, and growth. Elevate your business in a competitive market! \u{1F3E8}\u2728 #HospitalityConsultancy #BusinessSuccess",
    date: "June 3, 2022",
    datetime: "2020-03-6",
    category: { title: "Training", href: "#" },
    author: {
      name: "Esau Odeny",
      role: "Co-Founder ",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    id: 3,
    title: "Crafting Excellence: Empowering Through Comprehensive Hospitality Training",
    href: "#",
    description: "Elevate service standards through specialized hospitality training. Equip your team with the skills to deliver unforgettable guest experiences, setting new benchmarks in excellence. \u{1F31F}\u{1F3E8} #HospitalityTraining #ServiceExcellence",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Consultancy", href: "#" },
    author: {
      name: "Nasiku Small",
      role: "Co-Founder",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  }
  // More posts...
];
function blog_section_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-24 sm:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-red-600 sm:text-4xl", children: "From the blog" }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-lg leading-8 text-gray-600", children: "Learn how to grow your business with our expert consultancy advice." }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/blog-section.jsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwitterTweetEmbed, { tweetId: "1690982594865741827" }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 77,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwitterTweetEmbed, { tweetId: "1690970414611132416" }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 80,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 79,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwitterTweetEmbed, { tweetId: "1691001319488618496" }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 83,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 82,
        columnNumber: 5
      }, this),
      posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "flex max-w-xl flex-col items-start justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4 text-xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: post.datetime, className: "text-gray-500", children: post.date }, void 0, false, {
            fileName: "app/components/blog-section.jsx",
            lineNumber: 89,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: post.category.href,
              className: "relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-red-600 hover:bg-gray-100",
              children: post.category.title
            },
            void 0,
            false,
            {
              fileName: "app/components/blog-section.jsx",
              lineNumber: 92,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "group relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: post.href, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0 " }, void 0, false, {
              fileName: "app/components/blog-section.jsx",
              lineNumber: 102,
              columnNumber: 21
            }, this),
            post.title
          ] }, void 0, true, {
            fileName: "app/components/blog-section.jsx",
            lineNumber: 101,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/blog-section.jsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-5 line-clamp-3 text-sm leading-6 text-gray-600", children: post.description }, void 0, false, {
            fileName: "app/components/blog-section.jsx",
            lineNumber: 106,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 99,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mt-8 flex items-center gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: post.author.imageUrl, alt: "", className: "h-10 w-10 rounded-full bg-gray-50" }, void 0, false, {
            fileName: "app/components/blog-section.jsx",
            lineNumber: 109,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: post.author.href, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
                fileName: "app/components/blog-section.jsx",
                lineNumber: 113,
                columnNumber: 23
              }, this),
              post.author.name
            ] }, void 0, true, {
              fileName: "app/components/blog-section.jsx",
              lineNumber: 112,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/blog-section.jsx",
              lineNumber: 111,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600", children: post.author.role }, void 0, false, {
              fileName: "app/components/blog-section.jsx",
              lineNumber: 117,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/blog-section.jsx",
            lineNumber: 110,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blog-section.jsx",
          lineNumber: 108,
          columnNumber: 15
        }, this)
      ] }, post.id, true, {
        fileName: "app/components/blog-section.jsx",
        lineNumber: 87,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/blog-section.jsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/blog-section.jsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/blog-section.jsx",
    lineNumber: 64,
    columnNumber: 9
  }, this);
}

// app/routes/blog.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(header_default, {}, void 0, false, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 6,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(blog_section_default, {}, void 0, false, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 7,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 5,
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
//# sourceMappingURL=/build/routes/blog-QSDEEGJP.js.map
