(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["repo"],{

/***/ "./src/pages/repo/list.hbs":
/*!*********************************!*\
  !*** ./src/pages/repo/list.hbs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div class=\\\"list\\\" id=\\\"repo-list\\\" empty-message=\\\"{{msg}}\\\">{{#list}}{{#.}}\\n  <div class=\\\"list-item\\\" sha=\\\"{{sha}}\\\" name=\\\"{{name}}\\\"\\n    action=\\\"{{#isDirectory}}folder{{/isDirectory}}{{#isFile}}file{{/isFile}}\\\">\\n    <span class=\\\"icon {{type}}\\\"></span>\\n    <span class=\\\"container\\\">\\n      <div class=\\\"text\\\">\\n        <span>{{name}}</span>\\n      </div>\\n      {{#isFile}}\\n      <small class=\\\"value\\\">{{size}}</small>\\n      {{/isFile}}\\n    </span>\\n  </div>\\n  {{/.}}{{/list}}</div>\");\n\n//# sourceURL=webpack:///./src/pages/repo/list.hbs?");

/***/ }),

/***/ "./src/pages/repo/menu.hbs":
/*!*********************************!*\
  !*** ./src/pages/repo/menu.hbs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<li action=\\\"info\\\">\\n  <span class=\\\"text\\\">{{info}}</span>\\n  <span class=\\\"icon info\\\"></span>\\n</li>\");\n\n//# sourceURL=webpack:///./src/pages/repo/menu.hbs?");

/***/ }),

/***/ "./src/pages/repo/repo.hbs":
/*!*********************************!*\
  !*** ./src/pages/repo/repo.hbs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div class=\\\"main\\\" id=\\\"repo-tree\\\">\\n  <div class=\\\"navigation\\\"></div>\\n</div>\");\n\n//# sourceURL=webpack:///./src/pages/repo/repo.hbs?");

/***/ }),

