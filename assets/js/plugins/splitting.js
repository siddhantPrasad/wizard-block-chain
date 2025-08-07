// Splitting js
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (n.Splitting = t());
})(this, function () {
  "use strict";
  var n = document,
    t = n.createTextNode.bind(n);
  function e(n, t, e) {
    n.style.setProperty(t, e);
  }
  function r(n, t) {
    return n.appendChild(t);
  }
  function i(t, e, i, u) {
    var o = n.createElement("span");
    return (
      e && (o.className = e),
      i && (u || o.setAttribute("data-" + e, i), (o.textContent = i)),
      (t && r(t, o)) || o
    );
  }
  function u(n, t) {
    return n.getAttribute("data-" + t);
  }
  function o(t, e) {
    return t && 0 != t.length
      ? t.nodeName
        ? [t]
        : [].slice.call(t[0].nodeName ? t : (e || n).querySelectorAll(t))
      : [];
  }
  function c(n) {
    for (var t = []; n--; ) t[n] = [];
    return t;
  }
  function s(n, t) {
    n && n.some(t);
  }
  function a(n) {
    return function (t) {
      return n[t];
    };
  }
  var l = {};
  function f(n, t, e, r) {
    return { by: n, depends: t, key: e, split: r };
  }
  function p(n) {
    l[n.by] = n;
  }
  function d(n, e, u, c, a) {
    n.normalize();
    var l = [],
      f = document.createDocumentFragment();
    c && l.push(n.previousSibling);
    var p = [];
    return (
      o(n.childNodes).some(function (n) {
        if (n.tagName && !n.hasChildNodes()) {
          p.push(n);
          return;
        }
        if (n.childNodes && n.childNodes.length) {
          p.push(n), l.push.apply(l, d(n, e, u, c, a));
          return;
        }
        var r = n.wholeText || "",
          o = r.trim();
        o.length &&
          (" " === r[0] && p.push(t(" ")),
          s(o.split(u), function (n, t) {
            t && a && p.push(i(f, "whitespace", " ", a));
            var r = i(f, e, n);
            l.push(r), p.push(r);
          }),
          " " === r[r.length - 1] && p.push(t(" ")));
      }),
      s(p, function (n) {
        r(f, n);
      }),
      (n.innerHTML = ""),
      r(n, f),
      l
    );
  }
  var h = "words",
    m = f(h, 0, "word", function (n) {
      return d(n, "word", /\s+/, 0, 1);
    }),
    g = "chars",
    v = f(g, [h], "char", function (n, t, e) {
      var r = [];
      return (
        s(e[h], function (n, e) {
          r.push.apply(r, d(n, "char", "", t.whitespace && e));
        }),
        r
      );
    });
  function y(n) {
    var t = (n = n || {}).key;
    return o(n.target || "[data-splitting]").map(function (r) {
      var i,
        o = { el: r },
        c = (function n(t, e, r) {
          var i = r.indexOf(t);
          if (-1 == i)
            r.unshift(t),
              s(l[t].depends, function (e) {
                n(e, t, r);
              });
          else {
            var u = r.indexOf(0);
            r.splice(i, 1), r.splice(u, 0, t);
          }
          return r;
        })((i = n.by || u(r, "splitting") || g), 0, []).map(a(l));
      return (
        s(c, function (i) {
          if (i.split) {
            var u,
              c,
              a,
              l,
              f,
              p = i.by,
              d = (t ? "-" + t : "") + i.key,
              h = i.split(r, n, o);
            d &&
              ((u = r),
              (c = d),
              (a = h),
              (f = (l = "--" + c) + "-index"),
              s(a, function (n, t) {
                Array.isArray(n)
                  ? s(n, function (n) {
                      e(n, f, t);
                    })
                  : e(n, f, t);
              }),
              e(u, l + "-total", a.length)),
              (o[p] = h),
              r.classList.add(p);
          }
        }),
        r.classList.add("splitting"),
        o
      );
    });
  }
  function w(n, t, e) {
    var r = o(t.matching || n.children, n),
      i = {};
    return (
      s(r, function (n) {
        var t = Math.round(n[e]);
        i[t] || (i[t] = []).push(n);
      }),
      Object.keys(i).map(Number).sort().map(a(i))
    );
  }
  (y.html = function n(t) {
    t = t || {};
    var e = i();
    e.innerHTML = t.content;
    var r = (t.target = e.firstElementChild);
    return y(t), r.outerHTML;
  }),
    (y.add = p);
  var $ = f("lines", [h], "line", function (n, t, e) {
      return w(e[h], t, "offsetTop");
    }),
    b = f("items", 0, "item", function (n, t) {
      return o(t.matching || n.children, n);
    }),
    N = f("rows", 0, "row", function (n, t) {
      return w(n, t, "offsetTop");
    }),
    x = f("cols", 0, "col", function (n, t) {
      return w(n, t, "offsetLeft");
    }),
    T = f("grid", ["rows", "cols"]),
    C = "layout",
    L = f(C, 0, 0, function (n, t) {
      var c = (t.rows = +(t.rows || u(n, "rows") || 1)),
        s = (t.columns = +(t.columns || u(n, "columns") || 1));
      if (
        ((t.image = t.image || u(n, "image") || n.currentSrc || n.src), t.image)
      ) {
        var a = o("img", n)[0];
        t.image = a && (a.currentSrc || a.src);
      }
      t.image && e(n, "background-image", "url(" + t.image + ")");
      for (var l = c * s, f = [], p = i(0, "cell-grid"); l--; ) {
        var d = i(p, "cell");
        i(d, "cell-inner"), f.push(d);
      }
      return r(n, p), f;
    }),
    _ = f("cellRows", [C], "row", function (n, t, e) {
      var r = t.rows,
        i = c(r);
      return (
        s(e[C], function (n, t, e) {
          i[Math.floor(t / (e.length / r))].push(n);
        }),
        i
      );
    }),
    k = f("cellColumns", [C], "col", function (n, t, e) {
      var r = t.columns,
        i = c(r);
      return (
        s(e[C], function (n, t) {
          i[t % r].push(n);
        }),
        i
      );
    }),
    S = f("cells", ["cellRows", "cellColumns"], "cell", function (n, t, e) {
      return e[C];
    });
  return p(m), p(v), p($), p(b), p(N), p(x), p(T), p(L), p(_), p(k), p(S), y;
});
