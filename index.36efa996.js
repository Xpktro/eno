// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"clpIJ":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "a659d13536efa996";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"29JuH":[function(require,module,exports) {
"use strict";
var _tone = _interopRequireWildcard(require("tone"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const melody = [
    'G#4',
    'D#5',
    'C#5',
    'C5',
    'C6'
];
const drone = [
    'G#2',
    'G#3',
    'C4',
    'C#4',
    'D#4'
];
const voices = {
};
const volume = new _tone.Gain();
const ambient = new _tone.Reverb(30).chain(volume, _tone.default.Master);
ambient.wet.value = 0.63;
const melodyVoice = {
    envelope: {
        attack: 0.07,
        decay: 0.3,
        sustain: 0.4,
        release: 10
    }
};
const melodySynth = {
    vibratoAmount: 0.3,
    vibratoRate: 0.2,
    harmonicity: 1.005,
    voice0: melodyVoice,
    voice1: melodyVoice
};
melody.forEach((item)=>{
    voices[item] = new _tone.DuoSynth(melodySynth);
    voices[item].voice0.detune.value = 10;
    voices[item].voice1.detune.value = -12;
    voices[item].connect(ambient);
});
const droneVoice = {
    envelope: {
        attack: 3,
        decay: 1,
        sustain: 1,
        release: 20
    },
    filterEnvelope: {
        attack: 1,
        decay: 0,
        sustain: 1,
        release: 2,
        baseFrequency: 100,
        octaves: 2.2,
        exponent: 2
    },
    filter: {
        Q: 8,
        type: 'lowpass',
        rolloff: -24
    },
    oscillator: {
        type: 'fatsquare'
    }
};
const droneSynth = {
    vibratoAmount: 0.001,
    vibratoRate: 1,
    harmonicity: 1.01,
    voice0: droneVoice,
    voice1: droneVoice
};
drone.forEach((item, index)=>{
    voices[item] = new _tone.DuoSynth(droneSynth);
    voices[item].volume.value = -27 + index * 1.6;
    voices[item].connect(ambient);
});
const chain = new _tone.CtrlMarkov({
    [melody[0]]: [
        {
            value: melody[1],
            probability: 0.5
        },
        {
            value: melody[2],
            probability: 0.4
        },
        {
            value: melody[3],
            probability: 0.3
        },
        {
            value: melody[4],
            probability: 0.2
        }
    ],
    [melody[1]]: [
        {
            value: melody[0],
            probability: 0.4
        },
        {
            value: melody[2],
            probability: 0.5
        },
        {
            value: melody[3],
            probability: 0.3
        },
        {
            value: melody[4],
            probability: 0.2
        }
    ],
    [melody[2]]: [
        {
            value: melody[0],
            probability: 0.3
        },
        {
            value: melody[1],
            probability: 0.2
        },
        {
            value: melody[3],
            probability: 0.5
        },
        {
            value: melody[4],
            probability: 0.4
        }
    ],
    [melody[3]]: [
        {
            value: melody[0],
            probability: 0.4
        },
        {
            value: melody[1],
            probability: 0.3
        },
        {
            value: melody[2],
            probability: 0.2
        },
        {
            value: melody[4],
            probability: 0.5
        }
    ],
    [melody[4]]: melody.slice(0, 4)
});
chain.value = melody[0];
const playMelody = ()=>{
    voices[chain.value].triggerAttackRelease(chain.value, Math.random() * 0.6 + 0.1);
    chain.value = chain.next();
    new _tone.Event(playMelody).start(_tone.default.now() + Math.random() * 5 + 2);
};
const playDroneMelody = ()=>{
    const release = 5 + Math.random() * 8;
    const voice = drone[Math.random() < 0.5 ? 3 : 4];
    voices[voice].triggerAttackRelease(voice, release);
    new _tone.Event(playDroneMelody).start(_tone.default.now() + release + Math.random() * 5);
};
const fader2Gain = (value, velocity)=>Math.pow(Math.E, velocity * (value - 1)) * value
;
window.onload = ()=>document.getElementById('play').onclick = async ()=>{
        await _tone.default.start();
        document.getElementById('controls').innerHTML = '<input type="range" id="volume" min="0" max="1" step="0.01" value="1" />';
        document.getElementById('volume').oninput = (e)=>{
            volume.gain.value = fader2Gain(e.target.value, -1);
        };
        await ambient.generate();
        _tone.Transport.start();
        new _tone.Event(playMelody).start(_tone.default.now() + 5);
        new _tone.Event(playDroneMelody).start(_tone.default.now() + 2);
        drone.slice(0, 3).forEach((voice)=>{
            voices[voice].triggerAttack(voice);
        });
    }
;

},{"tone":"fQB8f"}],"fQB8f":[function(require,module,exports) {
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Tone = e() : t.Tone = e();
}("undefined" != typeof self ? self : this, function() {
    return (function(t) {
        var e = {
        };
        function i(s) {
            if (e[s]) return e[s].exports;
            var n = e[s] = {
                i: s,
                l: !1,
                exports: {
                }
            };
            return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
        }
        return i.m = t, i.c = e, i.d = function(t1, e1, s) {
            i.o(t1, e1) || Object.defineProperty(t1, e1, {
                configurable: !1,
                enumerable: !0,
                get: s
            });
        }, i.r = function(t1) {
            Object.defineProperty(t1, "__esModule", {
                value: !0
            });
        }, i.n = function(t1) {
            var e1 = t1 && t1.__esModule ? function() {
                return t1.default;
            } : function() {
                return t1;
            };
            return i.d(e1, "a", e1), e1;
        }, i.o = function(t1, e1) {
            return Object.prototype.hasOwnProperty.call(t1, e1);
        }, i.p = "", i(i.s = 148);
    })([
        function(t, e, i) {
            "use strict";
            i.r(e), (function(t1) {
                var s = i(93), n = function() {
                    if (!(this instanceof n)) throw new Error("constructor needs to be called with the 'new' keyword");
                };
                /**
 *  Tone.js
 *  @author Yotam Mann
 *  @license http://opensource.org/licenses/MIT MIT License
 *  @copyright 2014-2019 Yotam Mann
 */ n.prototype.toString = function() {
                    for(var t2 in n){
                        var e1 = t2[0].match(/^[A-Z]$/), i1 = n[t2] === this.constructor;
                        if (n.isFunction(n[t2]) && e1 && i1) return t2;
                    }
                    return "Tone";
                }, n.prototype.dispose = function() {
                    return this;
                }, n.prototype.set = function(t2, e2) {
                    if (n.isString(t2)) {
                        var i2 = {
                        };
                        i2[t2] = e2, t2 = i2;
                    }
                    t: for(var s1 in t2){
                        e2 = t2[s1];
                        var o = this;
                        if (-1 !== s1.indexOf(".")) {
                            for(var a = s1.split("."), r = 0; r < a.length - 1; r++)if ((o = o[a[r]]) instanceof n) {
                                a.splice(0, r + 1);
                                var l = a.join(".");
                                o.set(l, e2);
                                continue t;
                            }
                            s1 = a[a.length - 1];
                        }
                        var u = o[s1];
                        n.isUndef(u) || (n.Signal && u instanceof n.Signal || n.Param && u instanceof n.Param ? u.value !== e2 && (u.value = e2) : u instanceof AudioParam ? u.value !== e2 && (u.value = e2) : n.TimeBase && u instanceof n.TimeBase ? o[s1] = e2 : u instanceof n ? u.set(e2) : u !== e2 && (o[s1] = e2));
                    }
                    return this;
                }, n.prototype.get = function(t2) {
                    n.isUndef(t2) ? t2 = this._collectDefaults(this.constructor) : n.isString(t2) && (t2 = [
                        t2
                    ]);
                    for(var e2 = {
                    }, i3 = 0; i3 < t2.length; i3++){
                        var s1 = t2[i3], o = this, a = e2;
                        if (-1 !== s1.indexOf(".")) {
                            for(var r = s1.split("."), l = 0; l < r.length - 1; l++){
                                var u = r[l];
                                a[u] = a[u] || {
                                }, a = a[u], o = o[u];
                            }
                            s1 = r[r.length - 1];
                        }
                        var d = o[s1];
                        n.isObject(t2[s1]) ? a[s1] = d.get() : n.Signal && d instanceof n.Signal ? a[s1] = d.value : n.Param && d instanceof n.Param ? a[s1] = d.value : d instanceof AudioParam ? a[s1] = d.value : d instanceof n ? a[s1] = d.get() : !n.isFunction(d) && n.isDefined(d) && (a[s1] = d);
                    }
                    return e2;
                }, n.prototype._collectDefaults = function(t2) {
                    var e2 = [];
                    if (n.isDefined(t2.defaults) && (e2 = Object.keys(t2.defaults)), n.isDefined(t2._super)) for(var i3 = this._collectDefaults(t2._super), s2 = 0; s2 < i3.length; s2++)-1 === e2.indexOf(i3[s2]) && e2.push(i3[s2]);
                    return e2;
                }, n.defaults = function(t2, e2, i3) {
                    var s2 = {
                    };
                    if (1 === t2.length && n.isObject(t2[0])) s2 = t2[0];
                    else for(var o = 0; o < e2.length; o++)s2[e2[o]] = t2[o];
                    return n.isDefined(i3.defaults) ? n.defaultArg(s2, i3.defaults) : n.isObject(i3) ? n.defaultArg(s2, i3) : s2;
                }, n.defaultArg = function(t2, e2) {
                    if (n.isObject(t2) && n.isObject(e2)) {
                        var i3 = {
                        };
                        for(var s2 in t2)i3[s2] = n.defaultArg(e2[s2], t2[s2]);
                        for(var o in e2)i3[o] = n.defaultArg(t2[o], e2[o]);
                        return i3;
                    }
                    return n.isUndef(t2) ? e2 : t2;
                }, n.prototype.log = function() {
                    if (this.debug || this.toString() === n.global.TONE_DEBUG_CLASS) {
                        var t2 = Array.from(arguments);
                        t2.unshift(this.toString() + ":"), console.log.apply(void 0, t2);
                    }
                }, n.prototype.assert = function(t3, e2) {
                    if (!t3) throw new Error(e2);
                }, n.connectSeries = function() {
                    for(var t3 = arguments[0], e2 = 1; e2 < arguments.length; e2++){
                        var i4 = arguments[e2];
                        n.connect(t3, i4), t3 = i4;
                    }
                    return n;
                }, n.connect = function(t3, e2, i5, s3) {
                    for(; n.isDefined(e2.input);)n.isArray(e2.input) ? (s3 = n.defaultArg(s3, 0), e2 = e2.input[s3], s3 = 0) : e2.input && (e2 = e2.input);
                    return e2 instanceof AudioParam ? t3.connect(e2, i5) : e2 instanceof AudioNode && t3.connect(e2, i5, s3), n;
                }, n.disconnect = function(t3, e2, i5, s3) {
                    if (e2) {
                        for(var o = !1; !o;)n.isArray(e2.input) ? (n.isDefined(s3) ? n.disconnect(t3, e2.input[s3], i5) : e2.input.forEach(function(e3) {
                            try {
                                n.disconnect(t3, e3, i5);
                            } catch (t4) {
                            }
                        }), o = !0) : e2.input ? e2 = e2.input : o = !0;
                        e2 instanceof AudioParam ? t3.disconnect(e2, i5) : e2 instanceof AudioNode && t3.disconnect(e2, i5, s3);
                    } else t3.disconnect();
                    return n;
                }, n.isUndef = function(t3) {
                    return (void 0) === t3;
                }, n.isDefined = function(t3) {
                    return !n.isUndef(t3);
                }, n.isFunction = function(t3) {
                    return "function" == typeof t3;
                }, n.isNumber = function(t3) {
                    return "number" == typeof t3;
                }, n.isObject = function(t3) {
                    return "[object Object]" === Object.prototype.toString.call(t3) && t3.constructor === Object;
                }, n.isBoolean = function(t3) {
                    return "boolean" == typeof t3;
                }, n.isArray = function(t3) {
                    return Array.isArray(t3);
                }, n.isString = function(t3) {
                    return "string" == typeof t3;
                }, n.isNote = function(t3) {
                    return n.isString(t3) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t3);
                }, n.noOp = function() {
                }, n.prototype._readOnly = function(t3) {
                    if (Array.isArray(t3)) for(var e2 = 0; e2 < t3.length; e2++)this._readOnly(t3[e2]);
                    else Object.defineProperty(this, t3, {
                        writable: !1,
                        enumerable: !0
                    });
                }, n.prototype._writable = function(t3) {
                    if (Array.isArray(t3)) for(var e2 = 0; e2 < t3.length; e2++)this._writable(t3[e2]);
                    else Object.defineProperty(this, t3, {
                        writable: !0
                    });
                }, n.State = {
                    Started: "started",
                    Stopped: "stopped",
                    Paused: "paused"
                }, n.global = n.isUndef(t1) ? window : t1, n.equalPowerScale = function(t3) {
                    var e2 = 0.5 * Math.PI;
                    return Math.sin(t3 * e2);
                }, n.dbToGain = function(t3) {
                    return Math.pow(10, t3 / 20);
                }, n.gainToDb = function(t3) {
                    return Math.log(t3) / Math.LN10 * 20;
                }, n.intervalToFrequencyRatio = function(t3) {
                    return Math.pow(2, t3 / 12);
                }, n.prototype.now = function() {
                    return n.context.now();
                }, n.now = function() {
                    return n.context.now();
                }, n.prototype.immediate = function() {
                    return n.context.currentTime;
                }, n.immediate = function() {
                    return n.context.currentTime;
                }, n.extend = function(t3, e2) {
                    function i5() {
                    }
                    n.isUndef(e2) && (e2 = n), i5.prototype = e2.prototype, t3.prototype = new i5, t3.prototype.constructor = t3, t3._super = e2;
                }, n._audioContext = null, n.start = function() {
                    return n.context.resume();
                }, Object.defineProperty(n, "context", {
                    get: function() {
                        return n._audioContext;
                    },
                    set: function(t3) {
                        t3.isContext ? n._audioContext = t3 : n._audioContext = new n.Context(t3), n.Context.emit("init", n._audioContext);
                    }
                }), Object.defineProperty(n.prototype, "context", {
                    get: function() {
                        return n.context;
                    }
                }), n.setContext = function(t3) {
                    n.context = t3;
                }, Object.defineProperty(n.prototype, "blockTime", {
                    get: function() {
                        return 128 / this.context.sampleRate;
                    }
                }), Object.defineProperty(n.prototype, "sampleTime", {
                    get: function() {
                        return 1 / this.context.sampleRate;
                    }
                }), Object.defineProperty(n, "supported", {
                    get: function() {
                        var t3 = n.global.hasOwnProperty("AudioContext") || n.global.hasOwnProperty("webkitAudioContext"), e2 = n.global.hasOwnProperty("Promise");
                        return t3 && e2;
                    }
                }), Object.defineProperty(n, "initialized", {
                    get: function() {
                        return Boolean(n.context);
                    }
                }), n.getContext = function(t3) {
                    if (n.initialized) t3(n.context);
                    else {
                        var e2 = function() {
                            t3(n.context), n.Context.off("init", e2);
                        };
                        n.Context.on("init", e2);
                    }
                    return n;
                }, n.version = s.a, e.default = n;
            }).call(this, i(147));
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(20);
            if (s3.default.supported) {
                var n = new OfflineAudioContext(2, 1, 44100), o = n.createGain(), a = n.createGain();
                if (o.connect(a) !== a) {
                    var r = AudioNode.prototype.connect;
                    AudioNode.prototype.connect = function() {
                        return r.apply(this, arguments), arguments[0];
                    };
                }
            }
            s3.default.AudioNode = function() {
                s3.default.call(this);
                var t3 = s3.default.defaults(arguments, [
                    "context"
                ], {
                    context: s3.default.context
                });
                this._context = t3.context;
            }, s3.default.extend(s3.default.AudioNode), Object.defineProperty(s3.default.AudioNode.prototype, "context", {
                get: function() {
                    return this._context;
                }
            }), s3.default.AudioNode.prototype.createInsOuts = function(t3, e4) {
                1 === t3 ? this.input = this.context.createGain() : t3 > 1 && (this.input = new Array(t3)), 1 === e4 ? this.output = this.context.createGain() : e4 > 1 && (this.output = new Array(e4));
            }, Object.defineProperty(s3.default.AudioNode.prototype, "channelCount", {
                get: function() {
                    return this.output.channelCount;
                },
                set: function(t3) {
                    return this.output.channelCount = t3;
                }
            }), Object.defineProperty(s3.default.AudioNode.prototype, "channelCountMode", {
                get: function() {
                    return this.output.channelCountMode;
                },
                set: function(t3) {
                    return this.output.channelCountMode = t3;
                }
            }), Object.defineProperty(s3.default.AudioNode.prototype, "channelInterpretation", {
                get: function() {
                    return this.output.channelInterpretation;
                },
                set: function(t3) {
                    return this.output.channelInterpretation = t3;
                }
            }), Object.defineProperty(s3.default.AudioNode.prototype, "numberOfInputs", {
                get: function() {
                    return this.input ? s3.default.isArray(this.input) ? this.input.length : 1 : 0;
                }
            }), Object.defineProperty(s3.default.AudioNode.prototype, "numberOfOutputs", {
                get: function() {
                    return this.output ? s3.default.isArray(this.output) ? this.output.length : 1 : 0;
                }
            }), s3.default.AudioNode.prototype.connect = function(t3, e4, i6) {
                return s3.default.isArray(this.output) ? (e4 = s3.default.defaultArg(e4, 0), this.output[e4].connect(t3, 0, i6)) : s3.default.connect(this.output, t3, e4, i6), this;
            }, s3.default.AudioNode.prototype.disconnect = function(t3, e4, i6) {
                return s3.default.isArray(this.output) ? (e4 = s3.default.defaultArg(e4, 0), this.output[e4].disconnect(t3, 0, i6)) : s3.default.disconnect(this.output, t3, e4, i6), this;
            }, s3.default.AudioNode.prototype.chain = function() {
                var t3 = Array.from(arguments);
                return t3.unshift(this), s3.default.connectSeries.apply(void 0, t3), this;
            }, s3.default.AudioNode.prototype.fan = function() {
                for(var t3 = 0; t3 < arguments.length; t3++)this.connect(arguments[t3]);
                return this;
            }, s3.default.AudioNode.prototype.dispose = function() {
                return s3.default.isDefined(this.input) && (this.input instanceof AudioNode && this.input.disconnect(), this.input = null), s3.default.isDefined(this.output) && (this.output instanceof AudioNode && this.output.disconnect(), this.output = null), this._context = null, this;
            };
            e3.default = s3.default.AudioNode;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(4), i5(14), i5(30), i5(44), i5(20), i5(3);
            if (s3.default.supported && !s3.default.global.AudioContext.prototype.createConstantSource) {
                var n = function(t3) {
                    this.context = t3;
                    for(var e4 = t3.createBuffer(1, 128, t3.sampleRate), i6 = e4.getChannelData(0), s4 = 0; s4 < i6.length; s4++)i6[s4] = 1;
                    this._bufferSource = t3.createBufferSource(), this._bufferSource.channelCount = 1, this._bufferSource.channelCountMode = "explicit", this._bufferSource.buffer = e4, this._bufferSource.loop = !0;
                    var n1 = this._output = t3.createGain();
                    this.offset = n1.gain, this._bufferSource.connect(n1);
                };
                n.prototype.start = function(t3) {
                    return this._bufferSource.start(t3), this;
                }, n.prototype.stop = function(t3) {
                    return this._bufferSource.stop(t3), this;
                }, n.prototype.connect = function() {
                    return this._output.connect.apply(this._output, arguments), this;
                }, n.prototype.disconnect = function() {
                    return this._output.disconnect.apply(this._output, arguments), this;
                }, AudioContext.prototype.createConstantSource = function() {
                    return new n(this);
                }, s3.default.Context.prototype.createConstantSource = function() {
                    return new n(this);
                };
            }
            s3.default.Signal = function() {
                var t3 = s3.default.defaults(arguments, [
                    "value",
                    "units"
                ], s3.default.Signal);
                s3.default.Param.call(this, t3), this._constantSource = this.context.createConstantSource(), this._constantSource.start(0), this._param = this._constantSource.offset, this.value = t3.value, this.output = this._constantSource, this.input = this._param = this.output.offset;
            }, s3.default.extend(s3.default.Signal, s3.default.Param), s3.default.Signal.defaults = {
                value: 0,
                units: s3.default.Type.Default,
                convert: !0
            }, s3.default.Signal.prototype.connect = s3.default.SignalBase.prototype.connect, s3.default.Signal.prototype.disconnect = s3.default.SignalBase.prototype.disconnect, s3.default.Signal.prototype.getValueAtTime = function(t3) {
                return this._param.getValueAtTime ? this._param.getValueAtTime(t3) : s3.default.Param.prototype.getValueAtTime.call(this, t3);
            }, s3.default.Signal.prototype.dispose = function() {
                return s3.default.Param.prototype.dispose.call(this), this._constantSource.stop(), this._constantSource.disconnect(), this._constantSource = null, this;
            };
            e3.default = s3.default.Signal;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(14), i5(4), i5(1);
            s3.default.Gain = function() {
                var t3 = s3.default.defaults(arguments, [
                    "gain",
                    "units"
                ], s3.default.Gain);
                s3.default.AudioNode.call(this, t3), this.input = this.output = this._gainNode = this.context.createGain(), this.gain = new s3.default.Param({
                    param: this._gainNode.gain,
                    units: t3.units,
                    value: t3.gain,
                    convert: t3.convert
                }), this._readOnly("gain");
            }, s3.default.extend(s3.default.Gain, s3.default.AudioNode), s3.default.Gain.defaults = {
                gain: 1,
                convert: !0
            }, s3.default.Gain.prototype.dispose = function() {
                s3.default.AudioNode.prototype.dispose.call(this), this._gainNode.disconnect(), this._gainNode = null, this._writable("gain"), this.gain.dispose(), this.gain = null;
            }, e3.default = s3.default.Gain;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(63), i5(46), i5(45), i5(20);
            s3.default.Type = {
                Default: "number",
                Time: "time",
                Frequency: "frequency",
                TransportTime: "transportTime",
                Ticks: "ticks",
                NormalRange: "normalRange",
                AudioRange: "audioRange",
                Decibels: "db",
                Interval: "interval",
                BPM: "bpm",
                Positive: "positive",
                Gain: "gain",
                Cents: "cents",
                Degrees: "degrees",
                MIDI: "midi",
                BarsBeatsSixteenths: "barsBeatsSixteenths",
                Samples: "samples",
                Hertz: "hertz",
                Note: "note",
                Milliseconds: "milliseconds",
                Seconds: "seconds",
                Notation: "notation"
            }, s3.default.prototype.toSeconds = function(t3) {
                return s3.default.isNumber(t3) ? t3 : s3.default.isUndef(t3) ? this.now() : s3.default.isString(t3) || s3.default.isObject(t3) ? new s3.default.Time(t3).toSeconds() : t3 instanceof s3.default.TimeBase ? t3.toSeconds() : void 0;
            }, s3.default.prototype.toFrequency = function(t3) {
                return s3.default.isNumber(t3) ? t3 : s3.default.isString(t3) || s3.default.isUndef(t3) || s3.default.isObject(t3) ? new s3.default.Frequency(t3).valueOf() : t3 instanceof s3.default.TimeBase ? t3.toFrequency() : void 0;
            }, s3.default.prototype.toTicks = function(t3) {
                return s3.default.isNumber(t3) || s3.default.isString(t3) || s3.default.isObject(t3) ? new s3.default.TransportTime(t3).toTicks() : s3.default.isUndef(t3) ? s3.default.Transport.ticks : t3 instanceof s3.default.TimeBase ? t3.toTicks() : void 0;
            }, e3.default = s3.default;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(14), i5(3), i5(30);
            s3.default.Multiply = function(t3) {
                s3.default.Signal.call(this), this.createInsOuts(2, 0), this._mult = this.input[0] = this.output = new s3.default.Gain, this._param = this.input[1] = this.output.gain, this.value = s3.default.defaultArg(t3, 0);
            }, s3.default.extend(s3.default.Multiply, s3.default.Signal), s3.default.Multiply.prototype.dispose = function() {
                return s3.default.Signal.prototype.dispose.call(this), this._mult.dispose(), this._mult = null, this._param = null, this;
            }, e3.default = s3.default.Multiply;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(16), i5(27), i5(40), i5(4), i5(34), i5(2), i5(1);
            s3.default.Source = function(t3) {
                t3 = s3.default.defaultArg(t3, s3.default.Source.defaults), s3.default.AudioNode.call(this), this._volume = this.output = new s3.default.Volume(t3.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._state = new s3.default.TimelineState(s3.default.State.Stopped), this._state.memory = 100, this._synced = !1, this._scheduled = [], this._volume.output.output.channelCount = 2, this._volume.output.output.channelCountMode = "explicit", this.mute = t3.mute;
            }, s3.default.extend(s3.default.Source, s3.default.AudioNode), s3.default.Source.defaults = {
                volume: 0,
                mute: !1
            }, Object.defineProperty(s3.default.Source.prototype, "state", {
                get: function() {
                    return this._synced ? s3.default.Transport.state === s3.default.State.Started ? this._state.getValueAtTime(s3.default.Transport.seconds) : s3.default.State.Stopped : this._state.getValueAtTime(this.now());
                }
            }), Object.defineProperty(s3.default.Source.prototype, "mute", {
                get: function() {
                    return this._volume.mute;
                },
                set: function(t3) {
                    this._volume.mute = t3;
                }
            }), s3.default.Source.prototype._start = s3.default.noOp, s3.default.Source.prototype.restart = s3.default.noOp, s3.default.Source.prototype._stop = s3.default.noOp, s3.default.Source.prototype.start = function(t3, e4, i6) {
                if (s3.default.isUndef(t3) && this._synced ? t3 = s3.default.Transport.seconds : (t3 = this.toSeconds(t3), this._synced || (t3 = Math.max(t3, this.context.currentTime))), this._state.getValueAtTime(t3) === s3.default.State.Started) this._state.cancel(t3), this._state.setStateAtTime(s3.default.State.Started, t3), this.restart(t3, e4, i6);
                else if (this._state.setStateAtTime(s3.default.State.Started, t3), this._synced) {
                    var n = this._state.get(t3);
                    n.offset = s3.default.defaultArg(e4, 0), n.duration = i6;
                    var o = s3.default.Transport.schedule((function(t4) {
                        this._start(t4, e4, i6);
                    }).bind(this), t3);
                    this._scheduled.push(o), s3.default.Transport.state === s3.default.State.Started && this._syncedStart(this.now(), s3.default.Transport.seconds);
                } else this._start.apply(this, arguments);
                return this;
            }, s3.default.Source.prototype.stop = function(t3) {
                if (s3.default.isUndef(t3) && this._synced ? t3 = s3.default.Transport.seconds : (t3 = this.toSeconds(t3), t3 = Math.max(t3, this.context.currentTime)), this._synced) {
                    var e4 = s3.default.Transport.schedule(this._stop.bind(this), t3);
                    this._scheduled.push(e4);
                } else this._stop.apply(this, arguments);
                return this._state.cancel(t3), this._state.setStateAtTime(s3.default.State.Stopped, t3), this;
            }, s3.default.Source.prototype.sync = function() {
                return this._synced = !0, this._syncedStart = (function(t3, e5) {
                    if (e5 > 0) {
                        var i6 = this._state.get(e5);
                        if (i6 && i6.state === s3.default.State.Started && i6.time !== e5) {
                            var n, o = e5 - this.toSeconds(i6.time);
                            i6.duration && (n = this.toSeconds(i6.duration) - o), this._start(t3, this.toSeconds(i6.offset) + o, n);
                        }
                    }
                }).bind(this), this._syncedStop = (function(t3) {
                    var e5 = s3.default.Transport.getSecondsAtTime(Math.max(t3 - this.sampleTime, 0));
                    this._state.getValueAtTime(e5) === s3.default.State.Started && this._stop(t3);
                }).bind(this), s3.default.Transport.on("start loopStart", this._syncedStart), s3.default.Transport.on("stop pause loopEnd", this._syncedStop), this;
            }, s3.default.Source.prototype.unsync = function() {
                this._synced && (s3.default.Transport.off("stop pause loopEnd", this._syncedStop), s3.default.Transport.off("start loopStart", this._syncedStart)), this._synced = !1;
                for(var t3 = 0; t3 < this._scheduled.length; t3++){
                    var e5 = this._scheduled[t3];
                    s3.default.Transport.clear(e5);
                }
                return this._scheduled = [], this._state.cancel(0), this;
            }, s3.default.Source.prototype.dispose = function() {
                s3.default.AudioNode.prototype.dispose.call(this), this.unsync(), this._scheduled = null, this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null, this._state.dispose(), this._state = null;
            }, e3.default = s3.default.Source;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(30), i5(44);
            if (s3.default.supported && !s3.default.global.AudioContext.prototype._native_createWaveShaper) {
                var n = navigator.userAgent.toLowerCase();
                if (n.includes("safari") && !n.includes("chrome")) {
                    var o = function(t3) {
                        for(var e6 in this._internalNode = this.input = this.output = t3._native_createWaveShaper(), this._curve = null, this._internalNode)this._defineProperty(this._internalNode, e6);
                    };
                    Object.defineProperty(o.prototype, "curve", {
                        get: function() {
                            return this._curve;
                        },
                        set: function(t3) {
                            this._curve = t3;
                            var e6 = new Float32Array(t3.length + 1);
                            e6.set(t3, 1), e6[0] = t3[0], this._internalNode.curve = e6;
                        }
                    }), o.prototype._defineProperty = function(t3, e6) {
                        s3.default.isUndef(this[e6]) && Object.defineProperty(this, e6, {
                            get: function() {
                                return "function" == typeof t3[e6] ? t3[e6].bind(t3) : t3[e6];
                            },
                            set: function(i7) {
                                t3[e6] = i7;
                            }
                        });
                    }, s3.default.global.AudioContext.prototype._native_createWaveShaper = s3.default.global.AudioContext.prototype.createWaveShaper, s3.default.global.AudioContext.prototype.createWaveShaper = function() {
                        return new o(this);
                    };
                }
            }
            s3.default.WaveShaper = function(t3, e6) {
                s3.default.SignalBase.call(this), this._shaper = this.input = this.output = this.context.createWaveShaper(), this._curve = null, Array.isArray(t3) ? this.curve = t3 : isFinite(t3) || s3.default.isUndef(t3) ? this._curve = new Float32Array(s3.default.defaultArg(t3, 1024)) : s3.default.isFunction(t3) && (this._curve = new Float32Array(s3.default.defaultArg(e6, 1024)), this.setMap(t3));
            }, s3.default.extend(s3.default.WaveShaper, s3.default.SignalBase), s3.default.WaveShaper.prototype.setMap = function(t3) {
                for(var e6 = new Array(this._curve.length), i7 = 0, s4 = this._curve.length; i7 < s4; i7++){
                    var n = i7 / (s4 - 1) * 2 - 1;
                    e6[i7] = t3(n, i7);
                }
                return this.curve = e6, this;
            }, Object.defineProperty(s3.default.WaveShaper.prototype, "curve", {
                get: function() {
                    return this._shaper.curve;
                },
                set: function(t3) {
                    this._curve = new Float32Array(t3), this._shaper.curve = this._curve;
                }
            }), Object.defineProperty(s3.default.WaveShaper.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample;
                },
                set: function(t3) {
                    if (![
                        "none",
                        "2x",
                        "4x"
                    ].includes(t3)) throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");
                    this._shaper.oversample = t3;
                }
            }), s3.default.WaveShaper.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._shaper.disconnect(), this._shaper = null, this._curve = null, this;
            };
            e3.default = s3.default.WaveShaper;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(23), i5(1);
            s3.default.Effect = function() {
                var t3 = s3.default.defaults(arguments, [
                    "wet"
                ], s3.default.Effect);
                s3.default.AudioNode.call(this), this.createInsOuts(1, 1), this._dryWet = new s3.default.CrossFade(t3.wet), this.wet = this._dryWet.fade, this.effectSend = new s3.default.Gain, this.effectReturn = new s3.default.Gain, s3.default.connect(this.input, this._dryWet.a), s3.default.connect(this.input, this.effectSend), this.effectReturn.connect(this._dryWet.b), this._dryWet.connect(this.output), this._readOnly([
                    "wet"
                ]);
            }, s3.default.extend(s3.default.Effect, s3.default.AudioNode), s3.default.Effect.defaults = {
                wet: 1
            }, s3.default.Effect.prototype.connectEffect = function(t3) {
                return this.effectSend.chain(t3, this.effectReturn), this;
            }, s3.default.Effect.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this.effectSend.dispose(), this.effectSend = null, this.effectReturn.dispose(), this.effectReturn = null, this._writable([
                    "wet"
                ]), this.wet = null, this;
            }, e3.default = s3.default.Effect;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2), i5(1);
            s3.default.Filter = function() {
                var t3 = s3.default.defaults(arguments, [
                    "frequency",
                    "type",
                    "rolloff"
                ], s3.default.Filter);
                s3.default.AudioNode.call(this), this.createInsOuts(1, 1), this._filters = [], this.frequency = new s3.default.Signal(t3.frequency, s3.default.Type.Frequency), this.detune = new s3.default.Signal(0, s3.default.Type.Cents), this.gain = new s3.default.Signal({
                    value: t3.gain,
                    convert: !0,
                    type: s3.default.Type.Decibels
                }), this.Q = new s3.default.Signal(t3.Q), this._type = t3.type, this._rolloff = t3.rolloff, this.rolloff = t3.rolloff, this._readOnly([
                    "detune",
                    "frequency",
                    "gain",
                    "Q"
                ]);
            }, s3.default.extend(s3.default.Filter, s3.default.AudioNode), s3.default.Filter.defaults = {
                type: "lowpass",
                frequency: 350,
                rolloff: -12,
                Q: 1,
                gain: 0
            }, Object.defineProperty(s3.default.Filter.prototype, "type", {
                get: function() {
                    return this._type;
                },
                set: function(t3) {
                    if (-1 === [
                        "lowpass",
                        "highpass",
                        "bandpass",
                        "lowshelf",
                        "highshelf",
                        "notch",
                        "allpass",
                        "peaking"
                    ].indexOf(t3)) throw new TypeError("Tone.Filter: invalid type " + t3);
                    this._type = t3;
                    for(var e6 = 0; e6 < this._filters.length; e6++)this._filters[e6].type = t3;
                }
            }), Object.defineProperty(s3.default.Filter.prototype, "rolloff", {
                get: function() {
                    return this._rolloff;
                },
                set: function(t3) {
                    t3 = parseInt(t3, 10);
                    var e6 = [
                        -12,
                        -24,
                        -48,
                        -96
                    ].indexOf(t3);
                    if (-1 === e6) throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");
                    e6 += 1, this._rolloff = t3, this.input.disconnect();
                    for(var i7 = 0; i7 < this._filters.length; i7++)this._filters[i7].disconnect(), this._filters[i7] = null;
                    this._filters = new Array(e6);
                    for(var n = 0; n < e6; n++){
                        var o = this.context.createBiquadFilter();
                        o.type = this._type, this.frequency.connect(o.frequency), this.detune.connect(o.detune), this.Q.connect(o.Q), this.gain.connect(o.gain), this._filters[n] = o;
                    }
                    var a = [
                        this.input
                    ].concat(this._filters).concat([
                        this.output
                    ]);
                    s3.default.connectSeries.apply(s3.default, a);
                }
            }), s3.default.Filter.prototype.getFrequencyResponse = function(t3) {
                t3 = s3.default.defaultArg(t3, 128);
                for(var e6 = new Float32Array(t3).map(function() {
                    return 1;
                }), i7 = new Float32Array(t3), n = 0; n < t3; n++){
                    var o = 19980 * Math.pow(n / t3, 2) + 20;
                    i7[n] = o;
                }
                var a = new Float32Array(t3), r = new Float32Array(t3);
                return this._filters.forEach((function() {
                    var t4 = this.context.createBiquadFilter();
                    t4.type = this._type, t4.Q.value = this.Q.value, t4.frequency.value = this.frequency.value, t4.gain.value = this.gain.value, t4.getFrequencyResponse(i7, a, r), a.forEach(function(t5, i8) {
                        e6[i8] *= t5;
                    });
                }).bind(this)), e6;
            }, s3.default.Filter.prototype.dispose = function() {
                s3.default.AudioNode.prototype.dispose.call(this);
                for(var t3 = 0; t3 < this._filters.length; t3++)this._filters[t3].disconnect(), this._filters[t3] = null;
                return this._filters = null, this._writable([
                    "detune",
                    "frequency",
                    "gain",
                    "Q"
                ]), this.frequency.dispose(), this.Q.dispose(), this.frequency = null, this.Q = null, this.detune.dispose(), this.detune = null, this.gain.dispose(), this.gain = null, this;
            }, e3.default = s3.default.Filter;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(1);
            s3.default.Merge = function(t3) {
                t3 = s3.default.defaultArg(t3, 2), s3.default.AudioNode.call(this), this.createInsOuts(t3, 0), this._merger = this.output = this.context.createChannelMerger(t3);
                for(var e6 = 0; e6 < t3; e6++)this.input[e6] = new s3.default.Gain, this.input[e6].connect(this._merger, 0, e6), this.input[e6].channelCount = 1, this.input[e6].channelCountMode = "explicit";
                this.left = this.input[0], this.right = this.input[1];
            }, s3.default.extend(s3.default.Merge, s3.default.AudioNode), s3.default.Merge.prototype.dispose = function() {
                return this.input.forEach(function(t3) {
                    t3.dispose();
                }), s3.default.AudioNode.prototype.dispose.call(this), this.left = null, this.right = null, this._merger.disconnect(), this._merger = null, this;
            }, e3.default = s3.default.Merge;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(35), i5(4);
            s3.default.supported && (AudioBuffer.prototype.copyToChannel || (AudioBuffer.prototype.copyToChannel = function(t3, e6, i7) {
                var s4 = this.getChannelData(e6);
                i7 = i7 || 0;
                for(var n = 0; n < s4.length; n++)s4[n + i7] = t3[n];
            }, AudioBuffer.prototype.copyFromChannel = function(t3, e6, i7) {
                var s4 = this.getChannelData(e6);
                i7 = i7 || 0;
                for(var n = 0; n < t3.length; n++)t3[n] = s4[n + i7];
            })), s3.default.Buffer = function() {
                var t3 = s3.default.defaults(arguments, [
                    "url",
                    "onload",
                    "onerror"
                ], s3.default.Buffer);
                s3.default.call(this), this._buffer = null, this._reversed = t3.reverse, this._xhr = null, this.onload = s3.default.noOp, t3.url instanceof AudioBuffer || t3.url instanceof s3.default.Buffer ? (this.set(t3.url), this.loaded || (this.onload = t3.onload)) : s3.default.isString(t3.url) && this.load(t3.url).then(t3.onload).catch(t3.onerror);
            }, s3.default.extend(s3.default.Buffer), s3.default.Buffer.defaults = {
                url: void 0,
                reverse: !1,
                onload: s3.default.noOp,
                onerror: s3.default.noOp
            }, s3.default.Buffer.prototype.set = function(t3) {
                return t3 instanceof s3.default.Buffer ? t3.loaded ? this._buffer = t3.get() : t3.onload = (function() {
                    this.set(t3), this.onload(this);
                }).bind(this) : this._buffer = t3, this._reversed && this._reverse(), this;
            }, s3.default.Buffer.prototype.get = function() {
                return this._buffer;
            }, s3.default.Buffer.prototype.load = function(t3, e6, i7) {
                return new Promise((function(n, o) {
                    this._xhr = s3.default.Buffer.load(t3, (function(t4) {
                        this._xhr = null, this.set(t4), n(this), this.onload(this), e6 && e6(this);
                    }).bind(this), (function(t4) {
                        this._xhr = null, o(t4), i7 && i7(t4);
                    }).bind(this));
                }).bind(this));
            }, s3.default.Buffer.prototype.dispose = function() {
                return s3.default.prototype.dispose.call(this), this._buffer = null, this._xhr && (s3.default.Buffer._removeFromDownloadQueue(this._xhr), this._xhr.abort(), this._xhr = null), this;
            }, Object.defineProperty(s3.default.Buffer.prototype, "loaded", {
                get: function() {
                    return this.length > 0;
                }
            }), Object.defineProperty(s3.default.Buffer.prototype, "duration", {
                get: function() {
                    return this._buffer ? this._buffer.duration : 0;
                }
            }), Object.defineProperty(s3.default.Buffer.prototype, "length", {
                get: function() {
                    return this._buffer ? this._buffer.length : 0;
                }
            }), Object.defineProperty(s3.default.Buffer.prototype, "numberOfChannels", {
                get: function() {
                    return this._buffer ? this._buffer.numberOfChannels : 0;
                }
            }), s3.default.Buffer.prototype.fromArray = function(t3) {
                var e6 = t3[0].length > 0, i7 = e6 ? t3.length : 1, s4 = e6 ? t3[0].length : t3.length, n = this.context.createBuffer(i7, s4, this.context.sampleRate);
                e6 || 1 !== i7 || (t3 = [
                    t3
                ]);
                for(var o = 0; o < i7; o++)n.copyToChannel(t3[o], o);
                return this._buffer = n, this;
            }, s3.default.Buffer.prototype.toMono = function(t3) {
                if (s3.default.isNumber(t3)) this.fromArray(this.toArray(t3));
                else {
                    for(var e6 = new Float32Array(this.length), i7 = this.numberOfChannels, n = 0; n < i7; n++)for(var o = this.toArray(n), a = 0; a < o.length; a++)e6[a] += o[a];
                    e6 = e6.map(function(t4) {
                        return t4 / i7;
                    }), this.fromArray(e6);
                }
                return this;
            }, s3.default.Buffer.prototype.toArray = function(t3) {
                if (s3.default.isNumber(t3)) return this.getChannelData(t3);
                if (1 === this.numberOfChannels) return this.toArray(0);
                for(var e7 = [], i8 = 0; i8 < this.numberOfChannels; i8++)e7[i8] = this.getChannelData(i8);
                return e7;
            }, s3.default.Buffer.prototype.getChannelData = function(t3) {
                return this._buffer.getChannelData(t3);
            }, s3.default.Buffer.prototype.slice = function(t3, e7) {
                e7 = s3.default.defaultArg(e7, this.duration);
                for(var i8 = Math.floor(this.context.sampleRate * this.toSeconds(t3)), n = Math.floor(this.context.sampleRate * this.toSeconds(e7)), o = [], a = 0; a < this.numberOfChannels; a++)o[a] = this.toArray(a).slice(i8, n);
                return (new s3.default.Buffer).fromArray(o);
            }, s3.default.Buffer.prototype._reverse = function() {
                if (this.loaded) for(var t3 = 0; t3 < this.numberOfChannels; t3++)Array.prototype.reverse.call(this.getChannelData(t3));
                return this;
            }, Object.defineProperty(s3.default.Buffer.prototype, "reverse", {
                get: function() {
                    return this._reversed;
                },
                set: function(t3) {
                    this._reversed !== t3 && (this._reversed = t3, this._reverse());
                }
            }), s3.default.Emitter.mixin(s3.default.Buffer), s3.default.Buffer._downloadQueue = [], s3.default.Buffer.baseUrl = "", s3.default.Buffer.fromArray = function(t3) {
                return (new s3.default.Buffer).fromArray(t3);
            }, s3.default.Buffer.fromUrl = function(t3) {
                var e7 = new s3.default.Buffer;
                return e7.load(t3).then(function() {
                    return e7;
                });
            }, s3.default.Buffer._removeFromDownloadQueue = function(t3) {
                var e7 = s3.default.Buffer._downloadQueue.indexOf(t3);
                -1 !== e7 && s3.default.Buffer._downloadQueue.splice(e7, 1);
            }, s3.default.Buffer.load = function(t3, e7, i8) {
                e7 = s3.default.defaultArg(e7, s3.default.noOp);
                var n = t3.match(/\[(.+\|?)+\]$/);
                if (n) {
                    for(var o = n[1].split("|"), a = o[0], r = 0; r < o.length; r++)if (s3.default.Buffer.supportsType(o[r])) {
                        a = o[r];
                        break;
                    }
                    t3 = t3.replace(n[0], a);
                }
                function l(t4) {
                    if (s3.default.Buffer._removeFromDownloadQueue(d), s3.default.Buffer.emit("error", t4), !i8) throw t4;
                    i8(t4);
                }
                function u() {
                    for(var t4 = 0, e8 = 0; e8 < s3.default.Buffer._downloadQueue.length; e8++)t4 += s3.default.Buffer._downloadQueue[e8].progress;
                    s3.default.Buffer.emit("progress", t4 / s3.default.Buffer._downloadQueue.length);
                }
                var d = new XMLHttpRequest;
                return d.open("GET", s3.default.Buffer.baseUrl + t3, !0), d.responseType = "arraybuffer", d.progress = 0, s3.default.Buffer._downloadQueue.push(d), d.addEventListener("load", function() {
                    200 === d.status ? s3.default.context.decodeAudioData(d.response).then(function(t4) {
                        d.progress = 1, u(), e7(t4), s3.default.Buffer._removeFromDownloadQueue(d), 0 === s3.default.Buffer._downloadQueue.length && s3.default.Buffer.emit("load");
                    }).catch(function() {
                        s3.default.Buffer._removeFromDownloadQueue(d), l("Tone.Buffer: could not decode audio data: " + t3);
                    }) : l("Tone.Buffer: could not locate file: " + t3);
                }), d.addEventListener("error", l), d.addEventListener("progress", function(t4) {
                    t4.lengthComputable && (d.progress = t4.loaded / t4.total * 0.95, u());
                }), d.send(), d;
            }, s3.default.Buffer.cancelDownloads = function() {
                return s3.default.Buffer._downloadQueue.slice().forEach(function(t3) {
                    s3.default.Buffer._removeFromDownloadQueue(t3), t3.abort();
                }), s3.default.Buffer;
            }, s3.default.Buffer.supportsType = function(t3) {
                var e7 = t3.split(".");
                return e7 = e7[e7.length - 1], "" !== document.createElement("audio").canPlayType("audio/" + e7);
            }, s3.default.loaded = function() {
                var t3, e7;
                function i8() {
                    s3.default.Buffer.off("load", t3), s3.default.Buffer.off("error", e7);
                }
                return new Promise(function(i9, n) {
                    t3 = function() {
                        i9();
                    }, e7 = function() {
                        n();
                    }, s3.default.Buffer.on("load", t3), s3.default.Buffer.on("error", e7);
                }).then(i8).catch(function(t4) {
                    throw i8(), new Error(t4);
                });
            };
            e3.default = s3.default.Buffer;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(17), i5(26), i5(1), i5(2), i5(22), i5(4), i5(28);
            s3.default.LFO = function() {
                var t3 = s3.default.defaults(arguments, [
                    "frequency",
                    "min",
                    "max"
                ], s3.default.LFO);
                s3.default.AudioNode.call(this), this._oscillator = new s3.default.Oscillator({
                    frequency: t3.frequency,
                    type: t3.type
                }), this.frequency = this._oscillator.frequency, this.amplitude = this._oscillator.volume, this.amplitude.units = s3.default.Type.NormalRange, this.amplitude.value = t3.amplitude, this._stoppedSignal = new s3.default.Signal(0, s3.default.Type.AudioRange), this._zeros = new s3.default.Zero, this._stoppedValue = 0, this._a2g = new s3.default.AudioToGain, this._scaler = this.output = new s3.default.Scale(t3.min, t3.max), this._units = s3.default.Type.Default, this.units = t3.units, this._oscillator.chain(this._a2g, this._scaler), this._zeros.connect(this._a2g), this._stoppedSignal.connect(this._a2g), this._readOnly([
                    "amplitude",
                    "frequency"
                ]), this.phase = t3.phase;
            }, s3.default.extend(s3.default.LFO, s3.default.AudioNode), s3.default.LFO.defaults = {
                type: "sine",
                min: 0,
                max: 1,
                phase: 0,
                frequency: "4n",
                amplitude: 1,
                units: s3.default.Type.Default
            }, s3.default.LFO.prototype.start = function(t3) {
                return t3 = this.toSeconds(t3), this._stoppedSignal.setValueAtTime(0, t3), this._oscillator.start(t3), this;
            }, s3.default.LFO.prototype.stop = function(t3) {
                return t3 = this.toSeconds(t3), this._stoppedSignal.setValueAtTime(this._stoppedValue, t3), this._oscillator.stop(t3), this;
            }, s3.default.LFO.prototype.sync = function() {
                return this._oscillator.sync(), this._oscillator.syncFrequency(), this;
            }, s3.default.LFO.prototype.unsync = function() {
                return this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this;
            }, Object.defineProperty(s3.default.LFO.prototype, "min", {
                get: function() {
                    return this._toUnits(this._scaler.min);
                },
                set: function(t3) {
                    t3 = this._fromUnits(t3), this._scaler.min = t3;
                }
            }), Object.defineProperty(s3.default.LFO.prototype, "max", {
                get: function() {
                    return this._toUnits(this._scaler.max);
                },
                set: function(t3) {
                    t3 = this._fromUnits(t3), this._scaler.max = t3;
                }
            }), Object.defineProperty(s3.default.LFO.prototype, "type", {
                get: function() {
                    return this._oscillator.type;
                },
                set: function(t3) {
                    this._oscillator.type = t3, this._stoppedValue = this._oscillator._getInitialValue(), this._stoppedSignal.value = this._stoppedValue;
                }
            }), Object.defineProperty(s3.default.LFO.prototype, "phase", {
                get: function() {
                    return this._oscillator.phase;
                },
                set: function(t3) {
                    this._oscillator.phase = t3, this._stoppedValue = this._oscillator._getInitialValue(), this._stoppedSignal.value = this._stoppedValue;
                }
            }), Object.defineProperty(s3.default.LFO.prototype, "units", {
                get: function() {
                    return this._units;
                },
                set: function(t3) {
                    var e7 = this.min, i8 = this.max;
                    this._units = t3, this.min = e7, this.max = i8;
                }
            }), Object.defineProperty(s3.default.LFO.prototype, "state", {
                get: function() {
                    return this._oscillator.state;
                }
            }), s3.default.LFO.prototype.connect = function(t3) {
                return t3.constructor !== s3.default.Signal && t3.constructor !== s3.default.Param || (this.convert = t3.convert, this.units = t3.units), s3.default.SignalBase.prototype.connect.apply(this, arguments), this;
            }, s3.default.LFO.prototype._fromUnits = s3.default.Param.prototype._fromUnits, s3.default.LFO.prototype._toUnits = s3.default.Param.prototype._toUnits, s3.default.LFO.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable([
                    "amplitude",
                    "frequency"
                ]), this._oscillator.dispose(), this._oscillator = null, this._stoppedSignal.dispose(), this._stoppedSignal = null, this._zeros.dispose(), this._zeros = null, this._scaler.dispose(), this._scaler = null, this._a2g.dispose(), this._a2g = null, this.frequency = null, this.amplitude = null, this;
            }, e3.default = s3.default.LFO;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(29), i5(90), i5(2), i5(3);
            s3.default.Subtract = function(t3) {
                s3.default.Signal.call(this), this.createInsOuts(2, 0), this._sum = this.input[0] = this.output = new s3.default.Gain, this._neg = new s3.default.Negate, this._param = this.input[1] = new s3.default.Signal(t3), this._param.chain(this._neg, this._sum);
            }, s3.default.extend(s3.default.Subtract, s3.default.Signal), s3.default.Subtract.prototype.dispose = function() {
                return s3.default.Signal.prototype.dispose.call(this), this._neg.dispose(), this._neg = null, this._sum.disconnect(), this._sum = null, this;
            }, e3.default = s3.default.Subtract;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(4), i5(1), i5(24);
            s3.default.Param = function() {
                var t3 = s3.default.defaults(arguments, [
                    "param",
                    "units",
                    "convert"
                ], s3.default.Param);
                s3.default.AudioNode.call(this, t3), this._param = this.input = t3.param, this.units = t3.units, this.convert = t3.convert, this.overridden = !1, this._events = new s3.default.Timeline(1000), s3.default.isDefined(t3.value) && this._param && this.setValueAtTime(t3.value, 0);
            }, s3.default.extend(s3.default.Param, s3.default.AudioNode), s3.default.Param.defaults = {
                units: s3.default.Type.Default,
                convert: !0,
                param: void 0
            }, Object.defineProperty(s3.default.Param.prototype, "value", {
                get: function() {
                    var t3 = this.now();
                    return this._toUnits(this.getValueAtTime(t3));
                },
                set: function(t3) {
                    this._initialValue = this._fromUnits(t3), this.cancelScheduledValues(this.now()), this.setValueAtTime(t3, this.now());
                }
            }), Object.defineProperty(s3.default.Param.prototype, "minValue", {
                get: function() {
                    return this.units === s3.default.Type.Time || this.units === s3.default.Type.Frequency || this.units === s3.default.Type.NormalRange || this.units === s3.default.Type.Positive || this.units === s3.default.Type.BPM ? 0 : this.units === s3.default.Type.AudioRange ? -1 : this.units === s3.default.Type.Decibels ? -1 / 0 : this._param.minValue;
                }
            }), Object.defineProperty(s3.default.Param.prototype, "maxValue", {
                get: function() {
                    return this.units === s3.default.Type.NormalRange || this.units === s3.default.Type.AudioRange ? 1 : this._param.maxValue;
                }
            }), s3.default.Param.prototype._fromUnits = function(t3) {
                if (!this.convert && !s3.default.isUndef(this.convert) || this.overridden) return t3;
                switch(this.units){
                    case s3.default.Type.Time:
                        return this.toSeconds(t3);
                    case s3.default.Type.Frequency:
                        return this.toFrequency(t3);
                    case s3.default.Type.Decibels:
                        return s3.default.dbToGain(t3);
                    case s3.default.Type.NormalRange:
                        return Math.min(Math.max(t3, 0), 1);
                    case s3.default.Type.AudioRange:
                        return Math.min(Math.max(t3, -1), 1);
                    case s3.default.Type.Positive:
                        return Math.max(t3, 0);
                    default:
                        return t3;
                }
            }, s3.default.Param.prototype._toUnits = function(t3) {
                if (!this.convert && !s3.default.isUndef(this.convert)) return t3;
                switch(this.units){
                    case s3.default.Type.Decibels:
                        return s3.default.gainToDb(t3);
                    default:
                        return t3;
                }
            }, s3.default.Param.prototype._minOutput = 0.00001, s3.default.Param.AutomationType = {
                Linear: "linearRampToValueAtTime",
                Exponential: "exponentialRampToValueAtTime",
                Target: "setTargetAtTime",
                SetValue: "setValueAtTime",
                Cancel: "cancelScheduledValues"
            }, s3.default.Param.prototype.setValueAtTime = function(t3, e7) {
                return e7 = this.toSeconds(e7), t3 = this._fromUnits(t3), this._events.add({
                    type: s3.default.Param.AutomationType.SetValue,
                    value: t3,
                    time: e7
                }), this.log(s3.default.Param.AutomationType.SetValue, t3, e7), this._param.setValueAtTime(t3, e7), this;
            }, s3.default.Param.prototype.getValueAtTime = function(t3) {
                t3 = this.toSeconds(t3);
                var e7 = this._events.getAfter(t3), i8 = this._events.get(t3), n = s3.default.defaultArg(this._initialValue, this._param.defaultValue), o = n;
                if (null === i8) o = n;
                else if (i8.type === s3.default.Param.AutomationType.Target) {
                    var a, r = this._events.getBefore(i8.time);
                    a = null === r ? n : r.value, o = this._exponentialApproach(i8.time, a, i8.value, i8.constant, t3);
                } else o = null === e7 ? i8.value : e7.type === s3.default.Param.AutomationType.Linear ? this._linearInterpolate(i8.time, i8.value, e7.time, e7.value, t3) : e7.type === s3.default.Param.AutomationType.Exponential ? this._exponentialInterpolate(i8.time, i8.value, e7.time, e7.value, t3) : i8.value;
                return o;
            }, s3.default.Param.prototype.setRampPoint = function(t3) {
                t3 = this.toSeconds(t3);
                var e7 = this.getValueAtTime(t3);
                return this.cancelAndHoldAtTime(t3), 0 === e7 && (e7 = this._minOutput), this.setValueAtTime(this._toUnits(e7), t3), this;
            }, s3.default.Param.prototype.linearRampToValueAtTime = function(t3, e7) {
                return t3 = this._fromUnits(t3), e7 = this.toSeconds(e7), this._events.add({
                    type: s3.default.Param.AutomationType.Linear,
                    value: t3,
                    time: e7
                }), this.log(s3.default.Param.AutomationType.Linear, t3, e7), this._param.linearRampToValueAtTime(t3, e7), this;
            }, s3.default.Param.prototype.exponentialRampToValueAtTime = function(t3, e7) {
                return t3 = this._fromUnits(t3), t3 = Math.max(this._minOutput, t3), e7 = this.toSeconds(e7), this._events.add({
                    type: s3.default.Param.AutomationType.Exponential,
                    time: e7,
                    value: t3
                }), this.log(s3.default.Param.AutomationType.Exponential, t3, e7), this._param.exponentialRampToValueAtTime(t3, e7), this;
            }, s3.default.Param.prototype.exponentialRampTo = function(t3, e7, i8) {
                return i8 = this.toSeconds(i8), this.setRampPoint(i8), this.exponentialRampToValueAtTime(t3, i8 + this.toSeconds(e7)), this;
            }, s3.default.Param.prototype.linearRampTo = function(t3, e7, i8) {
                return i8 = this.toSeconds(i8), this.setRampPoint(i8), this.linearRampToValueAtTime(t3, i8 + this.toSeconds(e7)), this;
            }, s3.default.Param.prototype.targetRampTo = function(t3, e7, i8) {
                return i8 = this.toSeconds(i8), this.setRampPoint(i8), this.exponentialApproachValueAtTime(t3, i8, e7), this;
            }, s3.default.Param.prototype.exponentialApproachValueAtTime = function(t3, e7, i8) {
                var s4 = Math.log(this.toSeconds(i8) + 1) / Math.log(200);
                return e7 = this.toSeconds(e7), this.setTargetAtTime(t3, e7, s4), this.cancelAndHoldAtTime(e7 + 0.9 * i8), this.linearRampToValueAtTime(t3, e7 + i8), this;
            }, s3.default.Param.prototype.setTargetAtTime = function(t3, e7, i8) {
                if (t3 = this._fromUnits(t3), i8 <= 0) throw new Error("timeConstant must be greater than 0");
                return e7 = this.toSeconds(e7), this._events.add({
                    type: s3.default.Param.AutomationType.Target,
                    value: t3,
                    time: e7,
                    constant: i8
                }), this.log(s3.default.Param.AutomationType.Target, t3, e7, i8), this._param.setTargetAtTime(t3, e7, i8), this;
            }, s3.default.Param.prototype.setValueCurveAtTime = function(t3, e7, i8, n) {
                n = s3.default.defaultArg(n, 1), i8 = this.toSeconds(i8), e7 = this.toSeconds(e7), this.setValueAtTime(t3[0] * n, e7);
                for(var o = i8 / (t3.length - 1), a = 1; a < t3.length; a++)this.linearRampToValueAtTime(t3[a] * n, e7 + a * o);
                return this;
            }, s3.default.Param.prototype.cancelScheduledValues = function(t3) {
                return t3 = this.toSeconds(t3), this._events.cancel(t3), this._param.cancelScheduledValues(t3), this.log(s3.default.Param.AutomationType.Cancel, t3), this;
            }, s3.default.Param.prototype.cancelAndHoldAtTime = function(t3) {
                t3 = this.toSeconds(t3);
                var e7 = this.getValueAtTime(t3);
                this.log("cancelAndHoldAtTime", t3, "value=" + e7), this._param.cancelScheduledValues(t3);
                var i8 = this._events.get(t3), n = this._events.getAfter(t3);
                return i8 && i8.time === t3 ? n ? this._events.cancel(n.time) : this._events.cancel(t3 + this.sampleTime) : n && (this._events.cancel(n.time), n.type === s3.default.Param.AutomationType.Linear ? this.linearRampToValueAtTime(e7, t3) : n.type === s3.default.Param.AutomationType.Exponential && this.exponentialRampToValueAtTime(e7, t3)), this._events.add({
                    type: s3.default.Param.AutomationType.SetValue,
                    value: e7,
                    time: t3
                }), this._param.setValueAtTime(e7, t3), this;
            }, s3.default.Param.prototype.rampTo = function(t3, e7, i8) {
                return e7 = s3.default.defaultArg(e7, 0.1), this.units === s3.default.Type.Frequency || this.units === s3.default.Type.BPM || this.units === s3.default.Type.Decibels ? this.exponentialRampTo(t3, e7, i8) : this.linearRampTo(t3, e7, i8), this;
            }, s3.default.Param.prototype._exponentialApproach = function(t3, e7, i8, s4, n) {
                return i8 + (e7 - i8) * Math.exp(-(n - t3) / s4);
            }, s3.default.Param.prototype._linearInterpolate = function(t3, e7, i8, s4, n) {
                return e7 + (n - t3) / (i8 - t3) * (s4 - e7);
            }, s3.default.Param.prototype._exponentialInterpolate = function(t3, e7, i8, s4, n) {
                return e7 * Math.pow(s4 / e7, (n - t3) / (i8 - t3));
            }, s3.default.Param.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._param = null, this._events = null, this;
            }, e3.default = s3.default.Param;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(8), i5(19), i5(10), i5(23);
            s3.default.StereoEffect = function() {
                s3.default.AudioNode.call(this);
                var t3 = s3.default.defaults(arguments, [
                    "wet"
                ], s3.default.Effect);
                this.createInsOuts(1, 1), this._dryWet = new s3.default.CrossFade(t3.wet), this.wet = this._dryWet.fade, this._split = new s3.default.Split, this.effectSendL = this._split.left, this.effectSendR = this._split.right, this._merge = new s3.default.Merge, this.effectReturnL = this._merge.left, this.effectReturnR = this._merge.right, s3.default.connect(this.input, this._split), s3.default.connect(this.input, this._dryWet, 0, 0), this._merge.connect(this._dryWet, 0, 1), this._dryWet.connect(this.output), this._readOnly([
                    "wet"
                ]);
            }, s3.default.extend(s3.default.StereoEffect, s3.default.Effect), s3.default.StereoEffect.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this._split.dispose(), this._split = null, this._merge.dispose(), this._merge = null, this.effectSendL = null, this.effectSendR = null, this.effectReturnL = null, this.effectReturnR = null, this._writable([
                    "wet"
                ]), this.wet = null, this;
            }, e3.default = s3.default.StereoEffect;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(83), i5(4), i5(24), i5(35), i5(3), i5(81), i5(80), i5(56);
            s3.default.Transport = function() {
                s3.default.Emitter.call(this), s3.default.getContext((function() {
                    this.loop = !1, this._loopStart = 0, this._loopEnd = 0, this._ppq = n.defaults.PPQ, this._clock = new s3.default.Clock({
                        callback: this._processTick.bind(this),
                        frequency: 0
                    }), this._bindClockEvents(), this.bpm = this._clock.frequency, this.bpm._toUnits = this._toUnits.bind(this), this.bpm._fromUnits = this._fromUnits.bind(this), this.bpm.units = s3.default.Type.BPM, this.bpm.value = n.defaults.bpm, this._readOnly("bpm"), this._timeSignature = n.defaults.timeSignature, this._scheduledEvents = {
                    }, this._timeline = new s3.default.Timeline, this._repeatedEvents = new s3.default.IntervalTimeline, this._syncedSignals = [], this._swingTicks = n.defaults.PPQ / 2, this._swingAmount = 0, this.context.transport = this;
                }).bind(this));
            }, s3.default.extend(s3.default.Transport, s3.default.Emitter), s3.default.Transport.defaults = {
                bpm: 120,
                swing: 0,
                swingSubdivision: "8n",
                timeSignature: 4,
                loopStart: 0,
                loopEnd: "4m",
                PPQ: 192
            }, s3.default.Transport.prototype.isTransport = !0, s3.default.Transport.prototype._processTick = function(t3, e7) {
                if (this._swingAmount > 0 && e7 % this._ppq != 0 && e7 % (2 * this._swingTicks) != 0) {
                    var i8 = e7 % (2 * this._swingTicks) / (2 * this._swingTicks), n = Math.sin(i8 * Math.PI) * this._swingAmount;
                    t3 += s3.default.Ticks(2 * this._swingTicks / 3).toSeconds() * n;
                }
                this.loop && e7 >= this._loopEnd && (this.emit("loopEnd", t3), this._clock.setTicksAtTime(this._loopStart, t3), e7 = this._loopStart, this.emit("loopStart", t3, this._clock.getSecondsAtTime(t3)), this.emit("loop", t3)), this._timeline.forEachAtTime(e7, function(e8) {
                    e8.invoke(t3);
                });
            }, s3.default.Transport.prototype.schedule = function(t3, e7) {
                var i9 = new s3.default.TransportEvent(this, {
                    time: s3.default.TransportTime(e7),
                    callback: t3
                });
                return this._addEvent(i9, this._timeline);
            }, s3.default.Transport.prototype.scheduleRepeat = function(t3, e7, i9, n) {
                var o = new s3.default.TransportRepeatEvent(this, {
                    callback: t3,
                    interval: s3.default.Time(e7),
                    time: s3.default.TransportTime(i9),
                    duration: s3.default.Time(s3.default.defaultArg(n, 1 / 0))
                });
                return this._addEvent(o, this._repeatedEvents);
            }, s3.default.Transport.prototype.scheduleOnce = function(t3, e7) {
                var i9 = new s3.default.TransportEvent(this, {
                    time: s3.default.TransportTime(e7),
                    callback: t3,
                    once: !0
                });
                return this._addEvent(i9, this._timeline);
            }, s3.default.Transport.prototype.clear = function(t3) {
                if (this._scheduledEvents.hasOwnProperty(t3)) {
                    var e7 = this._scheduledEvents[t3.toString()];
                    e7.timeline.remove(e7.event), e7.event.dispose(), delete this._scheduledEvents[t3.toString()];
                }
                return this;
            }, s3.default.Transport.prototype._addEvent = function(t3, e8) {
                return this._scheduledEvents[t3.id.toString()] = {
                    event: t3,
                    timeline: e8
                }, e8.add(t3), t3.id;
            }, s3.default.Transport.prototype.cancel = function(t3) {
                return t3 = s3.default.defaultArg(t3, 0), t3 = this.toTicks(t3), this._timeline.forEachFrom(t3, (function(t4) {
                    this.clear(t4.id);
                }).bind(this)), this._repeatedEvents.forEachFrom(t3, (function(t4) {
                    this.clear(t4.id);
                }).bind(this)), this;
            }, s3.default.Transport.prototype._bindClockEvents = function() {
                this._clock.on("start", (function(t3, e8) {
                    e8 = s3.default.Ticks(e8).toSeconds(), this.emit("start", t3, e8);
                }).bind(this)), this._clock.on("stop", (function(t3) {
                    this.emit("stop", t3);
                }).bind(this)), this._clock.on("pause", (function(t3) {
                    this.emit("pause", t3);
                }).bind(this));
            }, Object.defineProperty(s3.default.Transport.prototype, "state", {
                get: function() {
                    return this._clock.getStateAtTime(this.now());
                }
            }), s3.default.Transport.prototype.start = function(t3, e8) {
                return s3.default.isDefined(e8) && (e8 = this.toTicks(e8)), this._clock.start(t3, e8), this;
            }, s3.default.Transport.prototype.stop = function(t3) {
                return this._clock.stop(t3), this;
            }, s3.default.Transport.prototype.pause = function(t3) {
                return this._clock.pause(t3), this;
            }, s3.default.Transport.prototype.toggle = function(t3) {
                return t3 = this.toSeconds(t3), this._clock.getStateAtTime(t3) !== s3.default.State.Started ? this.start(t3) : this.stop(t3), this;
            }, Object.defineProperty(s3.default.Transport.prototype, "timeSignature", {
                get: function() {
                    return this._timeSignature;
                },
                set: function(t3) {
                    s3.default.isArray(t3) && (t3 = t3[0] / t3[1] * 4), this._timeSignature = t3;
                }
            }), Object.defineProperty(s3.default.Transport.prototype, "loopStart", {
                get: function() {
                    return s3.default.Ticks(this._loopStart).toSeconds();
                },
                set: function(t3) {
                    this._loopStart = this.toTicks(t3);
                }
            }), Object.defineProperty(s3.default.Transport.prototype, "loopEnd", {
                get: function() {
                    return s3.default.Ticks(this._loopEnd).toSeconds();
                },
                set: function(t3) {
                    this._loopEnd = this.toTicks(t3);
                }
            }), s3.default.Transport.prototype.setLoopPoints = function(t3, e8) {
                return this.loopStart = t3, this.loopEnd = e8, this;
            }, Object.defineProperty(s3.default.Transport.prototype, "swing", {
                get: function() {
                    return this._swingAmount;
                },
                set: function(t3) {
                    this._swingAmount = t3;
                }
            }), Object.defineProperty(s3.default.Transport.prototype, "swingSubdivision", {
                get: function() {
                    return s3.default.Ticks(this._swingTicks).toNotation();
                },
                set: function(t3) {
                    this._swingTicks = this.toTicks(t3);
                }
            }), Object.defineProperty(s3.default.Transport.prototype, "position", {
                get: function() {
                    var t3 = this.now(), e8 = this._clock.getTicksAtTime(t3);
                    return s3.default.Ticks(e8).toBarsBeatsSixteenths();
                },
                set: function(t3) {
                    var e8 = this.toTicks(t3);
                    this.ticks = e8;
                }
            }), Object.defineProperty(s3.default.Transport.prototype, "seconds", {
                get: function() {
                    return this._clock.seconds;
                },
                set: function(t3) {
                    var e8 = this.now(), i9 = this.bpm.timeToTicks(t3, e8);
                    this.ticks = i9;
                }
            }), Object.defineProperty(s3.default.Transport.prototype, "progress", {
                get: function() {
                    if (this.loop) {
                        var t3 = this.now();
                        return (this._clock.getTicksAtTime(t3) - this._loopStart) / (this._loopEnd - this._loopStart);
                    }
                    return 0;
                }
            }), Object.defineProperty(s3.default.Transport.prototype, "ticks", {
                get: function() {
                    return this._clock.ticks;
                },
                set: function(t4) {
                    if (this._clock.ticks !== t4) {
                        var e8 = this.now();
                        this.state === s3.default.State.Started ? (this.emit("stop", e8), this._clock.setTicksAtTime(t4, e8), this.emit("start", e8, this.seconds)) : this._clock.setTicksAtTime(t4, e8);
                    }
                }
            }), s3.default.Transport.prototype.getTicksAtTime = function(t4) {
                return Math.round(this._clock.getTicksAtTime(t4));
            }, s3.default.Transport.prototype.getSecondsAtTime = function(t4) {
                return this._clock.getSecondsAtTime(t4);
            }, Object.defineProperty(s3.default.Transport.prototype, "PPQ", {
                get: function() {
                    return this._ppq;
                },
                set: function(t4) {
                    var e9 = this.bpm.value;
                    this._ppq = t4, this.bpm.value = e9;
                }
            }), s3.default.Transport.prototype._fromUnits = function(t4) {
                return 1 / (60 / t4 / this.PPQ);
            }, s3.default.Transport.prototype._toUnits = function(t4) {
                return t4 / this.PPQ * 60;
            }, s3.default.Transport.prototype.nextSubdivision = function(t4) {
                if (t4 = this.toTicks(t4), this.state !== s3.default.State.Started) return 0;
                var e9 = this.now(), i9 = t4 - this.getTicksAtTime(e9) % t4;
                return this._clock.nextTickTime(i9, e9);
            }, s3.default.Transport.prototype.syncSignal = function(t4, e9) {
                if (!e9) {
                    var i9 = this.now();
                    e9 = 0 !== t4.getValueAtTime(i9) ? t4.getValueAtTime(i9) / this.bpm.getValueAtTime(i9) : 0;
                }
                var n = new s3.default.Gain(e9);
                return this.bpm.chain(n, t4._param), this._syncedSignals.push({
                    ratio: n,
                    signal: t4,
                    initial: t4.value
                }), t4.value = 0, this;
            }, s3.default.Transport.prototype.unsyncSignal = function(t4) {
                for(var e9 = this._syncedSignals.length - 1; e9 >= 0; e9--){
                    var i10 = this._syncedSignals[e9];
                    i10.signal === t4 && (i10.ratio.dispose(), i10.signal.value = i10.initial, this._syncedSignals.splice(e9, 1));
                }
                return this;
            }, s3.default.Transport.prototype.dispose = function() {
                return s3.default.Emitter.prototype.dispose.call(this), this._clock.dispose(), this._clock = null, this._writable("bpm"), this.bpm = null, this._timeline.dispose(), this._timeline = null, this._repeatedEvents.dispose(), this._repeatedEvents = null, this;
            };
            var n = s3.default.Transport;
            s3.default.Transport = new n, s3.default.Context.on("init", function(t4) {
                t4.transport && t4.transport.isTransport ? s3.default.Transport = t4.transport : s3.default.Transport = new n;
            }), s3.default.Context.on("close", function(t4) {
                t4.transport && t4.transport.isTransport && t4.transport.dispose();
            }), e3.default = s3.default.Transport;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2), i5(6), i5(16), i5(64);
            s3.default.Oscillator = function() {
                var t4 = s3.default.defaults(arguments, [
                    "frequency",
                    "type"
                ], s3.default.Oscillator);
                s3.default.Source.call(this, t4), this._oscillator = null, this.frequency = new s3.default.Signal(t4.frequency, s3.default.Type.Frequency), this.detune = new s3.default.Signal(t4.detune, s3.default.Type.Cents), this._wave = null, this._partials = t4.partials, this._partialCount = t4.partialCount, this._phase = t4.phase, this._type = t4.type, t4.partialCount && t4.type !== s3.default.Oscillator.Type.Custom && (this._type = this.baseType + t4.partialCount.toString()), this.phase = this._phase, this._readOnly([
                    "frequency",
                    "detune"
                ]);
            }, s3.default.extend(s3.default.Oscillator, s3.default.Source), s3.default.Oscillator.defaults = {
                type: "sine",
                frequency: 440,
                detune: 0,
                phase: 0,
                partials: [],
                partialCount: 0
            }, s3.default.Oscillator.Type = {
                Sine: "sine",
                Triangle: "triangle",
                Sawtooth: "sawtooth",
                Square: "square",
                Custom: "custom"
            }, s3.default.Oscillator.prototype._start = function(t4) {
                this.log("start", t4);
                var e9 = new s3.default.OscillatorNode;
                this._oscillator = e9, this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), t4 = this.toSeconds(t4), this._oscillator.start(t4);
            }, s3.default.Oscillator.prototype._stop = function(t4) {
                return this.log("stop", t4), this._oscillator && (t4 = this.toSeconds(t4), this._oscillator.stop(t4)), this;
            }, s3.default.Oscillator.prototype.restart = function(t4) {
                return this._oscillator && this._oscillator.cancelStop(), this._state.cancel(this.toSeconds(t4)), this;
            }, s3.default.Oscillator.prototype.syncFrequency = function() {
                return s3.default.Transport.syncSignal(this.frequency), this;
            }, s3.default.Oscillator.prototype.unsyncFrequency = function() {
                return s3.default.Transport.unsyncSignal(this.frequency), this;
            }, Object.defineProperty(s3.default.Oscillator.prototype, "type", {
                get: function() {
                    return this._type;
                },
                set: function(t4) {
                    var e9 = [
                        s3.default.Oscillator.Type.Sine,
                        s3.default.Oscillator.Type.Square,
                        s3.default.Oscillator.Type.Triangle,
                        s3.default.Oscillator.Type.Sawtooth
                    ].includes(t4);
                    if (0 === this._phase && e9) this._wave = null, this._partialCount = 0, null !== this._oscillator && (this._oscillator.type = t4);
                    else {
                        var i11 = this._getRealImaginary(t4, this._phase), n = this.context.createPeriodicWave(i11[0], i11[1]);
                        this._wave = n, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave);
                    }
                    this._type = t4;
                }
            }), Object.defineProperty(s3.default.Oscillator.prototype, "baseType", {
                get: function() {
                    return this._type.replace(this.partialCount, "");
                },
                set: function(t4) {
                    this.partialCount && this._type !== s3.default.Oscillator.Type.Custom && t4 !== s3.default.Oscillator.Type.Custom ? this.type = t4 + this.partialCount : this.type = t4;
                }
            }), Object.defineProperty(s3.default.Oscillator.prototype, "partialCount", {
                get: function() {
                    return this._partialCount;
                },
                set: function(t4) {
                    var e9 = this._type, i12 = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
                    i12 && (e9 = i12[1]), this._type !== s3.default.Oscillator.Type.Custom && (this.type = 0 === t4 ? e9 : e9 + t4.toString());
                }
            }), s3.default.Oscillator.prototype.get = function() {
                var t4 = s3.default.prototype.get.apply(this, arguments);
                return t4.type !== s3.default.Oscillator.Type.Custom && delete t4.partials, t4;
            }, s3.default.Oscillator.prototype._getRealImaginary = function(t4, e9) {
                var i12 = 2048, n = new Float32Array(i12), o = new Float32Array(i12), a = 1;
                if (t4 === s3.default.Oscillator.Type.Custom) a = this._partials.length + 1, this._partialCount = this._partials.length, i12 = a;
                else {
                    var r = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t4);
                    r ? (a = parseInt(r[2]) + 1, this._partialCount = parseInt(r[2]), t4 = r[1], i12 = a = Math.max(a, 2)) : this._partialCount = 0, this._partials = [];
                }
                for(var l = 1; l < i12; ++l){
                    var u, d = 2 / (l * Math.PI);
                    switch(t4){
                        case s3.default.Oscillator.Type.Sine:
                            u = l <= a ? 1 : 0, this._partials[l - 1] = u;
                            break;
                        case s3.default.Oscillator.Type.Square:
                            u = 1 & l ? 2 * d : 0, this._partials[l - 1] = u;
                            break;
                        case s3.default.Oscillator.Type.Sawtooth:
                            u = d * (1 & l ? 1 : -1), this._partials[l - 1] = u;
                            break;
                        case s3.default.Oscillator.Type.Triangle:
                            u = 1 & l ? d * d * 2 * (l - 1 >> 1 & 1 ? -1 : 1) : 0, this._partials[l - 1] = u;
                            break;
                        case s3.default.Oscillator.Type.Custom:
                            u = this._partials[l - 1];
                            break;
                        default:
                            throw new TypeError("Tone.Oscillator: invalid type: " + t4);
                    }
                    0 !== u ? (n[l] = -u * Math.sin(e9 * l), o[l] = u * Math.cos(e9 * l)) : (n[l] = 0, o[l] = 0);
                }
                return [
                    n,
                    o
                ];
            }, s3.default.Oscillator.prototype._inverseFFT = function(t4, e9, i12) {
                for(var s4 = 0, n = t4.length, o = 0; o < n; o++)s4 += t4[o] * Math.cos(o * i12) + e9[o] * Math.sin(o * i12);
                return s4;
            }, s3.default.Oscillator.prototype._getInitialValue = function() {
                for(var t4 = this._getRealImaginary(this._type, 0), e9 = t4[0], i12 = t4[1], s4 = 0, n = 2 * Math.PI, o = 0; o < 8; o++)s4 = Math.max(this._inverseFFT(e9, i12, o / 8 * n), s4);
                return -this._inverseFFT(e9, i12, this._phase) / s4;
            }, Object.defineProperty(s3.default.Oscillator.prototype, "partials", {
                get: function() {
                    return this._partials;
                },
                set: function(t4) {
                    this._partials = t4, this.type = s3.default.Oscillator.Type.Custom;
                }
            }), Object.defineProperty(s3.default.Oscillator.prototype, "phase", {
                get: function() {
                    return this._phase * (180 / Math.PI);
                },
                set: function(t4) {
                    this._phase = t4 * Math.PI / 180, this.type = this._type;
                }
            }), s3.default.Oscillator.prototype.dispose = function() {
                return s3.default.Source.prototype.dispose.call(this), null !== this._oscillator && (this._oscillator.dispose(), this._oscillator = null), this._wave = null, this._writable([
                    "frequency",
                    "detune"
                ]), this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this._partials = null, this;
            }, e3.default = s3.default.Oscillator;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(14), i5(1);
            s3.default.Delay = function() {
                var t4 = s3.default.defaults(arguments, [
                    "delayTime",
                    "maxDelay"
                ], s3.default.Delay);
                s3.default.AudioNode.call(this, t4), this._maxDelay = Math.max(this.toSeconds(t4.maxDelay), this.toSeconds(t4.delayTime)), this._delayNode = this.input = this.output = this.context.createDelay(this._maxDelay), this.delayTime = new s3.default.Param({
                    param: this._delayNode.delayTime,
                    units: s3.default.Type.Time,
                    value: t4.delayTime
                }), this._readOnly("delayTime");
            }, s3.default.extend(s3.default.Delay, s3.default.AudioNode), s3.default.Delay.defaults = {
                maxDelay: 1,
                delayTime: 0
            }, Object.defineProperty(s3.default.Delay.prototype, "maxDelay", {
                get: function() {
                    return this._maxDelay;
                }
            }), s3.default.Delay.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._delayNode.disconnect(), this._delayNode = null, this._writable("delayTime"), this.delayTime = null, this;
            }, e3.default = s3.default.Delay;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(3), i5(1);
            s3.default.Split = function(t4) {
                t4 = s3.default.defaultArg(t4, 2), s3.default.AudioNode.call(this), this.createInsOuts(0, t4), this._splitter = this.input = this.context.createChannelSplitter(t4);
                for(var e9 = 0; e9 < t4; e9++)this.output[e9] = new s3.default.Gain, s3.default.connect(this._splitter, this.output[e9], e9, 0), this.output[e9].channelCount = 1, this.output[e9].channelCountMode = "explicit";
                this.left = this.output[0], this.right = this.output[1];
            }, s3.default.extend(s3.default.Split, s3.default.AudioNode), s3.default.Split.prototype.dispose = function() {
                return this.output.forEach(function(t4) {
                    t4.dispose();
                }), s3.default.AudioNode.prototype.dispose.call(this), this._splitter.disconnect(), this.left = null, this.right = null, this._splitter = null, this;
            }, e3.default = s3.default.Split;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0), n = (i5(35), i5(24), i5(44), [
                "baseLatency",
                "destination",
                "currentTime",
                "sampleRate",
                "listener",
                "state"
            ]), o = [
                "suspend",
                "close",
                "resume",
                "getOutputTimestamp",
                "createMediaElementSource",
                "createMediaStreamSource",
                "createMediaStreamDestination",
                "createBuffer",
                "decodeAudioData",
                "createBufferSource",
                "createConstantSource",
                "createGain",
                "createDelay",
                "createBiquadFilter",
                "createIIRFilter",
                "createWaveShaper",
                "createPanner",
                "createConvolver",
                "createDynamicsCompressor",
                "createAnalyser",
                "createScriptProcessor",
                "createStereoPanner",
                "createOscillator",
                "createPeriodicWave",
                "createChannelSplitter",
                "createChannelMerger",
                "audioWorklet"
            ];
            s3.default.Context = function() {
                s3.default.Emitter.call(this);
                var t4 = s3.default.defaults(arguments, [
                    "context"
                ], s3.default.Context);
                if (!t4.context && (t4.context = new s3.default.global.AudioContext, !t4.context)) throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");
                for(this._context = t4.context; this._context.rawContext;)this._context = this._context.rawContext;
                n.forEach((function(t5) {
                    this._defineProperty(this._context, t5);
                }).bind(this)), o.forEach((function(t5) {
                    this._defineMethod(this._context, t5);
                }).bind(this)), this._latencyHint = t4.latencyHint, this._constants = {
                }, this.lookAhead = t4.lookAhead, this._computedUpdateInterval = 0, this._ticker = new a(this.emit.bind(this, "tick"), t4.clockSource, t4.updateInterval), this._timeouts = new s3.default.Timeline, this._timeoutIds = 0, this.on("tick", this._timeoutLoop.bind(this)), this._context.onstatechange = (function(t5) {
                    this.emit("statechange", t5);
                }).bind(this);
            }, s3.default.extend(s3.default.Context, s3.default.Emitter), s3.default.Emitter.mixin(s3.default.Context), s3.default.Context.defaults = {
                clockSource: "worker",
                latencyHint: "interactive",
                lookAhead: 0.1,
                updateInterval: 0.03
            }, s3.default.Context.prototype.isContext = !0, s3.default.Context.prototype._defineProperty = function(t4, e9) {
                s3.default.isUndef(this[e9]) && Object.defineProperty(this, e9, {
                    get: function() {
                        return t4[e9];
                    },
                    set: function(i12) {
                        t4[e9] = i12;
                    }
                });
            }, s3.default.Context.prototype._defineMethod = function(t4, e9) {
                s3.default.isUndef(this[e9]) && Object.defineProperty(this, e9, {
                    get: function() {
                        return t4[e9].bind(t4);
                    }
                });
            }, s3.default.Context.prototype.now = function() {
                return this._context.currentTime + this.lookAhead;
            }, Object.defineProperty(s3.default.Context.prototype, "destination", {
                get: function() {
                    return this.master ? this.master : this._context.destination;
                }
            }), s3.default.Context.prototype.resume = function() {
                return "suspended" === this._context.state && this._context instanceof AudioContext ? this._context.resume() : Promise.resolve();
            }, s3.default.Context.prototype.close = function() {
                var t4 = Promise.resolve();
                return this !== s3.default.global.TONE_AUDIO_CONTEXT && (t4 = this.rawContext.close()), t4.then((function() {
                    s3.default.Context.emit("close", this);
                }).bind(this));
            }, s3.default.Context.prototype.getConstant = function(t4) {
                if (this._constants[t4]) return this._constants[t4];
                for(var e9 = this._context.createBuffer(1, 128, this._context.sampleRate), i12 = e9.getChannelData(0), s4 = 0; s4 < i12.length; s4++)i12[s4] = t4;
                var n1 = this._context.createBufferSource();
                return n1.channelCount = 1, n1.channelCountMode = "explicit", n1.buffer = e9, n1.loop = !0, n1.start(0), this._constants[t4] = n1, n1;
            }, s3.default.Context.prototype._timeoutLoop = function() {
                for(var t4 = this.now(); this._timeouts && this._timeouts.length && this._timeouts.peek().time <= t4;)this._timeouts.shift().callback();
            }, s3.default.Context.prototype.setTimeout = function(t4, e9) {
                this._timeoutIds++;
                var i12 = this.now();
                return this._timeouts.add({
                    callback: t4,
                    time: i12 + e9,
                    id: this._timeoutIds
                }), this._timeoutIds;
            }, s3.default.Context.prototype.clearTimeout = function(t4) {
                return this._timeouts.forEach(function(e9) {
                    e9.id === t4 && this.remove(e9);
                }), this;
            }, Object.defineProperty(s3.default.Context.prototype, "updateInterval", {
                get: function() {
                    return this._ticker.updateInterval;
                },
                set: function(t4) {
                    this._ticker.updateInterval = t4;
                }
            }), Object.defineProperty(s3.default.Context.prototype, "rawContext", {
                get: function() {
                    return this._context;
                }
            }), Object.defineProperty(s3.default.Context.prototype, "clockSource", {
                get: function() {
                    return this._ticker.type;
                },
                set: function(t4) {
                    this._ticker.type = t4;
                }
            }), Object.defineProperty(s3.default.Context.prototype, "latencyHint", {
                get: function() {
                    return this._latencyHint;
                },
                set: function(t4) {
                    var e9 = t4;
                    if (this._latencyHint = t4, s3.default.isString(t4)) switch(t4){
                        case "interactive":
                            e9 = 0.1, this._context.latencyHint = t4;
                            break;
                        case "playback":
                            e9 = 0.8, this._context.latencyHint = t4;
                            break;
                        case "balanced":
                            e9 = 0.25, this._context.latencyHint = t4;
                            break;
                        case "fastest":
                            this._context.latencyHint = "interactive", e9 = 0.01;
                    }
                    this.lookAhead = e9, this.updateInterval = e9 / 3;
                }
            }), s3.default.Context.prototype.dispose = function() {
                return this.close().then((function() {
                    for(var t4 in s3.default.Emitter.prototype.dispose.call(this), this._ticker.dispose(), this._ticker = null, this._timeouts.dispose(), this._timeouts = null, this._constants)this._constants[t4].disconnect();
                    this._constants = null;
                }).bind(this));
            };
            var a = function(t4, e9, i12) {
                this._type = e9, this._updateInterval = i12, this._callback = s3.default.defaultArg(t4, s3.default.noOp), this._createClock();
            };
            if (a.Type = {
                Worker: "worker",
                Timeout: "timeout",
                Offline: "offline"
            }, a.prototype._createWorker = function() {
                s3.default.global.URL = s3.default.global.URL || s3.default.global.webkitURL;
                var t4 = new Blob([
                    "var timeoutTime = " + (1000 * this._updateInterval).toFixed(1) + ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"
                ]), e9 = URL.createObjectURL(t4), i12 = new Worker(e9);
                i12.onmessage = this._callback.bind(this), this._worker = i12;
            }, a.prototype._createTimeout = function() {
                this._timeout = setTimeout((function() {
                    this._createTimeout(), this._callback();
                }).bind(this), 1000 * this._updateInterval);
            }, a.prototype._createClock = function() {
                if (this._type === a.Type.Worker) try {
                    this._createWorker();
                } catch (t4) {
                    this._type = a.Type.Timeout, this._createClock();
                }
                else this._type === a.Type.Timeout && this._createTimeout();
            }, Object.defineProperty(a.prototype, "updateInterval", {
                get: function() {
                    return this._updateInterval;
                },
                set: function(t4) {
                    this._updateInterval = Math.max(t4, 128 / 44100), this._type === a.Type.Worker && this._worker.postMessage(Math.max(1000 * t4, 1));
                }
            }), Object.defineProperty(a.prototype, "type", {
                get: function() {
                    return this._type;
                },
                set: function(t4) {
                    this._disposeClock(), this._type = t4, this._createClock();
                }
            }), a.prototype._disposeClock = function() {
                this._timeout && (clearTimeout(this._timeout), this._timeout = null), this._worker && (this._worker.terminate(), this._worker.onmessage = null, this._worker = null);
            }, a.prototype.dispose = function() {
                this._disposeClock(), this._callback = null;
            }, s3.default.supported && !s3.default.initialized) {
                if (s3.default.global.TONE_AUDIO_CONTEXT || (s3.default.global.TONE_AUDIO_CONTEXT = new s3.default.Context), s3.default.context = s3.default.global.TONE_AUDIO_CONTEXT, !s3.default.global.TONE_SILENCE_LOGGING) {
                    var r = "v";
                    "dev" === s3.default.version && (r = "");
                    var l = " * Tone.js " + r + s3.default.version + " * ";
                    console.log("%c" + l, "background: #000; color: #fff");
                }
            } else s3.default.supported || s3.default.global.TONE_SILENCE_LOGGING || console.warn("This browser does not support Tone.js");
            e3.default = s3.default.Context;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(4), i5(40);
            s3.default.Instrument = function(t4) {
                t4 = s3.default.defaultArg(t4, s3.default.Instrument.defaults), s3.default.AudioNode.call(this), this._volume = this.output = new s3.default.Volume(t4.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._scheduledEvents = [];
            }, s3.default.extend(s3.default.Instrument, s3.default.AudioNode), s3.default.Instrument.defaults = {
                volume: 0
            }, s3.default.Instrument.prototype.triggerAttack = s3.default.noOp, s3.default.Instrument.prototype.triggerRelease = s3.default.noOp, s3.default.Instrument.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0), this;
            }, s3.default.Instrument.prototype._syncMethod = function(t4, e9) {
                var i12 = this["_original_" + t4] = this[t4];
                this[t4] = (function() {
                    var t5 = Array.prototype.slice.call(arguments), n = t5[e9], o = s3.default.Transport.schedule((function(s4) {
                        t5[e9] = s4, i12.apply(this, t5);
                    }).bind(this), n);
                    this._scheduledEvents.push(o);
                }).bind(this);
            }, s3.default.Instrument.prototype.unsync = function() {
                return this._scheduledEvents.forEach(function(t4) {
                    s3.default.Transport.clear(t4);
                }), this._scheduledEvents = [], this._original_triggerAttack && (this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease), this;
            }, s3.default.Instrument.prototype.triggerAttackRelease = function(t4, e9, i12, s4) {
                return i12 = this.toSeconds(i12), e9 = this.toSeconds(e9), this.triggerAttack(t4, i12, s4), this.triggerRelease(i12 + e9), this;
            }, s3.default.Instrument.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._volume.dispose(), this._volume = null, this._writable([
                    "volume"
                ]), this.volume = null, this.unsync(), this._scheduledEvents = null, this;
            }, e3.default = s3.default.Instrument;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(7), i5(2);
            s3.default.AudioToGain = function() {
                s3.default.SignalBase.call(this), this._norm = this.input = this.output = new s3.default.WaveShaper(function(t4) {
                    return (t4 + 1) / 2;
                });
            }, s3.default.extend(s3.default.AudioToGain, s3.default.SignalBase), s3.default.AudioToGain.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this;
            }, e3.default = s3.default.AudioToGain;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2), i5(13), i5(89), i5(3), i5(1);
            s3.default.CrossFade = function(t4) {
                s3.default.AudioNode.call(this), this.createInsOuts(2, 1), this.a = this.input[0] = new s3.default.Gain, this.b = this.input[1] = new s3.default.Gain, this.fade = new s3.default.Signal(s3.default.defaultArg(t4, 0.5), s3.default.Type.NormalRange), this._equalPowerA = new s3.default.EqualPowerGain, this._equalPowerB = new s3.default.EqualPowerGain, this._one = this.context.getConstant(1), this._invert = new s3.default.Subtract, this.a.connect(this.output), this.b.connect(this.output), this.fade.chain(this._equalPowerB, this.b.gain), s3.default.connect(this._one, this._invert, 0, 0), this.fade.connect(this._invert, 0, 1), this._invert.chain(this._equalPowerA, this.a.gain), this._readOnly("fade");
            }, s3.default.extend(s3.default.CrossFade, s3.default.AudioNode), s3.default.CrossFade.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable("fade"), this._equalPowerA.dispose(), this._equalPowerA = null, this._equalPowerB.dispose(), this._equalPowerB = null, this.fade.dispose(), this.fade = null, this._invert.dispose(), this._invert = null, this._one = null, this.a.dispose(), this.a = null, this.b.dispose(), this.b = null, this;
            }, e3.default = s3.default.CrossFade;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            s3.default.Timeline = function() {
                var t4 = s3.default.defaults(arguments, [
                    "memory"
                ], s3.default.Timeline);
                s3.default.call(this), this._timeline = [], this.memory = t4.memory;
            }, s3.default.extend(s3.default.Timeline), s3.default.Timeline.defaults = {
                memory: 1 / 0
            }, Object.defineProperty(s3.default.Timeline.prototype, "length", {
                get: function() {
                    return this._timeline.length;
                }
            }), s3.default.Timeline.prototype.add = function(t4) {
                if (s3.default.isUndef(t4.time)) throw new Error("Tone.Timeline: events must have a time attribute");
                t4.time = t4.time.valueOf();
                var e9 = this._search(t4.time);
                if (this._timeline.splice(e9 + 1, 0, t4), this.length > this.memory) {
                    var i12 = this.length - this.memory;
                    this._timeline.splice(0, i12);
                }
                return this;
            }, s3.default.Timeline.prototype.remove = function(t4) {
                var e9 = this._timeline.indexOf(t4);
                return -1 !== e9 && this._timeline.splice(e9, 1), this;
            }, s3.default.Timeline.prototype.get = function(t4, e9) {
                e9 = s3.default.defaultArg(e9, "time");
                var i13 = this._search(t4, e9);
                return -1 !== i13 ? this._timeline[i13] : null;
            }, s3.default.Timeline.prototype.peek = function() {
                return this._timeline[0];
            }, s3.default.Timeline.prototype.shift = function() {
                return this._timeline.shift();
            }, s3.default.Timeline.prototype.getAfter = function(t4, e9) {
                e9 = s3.default.defaultArg(e9, "time");
                var i13 = this._search(t4, e9);
                return i13 + 1 < this._timeline.length ? this._timeline[i13 + 1] : null;
            }, s3.default.Timeline.prototype.getBefore = function(t4, e9) {
                e9 = s3.default.defaultArg(e9, "time");
                var i13 = this._timeline.length;
                if (i13 > 0 && this._timeline[i13 - 1][e9] < t4) return this._timeline[i13 - 1];
                var n = this._search(t4, e9);
                return n - 1 >= 0 ? this._timeline[n - 1] : null;
            }, s3.default.Timeline.prototype.cancel = function(t4) {
                if (this._timeline.length > 1) {
                    var e9 = this._search(t4);
                    if (e9 >= 0) {
                        if (this._timeline[e9].time === t4) {
                            for(var i13 = e9; i13 >= 0 && this._timeline[i13].time === t4; i13--)e9 = i13;
                            this._timeline = this._timeline.slice(0, e9);
                        } else this._timeline = this._timeline.slice(0, e9 + 1);
                    } else this._timeline = [];
                } else 1 === this._timeline.length && this._timeline[0].time >= t4 && (this._timeline = []);
                return this;
            }, s3.default.Timeline.prototype.cancelBefore = function(t4) {
                var e10 = this._search(t4);
                return e10 >= 0 && (this._timeline = this._timeline.slice(e10 + 1)), this;
            }, s3.default.Timeline.prototype.previousEvent = function(t4) {
                var e10 = this._timeline.indexOf(t4);
                return e10 > 0 ? this._timeline[e10 - 1] : null;
            }, s3.default.Timeline.prototype._search = function(t4, e10) {
                if (0 === this._timeline.length) return -1;
                e10 = s3.default.defaultArg(e10, "time");
                var i14 = 0, n = this._timeline.length, o = n;
                if (n > 0 && this._timeline[n - 1][e10] <= t4) return n - 1;
                for(; i14 < o;){
                    var a = Math.floor(i14 + (o - i14) / 2), r = this._timeline[a], l = this._timeline[a + 1];
                    if (r[e10] === t4) {
                        for(var u = a; u < this._timeline.length; u++)this._timeline[u][e10] === t4 && (a = u);
                        return a;
                    }
                    if (r[e10] < t4 && l[e10] > t4) return a;
                    r[e10] > t4 ? o = a : i14 = a + 1;
                }
                return -1;
            }, s3.default.Timeline.prototype._iterate = function(t4, e10, i14) {
                e10 = s3.default.defaultArg(e10, 0), i14 = s3.default.defaultArg(i14, this._timeline.length - 1), this._timeline.slice(e10, i14 + 1).forEach((function(e11) {
                    t4.call(this, e11);
                }).bind(this));
            }, s3.default.Timeline.prototype.forEach = function(t4) {
                return this._iterate(t4), this;
            }, s3.default.Timeline.prototype.forEachBefore = function(t4, e10) {
                var i14 = this._search(t4);
                return -1 !== i14 && this._iterate(e10, 0, i14), this;
            }, s3.default.Timeline.prototype.forEachAfter = function(t4, e10) {
                var i14 = this._search(t4);
                return this._iterate(e10, i14 + 1), this;
            }, s3.default.Timeline.prototype.forEachBetween = function(t4, e10, i14) {
                var s4 = this._search(t4), n = this._search(e10);
                return -1 !== s4 && -1 !== n ? (this._timeline[s4].time !== t4 && (s4 += 1), this._timeline[n].time === e10 && (n -= 1), this._iterate(i14, s4, n)) : -1 === s4 && this._iterate(i14, 0, n), this;
            }, s3.default.Timeline.prototype.forEachFrom = function(t4, e10) {
                for(var i14 = this._search(t4); i14 >= 0 && this._timeline[i14].time >= t4;)i14--;
                return this._iterate(e10, i14 + 1), this;
            }, s3.default.Timeline.prototype.forEachAtTime = function(t4, e10) {
                var i14 = this._search(t4);
                return -1 !== i14 && this._iterate(function(i15) {
                    i15.time === t4 && e10.call(this, i15);
                }, 0, i14), this;
            }, s3.default.Timeline.prototype.dispose = function() {
                return s3.default.prototype.dispose.call(this), this._timeline = null, this;
            }, e3.default = s3.default.Timeline;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(21), i5(2);
            s3.default.Monophonic = function(t4) {
                t4 = s3.default.defaultArg(t4, s3.default.Monophonic.defaults), s3.default.Instrument.call(this, t4), this.portamento = t4.portamento;
            }, s3.default.extend(s3.default.Monophonic, s3.default.Instrument), s3.default.Monophonic.defaults = {
                portamento: 0
            }, s3.default.Monophonic.prototype.triggerAttack = function(t4, e10, i14) {
                return this.log("triggerAttack", t4, e10, i14), e10 = this.toSeconds(e10), this._triggerEnvelopeAttack(e10, i14), this.setNote(t4, e10), this;
            }, s3.default.Monophonic.prototype.triggerRelease = function(t4) {
                return this.log("triggerRelease", t4), t4 = this.toSeconds(t4), this._triggerEnvelopeRelease(t4), this;
            }, s3.default.Monophonic.prototype._triggerEnvelopeAttack = function() {
            }, s3.default.Monophonic.prototype._triggerEnvelopeRelease = function() {
            }, s3.default.Monophonic.prototype.getLevelAtTime = function(t4) {
                return t4 = this.toSeconds(t4), this.envelope.getValueAtTime(t4);
            }, s3.default.Monophonic.prototype.setNote = function(t4, e10) {
                if (e10 = this.toSeconds(e10), this.portamento > 0 && this.getLevelAtTime(e10) > 0.05) {
                    var i14 = this.toSeconds(this.portamento);
                    this.frequency.exponentialRampTo(t4, i14, e10);
                } else this.frequency.setValueAtTime(t4, e10);
                return this;
            }, e3.default = s3.default.Monophonic;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(29), i5(5), i5(2);
            s3.default.Scale = function(t4, e10) {
                s3.default.SignalBase.call(this), this._outputMin = s3.default.defaultArg(t4, 0), this._outputMax = s3.default.defaultArg(e10, 1), this._scale = this.input = new s3.default.Multiply(1), this._add = this.output = new s3.default.Add(0), this._scale.connect(this._add), this._setRange();
            }, s3.default.extend(s3.default.Scale, s3.default.SignalBase), Object.defineProperty(s3.default.Scale.prototype, "min", {
                get: function() {
                    return this._outputMin;
                },
                set: function(t4) {
                    this._outputMin = t4, this._setRange();
                }
            }), Object.defineProperty(s3.default.Scale.prototype, "max", {
                get: function() {
                    return this._outputMax;
                },
                set: function(t4) {
                    this._outputMax = t4, this._setRange();
                }
            }), s3.default.Scale.prototype._setRange = function() {
                this._add.value = this._outputMin, this._scale.value = this._outputMax - this._outputMin;
            }, s3.default.Scale.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._add.dispose(), this._add = null, this._scale.dispose(), this._scale = null, this;
            }, e3.default = s3.default.Scale;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2), i5(3), i5(1);
            s3.default.Volume = function() {
                var t4 = s3.default.defaults(arguments, [
                    "volume"
                ], s3.default.Volume);
                s3.default.AudioNode.call(this, t4), this.output = this.input = new s3.default.Gain(t4.volume, s3.default.Type.Decibels), this._unmutedVolume = t4.volume, this.volume = this.output.gain, this._readOnly("volume"), this.mute = t4.mute;
            }, s3.default.extend(s3.default.Volume, s3.default.AudioNode), s3.default.Volume.defaults = {
                volume: 0,
                mute: !1
            }, Object.defineProperty(s3.default.Volume.prototype, "mute", {
                get: function() {
                    return this.volume.value === -1 / 0;
                },
                set: function(t4) {
                    !this.mute && t4 ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t4 && (this.volume.value = this._unmutedVolume);
                }
            }), s3.default.Volume.prototype.dispose = function() {
                return this.input.dispose(), s3.default.AudioNode.prototype.dispose.call(this), this._writable("volume"), this.volume.dispose(), this.volume = null, this;
            }, e3.default = s3.default.Volume;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(3), i5(30);
            s3.default.Zero = function() {
                s3.default.SignalBase.call(this), this._gain = this.input = this.output = new s3.default.Gain, s3.default.connect(this.context.getConstant(0), this._gain);
            }, s3.default.extend(s3.default.Zero, s3.default.SignalBase), s3.default.Zero.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._gain.dispose(), this._gain = null, this;
            }, e3.default = s3.default.Zero;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2), i5(3);
            s3.default.Add = function(t4) {
                s3.default.Signal.call(this), this.createInsOuts(2, 0), this._sum = this.input[0] = this.input[1] = this.output = new s3.default.Gain, this._param = this.input[1] = new s3.default.Signal(t4), this._param.connect(this._sum);
            }, s3.default.extend(s3.default.Add, s3.default.Signal), s3.default.Add.prototype.dispose = function() {
                return s3.default.Signal.prototype.dispose.call(this), this._sum.dispose(), this._sum = null, this;
            }, e3.default = s3.default.Add;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(1);
            s3.default.SignalBase = function() {
                s3.default.AudioNode.call(this);
            }, s3.default.extend(s3.default.SignalBase, s3.default.AudioNode), s3.default.SignalBase.prototype.connect = function(t4, e10, i15) {
                return s3.default.Signal && s3.default.Signal === t4.constructor || s3.default.Param && s3.default.Param === t4.constructor ? (t4._param.cancelScheduledValues(0), t4._param.setValueAtTime(0, 0), t4.overridden = !0) : t4 instanceof AudioParam && (t4.cancelScheduledValues(0), t4.setValueAtTime(0, 0)), s3.default.AudioNode.prototype.connect.call(this, t4, e10, i15), this;
            }, e3.default = s3.default.SignalBase;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(47), i5(3);
            s3.default.AmplitudeEnvelope = function() {
                s3.default.Envelope.apply(this, arguments), this.input = this.output = new s3.default.Gain, this._sig.connect(this.output.gain);
            }, s3.default.extend(s3.default.AmplitudeEnvelope, s3.default.Envelope), s3.default.AmplitudeEnvelope.prototype.dispose = function() {
                return s3.default.Envelope.prototype.dispose.call(this), this;
            }, e3.default = s3.default.AmplitudeEnvelope;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(11), i5(6), i5(3), i5(1);
            s3.default.BufferSource = function() {
                var t4 = s3.default.defaults(arguments, [
                    "buffer",
                    "onload"
                ], s3.default.BufferSource);
                s3.default.AudioNode.call(this, t4), this.onended = t4.onended, this._startTime = -1, this._sourceStarted = !1, this._sourceStopped = !1, this._stopTime = -1, this._gainNode = this.output = new s3.default.Gain(0), this._source = this.context.createBufferSource(), s3.default.connect(this._source, this._gainNode), this._source.onended = this._onended.bind(this), this._buffer = new s3.default.Buffer(t4.buffer, t4.onload), this.playbackRate = new s3.default.Param({
                    param: this._source.playbackRate,
                    units: s3.default.Type.Positive,
                    value: t4.playbackRate
                }), this.fadeIn = t4.fadeIn, this.fadeOut = t4.fadeOut, this.curve = t4.curve, this._onendedTimeout = -1, this.loop = t4.loop, this.loopStart = t4.loopStart, this.loopEnd = t4.loopEnd;
            }, s3.default.extend(s3.default.BufferSource, s3.default.AudioNode), s3.default.BufferSource.defaults = {
                onended: s3.default.noOp,
                onload: s3.default.noOp,
                loop: !1,
                loopStart: 0,
                loopEnd: 0,
                fadeIn: 0,
                fadeOut: 0,
                curve: "linear",
                playbackRate: 1
            }, Object.defineProperty(s3.default.BufferSource.prototype, "state", {
                get: function() {
                    return this.getStateAtTime(this.now());
                }
            }), s3.default.BufferSource.prototype.getStateAtTime = function(t4) {
                return t4 = this.toSeconds(t4), -1 !== this._startTime && this._startTime <= t4 && (-1 === this._stopTime || t4 < this._stopTime) && !this._sourceStopped ? s3.default.State.Started : s3.default.State.Stopped;
            }, s3.default.BufferSource.prototype.start = function(t4, e10, i15, n) {
                this.log("start", t4, e10, i15, n), this.assert(-1 === this._startTime, "can only be started once"), this.assert(this.buffer.loaded, "buffer is either not set or not loaded"), this.assert(!this._sourceStopped, "source is already stopped"), t4 = this.toSeconds(t4), e10 = this.loop ? s3.default.defaultArg(e10, this.loopStart) : s3.default.defaultArg(e10, 0), e10 = this.toSeconds(e10), e10 = Math.max(e10, 0), n = s3.default.defaultArg(n, 1);
                var o = this.toSeconds(this.fadeIn);
                if (o > 0 ? (this._gainNode.gain.setValueAtTime(0, t4), "linear" === this.curve ? this._gainNode.gain.linearRampToValueAtTime(n, t4 + o) : this._gainNode.gain.exponentialApproachValueAtTime(n, t4, o)) : this._gainNode.gain.setValueAtTime(n, t4), this._startTime = t4, s3.default.isDefined(i15)) {
                    var a = this.toSeconds(i15);
                    a = Math.max(a, 0), this.stop(t4 + a);
                }
                if (this.loop) {
                    var r = this.loopEnd || this.buffer.duration, l = this.loopStart;
                    e10 >= r && (e10 = (e10 - l) % (r - l) + l);
                }
                return this._source.buffer = this.buffer.get(), this._source.loopEnd = this.loopEnd || this.buffer.duration, e10 < this.buffer.duration && (this._sourceStarted = !0, this._source.start(t4, e10)), this;
            }, s3.default.BufferSource.prototype.stop = function(t4) {
                this.log("stop", t4), this.assert(this.buffer.loaded, "buffer is either not set or not loaded"), this.assert(!this._sourceStopped, "source is already stopped"), t4 = this.toSeconds(t4), -1 !== this._stopTime && this.cancelStop();
                var e10 = this.toSeconds(this.fadeOut);
                return this._stopTime = t4 + e10, e10 > 0 ? "linear" === this.curve ? this._gainNode.gain.linearRampTo(0, e10, t4) : this._gainNode.gain.targetRampTo(0, e10, t4) : (this._gainNode.gain.cancelAndHoldAtTime(t4), this._gainNode.gain.setValueAtTime(0, t4)), s3.default.context.clearTimeout(this._onendedTimeout), this._onendedTimeout = s3.default.context.setTimeout(this._onended.bind(this), this._stopTime - this.now()), this;
            }, s3.default.BufferSource.prototype.cancelStop = function() {
                if (-1 !== this._startTime && !this._sourceStopped) {
                    var t4 = this.toSeconds(this.fadeIn);
                    this._gainNode.gain.cancelScheduledValues(this._startTime + t4 + this.sampleTime), this.context.clearTimeout(this._onendedTimeout), this._stopTime = -1;
                }
                return this;
            }, s3.default.BufferSource.prototype._onended = function() {
                if (!this._sourceStopped) {
                    this._sourceStopped = !0;
                    var t5 = "exponential" === this.curve ? 2 * this.fadeOut : 0;
                    this._sourceStarted && -1 !== this._stopTime && this._source.stop(this._stopTime + t5), this.onended(this), setTimeout((function() {
                        this._source && (this._source.disconnect(), this._gainNode.disconnect());
                    }).bind(this), 1000 * t5 + 100);
                }
            }, Object.defineProperty(s3.default.BufferSource.prototype, "loopStart", {
                get: function() {
                    return this._source.loopStart;
                },
                set: function(t6) {
                    this._source.loopStart = this.toSeconds(t6);
                }
            }), Object.defineProperty(s3.default.BufferSource.prototype, "loopEnd", {
                get: function() {
                    return this._source.loopEnd;
                },
                set: function(t6) {
                    this._source.loopEnd = this.toSeconds(t6);
                }
            }), Object.defineProperty(s3.default.BufferSource.prototype, "buffer", {
                get: function() {
                    return this._buffer;
                },
                set: function(t6) {
                    this._buffer.set(t6);
                }
            }), Object.defineProperty(s3.default.BufferSource.prototype, "loop", {
                get: function() {
                    return this._source.loop;
                },
                set: function(t6) {
                    this._source.loop = t6, this.cancelStop();
                }
            }), s3.default.BufferSource.prototype.dispose = function() {
                return this._wasDisposed || (this._wasDisposed = !0, s3.default.AudioNode.prototype.dispose.call(this), this.onended = null, this._source.onended = null, this._source.disconnect(), this._source = null, this._gainNode.dispose(), this._gainNode = null, this._buffer.dispose(), this._buffer = null, this._startTime = -1, this.playbackRate = null, s3.default.context.clearTimeout(this._onendedTimeout)), this;
            }, e3.default = s3.default.BufferSource;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(8), i5(2), i5(5), i5(3);
            s3.default.FeedbackEffect = function() {
                var t6 = s3.default.defaults(arguments, [
                    "feedback"
                ], s3.default.FeedbackEffect);
                s3.default.Effect.call(this, t6), this._feedbackGain = new s3.default.Gain(t6.feedback, s3.default.Type.NormalRange), this.feedback = this._feedbackGain.gain, this.effectReturn.chain(this._feedbackGain, this.effectSend), this._readOnly([
                    "feedback"
                ]);
            }, s3.default.extend(s3.default.FeedbackEffect, s3.default.Effect), s3.default.FeedbackEffect.defaults = {
                feedback: 0.125
            }, s3.default.FeedbackEffect.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this._writable([
                    "feedback"
                ]), this._feedbackGain.dispose(), this._feedbackGain = null, this.feedback = null, this;
            }, e3.default = s3.default.FeedbackEffect;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(24), i5(4);
            s3.default.TimelineState = function(t6) {
                s3.default.Timeline.call(this), this._initial = t6;
            }, s3.default.extend(s3.default.TimelineState, s3.default.Timeline), s3.default.TimelineState.prototype.getValueAtTime = function(t6) {
                var e10 = this.get(t6);
                return null !== e10 ? e10.state : this._initial;
            }, s3.default.TimelineState.prototype.setStateAtTime = function(t6, e10) {
                return this.add({
                    state: t6,
                    time: e10
                }), this;
            }, s3.default.TimelineState.prototype.getLastState = function(t6, e10) {
                e10 = this.toSeconds(e10);
                for(var i15 = this._search(e10); i15 >= 0; i15--){
                    var s4 = this._timeline[i15];
                    if (s4.state === t6) return s4;
                }
            }, s3.default.TimelineState.prototype.getNextState = function(t6, e10) {
                e10 = this.toSeconds(e10);
                var i15 = this._search(e10);
                if (-1 !== i15) for(var s5 = i15; s5 < this._timeline.length; s5++){
                    var n = this._timeline[s5];
                    if (n.state === t6) return n;
                }
            }, e3.default = s3.default.TimelineState;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            s3.default.Emitter = function() {
                s3.default.call(this), this._events = {
                };
            }, s3.default.extend(s3.default.Emitter), s3.default.Emitter.prototype.on = function(t6, e10) {
                for(var i15 = t6.split(/\W+/), s5 = 0; s5 < i15.length; s5++){
                    var n = i15[s5];
                    this._events.hasOwnProperty(n) || (this._events[n] = []), this._events[n].push(e10);
                }
                return this;
            }, s3.default.Emitter.prototype.once = function(t6, e10) {
                var i15 = (function() {
                    e10.apply(this, arguments), this.off(t6, i15);
                }).bind(this);
                return this.on(t6, i15), this;
            }, s3.default.Emitter.prototype.off = function(t6, e10) {
                for(var i15 = t6.split(/\W+/), n = 0; n < i15.length; n++)if (t6 = i15[n], this._events.hasOwnProperty(t6)) {
                    if (s3.default.isUndef(e10)) this._events[t6] = [];
                    else for(var o = this._events[t6], a = 0; a < o.length; a++)o[a] === e10 && o.splice(a, 1);
                }
                return this;
            }, s3.default.Emitter.prototype.emit = function(t6) {
                if (this._events) {
                    var e10 = Array.apply(null, arguments).slice(1);
                    if (this._events.hasOwnProperty(t6)) for(var i15 = this._events[t6].slice(0), s5 = 0, n = i15.length; s5 < n; s5++)i15[s5].apply(this, e10);
                }
                return this;
            }, s3.default.Emitter.mixin = function(t6) {
                var e11 = [
                    "on",
                    "once",
                    "off",
                    "emit"
                ];
                t6._events = {
                };
                for(var i16 = 0; i16 < e11.length; i16++){
                    var n = e11[i16], o = s3.default.Emitter.prototype[n];
                    t6[n] = o;
                }
                return s3.default.Emitter;
            }, s3.default.Emitter.prototype.dispose = function() {
                return s3.default.prototype.dispose.call(this), this._events = null, this;
            }, e3.default = s3.default.Emitter;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(1), i5(44);
            s3.default.supported && (AnalyserNode.prototype.getFloatTimeDomainData || (AnalyserNode.prototype.getFloatTimeDomainData = function(t6) {
                var e11 = new Uint8Array(t6.length);
                this.getByteTimeDomainData(e11);
                for(var i16 = 0; i16 < e11.length; i16++)t6[i16] = (e11[i16] - 128) / 128;
            })), s3.default.Analyser = function() {
                var t6 = s3.default.defaults(arguments, [
                    "type",
                    "size"
                ], s3.default.Analyser);
                s3.default.AudioNode.call(this), this._analyser = this.input = this.output = this.context.createAnalyser(), this._type = t6.type, this._buffer = null, this.size = t6.size, this.type = t6.type;
            }, s3.default.extend(s3.default.Analyser, s3.default.AudioNode), s3.default.Analyser.defaults = {
                size: 1024,
                type: "fft",
                smoothing: 0.8
            }, s3.default.Analyser.Type = {
                Waveform: "waveform",
                FFT: "fft"
            }, s3.default.Analyser.prototype.getValue = function() {
                return this._type === s3.default.Analyser.Type.FFT ? this._analyser.getFloatFrequencyData(this._buffer) : this._type === s3.default.Analyser.Type.Waveform && this._analyser.getFloatTimeDomainData(this._buffer), this._buffer;
            }, Object.defineProperty(s3.default.Analyser.prototype, "size", {
                get: function() {
                    return this._analyser.frequencyBinCount;
                },
                set: function(t6) {
                    this._analyser.fftSize = 2 * t6, this._buffer = new Float32Array(t6);
                }
            }), Object.defineProperty(s3.default.Analyser.prototype, "type", {
                get: function() {
                    return this._type;
                },
                set: function(t6) {
                    if (t6 !== s3.default.Analyser.Type.Waveform && t6 !== s3.default.Analyser.Type.FFT) throw new TypeError("Tone.Analyser: invalid type: " + t6);
                    this._type = t6;
                }
            }), Object.defineProperty(s3.default.Analyser.prototype, "smoothing", {
                get: function() {
                    return this._analyser.smoothingTimeConstant;
                },
                set: function(t6) {
                    this._analyser.smoothingTimeConstant = t6;
                }
            }), s3.default.Analyser.prototype.dispose = function() {
                s3.default.AudioNode.prototype.dispose.call(this), this._analyser.disconnect(), this._analyser = null, this._buffer = null;
            };
            e3.default = s3.default.Analyser;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(6), i5(17), i5(50), i5(69), i5(49), i5(68), i5(67);
            s3.default.OmniOscillator = function() {
                var t6 = s3.default.defaults(arguments, [
                    "frequency",
                    "type"
                ], s3.default.OmniOscillator);
                s3.default.Source.call(this, t6), this.frequency = new s3.default.Signal(t6.frequency, s3.default.Type.Frequency), this.detune = new s3.default.Signal(t6.detune, s3.default.Type.Cents), this._sourceType = void 0, this._oscillator = null, this.type = t6.type, this._readOnly([
                    "frequency",
                    "detune"
                ]), this.set(t6);
            }, s3.default.extend(s3.default.OmniOscillator, s3.default.Source), s3.default.OmniOscillator.defaults = {
                frequency: 440,
                detune: 0,
                type: "sine",
                phase: 0
            };
            var n = "PulseOscillator", o = "PWMOscillator", a = "Oscillator", r = "FMOscillator", l = "AMOscillator", u = "FatOscillator";
            s3.default.OmniOscillator.prototype._start = function(t6) {
                this._oscillator.start(t6);
            }, s3.default.OmniOscillator.prototype._stop = function(t6) {
                this._oscillator.stop(t6);
            }, s3.default.OmniOscillator.prototype.restart = function(t6) {
                this._oscillator.restart(t6);
            }, Object.defineProperty(s3.default.OmniOscillator.prototype, "type", {
                get: function() {
                    var t6 = "";
                    return this._sourceType === r ? t6 = "fm" : this._sourceType === l ? t6 = "am" : this._sourceType === u && (t6 = "fat"), t6 + this._oscillator.type;
                },
                set: function(t6) {
                    "fm" === t6.substr(0, 2) ? (this._createNewOscillator(r), this._oscillator.type = t6.substr(2)) : "am" === t6.substr(0, 2) ? (this._createNewOscillator(l), this._oscillator.type = t6.substr(2)) : "fat" === t6.substr(0, 3) ? (this._createNewOscillator(u), this._oscillator.type = t6.substr(3)) : "pwm" === t6 ? this._createNewOscillator(o) : "pulse" === t6 ? this._createNewOscillator(n) : (this._createNewOscillator(a), this._oscillator.type = t6);
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "partials", {
                get: function() {
                    return this._oscillator.partials;
                },
                set: function(t6) {
                    this._oscillator.partials = t6;
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "partialCount", {
                get: function() {
                    return this._oscillator.partialCount;
                },
                set: function(t6) {
                    this._oscillator.partialCount = t6;
                }
            }), s3.default.OmniOscillator.prototype.set = function(t6, e11) {
                return "type" === t6 ? this.type = e11 : s3.default.isObject(t6) && t6.hasOwnProperty("type") && (this.type = t6.type), s3.default.prototype.set.apply(this, arguments), this;
            }, s3.default.OmniOscillator.prototype.get = function(t6) {
                var e11 = this._oscillator.get(t6);
                return e11.type = this.type, e11;
            }, s3.default.OmniOscillator.prototype._createNewOscillator = function(t6) {
                if (t6 !== this._sourceType) {
                    this._sourceType = t6;
                    var e11 = s3.default[t6], i16 = this.now();
                    if (null !== this._oscillator) {
                        var n1 = this._oscillator;
                        n1.stop(i16), this.context.setTimeout(function() {
                            n1.dispose(), n1 = null;
                        }, this.blockTime);
                    }
                    this._oscillator = new e11, this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this.state === s3.default.State.Started && this._oscillator.start(i16);
                }
            }, Object.defineProperty(s3.default.OmniOscillator.prototype, "phase", {
                get: function() {
                    return this._oscillator.phase;
                },
                set: function(t6) {
                    this._oscillator.phase = t6;
                }
            });
            var d = {
                PulseOscillator: "pulse",
                PWMOscillator: "pwm",
                Oscillator: "oscillator",
                FMOscillator: "fm",
                AMOscillator: "am",
                FatOscillator: "fat"
            };
            Object.defineProperty(s3.default.OmniOscillator.prototype, "sourceType", {
                get: function() {
                    return d[this._sourceType];
                },
                set: function(t6) {
                    var e12 = "sine";
                    "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e12 = this._oscillator.type), t6 === d.FMOscillator ? this.type = "fm" + e12 : t6 === d.AMOscillator ? this.type = "am" + e12 : t6 === d.FatOscillator ? this.type = "fat" + e12 : t6 === d.Oscillator ? this.type = e12 : t6 === d.PulseOscillator ? this.type = "pulse" : t6 === d.PWMOscillator && (this.type = "pwm");
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "baseType", {
                get: function() {
                    return this._oscillator.baseType;
                },
                set: function(t6) {
                    this.sourceType !== d.PulseOscillator && this.sourceType !== d.PWMOscillator && (this._oscillator.baseType = t6);
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "width", {
                get: function() {
                    return this._sourceType === n ? this._oscillator.width : void 0;
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "count", {
                get: function() {
                    return this._sourceType === u ? this._oscillator.count : void 0;
                },
                set: function(t6) {
                    this._sourceType === u && (this._oscillator.count = t6);
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "spread", {
                get: function() {
                    return this._sourceType === u ? this._oscillator.spread : void 0;
                },
                set: function(t6) {
                    this._sourceType === u && (this._oscillator.spread = t6);
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "modulationType", {
                get: function() {
                    return this._sourceType === r || this._sourceType === l ? this._oscillator.modulationType : void 0;
                },
                set: function(t6) {
                    this._sourceType !== r && this._sourceType !== l || (this._oscillator.modulationType = t6);
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "modulationIndex", {
                get: function() {
                    return this._sourceType === r ? this._oscillator.modulationIndex : void 0;
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "harmonicity", {
                get: function() {
                    return this._sourceType === r || this._sourceType === l ? this._oscillator.harmonicity : void 0;
                }
            }), Object.defineProperty(s3.default.OmniOscillator.prototype, "modulationFrequency", {
                get: function() {
                    return this._sourceType === o ? this._oscillator.modulationFrequency : void 0;
                }
            }), s3.default.OmniOscillator.prototype.dispose = function() {
                return s3.default.Source.prototype.dispose.call(this), this._writable([
                    "frequency",
                    "detune"
                ]), this.detune.dispose(), this.detune = null, this.frequency.dispose(), this.frequency = null, this._oscillator.dispose(), this._oscillator = null, this._sourceType = null, this;
            }, e3.default = s3.default.OmniOscillator;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(31), i5(37), i5(25);
            s3.default.Synth = function(t6) {
                t6 = s3.default.defaultArg(t6, s3.default.Synth.defaults), s3.default.Monophonic.call(this, t6), this.oscillator = new s3.default.OmniOscillator(t6.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new s3.default.AmplitudeEnvelope(t6.envelope), this.oscillator.chain(this.envelope, this.output), this._readOnly([
                    "oscillator",
                    "frequency",
                    "detune",
                    "envelope"
                ]);
            }, s3.default.extend(s3.default.Synth, s3.default.Monophonic), s3.default.Synth.defaults = {
                oscillator: {
                    type: "triangle"
                },
                envelope: {
                    attack: 0.005,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1
                }
            }, s3.default.Synth.prototype._triggerEnvelopeAttack = function(t6, e12) {
                return this.envelope.triggerAttack(t6, e12), this.oscillator.start(t6), 0 === this.envelope.sustain && this.oscillator.stop(t6 + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay)), this;
            }, s3.default.Synth.prototype._triggerEnvelopeRelease = function(t6) {
                return t6 = this.toSeconds(t6), this.envelope.triggerRelease(t6), this.oscillator.stop(t6 + this.toSeconds(this.envelope.release)), this;
            }, s3.default.Synth.prototype.dispose = function() {
                return s3.default.Monophonic.prototype.dispose.call(this), this._writable([
                    "oscillator",
                    "frequency",
                    "detune",
                    "envelope"
                ]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.frequency = null, this.detune = null, this;
            }, e3.default = s3.default.Synth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(6), i5(11), i5(32);
            s3.default.Noise = function() {
                var t6 = s3.default.defaults(arguments, [
                    "type"
                ], s3.default.Noise);
                s3.default.Source.call(this, t6), this._source = null, this._type = t6.type, this._playbackRate = t6.playbackRate;
            }, s3.default.extend(s3.default.Noise, s3.default.Source), s3.default.Noise.defaults = {
                type: "white",
                playbackRate: 1
            }, Object.defineProperty(s3.default.Noise.prototype, "type", {
                get: function() {
                    return this._type;
                },
                set: function(t6) {
                    if (this._type !== t6) {
                        if (!(t6 in n2)) throw new TypeError("Tone.Noise: invalid type: " + t6);
                        if (this._type = t6, this.state === s3.default.State.Started) {
                            var e12 = this.now();
                            this._stop(e12), this._start(e12);
                        }
                    }
                }
            }), Object.defineProperty(s3.default.Noise.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate;
                },
                set: function(t6) {
                    this._playbackRate = t6, this._source && (this._source.playbackRate.value = t6);
                }
            }), s3.default.Noise.prototype._start = function(t6) {
                var e13 = n2[this._type];
                this._source = new s3.default.BufferSource(e13).connect(this.output), this._source.loop = !0, this._source.playbackRate.value = this._playbackRate, this._source.start(this.toSeconds(t6), Math.random() * (e13.duration - 0.001));
            }, s3.default.Noise.prototype._stop = function(t6) {
                this._source && (this._source.stop(this.toSeconds(t6)), this._source = null);
            }, s3.default.Noise.prototype.restart = function(t6) {
                return this._stop(t6), this._start(t6), this;
            }, s3.default.Noise.prototype.dispose = function() {
                return s3.default.Source.prototype.dispose.call(this), null !== this._source && (this._source.disconnect(), this._source = null), this._buffer = null, this;
            };
            var n2 = {
            }, o = {
            };
            Object.defineProperty(n2, "pink", {
                get: function() {
                    if (!o.pink) {
                        for(var t6 = [], e13 = 0; e13 < 2; e13++){
                            var i17, n3, a, r, l, u, d, f = new Float32Array(220500);
                            t6[e13] = f, i17 = n3 = a = r = l = u = d = 0;
                            for(var h = 0; h < 220500; h++){
                                var c = 2 * Math.random() - 1;
                                i17 = 0.99886 * i17 + 0.0555179 * c, n3 = 0.99332 * n3 + 0.0750759 * c, a = 0.969 * a + 0.153852 * c, r = 0.8665 * r + 0.3104856 * c, l = 0.55 * l + 0.5329522 * c, u = -0.7616 * u - 0.016898 * c, f[h] = i17 + n3 + a + r + l + u + d + 0.5362 * c, f[h] *= 0.11, d = 0.115926 * c;
                            }
                        }
                        o.pink = (new s3.default.Buffer).fromArray(t6);
                    }
                    return o.pink;
                }
            }), Object.defineProperty(n2, "brown", {
                get: function() {
                    if (!o.brown) {
                        for(var t7 = [], e14 = 0; e14 < 2; e14++){
                            var i18 = new Float32Array(220500);
                            t7[e14] = i18;
                            for(var n4 = 0, a = 0; a < 220500; a++){
                                var r = 2 * Math.random() - 1;
                                i18[a] = (n4 + 0.02 * r) / 1.02, n4 = i18[a], i18[a] *= 3.5;
                            }
                        }
                        o.brown = (new s3.default.Buffer).fromArray(t7);
                    }
                    return o.brown;
                }
            }), Object.defineProperty(n2, "white", {
                get: function() {
                    if (!o.white) {
                        for(var t8 = [], e15 = 0; e15 < 2; e15++){
                            var i19 = new Float32Array(220500);
                            t8[e15] = i19;
                            for(var n5 = 0; n5 < 220500; n5++)i19[n5] = 2 * Math.random() - 1;
                        }
                        o.white = (new s3.default.Buffer).fromArray(t8);
                    }
                    return o.white;
                }
            }), e3.default = s3.default.Noise;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(27), i5(20), i5(1);
            s3.default.Master = function() {
                s3.default.AudioNode.call(this), s3.default.getContext((function() {
                    this.createInsOuts(1, 0), this._volume = this.output = new s3.default.Volume, this.volume = this._volume.volume, this._readOnly("volume"), s3.default.connectSeries(this.input, this.output, this.context.destination), this.context.master = this;
                }).bind(this));
            }, s3.default.extend(s3.default.Master, s3.default.AudioNode), s3.default.Master.defaults = {
                volume: 0,
                mute: !1
            }, s3.default.Master.prototype.isMaster = !0, Object.defineProperty(s3.default.Master.prototype, "mute", {
                get: function() {
                    return this._volume.mute;
                },
                set: function(t9) {
                    this._volume.mute = t9;
                }
            }), s3.default.Master.prototype.chain = function() {
                this.input.disconnect();
                var t9 = Array.from(arguments);
                t9.unshift(this.input), t9.push(this.output), s3.default.connectSeries.apply(void 0, t9);
            }, s3.default.Master.prototype.dispose = function() {
                s3.default.AudioNode.prototype.dispose.call(this), this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null;
            }, s3.default.AudioNode.prototype.toMaster = function() {
                return this.connect(this.context.master), this;
            };
            var n2 = s3.default.Master;
            s3.default.Master = new n2, s3.default.Context.on("init", function(t9) {
                t9.master && t9.master.isMaster ? s3.default.Master = t9.master : s3.default.Master = new n2;
            }), s3.default.Context.on("close", function(t9) {
                t9.master && t9.master.isMaster && t9.master.dispose();
            }), e3.default = s3.default.Master;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(86), i5(47);
            s3.default.FrequencyEnvelope = function() {
                var t9 = s3.default.defaults(arguments, [
                    "attack",
                    "decay",
                    "sustain",
                    "release"
                ], s3.default.Envelope);
                t9 = s3.default.defaultArg(t9, s3.default.FrequencyEnvelope.defaults), s3.default.ScaledEnvelope.call(this, t9), this._octaves = t9.octaves, this.baseFrequency = t9.baseFrequency, this.octaves = t9.octaves, this.exponent = t9.exponent;
            }, s3.default.extend(s3.default.FrequencyEnvelope, s3.default.Envelope), s3.default.FrequencyEnvelope.defaults = {
                baseFrequency: 200,
                octaves: 4,
                exponent: 1
            }, Object.defineProperty(s3.default.FrequencyEnvelope.prototype, "baseFrequency", {
                get: function() {
                    return this._scale.min;
                },
                set: function(t9) {
                    this._scale.min = this.toFrequency(t9), this.octaves = this._octaves;
                }
            }), Object.defineProperty(s3.default.FrequencyEnvelope.prototype, "octaves", {
                get: function() {
                    return this._octaves;
                },
                set: function(t9) {
                    this._octaves = t9, this._scale.max = this.baseFrequency * Math.pow(2, t9);
                }
            }), Object.defineProperty(s3.default.FrequencyEnvelope.prototype, "exponent", {
                get: function() {
                    return this._exp.value;
                },
                set: function(t9) {
                    this._exp.value = t9;
                }
            }), s3.default.FrequencyEnvelope.prototype.dispose = function() {
                return s3.default.ScaledEnvelope.prototype.dispose.call(this), this;
            }, e3.default = s3.default.FrequencyEnvelope;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(26), i5(61);
            s3.default.ScaleExp = function(t9, e16, i20) {
                s3.default.SignalBase.call(this), this._scale = this.output = new s3.default.Scale(t9, e16), this._exp = this.input = new s3.default.Pow(s3.default.defaultArg(i20, 2)), this._exp.connect(this._scale);
            }, s3.default.extend(s3.default.ScaleExp, s3.default.SignalBase), Object.defineProperty(s3.default.ScaleExp.prototype, "exponent", {
                get: function() {
                    return this._exp.value;
                },
                set: function(t9) {
                    this._exp.value = t9;
                }
            }), Object.defineProperty(s3.default.ScaleExp.prototype, "min", {
                get: function() {
                    return this._scale.min;
                },
                set: function(t9) {
                    this._scale.min = t9;
                }
            }), Object.defineProperty(s3.default.ScaleExp.prototype, "max", {
                get: function() {
                    return this._scale.max;
                },
                set: function(t9) {
                    this._scale.max = t9;
                }
            }), s3.default.ScaleExp.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this;
            }, e3.default = s3.default.ScaleExp;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(14), i5(1);
            s3.default.Compressor = function() {
                var t9 = s3.default.defaults(arguments, [
                    "threshold",
                    "ratio"
                ], s3.default.Compressor);
                s3.default.AudioNode.call(this), this._compressor = this.input = this.output = this.context.createDynamicsCompressor(), this.threshold = new s3.default.Param({
                    param: this._compressor.threshold,
                    units: s3.default.Type.Decibels,
                    convert: !1
                }), this.attack = new s3.default.Param(this._compressor.attack, s3.default.Type.Time), this.release = new s3.default.Param(this._compressor.release, s3.default.Type.Time), this.knee = new s3.default.Param({
                    param: this._compressor.knee,
                    units: s3.default.Type.Decibels,
                    convert: !1
                }), this.ratio = new s3.default.Param({
                    param: this._compressor.ratio,
                    convert: !1
                }), this._readOnly([
                    "knee",
                    "release",
                    "attack",
                    "ratio",
                    "threshold"
                ]), this.set(t9);
            }, s3.default.extend(s3.default.Compressor, s3.default.AudioNode), s3.default.Compressor.defaults = {
                ratio: 12,
                threshold: -24,
                release: 0.25,
                attack: 0.003,
                knee: 30
            }, s3.default.Compressor.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable([
                    "knee",
                    "release",
                    "attack",
                    "ratio",
                    "threshold"
                ]), this._compressor.disconnect(), this._compressor = null, this.attack.dispose(), this.attack = null, this.release.dispose(), this.release = null, this.threshold.dispose(), this.threshold = null, this.ratio.dispose(), this.ratio = null, this.knee.dispose(), this.knee = null, this;
            }, e3.default = s3.default.Compressor;
        },
        function(t1, e3, i5) {
            "use strict";
            var s3 = i5(0);
            i5(92);
            if (s3.default.supported) {
                !s3.default.global.hasOwnProperty("AudioContext") && s3.default.global.hasOwnProperty("webkitAudioContext") && (s3.default.global.AudioContext = s3.default.global.webkitAudioContext), AudioContext.prototype.close || (AudioContext.prototype.close = function() {
                    return s3.default.isFunction(this.suspend) && this.suspend(), Promise.resolve();
                }), AudioContext.prototype.resume || (AudioContext.prototype.resume = function() {
                    var t9 = this.createBuffer(1, 1, this.sampleRate), e16 = this.createBufferSource();
                    return e16.buffer = t9, e16.connect(this.destination), e16.start(0), Promise.resolve();
                }), !AudioContext.prototype.createGain && AudioContext.prototype.createGainNode && (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode), !AudioContext.prototype.createDelay && AudioContext.prototype.createDelayNode && (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode);
                var n2 = !1, o = new OfflineAudioContext(1, 1, 44100), a = new Uint32Array([
                    1179011410,
                    48,
                    1163280727,
                    544501094,
                    16,
                    131073,
                    44100,
                    176400,
                    1048580,
                    1635017060,
                    8,
                    0,
                    0,
                    0,
                    0
                ]).buffer;
                try {
                    var r = o.decodeAudioData(a);
                    r && s3.default.isFunction(r.then) && (n2 = !0);
                } catch (t9) {
                    n2 = !1;
                }
                n2 || (AudioContext.prototype._native_decodeAudioData = AudioContext.prototype.decodeAudioData, AudioContext.prototype.decodeAudioData = function(t9) {
                    return new Promise((function(e16, i20) {
                        this._native_decodeAudioData(t9, e16, i20);
                    }).bind(this));
                });
            }
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(63);
            s3.default.TransportTime = function(t9, e16) {
                if (!(this instanceof s3.default.TransportTime)) return new s3.default.TransportTime(t9, e16);
                s3.default.Time.call(this, t9, e16);
            }, s3.default.extend(s3.default.TransportTime, s3.default.Time), s3.default.TransportTime.prototype._now = function() {
                return s3.default.Transport.seconds;
            }, e3.default = s3.default.TransportTime;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(62);
            s3.default.Frequency = function(t9, e16) {
                if (!(this instanceof s3.default.Frequency)) return new s3.default.Frequency(t9, e16);
                s3.default.TimeBase.call(this, t9, e16);
            }, s3.default.extend(s3.default.Frequency, s3.default.TimeBase), s3.default.Frequency.prototype._expressions = Object.assign({
            }, s3.default.TimeBase.prototype._expressions, {
                midi: {
                    regexp: /^(\d+(?:\.\d+)?midi)/,
                    method: function(t9) {
                        return "midi" === this._defaultUnits ? t9 : s3.default.Frequency.mtof(t9);
                    }
                },
                note: {
                    regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                    method: function(t9, e16) {
                        var i20 = n6[t9.toLowerCase()] + 12 * (parseInt(e16) + 1);
                        return "midi" === this._defaultUnits ? i20 : s3.default.Frequency.mtof(i20);
                    }
                },
                tr: {
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                    method: function(t9, e16, i20) {
                        var s6 = 1;
                        return t9 && "0" !== t9 && (s6 *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t9))), e16 && "0" !== e16 && (s6 *= this._beatsToUnits(parseFloat(e16))), i20 && "0" !== i20 && (s6 *= this._beatsToUnits(parseFloat(i20) / 4)), s6;
                    }
                }
            }), s3.default.Frequency.prototype.transpose = function(t9) {
                return new this.constructor(this.valueOf() * s3.default.intervalToFrequencyRatio(t9));
            }, s3.default.Frequency.prototype.harmonize = function(t9) {
                return t9.map((function(t10) {
                    return this.transpose(t10);
                }).bind(this));
            }, s3.default.Frequency.prototype.toMidi = function() {
                return s3.default.Frequency.ftom(this.valueOf());
            }, s3.default.Frequency.prototype.toNote = function() {
                var t9 = this.toFrequency(), e16 = Math.log2(t9 / s3.default.Frequency.A4), i20 = Math.round(12 * e16) + 57, n6 = Math.floor(i20 / 12);
                return n6 < 0 && (i20 += -12 * n6), o[i20 % 12] + n6.toString();
            }, s3.default.Frequency.prototype.toSeconds = function() {
                return 1 / s3.default.TimeBase.prototype.toSeconds.call(this);
            }, s3.default.Frequency.prototype.toFrequency = function() {
                return s3.default.TimeBase.prototype.toFrequency.call(this);
            }, s3.default.Frequency.prototype.toTicks = function() {
                var t9 = this._beatsToUnits(1), e16 = this.valueOf() / t9;
                return Math.floor(e16 * s3.default.Transport.PPQ);
            }, s3.default.Frequency.prototype._noArg = function() {
                return 0;
            }, s3.default.Frequency.prototype._frequencyToUnits = function(t9) {
                return t9;
            }, s3.default.Frequency.prototype._ticksToUnits = function(t9) {
                return 1 / (60 * t9 / (s3.default.Transport.bpm.value * s3.default.Transport.PPQ));
            }, s3.default.Frequency.prototype._beatsToUnits = function(t9) {
                return 1 / s3.default.TimeBase.prototype._beatsToUnits.call(this, t9);
            }, s3.default.Frequency.prototype._secondsToUnits = function(t9) {
                return 1 / t9;
            }, s3.default.Frequency.prototype._defaultUnits = "hz";
            var n6 = {
                cbb: -2,
                cb: -1,
                c: 0,
                "c#": 1,
                cx: 2,
                dbb: 0,
                db: 1,
                d: 2,
                "d#": 3,
                dx: 4,
                ebb: 2,
                eb: 3,
                e: 4,
                "e#": 5,
                ex: 6,
                fbb: 3,
                fb: 4,
                f: 5,
                "f#": 6,
                fx: 7,
                gbb: 5,
                gb: 6,
                g: 7,
                "g#": 8,
                gx: 9,
                abb: 7,
                ab: 8,
                a: 9,
                "a#": 10,
                ax: 11,
                bbb: 9,
                bb: 10,
                b: 11,
                "b#": 12,
                bx: 13
            }, o = [
                "C",
                "C#",
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B"
            ];
            s3.default.Frequency.A4 = 440, s3.default.Frequency.mtof = function(t9) {
                return s3.default.Frequency.A4 * Math.pow(2, (t9 - 69) / 12);
            }, s3.default.Frequency.ftom = function(t9) {
                return 69 + Math.round(12 * Math.log2(t9 / s3.default.Frequency.A4));
            }, e3.default = s3.default.Frequency;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2), i5(61), i5(4), i5(1);
            s3.default.Envelope = function() {
                var t9 = s3.default.defaults(arguments, [
                    "attack",
                    "decay",
                    "sustain",
                    "release"
                ], s3.default.Envelope);
                s3.default.AudioNode.call(this), this.attack = t9.attack, this.decay = t9.decay, this.sustain = t9.sustain, this.release = t9.release, this._attackCurve = "linear", this._releaseCurve = "exponential", this._sig = this.output = new s3.default.Signal(0), this.attackCurve = t9.attackCurve, this.releaseCurve = t9.releaseCurve, this.decayCurve = t9.decayCurve;
            }, s3.default.extend(s3.default.Envelope, s3.default.AudioNode), s3.default.Envelope.defaults = {
                attack: 0.01,
                decay: 0.1,
                sustain: 0.5,
                release: 1,
                attackCurve: "linear",
                decayCurve: "exponential",
                releaseCurve: "exponential"
            }, Object.defineProperty(s3.default.Envelope.prototype, "value", {
                get: function() {
                    return this.getValueAtTime(this.now());
                }
            }), s3.default.Envelope.prototype._getCurve = function(t9, e16) {
                if (s3.default.isString(t9)) return t9;
                if (s3.default.isArray(t9)) for(var i20 in s3.default.Envelope.Type)if (s3.default.Envelope.Type[i20][e16] === t9) return i20;
            }, s3.default.Envelope.prototype._setCurve = function(t9, e16, i20) {
                if (s3.default.Envelope.Type.hasOwnProperty(i20)) {
                    var n6 = s3.default.Envelope.Type[i20];
                    s3.default.isObject(n6) ? this[t9] = n6[e16] : this[t9] = n6;
                } else {
                    if (!s3.default.isArray(i20)) throw new Error("Tone.Envelope: invalid curve: " + i20);
                    this[t9] = i20;
                }
            }, Object.defineProperty(s3.default.Envelope.prototype, "attackCurve", {
                get: function() {
                    return this._getCurve(this._attackCurve, "In");
                },
                set: function(t9) {
                    this._setCurve("_attackCurve", "In", t9);
                }
            }), Object.defineProperty(s3.default.Envelope.prototype, "releaseCurve", {
                get: function() {
                    return this._getCurve(this._releaseCurve, "Out");
                },
                set: function(t9) {
                    this._setCurve("_releaseCurve", "Out", t9);
                }
            }), Object.defineProperty(s3.default.Envelope.prototype, "decayCurve", {
                get: function() {
                    return this._decayCurve;
                },
                set: function(t9) {
                    if (![
                        "linear",
                        "exponential"
                    ].includes(t9)) throw new Error("Tone.Envelope: invalid curve: " + t9);
                    this._decayCurve = t9;
                }
            }), s3.default.Envelope.prototype.triggerAttack = function(t9, e16) {
                this.log("triggerAttack", t9, e16), t9 = this.toSeconds(t9);
                var i20 = this.toSeconds(this.attack), n7 = this.toSeconds(this.decay);
                e16 = s3.default.defaultArg(e16, 1);
                var o = this.getValueAtTime(t9);
                o > 0 && (i20 = (1 - o) / (1 / i20));
                if (0 === i20) this._sig.setValueAtTime(e16, t9);
                else if ("linear" === this._attackCurve) this._sig.linearRampTo(e16, i20, t9);
                else if ("exponential" === this._attackCurve) this._sig.targetRampTo(e16, i20, t9);
                else if (i20 > 0) {
                    this._sig.cancelAndHoldAtTime(t9);
                    for(var a = this._attackCurve, r = 1; r < a.length; r++)if (a[r - 1] <= o && o <= a[r]) {
                        (a = this._attackCurve.slice(r))[0] = o;
                        break;
                    }
                    this._sig.setValueCurveAtTime(a, t9, i20, e16);
                }
                if (n7) {
                    var l = e16 * this.sustain, u = t9 + i20;
                    this.log("decay", u), "linear" === this._decayCurve ? this._sig.linearRampTo(l, n7, u + this.sampleTime) : "exponential" === this._decayCurve && this._sig.exponentialApproachValueAtTime(l, u, n7);
                }
                return this;
            }, s3.default.Envelope.prototype.triggerRelease = function(t9) {
                this.log("triggerRelease", t9), t9 = this.toSeconds(t9);
                var e16 = this.getValueAtTime(t9);
                if (e16 > 0) {
                    var i20 = this.toSeconds(this.release);
                    if ("linear" === this._releaseCurve) this._sig.linearRampTo(0, i20, t9);
                    else if ("exponential" === this._releaseCurve) this._sig.targetRampTo(0, i20, t9);
                    else {
                        var n7 = this._releaseCurve;
                        s3.default.isArray(n7) && (this._sig.cancelAndHoldAtTime(t9), this._sig.setValueCurveAtTime(n7, t9, i20, e16));
                    }
                }
                return this;
            }, s3.default.Envelope.prototype.getValueAtTime = function(t9) {
                return this._sig.getValueAtTime(t9);
            }, s3.default.Envelope.prototype.triggerAttackRelease = function(t9, e16, i21) {
                return e16 = this.toSeconds(e16), this.triggerAttack(e16, i21), this.triggerRelease(e16 + this.toSeconds(t9)), this;
            }, s3.default.Envelope.prototype.cancel = function(t9) {
                return this._sig.cancelScheduledValues(t9), this;
            }, s3.default.Envelope.prototype.connect = s3.default.SignalBase.prototype.connect, (function() {
                var t9, e16, i21 = [];
                for(t9 = 0; t9 < 128; t9++)i21[t9] = Math.sin(t9 / 127 * (Math.PI / 2));
                var n8 = [];
                for(t9 = 0; t9 < 127; t9++){
                    e16 = t9 / 127;
                    var o = Math.sin(e16 * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                    n8[t9] = o / 10 + 0.83 * e16;
                }
                n8[127] = 1;
                var a = [];
                for(t9 = 0; t9 < 128; t9++)a[t9] = Math.ceil(t9 / 127 * 5) / 5;
                var r = [];
                for(t9 = 0; t9 < 128; t9++)e16 = t9 / 127, r[t9] = 0.5 * (1 - Math.cos(Math.PI * e16));
                var l, u = [];
                for(t9 = 0; t9 < 128; t9++){
                    e16 = t9 / 127;
                    var d = 4 * Math.pow(e16, 3) + 0.2, f = Math.cos(d * Math.PI * 2 * e16);
                    u[t9] = Math.abs(f * (1 - e16));
                }
                function h(t10) {
                    for(var e17 = new Array(t10.length), i22 = 0; i22 < t10.length; i22++)e17[i22] = 1 - t10[i22];
                    return e17;
                }
                s3.default.Envelope.Type = {
                    linear: "linear",
                    exponential: "exponential",
                    bounce: {
                        In: h(u),
                        Out: u
                    },
                    cosine: {
                        In: i21,
                        Out: (l = i21, l.slice(0).reverse())
                    },
                    step: {
                        In: a,
                        Out: h(a)
                    },
                    ripple: {
                        In: n8,
                        Out: h(n8)
                    },
                    sine: {
                        In: r,
                        Out: h(r)
                    }
                };
            })(), s3.default.Envelope.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._sig.dispose(), this._sig = null, this._attackCurve = null, this._releaseCurve = null, this;
            }, e3.default = s3.default.Envelope;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(23), i5(10), i5(19), i5(7), i5(28), i5(3), i5(2), i5(20);
            if (s3.default.supported && !s3.default.global.AudioContext.prototype.createStereoPanner) {
                var n8 = function(t9) {
                    this.context = t9, this.pan = new s3.default.Signal(0, s3.default.Type.AudioRange);
                    var e16 = new s3.default.WaveShaper(function(t10) {
                        return s3.default.equalPowerScale((t10 + 1) / 2);
                    }, 4096), i21 = new s3.default.WaveShaper(function(t10) {
                        return s3.default.equalPowerScale(1 - (t10 + 1) / 2);
                    }, 4096), n9 = new s3.default.Gain, o = new s3.default.Gain, a = this.input = new s3.default.Split;
                    a._splitter.channelCountMode = "explicit", (new s3.default.Zero).fan(e16, i21);
                    var r = this.output = new s3.default.Merge;
                    a.left.chain(n9, r.left), a.right.chain(o, r.right), this.pan.chain(i21, n9.gain), this.pan.chain(e16, o.gain);
                };
                n8.prototype.disconnect = function() {
                    this.output.disconnect.apply(this.output, arguments);
                }, n8.prototype.connect = function() {
                    this.output.connect.apply(this.output, arguments);
                }, AudioContext.prototype.createStereoPanner = function() {
                    return new n8(this);
                }, s3.default.Context.prototype.createStereoPanner = function() {
                    return new n8(this);
                };
            }
            i5(22), i5(1);
            s3.default.Panner = function() {
                var t9 = s3.default.defaults(arguments, [
                    "pan"
                ], s3.default.Panner);
                s3.default.AudioNode.call(this), this._panner = this.input = this.output = this.context.createStereoPanner(), this.pan = this._panner.pan, this.pan.value = t9.pan, this._readOnly("pan");
            }, s3.default.extend(s3.default.Panner, s3.default.AudioNode), s3.default.Panner.defaults = {
                pan: 0
            }, s3.default.Panner.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable("pan"), this._panner.disconnect(), this._panner = null, this.pan = null, this;
            };
            e3.default = s3.default.Panner;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(6), i5(17), i5(5), i5(3);
            s3.default.FMOscillator = function() {
                var t9 = s3.default.defaults(arguments, [
                    "frequency",
                    "type",
                    "modulationType"
                ], s3.default.FMOscillator);
                s3.default.Source.call(this, t9), this._carrier = new s3.default.Oscillator(t9.frequency, t9.type), this.frequency = new s3.default.Signal(t9.frequency, s3.default.Type.Frequency), this.detune = this._carrier.detune, this.detune.value = t9.detune, this.modulationIndex = new s3.default.Multiply(t9.modulationIndex), this.modulationIndex.units = s3.default.Type.Positive, this._modulator = new s3.default.Oscillator(t9.frequency, t9.modulationType), this.harmonicity = new s3.default.Multiply(t9.harmonicity), this.harmonicity.units = s3.default.Type.Positive, this._modulationNode = new s3.default.Gain(0), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this.detune.connect(this._modulator.detune), this.phase = t9.phase, this._readOnly([
                    "modulationIndex",
                    "frequency",
                    "detune",
                    "harmonicity"
                ]);
            }, s3.default.extend(s3.default.FMOscillator, s3.default.Source), s3.default.FMOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                type: "sine",
                modulationIndex: 2,
                modulationType: "square",
                harmonicity: 1
            }, s3.default.FMOscillator.prototype._start = function(t9) {
                this._modulator.start(t9), this._carrier.start(t9);
            }, s3.default.FMOscillator.prototype._stop = function(t9) {
                this._modulator.stop(t9), this._carrier.stop(t9);
            }, s3.default.FMOscillator.prototype.restart = function(t9) {
                this._modulator.restart(t9), this._carrier.restart(t9);
            }, Object.defineProperty(s3.default.FMOscillator.prototype, "type", {
                get: function() {
                    return this._carrier.type;
                },
                set: function(t9) {
                    this._carrier.type = t9;
                }
            }), Object.defineProperty(s3.default.FMOscillator.prototype, "baseType", {
                get: function() {
                    return this._carrier.baseType;
                },
                set: function(t9) {
                    this._carrier.baseType = t9;
                }
            }), Object.defineProperty(s3.default.FMOscillator.prototype, "partialCount", {
                get: function() {
                    return this._carrier.partialCount;
                },
                set: function(t9) {
                    this._carrier.partialCount = t9;
                }
            }), Object.defineProperty(s3.default.FMOscillator.prototype, "modulationType", {
                get: function() {
                    return this._modulator.type;
                },
                set: function(t9) {
                    this._modulator.type = t9;
                }
            }), Object.defineProperty(s3.default.FMOscillator.prototype, "phase", {
                get: function() {
                    return this._carrier.phase;
                },
                set: function(t9) {
                    this._carrier.phase = t9, this._modulator.phase = t9;
                }
            }), Object.defineProperty(s3.default.FMOscillator.prototype, "partials", {
                get: function() {
                    return this._carrier.partials;
                },
                set: function(t9) {
                    this._carrier.partials = t9;
                }
            }), s3.default.FMOscillator.prototype.dispose = function() {
                return s3.default.Source.prototype.dispose.call(this), this._writable([
                    "modulationIndex",
                    "frequency",
                    "detune",
                    "harmonicity"
                ]), this.frequency.dispose(), this.frequency = null, this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this._modulationNode.dispose(), this._modulationNode = null, this.modulationIndex.dispose(), this.modulationIndex = null, this;
            }, e3.default = s3.default.FMOscillator;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(6), i5(17), i5(2), i5(7), i5(3);
            s3.default.PulseOscillator = function() {
                var t9 = s3.default.defaults(arguments, [
                    "frequency",
                    "width"
                ], s3.default.Oscillator);
                s3.default.Source.call(this, t9), this.width = new s3.default.Signal(t9.width, s3.default.Type.NormalRange), this._widthGate = new s3.default.Gain(0), this._sawtooth = new s3.default.Oscillator({
                    frequency: t9.frequency,
                    detune: t9.detune,
                    type: "sawtooth",
                    phase: t9.phase
                }), this.frequency = this._sawtooth.frequency, this.detune = this._sawtooth.detune, this._thresh = new s3.default.WaveShaper(function(t10) {
                    return t10 < 0 ? -1 : 1;
                }), this._sawtooth.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), this._readOnly([
                    "width",
                    "frequency",
                    "detune"
                ]);
            }, s3.default.extend(s3.default.PulseOscillator, s3.default.Source), s3.default.PulseOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                width: 0.2
            }, s3.default.PulseOscillator.prototype._start = function(t9) {
                t9 = this.toSeconds(t9), this._sawtooth.start(t9), this._widthGate.gain.setValueAtTime(1, t9);
            }, s3.default.PulseOscillator.prototype._stop = function(t9) {
                t9 = this.toSeconds(t9), this._sawtooth.stop(t9), this._widthGate.gain.setValueAtTime(0, t9);
            }, s3.default.PulseOscillator.prototype.restart = function(t9) {
                this._sawtooth.restart(t9), this._widthGate.gain.cancelScheduledValues(t9), this._widthGate.gain.setValueAtTime(1, t9);
            }, Object.defineProperty(s3.default.PulseOscillator.prototype, "phase", {
                get: function() {
                    return this._sawtooth.phase;
                },
                set: function(t9) {
                    this._sawtooth.phase = t9;
                }
            }), Object.defineProperty(s3.default.PulseOscillator.prototype, "type", {
                get: function() {
                    return "pulse";
                }
            }), Object.defineProperty(s3.default.PulseOscillator.prototype, "baseType", {
                get: function() {
                    return "pulse";
                }
            }), Object.defineProperty(s3.default.PulseOscillator.prototype, "partials", {
                get: function() {
                    return [];
                }
            }), s3.default.PulseOscillator.prototype.dispose = function() {
                return s3.default.Source.prototype.dispose.call(this), this._sawtooth.dispose(), this._sawtooth = null, this._writable([
                    "width",
                    "frequency",
                    "detune"
                ]), this.width.dispose(), this.width = null, this._widthGate.dispose(), this._widthGate = null, this._thresh.dispose(), this._thresh = null, this.frequency = null, this.detune = null, this;
            }, e3.default = s3.default.PulseOscillator;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(16), i5(4), i5(34);
            s3.default.Event = function() {
                var t9 = s3.default.defaults(arguments, [
                    "callback",
                    "value"
                ], s3.default.Event);
                s3.default.call(this), this._loop = t9.loop, this.callback = t9.callback, this.value = t9.value, this._loopStart = this.toTicks(t9.loopStart), this._loopEnd = this.toTicks(t9.loopEnd), this._state = new s3.default.TimelineState(s3.default.State.Stopped), this._playbackRate = 1, this._startOffset = 0, this._probability = t9.probability, this._humanize = t9.humanize, this.mute = t9.mute, this.playbackRate = t9.playbackRate;
            }, s3.default.extend(s3.default.Event), s3.default.Event.defaults = {
                callback: s3.default.noOp,
                loop: !1,
                loopEnd: "1m",
                loopStart: 0,
                playbackRate: 1,
                value: null,
                probability: 1,
                mute: !1,
                humanize: !1
            }, s3.default.Event.prototype._rescheduleEvents = function(t9) {
                return t9 = s3.default.defaultArg(t9, -1), this._state.forEachFrom(t9, (function(t10) {
                    var e16;
                    if (t10.state === s3.default.State.Started) {
                        s3.default.isDefined(t10.id) && s3.default.Transport.clear(t10.id);
                        var i21 = t10.time + Math.round(this.startOffset / this._playbackRate);
                        if (!0 === this._loop || s3.default.isNumber(this._loop) && this._loop > 1) {
                            e16 = 1 / 0, s3.default.isNumber(this._loop) && (e16 = this._loop * this._getLoopDuration());
                            var n9 = this._state.getAfter(i21);
                            null !== n9 && (e16 = Math.min(e16, n9.time - i21)), e16 !== 1 / 0 && (this._state.setStateAtTime(s3.default.State.Stopped, i21 + e16 + 1), e16 = s3.default.Ticks(e16));
                            var o = s3.default.Ticks(this._getLoopDuration());
                            t10.id = s3.default.Transport.scheduleRepeat(this._tick.bind(this), o, s3.default.Ticks(i21), e16);
                        } else t10.id = s3.default.Transport.schedule(this._tick.bind(this), s3.default.Ticks(i21));
                    }
                }).bind(this)), this;
            }, Object.defineProperty(s3.default.Event.prototype, "state", {
                get: function() {
                    return this._state.getValueAtTime(s3.default.Transport.ticks);
                }
            }), Object.defineProperty(s3.default.Event.prototype, "startOffset", {
                get: function() {
                    return this._startOffset;
                },
                set: function(t9) {
                    this._startOffset = t9;
                }
            }), Object.defineProperty(s3.default.Event.prototype, "probability", {
                get: function() {
                    return this._probability;
                },
                set: function(t9) {
                    this._probability = t9;
                }
            }), Object.defineProperty(s3.default.Event.prototype, "humanize", {
                get: function() {
                    return this._humanize;
                },
                set: function(t9) {
                    this._humanize = t9;
                }
            }), s3.default.Event.prototype.start = function(t9) {
                return t9 = this.toTicks(t9), this._state.getValueAtTime(t9) === s3.default.State.Stopped && (this._state.add({
                    state: s3.default.State.Started,
                    time: t9,
                    id: void 0
                }), this._rescheduleEvents(t9)), this;
            }, s3.default.Event.prototype.stop = function(t9) {
                if (this.cancel(t9), t9 = this.toTicks(t9), this._state.getValueAtTime(t9) === s3.default.State.Started) {
                    this._state.setStateAtTime(s3.default.State.Stopped, t9);
                    var e16 = this._state.getBefore(t9), i22 = t9;
                    null !== e16 && (i22 = e16.time), this._rescheduleEvents(i22);
                }
                return this;
            }, s3.default.Event.prototype.cancel = function(t9) {
                return t9 = s3.default.defaultArg(t9, -1 / 0), t9 = this.toTicks(t9), this._state.forEachFrom(t9, function(t10) {
                    s3.default.Transport.clear(t10.id);
                }), this._state.cancel(t9), this;
            }, s3.default.Event.prototype._tick = function(t9) {
                var e17 = s3.default.Transport.getTicksAtTime(t9);
                if (!this.mute && this._state.getValueAtTime(e17) === s3.default.State.Started) {
                    if (this.probability < 1 && Math.random() > this.probability) return;
                    if (this.humanize) {
                        var i23 = 0.02;
                        s3.default.isBoolean(this.humanize) || (i23 = this.toSeconds(this.humanize)), t9 += (2 * Math.random() - 1) * i23;
                    }
                    this.callback(t9, this.value);
                }
            }, s3.default.Event.prototype._getLoopDuration = function() {
                return Math.round((this._loopEnd - this._loopStart) / this._playbackRate);
            }, Object.defineProperty(s3.default.Event.prototype, "loop", {
                get: function() {
                    return this._loop;
                },
                set: function(t9) {
                    this._loop = t9, this._rescheduleEvents();
                }
            }), Object.defineProperty(s3.default.Event.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate;
                },
                set: function(t9) {
                    this._playbackRate = t9, this._rescheduleEvents();
                }
            }), Object.defineProperty(s3.default.Event.prototype, "loopEnd", {
                get: function() {
                    return s3.default.Ticks(this._loopEnd).toSeconds();
                },
                set: function(t9) {
                    this._loopEnd = this.toTicks(t9), this._loop && this._rescheduleEvents();
                }
            }), Object.defineProperty(s3.default.Event.prototype, "loopStart", {
                get: function() {
                    return s3.default.Ticks(this._loopStart).toSeconds();
                },
                set: function(t9) {
                    this._loopStart = this.toTicks(t9), this._loop && this._rescheduleEvents();
                }
            }), Object.defineProperty(s3.default.Event.prototype, "progress", {
                get: function() {
                    if (this._loop) {
                        var t9 = s3.default.Transport.ticks, e17 = this._state.get(t9);
                        if (null !== e17 && e17.state === s3.default.State.Started) {
                            var i24 = this._getLoopDuration();
                            return (t9 - e17.time) % i24 / i24;
                        }
                        return 0;
                    }
                    return 0;
                }
            }), s3.default.Event.prototype.dispose = function() {
                this.cancel(), this._state.dispose(), this._state = null, this.callback = null, this.value = null;
            }, e3.default = s3.default.Event;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2), i5(13), i5(29), i5(10), i5(3), i5(1);
            s3.default.MidSideMerge = function() {
                s3.default.AudioNode.call(this), this.createInsOuts(2, 0), this.mid = this.input[0] = new s3.default.Gain, this._left = new s3.default.Add, this._timesTwoLeft = new s3.default.Multiply(Math.SQRT1_2), this.side = this.input[1] = new s3.default.Gain, this._right = new s3.default.Subtract, this._timesTwoRight = new s3.default.Multiply(Math.SQRT1_2), this._merge = this.output = new s3.default.Merge, this.mid.connect(this._left, 0, 0), this.side.connect(this._left, 0, 1), this.mid.connect(this._right, 0, 0), this.side.connect(this._right, 0, 1), this._left.connect(this._timesTwoLeft), this._right.connect(this._timesTwoRight), this._timesTwoLeft.connect(this._merge, 0, 0), this._timesTwoRight.connect(this._merge, 0, 1);
            }, s3.default.extend(s3.default.MidSideMerge, s3.default.AudioNode), s3.default.MidSideMerge.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._left.dispose(), this._left = null, this._timesTwoLeft.dispose(), this._timesTwoLeft = null, this._right.dispose(), this._right = null, this._timesTwoRight.dispose(), this._timesTwoRight = null, this._merge.dispose(), this._merge = null, this;
            }, e3.default = s3.default.MidSideMerge;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(29), i5(13), i5(2), i5(19), i5(1);
            s3.default.MidSideSplit = function() {
                s3.default.AudioNode.call(this), this.createInsOuts(0, 2), this._split = this.input = new s3.default.Split, this._midAdd = new s3.default.Add, this.mid = this.output[0] = new s3.default.Multiply(Math.SQRT1_2), this._sideSubtract = new s3.default.Subtract, this.side = this.output[1] = new s3.default.Multiply(Math.SQRT1_2), this._split.connect(this._midAdd, 0, 0), this._split.connect(this._midAdd, 1, 1), this._split.connect(this._sideSubtract, 0, 0), this._split.connect(this._sideSubtract, 1, 1), this._midAdd.connect(this.mid), this._sideSubtract.connect(this.side);
            }, s3.default.extend(s3.default.MidSideSplit, s3.default.AudioNode), s3.default.MidSideSplit.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._midAdd.dispose(), this._midAdd = null, this._sideSubtract.dispose(), this._sideSubtract = null, this._split.dispose(), this._split = null, this;
            }, e3.default = s3.default.MidSideSplit;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2), i5(9), i5(1), i5(59);
            s3.default.LowpassCombFilter = function() {
                var t10 = s3.default.defaults(arguments, [
                    "delayTime",
                    "resonance",
                    "dampening"
                ], s3.default.LowpassCombFilter);
                s3.default.AudioNode.call(this), this._combFilter = this.output = new s3.default.FeedbackCombFilter(t10.delayTime, t10.resonance), this.delayTime = this._combFilter.delayTime, this._lowpass = this.input = new s3.default.Filter({
                    frequency: t10.dampening,
                    type: "lowpass",
                    Q: 0,
                    rolloff: -12
                }), this.dampening = this._lowpass.frequency, this.resonance = this._combFilter.resonance, this._lowpass.connect(this._combFilter), this._readOnly([
                    "dampening",
                    "resonance",
                    "delayTime"
                ]);
            }, s3.default.extend(s3.default.LowpassCombFilter, s3.default.AudioNode), s3.default.LowpassCombFilter.defaults = {
                delayTime: 0.1,
                resonance: 0.5,
                dampening: 3000
            }, s3.default.LowpassCombFilter.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable([
                    "dampening",
                    "resonance",
                    "delayTime"
                ]), this._combFilter.dispose(), this._combFilter = null, this.resonance = null, this.delayTime = null, this._lowpass.dispose(), this._lowpass = null, this.dampening = null, this;
            }, e3.default = s3.default.LowpassCombFilter;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(45);
            s3.default.Ticks = function(t10, e18) {
                if (!(this instanceof s3.default.Ticks)) return new s3.default.Ticks(t10, e18);
                s3.default.TransportTime.call(this, t10, e18);
            }, s3.default.extend(s3.default.Ticks, s3.default.TransportTime), s3.default.Ticks.prototype._defaultUnits = "i", s3.default.Ticks.prototype._now = function() {
                return s3.default.Transport.ticks;
            }, s3.default.Ticks.prototype._beatsToUnits = function(t10) {
                return this._getPPQ() * t10;
            }, s3.default.Ticks.prototype._secondsToUnits = function(t10) {
                return Math.floor(t10 / (60 / this._getBpm()) * this._getPPQ());
            }, s3.default.Ticks.prototype._ticksToUnits = function(t10) {
                return t10;
            }, s3.default.Ticks.prototype.toTicks = function() {
                return this.valueOf();
            }, s3.default.Ticks.prototype.toSeconds = function() {
                return this.valueOf() / this._getPPQ() * (60 / this._getBpm());
            }, e3.default = s3.default.Ticks;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(55);
            s3.default.TransportEvent = function(t10, e18) {
                e18 = s3.default.defaultArg(e18, s3.default.TransportEvent.defaults), s3.default.call(this), this.Transport = t10, this.id = s3.default.TransportEvent._eventId++, this.time = s3.default.Ticks(e18.time), this.callback = e18.callback, this._once = e18.once;
            }, s3.default.extend(s3.default.TransportEvent), s3.default.TransportEvent.defaults = {
                once: !1,
                callback: s3.default.noOp
            }, s3.default.TransportEvent._eventId = 0, s3.default.TransportEvent.prototype.invoke = function(t10) {
                this.callback && (this.callback(t10), this._once && this.Transport && this.Transport.clear(this.id));
            }, s3.default.TransportEvent.prototype.dispose = function() {
                return s3.default.prototype.dispose.call(this), this.Transport = null, this.callback = null, this.time = null, this;
            }, e3.default = s3.default.TransportEvent;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(82), i5(34), i5(24), i5(14);
            s3.default.TickSource = function() {
                var t10 = s3.default.defaults(arguments, [
                    "frequency"
                ], s3.default.TickSource);
                this.frequency = new s3.default.TickSignal(t10.frequency), this._readOnly("frequency"), this._state = new s3.default.TimelineState(s3.default.State.Stopped), this._state.setStateAtTime(s3.default.State.Stopped, 0), this._tickOffset = new s3.default.Timeline, this.setTicksAtTime(0, 0);
            }, s3.default.extend(s3.default.TickSource), s3.default.TickSource.defaults = {
                frequency: 1
            }, Object.defineProperty(s3.default.TickSource.prototype, "state", {
                get: function() {
                    return this._state.getValueAtTime(this.now());
                }
            }), s3.default.TickSource.prototype.start = function(t10, e18) {
                return t10 = this.toSeconds(t10), this._state.getValueAtTime(t10) !== s3.default.State.Started && (this._state.setStateAtTime(s3.default.State.Started, t10), s3.default.isDefined(e18) && this.setTicksAtTime(e18, t10)), this;
            }, s3.default.TickSource.prototype.stop = function(t10) {
                if (t10 = this.toSeconds(t10), this._state.getValueAtTime(t10) === s3.default.State.Stopped) {
                    var e18 = this._state.get(t10);
                    e18.time > 0 && (this._tickOffset.cancel(e18.time), this._state.cancel(e18.time));
                }
                return this._state.cancel(t10), this._state.setStateAtTime(s3.default.State.Stopped, t10), this.setTicksAtTime(0, t10), this;
            }, s3.default.TickSource.prototype.pause = function(t10) {
                return t10 = this.toSeconds(t10), this._state.getValueAtTime(t10) === s3.default.State.Started && this._state.setStateAtTime(s3.default.State.Paused, t10), this;
            }, s3.default.TickSource.prototype.cancel = function(t10) {
                return t10 = this.toSeconds(t10), this._state.cancel(t10), this._tickOffset.cancel(t10), this;
            }, s3.default.TickSource.prototype.getTicksAtTime = function(t10) {
                t10 = this.toSeconds(t10);
                var e19 = this._state.getLastState(s3.default.State.Stopped, t10), i25 = {
                    state: s3.default.State.Paused,
                    time: t10
                };
                this._state.add(i25);
                var n10 = e19, o = 0;
                return this._state.forEachBetween(e19.time, t10 + this.sampleTime, (function(t11) {
                    var e20 = n10.time, i26 = this._tickOffset.get(t11.time);
                    i26.time >= n10.time && (o = i26.ticks, e20 = i26.time), n10.state === s3.default.State.Started && t11.state !== s3.default.State.Started && (o += this.frequency.getTicksAtTime(t11.time) - this.frequency.getTicksAtTime(e20)), n10 = t11;
                }).bind(this)), this._state.remove(i25), o;
            }, Object.defineProperty(s3.default.TickSource.prototype, "ticks", {
                get: function() {
                    return this.getTicksAtTime(this.now());
                },
                set: function(t10) {
                    this.setTicksAtTime(t10, this.now());
                }
            }), Object.defineProperty(s3.default.TickSource.prototype, "seconds", {
                get: function() {
                    return this.getSecondsAtTime(this.now());
                },
                set: function(t10) {
                    var e19 = this.now(), i25 = this.frequency.timeToTicks(t10, e19);
                    this.setTicksAtTime(i25, e19);
                }
            }), s3.default.TickSource.prototype.getSecondsAtTime = function(t10) {
                t10 = this.toSeconds(t10);
                var e19 = this._state.getLastState(s3.default.State.Stopped, t10), i25 = {
                    state: s3.default.State.Paused,
                    time: t10
                };
                this._state.add(i25);
                var n10 = e19, o = 0;
                return this._state.forEachBetween(e19.time, t10 + this.sampleTime, (function(t11) {
                    var e20 = n10.time, i26 = this._tickOffset.get(t11.time);
                    i26.time >= n10.time && (o = i26.seconds, e20 = i26.time), n10.state === s3.default.State.Started && t11.state !== s3.default.State.Started && (o += t11.time - e20), n10 = t11;
                }).bind(this)), this._state.remove(i25), o;
            }, s3.default.TickSource.prototype.setTicksAtTime = function(t10, e19) {
                return e19 = this.toSeconds(e19), this._tickOffset.cancel(e19), this._tickOffset.add({
                    time: e19,
                    ticks: t10,
                    seconds: this.frequency.getDurationOfTicks(t10, e19)
                }), this;
            }, s3.default.TickSource.prototype.getStateAtTime = function(t10) {
                return t10 = this.toSeconds(t10), this._state.getValueAtTime(t10);
            }, s3.default.TickSource.prototype.getTimeOfTick = function(t10, e19) {
                e19 = s3.default.defaultArg(e19, this.now());
                var i25 = this._tickOffset.get(e19), n10 = this._state.get(e19), o = Math.max(i25.time, n10.time), a = this.frequency.getTicksAtTime(o) + t10 - i25.ticks;
                return this.frequency.getTimeOfTick(a);
            }, s3.default.TickSource.prototype.forEachTickBetween = function(t10, e19, i25) {
                var n10 = this._state.get(t10);
                if (this._state.forEachBetween(t10, e19, (function(e20) {
                    n10.state === s3.default.State.Started && e20.state !== s3.default.State.Started && this.forEachTickBetween(Math.max(n10.time, t10), e20.time - this.sampleTime, i25), n10 = e20;
                }).bind(this)), t10 = Math.max(n10.time, t10), n10.state === s3.default.State.Started && this._state) {
                    var o = this.frequency.getTicksAtTime(t10), a = (o - this.frequency.getTicksAtTime(n10.time)) % 1;
                    0 !== a && (a = 1 - a);
                    for(var r = this.frequency.getTimeOfTick(o + a), l = null; r < e19 && this._state;){
                        try {
                            i25(r, Math.round(this.getTicksAtTime(r)));
                        } catch (t11) {
                            l = t11;
                            break;
                        }
                        this._state && (r += this.frequency.getDurationOfTicks(1, r));
                    }
                }
                if (l) throw l;
                return this;
            }, s3.default.TickSource.prototype.dispose = function() {
                return s3.default.Param.prototype.dispose.call(this), this._state.dispose(), this._state = null, this._tickOffset.dispose(), this._tickOffset = null, this._writable("frequency"), this.frequency.dispose(), this.frequency = null, this;
            }, e3.default = s3.default.TickSource;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(87), i5(13), i5(2), i5(4), i5(18), i5(1);
            s3.default.Follower = function() {
                var t10 = s3.default.defaults(arguments, [
                    "smoothing"
                ], s3.default.Follower);
                s3.default.AudioNode.call(this), this.createInsOuts(1, 1), this._abs = new s3.default.Abs, this._filter = this.context.createBiquadFilter(), this._filter.type = "lowpass", this._filter.frequency.value = 0, this._filter.Q.value = 0, this._sub = new s3.default.Subtract, this._delay = new s3.default.Delay(this.blockTime), this._smoothing = t10.smoothing, s3.default.connect(this.input, this._delay), s3.default.connect(this.input, this._sub, 0, 1), this._sub.chain(this._abs, this._filter, this.output), this.smoothing = t10.smoothing;
            }, s3.default.extend(s3.default.Follower, s3.default.AudioNode), s3.default.Follower.defaults = {
                smoothing: 0.05
            }, Object.defineProperty(s3.default.Follower.prototype, "smoothing", {
                get: function() {
                    return this._smoothing;
                },
                set: function(t10) {
                    this._smoothing = t10, this._filter.frequency.value = 0.5 * s3.default.Time(t10).toFrequency();
                }
            }), s3.default.Follower.prototype.connect = s3.default.SignalBase.prototype.connect, s3.default.Follower.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._filter.disconnect(), this._filter = null, this._delay.dispose(), this._delay = null, this._sub.disconnect(), this._sub = null, this._abs.dispose(), this._abs = null, this;
            }, e3.default = s3.default.Follower;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(42), i5(2), i5(14), i5(18), i5(3), i5(1);
            s3.default.FeedbackCombFilter = function() {
                var t10 = s3.default.defaults(arguments, [
                    "delayTime",
                    "resonance"
                ], s3.default.FeedbackCombFilter);
                s3.default.AudioNode.call(this), this._delay = this.input = this.output = new s3.default.Delay(t10.delayTime), this.delayTime = this._delay.delayTime, this._feedback = new s3.default.Gain(t10.resonance, s3.default.Type.NormalRange), this.resonance = this._feedback.gain, this._delay.chain(this._feedback, this._delay), this._readOnly([
                    "resonance",
                    "delayTime"
                ]);
            }, s3.default.extend(s3.default.FeedbackCombFilter, s3.default.AudioNode), s3.default.FeedbackCombFilter.defaults = {
                delayTime: 0.1,
                resonance: 0.5
            }, s3.default.FeedbackCombFilter.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable([
                    "resonance",
                    "delayTime"
                ]), this._delay.dispose(), this._delay = null, this.delayTime = null, this._feedback.dispose(), this._feedback = null, this.resonance = null, this;
            }, e3.default = s3.default.FeedbackCombFilter;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(9), i5(2), i5(3), i5(1);
            s3.default.MultibandSplit = function() {
                var t10 = s3.default.defaults(arguments, [
                    "lowFrequency",
                    "highFrequency"
                ], s3.default.MultibandSplit);
                s3.default.AudioNode.call(this), this.input = new s3.default.Gain, this.output = new Array(3), this.low = this.output[0] = new s3.default.Filter(0, "lowpass"), this._lowMidFilter = new s3.default.Filter(0, "highpass"), this.mid = this.output[1] = new s3.default.Filter(0, "lowpass"), this.high = this.output[2] = new s3.default.Filter(0, "highpass"), this.lowFrequency = new s3.default.Signal(t10.lowFrequency, s3.default.Type.Frequency), this.highFrequency = new s3.default.Signal(t10.highFrequency, s3.default.Type.Frequency), this.Q = new s3.default.Signal(t10.Q), this.input.fan(this.low, this.high), this.input.chain(this._lowMidFilter, this.mid), this.lowFrequency.connect(this.low.frequency), this.lowFrequency.connect(this._lowMidFilter.frequency), this.highFrequency.connect(this.mid.frequency), this.highFrequency.connect(this.high.frequency), this.Q.connect(this.low.Q), this.Q.connect(this._lowMidFilter.Q), this.Q.connect(this.mid.Q), this.Q.connect(this.high.Q), this._readOnly([
                    "high",
                    "mid",
                    "low",
                    "highFrequency",
                    "lowFrequency"
                ]);
            }, s3.default.extend(s3.default.MultibandSplit, s3.default.AudioNode), s3.default.MultibandSplit.defaults = {
                lowFrequency: 400,
                highFrequency: 2500,
                Q: 1
            }, s3.default.MultibandSplit.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable([
                    "high",
                    "mid",
                    "low",
                    "highFrequency",
                    "lowFrequency"
                ]), this.low.dispose(), this.low = null, this._lowMidFilter.dispose(), this._lowMidFilter = null, this.mid.dispose(), this.mid = null, this.high.dispose(), this.high = null, this.lowFrequency.dispose(), this.lowFrequency = null, this.highFrequency.dispose(), this.highFrequency = null, this.Q.dispose(), this.Q = null, this;
            }, e3.default = s3.default.MultibandSplit;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(7);
            s3.default.Pow = function(t10) {
                s3.default.SignalBase.call(this), this._exp = s3.default.defaultArg(t10, 1), this._expScaler = this.input = this.output = new s3.default.WaveShaper(this._expFunc(this._exp), 8192);
            }, s3.default.extend(s3.default.Pow, s3.default.SignalBase), Object.defineProperty(s3.default.Pow.prototype, "value", {
                get: function() {
                    return this._exp;
                },
                set: function(t10) {
                    this._exp = t10, this._expScaler.setMap(this._expFunc(this._exp));
                }
            }), s3.default.Pow.prototype._expFunc = function(t10) {
                return function(e19) {
                    return Math.pow(Math.abs(e19), t10);
                };
            }, s3.default.Pow.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._expScaler.dispose(), this._expScaler = null, this;
            }, e3.default = s3.default.Pow;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            s3.default.TimeBase = function(t10, e19) {
                if (!(this instanceof s3.default.TimeBase)) return new s3.default.TimeBase(t10, e19);
                if (this._val = t10, this._units = e19, s3.default.isUndef(this._units) && s3.default.isString(this._val) && parseFloat(this._val) == this._val && "+" !== this._val.charAt(0)) this._val = parseFloat(this._val), this._units = this._defaultUnits;
                else if (t10 && t10.constructor === this.constructor) this._val = t10._val, this._units = t10._units;
                else if (t10 instanceof s3.default.TimeBase) switch(this._defaultUnits){
                    case "s":
                        this._val = t10.toSeconds();
                        break;
                    case "i":
                        this._val = t10.toTicks();
                        break;
                    case "hz":
                        this._val = t10.toFrequency();
                        break;
                    case "midi":
                        this._val = t10.toMidi();
                        break;
                    default:
                        throw new Error("Unrecognized default units " + this._defaultUnits);
                }
            }, s3.default.extend(s3.default.TimeBase), s3.default.TimeBase.prototype._expressions = {
                n: {
                    regexp: /^(\d+)n(\.?)$/i,
                    method: function(t10, e19) {
                        t10 = parseInt(t10);
                        var i25 = "." === e19 ? 1.5 : 1;
                        return 1 === t10 ? this._beatsToUnits(this._getTimeSignature()) * i25 : this._beatsToUnits(4 / t10) * i25;
                    }
                },
                t: {
                    regexp: /^(\d+)t$/i,
                    method: function(t10) {
                        return t10 = parseInt(t10), this._beatsToUnits(8 / (3 * parseInt(t10)));
                    }
                },
                m: {
                    regexp: /^(\d+)m$/i,
                    method: function(t10) {
                        return this._beatsToUnits(parseInt(t10) * this._getTimeSignature());
                    }
                },
                i: {
                    regexp: /^(\d+)i$/i,
                    method: function(t10) {
                        return this._ticksToUnits(parseInt(t10));
                    }
                },
                hz: {
                    regexp: /^(\d+(?:\.\d+)?)hz$/i,
                    method: function(t10) {
                        return this._frequencyToUnits(parseFloat(t10));
                    }
                },
                tr: {
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
                    method: function(t10, e19, i25) {
                        var s6 = 0;
                        return t10 && "0" !== t10 && (s6 += this._beatsToUnits(this._getTimeSignature() * parseFloat(t10))), e19 && "0" !== e19 && (s6 += this._beatsToUnits(parseFloat(e19))), i25 && "0" !== i25 && (s6 += this._beatsToUnits(parseFloat(i25) / 4)), s6;
                    }
                },
                s: {
                    regexp: /^(\d+(?:\.\d+)?)s$/,
                    method: function(t10) {
                        return this._secondsToUnits(parseFloat(t10));
                    }
                },
                samples: {
                    regexp: /^(\d+)samples$/,
                    method: function(t10) {
                        return parseInt(t10) / this.context.sampleRate;
                    }
                },
                default: {
                    regexp: /^(\d+(?:\.\d+)?)$/,
                    method: function(t10) {
                        return this._expressions[this._defaultUnits].method.call(this, t10);
                    }
                }
            }, s3.default.TimeBase.prototype._defaultUnits = "s", s3.default.TimeBase.prototype._getBpm = function() {
                return s3.default.Transport ? s3.default.Transport.bpm.value : 120;
            }, s3.default.TimeBase.prototype._getTimeSignature = function() {
                return s3.default.Transport ? s3.default.Transport.timeSignature : 4;
            }, s3.default.TimeBase.prototype._getPPQ = function() {
                return s3.default.Transport ? s3.default.Transport.PPQ : 192;
            }, s3.default.TimeBase.prototype._now = function() {
                return this.now();
            }, s3.default.TimeBase.prototype._frequencyToUnits = function(t10) {
                return 1 / t10;
            }, s3.default.TimeBase.prototype._beatsToUnits = function(t10) {
                return 60 / this._getBpm() * t10;
            }, s3.default.TimeBase.prototype._secondsToUnits = function(t10) {
                return t10;
            }, s3.default.TimeBase.prototype._ticksToUnits = function(t10) {
                return t10 * (this._beatsToUnits(1) / this._getPPQ());
            }, s3.default.TimeBase.prototype._noArg = function() {
                return this._now();
            }, s3.default.TimeBase.prototype.valueOf = function() {
                if (s3.default.isUndef(this._val)) return this._noArg();
                if (s3.default.isString(this._val) && s3.default.isUndef(this._units)) {
                    for(var t10 in this._expressions)if (this._expressions[t10].regexp.test(this._val.trim())) {
                        this._units = t10;
                        break;
                    }
                } else if (s3.default.isObject(this._val)) {
                    var e19 = 0;
                    for(var i25 in this._val){
                        var n10 = this._val[i25];
                        e19 += new this.constructor(i25).valueOf() * n10;
                    }
                    return e19;
                }
                if (s3.default.isDefined(this._units)) {
                    var o = this._expressions[this._units], a = this._val.toString().trim().match(o.regexp);
                    return a ? o.method.apply(this, a.slice(1)) : o.method.call(this, parseFloat(this._val));
                }
                return this._val;
            }, s3.default.TimeBase.prototype.toSeconds = function() {
                return this.valueOf();
            }, s3.default.TimeBase.prototype.toFrequency = function() {
                return 1 / this.toSeconds();
            }, s3.default.TimeBase.prototype.toSamples = function() {
                return this.toSeconds() * this.context.sampleRate;
            }, s3.default.TimeBase.prototype.toMilliseconds = function() {
                return 1000 * this.toSeconds();
            }, s3.default.TimeBase.prototype.dispose = function() {
                this._val = null, this._units = null;
            }, e3.default = s3.default.TimeBase;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(62), i5(46);
            s3.default.Time = function(t11, e20) {
                if (!(this instanceof s3.default.Time)) return new s3.default.Time(t11, e20);
                s3.default.TimeBase.call(this, t11, e20);
            }, s3.default.extend(s3.default.Time, s3.default.TimeBase), s3.default.Time.prototype._expressions = Object.assign({
            }, s3.default.TimeBase.prototype._expressions, {
                quantize: {
                    regexp: /^@(.+)/,
                    method: function(t11) {
                        if (s3.default.Transport) {
                            var e20 = new this.constructor(t11);
                            return this._secondsToUnits(s3.default.Transport.nextSubdivision(e20));
                        }
                        return 0;
                    }
                },
                now: {
                    regexp: /^\+(.+)/,
                    method: function(t11) {
                        return this._now() + new this.constructor(t11);
                    }
                }
            }), s3.default.Time.prototype.quantize = function(t11, e21) {
                e21 = s3.default.defaultArg(e21, 1);
                var i26 = new this.constructor(t11), n11 = this.valueOf();
                return n11 + (Math.round(n11 / i26) * i26 - n11) * e21;
            }, s3.default.Time.prototype.toNotation = function() {
                for(var t11 = this.toSeconds(), e21 = [
                    "1m"
                ], i26 = 1; i26 < 8; i26++){
                    var n11 = Math.pow(2, i26);
                    e21.push(n11 + "n."), e21.push(n11 + "n"), e21.push(n11 + "t");
                }
                e21.push("0");
                var o = e21[0], a = s3.default.Time(e21[0]).toSeconds();
                return e21.forEach(function(e22) {
                    var i27 = s3.default.Time(e22).toSeconds();
                    Math.abs(i27 - t11) < Math.abs(a - t11) && (o = e22, a = i27);
                }), o;
            }, s3.default.Time.prototype.toBarsBeatsSixteenths = function() {
                var t11 = this._beatsToUnits(1), e21 = this.valueOf() / t11;
                e21 = parseFloat(e21.toFixed(4));
                var i26 = Math.floor(e21 / this._getTimeSignature()), s6 = e21 % 1 * 4;
                return e21 = Math.floor(e21) % this._getTimeSignature(), (s6 = s6.toString()).length > 3 && (s6 = parseFloat(parseFloat(s6).toFixed(3))), [
                    i26,
                    e21,
                    s6
                ].join(":");
            }, s3.default.Time.prototype.toTicks = function() {
                var t11 = this._beatsToUnits(1), e21 = this.valueOf() / t11;
                return Math.round(e21 * this._getPPQ());
            }, s3.default.Time.prototype.toSeconds = function() {
                return this.valueOf();
            }, s3.default.Time.prototype.toMidi = function() {
                return s3.default.Frequency.ftom(this.toFrequency());
            }, e3.default = s3.default.Time;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(11), i5(6), i5(3), i5(1);
            s3.default.supported && (OscillatorNode.prototype.setPeriodicWave || (OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable), AudioContext.prototype.createPeriodicWave || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable)), s3.default.OscillatorNode = function() {
                var t11 = s3.default.defaults(arguments, [
                    "frequency",
                    "type"
                ], s3.default.OscillatorNode);
                s3.default.AudioNode.call(this, t11), this.onended = t11.onended, this._startTime = -1, this._stopTime = -1, this._gainNode = this.output = new s3.default.Gain(0), this._oscillator = this.context.createOscillator(), s3.default.connect(this._oscillator, this._gainNode), this.type = t11.type, this.frequency = new s3.default.Param({
                    param: this._oscillator.frequency,
                    units: s3.default.Type.Frequency,
                    value: t11.frequency
                }), this.detune = new s3.default.Param({
                    param: this._oscillator.detune,
                    units: s3.default.Type.Cents,
                    value: t11.detune
                }), this._gain = 1;
            }, s3.default.extend(s3.default.OscillatorNode, s3.default.AudioNode), s3.default.OscillatorNode.defaults = {
                frequency: 440,
                detune: 0,
                type: "sine",
                onended: s3.default.noOp
            }, Object.defineProperty(s3.default.OscillatorNode.prototype, "state", {
                get: function() {
                    return this.getStateAtTime(this.now());
                }
            }), s3.default.OscillatorNode.prototype.getStateAtTime = function(t11) {
                return t11 = this.toSeconds(t11), -1 !== this._startTime && t11 >= this._startTime && (-1 === this._stopTime || t11 <= this._stopTime) ? s3.default.State.Started : s3.default.State.Stopped;
            }, s3.default.OscillatorNode.prototype.start = function(t11) {
                if (this.log("start", t11), -1 !== this._startTime) throw new Error("cannot call OscillatorNode.start more than once");
                return this._startTime = this.toSeconds(t11), this._startTime = Math.max(this._startTime, this.context.currentTime), this._oscillator.start(this._startTime), this._gainNode.gain.setValueAtTime(1, this._startTime), this;
            }, s3.default.OscillatorNode.prototype.setPeriodicWave = function(t11) {
                return this._oscillator.setPeriodicWave(t11), this;
            }, s3.default.OscillatorNode.prototype.stop = function(t11) {
                return this.log("stop", t11), this.assert(-1 !== this._startTime, "'start' must be called before 'stop'"), this.cancelStop(), this._stopTime = this.toSeconds(t11), this._stopTime = Math.max(this._stopTime, this.context.currentTime), this._stopTime > this._startTime ? (this._gainNode.gain.setValueAtTime(0, this._stopTime), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout((function() {
                    this._oscillator.stop(this.now()), this.onended(), setTimeout((function() {
                        this._oscillator && (this._oscillator.disconnect(), this._gainNode.disconnect());
                    }).bind(this), 100);
                }).bind(this), this._stopTime - this.context.currentTime)) : this._gainNode.gain.cancelScheduledValues(this._startTime), this;
            }, s3.default.OscillatorNode.prototype.cancelStop = function() {
                return -1 !== this._startTime && (this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1), this;
            }, Object.defineProperty(s3.default.OscillatorNode.prototype, "type", {
                get: function() {
                    return this._oscillator.type;
                },
                set: function(t11) {
                    this._oscillator.type = t11;
                }
            }), s3.default.OscillatorNode.prototype.dispose = function() {
                return this._wasDisposed || (this._wasDisposed = !0, this.context.clearTimeout(this._timeout), s3.default.AudioNode.prototype.dispose.call(this), this.onended = null, this._oscillator.disconnect(), this._oscillator = null, this._gainNode.dispose(), this._gainNode = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null), this;
            };
            e3.default = s3.default.OscillatorNode;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(11), i5(6), i5(57), i5(32);
            s3.default.Player = function(t11) {
                var e21;
                t11 instanceof s3.default.Buffer && t11.loaded ? (t11 = t11.get(), e21 = s3.default.Player.defaults) : e21 = s3.default.defaults(arguments, [
                    "url",
                    "onload"
                ], s3.default.Player), s3.default.Source.call(this, e21), this.autostart = e21.autostart, this._buffer = new s3.default.Buffer({
                    url: e21.url,
                    onload: this._onload.bind(this, e21.onload),
                    reverse: e21.reverse
                }), t11 instanceof AudioBuffer && this._buffer.set(t11), this._loop = e21.loop, this._loopStart = e21.loopStart, this._loopEnd = e21.loopEnd, this._playbackRate = e21.playbackRate, this._activeSources = [], this.fadeIn = e21.fadeIn, this.fadeOut = e21.fadeOut;
            }, s3.default.extend(s3.default.Player, s3.default.Source), s3.default.Player.defaults = {
                onload: s3.default.noOp,
                playbackRate: 1,
                loop: !1,
                autostart: !1,
                loopStart: 0,
                loopEnd: 0,
                reverse: !1,
                fadeIn: 0,
                fadeOut: 0
            }, s3.default.Player.prototype.load = function(t11, e21) {
                return this._buffer.load(t11, this._onload.bind(this, e21));
            }, s3.default.Player.prototype._onload = function(t11) {
                (t11 = s3.default.defaultArg(t11, s3.default.noOp))(this), this.autostart && this.start();
            }, s3.default.Player.prototype._onSourceEnd = function(t11) {
                var e21 = this._activeSources.indexOf(t11);
                this._activeSources.splice(e21, 1), 0 !== this._activeSources.length || this._synced || this._state.setStateAtTime(s3.default.State.Stopped, s3.default.now());
            }, s3.default.Player.prototype._start = function(t11, e21, i26) {
                e21 = this._loop ? s3.default.defaultArg(e21, this._loopStart) : s3.default.defaultArg(e21, 0), e21 = this.toSeconds(e21), this._synced && (e21 *= this._playbackRate);
                var n12 = s3.default.defaultArg(i26, Math.max(this._buffer.duration - e21, 0));
                n12 = this.toSeconds(n12), n12 /= this._playbackRate, t11 = this.toSeconds(t11);
                var o = new s3.default.BufferSource({
                    buffer: this._buffer,
                    loop: this._loop,
                    loopStart: this._loopStart,
                    loopEnd: this._loopEnd,
                    onended: this._onSourceEnd.bind(this),
                    playbackRate: this._playbackRate,
                    fadeIn: this.fadeIn,
                    fadeOut: this.fadeOut
                }).connect(this.output);
                return this._loop || this._synced || this._state.setStateAtTime(s3.default.State.Stopped, t11 + n12), this._activeSources.push(o), this._loop && s3.default.isUndef(i26) ? o.start(t11, e21) : o.start(t11, e21, n12 - this.toSeconds(this.fadeOut)), this;
            }, s3.default.Player.prototype._stop = function(t11) {
                return t11 = this.toSeconds(t11), this._activeSources.forEach(function(e21) {
                    e21.stop(t11);
                }), this;
            }, s3.default.Player.prototype.restart = function(t11, e21, i26) {
                return this._stop(t11), this._start(t11, e21, i26), this;
            }, s3.default.Player.prototype.seek = function(t11, e21) {
                return e21 = this.toSeconds(e21), this._state.getValueAtTime(e21) === s3.default.State.Started && (t11 = this.toSeconds(t11), this._stop(e21), this._start(e21, t11)), this;
            }, s3.default.Player.prototype.setLoopPoints = function(t11, e21) {
                return this.loopStart = t11, this.loopEnd = e21, this;
            }, Object.defineProperty(s3.default.Player.prototype, "loopStart", {
                get: function() {
                    return this._loopStart;
                },
                set: function(t11) {
                    this._loopStart = t11, this._activeSources.forEach(function(e21) {
                        e21.loopStart = t11;
                    });
                }
            }), Object.defineProperty(s3.default.Player.prototype, "loopEnd", {
                get: function() {
                    return this._loopEnd;
                },
                set: function(t11) {
                    this._loopEnd = t11, this._activeSources.forEach(function(e21) {
                        e21.loopEnd = t11;
                    });
                }
            }), Object.defineProperty(s3.default.Player.prototype, "buffer", {
                get: function() {
                    return this._buffer;
                },
                set: function(t11) {
                    this._buffer.set(t11);
                }
            }), Object.defineProperty(s3.default.Player.prototype, "loop", {
                get: function() {
                    return this._loop;
                },
                set: function(t11) {
                    if (this._loop !== t11 && (this._loop = t11, this._activeSources.forEach(function(e21) {
                        e21.loop = t11;
                    }), t11)) {
                        var e21 = this._state.getNextState(s3.default.State.Stopped, this.now());
                        e21 && this._state.cancel(e21.time);
                    }
                }
            }), Object.defineProperty(s3.default.Player.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate;
                },
                set: function(t11) {
                    this._playbackRate = t11;
                    var e22 = this.now(), i26 = this._state.getNextState(s3.default.State.Stopped, e22);
                    i26 && this._state.cancel(i26.time), this._activeSources.forEach(function(i27) {
                        i27.cancelStop(), i27.playbackRate.setValueAtTime(t11, e22);
                    });
                }
            }), Object.defineProperty(s3.default.Player.prototype, "reverse", {
                get: function() {
                    return this._buffer.reverse;
                },
                set: function(t11) {
                    this._buffer.reverse = t11;
                }
            }), Object.defineProperty(s3.default.Player.prototype, "loaded", {
                get: function() {
                    return this._buffer.loaded;
                }
            }), s3.default.Player.prototype.dispose = function() {
                return this._activeSources.forEach(function(t11) {
                    t11.dispose();
                }), this._activeSources = null, s3.default.Source.prototype.dispose.call(this), this._buffer.dispose(), this._buffer = null, this;
            }, e3.default = s3.default.Player;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(31), i5(41), i5(37), i5(2), i5(9), i5(25);
            s3.default.MonoSynth = function(t11) {
                t11 = s3.default.defaultArg(t11, s3.default.MonoSynth.defaults), s3.default.Monophonic.call(this, t11), this.oscillator = new s3.default.OmniOscillator(t11.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.filter = new s3.default.Filter(t11.filter), this.filter.frequency.value = 5000, this.filterEnvelope = new s3.default.FrequencyEnvelope(t11.filterEnvelope), this.envelope = new s3.default.AmplitudeEnvelope(t11.envelope), this.oscillator.chain(this.filter, this.envelope, this.output), this.filterEnvelope.connect(this.filter.frequency), this._readOnly([
                    "oscillator",
                    "frequency",
                    "detune",
                    "filter",
                    "filterEnvelope",
                    "envelope"
                ]);
            }, s3.default.extend(s3.default.MonoSynth, s3.default.Monophonic), s3.default.MonoSynth.defaults = {
                frequency: "C4",
                detune: 0,
                oscillator: {
                    type: "square"
                },
                filter: {
                    Q: 6,
                    type: "lowpass",
                    rolloff: -24
                },
                envelope: {
                    attack: 0.005,
                    decay: 0.1,
                    sustain: 0.9,
                    release: 1
                },
                filterEnvelope: {
                    attack: 0.06,
                    decay: 0.2,
                    sustain: 0.5,
                    release: 2,
                    baseFrequency: 200,
                    octaves: 7,
                    exponent: 2
                }
            }, s3.default.MonoSynth.prototype._triggerEnvelopeAttack = function(t11, e22) {
                return t11 = this.toSeconds(t11), this.envelope.triggerAttack(t11, e22), this.filterEnvelope.triggerAttack(t11), this.oscillator.start(t11), 0 === this.envelope.sustain && this.oscillator.stop(t11 + this.envelope.attack + this.envelope.decay), this;
            }, s3.default.MonoSynth.prototype._triggerEnvelopeRelease = function(t11) {
                return this.envelope.triggerRelease(t11), this.filterEnvelope.triggerRelease(t11), this.oscillator.stop(t11 + this.envelope.release), this;
            }, s3.default.MonoSynth.prototype.dispose = function() {
                return s3.default.Monophonic.prototype.dispose.call(this), this._writable([
                    "oscillator",
                    "frequency",
                    "detune",
                    "filter",
                    "filterEnvelope",
                    "envelope"
                ]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.filterEnvelope.dispose(), this.filterEnvelope = null, this.filter.dispose(), this.filter = null, this.frequency = null, this.detune = null, this;
            }, e3.default = s3.default.MonoSynth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(6), i5(17), i5(5), i5(3);
            s3.default.FatOscillator = function() {
                var t11 = s3.default.defaults(arguments, [
                    "frequency",
                    "type",
                    "spread"
                ], s3.default.FatOscillator);
                s3.default.Source.call(this, t11), this.frequency = new s3.default.Signal(t11.frequency, s3.default.Type.Frequency), this.detune = new s3.default.Signal(t11.detune, s3.default.Type.Cents), this._oscillators = [], this._spread = t11.spread, this._type = t11.type, this._phase = t11.phase, this._partials = t11.partials, this._partialCount = t11.partialCount, this.count = t11.count, this._readOnly([
                    "frequency",
                    "detune"
                ]);
            }, s3.default.extend(s3.default.FatOscillator, s3.default.Source), s3.default.FatOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                spread: 20,
                count: 3,
                type: "sawtooth",
                partials: [],
                partialCount: 0
            }, s3.default.FatOscillator.prototype._start = function(t11) {
                t11 = this.toSeconds(t11), this._forEach(function(e22) {
                    e22.start(t11);
                });
            }, s3.default.FatOscillator.prototype._stop = function(t11) {
                t11 = this.toSeconds(t11), this._forEach(function(e22) {
                    e22.stop(t11);
                });
            }, s3.default.FatOscillator.prototype.restart = function(t11) {
                t11 = this.toSeconds(t11), this._forEach(function(e22) {
                    e22.restart(t11);
                });
            }, s3.default.FatOscillator.prototype._forEach = function(t11) {
                for(var e22 = 0; e22 < this._oscillators.length; e22++)t11.call(this, this._oscillators[e22], e22);
            }, Object.defineProperty(s3.default.FatOscillator.prototype, "type", {
                get: function() {
                    return this._type;
                },
                set: function(t11) {
                    this._type = t11, this._forEach(function(e22) {
                        e22.type = t11;
                    });
                }
            }), Object.defineProperty(s3.default.FatOscillator.prototype, "spread", {
                get: function() {
                    return this._spread;
                },
                set: function(t11) {
                    if (this._spread = t11, this._oscillators.length > 1) {
                        var e22 = -t11 / 2, i26 = t11 / (this._oscillators.length - 1);
                        this._forEach(function(t12, s6) {
                            t12.detune.value = e22 + i26 * s6;
                        });
                    }
                }
            }), Object.defineProperty(s3.default.FatOscillator.prototype, "count", {
                get: function() {
                    return this._oscillators.length;
                },
                set: function(t11) {
                    if (t11 = Math.max(t11, 1), this._oscillators.length !== t11) {
                        this._forEach(function(t12) {
                            t12.dispose();
                        }), this._oscillators = [];
                        for(var e23 = 0; e23 < t11; e23++){
                            var i27 = new s3.default.Oscillator;
                            this.type === s3.default.Oscillator.Type.Custom ? i27.partials = this._partials : i27.type = this._type, i27.partialCount = this._partialCount, i27.phase = this._phase + e23 / t11 * 360, i27.volume.value = -6 - 1.1 * t11, this.frequency.connect(i27.frequency), this.detune.connect(i27.detune), i27.connect(this.output), this._oscillators[e23] = i27;
                        }
                        this.spread = this._spread, this.state === s3.default.State.Started && this._forEach(function(t12) {
                            t12.start();
                        });
                    }
                }
            }), Object.defineProperty(s3.default.FatOscillator.prototype, "phase", {
                get: function() {
                    return this._phase;
                },
                set: function(t11) {
                    this._phase = t11, this._forEach(function(e24) {
                        e24.phase = t11;
                    });
                }
            }), Object.defineProperty(s3.default.FatOscillator.prototype, "baseType", {
                get: function() {
                    return this._oscillators[0].baseType;
                },
                set: function(t11) {
                    this._forEach(function(e24) {
                        e24.baseType = t11;
                    }), this._type = this._oscillators[0].type;
                }
            }), Object.defineProperty(s3.default.FatOscillator.prototype, "partials", {
                get: function() {
                    return this._oscillators[0].partials;
                },
                set: function(t11) {
                    this._partials = t11, this._type = s3.default.Oscillator.Type.Custom, this._forEach(function(e24) {
                        e24.partials = t11;
                    });
                }
            }), Object.defineProperty(s3.default.FatOscillator.prototype, "partialCount", {
                get: function() {
                    return this._oscillators[0].partialCount;
                },
                set: function(t11) {
                    this._partialCount = t11, this._forEach(function(e24) {
                        e24.partialCount = t11;
                    }), this._type = this._oscillators[0].type;
                }
            }), s3.default.FatOscillator.prototype.dispose = function() {
                return s3.default.Source.prototype.dispose.call(this), this._writable([
                    "frequency",
                    "detune"
                ]), this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this._forEach(function(t11) {
                    t11.dispose();
                }), this._oscillators = null, this._partials = null, this;
            }, e3.default = s3.default.FatOscillator;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(6), i5(17), i5(5), i5(3), i5(22);
            s3.default.AMOscillator = function() {
                var t11 = s3.default.defaults(arguments, [
                    "frequency",
                    "type",
                    "modulationType"
                ], s3.default.AMOscillator);
                s3.default.Source.call(this, t11), this._carrier = new s3.default.Oscillator(t11.frequency, t11.type), this.frequency = this._carrier.frequency, this.detune = this._carrier.detune, this.detune.value = t11.detune, this._modulator = new s3.default.Oscillator(t11.frequency, t11.modulationType), this._modulationScale = new s3.default.AudioToGain, this.harmonicity = new s3.default.Multiply(t11.harmonicity), this.harmonicity.units = s3.default.Type.Positive, this._modulationNode = new s3.default.Gain(0), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.connect(this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), this.phase = t11.phase, this._readOnly([
                    "frequency",
                    "detune",
                    "harmonicity"
                ]);
            }, s3.default.extend(s3.default.AMOscillator, s3.default.Oscillator), s3.default.AMOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                type: "sine",
                modulationType: "square",
                harmonicity: 1
            }, s3.default.AMOscillator.prototype._start = function(t11) {
                this._modulator.start(t11), this._carrier.start(t11);
            }, s3.default.AMOscillator.prototype._stop = function(t11) {
                this._modulator.stop(t11), this._carrier.stop(t11);
            }, s3.default.AMOscillator.prototype.restart = function(t11) {
                this._modulator.restart(t11), this._carrier.restart(t11);
            }, Object.defineProperty(s3.default.AMOscillator.prototype, "type", {
                get: function() {
                    return this._carrier.type;
                },
                set: function(t11) {
                    this._carrier.type = t11;
                }
            }), Object.defineProperty(s3.default.AMOscillator.prototype, "baseType", {
                get: function() {
                    return this._carrier.baseType;
                },
                set: function(t11) {
                    this._carrier.baseType = t11;
                }
            }), Object.defineProperty(s3.default.AMOscillator.prototype, "partialCount", {
                get: function() {
                    return this._carrier.partialCount;
                },
                set: function(t11) {
                    this._carrier.partialCount = t11;
                }
            }), Object.defineProperty(s3.default.AMOscillator.prototype, "modulationType", {
                get: function() {
                    return this._modulator.type;
                },
                set: function(t11) {
                    this._modulator.type = t11;
                }
            }), Object.defineProperty(s3.default.AMOscillator.prototype, "phase", {
                get: function() {
                    return this._carrier.phase;
                },
                set: function(t11) {
                    this._carrier.phase = t11, this._modulator.phase = t11;
                }
            }), Object.defineProperty(s3.default.AMOscillator.prototype, "partials", {
                get: function() {
                    return this._carrier.partials;
                },
                set: function(t11) {
                    this._carrier.partials = t11;
                }
            }), s3.default.AMOscillator.prototype.dispose = function() {
                return s3.default.Source.prototype.dispose.call(this), this._writable([
                    "frequency",
                    "detune",
                    "harmonicity"
                ]), this.frequency = null, this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this._modulationNode.dispose(), this._modulationNode = null, this._modulationScale.dispose(), this._modulationScale = null, this;
            }, e3.default = s3.default.AMOscillator;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(6), i5(50), i5(17), i5(5);
            s3.default.PWMOscillator = function() {
                var t11 = s3.default.defaults(arguments, [
                    "frequency",
                    "modulationFrequency"
                ], s3.default.PWMOscillator);
                s3.default.Source.call(this, t11), this._pulse = new s3.default.PulseOscillator(t11.modulationFrequency), this._pulse._sawtooth.type = "sine", this._modulator = new s3.default.Oscillator({
                    frequency: t11.frequency,
                    detune: t11.detune,
                    phase: t11.phase
                }), this._scale = new s3.default.Multiply(2), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this.modulationFrequency = this._pulse.frequency, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), this._readOnly([
                    "modulationFrequency",
                    "frequency",
                    "detune"
                ]);
            }, s3.default.extend(s3.default.PWMOscillator, s3.default.Source), s3.default.PWMOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                modulationFrequency: 0.4
            }, s3.default.PWMOscillator.prototype._start = function(t11) {
                t11 = this.toSeconds(t11), this._modulator.start(t11), this._pulse.start(t11);
            }, s3.default.PWMOscillator.prototype._stop = function(t11) {
                t11 = this.toSeconds(t11), this._modulator.stop(t11), this._pulse.stop(t11);
            }, s3.default.PWMOscillator.prototype.restart = function(t11) {
                this._modulator.restart(t11), this._pulse.restart(t11);
            }, Object.defineProperty(s3.default.PWMOscillator.prototype, "type", {
                get: function() {
                    return "pwm";
                }
            }), Object.defineProperty(s3.default.PWMOscillator.prototype, "baseType", {
                get: function() {
                    return "pwm";
                }
            }), Object.defineProperty(s3.default.PWMOscillator.prototype, "partials", {
                get: function() {
                    return [];
                }
            }), Object.defineProperty(s3.default.PWMOscillator.prototype, "phase", {
                get: function() {
                    return this._modulator.phase;
                },
                set: function(t11) {
                    this._modulator.phase = t11;
                }
            }), s3.default.PWMOscillator.prototype.dispose = function() {
                return s3.default.Source.prototype.dispose.call(this), this._pulse.dispose(), this._pulse = null, this._scale.dispose(), this._scale = null, this._modulator.dispose(), this._modulator = null, this._writable([
                    "modulationFrequency",
                    "frequency",
                    "detune"
                ]), this.frequency = null, this.detune = null, this.modulationFrequency = null, this;
            }, e3.default = s3.default.PWMOscillator;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(51), i5(4), i5(16);
            s3.default.Part = function() {
                var t11 = s3.default.defaults(arguments, [
                    "callback",
                    "events"
                ], s3.default.Part);
                s3.default.Event.call(this, t11), this._events = [];
                for(var e24 = 0; e24 < t11.events.length; e24++)Array.isArray(t11.events[e24]) ? this.add(t11.events[e24][0], t11.events[e24][1]) : this.add(t11.events[e24]);
            }, s3.default.extend(s3.default.Part, s3.default.Event), s3.default.Part.defaults = {
                callback: s3.default.noOp,
                loop: !1,
                loopEnd: "1m",
                loopStart: 0,
                playbackRate: 1,
                probability: 1,
                humanize: !1,
                mute: !1,
                events: []
            }, s3.default.Part.prototype.start = function(t11, e24) {
                var i28 = this.toTicks(t11);
                return this._state.getValueAtTime(i28) !== s3.default.State.Started && (e24 = this._loop ? s3.default.defaultArg(e24, this._loopStart) : s3.default.defaultArg(e24, 0), e24 = this.toTicks(e24), this._state.add({
                    state: s3.default.State.Started,
                    time: i28,
                    offset: e24
                }), this._forEach(function(t12) {
                    this._startNote(t12, i28, e24);
                })), this;
            }, s3.default.Part.prototype._startNote = function(t11, e24, i28) {
                e24 -= i28, this._loop ? t11.startOffset >= this._loopStart && t11.startOffset < this._loopEnd ? (t11.startOffset < i28 && (e24 += this._getLoopDuration()), t11.start(s3.default.Ticks(e24))) : t11.startOffset < this._loopStart && t11.startOffset >= i28 && (t11.loop = !1, t11.start(s3.default.Ticks(e24))) : t11.startOffset >= i28 && t11.start(s3.default.Ticks(e24));
            }, Object.defineProperty(s3.default.Part.prototype, "startOffset", {
                get: function() {
                    return this._startOffset;
                },
                set: function(t11) {
                    this._startOffset = t11, this._forEach(function(t12) {
                        t12.startOffset += this._startOffset;
                    });
                }
            }), s3.default.Part.prototype.stop = function(t11) {
                var e24 = this.toTicks(t11);
                return this._state.cancel(e24), this._state.setStateAtTime(s3.default.State.Stopped, e24), this._forEach(function(e25) {
                    e25.stop(t11);
                }), this;
            }, s3.default.Part.prototype.at = function(t11, e24) {
                t11 = s3.default.TransportTime(t11);
                for(var i28 = s3.default.Ticks(1).toSeconds(), n12 = 0; n12 < this._events.length; n12++){
                    var o = this._events[n12];
                    if (Math.abs(t11.toTicks() - o.startOffset) < i28) return s3.default.isDefined(e24) && (o.value = e24), o;
                }
                return s3.default.isDefined(e24) ? (this.add(t11, e24), this._events[this._events.length - 1]) : null;
            }, s3.default.Part.prototype.add = function(t11, e24) {
                var i28;
                return t11.hasOwnProperty("time") && (t11 = (e24 = t11).time), t11 = this.toTicks(t11), e24 instanceof s3.default.Event ? (i28 = e24).callback = this._tick.bind(this) : i28 = new s3.default.Event({
                    callback: this._tick.bind(this),
                    value: e24
                }), i28.startOffset = t11, i28.set({
                    loopEnd: this.loopEnd,
                    loopStart: this.loopStart,
                    loop: this.loop,
                    humanize: this.humanize,
                    playbackRate: this.playbackRate,
                    probability: this.probability
                }), this._events.push(i28), this._restartEvent(i28), this;
            }, s3.default.Part.prototype._restartEvent = function(t11) {
                this._state.forEach((function(e24) {
                    e24.state === s3.default.State.Started ? this._startNote(t11, e24.time, e24.offset) : t11.stop(s3.default.Ticks(e24.time));
                }).bind(this));
            }, s3.default.Part.prototype.remove = function(t11, e24) {
                t11.hasOwnProperty("time") && (t11 = (e24 = t11).time), t11 = this.toTicks(t11);
                for(var i28 = this._events.length - 1; i28 >= 0; i28--){
                    var n12 = this._events[i28];
                    n12.startOffset === t11 && (s3.default.isUndef(e24) || s3.default.isDefined(e24) && n12.value === e24) && (this._events.splice(i28, 1), n12.dispose());
                }
                return this;
            }, s3.default.Part.prototype.removeAll = function() {
                return this._forEach(function(t11) {
                    t11.dispose();
                }), this._events = [], this;
            }, s3.default.Part.prototype.cancel = function(t11) {
                return this._forEach(function(e24) {
                    e24.cancel(t11);
                }), this._state.cancel(this.toTicks(t11)), this;
            }, s3.default.Part.prototype._forEach = function(t11, e24) {
                if (this._events) {
                    e24 = s3.default.defaultArg(e24, this);
                    for(var i28 = this._events.length - 1; i28 >= 0; i28--){
                        var n13 = this._events[i28];
                        n13 instanceof s3.default.Part ? n13._forEach(t11, e24) : t11.call(e24, n13);
                    }
                }
                return this;
            }, s3.default.Part.prototype._setAll = function(t11, e24) {
                this._forEach(function(i29) {
                    i29[t11] = e24;
                });
            }, s3.default.Part.prototype._tick = function(t11, e24) {
                this.mute || this.callback(t11, e24);
            }, s3.default.Part.prototype._testLoopBoundries = function(t11) {
                this._loop && (t11.startOffset < this._loopStart || t11.startOffset >= this._loopEnd) ? t11.cancel(0) : t11.state === s3.default.State.Stopped && this._restartEvent(t11);
            }, Object.defineProperty(s3.default.Part.prototype, "probability", {
                get: function() {
                    return this._probability;
                },
                set: function(t11) {
                    this._probability = t11, this._setAll("probability", t11);
                }
            }), Object.defineProperty(s3.default.Part.prototype, "humanize", {
                get: function() {
                    return this._humanize;
                },
                set: function(t11) {
                    this._humanize = t11, this._setAll("humanize", t11);
                }
            }), Object.defineProperty(s3.default.Part.prototype, "loop", {
                get: function() {
                    return this._loop;
                },
                set: function(t11) {
                    this._loop = t11, this._forEach(function(e24) {
                        e24._loopStart = this._loopStart, e24._loopEnd = this._loopEnd, e24.loop = t11, this._testLoopBoundries(e24);
                    });
                }
            }), Object.defineProperty(s3.default.Part.prototype, "loopEnd", {
                get: function() {
                    return s3.default.Ticks(this._loopEnd).toSeconds();
                },
                set: function(t11) {
                    this._loopEnd = this.toTicks(t11), this._loop && this._forEach(function(e24) {
                        e24.loopEnd = t11, this._testLoopBoundries(e24);
                    });
                }
            }), Object.defineProperty(s3.default.Part.prototype, "loopStart", {
                get: function() {
                    return s3.default.Ticks(this._loopStart).toSeconds();
                },
                set: function(t11) {
                    this._loopStart = this.toTicks(t11), this._loop && this._forEach(function(t12) {
                        t12.loopStart = this.loopStart, this._testLoopBoundries(t12);
                    });
                }
            }), Object.defineProperty(s3.default.Part.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate;
                },
                set: function(t11) {
                    this._playbackRate = t11, this._setAll("playbackRate", t11);
                }
            }), Object.defineProperty(s3.default.Part.prototype, "length", {
                get: function() {
                    return this._events.length;
                }
            }), s3.default.Part.prototype.dispose = function() {
                return s3.default.Event.prototype.dispose.call(this), this.removeAll(), this.callback = null, this._events = null, this;
            }, e3.default = s3.default.Part;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(51);
            s3.default.Loop = function() {
                var t11 = s3.default.defaults(arguments, [
                    "callback",
                    "interval"
                ], s3.default.Loop);
                s3.default.call(this), this._event = new s3.default.Event({
                    callback: this._tick.bind(this),
                    loop: !0,
                    loopEnd: t11.interval,
                    playbackRate: t11.playbackRate,
                    probability: t11.probability
                }), this.callback = t11.callback, this.iterations = t11.iterations;
            }, s3.default.extend(s3.default.Loop), s3.default.Loop.defaults = {
                interval: "4n",
                callback: s3.default.noOp,
                playbackRate: 1,
                iterations: 1 / 0,
                probability: !0,
                mute: !1
            }, s3.default.Loop.prototype.start = function(t11) {
                return this._event.start(t11), this;
            }, s3.default.Loop.prototype.stop = function(t11) {
                return this._event.stop(t11), this;
            }, s3.default.Loop.prototype.cancel = function(t11) {
                return this._event.cancel(t11), this;
            }, s3.default.Loop.prototype._tick = function(t11) {
                this.callback(t11);
            }, Object.defineProperty(s3.default.Loop.prototype, "state", {
                get: function() {
                    return this._event.state;
                }
            }), Object.defineProperty(s3.default.Loop.prototype, "progress", {
                get: function() {
                    return this._event.progress;
                }
            }), Object.defineProperty(s3.default.Loop.prototype, "interval", {
                get: function() {
                    return this._event.loopEnd;
                },
                set: function(t11) {
                    this._event.loopEnd = t11;
                }
            }), Object.defineProperty(s3.default.Loop.prototype, "playbackRate", {
                get: function() {
                    return this._event.playbackRate;
                },
                set: function(t11) {
                    this._event.playbackRate = t11;
                }
            }), Object.defineProperty(s3.default.Loop.prototype, "humanize", {
                get: function() {
                    return this._event.humanize;
                },
                set: function(t11) {
                    this._event.humanize = t11;
                }
            }), Object.defineProperty(s3.default.Loop.prototype, "probability", {
                get: function() {
                    return this._event.probability;
                },
                set: function(t11) {
                    this._event.probability = t11;
                }
            }), Object.defineProperty(s3.default.Loop.prototype, "mute", {
                get: function() {
                    return this._event.mute;
                },
                set: function(t11) {
                    this._event.mute = t11;
                }
            }), Object.defineProperty(s3.default.Loop.prototype, "iterations", {
                get: function() {
                    return !0 === this._event.loop ? 1 / 0 : this._event.loop;
                },
                set: function(t11) {
                    this._event.loop = t11 === 1 / 0 || t11;
                }
            }), s3.default.Loop.prototype.dispose = function() {
                this._event.dispose(), this._event = null, this.callback = null;
            }, e3.default = s3.default.Loop;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(15), i5(33);
            s3.default.StereoXFeedbackEffect = function() {
                var t11 = s3.default.defaults(arguments, [
                    "feedback"
                ], s3.default.FeedbackEffect);
                s3.default.StereoEffect.call(this, t11), this.feedback = new s3.default.Signal(t11.feedback, s3.default.Type.NormalRange), this._feedbackLR = new s3.default.Gain, this._feedbackRL = new s3.default.Gain, this.effectReturnL.chain(this._feedbackLR, this.effectSendR), this.effectReturnR.chain(this._feedbackRL, this.effectSendL), this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain), this._readOnly([
                    "feedback"
                ]);
            }, s3.default.extend(s3.default.StereoXFeedbackEffect, s3.default.StereoEffect), s3.default.StereoXFeedbackEffect.prototype.dispose = function() {
                return s3.default.StereoEffect.prototype.dispose.call(this), this._writable([
                    "feedback"
                ]), this.feedback.dispose(), this.feedback = null, this._feedbackLR.dispose(), this._feedbackLR = null, this._feedbackRL.dispose(), this._feedbackRL = null, this;
            }, e3.default = s3.default.StereoXFeedbackEffect;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(8), i5(53), i5(52);
            s3.default.MidSideEffect = function() {
                s3.default.Effect.apply(this, arguments), this._midSideSplit = new s3.default.MidSideSplit, this._midSideMerge = new s3.default.MidSideMerge, this.midSend = this._midSideSplit.mid, this.sideSend = this._midSideSplit.side, this.midReturn = this._midSideMerge.mid, this.sideReturn = this._midSideMerge.side, this.effectSend.connect(this._midSideSplit), this._midSideMerge.connect(this.effectReturn);
            }, s3.default.extend(s3.default.MidSideEffect, s3.default.Effect), s3.default.MidSideEffect.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this.midSend = null, this.sideSend = null, this.midReturn = null, this.sideReturn = null, this;
            }, e3.default = s3.default.MidSideEffect;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(11), i5(8);
            s3.default.Convolver = function() {
                var t11 = s3.default.defaults(arguments, [
                    "url",
                    "onload"
                ], s3.default.Convolver);
                s3.default.Effect.call(this, t11), this._convolver = this.context.createConvolver(), this._buffer = new s3.default.Buffer(t11.url, (function(e24) {
                    this.buffer = e24.get(), t11.onload();
                }).bind(this)), this._buffer.loaded && (this.buffer = this._buffer), this.normalize = t11.normalize, this.connectEffect(this._convolver);
            }, s3.default.extend(s3.default.Convolver, s3.default.Effect), s3.default.Convolver.defaults = {
                onload: s3.default.noOp,
                normalize: !0
            }, Object.defineProperty(s3.default.Convolver.prototype, "buffer", {
                get: function() {
                    return this._buffer.length ? this._buffer : null;
                },
                set: function(t11) {
                    this._buffer.set(t11), this._convolver.buffer && (this.effectSend.disconnect(), this._convolver.disconnect(), this._convolver = this.context.createConvolver(), this.connectEffect(this._convolver)), this._convolver.buffer = this._buffer.get();
                }
            }), Object.defineProperty(s3.default.Convolver.prototype, "normalize", {
                get: function() {
                    return this._convolver.normalize;
                },
                set: function(t11) {
                    this._convolver.normalize = t11;
                }
            }), s3.default.Convolver.prototype.load = function(t11, e24) {
                return this._buffer.load(t11, (function(t12) {
                    this.buffer = t12, e24 && e24();
                }).bind(this));
            }, s3.default.Convolver.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this._buffer.dispose(), this._buffer = null, this._convolver.disconnect(), this._convolver = null, this;
            }, e3.default = s3.default.Convolver;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(7), i5(5), i5(13);
            s3.default.Modulo = function(t11) {
                s3.default.SignalBase.call(this), this.createInsOuts(1, 0), this._shaper = new s3.default.WaveShaper(Math.pow(2, 16)), this._multiply = new s3.default.Multiply, this._subtract = this.output = new s3.default.Subtract, this._modSignal = new s3.default.Signal(t11), s3.default.connect(this.input, this._shaper), s3.default.connect(this.input, this._subtract), this._modSignal.connect(this._multiply, 0, 0), this._shaper.connect(this._multiply, 0, 1), this._multiply.connect(this._subtract, 0, 1), this._setWaveShaper(t11);
            }, s3.default.extend(s3.default.Modulo, s3.default.SignalBase), s3.default.Modulo.prototype._setWaveShaper = function(t11) {
                this._shaper.setMap(function(e24) {
                    return Math.floor((e24 + 0.0001) / t11);
                });
            }, Object.defineProperty(s3.default.Modulo.prototype, "value", {
                get: function() {
                    return this._modSignal.value;
                },
                set: function(t11) {
                    this._modSignal.value = t11, this._setWaveShaper(t11);
                }
            }), s3.default.Modulo.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this._multiply.dispose(), this._multiply = null, this._subtract.dispose(), this._subtract = null, this._modSignal.dispose(), this._modSignal = null, this;
            }, e3.default = s3.default.Modulo;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(20), i5(92);
            s3.default.OfflineContext = function(t11, e24, i29) {
                var n14 = new OfflineAudioContext(t11, e24 * i29, i29);
                s3.default.Context.call(this, {
                    context: n14,
                    clockSource: "offline",
                    lookAhead: 0,
                    updateInterval: 128 / i29
                }), this._duration = e24, this._currentTime = 0;
            }, s3.default.extend(s3.default.OfflineContext, s3.default.Context), s3.default.OfflineContext.prototype.now = function() {
                return this._currentTime;
            }, s3.default.OfflineContext.prototype.resume = function() {
                return Promise.resolve();
            }, s3.default.OfflineContext.prototype.render = function() {
                for(; this._duration - this._currentTime >= 0;)this.emit("tick"), this._currentTime += 0.005;
                return this._context.startRendering();
            }, s3.default.OfflineContext.prototype.close = function() {
                return this._context = null, Promise.resolve();
            }, e3.default = s3.default.OfflineContext;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(16), i5(11), i5(76), i5(40);
            s3.default.Offline = function(t11, e24) {
                var i29 = s3.default.context.sampleRate, n14 = s3.default.context, o = new s3.default.OfflineContext(2, e24, i29);
                s3.default.context = o;
                var a = t11(s3.default.Transport), r = null;
                return r = a && s3.default.isFunction(a.then) ? a.then(function() {
                    return o.render();
                }) : o.render(), s3.default.context = n14, r.then(function(t12) {
                    return new s3.default.Buffer(t12);
                });
            }, e3.default = s3.default.Offline;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(11);
            s3.default.Buffers = function(t11) {
                var e24 = Array.prototype.slice.call(arguments);
                e24.shift();
                var i29 = s3.default.defaults(e24, [
                    "onload",
                    "baseUrl"
                ], s3.default.Buffers);
                for(var n14 in s3.default.call(this), this._buffers = {
                }, this.baseUrl = i29.baseUrl, this._loadingCount = 0, t11)this._loadingCount++, this.add(n14, t11[n14], this._bufferLoaded.bind(this, i29.onload));
            }, s3.default.extend(s3.default.Buffers), s3.default.Buffers.defaults = {
                onload: s3.default.noOp,
                baseUrl: ""
            }, s3.default.Buffers.prototype.has = function(t11) {
                return this._buffers.hasOwnProperty(t11);
            }, s3.default.Buffers.prototype.get = function(t11) {
                if (this.has(t11)) return this._buffers[t11];
                throw new Error("Tone.Buffers: no buffer named " + t11);
            }, s3.default.Buffers.prototype._bufferLoaded = function(t11) {
                this._loadingCount--, 0 === this._loadingCount && t11 && t11(this);
            }, Object.defineProperty(s3.default.Buffers.prototype, "loaded", {
                get: function() {
                    var t11 = !0;
                    for(var e24 in this._buffers){
                        var i29 = this.get(e24);
                        t11 = t11 && i29.loaded;
                    }
                    return t11;
                }
            }), s3.default.Buffers.prototype.add = function(t11, e24, i30) {
                return i30 = s3.default.defaultArg(i30, s3.default.noOp), e24 instanceof s3.default.Buffer ? (this._buffers[t11] = e24, i30(this)) : e24 instanceof AudioBuffer ? (this._buffers[t11] = new s3.default.Buffer(e24), i30(this)) : s3.default.isString(e24) && (this._buffers[t11] = new s3.default.Buffer(this.baseUrl + e24, i30)), this;
            }, s3.default.Buffers.prototype.dispose = function() {
                for(var t11 in s3.default.prototype.dispose.call(this), this._buffers)this._buffers[t11].dispose();
                return this._buffers = null, this;
            }, e3.default = s3.default.Buffers;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            s3.default.CtrlPattern = function() {
                var t11 = s3.default.defaults(arguments, [
                    "values",
                    "type"
                ], s3.default.CtrlPattern);
                s3.default.call(this), this.values = t11.values, this.index = 0, this._type = null, this._shuffled = null, this._direction = null, this.type = t11.type;
            }, s3.default.extend(s3.default.CtrlPattern), s3.default.CtrlPattern.Type = {
                Up: "up",
                Down: "down",
                UpDown: "upDown",
                DownUp: "downUp",
                AlternateUp: "alternateUp",
                AlternateDown: "alternateDown",
                Random: "random",
                RandomWalk: "randomWalk",
                RandomOnce: "randomOnce"
            }, s3.default.CtrlPattern.defaults = {
                type: s3.default.CtrlPattern.Type.Up,
                values: []
            }, Object.defineProperty(s3.default.CtrlPattern.prototype, "value", {
                get: function() {
                    if (0 !== this.values.length) {
                        if (1 === this.values.length) return this.values[0];
                        this.index = Math.min(this.index, this.values.length - 1);
                        var t11 = this.values[this.index];
                        return this.type === s3.default.CtrlPattern.Type.RandomOnce && (this.values.length !== this._shuffled.length && this._shuffleValues(), t11 = this.values[this._shuffled[this.index]]), t11;
                    }
                }
            }), Object.defineProperty(s3.default.CtrlPattern.prototype, "type", {
                get: function() {
                    return this._type;
                },
                set: function(t12) {
                    this._type = t12, this._shuffled = null, this._type === s3.default.CtrlPattern.Type.Up || this._type === s3.default.CtrlPattern.Type.UpDown || this._type === s3.default.CtrlPattern.Type.RandomOnce || this._type === s3.default.CtrlPattern.Type.AlternateUp ? this.index = 0 : this._type !== s3.default.CtrlPattern.Type.Down && this._type !== s3.default.CtrlPattern.Type.DownUp && this._type !== s3.default.CtrlPattern.Type.AlternateDown || (this.index = this.values.length - 1), this._type === s3.default.CtrlPattern.Type.UpDown || this._type === s3.default.CtrlPattern.Type.AlternateUp ? this._direction = s3.default.CtrlPattern.Type.Up : this._type !== s3.default.CtrlPattern.Type.DownUp && this._type !== s3.default.CtrlPattern.Type.AlternateDown || (this._direction = s3.default.CtrlPattern.Type.Down), this._type === s3.default.CtrlPattern.Type.RandomOnce ? this._shuffleValues() : this._type === s3.default.CtrlPattern.Type.Random && (this.index = Math.floor(Math.random() * this.values.length));
                }
            }), s3.default.CtrlPattern.prototype.next = function() {
                var t12 = this.type;
                return t12 === s3.default.CtrlPattern.Type.Up ? (this.index++, this.index >= this.values.length && (this.index = 0)) : t12 === s3.default.CtrlPattern.Type.Down ? (this.index--, this.index < 0 && (this.index = this.values.length - 1)) : t12 === s3.default.CtrlPattern.Type.UpDown || t12 === s3.default.CtrlPattern.Type.DownUp ? (this._direction === s3.default.CtrlPattern.Type.Up ? this.index++ : this.index--, this.index < 0 ? (this.index = 1, this._direction = s3.default.CtrlPattern.Type.Up) : this.index >= this.values.length && (this.index = this.values.length - 2, this._direction = s3.default.CtrlPattern.Type.Down)) : t12 === s3.default.CtrlPattern.Type.Random ? this.index = Math.floor(Math.random() * this.values.length) : t12 === s3.default.CtrlPattern.Type.RandomWalk ? Math.random() < 0.5 ? (this.index--, this.index = Math.max(this.index, 0)) : (this.index++, this.index = Math.min(this.index, this.values.length - 1)) : t12 === s3.default.CtrlPattern.Type.RandomOnce ? (this.index++, this.index >= this.values.length && (this.index = 0, this._shuffleValues())) : t12 === s3.default.CtrlPattern.Type.AlternateUp ? (this._direction === s3.default.CtrlPattern.Type.Up ? (this.index += 2, this._direction = s3.default.CtrlPattern.Type.Down) : (this.index -= 1, this._direction = s3.default.CtrlPattern.Type.Up), this.index >= this.values.length && (this.index = 0, this._direction = s3.default.CtrlPattern.Type.Up)) : t12 === s3.default.CtrlPattern.Type.AlternateDown && (this._direction === s3.default.CtrlPattern.Type.Up ? (this.index += 1, this._direction = s3.default.CtrlPattern.Type.Down) : (this.index -= 2, this._direction = s3.default.CtrlPattern.Type.Up), this.index < 0 && (this.index = this.values.length - 1, this._direction = s3.default.CtrlPattern.Type.Down)), this.value;
            }, s3.default.CtrlPattern.prototype._shuffleValues = function() {
                var t12 = [];
                this._shuffled = [];
                for(var e24 = 0; e24 < this.values.length; e24++)t12[e24] = e24;
                for(; t12.length > 0;){
                    var i30 = t12.splice(Math.floor(t12.length * Math.random()), 1);
                    this._shuffled.push(i30[0]);
                }
            }, s3.default.CtrlPattern.prototype.dispose = function() {
                this._shuffled = null, this.values = null;
            }, e3.default = s3.default.CtrlPattern;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(56), i5(55);
            s3.default.TransportRepeatEvent = function(t12, e24) {
                s3.default.TransportEvent.call(this, t12, e24), e24 = s3.default.defaultArg(e24, s3.default.TransportRepeatEvent.defaults), this.duration = s3.default.Ticks(e24.duration), this._interval = s3.default.Ticks(e24.interval), this._currentId = -1, this._nextId = -1, this._nextTick = this.time, this._boundRestart = this._restart.bind(this), this.Transport.on("start loopStart", this._boundRestart), this._restart();
            }, s3.default.extend(s3.default.TransportRepeatEvent, s3.default.TransportEvent), s3.default.TransportRepeatEvent.defaults = {
                duration: 1 / 0,
                interval: 1
            }, s3.default.TransportRepeatEvent.prototype.invoke = function(t12) {
                this._createEvents(t12), s3.default.TransportEvent.prototype.invoke.call(this, t12);
            }, s3.default.TransportRepeatEvent.prototype._createEvents = function(t12) {
                var e24 = this.Transport.getTicksAtTime(t12);
                e24 >= this.time && e24 >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), s3.default.Ticks(this._nextTick)));
            }, s3.default.TransportRepeatEvent.prototype._restart = function(t12) {
                this.Transport.clear(this._currentId), this.Transport.clear(this._nextId), this._nextTick = this.time;
                var e24 = this.Transport.getTicksAtTime(t12);
                e24 > this.time && (this._nextTick = this.time + Math.ceil((e24 - this.time) / this._interval) * this._interval), this._currentId = this.Transport.scheduleOnce(this.invoke.bind(this), s3.default.Ticks(this._nextTick)), this._nextTick += this._interval, this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), s3.default.Ticks(this._nextTick));
            }, s3.default.TransportRepeatEvent.prototype.dispose = function() {
                return this.Transport.clear(this._currentId), this.Transport.clear(this._nextId), this.Transport.off("start loopStart", this._boundRestart), this._boundCreateEvents = null, s3.default.TransportEvent.prototype.dispose.call(this), this.duration = null, this._interval = null, this;
            }, e3.default = s3.default.TransportRepeatEvent;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(4);
            s3.default.IntervalTimeline = function() {
                s3.default.call(this), this._root = null, this._length = 0;
            }, s3.default.extend(s3.default.IntervalTimeline), s3.default.IntervalTimeline.prototype.add = function(t12) {
                if (s3.default.isUndef(t12.time) || s3.default.isUndef(t12.duration)) throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");
                t12.time = t12.time.valueOf();
                var e24 = new n15(t12.time, t12.time + t12.duration, t12);
                for(null === this._root ? this._root = e24 : this._root.insert(e24), this._length++; null !== e24;)e24.updateHeight(), e24.updateMax(), this._rebalance(e24), e24 = e24.parent;
                return this;
            }, s3.default.IntervalTimeline.prototype.remove = function(t12) {
                if (null !== this._root) {
                    var e24 = [];
                    this._root.search(t12.time, e24);
                    for(var i31 = 0; i31 < e24.length; i31++){
                        var s6 = e24[i31];
                        if (s6.event === t12) {
                            this._removeNode(s6), this._length--;
                            break;
                        }
                    }
                }
                return this;
            }, Object.defineProperty(s3.default.IntervalTimeline.prototype, "length", {
                get: function() {
                    return this._length;
                }
            }), s3.default.IntervalTimeline.prototype.cancel = function(t12) {
                return this.forEachFrom(t12, (function(t13) {
                    this.remove(t13);
                }).bind(this)), this;
            }, s3.default.IntervalTimeline.prototype._setRoot = function(t12) {
                this._root = t12, null !== this._root && (this._root.parent = null);
            }, s3.default.IntervalTimeline.prototype._replaceNodeInParent = function(t12, e25) {
                null !== t12.parent ? (t12.isLeftChild() ? t12.parent.left = e25 : t12.parent.right = e25, this._rebalance(t12.parent)) : this._setRoot(e25);
            }, s3.default.IntervalTimeline.prototype._removeNode = function(t12) {
                if (null === t12.left && null === t12.right) this._replaceNodeInParent(t12, null);
                else if (null === t12.right) this._replaceNodeInParent(t12, t12.left);
                else if (null === t12.left) this._replaceNodeInParent(t12, t12.right);
                else {
                    var e25, i32;
                    if (t12.getBalance() > 0) {
                        if (null === t12.left.right) (e25 = t12.left).right = t12.right, i32 = e25;
                        else {
                            for(e25 = t12.left.right; null !== e25.right;)e25 = e25.right;
                            e25.parent.right = e25.left, i32 = e25.parent, e25.left = t12.left, e25.right = t12.right;
                        }
                    } else if (null === t12.right.left) (e25 = t12.right).left = t12.left, i32 = e25;
                    else {
                        for(e25 = t12.right.left; null !== e25.left;)e25 = e25.left;
                        e25.parent.left = e25.right, i32 = e25.parent, e25.left = t12.left, e25.right = t12.right;
                    }
                    null !== t12.parent ? t12.isLeftChild() ? t12.parent.left = e25 : t12.parent.right = e25 : this._setRoot(e25), this._rebalance(i32);
                }
                t12.dispose();
            }, s3.default.IntervalTimeline.prototype._rotateLeft = function(t12) {
                var e26 = t12.parent, i33 = t12.isLeftChild(), s7 = t12.right;
                t12.right = s7.left, s7.left = t12, null !== e26 ? i33 ? e26.left = s7 : e26.right = s7 : this._setRoot(s7);
            }, s3.default.IntervalTimeline.prototype._rotateRight = function(t12) {
                var e26 = t12.parent, i33 = t12.isLeftChild(), s7 = t12.left;
                t12.left = s7.right, s7.right = t12, null !== e26 ? i33 ? e26.left = s7 : e26.right = s7 : this._setRoot(s7);
            }, s3.default.IntervalTimeline.prototype._rebalance = function(t12) {
                var e26 = t12.getBalance();
                e26 > 1 ? t12.left.getBalance() < 0 ? this._rotateLeft(t12.left) : this._rotateRight(t12) : e26 < -1 && (t12.right.getBalance() > 0 ? this._rotateRight(t12.right) : this._rotateLeft(t12));
            }, s3.default.IntervalTimeline.prototype.get = function(t12) {
                if (null !== this._root) {
                    var e26 = [];
                    if (this._root.search(t12, e26), e26.length > 0) {
                        for(var i33 = e26[0], s7 = 1; s7 < e26.length; s7++)e26[s7].low > i33.low && (i33 = e26[s7]);
                        return i33.event;
                    }
                }
                return null;
            }, s3.default.IntervalTimeline.prototype.forEach = function(t12) {
                if (null !== this._root) {
                    var e27 = [];
                    this._root.traverse(function(t13) {
                        e27.push(t13);
                    });
                    for(var i34 = 0; i34 < e27.length; i34++){
                        var s8 = e27[i34].event;
                        s8 && t12(s8);
                    }
                }
                return this;
            }, s3.default.IntervalTimeline.prototype.forEachAtTime = function(t12, e28) {
                if (null !== this._root) {
                    var i35 = [];
                    this._root.search(t12, i35);
                    for(var s9 = i35.length - 1; s9 >= 0; s9--){
                        var n14 = i35[s9].event;
                        n14 && e28(n14);
                    }
                }
                return this;
            }, s3.default.IntervalTimeline.prototype.forEachFrom = function(t12, e28) {
                if (null !== this._root) {
                    var i36 = [];
                    this._root.searchAfter(t12, i36);
                    for(var s10 = i36.length - 1; s10 >= 0; s10--)e28(i36[s10].event);
                }
                return this;
            }, s3.default.IntervalTimeline.prototype.dispose = function() {
                var t12 = [];
                null !== this._root && this._root.traverse(function(e28) {
                    t12.push(e28);
                });
                for(var e28 = 0; e28 < t12.length; e28++)t12[e28].dispose();
                return t12 = null, this._root = null, this;
            };
            var n15 = function(t12, e28, i37) {
                this.event = i37, this.low = t12, this.high = e28, this.max = this.high, this._left = null, this._right = null, this.parent = null, this.height = 0;
            };
            n15.prototype.insert = function(t12) {
                t12.low <= this.low ? null === this.left ? this.left = t12 : this.left.insert(t12) : null === this.right ? this.right = t12 : this.right.insert(t12);
            }, n15.prototype.search = function(t12, e28) {
                t12 > this.max || (null !== this.left && this.left.search(t12, e28), this.low <= t12 && this.high > t12 && e28.push(this), this.low > t12 || null !== this.right && this.right.search(t12, e28));
            }, n15.prototype.searchAfter = function(t12, e28) {
                this.low >= t12 && (e28.push(this), null !== this.left && this.left.searchAfter(t12, e28)), null !== this.right && this.right.searchAfter(t12, e28);
            }, n15.prototype.traverse = function(t12) {
                t12(this), null !== this.left && this.left.traverse(t12), null !== this.right && this.right.traverse(t12);
            }, n15.prototype.updateHeight = function() {
                null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0;
            }, n15.prototype.updateMax = function() {
                this.max = this.high, null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max));
            }, n15.prototype.getBalance = function() {
                var t12 = 0;
                return null !== this.left && null !== this.right ? t12 = this.left.height - this.right.height : null !== this.left ? t12 = this.left.height + 1 : null !== this.right && (t12 = -(this.right.height + 1)), t12;
            }, n15.prototype.isLeftChild = function() {
                return null !== this.parent && this.parent.left === this;
            }, Object.defineProperty(n15.prototype, "left", {
                get: function() {
                    return this._left;
                },
                set: function(t12) {
                    this._left = t12, null !== t12 && (t12.parent = this), this.updateHeight(), this.updateMax();
                }
            }), Object.defineProperty(n15.prototype, "right", {
                get: function() {
                    return this._right;
                },
                set: function(t12) {
                    this._right = t12, null !== t12 && (t12.parent = this), this.updateHeight(), this.updateMax();
                }
            }), n15.prototype.dispose = function() {
                this.parent = null, this._left = null, this._right = null, this.event = null;
            }, e3.default = s3.default.IntervalTimeline;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2);
            function n15(t12) {
                return function(e28, i37) {
                    i37 = this.toSeconds(i37), t12.apply(this, arguments);
                    var s11 = this._events.get(i37), n16 = this._events.previousEvent(s11), o = this._getTicksUntilEvent(n16, i37);
                    return s11.ticks = Math.max(o, 0), this;
                };
            }
            s3.default.TickSignal = function(t12) {
                t12 = s3.default.defaultArg(t12, 1), s3.default.Signal.call(this, {
                    units: s3.default.Type.Ticks,
                    value: t12
                }), this._events.memory = 1 / 0, this.cancelScheduledValues(0), this._events.add({
                    type: s3.default.Param.AutomationType.SetValue,
                    time: 0,
                    value: t12
                });
            }, s3.default.extend(s3.default.TickSignal, s3.default.Signal), s3.default.TickSignal.prototype.setValueAtTime = n15(s3.default.Signal.prototype.setValueAtTime), s3.default.TickSignal.prototype.linearRampToValueAtTime = n15(s3.default.Signal.prototype.linearRampToValueAtTime), s3.default.TickSignal.prototype.setTargetAtTime = function(t12, e28, i37) {
                e28 = this.toSeconds(e28), this.setRampPoint(e28), t12 = this._fromUnits(t12);
                for(var s11 = this._events.get(e28), n16 = Math.round(Math.max(1 / i37, 1)), o = 0; o <= n16; o++){
                    var a = i37 * o + e28, r = this._exponentialApproach(s11.time, s11.value, t12, i37, a);
                    this.linearRampToValueAtTime(this._toUnits(r), a);
                }
                return this;
            }, s3.default.TickSignal.prototype.exponentialRampToValueAtTime = function(t12, e28) {
                e28 = this.toSeconds(e28), t12 = this._fromUnits(t12);
                for(var i37 = this._events.get(e28), s11 = Math.round(Math.max(10 * (e28 - i37.time), 1)), n16 = (e28 - i37.time) / s11, o = 0; o <= s11; o++){
                    var a = n16 * o + i37.time, r = this._exponentialInterpolate(i37.time, i37.value, e28, t12, a);
                    this.linearRampToValueAtTime(this._toUnits(r), a);
                }
                return this;
            }, s3.default.TickSignal.prototype._getTicksUntilEvent = function(t12, e28) {
                if (null === t12) t12 = {
                    ticks: 0,
                    time: 0
                };
                else if (s3.default.isUndef(t12.ticks)) {
                    var i37 = this._events.previousEvent(t12);
                    t12.ticks = this._getTicksUntilEvent(i37, t12.time);
                }
                var n16 = this.getValueAtTime(t12.time), o = this.getValueAtTime(e28);
                return this._events.get(e28).time === e28 && this._events.get(e28).type === s3.default.Param.AutomationType.SetValue && (o = this.getValueAtTime(e28 - this.sampleTime)), 0.5 * (e28 - t12.time) * (n16 + o) + t12.ticks;
            }, s3.default.TickSignal.prototype.getTicksAtTime = function(t12) {
                t12 = this.toSeconds(t12);
                var e28 = this._events.get(t12);
                return Math.max(this._getTicksUntilEvent(e28, t12), 0);
            }, s3.default.TickSignal.prototype.getDurationOfTicks = function(t12, e28) {
                e28 = this.toSeconds(e28);
                var i38 = this.getTicksAtTime(e28);
                return this.getTimeOfTick(i38 + t12) - e28;
            }, s3.default.TickSignal.prototype.getTimeOfTick = function(t12) {
                var e28 = this._events.get(t12, "ticks"), i38 = this._events.getAfter(t12, "ticks");
                if (e28 && e28.ticks === t12) return e28.time;
                if (e28 && i38 && i38.type === s3.default.Param.AutomationType.Linear && e28.value !== i38.value) {
                    var n16 = this.getValueAtTime(e28.time), o = (this.getValueAtTime(i38.time) - n16) / (i38.time - e28.time), a = Math.sqrt(Math.pow(n16, 2) - 2 * o * (e28.ticks - t12)), r = (-n16 + a) / o;
                    return (r > 0 ? r : (-n16 - a) / o) + e28.time;
                }
                return e28 ? 0 === e28.value ? 1 / 0 : e28.time + (t12 - e28.ticks) / e28.value : t12 / this._initialValue;
            }, s3.default.TickSignal.prototype.ticksToTime = function(t12, e28) {
                return e28 = this.toSeconds(e28), new s3.default.Time(this.getDurationOfTicks(t12, e28));
            }, s3.default.TickSignal.prototype.timeToTicks = function(t12, e28) {
                e28 = this.toSeconds(e28), t12 = this.toSeconds(t12);
                var i38 = this.getTicksAtTime(e28), n17 = this.getTicksAtTime(e28 + t12);
                return new s3.default.Ticks(n17 - i38);
            }, e3.default = s3.default.TickSignal;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(57), i5(34), i5(35), i5(20);
            s3.default.Clock = function() {
                var t12 = s3.default.defaults(arguments, [
                    "callback",
                    "frequency"
                ], s3.default.Clock);
                s3.default.Emitter.call(this), this.callback = t12.callback, this._nextTick = 0, this._tickSource = new s3.default.TickSource(t12.frequency), this._lastUpdate = 0, this.frequency = this._tickSource.frequency, this._readOnly("frequency"), this._state = new s3.default.TimelineState(s3.default.State.Stopped), this._state.setStateAtTime(s3.default.State.Stopped, 0), this._boundLoop = this._loop.bind(this), this.context.on("tick", this._boundLoop);
            }, s3.default.extend(s3.default.Clock, s3.default.Emitter), s3.default.Clock.defaults = {
                callback: s3.default.noOp,
                frequency: 1
            }, Object.defineProperty(s3.default.Clock.prototype, "state", {
                get: function() {
                    return this._state.getValueAtTime(this.now());
                }
            }), s3.default.Clock.prototype.start = function(t12, e28) {
                return this.context.resume(), t12 = this.toSeconds(t12), this._state.getValueAtTime(t12) !== s3.default.State.Started && (this._state.setStateAtTime(s3.default.State.Started, t12), this._tickSource.start(t12, e28), t12 < this._lastUpdate && this.emit("start", t12, e28)), this;
            }, s3.default.Clock.prototype.stop = function(t12) {
                return t12 = this.toSeconds(t12), this._state.cancel(t12), this._state.setStateAtTime(s3.default.State.Stopped, t12), this._tickSource.stop(t12), t12 < this._lastUpdate && this.emit("stop", t12), this;
            }, s3.default.Clock.prototype.pause = function(t12) {
                return t12 = this.toSeconds(t12), this._state.getValueAtTime(t12) === s3.default.State.Started && (this._state.setStateAtTime(s3.default.State.Paused, t12), this._tickSource.pause(t12), t12 < this._lastUpdate && this.emit("pause", t12)), this;
            }, Object.defineProperty(s3.default.Clock.prototype, "ticks", {
                get: function() {
                    return Math.ceil(this.getTicksAtTime(this.now()));
                },
                set: function(t12) {
                    this._tickSource.ticks = t12;
                }
            }), Object.defineProperty(s3.default.Clock.prototype, "seconds", {
                get: function() {
                    return this._tickSource.seconds;
                },
                set: function(t12) {
                    this._tickSource.seconds = t12;
                }
            }), s3.default.Clock.prototype.getSecondsAtTime = function(t12) {
                return this._tickSource.getSecondsAtTime(t12);
            }, s3.default.Clock.prototype.setTicksAtTime = function(t12, e28) {
                return this._tickSource.setTicksAtTime(t12, e28), this;
            }, s3.default.Clock.prototype.getTicksAtTime = function(t12) {
                return this._tickSource.getTicksAtTime(t12);
            }, s3.default.Clock.prototype.nextTickTime = function(t12, e28) {
                e28 = this.toSeconds(e28);
                var i38 = this.getTicksAtTime(e28);
                return this._tickSource.getTimeOfTick(i38 + t12, e28);
            }, s3.default.Clock.prototype._loop = function() {
                var t12 = this._lastUpdate, e28 = this.now();
                this._lastUpdate = e28, t12 !== e28 && (this._state.forEachBetween(t12, e28, (function(t13) {
                    switch(t13.state){
                        case s3.default.State.Started:
                            var e29 = this._tickSource.getTicksAtTime(t13.time);
                            this.emit("start", t13.time, e29);
                            break;
                        case s3.default.State.Stopped:
                            0 !== t13.time && this.emit("stop", t13.time);
                            break;
                        case s3.default.State.Paused:
                            this.emit("pause", t13.time);
                    }
                }).bind(this)), this._tickSource.forEachTickBetween(t12, e28, (function(t13, e29) {
                    this.callback(t13, e29);
                }).bind(this)));
            }, s3.default.Clock.prototype.getStateAtTime = function(t12) {
                return t12 = this.toSeconds(t12), this._state.getValueAtTime(t12);
            }, s3.default.Clock.prototype.dispose = function() {
                s3.default.Emitter.prototype.dispose.call(this), this.context.off("tick", this._boundLoop), this._writable("frequency"), this._tickSource.dispose(), this._tickSource = null, this.frequency = null, this._boundLoop = null, this._nextTick = 1 / 0, this.callback = null, this._state.dispose(), this._state = null;
            }, e3.default = s3.default.Clock;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(2), i5(5), i5(7);
            s3.default.GreaterThanZero = function() {
                s3.default.SignalBase.call(this), this._thresh = this.output = new s3.default.WaveShaper(function(t12) {
                    return t12 <= 0 ? 0 : 1;
                }, 127), this._scale = this.input = new s3.default.Multiply(10000), this._scale.connect(this._thresh);
            }, s3.default.extend(s3.default.GreaterThanZero, s3.default.SignalBase), s3.default.GreaterThanZero.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._thresh.dispose(), this._thresh = null, this;
            }, e3.default = s3.default.GreaterThanZero;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(84), i5(13), i5(2);
            s3.default.GreaterThan = function(t12) {
                s3.default.Signal.call(this), this.createInsOuts(2, 0), this._param = this.input[0] = new s3.default.Subtract(t12), this.input[1] = this._param.input[1], this._gtz = this.output = new s3.default.GreaterThanZero, this._param.connect(this._gtz);
            }, s3.default.extend(s3.default.GreaterThan, s3.default.Signal), s3.default.GreaterThan.prototype.dispose = function() {
                return s3.default.Signal.prototype.dispose.call(this), this._gtz.dispose(), this._gtz = null, this;
            }, e3.default = s3.default.GreaterThan;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(47), i5(26);
            s3.default.ScaledEnvelope = function() {
                var t12 = s3.default.defaults(arguments, [
                    "attack",
                    "decay",
                    "sustain",
                    "release"
                ], s3.default.Envelope);
                s3.default.Envelope.call(this, t12), t12 = s3.default.defaultArg(t12, s3.default.ScaledEnvelope.defaults), this._exp = this.output = new s3.default.Pow(t12.exponent), this._scale = this.output = new s3.default.Scale(t12.min, t12.max), this._sig.chain(this._exp, this._scale);
            }, s3.default.extend(s3.default.ScaledEnvelope, s3.default.Envelope), s3.default.ScaledEnvelope.defaults = {
                min: 0,
                max: 1,
                exponent: 1
            }, Object.defineProperty(s3.default.ScaledEnvelope.prototype, "min", {
                get: function() {
                    return this._scale.min;
                },
                set: function(t12) {
                    this._scale.min = t12;
                }
            }), Object.defineProperty(s3.default.ScaledEnvelope.prototype, "max", {
                get: function() {
                    return this._scale.max;
                },
                set: function(t12) {
                    this._scale.max = t12;
                }
            }), Object.defineProperty(s3.default.ScaledEnvelope.prototype, "exponent", {
                get: function() {
                    return this._exp.value;
                },
                set: function(t12) {
                    this._exp.value = t12;
                }
            }), s3.default.ScaledEnvelope.prototype.dispose = function() {
                return s3.default.Envelope.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this;
            }, e3.default = s3.default.ScaledEnvelope;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(7), i5(30);
            s3.default.Abs = function() {
                s3.default.SignalBase.call(this), this._abs = this.input = this.output = new s3.default.WaveShaper(function(t12) {
                    return Math.abs(t12) < 0.001 ? 0 : Math.abs(t12);
                }, 1024);
            }, s3.default.extend(s3.default.Abs, s3.default.SignalBase), s3.default.Abs.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._abs.dispose(), this._abs = null, this;
            }, e3.default = s3.default.Abs;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(3), i5(1);
            s3.default.Solo = function() {
                var t12 = s3.default.defaults(arguments, [
                    "solo"
                ], s3.default.Solo);
                s3.default.AudioNode.call(this), this.input = this.output = new s3.default.Gain, this._soloBind = this._soloed.bind(this), this.context.on("solo", this._soloBind), this.solo = t12.solo;
            }, s3.default.extend(s3.default.Solo, s3.default.AudioNode), s3.default.Solo.defaults = {
                solo: !1
            }, Object.defineProperty(s3.default.Solo.prototype, "solo", {
                get: function() {
                    return this._isSoloed();
                },
                set: function(t12) {
                    t12 ? this._addSolo() : this._removeSolo(), this.context.emit("solo", this);
                }
            }), Object.defineProperty(s3.default.Solo.prototype, "muted", {
                get: function() {
                    return 0 === this.input.gain.value;
                }
            }), s3.default.Solo.prototype._addSolo = function() {
                s3.default.isArray(this.context._currentSolo) || (this.context._currentSolo = []), this._isSoloed() || this.context._currentSolo.push(this);
            }, s3.default.Solo.prototype._removeSolo = function() {
                if (this._isSoloed()) {
                    var t12 = this.context._currentSolo.indexOf(this);
                    this.context._currentSolo.splice(t12, 1);
                }
            }, s3.default.Solo.prototype._isSoloed = function() {
                return !!s3.default.isArray(this.context._currentSolo) && 0 !== this.context._currentSolo.length && -1 !== this.context._currentSolo.indexOf(this);
            }, s3.default.Solo.prototype._noSolos = function() {
                return !s3.default.isArray(this.context._currentSolo) || 0 === this.context._currentSolo.length;
            }, s3.default.Solo.prototype._soloed = function() {
                this._isSoloed() ? this.input.gain.value = 1 : this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0;
            }, s3.default.Solo.prototype.dispose = function() {
                return this.context.off("solo", this._soloBind), this._removeSolo(), this._soloBind = null, s3.default.AudioNode.prototype.dispose.call(this), this;
            }, e3.default = s3.default.Solo;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(7);
            s3.default.EqualPowerGain = function() {
                s3.default.SignalBase.call(this), this._eqPower = this.input = this.output = new s3.default.WaveShaper((function(t13) {
                    return Math.abs(t13) < 0.001 ? 0 : s3.default.equalPowerScale(t13);
                }).bind(this), 4096);
            }, s3.default.extend(s3.default.EqualPowerGain, s3.default.SignalBase), s3.default.EqualPowerGain.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._eqPower.dispose(), this._eqPower = null, this;
            }, e3.default = s3.default.EqualPowerGain;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(5), i5(2);
            s3.default.Negate = function() {
                s3.default.SignalBase.call(this), this._multiply = this.input = this.output = new s3.default.Multiply(-1);
            }, s3.default.extend(s3.default.Negate, s3.default.SignalBase), s3.default.Negate.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._multiply.dispose(), this._multiply = null, this;
            }, e3.default = s3.default.Negate;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(48), i5(27), i5(1);
            s3.default.PanVol = function() {
                var t13 = s3.default.defaults(arguments, [
                    "pan",
                    "volume"
                ], s3.default.PanVol);
                s3.default.AudioNode.call(this), this._panner = this.input = new s3.default.Panner(t13.pan), this.pan = this._panner.pan, this._volume = this.output = new s3.default.Volume(t13.volume), this.volume = this._volume.volume, this._panner.connect(this._volume), this.mute = t13.mute, this._readOnly([
                    "pan",
                    "volume"
                ]);
            }, s3.default.extend(s3.default.PanVol, s3.default.AudioNode), s3.default.PanVol.defaults = {
                pan: 0,
                volume: 0,
                mute: !1
            }, Object.defineProperty(s3.default.PanVol.prototype, "mute", {
                get: function() {
                    return this._volume.mute;
                },
                set: function(t13) {
                    this._volume.mute = t13;
                }
            }), s3.default.PanVol.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable([
                    "pan",
                    "volume"
                ]), this._panner.dispose(), this._panner = null, this.pan = null, this._volume.dispose(), this._volume = null, this.volume = null, this;
            }, e3.default = s3.default.PanVol;
        },
        function(t1, e3, i5) {
            "use strict";
            var s3 = i5(0);
            if (s3.default.supported) {
                !s3.default.global.hasOwnProperty("OfflineAudioContext") && s3.default.global.hasOwnProperty("webkitOfflineAudioContext") && (s3.default.global.OfflineAudioContext = s3.default.global.webkitOfflineAudioContext);
                var n15 = new OfflineAudioContext(1, 1, 44100).startRendering();
                n15 && s3.default.isFunction(n15.then) || (OfflineAudioContext.prototype._native_startRendering = OfflineAudioContext.prototype.startRendering, OfflineAudioContext.prototype.startRendering = function() {
                    return new Promise((function(t13) {
                        this.oncomplete = function(e28) {
                            t13(e28.renderedBuffer);
                        }, this._native_startRendering();
                    }).bind(this));
                });
            }
        },
        function(t1, e3, i5) {
            "use strict";
            e3.a = "13.8.34";
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(46);
            s3.default.Midi = function(t13, e28) {
                if (!(this instanceof s3.default.Midi)) return new s3.default.Midi(t13, e28);
                s3.default.Frequency.call(this, t13, e28);
            }, s3.default.extend(s3.default.Midi, s3.default.Frequency), s3.default.Midi.prototype._defaultUnits = "midi", s3.default.Midi.prototype._frequencyToUnits = function(t13) {
                return s3.default.Frequency.ftom(s3.default.Frequency.prototype._frequencyToUnits.call(this, t13));
            }, s3.default.Midi.prototype._ticksToUnits = function(t13) {
                return s3.default.Frequency.ftom(s3.default.Frequency.prototype._ticksToUnits.call(this, t13));
            }, s3.default.Midi.prototype._beatsToUnits = function(t13) {
                return s3.default.Frequency.ftom(s3.default.Frequency.prototype._beatsToUnits.call(this, t13));
            }, s3.default.Midi.prototype._secondsToUnits = function(t13) {
                return s3.default.Frequency.ftom(s3.default.Frequency.prototype._secondsToUnits.call(this, t13));
            }, s3.default.Midi.prototype.toMidi = function() {
                return this.valueOf();
            }, s3.default.Midi.prototype.toFrequency = function() {
                return s3.default.Frequency.mtof(this.toMidi());
            }, s3.default.Midi.prototype.transpose = function(t13) {
                return new this.constructor(this.toMidi() + t13);
            }, e3.default = s3.default.Midi;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(27), i5(1);
            s3.default.UserMedia = function() {
                var t13 = s3.default.defaults(arguments, [
                    "volume"
                ], s3.default.UserMedia);
                s3.default.AudioNode.call(this), this._mediaStream = null, this._stream = null, this._device = null, this._volume = this.output = new s3.default.Volume(t13.volume), this.volume = this._volume.volume, this._readOnly("volume"), this.mute = t13.mute;
            }, s3.default.extend(s3.default.UserMedia, s3.default.AudioNode), s3.default.UserMedia.defaults = {
                volume: 0,
                mute: !1
            }, s3.default.UserMedia.prototype.open = function(t13) {
                return this.state === s3.default.State.Started && this.close(), s3.default.UserMedia.enumerateDevices().then((function(e28) {
                    var i38;
                    if (s3.default.isNumber(t13)) i38 = e28[t13];
                    else if (!(i38 = e28.find(function(e29) {
                        return e29.label === t13 || e29.deviceId === t13;
                    })) && e28.length > 0) i38 = e28[0];
                    else if (!i38 && s3.default.isDefined(t13)) throw new Error("Tone.UserMedia: no matching device: " + t13);
                    this._device = i38;
                    var n17 = {
                        audio: {
                            echoCancellation: !1,
                            sampleRate: this.context.sampleRate,
                            noiseSuppression: !1,
                            mozNoiseSuppression: !1
                        }
                    };
                    return i38 && (n17.audio.deviceId = i38.deviceId), navigator.mediaDevices.getUserMedia(n17).then((function(t14) {
                        return this._stream || (this._stream = t14, this._mediaStream = this.context.createMediaStreamSource(t14), s3.default.connect(this._mediaStream, this.output)), this;
                    }).bind(this));
                }).bind(this));
            }, s3.default.UserMedia.prototype.close = function() {
                return this._stream && (this._stream.getAudioTracks().forEach(function(t13) {
                    t13.stop();
                }), this._stream = null, this._mediaStream.disconnect(), this._mediaStream = null), this._device = null, this;
            }, s3.default.UserMedia.enumerateDevices = function() {
                return navigator.mediaDevices.enumerateDevices().then(function(t13) {
                    return t13.filter(function(t14) {
                        return "audioinput" === t14.kind;
                    });
                });
            }, Object.defineProperty(s3.default.UserMedia.prototype, "state", {
                get: function() {
                    return this._stream && this._stream.active ? s3.default.State.Started : s3.default.State.Stopped;
                }
            }), Object.defineProperty(s3.default.UserMedia.prototype, "deviceId", {
                get: function() {
                    return this._device ? this._device.deviceId : null;
                }
            }), Object.defineProperty(s3.default.UserMedia.prototype, "groupId", {
                get: function() {
                    return this._device ? this._device.groupId : null;
                }
            }), Object.defineProperty(s3.default.UserMedia.prototype, "label", {
                get: function() {
                    return this._device ? this._device.label : null;
                }
            }), Object.defineProperty(s3.default.UserMedia.prototype, "mute", {
                get: function() {
                    return this._volume.mute;
                },
                set: function(t13) {
                    this._volume.mute = t13;
                }
            }), s3.default.UserMedia.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this.close(), this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null, this;
            }, Object.defineProperty(s3.default.UserMedia, "supported", {
                get: function() {
                    return s3.default.isDefined(navigator.mediaDevices) && s3.default.isFunction(navigator.mediaDevices.getUserMedia);
                }
            }), e3.default = s3.default.UserMedia;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(65), i5(27), i5(1);
            s3.default.Players = function(t13) {
                var e28 = Array.prototype.slice.call(arguments);
                e28.shift();
                var i38 = s3.default.defaults(e28, [
                    "onload"
                ], s3.default.Players);
                for(var n17 in s3.default.AudioNode.call(this, i38), this._volume = this.output = new s3.default.Volume(i38.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._volume.output.output.channelCount = 2, this._volume.output.output.channelCountMode = "explicit", this.mute = i38.mute, this._players = {
                }, this._loadingCount = 0, this._fadeIn = i38.fadeIn, this._fadeOut = i38.fadeOut, t13)this._loadingCount++, this.add(n17, t13[n17], this._bufferLoaded.bind(this, i38.onload));
            }, s3.default.extend(s3.default.Players, s3.default.AudioNode), s3.default.Players.defaults = {
                volume: 0,
                mute: !1,
                onload: s3.default.noOp,
                fadeIn: 0,
                fadeOut: 0
            }, s3.default.Players.prototype._bufferLoaded = function(t13) {
                this._loadingCount--, 0 === this._loadingCount && t13 && t13(this);
            }, Object.defineProperty(s3.default.Players.prototype, "mute", {
                get: function() {
                    return this._volume.mute;
                },
                set: function(t13) {
                    this._volume.mute = t13;
                }
            }), Object.defineProperty(s3.default.Players.prototype, "fadeIn", {
                get: function() {
                    return this._fadeIn;
                },
                set: function(t13) {
                    this._fadeIn = t13, this._forEach(function(e28) {
                        e28.fadeIn = t13;
                    });
                }
            }), Object.defineProperty(s3.default.Players.prototype, "fadeOut", {
                get: function() {
                    return this._fadeOut;
                },
                set: function(t13) {
                    this._fadeOut = t13, this._forEach(function(e28) {
                        e28.fadeOut = t13;
                    });
                }
            }), Object.defineProperty(s3.default.Players.prototype, "state", {
                get: function() {
                    var t13 = !1;
                    return this._forEach(function(e28) {
                        t13 = t13 || e28.state === s3.default.State.Started;
                    }), t13 ? s3.default.State.Started : s3.default.State.Stopped;
                }
            }), s3.default.Players.prototype.has = function(t13) {
                return this._players.hasOwnProperty(t13);
            }, s3.default.Players.prototype.get = function(t13) {
                if (this.has(t13)) return this._players[t13];
                throw new Error("Tone.Players: no player named " + t13);
            }, s3.default.Players.prototype._forEach = function(t13) {
                for(var e28 in this._players)t13(this._players[e28], e28);
                return this;
            }, Object.defineProperty(s3.default.Players.prototype, "loaded", {
                get: function() {
                    var t13 = !0;
                    return this._forEach(function(e28) {
                        t13 = t13 && e28.loaded;
                    }), t13;
                }
            }), s3.default.Players.prototype.add = function(t13, e28, i38) {
                return this._players[t13] = new s3.default.Player(e28, i38).connect(this.output), this._players[t13].fadeIn = this._fadeIn, this._players[t13].fadeOut = this._fadeOut, this;
            }, s3.default.Players.prototype.stopAll = function(t13) {
                this._forEach(function(e28) {
                    e28.stop(t13);
                });
            }, s3.default.Players.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._volume.dispose(), this._volume = null, this._writable("volume"), this.volume = null, this.output = null, this._forEach(function(t13) {
                    t13.dispose();
                }), this._players = null, this;
            }, e3.default = s3.default.Players;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(6), i5(11), i5(32);
            s3.default.GrainPlayer = function() {
                var t13 = s3.default.defaults(arguments, [
                    "url",
                    "onload"
                ], s3.default.GrainPlayer);
                s3.default.Source.call(this, t13), this.buffer = new s3.default.Buffer(t13.url, t13.onload.bind(void 0, this)), this._clock = new s3.default.Clock(this._tick.bind(this), t13.grainSize), this._loopStart = 0, this._loopEnd = 0, this._activeSources = [], this._playbackRate = t13.playbackRate, this._grainSize = t13.grainSize, this._overlap = t13.overlap, this.detune = t13.detune, this.overlap = t13.overlap, this.loop = t13.loop, this.playbackRate = t13.playbackRate, this.grainSize = t13.grainSize, this.loopStart = t13.loopStart, this.loopEnd = t13.loopEnd, this.reverse = t13.reverse, this._clock.on("stop", this._onstop.bind(this));
            }, s3.default.extend(s3.default.GrainPlayer, s3.default.Source), s3.default.GrainPlayer.defaults = {
                onload: s3.default.noOp,
                overlap: 0.1,
                grainSize: 0.2,
                playbackRate: 1,
                detune: 0,
                loop: !1,
                loopStart: 0,
                loopEnd: 0,
                reverse: !1
            }, s3.default.GrainPlayer.prototype._start = function(t13, e28, i38) {
                e28 = s3.default.defaultArg(e28, 0), e28 = this.toSeconds(e28), t13 = this.toSeconds(t13), this._offset = e28, this._clock.start(t13), i38 && this.stop(t13 + this.toSeconds(i38));
            }, s3.default.GrainPlayer.prototype._stop = function(t13) {
                this._clock.stop(t13);
            }, s3.default.GrainPlayer.prototype._onstop = function(t13) {
                this._activeSources.forEach(function(e28) {
                    e28.fadeOut = 0, e28.stop(t13);
                });
            }, s3.default.GrainPlayer.prototype._tick = function(t13) {
                if (!this.loop && this._offset > this.buffer.duration) this.stop(t13);
                else {
                    var e28 = this._offset < this._overlap ? 0 : this._overlap, i38 = new s3.default.BufferSource({
                        buffer: this.buffer,
                        fadeIn: e28,
                        fadeOut: this._overlap,
                        loop: this.loop,
                        loopStart: this._loopStart,
                        loopEnd: this._loopEnd,
                        playbackRate: s3.default.intervalToFrequencyRatio(this.detune / 100)
                    }).connect(this.output);
                    i38.start(t13, this._offset), this._offset += this.grainSize, i38.stop(t13 + this.grainSize / this.playbackRate), this._activeSources.push(i38), i38.onended = (function() {
                        var t14 = this._activeSources.indexOf(i38);
                        -1 !== t14 && this._activeSources.splice(t14, 1);
                    }).bind(this);
                }
            }, Object.defineProperty(s3.default.GrainPlayer.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate;
                },
                set: function(t13) {
                    this._playbackRate = t13, this.grainSize = this._grainSize;
                }
            }), Object.defineProperty(s3.default.GrainPlayer.prototype, "loopStart", {
                get: function() {
                    return this._loopStart;
                },
                set: function(t13) {
                    this._loopStart = this.toSeconds(t13);
                }
            }), Object.defineProperty(s3.default.GrainPlayer.prototype, "loopEnd", {
                get: function() {
                    return this._loopEnd;
                },
                set: function(t13) {
                    this._loopEnd = this.toSeconds(t13);
                }
            }), Object.defineProperty(s3.default.GrainPlayer.prototype, "reverse", {
                get: function() {
                    return this.buffer.reverse;
                },
                set: function(t13) {
                    this.buffer.reverse = t13;
                }
            }), Object.defineProperty(s3.default.GrainPlayer.prototype, "grainSize", {
                get: function() {
                    return this._grainSize;
                },
                set: function(t13) {
                    this._grainSize = this.toSeconds(t13), this._clock.frequency.value = this._playbackRate / this._grainSize;
                }
            }), Object.defineProperty(s3.default.GrainPlayer.prototype, "overlap", {
                get: function() {
                    return this._overlap;
                },
                set: function(t13) {
                    this._overlap = this.toSeconds(t13);
                }
            }), Object.defineProperty(s3.default.GrainPlayer.prototype, "loaded", {
                get: function() {
                    return this.buffer.loaded;
                }
            }), s3.default.GrainPlayer.prototype.dispose = function() {
                return s3.default.Source.prototype.dispose.call(this), this.buffer.dispose(), this.buffer = null, this._clock.dispose(), this._clock = null, this._activeSources.forEach(function(t13) {
                    t13.dispose();
                }), this._activeSources = null, this;
            }, e3.default = s3.default.GrainPlayer;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(16), i5(2), i5(45);
            s3.default.TransportTimelineSignal = function() {
                s3.default.Signal.apply(this, arguments), this.output = this._outputSig = new s3.default.Signal(this._initialValue), this._lastVal = this.value, this._synced = s3.default.Transport.scheduleRepeat(this._onTick.bind(this), "1i"), this._bindAnchorValue = this._anchorValue.bind(this), s3.default.Transport.on("start stop pause", this._bindAnchorValue), this._events.memory = 1 / 0;
            }, s3.default.extend(s3.default.TransportTimelineSignal, s3.default.Signal), s3.default.TransportTimelineSignal.prototype._onTick = function(t13) {
                var e29 = this.getValueAtTime(s3.default.Transport.seconds);
                this._lastVal !== e29 && (this._lastVal = e29, this._outputSig.linearRampToValueAtTime(e29, t13));
            }, s3.default.TransportTimelineSignal.prototype._anchorValue = function(t13) {
                var e29 = this.getValueAtTime(s3.default.Transport.seconds);
                return this._lastVal = e29, this._outputSig.cancelScheduledValues(t13), this._outputSig.setValueAtTime(e29, t13), this;
            }, s3.default.TransportTimelineSignal.prototype.getValueAtTime = function(t13) {
                return t13 = s3.default.TransportTime(t13), s3.default.Signal.prototype.getValueAtTime.call(this, t13);
            }, s3.default.TransportTimelineSignal.prototype.setValueAtTime = function(t13, e29) {
                return e29 = s3.default.TransportTime(e29), s3.default.Signal.prototype.setValueAtTime.call(this, t13, e29), this;
            }, s3.default.TransportTimelineSignal.prototype.linearRampToValueAtTime = function(t13, e29) {
                return e29 = s3.default.TransportTime(e29), s3.default.Signal.prototype.linearRampToValueAtTime.call(this, t13, e29), this;
            }, s3.default.TransportTimelineSignal.prototype.exponentialRampToValueAtTime = function(t13, e29) {
                return e29 = s3.default.TransportTime(e29), s3.default.Signal.prototype.exponentialRampToValueAtTime.call(this, t13, e29), this;
            }, s3.default.TransportTimelineSignal.prototype.setTargetAtTime = function(t13, e29, i39) {
                return e29 = s3.default.TransportTime(e29), s3.default.Signal.prototype.setTargetAtTime.call(this, t13, e29, i39), this;
            }, s3.default.TransportTimelineSignal.prototype.cancelScheduledValues = function(t13) {
                return t13 = s3.default.TransportTime(t13), s3.default.Signal.prototype.cancelScheduledValues.call(this, t13), this;
            }, s3.default.TransportTimelineSignal.prototype.setValueCurveAtTime = function(t13, e29, i39, n17) {
                return e29 = s3.default.TransportTime(e29), i39 = s3.default.TransportTime(i39), s3.default.Signal.prototype.setValueCurveAtTime.call(this, t13, e29, i39, n17), this;
            }, s3.default.TransportTimelineSignal.prototype.cancelAndHoldAtTime = function(t13) {
                return s3.default.Signal.prototype.cancelAndHoldAtTime.call(this, s3.default.TransportTime(t13));
            }, s3.default.TransportTimelineSignal.prototype.dispose = function() {
                s3.default.Transport.clear(this._synced), s3.default.Transport.off("start stop pause", this._syncedCallback), this._events.cancel(0), s3.default.Signal.prototype.dispose.call(this), this._outputSig.dispose(), this._outputSig = null;
            }, e3.default = s3.default.TransportTimelineSignal;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(29), i5(5);
            s3.default.Normalize = function(t13, e29) {
                s3.default.SignalBase.call(this), this._inputMin = s3.default.defaultArg(t13, 0), this._inputMax = s3.default.defaultArg(e29, 1), this._sub = this.input = new s3.default.Add(0), this._div = this.output = new s3.default.Multiply(1), this._sub.connect(this._div), this._setRange();
            }, s3.default.extend(s3.default.Normalize, s3.default.SignalBase), Object.defineProperty(s3.default.Normalize.prototype, "min", {
                get: function() {
                    return this._inputMin;
                },
                set: function(t13) {
                    this._inputMin = t13, this._setRange();
                }
            }), Object.defineProperty(s3.default.Normalize.prototype, "max", {
                get: function() {
                    return this._inputMax;
                },
                set: function(t13) {
                    this._inputMax = t13, this._setRange();
                }
            }), s3.default.Normalize.prototype._setRange = function() {
                this._sub.value = -this._inputMin, this._div.value = 1 / (this._inputMax - this._inputMin);
            }, s3.default.Normalize.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._sub.dispose(), this._sub = null, this._div.dispose(), this._div = null, this;
            }, e3.default = s3.default.Normalize;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(7), i5(2);
            s3.default.GainToAudio = function() {
                s3.default.SignalBase.call(this), this._norm = this.input = this.output = new s3.default.WaveShaper(function(t13) {
                    return 2 * Math.abs(t13) - 1;
                });
            }, s3.default.extend(s3.default.GainToAudio, s3.default.SignalBase), s3.default.GainToAudio.prototype.dispose = function() {
                return s3.default.SignalBase.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this;
            }, e3.default = s3.default.GainToAudio;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(21), i5(78), i5(32);
            s3.default.Sampler = function(t13) {
                var e29 = Array.prototype.slice.call(arguments);
                e29.shift();
                var i39 = s3.default.defaults(e29, [
                    "onload",
                    "baseUrl"
                ], s3.default.Sampler);
                s3.default.Instrument.call(this, i39);
                var n17 = {
                };
                for(var o in t13)if (s3.default.isNote(o)) n17[s3.default.Frequency(o).toMidi()] = t13[o];
                else {
                    if (isNaN(parseFloat(o))) throw new Error("Tone.Sampler: url keys must be the note's pitch");
                    n17[o] = t13[o];
                }
                this._buffers = new s3.default.Buffers(n17, i39.onload, i39.baseUrl), this._activeSources = {
                }, this.attack = i39.attack, this.release = i39.release, this.curve = i39.curve;
            }, s3.default.extend(s3.default.Sampler, s3.default.Instrument), s3.default.Sampler.defaults = {
                attack: 0,
                release: 0.1,
                onload: s3.default.noOp,
                baseUrl: "",
                curve: "exponential"
            }, s3.default.Sampler.prototype._findClosest = function(t13) {
                for(var e29 = 0; e29 < 96;){
                    if (this._buffers.has(t13 + e29)) return -e29;
                    if (this._buffers.has(t13 - e29)) return e29;
                    e29++;
                }
                throw new Error("No available buffers for note: " + t13);
            }, s3.default.Sampler.prototype.triggerAttack = function(t13, e29, i39) {
                this.log("triggerAttack", t13, e29, i39), Array.isArray(t13) || (t13 = [
                    t13
                ]);
                for(var n17 = 0; n17 < t13.length; n17++){
                    var o = s3.default.Frequency(t13[n17]).toMidi(), a = this._findClosest(o), r = o - a, l = this._buffers.get(r), u = s3.default.intervalToFrequencyRatio(a), d = new s3.default.BufferSource({
                        buffer: l,
                        playbackRate: u,
                        fadeIn: this.attack,
                        fadeOut: this.release,
                        curve: this.curve
                    }).connect(this.output);
                    d.start(e29, 0, l.duration / u, i39), s3.default.isArray(this._activeSources[o]) || (this._activeSources[o] = []), this._activeSources[o].push(d), d.onended = (function() {
                        if (this._activeSources && this._activeSources[o]) {
                            var t14 = this._activeSources[o].indexOf(d);
                            -1 !== t14 && this._activeSources[o].splice(t14, 1);
                        }
                    }).bind(this);
                }
                return this;
            }, s3.default.Sampler.prototype.triggerRelease = function(t13, e29) {
                this.log("triggerRelease", t13, e29), Array.isArray(t13) || (t13 = [
                    t13
                ]);
                for(var i39 = 0; i39 < t13.length; i39++){
                    var n17 = s3.default.Frequency(t13[i39]).toMidi();
                    this._activeSources[n17] && this._activeSources[n17].length && (e29 = this.toSeconds(e29), this._activeSources[n17].forEach(function(t15) {
                        t15.stop(e29);
                    }), this._activeSources[n17] = []);
                }
                return this;
            }, s3.default.Sampler.prototype.releaseAll = function(t13) {
                for(var e29 in t13 = this.toSeconds(t13), this._activeSources)for(var i39 = this._activeSources[e29]; i39.length;)i39.shift().stop(t13);
                return this;
            }, s3.default.Sampler.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this;
            }, s3.default.Sampler.prototype.triggerAttackRelease = function(t13, e29, i39, n18) {
                if (i39 = this.toSeconds(i39), this.triggerAttack(t13, i39, n18), s3.default.isArray(e29) && s3.default.isArray(t13)) for(var o = 0; o < t13.length; o++){
                    var a = e29[Math.min(o, e29.length - 1)];
                    this.triggerRelease(t13[o], i39 + this.toSeconds(a));
                }
                else this.triggerRelease(t13, i39 + this.toSeconds(e29));
                return this;
            }, s3.default.Sampler.prototype.add = function(t13, e29, i39) {
                if (s3.default.isNote(t13)) {
                    var n18 = s3.default.Frequency(t13).toMidi();
                    this._buffers.add(n18, e29, i39);
                } else {
                    if (isNaN(parseFloat(t13))) throw new Error("Tone.Sampler: note must be the note's pitch. Instead got " + t13);
                    this._buffers.add(t13, e29, i39);
                }
            }, Object.defineProperty(s3.default.Sampler.prototype, "loaded", {
                get: function() {
                    return this._buffers.loaded;
                }
            }), s3.default.Sampler.prototype.dispose = function() {
                for(var t13 in s3.default.Instrument.prototype.dispose.call(this), this._buffers.dispose(), this._buffers = null, this._activeSources)this._activeSources[t13].forEach(function(t15) {
                    t15.dispose();
                });
                return this._activeSources = null, this;
            }, e3.default = s3.default.Sampler;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(38), i5(6);
            s3.default.PolySynth = function() {
                var t13 = s3.default.defaults(arguments, [
                    "polyphony",
                    "voice"
                ], s3.default.PolySynth);
                s3.default.Instrument.call(this, t13), (t13 = s3.default.defaultArg(t13, s3.default.Instrument.defaults)).polyphony = Math.min(s3.default.PolySynth.MAX_POLYPHONY, t13.polyphony), this.voices = new Array(t13.polyphony), this.assert(t13.polyphony > 0, "polyphony must be greater than 0"), this.detune = new s3.default.Signal(t13.detune, s3.default.Type.Cents), this._readOnly("detune");
                for(var e29 = 0; e29 < t13.polyphony; e29++){
                    var i39 = new t13.voice(arguments[2], arguments[3]);
                    if (!(i39 instanceof s3.default.Monophonic)) throw new Error("Synth constructor must be instance of Tone.Monophonic");
                    this.voices[e29] = i39, i39.index = e29, i39.connect(this.output), i39.hasOwnProperty("detune") && this.detune.connect(i39.detune);
                }
            }, s3.default.extend(s3.default.PolySynth, s3.default.Instrument), s3.default.PolySynth.defaults = {
                polyphony: 4,
                volume: 0,
                detune: 0,
                voice: s3.default.Synth
            }, s3.default.PolySynth.prototype._getClosestVoice = function(t13, e29) {
                var i40 = this.voices.find(function(i41) {
                    if (Math.abs(i41.frequency.getValueAtTime(t13) - s3.default.Frequency(e29)) < 0.0001 && i41.getLevelAtTime(t13) > 0.00001) return i41;
                });
                return i40 || this.voices.slice().sort((function(e30, i41) {
                    var s11 = e30.getLevelAtTime(t13 + this.blockTime), n19 = i41.getLevelAtTime(t13 + this.blockTime);
                    return s11 < 0.00001 && (s11 = 0), n19 < 0.00001 && (n19 = 0), s11 - n19;
                }).bind(this))[0];
            }, s3.default.PolySynth.prototype.triggerAttack = function(t13, e29, i40) {
                return Array.isArray(t13) || (t13 = [
                    t13
                ]), e29 = this.toSeconds(e29), t13.forEach((function(t15) {
                    var s11 = this._getClosestVoice(e29, t15);
                    s11.triggerAttack(t15, e29, i40), this.log("triggerAttack", s11.index, t15);
                }).bind(this)), this;
            }, s3.default.PolySynth.prototype.triggerRelease = function(t13, e29) {
                return Array.isArray(t13) || (t13 = [
                    t13
                ]), e29 = this.toSeconds(e29), t13.forEach((function(t15) {
                    var i40 = this._getClosestVoice(e29, t15);
                    this.log("triggerRelease", i40.index, t15), i40.triggerRelease(e29);
                }).bind(this)), this;
            }, s3.default.PolySynth.prototype.triggerAttackRelease = function(t13, e29, i40, n19) {
                if (i40 = this.toSeconds(i40), this.triggerAttack(t13, i40, n19), s3.default.isArray(e29) && s3.default.isArray(t13)) for(var o = 0; o < t13.length; o++){
                    var a = e29[Math.min(o, e29.length - 1)];
                    this.triggerRelease(t13[o], i40 + this.toSeconds(a));
                }
                else this.triggerRelease(t13, i40 + this.toSeconds(e29));
                return this;
            }, s3.default.PolySynth.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this;
            }, s3.default.PolySynth.prototype.set = function(t13, e29, i40) {
                for(var s11 = 0; s11 < this.voices.length; s11++)this.voices[s11].set(t13, e29, i40);
                return this;
            }, s3.default.PolySynth.prototype.get = function(t13) {
                return this.voices[0].get(t13);
            }, s3.default.PolySynth.prototype.releaseAll = function(t13) {
                return t13 = this.toSeconds(t13), this.voices.forEach(function(e29) {
                    e29.triggerRelease(t13);
                }), this;
            }, s3.default.PolySynth.prototype.dispose = function() {
                return s3.default.Instrument.prototype.dispose.call(this), this.voices.forEach(function(t13) {
                    t13.dispose();
                }), this._writable("detune"), this.detune.dispose(), this.detune = null, this.voices = null, this;
            }, s3.default.PolySynth.MAX_POLYPHONY = 20, e3.default = s3.default.PolySynth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(21), i5(39), i5(54);
            s3.default.PluckSynth = function(t13) {
                t13 = s3.default.defaultArg(t13, s3.default.PluckSynth.defaults), s3.default.Instrument.call(this, t13), this._noise = new s3.default.Noise("pink"), this.attackNoise = t13.attackNoise, this._lfcf = new s3.default.LowpassCombFilter({
                    resonance: t13.resonance,
                    dampening: t13.dampening
                }), this.resonance = this._lfcf.resonance, this.dampening = this._lfcf.dampening, this._noise.connect(this._lfcf), this._lfcf.connect(this.output), this._readOnly([
                    "resonance",
                    "dampening"
                ]);
            }, s3.default.extend(s3.default.PluckSynth, s3.default.Instrument), s3.default.PluckSynth.defaults = {
                attackNoise: 1,
                dampening: 4000,
                resonance: 0.7
            }, s3.default.PluckSynth.prototype.triggerAttack = function(t13, e29) {
                t13 = this.toFrequency(t13), e29 = this.toSeconds(e29);
                var i40 = 1 / t13;
                return this._lfcf.delayTime.setValueAtTime(i40, e29), this._noise.start(e29), this._noise.stop(e29 + i40 * this.attackNoise), this;
            }, s3.default.PluckSynth.prototype.dispose = function() {
                return s3.default.Instrument.prototype.dispose.call(this), this._noise.dispose(), this._lfcf.dispose(), this._noise = null, this._lfcf = null, this._writable([
                    "resonance",
                    "dampening"
                ]), this.dampening = null, this.resonance = null, this;
            }, e3.default = s3.default.PluckSynth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(31), i5(41), i5(39), i5(2), i5(9), i5(21);
            s3.default.NoiseSynth = function(t13) {
                t13 = s3.default.defaultArg(t13, s3.default.NoiseSynth.defaults), s3.default.Instrument.call(this, t13), this.noise = new s3.default.Noise(t13.noise), this.envelope = new s3.default.AmplitudeEnvelope(t13.envelope), this.noise.chain(this.envelope, this.output), this._readOnly([
                    "noise",
                    "envelope"
                ]);
            }, s3.default.extend(s3.default.NoiseSynth, s3.default.Instrument), s3.default.NoiseSynth.defaults = {
                noise: {
                    type: "white"
                },
                envelope: {
                    attack: 0.005,
                    decay: 0.1,
                    sustain: 0
                }
            }, s3.default.NoiseSynth.prototype.triggerAttack = function(t13, e29) {
                return t13 = this.toSeconds(t13), this.envelope.triggerAttack(t13, e29), this.noise.start(t13), 0 === this.envelope.sustain && this.noise.stop(t13 + this.envelope.attack + this.envelope.decay), this;
            }, s3.default.NoiseSynth.prototype.triggerRelease = function(t13) {
                return t13 = this.toSeconds(t13), this.envelope.triggerRelease(t13), this.noise.stop(t13 + this.envelope.release), this;
            }, s3.default.NoiseSynth.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0), this;
            }, s3.default.NoiseSynth.prototype.triggerAttackRelease = function(t13, e29, i40) {
                return e29 = this.toSeconds(e29), t13 = this.toSeconds(t13), this.triggerAttack(e29, i40), this.triggerRelease(e29 + t13), this;
            }, s3.default.NoiseSynth.prototype.dispose = function() {
                return s3.default.Instrument.prototype.dispose.call(this), this._writable([
                    "noise",
                    "envelope"
                ]), this.noise.dispose(), this.noise = null, this.envelope.dispose(), this.envelope = null, this;
            }, e3.default = s3.default.NoiseSynth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0), n19 = (i5(21), i5(49), i5(9), i5(41), i5(31), i5(3), i5(26), i5(5), [
                1,
                1.483,
                1.932,
                2.546,
                2.63,
                3.897
            ]);
            s3.default.MetalSynth = function(t13) {
                t13 = s3.default.defaultArg(t13, s3.default.MetalSynth.defaults), s3.default.Instrument.call(this, t13), this.frequency = new s3.default.Signal(t13.frequency, s3.default.Type.Frequency), this._oscillators = [], this._freqMultipliers = [], this._amplitue = new s3.default.Gain(0).connect(this.output), this._highpass = new s3.default.Filter({
                    type: "highpass",
                    Q: -3.0102999566398125
                }).connect(this._amplitue), this._octaves = t13.octaves, this._filterFreqScaler = new s3.default.Scale(t13.resonance, 7000), this.envelope = new s3.default.Envelope({
                    attack: t13.envelope.attack,
                    attackCurve: "linear",
                    decay: t13.envelope.decay,
                    sustain: 0,
                    release: t13.envelope.release
                }).chain(this._filterFreqScaler, this._highpass.frequency), this.envelope.connect(this._amplitue.gain);
                for(var e29 = 0; e29 < n19.length; e29++){
                    var i40 = new s3.default.FMOscillator({
                        type: "square",
                        modulationType: "square",
                        harmonicity: t13.harmonicity,
                        modulationIndex: t13.modulationIndex
                    });
                    i40.connect(this._highpass), this._oscillators[e29] = i40;
                    var o = new s3.default.Multiply(n19[e29]);
                    this._freqMultipliers[e29] = o, this.frequency.chain(o, i40.frequency);
                }
                this.octaves = t13.octaves;
            }, s3.default.extend(s3.default.MetalSynth, s3.default.Instrument), s3.default.MetalSynth.defaults = {
                frequency: 200,
                envelope: {
                    attack: 0.001,
                    decay: 1.4,
                    release: 0.2
                },
                harmonicity: 5.1,
                modulationIndex: 32,
                resonance: 4000,
                octaves: 1.5
            }, s3.default.MetalSynth.prototype.triggerAttack = function(t13, e29) {
                return t13 = this.toSeconds(t13), e29 = s3.default.defaultArg(e29, 1), this.envelope.triggerAttack(t13, e29), this._oscillators.forEach(function(e30) {
                    e30.start(t13);
                }), 0 === this.envelope.sustain && this._oscillators.forEach((function(e30) {
                    e30.stop(t13 + this.envelope.attack + this.envelope.decay);
                }).bind(this)), this;
            }, s3.default.MetalSynth.prototype.triggerRelease = function(t13) {
                return t13 = this.toSeconds(t13), this.envelope.triggerRelease(t13), this._oscillators.forEach((function(e29) {
                    e29.stop(t13 + this.envelope.release);
                }).bind(this)), this;
            }, s3.default.MetalSynth.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0), this;
            }, s3.default.MetalSynth.prototype.triggerAttackRelease = function(t13, e29, i41) {
                return e29 = this.toSeconds(e29), t13 = this.toSeconds(t13), this.triggerAttack(e29, i41), this.triggerRelease(e29 + t13), this;
            }, Object.defineProperty(s3.default.MetalSynth.prototype, "modulationIndex", {
                get: function() {
                    return this._oscillators[0].modulationIndex.value;
                },
                set: function(t13) {
                    for(var e29 = 0; e29 < this._oscillators.length; e29++)this._oscillators[e29].modulationIndex.value = t13;
                }
            }), Object.defineProperty(s3.default.MetalSynth.prototype, "harmonicity", {
                get: function() {
                    return this._oscillators[0].harmonicity.value;
                },
                set: function(t13) {
                    for(var e29 = 0; e29 < this._oscillators.length; e29++)this._oscillators[e29].harmonicity.value = t13;
                }
            }), Object.defineProperty(s3.default.MetalSynth.prototype, "resonance", {
                get: function() {
                    return this._filterFreqScaler.min;
                },
                set: function(t13) {
                    this._filterFreqScaler.min = t13, this.octaves = this._octaves;
                }
            }), Object.defineProperty(s3.default.MetalSynth.prototype, "octaves", {
                get: function() {
                    return this._octaves;
                },
                set: function(t13) {
                    this._octaves = t13, this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t13);
                }
            }), s3.default.MetalSynth.prototype.dispose = function() {
                s3.default.Instrument.prototype.dispose.call(this);
                for(var t13 = 0; t13 < this._oscillators.length; t13++)this._oscillators[t13].dispose(), this._freqMultipliers[t13].dispose();
                this._oscillators = null, this._freqMultipliers = null, this.frequency.dispose(), this.frequency = null, this._filterFreqScaler.dispose(), this._filterFreqScaler = null, this._amplitue.dispose(), this._amplitue = null, this.envelope.dispose(), this.envelope = null, this._highpass.dispose(), this._highpass = null;
            }, e3.default = s3.default.MetalSynth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(37), i5(21), i5(31);
            s3.default.MembraneSynth = function(t13) {
                t13 = s3.default.defaultArg(t13, s3.default.MembraneSynth.defaults), s3.default.Instrument.call(this, t13), this.oscillator = new s3.default.OmniOscillator(t13.oscillator), this.envelope = new s3.default.AmplitudeEnvelope(t13.envelope), this.octaves = t13.octaves, this.pitchDecay = t13.pitchDecay, this.oscillator.chain(this.envelope, this.output), this._readOnly([
                    "oscillator",
                    "envelope"
                ]);
            }, s3.default.extend(s3.default.MembraneSynth, s3.default.Instrument), s3.default.MembraneSynth.defaults = {
                pitchDecay: 0.05,
                octaves: 10,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: 0.001,
                    decay: 0.4,
                    sustain: 0.01,
                    release: 1.4,
                    attackCurve: "exponential"
                }
            }, s3.default.MembraneSynth.prototype.triggerAttack = function(t13, e29, i41) {
                e29 = this.toSeconds(e29);
                var s11 = (t13 = this.toFrequency(t13)) * this.octaves;
                return this.oscillator.frequency.setValueAtTime(s11, e29), this.oscillator.frequency.exponentialRampToValueAtTime(t13, e29 + this.toSeconds(this.pitchDecay)), this.envelope.triggerAttack(e29, i41), this.oscillator.start(e29), 0 === this.envelope.sustain && this.oscillator.stop(e29 + this.envelope.attack + this.envelope.decay), this;
            }, s3.default.MembraneSynth.prototype.triggerRelease = function(t13) {
                return t13 = this.toSeconds(t13), this.envelope.triggerRelease(t13), this.oscillator.stop(t13 + this.envelope.release), this;
            }, s3.default.MembraneSynth.prototype.dispose = function() {
                return s3.default.Instrument.prototype.dispose.call(this), this._writable([
                    "oscillator",
                    "envelope"
                ]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this;
            }, e3.default = s3.default.MembraneSynth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(38), i5(2), i5(5), i5(25);
            s3.default.FMSynth = function(t13) {
                t13 = s3.default.defaultArg(t13, s3.default.FMSynth.defaults), s3.default.Monophonic.call(this, t13), this._carrier = new s3.default.Synth(t13.carrier), this._carrier.volume.value = -10, this.oscillator = this._carrier.oscillator, this.envelope = this._carrier.envelope.set(t13.envelope), this._modulator = new s3.default.Synth(t13.modulator), this._modulator.volume.value = -10, this.modulation = this._modulator.oscillator.set(t13.modulation), this.modulationEnvelope = this._modulator.envelope.set(t13.modulationEnvelope), this.frequency = new s3.default.Signal(440, s3.default.Type.Frequency), this.detune = new s3.default.Signal(t13.detune, s3.default.Type.Cents), this.harmonicity = new s3.default.Multiply(t13.harmonicity), this.harmonicity.units = s3.default.Type.Positive, this.modulationIndex = new s3.default.Multiply(t13.modulationIndex), this.modulationIndex.units = s3.default.Type.Positive, this._modulationNode = new s3.default.Gain(0), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this._readOnly([
                    "frequency",
                    "harmonicity",
                    "modulationIndex",
                    "oscillator",
                    "envelope",
                    "modulation",
                    "modulationEnvelope",
                    "detune"
                ]);
            }, s3.default.extend(s3.default.FMSynth, s3.default.Monophonic), s3.default.FMSynth.defaults = {
                harmonicity: 3,
                modulationIndex: 10,
                detune: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: 0.01,
                    decay: 0.01,
                    sustain: 1,
                    release: 0.5
                },
                modulation: {
                    type: "square"
                },
                modulationEnvelope: {
                    attack: 0.5,
                    decay: 0,
                    sustain: 1,
                    release: 0.5
                }
            }, s3.default.FMSynth.prototype._triggerEnvelopeAttack = function(t13, e29) {
                return t13 = this.toSeconds(t13), this._carrier._triggerEnvelopeAttack(t13, e29), this._modulator._triggerEnvelopeAttack(t13), this;
            }, s3.default.FMSynth.prototype._triggerEnvelopeRelease = function(t13) {
                return t13 = this.toSeconds(t13), this._carrier._triggerEnvelopeRelease(t13), this._modulator._triggerEnvelopeRelease(t13), this;
            }, s3.default.FMSynth.prototype.dispose = function() {
                return s3.default.Monophonic.prototype.dispose.call(this), this._writable([
                    "frequency",
                    "harmonicity",
                    "modulationIndex",
                    "oscillator",
                    "envelope",
                    "modulation",
                    "modulationEnvelope",
                    "detune"
                ]), this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this.modulationIndex.dispose(), this.modulationIndex = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationNode.dispose(), this._modulationNode = null, this.oscillator = null, this.envelope = null, this.modulationEnvelope = null, this.modulation = null, this;
            }, e3.default = s3.default.FMSynth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(66), i5(12), i5(2), i5(5), i5(25), i5(14);
            s3.default.DuoSynth = function(t13) {
                t13 = s3.default.defaultArg(t13, s3.default.DuoSynth.defaults), s3.default.Monophonic.call(this, t13), this.voice0 = new s3.default.MonoSynth(t13.voice0), this.voice0.volume.value = -10, this.voice1 = new s3.default.MonoSynth(t13.voice1), this.voice1.volume.value = -10, this._vibrato = new s3.default.LFO(t13.vibratoRate, -50, 50), this._vibrato.start(), this.vibratoRate = this._vibrato.frequency, this._vibratoGain = new s3.default.Gain(t13.vibratoAmount, s3.default.Type.Positive), this.vibratoAmount = this._vibratoGain.gain, this.frequency = new s3.default.Signal(440, s3.default.Type.Frequency), this.harmonicity = new s3.default.Multiply(t13.harmonicity), this.harmonicity.units = s3.default.Type.Positive, this.frequency.connect(this.voice0.frequency), this.frequency.chain(this.harmonicity, this.voice1.frequency), this._vibrato.connect(this._vibratoGain), this._vibratoGain.fan(this.voice0.detune, this.voice1.detune), this.voice0.connect(this.output), this.voice1.connect(this.output), this._readOnly([
                    "voice0",
                    "voice1",
                    "frequency",
                    "vibratoAmount",
                    "vibratoRate"
                ]);
            }, s3.default.extend(s3.default.DuoSynth, s3.default.Monophonic), s3.default.DuoSynth.defaults = {
                vibratoAmount: 0.5,
                vibratoRate: 5,
                harmonicity: 1.5,
                voice0: {
                    volume: -10,
                    portamento: 0,
                    oscillator: {
                        type: "sine"
                    },
                    filterEnvelope: {
                        attack: 0.01,
                        decay: 0,
                        sustain: 1,
                        release: 0.5
                    },
                    envelope: {
                        attack: 0.01,
                        decay: 0,
                        sustain: 1,
                        release: 0.5
                    }
                },
                voice1: {
                    volume: -10,
                    portamento: 0,
                    oscillator: {
                        type: "sine"
                    },
                    filterEnvelope: {
                        attack: 0.01,
                        decay: 0,
                        sustain: 1,
                        release: 0.5
                    },
                    envelope: {
                        attack: 0.01,
                        decay: 0,
                        sustain: 1,
                        release: 0.5
                    }
                }
            }, s3.default.DuoSynth.prototype._triggerEnvelopeAttack = function(t13, e29) {
                return t13 = this.toSeconds(t13), this.voice0._triggerEnvelopeAttack(t13, e29), this.voice1._triggerEnvelopeAttack(t13, e29), this;
            }, s3.default.DuoSynth.prototype._triggerEnvelopeRelease = function(t13) {
                return this.voice0._triggerEnvelopeRelease(t13), this.voice1._triggerEnvelopeRelease(t13), this;
            }, s3.default.DuoSynth.prototype.getLevelAtTime = function(t13) {
                return (this.voice0.getLevelAtTime(t13) + this.voice1.getLevelAtTime(t13)) / 2;
            }, s3.default.DuoSynth.prototype.dispose = function() {
                return s3.default.Monophonic.prototype.dispose.call(this), this._writable([
                    "voice0",
                    "voice1",
                    "frequency",
                    "vibratoAmount",
                    "vibratoRate"
                ]), this.voice0.dispose(), this.voice0 = null, this.voice1.dispose(), this.voice1 = null, this.frequency.dispose(), this.frequency = null, this._vibratoGain.dispose(), this._vibratoGain = null, this._vibrato = null, this.harmonicity.dispose(), this.harmonicity = null, this.vibratoAmount.dispose(), this.vibratoAmount = null, this.vibratoRate = null, this;
            }, e3.default = s3.default.DuoSynth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(38), i5(2), i5(5), i5(25), i5(22), i5(3);
            s3.default.AMSynth = function(t13) {
                t13 = s3.default.defaultArg(t13, s3.default.AMSynth.defaults), s3.default.Monophonic.call(this, t13), this._carrier = new s3.default.Synth, this._carrier.volume.value = -10, this.oscillator = this._carrier.oscillator.set(t13.oscillator), this.envelope = this._carrier.envelope.set(t13.envelope), this._modulator = new s3.default.Synth, this._modulator.volume.value = -10, this.modulation = this._modulator.oscillator.set(t13.modulation), this.modulationEnvelope = this._modulator.envelope.set(t13.modulationEnvelope), this.frequency = new s3.default.Signal(440, s3.default.Type.Frequency), this.detune = new s3.default.Signal(t13.detune, s3.default.Type.Cents), this.harmonicity = new s3.default.Multiply(t13.harmonicity), this.harmonicity.units = s3.default.Type.Positive, this._modulationScale = new s3.default.AudioToGain, this._modulationNode = new s3.default.Gain, this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), this._readOnly([
                    "frequency",
                    "harmonicity",
                    "oscillator",
                    "envelope",
                    "modulation",
                    "modulationEnvelope",
                    "detune"
                ]);
            }, s3.default.extend(s3.default.AMSynth, s3.default.Monophonic), s3.default.AMSynth.defaults = {
                harmonicity: 3,
                detune: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: 0.01,
                    decay: 0.01,
                    sustain: 1,
                    release: 0.5
                },
                modulation: {
                    type: "square"
                },
                modulationEnvelope: {
                    attack: 0.5,
                    decay: 0,
                    sustain: 1,
                    release: 0.5
                }
            }, s3.default.AMSynth.prototype._triggerEnvelopeAttack = function(t13, e29) {
                return t13 = this.toSeconds(t13), this._carrier._triggerEnvelopeAttack(t13, e29), this._modulator._triggerEnvelopeAttack(t13), this;
            }, s3.default.AMSynth.prototype._triggerEnvelopeRelease = function(t13) {
                return this._carrier._triggerEnvelopeRelease(t13), this._modulator._triggerEnvelopeRelease(t13), this;
            }, s3.default.AMSynth.prototype.dispose = function() {
                return s3.default.Monophonic.prototype.dispose.call(this), this._writable([
                    "frequency",
                    "harmonicity",
                    "oscillator",
                    "envelope",
                    "modulation",
                    "modulationEnvelope",
                    "detune"
                ]), this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationScale.dispose(), this._modulationScale = null, this._modulationNode.dispose(), this._modulationNode = null, this.oscillator = null, this.envelope = null, this.modulationEnvelope = null, this.modulation = null, this;
            }, e3.default = s3.default.AMSynth;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(70), i5(16);
            s3.default.Sequence = function() {
                var t13 = s3.default.defaults(arguments, [
                    "callback",
                    "events",
                    "subdivision"
                ], s3.default.Sequence), e29 = t13.events;
                if (delete t13.events, s3.default.Part.call(this, t13), this._subdivision = this.toTicks(t13.subdivision), s3.default.isUndef(t13.loopEnd) && s3.default.isDefined(e29) && (this._loopEnd = e29.length * this._subdivision), this._loop = !0, s3.default.isDefined(e29)) for(var i41 = 0; i41 < e29.length; i41++)this.add(i41, e29[i41]);
            }, s3.default.extend(s3.default.Sequence, s3.default.Part), s3.default.Sequence.defaults = {
                subdivision: "4n"
            }, Object.defineProperty(s3.default.Sequence.prototype, "subdivision", {
                get: function() {
                    return s3.default.Ticks(this._subdivision).toSeconds();
                }
            }), s3.default.Sequence.prototype.at = function(t13, e29) {
                return s3.default.isArray(e29) && this.remove(t13), s3.default.Part.prototype.at.call(this, this._indexTime(t13), e29);
            }, s3.default.Sequence.prototype.add = function(t13, e29) {
                if (null === e29) return this;
                if (s3.default.isArray(e29)) {
                    var i41 = Math.round(this._subdivision / e29.length);
                    e29 = new s3.default.Sequence(this._tick.bind(this), e29, s3.default.Ticks(i41));
                }
                return s3.default.Part.prototype.add.call(this, this._indexTime(t13), e29), this;
            }, s3.default.Sequence.prototype.remove = function(t13, e29) {
                return s3.default.Part.prototype.remove.call(this, this._indexTime(t13), e29), this;
            }, s3.default.Sequence.prototype._indexTime = function(t13) {
                return t13 instanceof s3.default.TransportTime ? t13 : s3.default.Ticks(t13 * this._subdivision + this.startOffset).toSeconds();
            }, s3.default.Sequence.prototype.dispose = function() {
                return s3.default.Part.prototype.dispose.call(this), this;
            }, e3.default = s3.default.Sequence;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(71), i5(79);
            s3.default.Pattern = function() {
                var t13 = s3.default.defaults(arguments, [
                    "callback",
                    "values",
                    "pattern"
                ], s3.default.Pattern);
                s3.default.Loop.call(this, t13), this._pattern = new s3.default.CtrlPattern({
                    values: t13.values,
                    type: t13.pattern,
                    index: t13.index
                });
            }, s3.default.extend(s3.default.Pattern, s3.default.Loop), s3.default.Pattern.defaults = {
                pattern: s3.default.CtrlPattern.Type.Up,
                callback: s3.default.noOp,
                values: []
            }, s3.default.Pattern.prototype._tick = function(t13) {
                this.callback(t13, this._pattern.value), this._pattern.next();
            }, Object.defineProperty(s3.default.Pattern.prototype, "index", {
                get: function() {
                    return this._pattern.index;
                },
                set: function(t13) {
                    this._pattern.index = t13;
                }
            }), Object.defineProperty(s3.default.Pattern.prototype, "values", {
                get: function() {
                    return this._pattern.values;
                },
                set: function(t13) {
                    this._pattern.values = t13;
                }
            }), Object.defineProperty(s3.default.Pattern.prototype, "value", {
                get: function() {
                    return this._pattern.value;
                }
            }), Object.defineProperty(s3.default.Pattern.prototype, "pattern", {
                get: function() {
                    return this._pattern.type;
                },
                set: function(t13) {
                    this._pattern.type = t13;
                }
            }), s3.default.Pattern.prototype.dispose = function() {
                s3.default.Loop.prototype.dispose.call(this), this._pattern.dispose(), this._pattern = null;
            }, e3.default = s3.default.Pattern;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(8), i5(18), i5(12);
            s3.default.Vibrato = function() {
                var t13 = s3.default.defaults(arguments, [
                    "frequency",
                    "depth"
                ], s3.default.Vibrato);
                s3.default.Effect.call(this, t13), this._delayNode = new s3.default.Delay(0, t13.maxDelay), this._lfo = new s3.default.LFO({
                    type: t13.type,
                    min: 0,
                    max: t13.maxDelay,
                    frequency: t13.frequency,
                    phase: -90
                }).start().connect(this._delayNode.delayTime), this.frequency = this._lfo.frequency, this.depth = this._lfo.amplitude, this.depth.value = t13.depth, this._readOnly([
                    "frequency",
                    "depth"
                ]), this.effectSend.chain(this._delayNode, this.effectReturn);
            }, s3.default.extend(s3.default.Vibrato, s3.default.Effect), s3.default.Vibrato.defaults = {
                maxDelay: 0.005,
                frequency: 5,
                depth: 0.1,
                type: "sine"
            }, Object.defineProperty(s3.default.Vibrato.prototype, "type", {
                get: function() {
                    return this._lfo.type;
                },
                set: function(t13) {
                    this._lfo.type = t13;
                }
            }), s3.default.Vibrato.prototype.dispose = function() {
                s3.default.Effect.prototype.dispose.call(this), this._delayNode.dispose(), this._delayNode = null, this._lfo.dispose(), this._lfo = null, this._writable([
                    "frequency",
                    "depth"
                ]), this.frequency = null, this.depth = null;
            }, e3.default = s3.default.Vibrato;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(12), i5(15);
            s3.default.Tremolo = function() {
                var t13 = s3.default.defaults(arguments, [
                    "frequency",
                    "depth"
                ], s3.default.Tremolo);
                s3.default.StereoEffect.call(this, t13), this._lfoL = new s3.default.LFO({
                    phase: t13.spread,
                    min: 1,
                    max: 0
                }), this._lfoR = new s3.default.LFO({
                    phase: t13.spread,
                    min: 1,
                    max: 0
                }), this._amplitudeL = new s3.default.Gain, this._amplitudeR = new s3.default.Gain, this.frequency = new s3.default.Signal(t13.frequency, s3.default.Type.Frequency), this.depth = new s3.default.Signal(t13.depth, s3.default.Type.NormalRange), this._readOnly([
                    "frequency",
                    "depth"
                ]), this.effectSendL.chain(this._amplitudeL, this.effectReturnL), this.effectSendR.chain(this._amplitudeR, this.effectReturnR), this._lfoL.connect(this._amplitudeL.gain), this._lfoR.connect(this._amplitudeR.gain), this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency), this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude), this.type = t13.type, this.spread = t13.spread;
            }, s3.default.extend(s3.default.Tremolo, s3.default.StereoEffect), s3.default.Tremolo.defaults = {
                frequency: 10,
                type: "sine",
                depth: 0.5,
                spread: 180
            }, s3.default.Tremolo.prototype.start = function(t13) {
                return this._lfoL.start(t13), this._lfoR.start(t13), this;
            }, s3.default.Tremolo.prototype.stop = function(t13) {
                return this._lfoL.stop(t13), this._lfoR.stop(t13), this;
            }, s3.default.Tremolo.prototype.sync = function(t13) {
                return this._lfoL.sync(t13), this._lfoR.sync(t13), s3.default.Transport.syncSignal(this.frequency), this;
            }, s3.default.Tremolo.prototype.unsync = function() {
                return this._lfoL.unsync(), this._lfoR.unsync(), s3.default.Transport.unsyncSignal(this.frequency), this;
            }, Object.defineProperty(s3.default.Tremolo.prototype, "type", {
                get: function() {
                    return this._lfoL.type;
                },
                set: function(t13) {
                    this._lfoL.type = t13, this._lfoR.type = t13;
                }
            }), Object.defineProperty(s3.default.Tremolo.prototype, "spread", {
                get: function() {
                    return this._lfoR.phase - this._lfoL.phase;
                },
                set: function(t13) {
                    this._lfoL.phase = 90 - t13 / 2, this._lfoR.phase = t13 / 2 + 90;
                }
            }), s3.default.Tremolo.prototype.dispose = function() {
                return s3.default.StereoEffect.prototype.dispose.call(this), this._writable([
                    "frequency",
                    "depth"
                ]), this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, this._amplitudeL.dispose(), this._amplitudeL = null, this._amplitudeR.dispose(), this._amplitudeR = null, this.frequency = null, this.depth = null, this;
            }, e3.default = s3.default.Tremolo;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(73), i5(2), i5(5), i5(13);
            s3.default.StereoWidener = function() {
                var t13 = s3.default.defaults(arguments, [
                    "width"
                ], s3.default.StereoWidener);
                s3.default.MidSideEffect.call(this, t13), this.width = new s3.default.Signal(t13.width, s3.default.Type.NormalRange), this._readOnly([
                    "width"
                ]), this._twoTimesWidthMid = new s3.default.Multiply(2), this._twoTimesWidthSide = new s3.default.Multiply(2), this._midMult = new s3.default.Multiply, this._twoTimesWidthMid.connect(this._midMult, 0, 1), this.midSend.chain(this._midMult, this.midReturn), this._oneMinusWidth = new s3.default.Subtract, this._oneMinusWidth.connect(this._twoTimesWidthMid), s3.default.connect(this.context.getConstant(1), this._oneMinusWidth, 0, 0), this.width.connect(this._oneMinusWidth, 0, 1), this._sideMult = new s3.default.Multiply, this.width.connect(this._twoTimesWidthSide), this._twoTimesWidthSide.connect(this._sideMult, 0, 1), this.sideSend.chain(this._sideMult, this.sideReturn);
            }, s3.default.extend(s3.default.StereoWidener, s3.default.MidSideEffect), s3.default.StereoWidener.defaults = {
                width: 0.5
            }, s3.default.StereoWidener.prototype.dispose = function() {
                return s3.default.MidSideEffect.prototype.dispose.call(this), this._writable([
                    "width"
                ]), this.width.dispose(), this.width = null, this._midMult.dispose(), this._midMult = null, this._sideMult.dispose(), this._sideMult = null, this._twoTimesWidthMid.dispose(), this._twoTimesWidthMid = null, this._twoTimesWidthSide.dispose(), this._twoTimesWidthSide = null, this._oneMinusWidth.dispose(), this._oneMinusWidth = null, this;
            }, e3.default = s3.default.StereoWidener;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(15), i5(33), i5(3);
            s3.default.StereoFeedbackEffect = function() {
                var t13 = s3.default.defaults(arguments, [
                    "feedback"
                ], s3.default.FeedbackEffect);
                s3.default.StereoEffect.call(this, t13), this.feedback = new s3.default.Signal(t13.feedback, s3.default.Type.NormalRange), this._feedbackL = new s3.default.Gain, this._feedbackR = new s3.default.Gain, this.effectReturnL.chain(this._feedbackL, this.effectSendL), this.effectReturnR.chain(this._feedbackR, this.effectSendR), this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain), this._readOnly([
                    "feedback"
                ]);
            }, s3.default.extend(s3.default.StereoFeedbackEffect, s3.default.StereoEffect), s3.default.StereoFeedbackEffect.prototype.dispose = function() {
                return s3.default.StereoEffect.prototype.dispose.call(this), this._writable([
                    "feedback"
                ]), this.feedback.dispose(), this.feedback = null, this._feedbackL.dispose(), this._feedbackL = null, this._feedbackR.dispose(), this._feedbackR = null, this;
            }, e3.default = s3.default.StereoFeedbackEffect;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(77), i5(9), i5(10), i5(39), i5(3), i5(74);
            s3.default.Reverb = function() {
                var t13 = s3.default.defaults(arguments, [
                    "decay"
                ], s3.default.Reverb);
                s3.default.Effect.call(this, t13), this._convolver = this.context.createConvolver(), this.decay = t13.decay, this.preDelay = t13.preDelay, this.connectEffect(this._convolver);
            }, s3.default.extend(s3.default.Reverb, s3.default.Effect), s3.default.Reverb.defaults = {
                decay: 1.5,
                preDelay: 0.01
            }, s3.default.Reverb.prototype.generate = function() {
                return s3.default.Offline((function() {
                    var t13 = new s3.default.Noise, e29 = new s3.default.Noise, i42 = new s3.default.Merge;
                    t13.connect(i42.left), e29.connect(i42.right);
                    var n19 = (new s3.default.Gain).toMaster();
                    i42.connect(n19), t13.start(0), e29.start(0), n19.gain.setValueAtTime(0, 0), n19.gain.setValueAtTime(1, this.preDelay), n19.gain.exponentialApproachValueAtTime(0, this.preDelay, this.decay + this.preDelay);
                }).bind(this), this.decay + this.preDelay).then((function(t13) {
                    return this._convolver.buffer = t13.get(), this;
                }).bind(this));
            }, s3.default.Reverb.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this._convolver.disconnect(), this._convolver = null, this;
            }, e3.default = s3.default.Reverb;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(12), i5(23), i5(2), i5(33), i5(18);
            s3.default.PitchShift = function() {
                var t13 = s3.default.defaults(arguments, [
                    "pitch"
                ], s3.default.PitchShift);
                s3.default.FeedbackEffect.call(this, t13), this._frequency = new s3.default.Signal(0), this._delayA = new s3.default.Delay(0, 1), this._lfoA = new s3.default.LFO({
                    min: 0,
                    max: 0.1,
                    type: "sawtooth"
                }).connect(this._delayA.delayTime), this._delayB = new s3.default.Delay(0, 1), this._lfoB = new s3.default.LFO({
                    min: 0,
                    max: 0.1,
                    type: "sawtooth",
                    phase: 180
                }).connect(this._delayB.delayTime), this._crossFade = new s3.default.CrossFade, this._crossFadeLFO = new s3.default.LFO({
                    min: 0,
                    max: 1,
                    type: "triangle",
                    phase: 90
                }).connect(this._crossFade.fade), this._feedbackDelay = new s3.default.Delay(t13.delayTime), this.delayTime = this._feedbackDelay.delayTime, this._readOnly("delayTime"), this._pitch = t13.pitch, this._windowSize = t13.windowSize, this._delayA.connect(this._crossFade.a), this._delayB.connect(this._crossFade.b), this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency), this.effectSend.fan(this._delayA, this._delayB), this._crossFade.chain(this._feedbackDelay, this.effectReturn);
                var e29 = this.now();
                this._lfoA.start(e29), this._lfoB.start(e29), this._crossFadeLFO.start(e29), this.windowSize = this._windowSize;
            }, s3.default.extend(s3.default.PitchShift, s3.default.FeedbackEffect), s3.default.PitchShift.defaults = {
                pitch: 0,
                windowSize: 0.1,
                delayTime: 0,
                feedback: 0
            }, Object.defineProperty(s3.default.PitchShift.prototype, "pitch", {
                get: function() {
                    return this._pitch;
                },
                set: function(t13) {
                    this._pitch = t13;
                    var e29 = 0;
                    t13 < 0 ? (this._lfoA.min = 0, this._lfoA.max = this._windowSize, this._lfoB.min = 0, this._lfoB.max = this._windowSize, e29 = s3.default.intervalToFrequencyRatio(t13 - 1) + 1) : (this._lfoA.min = this._windowSize, this._lfoA.max = 0, this._lfoB.min = this._windowSize, this._lfoB.max = 0, e29 = s3.default.intervalToFrequencyRatio(t13) - 1), this._frequency.value = e29 * (1.2 / this._windowSize);
                }
            }), Object.defineProperty(s3.default.PitchShift.prototype, "windowSize", {
                get: function() {
                    return this._windowSize;
                },
                set: function(t13) {
                    this._windowSize = this.toSeconds(t13), this.pitch = this._pitch;
                }
            }), s3.default.PitchShift.prototype.dispose = function() {
                return s3.default.FeedbackEffect.prototype.dispose.call(this), this._frequency.dispose(), this._frequency = null, this._delayA.disconnect(), this._delayA = null, this._delayB.disconnect(), this._delayB = null, this._lfoA.dispose(), this._lfoA = null, this._lfoB.dispose(), this._lfoB = null, this._crossFade.dispose(), this._crossFade = null, this._crossFadeLFO.dispose(), this._crossFadeLFO = null, this._writable("delayTime"), this._feedbackDelay.dispose(), this._feedbackDelay = null, this.delayTime = null, this;
            }, e3.default = s3.default.PitchShift;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(72), i5(2), i5(18);
            s3.default.PingPongDelay = function() {
                var t13 = s3.default.defaults(arguments, [
                    "delayTime",
                    "feedback"
                ], s3.default.PingPongDelay);
                s3.default.StereoXFeedbackEffect.call(this, t13), this._leftDelay = new s3.default.Delay(0, t13.maxDelayTime), this._rightDelay = new s3.default.Delay(0, t13.maxDelayTime), this._rightPreDelay = new s3.default.Delay(0, t13.maxDelayTime), this.delayTime = new s3.default.Signal(t13.delayTime, s3.default.Type.Time), this.effectSendL.chain(this._leftDelay, this.effectReturnL), this.effectSendR.chain(this._rightPreDelay, this._rightDelay, this.effectReturnR), this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime), this._feedbackLR.disconnect(), this._feedbackLR.connect(this._rightDelay), this._readOnly([
                    "delayTime"
                ]);
            }, s3.default.extend(s3.default.PingPongDelay, s3.default.StereoXFeedbackEffect), s3.default.PingPongDelay.defaults = {
                delayTime: 0.25,
                maxDelayTime: 1
            }, s3.default.PingPongDelay.prototype.dispose = function() {
                return s3.default.StereoXFeedbackEffect.prototype.dispose.call(this), this._leftDelay.dispose(), this._leftDelay = null, this._rightDelay.dispose(), this._rightDelay = null, this._rightPreDelay.dispose(), this._rightPreDelay = null, this._writable([
                    "delayTime"
                ]), this.delayTime.dispose(), this.delayTime = null, this;
            }, e3.default = s3.default.PingPongDelay;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(12), i5(9), i5(15);
            s3.default.Phaser = function() {
                var t13 = s3.default.defaults(arguments, [
                    "frequency",
                    "octaves",
                    "baseFrequency"
                ], s3.default.Phaser);
                s3.default.StereoEffect.call(this, t13), this._lfoL = new s3.default.LFO(t13.frequency, 0, 1), this._lfoR = new s3.default.LFO(t13.frequency, 0, 1), this._lfoR.phase = 180, this._baseFrequency = t13.baseFrequency, this._octaves = t13.octaves, this.Q = new s3.default.Signal(t13.Q, s3.default.Type.Positive), this._filtersL = this._makeFilters(t13.stages, this._lfoL, this.Q), this._filtersR = this._makeFilters(t13.stages, this._lfoR, this.Q), this.frequency = this._lfoL.frequency, this.frequency.value = t13.frequency, this.effectSendL.connect(this._filtersL[0]), this.effectSendR.connect(this._filtersR[0]), s3.default.connect(this._filtersL[t13.stages - 1], this.effectReturnL), s3.default.connect(this._filtersR[t13.stages - 1], this.effectReturnR), this._lfoL.frequency.connect(this._lfoR.frequency), this.baseFrequency = t13.baseFrequency, this.octaves = t13.octaves, this._lfoL.start(), this._lfoR.start(), this._readOnly([
                    "frequency",
                    "Q"
                ]);
            }, s3.default.extend(s3.default.Phaser, s3.default.StereoEffect), s3.default.Phaser.defaults = {
                frequency: 0.5,
                octaves: 3,
                stages: 10,
                Q: 10,
                baseFrequency: 350
            }, s3.default.Phaser.prototype._makeFilters = function(t13, e29, i42) {
                for(var n19 = new Array(t13), o = 0; o < t13; o++){
                    var a = this.context.createBiquadFilter();
                    a.type = "allpass", i42.connect(a.Q), e29.connect(a.frequency), n19[o] = a;
                }
                return s3.default.connectSeries.apply(s3.default, n19), n19;
            }, Object.defineProperty(s3.default.Phaser.prototype, "octaves", {
                get: function() {
                    return this._octaves;
                },
                set: function(t13) {
                    this._octaves = t13;
                    var e29 = this._baseFrequency * Math.pow(2, t13);
                    this._lfoL.max = e29, this._lfoR.max = e29;
                }
            }), Object.defineProperty(s3.default.Phaser.prototype, "baseFrequency", {
                get: function() {
                    return this._baseFrequency;
                },
                set: function(t13) {
                    this._baseFrequency = t13, this._lfoL.min = t13, this._lfoR.min = t13, this.octaves = this._octaves;
                }
            }), s3.default.Phaser.prototype.dispose = function() {
                s3.default.StereoEffect.prototype.dispose.call(this), this._writable([
                    "frequency",
                    "Q"
                ]), this.Q.dispose(), this.Q = null, this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null;
                for(var t13 = 0; t13 < this._filtersL.length; t13++)this._filtersL[t13].disconnect(), this._filtersL[t13] = null;
                this._filtersL = null;
                for(var e29 = 0; e29 < this._filtersR.length; e29++)this._filtersR[e29].disconnect(), this._filtersR[e29] = null;
                return this._filtersR = null, this.frequency = null, this;
            }, e3.default = s3.default.Phaser;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0), n19 = (i5(59), i5(15), i5(26), [
                0.06748,
                0.06404,
                0.08212,
                0.09004
            ]), o = [
                0.773,
                0.802,
                0.753,
                0.733
            ], a = [
                347,
                113,
                37
            ];
            s3.default.JCReverb = function() {
                var t13 = s3.default.defaults(arguments, [
                    "roomSize"
                ], s3.default.JCReverb);
                s3.default.StereoEffect.call(this, t13), this.roomSize = new s3.default.Signal(t13.roomSize, s3.default.Type.NormalRange), this._scaleRoomSize = new s3.default.Scale(-0.733, 0.197), this._allpassFilters = [], this._feedbackCombFilters = [];
                for(var e29 = 0; e29 < a.length; e29++){
                    var i42 = this.context.createBiquadFilter();
                    i42.type = "allpass", i42.frequency.value = a[e29], this._allpassFilters.push(i42);
                }
                for(var r = 0; r < n19.length; r++){
                    var l = new s3.default.FeedbackCombFilter(n19[r], 0.1);
                    this._scaleRoomSize.connect(l.resonance), l.resonance.value = o[r], s3.default.connect(this._allpassFilters[this._allpassFilters.length - 1], l), r < n19.length / 2 ? l.connect(this.effectReturnL) : l.connect(this.effectReturnR), this._feedbackCombFilters.push(l);
                }
                this.roomSize.connect(this._scaleRoomSize), s3.default.connectSeries.apply(s3.default, this._allpassFilters), this.effectSendL.connect(this._allpassFilters[0]), this.effectSendR.connect(this._allpassFilters[0]), this._readOnly([
                    "roomSize"
                ]);
            }, s3.default.extend(s3.default.JCReverb, s3.default.StereoEffect), s3.default.JCReverb.defaults = {
                roomSize: 0.5
            }, s3.default.JCReverb.prototype.dispose = function() {
                s3.default.StereoEffect.prototype.dispose.call(this);
                for(var t13 = 0; t13 < this._allpassFilters.length; t13++)this._allpassFilters[t13].disconnect(), this._allpassFilters[t13] = null;
                this._allpassFilters = null;
                for(var e29 = 0; e29 < this._feedbackCombFilters.length; e29++)this._feedbackCombFilters[e29].dispose(), this._feedbackCombFilters[e29] = null;
                return this._feedbackCombFilters = null, this._writable([
                    "roomSize"
                ]), this.roomSize.dispose(), this.roomSize = null, this._scaleRoomSize.dispose(), this._scaleRoomSize = null, this;
            }, e3.default = s3.default.JCReverb;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0), n19 = (i5(54), i5(15), i5(2), i5(19), i5(10), i5(42), [
                1557 / 44100,
                1617 / 44100,
                1491 / 44100,
                1422 / 44100,
                1277 / 44100,
                1356 / 44100,
                1188 / 44100,
                1116 / 44100
            ]), o = [
                225,
                556,
                441,
                341
            ];
            s3.default.Freeverb = function() {
                var t13 = s3.default.defaults(arguments, [
                    "roomSize",
                    "dampening"
                ], s3.default.Freeverb);
                s3.default.StereoEffect.call(this, t13), this.roomSize = new s3.default.Signal(t13.roomSize, s3.default.Type.NormalRange), this.dampening = new s3.default.Signal(t13.dampening, s3.default.Type.Frequency), this._combFilters = [], this._allpassFiltersL = [], this._allpassFiltersR = [];
                for(var e29 = 0; e29 < o.length; e29++){
                    var i43 = this.context.createBiquadFilter();
                    i43.type = "allpass", i43.frequency.value = o[e29], this._allpassFiltersL.push(i43);
                }
                for(var a = 0; a < o.length; a++){
                    var r = this.context.createBiquadFilter();
                    r.type = "allpass", r.frequency.value = o[a], this._allpassFiltersR.push(r);
                }
                for(var l = 0; l < n19.length; l++){
                    var u = new s3.default.LowpassCombFilter(n19[l]);
                    l < n19.length / 2 ? this.effectSendL.chain(u, this._allpassFiltersL[0]) : this.effectSendR.chain(u, this._allpassFiltersR[0]), this.roomSize.connect(u.resonance), this.dampening.connect(u.dampening), this._combFilters.push(u);
                }
                s3.default.connectSeries.apply(s3.default, this._allpassFiltersL), s3.default.connectSeries.apply(s3.default, this._allpassFiltersR), s3.default.connect(this._allpassFiltersL[this._allpassFiltersL.length - 1], this.effectReturnL), s3.default.connect(this._allpassFiltersR[this._allpassFiltersR.length - 1], this.effectReturnR), this._readOnly([
                    "roomSize",
                    "dampening"
                ]);
            }, s3.default.extend(s3.default.Freeverb, s3.default.StereoEffect), s3.default.Freeverb.defaults = {
                roomSize: 0.7,
                dampening: 3000
            }, s3.default.Freeverb.prototype.dispose = function() {
                s3.default.StereoEffect.prototype.dispose.call(this);
                for(var t13 = 0; t13 < this._allpassFiltersL.length; t13++)this._allpassFiltersL[t13].disconnect(), this._allpassFiltersL[t13] = null;
                this._allpassFiltersL = null;
                for(var e29 = 0; e29 < this._allpassFiltersR.length; e29++)this._allpassFiltersR[e29].disconnect(), this._allpassFiltersR[e29] = null;
                this._allpassFiltersR = null;
                for(var i44 = 0; i44 < this._combFilters.length; i44++)this._combFilters[i44].dispose(), this._combFilters[i44] = null;
                return this._combFilters = null, this._writable([
                    "roomSize",
                    "dampening"
                ]), this.roomSize.dispose(), this.roomSize = null, this.dampening.dispose(), this.dampening = null, this;
            }, e3.default = s3.default.Freeverb;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(33), i5(2), i5(18);
            s3.default.FeedbackDelay = function() {
                var t13 = s3.default.defaults(arguments, [
                    "delayTime",
                    "feedback"
                ], s3.default.FeedbackDelay);
                s3.default.FeedbackEffect.call(this, t13), this._delayNode = new s3.default.Delay(t13.delayTime, t13.maxDelay), this.delayTime = this._delayNode.delayTime, this.connectEffect(this._delayNode), this._readOnly([
                    "delayTime"
                ]);
            }, s3.default.extend(s3.default.FeedbackDelay, s3.default.FeedbackEffect), s3.default.FeedbackDelay.defaults = {
                delayTime: 0.25,
                maxDelay: 1
            }, s3.default.FeedbackDelay.prototype.dispose = function() {
                return s3.default.FeedbackEffect.prototype.dispose.call(this), this._delayNode.dispose(), this._delayNode = null, this._writable([
                    "delayTime"
                ]), this.delayTime = null, this;
            }, e3.default = s3.default.FeedbackDelay;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(8), i5(7);
            s3.default.Distortion = function() {
                var t13 = s3.default.defaults(arguments, [
                    "distortion"
                ], s3.default.Distortion);
                s3.default.Effect.call(this, t13), this._shaper = new s3.default.WaveShaper(4096), this._distortion = t13.distortion, this.connectEffect(this._shaper), this.distortion = t13.distortion, this.oversample = t13.oversample;
            }, s3.default.extend(s3.default.Distortion, s3.default.Effect), s3.default.Distortion.defaults = {
                distortion: 0.4,
                oversample: "none"
            }, Object.defineProperty(s3.default.Distortion.prototype, "distortion", {
                get: function() {
                    return this._distortion;
                },
                set: function(t13) {
                    this._distortion = t13;
                    var e29 = 100 * t13, i44 = Math.PI / 180;
                    this._shaper.setMap(function(t15) {
                        return Math.abs(t15) < 0.001 ? 0 : (3 + e29) * t15 * 20 * i44 / (Math.PI + e29 * Math.abs(t15));
                    });
                }
            }), Object.defineProperty(s3.default.Distortion.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample;
                },
                set: function(t13) {
                    this._shaper.oversample = t13;
                }
            }), s3.default.Distortion.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this;
            }, e3.default = s3.default.Distortion;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(12), i5(15), i5(18);
            s3.default.Chorus = function() {
                var t13 = s3.default.defaults(arguments, [
                    "frequency",
                    "delayTime",
                    "depth"
                ], s3.default.Chorus);
                s3.default.StereoEffect.call(this, t13), this._depth = t13.depth, this._delayTime = t13.delayTime / 1000, this._lfoL = new s3.default.LFO({
                    frequency: t13.frequency,
                    min: 0,
                    max: 1
                }), this._lfoR = new s3.default.LFO({
                    frequency: t13.frequency,
                    min: 0,
                    max: 1,
                    phase: 180
                }), this._delayNodeL = new s3.default.Delay, this._delayNodeR = new s3.default.Delay, this.frequency = this._lfoL.frequency, this.effectSendL.chain(this._delayNodeL, this.effectReturnL), this.effectSendR.chain(this._delayNodeR, this.effectReturnR), this.effectSendL.connect(this.effectReturnL), this.effectSendR.connect(this.effectReturnR), this._lfoL.connect(this._delayNodeL.delayTime), this._lfoR.connect(this._delayNodeR.delayTime), this._lfoL.start(), this._lfoR.start(), this._lfoL.frequency.connect(this._lfoR.frequency), this.depth = this._depth, this.frequency.value = t13.frequency, this.type = t13.type, this._readOnly([
                    "frequency"
                ]), this.spread = t13.spread;
            }, s3.default.extend(s3.default.Chorus, s3.default.StereoEffect), s3.default.Chorus.defaults = {
                frequency: 1.5,
                delayTime: 3.5,
                depth: 0.7,
                type: "sine",
                spread: 180
            }, Object.defineProperty(s3.default.Chorus.prototype, "depth", {
                get: function() {
                    return this._depth;
                },
                set: function(t13) {
                    this._depth = t13;
                    var e29 = this._delayTime * t13;
                    this._lfoL.min = Math.max(this._delayTime - e29, 0), this._lfoL.max = this._delayTime + e29, this._lfoR.min = Math.max(this._delayTime - e29, 0), this._lfoR.max = this._delayTime + e29;
                }
            }), Object.defineProperty(s3.default.Chorus.prototype, "delayTime", {
                get: function() {
                    return 1000 * this._delayTime;
                },
                set: function(t13) {
                    this._delayTime = t13 / 1000, this.depth = this._depth;
                }
            }), Object.defineProperty(s3.default.Chorus.prototype, "type", {
                get: function() {
                    return this._lfoL.type;
                },
                set: function(t13) {
                    this._lfoL.type = t13, this._lfoR.type = t13;
                }
            }), Object.defineProperty(s3.default.Chorus.prototype, "spread", {
                get: function() {
                    return this._lfoR.phase - this._lfoL.phase;
                },
                set: function(t13) {
                    this._lfoL.phase = 90 - t13 / 2, this._lfoR.phase = t13 / 2 + 90;
                }
            }), s3.default.Chorus.prototype.dispose = function() {
                return s3.default.StereoEffect.prototype.dispose.call(this), this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, this._delayNodeL.dispose(), this._delayNodeL = null, this._delayNodeR.dispose(), this._delayNodeR = null, this._writable("frequency"), this.frequency = null, this;
            }, e3.default = s3.default.Chorus;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(8), i5(7);
            s3.default.Chebyshev = function() {
                var t13 = s3.default.defaults(arguments, [
                    "order"
                ], s3.default.Chebyshev);
                s3.default.Effect.call(this, t13), this._shaper = new s3.default.WaveShaper(4096), this._order = t13.order, this.connectEffect(this._shaper), this.order = t13.order, this.oversample = t13.oversample;
            }, s3.default.extend(s3.default.Chebyshev, s3.default.Effect), s3.default.Chebyshev.defaults = {
                order: 1,
                oversample: "none"
            }, s3.default.Chebyshev.prototype._getCoefficient = function(t13, e29, i44) {
                return i44.hasOwnProperty(e29) ? i44[e29] : (i44[e29] = 0 === e29 ? 0 : 1 === e29 ? t13 : 2 * t13 * this._getCoefficient(t13, e29 - 1, i44) - this._getCoefficient(t13, e29 - 2, i44), i44[e29]);
            }, Object.defineProperty(s3.default.Chebyshev.prototype, "order", {
                get: function() {
                    return this._order;
                },
                set: function(t13) {
                    this._order = t13;
                    for(var e29 = new Array(4096), i44 = e29.length, s11 = 0; s11 < i44; ++s11){
                        var n19 = 2 * s11 / i44 - 1;
                        e29[s11] = 0 === n19 ? 0 : this._getCoefficient(n19, t13, {
                        });
                    }
                    this._shaper.curve = e29;
                }
            }), Object.defineProperty(s3.default.Chebyshev.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample;
                },
                set: function(t13) {
                    this._shaper.oversample = t13;
                }
            }), s3.default.Chebyshev.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this;
            }, e3.default = s3.default.Chebyshev;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(8), i5(13), i5(75);
            s3.default.BitCrusher = function() {
                var t13 = s3.default.defaults(arguments, [
                    "bits"
                ], s3.default.BitCrusher);
                s3.default.Effect.call(this, t13);
                var e29 = 1 / Math.pow(2, t13.bits - 1);
                this._subtract = new s3.default.Subtract, this._modulo = new s3.default.Modulo(e29), this._bits = t13.bits, this.effectSend.fan(this._subtract, this._modulo), this._modulo.connect(this._subtract, 0, 1), this._subtract.connect(this.effectReturn);
            }, s3.default.extend(s3.default.BitCrusher, s3.default.Effect), s3.default.BitCrusher.defaults = {
                bits: 4
            }, Object.defineProperty(s3.default.BitCrusher.prototype, "bits", {
                get: function() {
                    return this._bits;
                },
                set: function(t13) {
                    this._bits = t13;
                    var e29 = 1 / Math.pow(2, t13 - 1);
                    this._modulo.value = e29;
                }
            }), s3.default.BitCrusher.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this._subtract.dispose(), this._subtract = null, this._modulo.dispose(), this._modulo = null, this;
            }, e3.default = s3.default.BitCrusher;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(58), i5(42), i5(8), i5(9);
            s3.default.AutoWah = function() {
                var t13 = s3.default.defaults(arguments, [
                    "baseFrequency",
                    "octaves",
                    "sensitivity"
                ], s3.default.AutoWah);
                s3.default.Effect.call(this, t13), this.follower = new s3.default.Follower(t13.follower), this._sweepRange = new s3.default.ScaleExp(0, 1, 0.5), this._baseFrequency = t13.baseFrequency, this._octaves = t13.octaves, this._inputBoost = new s3.default.Gain, this._bandpass = new s3.default.Filter({
                    rolloff: -48,
                    frequency: 0,
                    Q: t13.Q
                }), this._peaking = new s3.default.Filter(0, "peaking"), this._peaking.gain.value = t13.gain, this.gain = this._peaking.gain, this.Q = this._bandpass.Q, this.effectSend.chain(this._inputBoost, this.follower, this._sweepRange), this._sweepRange.connect(this._bandpass.frequency), this._sweepRange.connect(this._peaking.frequency), this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn), this._setSweepRange(), this.sensitivity = t13.sensitivity, this._readOnly([
                    "gain",
                    "Q"
                ]);
            }, s3.default.extend(s3.default.AutoWah, s3.default.Effect), s3.default.AutoWah.defaults = {
                baseFrequency: 100,
                octaves: 6,
                sensitivity: 0,
                Q: 2,
                gain: 2,
                follower: {
                    attack: 0.3,
                    release: 0.5
                }
            }, Object.defineProperty(s3.default.AutoWah.prototype, "octaves", {
                get: function() {
                    return this._octaves;
                },
                set: function(t13) {
                    this._octaves = t13, this._setSweepRange();
                }
            }), Object.defineProperty(s3.default.AutoWah.prototype, "baseFrequency", {
                get: function() {
                    return this._baseFrequency;
                },
                set: function(t13) {
                    this._baseFrequency = t13, this._setSweepRange();
                }
            }), Object.defineProperty(s3.default.AutoWah.prototype, "sensitivity", {
                get: function() {
                    return s3.default.gainToDb(1 / this._inputBoost.gain.value);
                },
                set: function(t13) {
                    this._inputBoost.gain.value = 1 / s3.default.dbToGain(t13);
                }
            }), s3.default.AutoWah.prototype._setSweepRange = function() {
                this._sweepRange.min = this._baseFrequency, this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2);
            }, s3.default.AutoWah.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this.follower.dispose(), this.follower = null, this._sweepRange.dispose(), this._sweepRange = null, this._bandpass.dispose(), this._bandpass = null, this._peaking.dispose(), this._peaking = null, this._inputBoost.dispose(), this._inputBoost = null, this._writable([
                    "gain",
                    "Q"
                ]), this.gain = null, this.Q = null, this;
            }, e3.default = s3.default.AutoWah;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(8), i5(12), i5(48);
            s3.default.AutoPanner = function() {
                var t13 = s3.default.defaults(arguments, [
                    "frequency"
                ], s3.default.AutoPanner);
                s3.default.Effect.call(this, t13), this._lfo = new s3.default.LFO({
                    frequency: t13.frequency,
                    amplitude: t13.depth,
                    min: -1,
                    max: 1
                }), this.depth = this._lfo.amplitude, this._panner = new s3.default.Panner, this.frequency = this._lfo.frequency, this.connectEffect(this._panner), this._lfo.connect(this._panner.pan), this.type = t13.type, this._readOnly([
                    "depth",
                    "frequency"
                ]);
            }, s3.default.extend(s3.default.AutoPanner, s3.default.Effect), s3.default.AutoPanner.defaults = {
                frequency: 1,
                type: "sine",
                depth: 1
            }, s3.default.AutoPanner.prototype.start = function(t13) {
                return this._lfo.start(t13), this;
            }, s3.default.AutoPanner.prototype.stop = function(t13) {
                return this._lfo.stop(t13), this;
            }, s3.default.AutoPanner.prototype.sync = function(t13) {
                return this._lfo.sync(t13), this;
            }, s3.default.AutoPanner.prototype.unsync = function() {
                return this._lfo.unsync(), this;
            }, Object.defineProperty(s3.default.AutoPanner.prototype, "type", {
                get: function() {
                    return this._lfo.type;
                },
                set: function(t13) {
                    this._lfo.type = t13;
                }
            }), s3.default.AutoPanner.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this._panner.dispose(), this._panner = null, this._writable([
                    "depth",
                    "frequency"
                ]), this.frequency = null, this.depth = null, this;
            }, e3.default = s3.default.AutoPanner;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(8), i5(12), i5(9);
            s3.default.AutoFilter = function() {
                var t13 = s3.default.defaults(arguments, [
                    "frequency",
                    "baseFrequency",
                    "octaves"
                ], s3.default.AutoFilter);
                s3.default.Effect.call(this, t13), this._lfo = new s3.default.LFO({
                    frequency: t13.frequency,
                    amplitude: t13.depth
                }), this.depth = this._lfo.amplitude, this.frequency = this._lfo.frequency, this.filter = new s3.default.Filter(t13.filter), this._octaves = 0, this.connectEffect(this.filter), this._lfo.connect(this.filter.frequency), this.type = t13.type, this._readOnly([
                    "frequency",
                    "depth"
                ]), this.octaves = t13.octaves, this.baseFrequency = t13.baseFrequency;
            }, s3.default.extend(s3.default.AutoFilter, s3.default.Effect), s3.default.AutoFilter.defaults = {
                frequency: 1,
                type: "sine",
                depth: 1,
                baseFrequency: 200,
                octaves: 2.6,
                filter: {
                    type: "lowpass",
                    rolloff: -12,
                    Q: 1
                }
            }, s3.default.AutoFilter.prototype.start = function(t13) {
                return this._lfo.start(t13), this;
            }, s3.default.AutoFilter.prototype.stop = function(t13) {
                return this._lfo.stop(t13), this;
            }, s3.default.AutoFilter.prototype.sync = function(t13) {
                return this._lfo.sync(t13), this;
            }, s3.default.AutoFilter.prototype.unsync = function() {
                return this._lfo.unsync(), this;
            }, Object.defineProperty(s3.default.AutoFilter.prototype, "type", {
                get: function() {
                    return this._lfo.type;
                },
                set: function(t13) {
                    this._lfo.type = t13;
                }
            }), Object.defineProperty(s3.default.AutoFilter.prototype, "baseFrequency", {
                get: function() {
                    return this._lfo.min;
                },
                set: function(t13) {
                    this._lfo.min = this.toFrequency(t13), this.octaves = this._octaves;
                }
            }), Object.defineProperty(s3.default.AutoFilter.prototype, "octaves", {
                get: function() {
                    return this._octaves;
                },
                set: function(t13) {
                    this._octaves = t13, this._lfo.max = this.baseFrequency * Math.pow(2, t13);
                }
            }), s3.default.AutoFilter.prototype.dispose = function() {
                return s3.default.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this.filter.dispose(), this.filter = null, this._writable([
                    "frequency",
                    "depth"
                ]), this.frequency = null, this.depth = null, this;
            }, e3.default = s3.default.AutoFilter;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(23), i5(10), i5(19), i5(2), i5(22), i5(28);
            s3.default.Listener = function() {
                s3.default.call(this), this._orientation = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], this._position = [
                    0,
                    0,
                    0
                ], s3.default.getContext((function() {
                    this.set(n20.defaults);
                }).bind(this));
            }, s3.default.extend(s3.default.Listener), s3.default.Listener.defaults = {
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                forwardX: 0,
                forwardY: 0,
                forwardZ: 1,
                upX: 0,
                upY: 1,
                upZ: 0
            }, s3.default.Listener.prototype.isListener = !0, s3.default.Listener.prototype._rampTimeConstant = 0.01, s3.default.Listener.prototype.setPosition = function(t13, e29, i44) {
                if (this.context.rawContext.listener.positionX) {
                    var s11 = this.now();
                    this.context.rawContext.listener.positionX.setTargetAtTime(t13, s11, this._rampTimeConstant), this.context.rawContext.listener.positionY.setTargetAtTime(e29, s11, this._rampTimeConstant), this.context.rawContext.listener.positionZ.setTargetAtTime(i44, s11, this._rampTimeConstant);
                } else this.context.rawContext.listener.setPosition(t13, e29, i44);
                return this._position = Array.prototype.slice.call(arguments), this;
            }, s3.default.Listener.prototype.setOrientation = function(t13, e29, i44, s12, n20, o) {
                if (this.context.rawContext.listener.forwardX) {
                    var a = this.now();
                    this.context.rawContext.listener.forwardX.setTargetAtTime(t13, a, this._rampTimeConstant), this.context.rawContext.listener.forwardY.setTargetAtTime(e29, a, this._rampTimeConstant), this.context.rawContext.listener.forwardZ.setTargetAtTime(i44, a, this._rampTimeConstant), this.context.rawContext.listener.upX.setTargetAtTime(s12, a, this._rampTimeConstant), this.context.rawContext.listener.upY.setTargetAtTime(n20, a, this._rampTimeConstant), this.context.rawContext.listener.upZ.setTargetAtTime(o, a, this._rampTimeConstant);
                } else this.context.rawContext.listener.setOrientation(t13, e29, i44, s12, n20, o);
                return this._orientation = Array.prototype.slice.call(arguments), this;
            }, Object.defineProperty(s3.default.Listener.prototype, "positionX", {
                set: function(t13) {
                    this._position[0] = t13, this.setPosition.apply(this, this._position);
                },
                get: function() {
                    return this._position[0];
                }
            }), Object.defineProperty(s3.default.Listener.prototype, "positionY", {
                set: function(t13) {
                    this._position[1] = t13, this.setPosition.apply(this, this._position);
                },
                get: function() {
                    return this._position[1];
                }
            }), Object.defineProperty(s3.default.Listener.prototype, "positionZ", {
                set: function(t13) {
                    this._position[2] = t13, this.setPosition.apply(this, this._position);
                },
                get: function() {
                    return this._position[2];
                }
            }), Object.defineProperty(s3.default.Listener.prototype, "forwardX", {
                set: function(t13) {
                    this._orientation[0] = t13, this.setOrientation.apply(this, this._orientation);
                },
                get: function() {
                    return this._orientation[0];
                }
            }), Object.defineProperty(s3.default.Listener.prototype, "forwardY", {
                set: function(t13) {
                    this._orientation[1] = t13, this.setOrientation.apply(this, this._orientation);
                },
                get: function() {
                    return this._orientation[1];
                }
            }), Object.defineProperty(s3.default.Listener.prototype, "forwardZ", {
                set: function(t13) {
                    this._orientation[2] = t13, this.setOrientation.apply(this, this._orientation);
                },
                get: function() {
                    return this._orientation[2];
                }
            }), Object.defineProperty(s3.default.Listener.prototype, "upX", {
                set: function(t13) {
                    this._orientation[3] = t13, this.setOrientation.apply(this, this._orientation);
                },
                get: function() {
                    return this._orientation[3];
                }
            }), Object.defineProperty(s3.default.Listener.prototype, "upY", {
                set: function(t13) {
                    this._orientation[4] = t13, this.setOrientation.apply(this, this._orientation);
                },
                get: function() {
                    return this._orientation[4];
                }
            }), Object.defineProperty(s3.default.Listener.prototype, "upZ", {
                set: function(t13) {
                    this._orientation[5] = t13, this.setOrientation.apply(this, this._orientation);
                },
                get: function() {
                    return this._orientation[5];
                }
            }), s3.default.Listener.prototype.dispose = function() {
                return this._orientation = null, this._position = null, this;
            };
            var n20 = s3.default.Listener;
            s3.default.Listener = new n20, s3.default.Context.on("init", function(t13) {
                t13.listener && t13.listener.isListener ? s3.default.Listener = t13.listener : s3.default.Listener = new n20;
            }), e3.default = s3.default.Listener;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(24);
            s3.default.Draw = function() {
                s3.default.call(this), this._events = new s3.default.Timeline, this.expiration = 0.25, this.anticipation = 0.008, this._boundDrawLoop = this._drawLoop.bind(this);
            }, s3.default.extend(s3.default.Draw), s3.default.Draw.prototype.schedule = function(t13, e29) {
                return this._events.add({
                    callback: t13,
                    time: this.toSeconds(e29)
                }), 1 === this._events.length && requestAnimationFrame(this._boundDrawLoop), this;
            }, s3.default.Draw.prototype.cancel = function(t13) {
                return this._events.cancel(this.toSeconds(t13)), this;
            }, s3.default.Draw.prototype._drawLoop = function() {
                for(var t13 = s3.default.context.currentTime; this._events.length && this._events.peek().time - this.anticipation <= t13;){
                    var e29 = this._events.shift();
                    t13 - e29.time <= this.expiration && e29.callback();
                }
                this._events.length > 0 && requestAnimationFrame(this._boundDrawLoop);
            }, s3.default.Draw = new s3.default.Draw, e3.default = s3.default.Draw;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0), n20 = (i5(3), {
            });
            s3.default.prototype.send = function(t13, e30) {
                n20.hasOwnProperty(t13) || (n20[t13] = this.context.createGain()), e30 = s3.default.defaultArg(e30, 0);
                var i44 = new s3.default.Gain(e30, s3.default.Type.Decibels);
                return this.connect(i44), i44.connect(n20[t13]), i44;
            }, s3.default.prototype.receive = function(t13, e30) {
                return n20.hasOwnProperty(t13) || (n20[t13] = this.context.createGain()), s3.default.connect(n20[t13], this, 0, e30), this;
            }, s3.default.Context.on("init", function(t13) {
                t13.buses ? n20 = t13.buses : (n20 = {
                }, t13.buses = n20);
            }), e3.default = s3.default;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(4);
            s3.default.CtrlRandom = function() {
                var t13 = s3.default.defaults(arguments, [
                    "min",
                    "max"
                ], s3.default.CtrlRandom);
                s3.default.call(this), this.min = t13.min, this.max = t13.max, this.integer = t13.integer;
            }, s3.default.extend(s3.default.CtrlRandom), s3.default.CtrlRandom.defaults = {
                min: 0,
                max: 1,
                integer: !1
            }, Object.defineProperty(s3.default.CtrlRandom.prototype, "value", {
                get: function() {
                    var t13 = this.toSeconds(this.min), e30 = this.toSeconds(this.max), i44 = Math.random(), s12 = i44 * t13 + (1 - i44) * e30;
                    return this.integer && (s12 = Math.floor(s12)), s12;
                }
            }), e3.default = s3.default.CtrlRandom;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            s3.default.CtrlMarkov = function(t13, e30) {
                s3.default.call(this), this.values = s3.default.defaultArg(t13, {
                }), this.value = s3.default.defaultArg(e30, Object.keys(this.values)[0]);
            }, s3.default.extend(s3.default.CtrlMarkov), s3.default.CtrlMarkov.prototype.next = function() {
                if (this.values.hasOwnProperty(this.value)) {
                    var t13 = this.values[this.value];
                    if (s3.default.isArray(t13)) for(var e30 = this._getProbDistribution(t13), i44 = Math.random(), n20 = 0, o = 0; o < e30.length; o++){
                        var a = e30[o];
                        if (i44 > n20 && i44 < n20 + a) {
                            var r = t13[o];
                            s3.default.isObject(r) ? this.value = r.value : this.value = r;
                        }
                        n20 += a;
                    }
                    else this.value = t13;
                }
                return this.value;
            }, s3.default.CtrlMarkov.prototype._getProbDistribution = function(t15) {
                for(var e31 = [], i45 = 0, n21 = !1, o = 0; o < t15.length; o++){
                    var a = t15[o];
                    s3.default.isObject(a) ? (n21 = !0, e31[o] = a.probability) : e31[o] = 1 / t15.length, i45 += e31[o];
                }
                if (n21) for(var r = 0; r < e31.length; r++)e31[r] = e31[r] / i45;
                return e31;
            }, s3.default.CtrlMarkov.prototype.dispose = function() {
                this.values = null;
            }, e3.default = s3.default.CtrlMarkov;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(4);
            s3.default.CtrlInterpolate = function() {
                var t15 = s3.default.defaults(arguments, [
                    "values",
                    "index"
                ], s3.default.CtrlInterpolate);
                s3.default.call(this), this.values = t15.values, this.index = t15.index;
            }, s3.default.extend(s3.default.CtrlInterpolate), s3.default.CtrlInterpolate.defaults = {
                index: 0,
                values: []
            }, Object.defineProperty(s3.default.CtrlInterpolate.prototype, "value", {
                get: function() {
                    var t15 = this.index;
                    t15 = Math.min(t15, this.values.length - 1);
                    var e31 = Math.floor(t15), i45 = this.values[e31], s12 = this.values[Math.ceil(t15)];
                    return this._interpolate(t15 - e31, i45, s12);
                }
            }), s3.default.CtrlInterpolate.prototype._interpolate = function(t15, e31, i45) {
                if (s3.default.isArray(e31)) {
                    for(var n21 = [], o = 0; o < e31.length; o++)n21[o] = this._interpolate(t15, e31[o], i45[o]);
                    return n21;
                }
                if (s3.default.isObject(e31)) {
                    var a = {
                    };
                    for(var r in e31)a[r] = this._interpolate(t15, e31[r], i45[r]);
                    return a;
                }
                return (1 - t15) * (e31 = this._toNumber(e31)) + t15 * (i45 = this._toNumber(i45));
            }, s3.default.CtrlInterpolate.prototype._toNumber = function(t15) {
                return s3.default.isNumber(t15) ? t15 : this.toSeconds(t15);
            }, s3.default.CtrlInterpolate.prototype.dispose = function() {
                this.values = null;
            }, e3.default = s3.default.CtrlInterpolate;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(36), i5(1);
            s3.default.Waveform = function() {
                var t15 = s3.default.defaults(arguments, [
                    "size"
                ], s3.default.Waveform);
                t15.type = s3.default.Analyser.Type.Waveform, s3.default.AudioNode.call(this), this._analyser = this.input = this.output = new s3.default.Analyser(t15);
            }, s3.default.extend(s3.default.Waveform, s3.default.AudioNode), s3.default.Waveform.defaults = {
                size: 1024
            }, s3.default.Waveform.prototype.getValue = function() {
                return this._analyser.getValue();
            }, Object.defineProperty(s3.default.Waveform.prototype, "size", {
                get: function() {
                    return this._analyser.size;
                },
                set: function(t15) {
                    this._analyser.size = t15;
                }
            }), s3.default.Waveform.prototype.dispose = function() {
                s3.default.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null;
            }, e3.default = s3.default.Waveform;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(23), i5(10), i5(19), i5(2), i5(22), i5(28), i5(1);
            s3.default.Panner3D = function() {
                var t15 = s3.default.defaults(arguments, [
                    "positionX",
                    "positionY",
                    "positionZ"
                ], s3.default.Panner3D);
                s3.default.AudioNode.call(this), this._panner = this.input = this.output = this.context.createPanner(), this._panner.panningModel = t15.panningModel, this._panner.maxDistance = t15.maxDistance, this._panner.distanceModel = t15.distanceModel, this._panner.coneOuterGain = t15.coneOuterGain, this._panner.coneOuterAngle = t15.coneOuterAngle, this._panner.coneInnerAngle = t15.coneInnerAngle, this._panner.refDistance = t15.refDistance, this._panner.rolloffFactor = t15.rolloffFactor, this._orientation = [
                    t15.orientationX,
                    t15.orientationY,
                    t15.orientationZ
                ], this._position = [
                    t15.positionX,
                    t15.positionY,
                    t15.positionZ
                ], this.orientationX = t15.orientationX, this.orientationY = t15.orientationY, this.orientationZ = t15.orientationZ, this.positionX = t15.positionX, this.positionY = t15.positionY, this.positionZ = t15.positionZ;
            }, s3.default.extend(s3.default.Panner3D, s3.default.AudioNode), s3.default.Panner3D.defaults = {
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                orientationX: 0,
                orientationY: 0,
                orientationZ: 0,
                panningModel: "equalpower",
                maxDistance: 10000,
                distanceModel: "inverse",
                coneOuterGain: 0,
                coneOuterAngle: 360,
                coneInnerAngle: 360,
                refDistance: 1,
                rolloffFactor: 1
            }, s3.default.Panner3D.prototype._rampTimeConstant = 0.01, s3.default.Panner3D.prototype.setPosition = function(t15, e31, i45) {
                if (this._panner.positionX) {
                    var s12 = this.now();
                    this._panner.positionX.setTargetAtTime(t15, s12, this._rampTimeConstant), this._panner.positionY.setTargetAtTime(e31, s12, this._rampTimeConstant), this._panner.positionZ.setTargetAtTime(i45, s12, this._rampTimeConstant);
                } else this._panner.setPosition(t15, e31, i45);
                return this._position = Array.prototype.slice.call(arguments), this;
            }, s3.default.Panner3D.prototype.setOrientation = function(t15, e31, i45) {
                if (this._panner.orientationX) {
                    var s13 = this.now();
                    this._panner.orientationX.setTargetAtTime(t15, s13, this._rampTimeConstant), this._panner.orientationY.setTargetAtTime(e31, s13, this._rampTimeConstant), this._panner.orientationZ.setTargetAtTime(i45, s13, this._rampTimeConstant);
                } else this._panner.setOrientation(t15, e31, i45);
                return this._orientation = Array.prototype.slice.call(arguments), this;
            }, Object.defineProperty(s3.default.Panner3D.prototype, "positionX", {
                set: function(t15) {
                    this._position[0] = t15, this.setPosition.apply(this, this._position);
                },
                get: function() {
                    return this._position[0];
                }
            }), Object.defineProperty(s3.default.Panner3D.prototype, "positionY", {
                set: function(t15) {
                    this._position[1] = t15, this.setPosition.apply(this, this._position);
                },
                get: function() {
                    return this._position[1];
                }
            }), Object.defineProperty(s3.default.Panner3D.prototype, "positionZ", {
                set: function(t15) {
                    this._position[2] = t15, this.setPosition.apply(this, this._position);
                },
                get: function() {
                    return this._position[2];
                }
            }), Object.defineProperty(s3.default.Panner3D.prototype, "orientationX", {
                set: function(t15) {
                    this._orientation[0] = t15, this.setOrientation.apply(this, this._orientation);
                },
                get: function() {
                    return this._orientation[0];
                }
            }), Object.defineProperty(s3.default.Panner3D.prototype, "orientationY", {
                set: function(t15) {
                    this._orientation[1] = t15, this.setOrientation.apply(this, this._orientation);
                },
                get: function() {
                    return this._orientation[1];
                }
            }), Object.defineProperty(s3.default.Panner3D.prototype, "orientationZ", {
                set: function(t15) {
                    this._orientation[2] = t15, this.setOrientation.apply(this, this._orientation);
                },
                get: function() {
                    return this._orientation[2];
                }
            }), s3.default.Panner3D._aliasProperty = function(t15) {
                Object.defineProperty(s3.default.Panner3D.prototype, t15, {
                    set: function(e31) {
                        this._panner[t15] = e31;
                    },
                    get: function() {
                        return this._panner[t15];
                    }
                });
            }, s3.default.Panner3D._aliasProperty("panningModel"), s3.default.Panner3D._aliasProperty("refDistance"), s3.default.Panner3D._aliasProperty("rolloffFactor"), s3.default.Panner3D._aliasProperty("distanceModel"), s3.default.Panner3D._aliasProperty("coneInnerAngle"), s3.default.Panner3D._aliasProperty("coneOuterAngle"), s3.default.Panner3D._aliasProperty("coneOuterGain"), s3.default.Panner3D._aliasProperty("maxDistance"), s3.default.Panner3D.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._panner.disconnect(), this._panner = null, this._orientation = null, this._position = null, this;
            }, e3.default = s3.default.Panner3D;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(60), i5(43), i5(1);
            s3.default.MultibandCompressor = function(t15) {
                s3.default.AudioNode.call(this), t15 = s3.default.defaultArg(arguments, s3.default.MultibandCompressor.defaults), this._splitter = this.input = new s3.default.MultibandSplit({
                    lowFrequency: t15.lowFrequency,
                    highFrequency: t15.highFrequency
                }), this.lowFrequency = this._splitter.lowFrequency, this.highFrequency = this._splitter.highFrequency, this.output = new s3.default.Gain, this.low = new s3.default.Compressor(t15.low), this.mid = new s3.default.Compressor(t15.mid), this.high = new s3.default.Compressor(t15.high), this._splitter.low.chain(this.low, this.output), this._splitter.mid.chain(this.mid, this.output), this._splitter.high.chain(this.high, this.output), this._readOnly([
                    "high",
                    "mid",
                    "low",
                    "highFrequency",
                    "lowFrequency"
                ]);
            }, s3.default.extend(s3.default.MultibandCompressor, s3.default.AudioNode), s3.default.MultibandCompressor.defaults = {
                low: s3.default.Compressor.defaults,
                mid: s3.default.Compressor.defaults,
                high: s3.default.Compressor.defaults,
                lowFrequency: 250,
                highFrequency: 2000
            }, s3.default.MultibandCompressor.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._splitter.dispose(), this._writable([
                    "high",
                    "mid",
                    "low",
                    "highFrequency",
                    "lowFrequency"
                ]), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this._splitter = null, this.low = null, this.mid = null, this.high = null, this.lowFrequency = null, this.highFrequency = null, this;
            }, e3.default = s3.default.MultibandCompressor;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(10), i5(1);
            s3.default.Mono = function() {
                s3.default.AudioNode.call(this), this.createInsOuts(1, 0), this._merge = this.output = new s3.default.Merge, s3.default.connect(this.input, this._merge, 0, 0), s3.default.connect(this.input, this._merge, 0, 1);
            }, s3.default.extend(s3.default.Mono, s3.default.AudioNode), s3.default.Mono.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._merge.dispose(), this._merge = null, this;
            }, e3.default = s3.default.Mono;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(53), i5(52), i5(43), i5(1);
            s3.default.MidSideCompressor = function(t15) {
                s3.default.AudioNode.call(this), t15 = s3.default.defaultArg(t15, s3.default.MidSideCompressor.defaults), this._midSideSplit = this.input = new s3.default.MidSideSplit, this._midSideMerge = this.output = new s3.default.MidSideMerge, this.mid = new s3.default.Compressor(t15.mid), this.side = new s3.default.Compressor(t15.side), this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid), this._midSideSplit.side.chain(this.side, this._midSideMerge.side), this._readOnly([
                    "mid",
                    "side"
                ]);
            }, s3.default.extend(s3.default.MidSideCompressor, s3.default.AudioNode), s3.default.MidSideCompressor.defaults = {
                mid: {
                    ratio: 3,
                    threshold: -24,
                    release: 0.03,
                    attack: 0.02,
                    knee: 16
                },
                side: {
                    ratio: 6,
                    threshold: -30,
                    release: 0.25,
                    attack: 0.03,
                    knee: 10
                }
            }, s3.default.MidSideCompressor.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable([
                    "mid",
                    "side"
                ]), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this;
            }, e3.default = s3.default.MidSideCompressor;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(36), i5(1);
            s3.default.Meter = function() {
                var t15 = s3.default.defaults(arguments, [
                    "smoothing"
                ], s3.default.Meter);
                s3.default.AudioNode.call(this), this.smoothing = t15.smoothing, this._rms = 0, this.input = this.output = this._analyser = new s3.default.Analyser("waveform", 256);
            }, s3.default.extend(s3.default.Meter, s3.default.AudioNode), s3.default.Meter.defaults = {
                smoothing: 0.8
            }, s3.default.Meter.prototype.getLevel = function() {
                for(var t15 = this._analyser.getValue(), e31 = 0, i45 = 0; i45 < t15.length; i45++){
                    var n22 = t15[i45];
                    e31 += n22 * n22;
                }
                var o = Math.sqrt(e31 / t15.length);
                return this._rms = Math.max(o, this._rms * this.smoothing), s3.default.gainToDb(this._rms);
            }, s3.default.Meter.prototype.getValue = function() {
                return this._analyser.getValue()[0];
            }, s3.default.Meter.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null, this;
            }, e3.default = s3.default.Meter;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(43), i5(1);
            s3.default.Limiter = function() {
                var t15 = s3.default.defaults(arguments, [
                    "threshold"
                ], s3.default.Limiter);
                s3.default.AudioNode.call(this), this._compressor = this.input = this.output = new s3.default.Compressor({
                    attack: 0.001,
                    decay: 0.001,
                    threshold: t15.threshold
                }), this.threshold = this._compressor.threshold, this._readOnly("threshold");
            }, s3.default.extend(s3.default.Limiter, s3.default.AudioNode), s3.default.Limiter.defaults = {
                threshold: -12
            }, s3.default.Limiter.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._compressor.dispose(), this._compressor = null, this._writable("threshold"), this.threshold = null, this;
            }, e3.default = s3.default.Limiter;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(58), i5(85), i5(1);
            s3.default.Gate = function() {
                var t15 = s3.default.defaults(arguments, [
                    "threshold",
                    "smoothing"
                ], s3.default.Gate);
                s3.default.AudioNode.call(this), this.createInsOuts(1, 1), this._follower = new s3.default.Follower(t15.smoothing), this._gt = new s3.default.GreaterThan(s3.default.dbToGain(t15.threshold)), s3.default.connect(this.input, this.output), s3.default.connectSeries(this.input, this._follower, this._gt, this.output.gain);
            }, s3.default.extend(s3.default.Gate, s3.default.AudioNode), s3.default.Gate.defaults = {
                smoothing: 0.1,
                threshold: -40
            }, Object.defineProperty(s3.default.Gate.prototype, "threshold", {
                get: function() {
                    return s3.default.gainToDb(this._gt.value);
                },
                set: function(t15) {
                    this._gt.value = s3.default.dbToGain(t15);
                }
            }), Object.defineProperty(s3.default.Gate.prototype, "smoothing", {
                get: function() {
                    return this._follower.smoothing;
                },
                set: function(t15) {
                    this._follower.smoothing = t15;
                }
            }), s3.default.Gate.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._follower.dispose(), this._gt.dispose(), this._follower = null, this._gt = null, this;
            }, e3.default = s3.default.Gate;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(36), i5(1);
            s3.default.FFT = function() {
                var t15 = s3.default.defaults(arguments, [
                    "size"
                ], s3.default.FFT);
                t15.type = s3.default.Analyser.Type.FFT, s3.default.AudioNode.call(this), this._analyser = this.input = this.output = new s3.default.Analyser(t15);
            }, s3.default.extend(s3.default.FFT, s3.default.AudioNode), s3.default.FFT.defaults = {
                size: 1024
            }, s3.default.FFT.prototype.getValue = function() {
                return this._analyser.getValue();
            }, Object.defineProperty(s3.default.FFT.prototype, "size", {
                get: function() {
                    return this._analyser.size;
                },
                set: function(t15) {
                    this._analyser.size = t15;
                }
            }), s3.default.FFT.prototype.dispose = function() {
                s3.default.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null;
            }, e3.default = s3.default.FFT;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(60), i5(3), i5(1);
            s3.default.EQ3 = function() {
                var t15 = s3.default.defaults(arguments, [
                    "low",
                    "mid",
                    "high"
                ], s3.default.EQ3);
                s3.default.AudioNode.call(this), this.output = new s3.default.Gain, this._multibandSplit = this.input = new s3.default.MultibandSplit({
                    lowFrequency: t15.lowFrequency,
                    highFrequency: t15.highFrequency
                }), this._lowGain = new s3.default.Gain(t15.low, s3.default.Type.Decibels), this._midGain = new s3.default.Gain(t15.mid, s3.default.Type.Decibels), this._highGain = new s3.default.Gain(t15.high, s3.default.Type.Decibels), this.low = this._lowGain.gain, this.mid = this._midGain.gain, this.high = this._highGain.gain, this.Q = this._multibandSplit.Q, this.lowFrequency = this._multibandSplit.lowFrequency, this.highFrequency = this._multibandSplit.highFrequency, this._multibandSplit.low.chain(this._lowGain, this.output), this._multibandSplit.mid.chain(this._midGain, this.output), this._multibandSplit.high.chain(this._highGain, this.output), this._readOnly([
                    "low",
                    "mid",
                    "high",
                    "lowFrequency",
                    "highFrequency"
                ]);
            }, s3.default.extend(s3.default.EQ3, s3.default.AudioNode), s3.default.EQ3.defaults = {
                low: 0,
                mid: 0,
                high: 0,
                lowFrequency: 400,
                highFrequency: 2500
            }, s3.default.EQ3.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable([
                    "low",
                    "mid",
                    "high",
                    "lowFrequency",
                    "highFrequency"
                ]), this._multibandSplit.dispose(), this._multibandSplit = null, this.lowFrequency = null, this.highFrequency = null, this._lowGain.dispose(), this._lowGain = null, this._midGain.dispose(), this._midGain = null, this._highGain.dispose(), this._highGain = null, this.low = null, this.mid = null, this.high = null, this.Q = null, this;
            }, e3.default = s3.default.EQ3;
        },
        function(t1, e3, i5) {
            "use strict";
            i5.r(e3);
            var s3 = i5(0);
            i5(91), i5(88), i5(1);
            s3.default.Channel = function() {
                var t15 = s3.default.defaults(arguments, [
                    "volume",
                    "pan"
                ], s3.default.PanVol);
                s3.default.AudioNode.call(this, t15), this._solo = this.input = new s3.default.Solo(t15.solo), this._panVol = this.output = new s3.default.PanVol({
                    pan: t15.pan,
                    volume: t15.volume,
                    mute: t15.mute
                }), this.pan = this._panVol.pan, this.volume = this._panVol.volume, this._solo.connect(this._panVol), this._readOnly([
                    "pan",
                    "volume"
                ]);
            }, s3.default.extend(s3.default.Channel, s3.default.AudioNode), s3.default.Channel.defaults = {
                pan: 0,
                volume: 0,
                mute: !1,
                solo: !1
            }, Object.defineProperty(s3.default.Channel.prototype, "solo", {
                get: function() {
                    return this._solo.solo;
                },
                set: function(t15) {
                    this._solo.solo = t15;
                }
            }), Object.defineProperty(s3.default.Channel.prototype, "muted", {
                get: function() {
                    return this._solo.muted || this.mute;
                }
            }), Object.defineProperty(s3.default.Channel.prototype, "mute", {
                get: function() {
                    return this._panVol.mute;
                },
                set: function(t15) {
                    this._panVol.mute = t15;
                }
            }), s3.default.Channel.prototype.dispose = function() {
                return s3.default.AudioNode.prototype.dispose.call(this), this._writable([
                    "pan",
                    "volume"
                ]), this._panVol.dispose(), this._panVol = null, this.pan = null, this.volume = null, this._solo.dispose(), this._solo = null, this;
            }, e3.default = s3.default.Channel;
        },
        function(t1, e3) {
            var i5;
            i5 = (function() {
                return this;
            })();
            try {
                i5 = i5 || Function("return this")() || eval("this");
            } catch (t15) {
                "object" == typeof window && (i5 = window);
            }
            t1.exports = i5;
        },
        function(t1, e3, i5) {
            i5(31), i5(36), i5(146), i5(43), i5(23), i5(47), i5(145), i5(59), i5(144), i5(9), i5(58), i5(41), i5(143), i5(12), i5(142), i5(54), i5(10), i5(141), i5(140), i5(52), i5(53), i5(139), i5(138), i5(60), i5(48), i5(137), i5(91), i5(86), i5(88), i5(19), i5(27), i5(136), i5(135), i5(134), i5(79), i5(133), i5(1), i5(11), i5(78), i5(132), i5(83), i5(20), i5(18), i5(131), i5(35), i5(3), i5(81), i5(130), i5(40), i5(77), i5(76), i5(14), i5(24), i5(34), i5(16), i5(56), i5(80), i5(129), i5(128), i5(127), i5(126), i5(125), i5(124), i5(74), i5(123), i5(8), i5(122), i5(33), i5(121), i5(120), i5(73), i5(119), i5(118), i5(117), i5(116), i5(15), i5(115), i5(114), i5(72), i5(113), i5(112), i5(51), i5(71), i5(70), i5(111), i5(110), i5(109), i5(108), i5(107), i5(21), i5(106), i5(105), i5(25), i5(66), i5(104), i5(103), i5(102), i5(101), i5(38), i5(87), i5(29), i5(22), i5(89), i5(100), i5(85), i5(84), i5(75), i5(5), i5(90), i5(99), i5(61), i5(26), i5(42), i5(2), i5(30), i5(13), i5(82), i5(98), i5(7), i5(28), i5(68), i5(32), i5(67), i5(49), i5(97), i5(39), i5(37), i5(17), i5(64), i5(65), i5(96), i5(50), i5(69), i5(6), i5(57), i5(95), i5(46), i5(94), i5(55), i5(63), i5(62), i5(45), i5(4), t1.exports = i5(0).default;
        }
    ]);
});

},{}]},["clpIJ","29JuH"], "29JuH", "parcelRequire70ae")

//# sourceMappingURL=index.36efa996.js.map