/***/ "./src/pages/repo/repo.include.js":
/*!****************************************!*\
  !*** ./src/pages/repo/repo.include.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RepoInclude; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _repo_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repo.hbs */ \"./src/pages/repo/repo.hbs\");\n/* harmony import */ var _list_hbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.hbs */ \"./src/pages/repo/list.hbs\");\n/* harmony import */ var _menu_hbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.hbs */ \"./src/pages/repo/menu.hbs\");\n/* harmony import */ var _repo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repo.scss */ \"./src/pages/repo/repo.scss\");\n/* harmony import */ var _repo_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_repo_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mime-types */ \"./node_modules/mime-types/index.js\");\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/page */ \"./src/components/page.js\");\n/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/helpers */ \"./src/lib/helpers.js\");\n/* harmony import */ var _components_dialogs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/dialogs */ \"./src/components/dialogs.js\");\n/* harmony import */ var _lib_git__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/git */ \"./src/lib/git.js\");\n/* harmony import */ var _components_contextMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/contextMenu */ \"./src/components/contextMenu.js\");\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/searchbar */ \"./src/components/searchbar.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction RepoInclude(owner, repoName) {\n  var $page = Object(_components_page__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(repoName);\n  var $menuToggler = html_tag_js__WEBPACK_IMPORTED_MODULE_7___default()('span', {\n    className: 'icon more_vert',\n    attr: {\n      action: 'toggle-menu'\n    }\n  });\n  var $content = html_tag_js__WEBPACK_IMPORTED_MODULE_7___default.a.parse(_repo_hbs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  var $navigation = $content.querySelector('.navigation');\n  var repo = _lib_git__WEBPACK_IMPORTED_MODULE_13__[\"default\"].GitHub().getRepo(owner, repoName);\n  var $search = html_tag_js__WEBPACK_IMPORTED_MODULE_7___default()('span', {\n    className: 'icon search',\n    attr: {\n      action: \"search\"\n    }\n  });\n  var cachedTree = {};\n  var currentTree = {};\n  var idsToFlush = [];\n  var branch;\n  var branches = [];\n  var input1 = {\n    id: 'from',\n    placeholder: strings['use branch'],\n    hints: function hints(cb) {\n      cb(branches.slice(0, -1));\n    },\n    type: 'text'\n  };\n  var input2 = {\n    id: 'branch',\n    placeholder: strings['new branch'],\n    type: 'text',\n    match: /^[a-z\\-_0-9]+$/i\n  };\n  var path = [];\n  var $cm = Object(_components_contextMenu__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_menu_hbs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], strings), {\n    toggle: $menuToggler,\n    top: '8px',\n    right: '8px',\n    transformOrigin: 'top right'\n  });\n  _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderShow(repoName, strings.loading + '...');\n  repo.listBranches().then(function (res) {\n    _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderHide();\n    var data = res.data;\n    data.map(function (branch) {\n      branches.push(branch.name);\n    });\n    branches.push(['add', strings['new branch'], 'add']);\n    return _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].select(strings['select branch'], branches);\n  }).then(function (res) {\n    if (res === 'add') {\n      addBranch();\n    } else {\n      branch = res;\n      getRepo();\n    }\n  })[\"catch\"](function (err) {\n    _lib_helpers__WEBPACK_IMPORTED_MODULE_11__[\"default\"].error(err);\n    console.error(err);\n  })[\"finally\"](function (res) {\n    _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderHide();\n  });\n\n  function addBranch() {\n    _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].multiPrompt(strings['create new branch'], [input1, input2]).then(function (res) {\n      var from = res.from;\n      branch = res.branch;\n      _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderShow('', strings.loading + '...');\n      return repo.createBranch(from, branch);\n    }).then(getRepo)[\"catch\"](function (err) {\n      _lib_helpers__WEBPACK_IMPORTED_MODULE_11__[\"default\"].error(err);\n      console.error(err);\n    })[\"finally\"](function () {\n      _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderHide();\n    });\n  }\n\n  function getRepo() {\n    _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderShow(repoName, strings.loading + '...');\n    repo.getSha(branch, '').then(function (res) {\n      var list = res.data;\n      render(list, repoName, 'root');\n      actionStack.push({\n        id: 'repo',\n        action: $page.hide\n      });\n\n      $page.onhide = function () {\n        $cm.removeEventListener('click', handleClick);\n        $page.removeEventListener('click', handleClick);\n        actionStack.remove('repo');\n        idsToFlush.map(function (id) {\n          actionStack.remove(id);\n        });\n      };\n    })[\"catch\"](function (err) {\n      _lib_helpers__WEBPACK_IMPORTED_MODULE_11__[\"default\"].error(err);\n      console.error(err);\n    })[\"finally\"](function () {\n      _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderHide();\n    });\n    $cm.addEventListener('click', handleClick);\n    $page.addEventListener('click', handleClick);\n    $page.append($content);\n    $page.querySelector('header').append($search, $menuToggler);\n    document.body.appendChild($page);\n  }\n  /**\n   * \n   * @param {MouseEvent} e \n   */\n\n\n  function handleClick(e) {\n    /**\n     * @type {HTMLElement}\n     */\n    var $el = e.target;\n    var action = $el.getAttribute('action');\n    if (!action) return;\n    if (action === 'info') $cm.hide();\n    performeAction(action, $el);\n  }\n\n  function render(list, name, sha) {\n    $page.settitle(repoName + \" (\".concat(branch, \")\"));\n\n    if (!(sha in cachedTree)) {\n      list.map(function (entry) {\n        var size = entry.size,\n            type = entry.type,\n            name = entry.name;\n        entry.size = (size / 1024).toFixed(2) + 'KB';\n        if (!entry.name && entry.path) entry.name = entry.path;\n        entry.isDirectory = type === 'dir' || type === 'tree';\n        entry.isFile = !entry.isDirectory;\n        entry.type = entry.isDir ? 'folder' : _lib_helpers__WEBPACK_IMPORTED_MODULE_11__[\"default\"].getIconForFile(name);\n      });\n    }\n\n    list = _lib_helpers__WEBPACK_IMPORTED_MODULE_11__[\"default\"].sortDir(list, {\n      showHiddenFiles: 'on',\n      sortByName: 'on'\n    });\n    var $oldList = $content.querySelector('.list');\n    if ($oldList) $oldList.remove();\n    var $list = html_tag_js__WEBPACK_IMPORTED_MODULE_7___default.a.parse(mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_list_hbs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      msg: strings['empty folder message'],\n      list: list\n    }));\n    $content.append($list);\n    if (sha in cachedTree) $list.scrollTop = cachedTree[sha].scroll || 0;\n    navigate(name, sha);\n\n    if (!(sha in cachedTree)) {\n      currentTree = {\n        list: list,\n        name: name,\n        sha: sha\n      };\n      cachedTree[sha] = currentTree;\n    } else {\n      currentTree = cachedTree[sha];\n    }\n  }\n\n  function navigate(name, sha) {\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    path.push(name);\n    var $nav = $navigation.querySelector(\"[sha=\\\"\".concat(sha, \"\\\"]\"));\n    var $old = $navigation.querySelector('.active');\n    if ($old) $old.classList.remove('active');\n\n    if ($nav) {\n      $nav.classList.add('active');\n    } else {\n      $nav = html_tag_js__WEBPACK_IMPORTED_MODULE_7___default()('span', {\n        className: 'nav active',\n        attr: _objectSpread({\n          sha: sha,\n          action: 'navigate',\n          text: name,\n          name: name\n        }, options)\n      });\n      $navigation.append($nav);\n    }\n\n    $navigation.scrollLeft = $navigation.scrollWidth;\n  }\n  /**\n   * \n   * @param {string} action \n   * @param {HTMLElement} $el \n   */\n\n\n  function performeAction(_action, $el) {\n    var sha = $el.getAttribute('sha');\n    var name = $el.getAttribute('name');\n\n    switch (_action) {\n      case 'folder':\n        folder();\n        break;\n\n      case 'file':\n        file();\n        break;\n\n      case 'navigate':\n        folder();\n        break;\n\n      case 'info':\n        //jshint ignore:start\n        __webpack_require__.e(/*! import() | repo-info */ \"repo-info\").then(__webpack_require__.bind(null, /*! ../info/info */ \"./src/pages/info/info.js\")).then(function (res) {\n          res[\"default\"](repoName, owner);\n        }); //jshint ignore:end\n\n        break;\n\n      case 'search':\n        Object(_components_searchbar__WEBPACK_IMPORTED_MODULE_15__[\"default\"])($content.get(\".list\"));\n        break;\n    }\n\n    function folder() {\n      currentTree.scroll = $content.querySelector('.list').scrollTop;\n      var _currentTree = currentTree,\n          csha = _currentTree.sha,\n          clist = _currentTree.list,\n          cname = _currentTree.name;\n\n      if (sha in cachedTree) {\n        render(cachedTree[sha].list, name, sha);\n      } else {\n        _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderShow(repoName, strings.loading + '...');\n        repo.getTree(sha).then(function (res) {\n          var data = res.data;\n          render(data.tree, name, sha);\n        })[\"catch\"](error)[\"finally\"](_components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderHide);\n      }\n\n      actionStack.push({\n        id: csha,\n        action: function action() {\n          render(clist, cname, csha);\n          idsToFlush.pop();\n\n          if (_action === 'folder') {\n            var $nav = $navigation.lastChild;\n\n            if ($nav) {\n              path.pop();\n              path.pop();\n              $nav.remove();\n            }\n          }\n        }\n      });\n      idsToFlush.push(csha);\n    }\n\n    function file() {\n      _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderShow(name, strings.loading + '...');\n      var ext = _lib_helpers__WEBPACK_IMPORTED_MODULE_11__[\"default\"].getExt(name);\n      var mime = mime_types__WEBPACK_IMPORTED_MODULE_9___default.a.lookup(ext);\n      var type = /image/i.test(mime) ? 'blob' : null;\n      repo.getBlob(sha, 'blob').then( /*#__PURE__*/function () {\n        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {\n          var data, record;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  data = res.data;\n\n                  if (type) {\n                    _context.next = 28;\n                    break;\n                  }\n\n                  if (!(data instanceof Blob)) {\n                    _context.next = 19;\n                    break;\n                  }\n\n                  _context.prev = 3;\n\n                  if (!data.text) {\n                    _context.next = 10;\n                    break;\n                  }\n\n                  _context.next = 7;\n                  return data.text();\n\n                case 7:\n                  data = _context.sent;\n                  _context.next = 13;\n                  break;\n\n                case 10:\n                  _context.next = 12;\n                  return _lib_helpers__WEBPACK_IMPORTED_MODULE_11__[\"default\"].blob2text(data);\n\n                case 12:\n                  data = _context.sent;\n\n                case 13:\n                  _context.next = 19;\n                  break;\n\n                case 15:\n                  _context.prev = 15;\n                  _context.t0 = _context[\"catch\"](3);\n                  console.error(_context.t0);\n                  _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].alert(strings.error, strings['unable to open file']);\n\n                case 19:\n                  record = gitRecord.add({\n                    sha: sha,\n                    data: data,\n                    name: name,\n                    branch: branch,\n                    repo: repoName,\n                    path: path.slice(1).join('/'),\n                    owner: owner\n                  });\n                  editorManager.addNewFile(name, {\n                    type: 'git',\n                    record: record,\n                    text: data,\n                    isUnsaved: false\n                  });\n                  $page.hide();\n                  window.freeze = false;\n                  actionStack.pop();\n                  actionStack.pop();\n                  window.freeze = true;\n                  _context.next = 29;\n                  break;\n\n                case 28:\n                  if (type === 'blob') {\n                    _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].box(name, \"<img src='\".concat(URL.createObjectURL(data), \"'>\"));\n                  } else {\n                    alert(strings.error.toUpperCase(), strings['file not supported']);\n                  }\n\n                case 29:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, null, [[3, 15]]);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }())[\"finally\"](function () {\n        _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].loaderHide();\n      });\n    }\n  }\n\n  function error(err) {\n    console.log(err);\n    actionStack.pop();\n    _components_dialogs__WEBPACK_IMPORTED_MODULE_12__[\"default\"].alert(strings.error, err.toString());\n  }\n}\n\n//# sourceURL=webpack:///./src/pages/repo/repo.include.js?");

/***/ }),

/***/ "./src/pages/repo/repo.scss":
/*!**********************************!*\
  !*** ./src/pages/repo/repo.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/repo/repo.scss?");

/***/ })

}]);