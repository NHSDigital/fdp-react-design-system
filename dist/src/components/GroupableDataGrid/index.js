var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames4() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames4.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames4.default = classNames4;
        module.exports = classNames4;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames4;
        });
      } else {
        window.classNames = classNames4;
      }
    })();
  }
});

// src/components/GroupableDataGrid/GroupableDataGrid.tsx
var import_classnames3 = __toESM(require_classnames(), 1);
import React2, { useMemo as useMemo2, useCallback as useCallback4, useRef as useRef2, useEffect as useEffect3 } from "react";

// node_modules/d3-hierarchy/src/hierarchy/count.js
function count(node) {
  var sum2 = 0, children = node.children, i = children && children.length;
  if (!i) sum2 = 1;
  else while (--i >= 0) sum2 += children[i].value;
  node.value = sum2;
}
function count_default() {
  return this.eachAfter(count);
}

// node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default(callback, that) {
  let index = -1;
  for (const node of this) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback, that) {
  var node = this, nodes = [node], children, i, index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children = node.children) {
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
    }
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback, that) {
  var node = this, nodes = [node], next = [], children, i, n, index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children = node.children) {
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/find.js
function find_default(callback, that) {
  let index = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index, this)) {
      return node;
    }
  }
}

// node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default(value) {
  return this.eachAfter(function(node) {
    var sum2 = +value(node.data) || 0, children = node.children, i = children && children.length;
    while (--i >= 0) sum2 += children[i].value;
    node.value = sum2;
  });
}

// node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

// node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default(end) {
  var start = this, ancestor = leastCommonAncestor(start, end), nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

// node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

// node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  return Array.from(this);
}

// node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

// node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) {
      links.push({ source: node.parent, target: node });
    }
  });
  return links;
}

// node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* iterator_default() {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
      }
    }
  } while (next.length);
}

// node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children) {
  if (data instanceof Map) {
    data = [void 0, data];
    if (children === void 0) children = mapChildren;
  } else if (children === void 0) {
    children = objectChildren;
  }
  var root = new Node(data), node, nodes = [root], child, childs, i, n;
  while (node = nodes.pop()) {
    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
  return d.children;
}
function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
  if (node.data.value !== void 0) node.value = node.data.value;
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do
    node.height = height;
  while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: count_default,
  each: each_default,
  eachAfter: eachAfter_default,
  eachBefore: eachBefore_default,
  find: find_default,
  sum: sum_default,
  sort: sort_default,
  path: path_default,
  ancestors: ancestors_default,
  descendants: descendants_default,
  leaves: leaves_default,
  links: links_default,
  copy: node_copy,
  [Symbol.iterator]: iterator_default
};

// src/components/GroupableDataGrid/utils/aggregations.ts
function isNumeric(value) {
  return typeof value === "number" && !isNaN(value);
}
function isValidDate(value) {
  if (value instanceof Date) return !isNaN(value.getTime());
  const parsed = new Date(value);
  return !isNaN(parsed.getTime());
}
function extractValues(items, column) {
  return items.map((item) => {
    const keys = column.split(".");
    let value = item;
    for (const key of keys) {
      value = value == null ? void 0 : value[key];
      if (value === void 0) break;
    }
    return value;
  }).filter((v) => v !== void 0 && v !== null);
}
function sum(values) {
  const numericValues = values.filter(isNumeric);
  if (numericValues.length === 0) return 0;
  return numericValues.reduce((acc, val) => acc + val, 0);
}
function avg(values) {
  const numericValues = values.filter(isNumeric);
  if (numericValues.length === 0) return 0;
  return sum(numericValues) / numericValues.length;
}
function count2(values) {
  return values.length;
}
function countUnique(values) {
  return new Set(values).size;
}
function min(values) {
  const numericValues = values.filter(isNumeric);
  if (numericValues.length === 0) return null;
  return Math.min(...numericValues);
}
function max(values) {
  const numericValues = values.filter(isNumeric);
  if (numericValues.length === 0) return null;
  return Math.max(...numericValues);
}
function first(values) {
  return values.length > 0 ? values[0] : null;
}
function last(values) {
  return values.length > 0 ? values[values.length - 1] : null;
}
function concatFn(values) {
  const separator = ", ";
  return values.filter((v) => v !== null && v !== void 0).map((v) => String(v)).join(separator);
}
var AGGREGATION_FUNCTIONS = {
  sum,
  avg,
  count: count2,
  min,
  max,
  first,
  last,
  concat: concatFn,
  countUnique
};
function applyAggregation(config, items) {
  if (items.length === 0) {
    return null;
  }
  const values = extractValues(items, config.column);
  let result;
  if (config.type === "custom") {
    if (!config.customFn) {
      throw new Error(`Custom aggregation for column "${config.column}" requires a customFn`);
    }
    result = config.customFn(values, items);
  } else {
    const aggregationFn = AGGREGATION_FUNCTIONS[config.type];
    result = aggregationFn(values, items);
  }
  return result;
}
function applyAggregations(configs, items) {
  const results = {};
  for (const config of configs) {
    const key = config.label || `${config.column}_${config.type}`;
    results[key] = applyAggregation(config, items);
  }
  return results;
}
function calculateFieldValue(field, row, allData) {
  try {
    return field.calculate(row, allData);
  } catch (error) {
    console.error(`Error calculating field "${field.key}":`, error);
    return null;
  }
}
function enhanceDataWithCalculatedFields(data, calculatedFields) {
  if (calculatedFields.length === 0) {
    return data;
  }
  return data.map((row) => {
    const enhancedRow = { ...row };
    for (const field of calculatedFields) {
      enhancedRow[field.key] = calculateFieldValue(field, row, data);
    }
    return enhancedRow;
  });
}
function validateAggregationConfig(config) {
  const errors = [];
  if (!config.column) {
    errors.push("Aggregation config must specify a column");
  }
  if (!config.type) {
    errors.push("Aggregation config must specify a type");
  }
  if (config.type === "custom" && !config.customFn) {
    errors.push("Custom aggregation requires a customFn");
  }
  return errors;
}
function createDefaultLabel(config) {
  const typeLabels = {
    sum: "Sum",
    avg: "Average",
    count: "Count",
    min: "Min",
    max: "Max",
    first: "First",
    last: "Last",
    concat: "Concatenated",
    countUnique: "Unique",
    custom: "Custom"
  };
  const typeLabel = typeLabels[config.type] || config.type;
  return `${typeLabel} of ${config.column}`;
}
function formatAggregatedValue(value, config) {
  if (value === null || value === void 0) {
    return "\u2014";
  }
  if (config.format) {
    const formatted = config.format(value);
    return typeof formatted === "string" ? formatted : String(formatted);
  }
  switch (config.type) {
    case "sum":
    case "avg":
      return isNumeric(value) ? value.toFixed(2) : String(value);
    case "count":
    case "countUnique":
      return String(value);
    case "min":
    case "max":
      return isNumeric(value) ? value.toFixed(2) : String(value);
    case "first":
    case "last":
      return String(value);
    case "concat":
      return String(value);
    default:
      return String(value);
  }
}
function inferAggregationType(data, column) {
  const values = extractValues(data, column);
  if (values.length === 0) {
    return "count";
  }
  const allNumeric = values.every(isNumeric);
  if (allNumeric) {
    return "sum";
  }
  const allDates = values.every(isValidDate);
  if (allDates) {
    return "count";
  }
  return "count";
}
function createDefaultAggregations(data, columns, excludeColumns = []) {
  return columns.filter((col) => !excludeColumns.includes(col)).map((column) => ({
    column,
    type: inferAggregationType(data, column),
    showInHeader: true,
    showInFooter: true
  }));
}
function mergeAggregations(aggregations, configs) {
  const merged = {};
  for (const config of configs) {
    const key = config.label || `${config.column}_${config.type}`;
    const values = aggregations.map((agg) => agg[key]).filter((v) => v !== null && v !== void 0);
    if (config.type === "count") {
      merged[key] = sum(values);
    } else if (config.type === "sum") {
      merged[key] = sum(values);
    } else if (config.type === "avg") {
      merged[key] = avg(values);
    } else if (config.type === "min") {
      merged[key] = min(values);
    } else if (config.type === "max") {
      merged[key] = max(values);
    } else {
      merged[key] = values.length > 0 ? values[0] : null;
    }
  }
  return merged;
}
function calculatePercentage(value, total) {
  if (total === 0) return 0;
  return value / total * 100;
}
function formatPercentage(percentage, decimals = 1) {
  return `${percentage.toFixed(decimals)}%`;
}

// src/components/GroupableDataGrid/utils/HierarchyDataManager.ts
function groupBy(items, groupByFn) {
  const groups = /* @__PURE__ */ new Map();
  for (const item of items) {
    const key = typeof groupByFn === "function" ? groupByFn(item) : item[groupByFn];
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(item);
  }
  return groups;
}
function createGroupLabel(key, level) {
  if (level.label) {
    return `${level.label}: ${key}`;
  }
  return String(key);
}
function buildGroupedHierarchy(data, config) {
  const { levels } = config;
  function buildLevel(items, levelIndex, parentId) {
    if (levelIndex >= levels.length) {
      return items.map((item, idx) => ({
        id: `${parentId}-item-${idx}`,
        type: "item",
        level: levelIndex,
        data: item,
        items: [item]
      }));
    }
    const level = levels[levelIndex];
    const groups = groupBy(items, level.groupBy);
    const children2 = [];
    let sortedGroups = Array.from(groups.entries());
    if (level.sortDirection) {
      sortedGroups.sort((a, b) => {
        const dir = level.sortDirection === "asc" ? 1 : -1;
        return dir * String(a[0]).localeCompare(String(b[0]));
      });
    }
    for (const [key, groupItems] of sortedGroups) {
      const groupId = `${parentId}-${levelIndex}-${key}`;
      const childNodes = buildLevel(groupItems, levelIndex + 1, groupId);
      const aggregations = level.aggregations ? applyAggregations(level.aggregations, groupItems) : {};
      children2.push({
        id: groupId,
        type: "group",
        level: levelIndex,
        key,
        label: createGroupLabel(key, level),
        items: groupItems,
        aggregations,
        children: childNodes
      });
    }
    return children2;
  }
  const children = buildLevel(data, 0, "root");
  const globalAggregations = config.globalAggregations ? applyAggregations(config.globalAggregations, data) : {};
  return {
    id: "root",
    type: "root",
    level: -1,
    items: data,
    aggregations: globalAggregations,
    children
  };
}
function buildTreeHierarchy(data, config) {
  const { getId, getParentId, rootIds = [] } = config;
  const itemMap = /* @__PURE__ */ new Map();
  for (const item of data) {
    const id = getId(item);
    itemMap.set(id, item);
  }
  const nodeMap = /* @__PURE__ */ new Map();
  function buildNode(item, depth = 0) {
    const id = getId(item);
    if (nodeMap.has(id)) {
      return nodeMap.get(id);
    }
    const node = {
      id,
      type: "item",
      level: depth,
      data: item,
      items: [item],
      children: []
    };
    nodeMap.set(id, node);
    const children2 = [];
    for (const candidate of data) {
      const parentId = getParentId == null ? void 0 : getParentId(candidate);
      if (parentId === id) {
        children2.push(candidate);
      }
    }
    if (children2.length > 0) {
      node.children = children2.map((child) => buildNode(child, depth + 1));
      if (config.aggregations && config.showChildAggregations) {
        const allDescendantItems = collectDescendantItems(node);
        node.aggregations = applyAggregations(config.aggregations, allDescendantItems);
      }
    }
    return node;
  }
  const rootItems = [];
  for (const item of data) {
    const parentId = getParentId == null ? void 0 : getParentId(item);
    const isRoot = !parentId || rootIds.includes(parentId);
    if (isRoot) {
      rootItems.push(item);
    }
  }
  const children = rootItems.map((item) => buildNode(item, 0));
  return {
    id: "root",
    type: "root",
    level: -1,
    items: data,
    children
  };
}
function collectDescendantItems(node) {
  const items = [...node.items || []];
  if (node.children) {
    for (const child of node.children) {
      items.push(...collectDescendantItems(child));
    }
  }
  return items;
}
function flattenHierarchy(hierarchyRoot, expandedIds, mode) {
  const flattened = [];
  function traverse(node) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const nodeData = node.data;
    if (nodeData.type === "root") {
      if (node.children) {
        for (const child of node.children) {
          traverse(child);
        }
      }
      return;
    }
    const isExpanded = expandedIds.has(nodeData.id);
    const hasChildren = (((_a = node.children) == null ? void 0 : _a.length) || 0) > 0;
    if (nodeData.type === "group") {
      flattened.push({
        id: nodeData.id,
        type: "group",
        level: nodeData.level,
        isExpandable: hasChildren,
        isExpanded,
        groupMetadata: {
          key: nodeData.key,
          label: nodeData.label,
          aggregations: nodeData.aggregations || {},
          itemCount: ((_b = nodeData.items) == null ? void 0 : _b.length) || 0
        },
        parentId: ((_c = node.parent) == null ? void 0 : _c.data.id) !== "root" ? (_d = node.parent) == null ? void 0 : _d.data.id : void 0,
        path: getNodePath(node)
      });
      if (isExpanded && node.children) {
        for (const child of node.children) {
          traverse(child);
        }
      }
    } else if (nodeData.type === "item") {
      if (mode === "tree" && hasChildren) {
        flattened.push({
          id: nodeData.id,
          type: "tree-node",
          level: nodeData.level,
          isExpandable: true,
          isExpanded,
          data: nodeData.data,
          parentId: ((_e = node.parent) == null ? void 0 : _e.data.id) !== "root" ? (_f = node.parent) == null ? void 0 : _f.data.id : void 0,
          path: getNodePath(node)
        });
        if (isExpanded && node.children) {
          for (const child of node.children) {
            traverse(child);
          }
        }
      } else {
        flattened.push({
          id: nodeData.id,
          type: mode === "tree" ? "tree-node" : "item",
          level: nodeData.level,
          isExpandable: hasChildren,
          isExpanded: false,
          data: nodeData.data,
          parentId: ((_g = node.parent) == null ? void 0 : _g.data.id) !== "root" ? (_h = node.parent) == null ? void 0 : _h.data.id : void 0,
          path: getNodePath(node)
        });
      }
    }
  }
  traverse(hierarchyRoot);
  return flattened;
}
function getNodePath(node) {
  const path = [];
  let current = node;
  while (current && current.data.type !== "root") {
    path.unshift(current.data.id);
    current = current.parent;
  }
  return path;
}
var HierarchyDataManager = class {
  constructor(data, mode, config) {
    __publicField(this, "hierarchyRoot");
    __publicField(this, "mode");
    this.mode = mode;
    const rootData = mode === "grouped" ? buildGroupedHierarchy(data, config) : buildTreeHierarchy(data, config);
    this.hierarchyRoot = hierarchy(rootData);
  }
  /**
   * Get the hierarchy root
   */
  getRoot() {
    return this.hierarchyRoot;
  }
  /**
   * Get flattened nodes for rendering
   */
  getFlattenedNodes(expandedIds) {
    return flattenHierarchy(this.hierarchyRoot, expandedIds, this.mode);
  }
  /**
   * Find a node by ID
   */
  findNode(id) {
    return this.hierarchyRoot.find((node) => node.data.id === id);
  }
  /**
   * Get all descendant node IDs
   */
  getDescendantIds(id) {
    const node = this.findNode(id);
    if (!node) return [];
    const ids = [];
    node.each((descendant) => {
      if (descendant.data.id !== id) {
        ids.push(descendant.data.id);
      }
    });
    return ids;
  }
  /**
   * Get all ancestor node IDs
   */
  getAncestorIds(id) {
    const node = this.findNode(id);
    if (!node) return [];
    const ids = [];
    let current = node.parent;
    while (current && current.data.type !== "root") {
      ids.push(current.data.id);
      current = current.parent;
    }
    return ids;
  }
  /**
   * Get siblings of a node
   */
  getSiblingIds(id) {
    const node = this.findNode(id);
    if (!node || !node.parent) return [];
    return (node.parent.children || []).filter((sibling) => sibling.data.id !== id).map((sibling) => sibling.data.id);
  }
  /**
   * Get total item count
   */
  getTotalCount() {
    var _a;
    return ((_a = this.hierarchyRoot.data.items) == null ? void 0 : _a.length) || 0;
  }
  /**
   * Get maximum depth
   */
  getMaxDepth() {
    return this.hierarchyRoot.height;
  }
  /**
   * Get aggregations for a node
   */
  getAggregations(id) {
    const node = this.findNode(id);
    return node == null ? void 0 : node.data.aggregations;
  }
  /**
   * Get global (root) aggregations
   */
  getGlobalAggregations() {
    return this.hierarchyRoot.data.aggregations || {};
  }
};
function createInitialExpansionState(manager, initialExpanded, maxDepth) {
  const expandedIds = /* @__PURE__ */ new Set();
  if (initialExpanded === "all") {
    manager.getRoot().each((node) => {
      if (node.data.type !== "root") {
        if (!maxDepth || node.depth <= maxDepth) {
          expandedIds.add(node.data.id);
        }
      }
    });
  } else if (initialExpanded === "first") {
    const root = manager.getRoot();
    if (root.children) {
      for (const child of root.children) {
        expandedIds.add(child.data.id);
      }
    }
  } else if (Array.isArray(initialExpanded)) {
    for (const id of initialExpanded) {
      expandedIds.add(id);
    }
  }
  return expandedIds;
}

// src/components/GroupableDataGrid/hooks/useGroupExpansion.ts
import { useState, useCallback, useMemo, useEffect } from "react";
function normalizeInitialExpanded(value, hierarchyManager, maxAutoExpandDepth) {
  if (value instanceof Set) {
    return new Set(value);
  }
  if (Array.isArray(value)) {
    return new Set(value);
  }
  if (!hierarchyManager) {
    return /* @__PURE__ */ new Set();
  }
  if (value === "all") {
    const expandedIds = /* @__PURE__ */ new Set();
    hierarchyManager.getRoot().each((node) => {
      if (node.data.type !== "root") {
        if (!maxAutoExpandDepth || node.depth <= maxAutoExpandDepth) {
          expandedIds.add(node.data.id);
        }
      }
    });
    return expandedIds;
  }
  if (value === "first") {
    const expandedIds = /* @__PURE__ */ new Set();
    const root = hierarchyManager.getRoot();
    if (root.children) {
      for (const child of root.children) {
        expandedIds.add(child.data.id);
      }
    }
    return expandedIds;
  }
  return /* @__PURE__ */ new Set();
}
function loadPersistedState(key) {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      return new Set(parsed);
    }
  } catch (error) {
    console.warn("Failed to load persisted expansion state:", error);
  }
  return null;
}
function persistState(key, expandedIds) {
  if (typeof window === "undefined") {
    return;
  }
  try {
    const serialized = JSON.stringify(Array.from(expandedIds));
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.warn("Failed to persist expansion state:", error);
  }
}
function useGroupExpansion(options = {}) {
  const {
    initialExpanded,
    expandedIds: controlledExpandedIds,
    onExpansionChange,
    hierarchyManager,
    maxAutoExpandDepth,
    persistKey
  } = options;
  const isControlled = controlledExpandedIds !== void 0;
  const persistedState = useMemo(() => {
    return persistKey ? loadPersistedState(persistKey) : null;
  }, [persistKey]);
  const [internalExpandedIds, setInternalExpandedIds] = useState(() => {
    if (persistedState) {
      return persistedState;
    }
    return normalizeInitialExpanded(initialExpanded, hierarchyManager, maxAutoExpandDepth);
  });
  const expandedIds = isControlled ? controlledExpandedIds : internalExpandedIds;
  const updateExpansion = useCallback(
    (newExpandedIds) => {
      if (!isControlled) {
        setInternalExpandedIds(newExpandedIds);
      }
      if (persistKey) {
        persistState(persistKey, newExpandedIds);
      }
      onExpansionChange == null ? void 0 : onExpansionChange(newExpandedIds);
    },
    [isControlled, persistKey, onExpansionChange]
  );
  const expand = useCallback(
    (id) => {
      const newExpandedIds = new Set(expandedIds);
      newExpandedIds.add(id);
      updateExpansion(newExpandedIds);
    },
    [expandedIds, updateExpansion]
  );
  const collapse = useCallback(
    (id) => {
      const newExpandedIds = new Set(expandedIds);
      newExpandedIds.delete(id);
      updateExpansion(newExpandedIds);
    },
    [expandedIds, updateExpansion]
  );
  const toggle = useCallback(
    (id) => {
      if (expandedIds.has(id)) {
        collapse(id);
      } else {
        expand(id);
      }
    },
    [expandedIds, expand, collapse]
  );
  const expandAll = useCallback(() => {
    if (!hierarchyManager) {
      console.warn("Cannot expand all: hierarchyManager not provided");
      return;
    }
    const newExpandedIds = /* @__PURE__ */ new Set();
    hierarchyManager.getRoot().each((node) => {
      if (node.data.type !== "root") {
        if (!maxAutoExpandDepth || node.depth <= maxAutoExpandDepth) {
          newExpandedIds.add(node.data.id);
        }
      }
    });
    updateExpansion(newExpandedIds);
  }, [hierarchyManager, maxAutoExpandDepth, updateExpansion]);
  const collapseAll = useCallback(() => {
    updateExpansion(/* @__PURE__ */ new Set());
  }, [updateExpansion]);
  const expandToDepth = useCallback(
    (depth) => {
      if (!hierarchyManager) {
        console.warn("Cannot expand to depth: hierarchyManager not provided");
        return;
      }
      const newExpandedIds = /* @__PURE__ */ new Set();
      hierarchyManager.getRoot().each((node) => {
        if (node.data.type !== "root" && node.depth <= depth) {
          newExpandedIds.add(node.data.id);
        }
      });
      updateExpansion(newExpandedIds);
    },
    [hierarchyManager, updateExpansion]
  );
  useEffect(() => {
    if (!isControlled && initialExpanded) {
      const normalized = normalizeInitialExpanded(
        initialExpanded,
        hierarchyManager,
        maxAutoExpandDepth
      );
      setInternalExpandedIds(normalized);
    }
  }, [initialExpanded, hierarchyManager, maxAutoExpandDepth, isControlled]);
  return {
    expandedIds,
    expand,
    collapse,
    toggle,
    expandAll,
    collapseAll,
    expandToDepth
  };
}
function isNodeExpanded(id, expansionState) {
  return expansionState.expandedIds.has(id);
}
function getExpandedStates(ids, expansionState) {
  const states = /* @__PURE__ */ new Map();
  for (const id of ids) {
    states.set(id, expansionState.expandedIds.has(id));
  }
  return states;
}

// src/components/GroupableDataGrid/hooks/useTreeNavigation.ts
import { useState as useState2, useCallback as useCallback2, useEffect as useEffect2, useRef } from "react";
function useTreeNavigation(options) {
  const {
    flattenedNodes,
    expansionState,
    hierarchyManager,
    columnCount,
    onFocusChange,
    onRowActivate,
    enableColumnNavigation = false
  } = options;
  const [focusedNodeId, setFocusedNodeId] = useState2(null);
  const [focusedColumnIndex, setFocusedColumnIndex] = useState2(0);
  const [isNavigationActive, setIsNavigationActive] = useState2(false);
  const hasAutoFocused = useRef(false);
  useEffect2(() => {
    if (!hasAutoFocused.current && flattenedNodes.length > 0 && !focusedNodeId) {
      setFocusedNodeId(flattenedNodes[0].id);
      hasAutoFocused.current = true;
    }
  }, [flattenedNodes, focusedNodeId]);
  const findNodeIndex = useCallback2(
    (nodeId) => {
      if (!nodeId) return -1;
      return flattenedNodes.findIndex((node) => node.id === nodeId);
    },
    [flattenedNodes]
  );
  const getFocusedNode = useCallback2(() => {
    if (!focusedNodeId) return null;
    return flattenedNodes.find((node) => node.id === focusedNodeId) || null;
  }, [focusedNodeId, flattenedNodes]);
  const focusNode = useCallback2(
    (nodeId) => {
      setFocusedNodeId(nodeId);
      setFocusedColumnIndex(0);
      onFocusChange == null ? void 0 : onFocusChange(nodeId);
    },
    [onFocusChange]
  );
  const focusNext = useCallback2(() => {
    const currentIndex = findNodeIndex(focusedNodeId);
    if (currentIndex < flattenedNodes.length - 1) {
      focusNode(flattenedNodes[currentIndex + 1].id);
    }
  }, [focusedNodeId, flattenedNodes, findNodeIndex, focusNode]);
  const focusPrevious = useCallback2(() => {
    const currentIndex = findNodeIndex(focusedNodeId);
    if (currentIndex > 0) {
      focusNode(flattenedNodes[currentIndex - 1].id);
    }
  }, [focusedNodeId, flattenedNodes, findNodeIndex, focusNode]);
  const focusFirst = useCallback2(() => {
    if (flattenedNodes.length > 0) {
      focusNode(flattenedNodes[0].id);
    }
  }, [flattenedNodes, focusNode]);
  const focusLast = useCallback2(() => {
    if (flattenedNodes.length > 0) {
      focusNode(flattenedNodes[flattenedNodes.length - 1].id);
    }
  }, [flattenedNodes, focusNode]);
  const focusParent = useCallback2(() => {
    const currentNode = getFocusedNode();
    if (!currentNode || !currentNode.parentId) return;
    focusNode(currentNode.parentId);
  }, [getFocusedNode, focusNode]);
  const expandFocused = useCallback2(() => {
    if (!focusedNodeId) return;
    const node = getFocusedNode();
    if (node && node.isExpandable && !node.isExpanded) {
      expansionState.expand(focusedNodeId);
    }
  }, [focusedNodeId, getFocusedNode, expansionState]);
  const collapseFocused = useCallback2(() => {
    if (!focusedNodeId) return;
    const node = getFocusedNode();
    if (node && node.isExpandable && node.isExpanded) {
      expansionState.collapse(focusedNodeId);
    } else if (node && node.parentId) {
      focusParent();
    }
  }, [focusedNodeId, getFocusedNode, expansionState, focusParent]);
  const toggleFocused = useCallback2(() => {
    if (!focusedNodeId) return;
    const node = getFocusedNode();
    if (node && node.isExpandable) {
      expansionState.toggle(focusedNodeId);
    }
  }, [focusedNodeId, getFocusedNode, expansionState]);
  const activateNavigation = useCallback2(() => {
    setIsNavigationActive(true);
  }, []);
  const deactivateNavigation = useCallback2(() => {
    setIsNavigationActive(false);
  }, []);
  const handleKeyDown = useCallback2(
    (event) => {
      const { key, ctrlKey, metaKey } = event;
      const isModified = ctrlKey || metaKey;
      switch (key) {
        case "ArrowDown":
          event.preventDefault();
          focusNext();
          break;
        case "ArrowUp":
          event.preventDefault();
          focusPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          if (enableColumnNavigation && !isModified) {
            if (focusedColumnIndex < columnCount - 1) {
              setFocusedColumnIndex((prev) => prev + 1);
            }
          } else {
            expandFocused();
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          if (enableColumnNavigation && focusedColumnIndex > 0) {
            setFocusedColumnIndex((prev) => prev - 1);
          } else {
            collapseFocused();
          }
          break;
        case "Home":
          event.preventDefault();
          if (isModified) {
            focusFirst();
          } else {
            setFocusedColumnIndex(0);
          }
          break;
        case "End":
          event.preventDefault();
          if (isModified) {
            focusLast();
          } else {
            setFocusedColumnIndex(columnCount - 1);
          }
          break;
        case "Enter":
          event.preventDefault();
          if (focusedNodeId) {
            if (isNavigationActive) {
              onRowActivate == null ? void 0 : onRowActivate(focusedNodeId);
            } else {
              activateNavigation();
            }
          }
          break;
        case " ":
          event.preventDefault();
          toggleFocused();
          break;
        case "Escape":
          event.preventDefault();
          if (isNavigationActive) {
            deactivateNavigation();
          } else if (focusedNodeId) {
            setFocusedNodeId(null);
            onFocusChange == null ? void 0 : onFocusChange(null);
          }
          break;
        case "*":
          event.preventDefault();
          {
            const currentNode = getFocusedNode();
            if (currentNode && currentNode.parentId) {
              const siblingIds = hierarchyManager.getSiblingIds(currentNode.id);
              siblingIds.forEach((id) => {
                const node = flattenedNodes.find((n) => n.id === id);
                if (node && node.isExpandable) {
                  expansionState.expand(id);
                }
              });
            }
          }
          break;
        default:
          break;
      }
    },
    [
      focusNext,
      focusPrevious,
      focusFirst,
      focusLast,
      expandFocused,
      collapseFocused,
      toggleFocused,
      activateNavigation,
      deactivateNavigation,
      focusedNodeId,
      focusedColumnIndex,
      columnCount,
      enableColumnNavigation,
      isNavigationActive,
      onRowActivate,
      onFocusChange,
      getFocusedNode,
      hierarchyManager,
      flattenedNodes,
      expansionState
    ]
  );
  return {
    focusedNodeId,
    focusedColumnIndex,
    isNavigationActive,
    focusNode,
    handleKeyDown,
    focusNext,
    focusPrevious,
    focusFirst,
    focusLast,
    focusParent,
    expandFocused,
    collapseFocused,
    toggleFocused,
    activateNavigation,
    deactivateNavigation
  };
}
function useCellFocus(nodeId, columnIndex, navigationState) {
  const isFocused = navigationState.focusedNodeId === nodeId && navigationState.focusedColumnIndex === columnIndex;
  return {
    isFocused,
    tabIndex: isFocused ? 0 : -1,
    "aria-selected": isFocused
  };
}

// src/components/GroupableDataGrid/components/GroupHeader.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { jsx, jsxs } from "react/jsx-runtime";
var ChevronIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7 5L12 10L7 15",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var GroupHeader = ({
  context,
  columnCount,
  customRenderer,
  isFocused = false,
  onKeyDown,
  onClick,
  tabIndex = -1,
  "data-testid": testId
}) => {
  const { node, level, isExpanded, toggleExpansion, aggregations, totalCount } = context;
  if (customRenderer) {
    return /* @__PURE__ */ jsx(
      "tr",
      {
        className: (0, import_classnames.default)("group-header", {
          "group-header--expanded": isExpanded,
          "group-header--focused": isFocused,
          [`group-header--level-${level + 1}`]: true
        }),
        role: "row",
        "aria-expanded": isExpanded,
        "aria-level": level + 1,
        tabIndex,
        onClick: onClick || toggleExpansion,
        onKeyDown,
        "data-testid": testId,
        "data-node-id": node.id,
        children: /* @__PURE__ */ jsx("td", { colSpan: columnCount, className: "group-header__cell group-header__cell--custom", children: customRenderer(context) })
      }
    );
  }
  const aggregationEntries = Object.entries(aggregations);
  const hasAggregations = aggregationEntries.length > 0;
  return /* @__PURE__ */ jsxs(
    "tr",
    {
      className: (0, import_classnames.default)("group-header", {
        "group-header--expanded": isExpanded,
        "group-header--focused": isFocused,
        [`group-header--level-${level + 1}`]: true
      }),
      role: "row",
      "aria-expanded": isExpanded,
      "aria-level": level + 1,
      tabIndex,
      onClick: onClick || toggleExpansion,
      onKeyDown,
      "data-testid": testId,
      "data-node-id": node.id,
      children: [
        /* @__PURE__ */ jsxs(
          "td",
          {
            className: (0, import_classnames.default)(
              "group-header__cell",
              "group-header__cell--first",
              `group-header__cell--indent-${level}`
            ),
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: (0, import_classnames.default)("group-header__icon", {
                    "group-header__icon--expanded": isExpanded
                  }),
                  children: /* @__PURE__ */ jsx(ChevronIcon, {})
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "group-header__label", children: node.label }),
              /* @__PURE__ */ jsxs("span", { className: "group-header__count", children: [
                "(",
                totalCount,
                " ",
                totalCount === 1 ? "item" : "items",
                ")"
              ] })
            ]
          }
        ),
        columnCount > 1 && hasAggregations && /* @__PURE__ */ jsx(
          "td",
          {
            className: "group-header__cell group-header__cell--aggregations",
            colSpan: columnCount - 1,
            children: /* @__PURE__ */ jsx("div", { className: "group-header__aggregations", children: aggregationEntries.map(([key, value], index) => {
              const displayValue = typeof value === "object" && value !== null ? JSON.stringify(value) : String(value != null ? value : "\u2014");
              return /* @__PURE__ */ jsxs("div", { className: "group-header__aggregation", children: [
                /* @__PURE__ */ jsxs("span", { className: "group-header__aggregation-label", children: [
                  key,
                  ":"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "group-header__aggregation-value", children: displayValue })
              ] }, `${key}-${index}`);
            }) })
          }
        ),
        columnCount > 1 && !hasAggregations && /* @__PURE__ */ jsx("td", { colSpan: columnCount - 1, className: "group-header__cell" })
      ]
    }
  );
};
GroupHeader.displayName = "GroupHeader";

// src/components/GroupableDataGrid/components/TreeNode.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ExpanderIcon = () => /* @__PURE__ */ jsx2(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx2(
      "path",
      {
        d: "M6 4L10 8L6 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
function renderCellValue(item, column) {
  const value = item[column.key];
  if (column.render) {
    return column.render(item);
  }
  if (value === null || value === void 0) {
    return "\u2014";
  }
  return String(value);
}
var TreeNode = ({
  context,
  columns,
  customRenderer,
  isFocused = false,
  onKeyDown,
  onExpanderClick,
  tabIndex = -1,
  "data-testid": testId
}) => {
  const { node, depth, isExpanded, toggleExpansion, hasChildren, aggregations } = context;
  if (customRenderer) {
    return /* @__PURE__ */ jsx2(
      "tr",
      {
        className: (0, import_classnames2.default)("tree-node", {
          "tree-node--expanded": isExpanded,
          "tree-node--focused": isFocused,
          "tree-node--has-children": hasChildren
        }),
        role: "row",
        "aria-expanded": hasChildren ? isExpanded : void 0,
        "aria-level": depth + 1,
        tabIndex,
        onKeyDown,
        "data-testid": testId,
        "data-node-id": node.id,
        children: /* @__PURE__ */ jsx2("td", { colSpan: columns.length, className: "tree-node__cell tree-node__cell--custom", children: customRenderer(context) })
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    "tr",
    {
      className: (0, import_classnames2.default)("tree-node", {
        "tree-node--expanded": isExpanded,
        "tree-node--focused": isFocused,
        "tree-node--has-children": hasChildren
      }),
      role: "row",
      "aria-expanded": hasChildren ? isExpanded : void 0,
      "aria-level": depth + 1,
      tabIndex,
      onKeyDown,
      "data-testid": testId,
      "data-node-id": node.id,
      children: columns.map((column, columnIndex) => {
        const isFirstColumn = columnIndex === 0;
        return /* @__PURE__ */ jsxs2(
          "td",
          {
            className: (0, import_classnames2.default)("tree-node__cell", {
              "tree-node__cell--first": isFirstColumn,
              [`tree-node__cell--depth-${depth}`]: isFirstColumn
            }),
            role: "gridcell",
            children: [
              isFirstColumn && /* @__PURE__ */ jsx2(Fragment, { children: hasChildren ? /* @__PURE__ */ jsx2(
                "button",
                {
                  type: "button",
                  className: (0, import_classnames2.default)("tree-node__expander", {
                    "tree-node__expander--expanded": isExpanded
                  }),
                  onClick: (e) => {
                    e.stopPropagation();
                    if (onExpanderClick) {
                      onExpanderClick();
                    } else {
                      toggleExpansion();
                    }
                  },
                  "aria-label": isExpanded ? "Collapse node" : "Expand node",
                  tabIndex: -1,
                  children: /* @__PURE__ */ jsx2(ExpanderIcon, {})
                }
              ) : /* @__PURE__ */ jsx2("span", { className: "tree-node__expander tree-node__expander--placeholder" }) }),
              /* @__PURE__ */ jsx2("span", { className: "tree-node__content", children: renderCellValue(node.data, column) }),
              isFirstColumn && aggregations && Object.keys(aggregations).length > 0 && /* @__PURE__ */ jsxs2("span", { className: "tree-node__aggregation-hint", title: "Has aggregated data from children", children: [
                " ",
                "(",
                Object.keys(aggregations).length,
                " agg)"
              ] })
            ]
          },
          column.key
        );
      })
    }
  );
};
TreeNode.displayName = "TreeNode";

// src/components/Button/Button.tsx
import * as React from "react";

// src/mapping/button.ts
function mapButtonProps(input) {
  const variant = input.variant || "primary";
  const size = input.size || "default";
  const fullWidth = !!input.fullWidth;
  const classes = [
    "nhs-aria-button",
    `nhs-aria-button--${variant}`,
    size !== "default" ? `nhs-aria-button--${size}` : "",
    fullWidth ? "nhs-aria-button--full-width" : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  const tag = input.href ? "a" : "button";
  return {
    tag,
    classes,
    data: { module: "nhs-button" },
    attrs: input.href ? { href: input.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!input.preventDoubleClick
  };
}

// src/components/Button/Button.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var { forwardRef, useCallback: useCallback3, useState: useState3 } = React;
function ButtonComponent(props, ref) {
  const {
    children,
    variant = "primary" /* Primary */,
    size = "default" /* Default */,
    fullWidth = false,
    className = "",
    preventDoubleClick = false,
    ...rest
  } = props;
  const [isPressed, setIsPressed] = useState3(false);
  const [isHovered, setIsHovered] = useState3(false);
  const [isFocused, setIsFocused] = useState3(false);
  const model = mapButtonProps({
    variant,
    size,
    fullWidth,
    className,
    preventDoubleClick,
    href: "href" in rest ? rest.href : void 0
  });
  const isDisabled = "disabled" in rest ? rest.disabled : rest["aria-disabled"] === "true";
  const dataAttributes = {
    ...isPressed && { "data-pressed": "true" },
    ...isHovered && { "data-hovered": "true" },
    ...isFocused && { "data-focused": "true" },
    ...isDisabled && { "data-disabled": "true" }
  };
  const handleMouseDown = useCallback3(
    () => !isDisabled && setIsPressed(true),
    [isDisabled]
  );
  const handleMouseUp = useCallback3(() => setIsPressed(false), []);
  const handleMouseEnter = useCallback3(
    () => !isDisabled && setIsHovered(true),
    [isDisabled]
  );
  const handleMouseLeave = useCallback3(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);
  const handleFocus = useCallback3(() => setIsFocused(true), []);
  const handleBlur = useCallback3(() => setIsFocused(false), []);
  const handleKeyDown = useCallback3(
    (event) => {
      if (event.key === " " && ("href" in rest || event.currentTarget.getAttribute("role") === "button")) {
        event.preventDefault();
        event.currentTarget.click();
      }
    },
    [rest]
  );
  const handleClick = useCallback3(
    (event) => {
      if (preventDoubleClick) {
        const target = event.currentTarget;
        const isAlreadyProcessing = target.getAttribute("data-processing") === "true";
        if (isAlreadyProcessing) {
          event.preventDefault();
          return;
        }
        target.setAttribute("data-processing", "true");
        setTimeout(() => {
          target.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [preventDoubleClick]
  );
  if ("href" in rest && rest.href) {
    const {
      id: id2,
      style: style2,
      title: title2,
      ["aria-label"]: ariaLabel2,
      ["aria-describedby"]: ariaDescribedBy2,
      ["aria-labelledby"]: ariaLabelledBy2,
      tabIndex: tabIndex2,
      ...anchorRest
    } = rest;
    const anchorProps = rest;
    return /* @__PURE__ */ jsx3(
      "a",
      {
        ref,
        href: anchorProps.href,
        target: anchorProps.target,
        rel: anchorProps.rel,
        className: model.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...dataAttributes,
        ...preventDoubleClick && { "data-prevent-double-click": "true" },
        ...anchorRest,
        onKeyDown: (event) => {
          var _a;
          (_a = anchorProps.onKeyDown) == null ? void 0 : _a.call(anchorProps, event);
          handleKeyDown(event);
        },
        onClick: (event) => {
          var _a;
          (_a = anchorProps.onClick) == null ? void 0 : _a.call(anchorProps, event);
          handleClick(event);
        },
        onMouseDown: (event) => {
          var _a;
          (_a = anchorProps.onMouseDown) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseDown();
        },
        onMouseUp: (event) => {
          var _a;
          (_a = anchorProps.onMouseUp) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseUp();
        },
        onMouseEnter: (event) => {
          var _a;
          (_a = anchorProps.onMouseEnter) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseEnter();
        },
        onMouseLeave: (event) => {
          var _a;
          (_a = anchorProps.onMouseLeave) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseLeave();
        },
        onFocus: (event) => {
          var _a;
          (_a = anchorProps.onFocus) == null ? void 0 : _a.call(anchorProps, event);
          handleFocus();
        },
        onBlur: (event) => {
          var _a;
          (_a = anchorProps.onBlur) == null ? void 0 : _a.call(anchorProps, event);
          handleBlur();
        },
        "aria-disabled": anchorProps["aria-disabled"],
        ...anchorProps["aria-disabled"] === "true" && { tabIndex: -1 },
        id: id2,
        style: style2,
        title: title2,
        "aria-label": ariaLabel2,
        "aria-describedby": ariaDescribedBy2,
        "aria-labelledby": ariaLabelledBy2,
        tabIndex: tabIndex2,
        children
      }
    );
  }
  const {
    id,
    style,
    title,
    ["aria-label"]: ariaLabel,
    ["aria-describedby"]: ariaDescribedBy,
    ["aria-labelledby"]: ariaLabelledBy,
    tabIndex,
    name,
    value: valueProp,
    form,
    formAction,
    formEncType,
    formMethod,
    formNoValidate,
    formTarget,
    autoFocus,
    ...buttonRest
  } = rest;
  const buttonProps = rest;
  return /* @__PURE__ */ jsx3(
    "button",
    {
      ref,
      type: buttonProps.type || "button",
      disabled: buttonProps.disabled,
      className: model.classes,
      "data-module": "nhs-button",
      ...dataAttributes,
      ...preventDoubleClick && { "data-prevent-double-click": "true" },
      ...buttonProps.disabled && { "aria-disabled": "true" },
      ...buttonRest,
      onKeyDown: (event) => {
        var _a;
        (_a = buttonProps.onKeyDown) == null ? void 0 : _a.call(buttonProps, event);
        handleKeyDown(event);
      },
      onClick: (event) => {
        var _a;
        (_a = buttonProps.onClick) == null ? void 0 : _a.call(buttonProps, event);
        handleClick(event);
      },
      onMouseDown: (event) => {
        var _a;
        (_a = buttonProps.onMouseDown) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseDown();
      },
      onMouseUp: (event) => {
        var _a;
        (_a = buttonProps.onMouseUp) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseUp();
      },
      onMouseEnter: (event) => {
        var _a;
        (_a = buttonProps.onMouseEnter) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseEnter();
      },
      onMouseLeave: (event) => {
        var _a;
        (_a = buttonProps.onMouseLeave) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseLeave();
      },
      onFocus: (event) => {
        var _a;
        (_a = buttonProps.onFocus) == null ? void 0 : _a.call(buttonProps, event);
        handleFocus();
      },
      onBlur: (event) => {
        var _a;
        (_a = buttonProps.onBlur) == null ? void 0 : _a.call(buttonProps, event);
        handleBlur();
      },
      id,
      style,
      title,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      "aria-labelledby": ariaLabelledBy,
      tabIndex,
      name,
      value: valueProp,
      form,
      formAction,
      formEncType,
      formMethod,
      formNoValidate,
      formTarget,
      autoFocus,
      children
    }
  );
}
var Button = forwardRef(ButtonComponent);
Button.displayName = "Button";
var Button_default = Button;

// src/components/GroupableDataGrid/GroupableDataGrid.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var ChevronUpIcon = () => /* @__PURE__ */ jsx4(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx4(
      "path",
      {
        d: "M12 10L8 6L4 10",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var ChevronDownIcon = () => /* @__PURE__ */ jsx4(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx4(
      "path",
      {
        d: "M4 6L8 10L12 6",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var SortableIcon = () => /* @__PURE__ */ jsxs3(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx4(
        "path",
        {
          d: "M12 6L8 2L4 6",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx4(
        "path",
        {
          d: "M4 10L8 14L12 10",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
function renderDataRow(node, columns, rowIndex, isFocused, isSelected, onKeyDown, onClick) {
  if (!node.data) return null;
  return /* @__PURE__ */ jsx4(
    "tr",
    {
      className: (0, import_classnames3.default)("groupable-datagrid__data-row", {
        "groupable-datagrid__data-row--focused": isFocused,
        "groupable-datagrid__data-row--selected": isSelected
      }),
      role: "row",
      "aria-selected": isSelected,
      tabIndex: isFocused ? 0 : -1,
      onKeyDown,
      onClick,
      "data-row-index": rowIndex,
      "data-node-id": node.id,
      style: { cursor: onClick ? "pointer" : void 0 },
      children: columns.map((column) => {
        const value = node.data[column.key];
        const cellContent = column.customRenderer ? column.customRenderer(value, node.data) : column.render ? column.render(node.data) : value !== null && value !== void 0 ? String(value) : "\u2014";
        return /* @__PURE__ */ jsx4(
          "td",
          {
            className: "groupable-datagrid__data-cell",
            role: "gridcell",
            children: cellContent
          },
          column.key
        );
      })
    },
    node.id
  );
}
var GroupableDataGrid = ({
  mode,
  data,
  columns,
  groupConfig,
  treeConfig,
  // pivotConfig, // Future use
  calculatedFields = [],
  initialExpanded,
  expandedIds: controlledExpandedIds,
  onExpansionChange,
  // enableVirtualization = false, // Future use
  // virtualizationConfig, // Future use
  // onDataChange, // Future use
  // enableInlineEditing = false, // Future use
  // onCellEditStart, // Future use
  // onCellEditComplete, // Future use
  selectedRow,
  onGlobalRowSelectionChange,
  onRowClick,
  sortConfig,
  onSortChange,
  enableMultiSort = false,
  showControls = true,
  controlsRenderer,
  isLoading = false,
  error = null,
  ariaLabel,
  ariaDescription,
  className,
  "data-testid": testId,
  mobileDisplay = "auto",
  mobileBreakpoint = 768
}) => {
  const containerRef = useRef2(null);
  const [isMobile, setIsMobile] = React2.useState(false);
  React2.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [mobileBreakpoint]);
  const showCards = mobileDisplay === "cards" || mobileDisplay === "auto" && isMobile;
  const showScroll = mobileDisplay === "scroll" || mobileDisplay === "auto" && !isMobile;
  const sortedData = useMemo2(() => {
    if (!sortConfig || sortConfig.length === 0) return data;
    const sorted = [...data];
    for (let i = sortConfig.length - 1; i >= 0; i--) {
      const config = sortConfig[i];
      const column = columns.find((c) => c.key === config.key);
      sorted.sort((a, b) => {
        let aVal = a[config.key];
        let bVal = b[config.key];
        if (column == null ? void 0 : column.render) {
          aVal = column.render(a);
          bVal = column.render(b);
        }
        if (aVal == null && bVal == null) return 0;
        if (aVal == null) return 1;
        if (bVal == null) return -1;
        if (typeof aVal === "number" && typeof bVal === "number") {
          return config.direction === "asc" ? aVal - bVal : bVal - aVal;
        }
        const aStr = String(aVal);
        const bStr = String(bVal);
        const comparison = aStr.localeCompare(bStr);
        return config.direction === "asc" ? comparison : -comparison;
      });
    }
    return sorted;
  }, [data, sortConfig, columns]);
  const handleSort = useCallback4(
    (columnKey) => {
      if (!onSortChange) return;
      const currentSort = sortConfig == null ? void 0 : sortConfig.find((s) => s.key === columnKey);
      if (enableMultiSort) {
        let newSortConfig = [...sortConfig || []];
        if (!currentSort) {
          newSortConfig.push({ key: columnKey, direction: "asc" });
        } else if (currentSort.direction === "asc") {
          newSortConfig = newSortConfig.map(
            (s) => s.key === columnKey ? { ...s, direction: "desc" } : s
          );
        } else {
          newSortConfig = newSortConfig.filter((s) => s.key !== columnKey);
        }
        onSortChange(newSortConfig);
      } else {
        if (!currentSort) {
          onSortChange([{ key: columnKey, direction: "asc" }]);
        } else if (currentSort.direction === "asc") {
          onSortChange([{ key: columnKey, direction: "desc" }]);
        } else {
          onSortChange([]);
        }
      }
    },
    [sortConfig, onSortChange, enableMultiSort]
  );
  const handleRowClick = useCallback4(
    (rowData, event) => {
      if (onRowClick) {
        onRowClick(rowData, event);
      }
      if (onGlobalRowSelectionChange) {
        const isAlreadySelected = selectedRow === rowData;
        onGlobalRowSelectionChange(isAlreadySelected ? null : rowData);
      }
    },
    [onRowClick, onGlobalRowSelectionChange, selectedRow]
  );
  const enhancedData = useMemo2(() => {
    const sourceData = sortedData;
    if (calculatedFields.length === 0) return sourceData;
    return enhanceDataWithCalculatedFields(sourceData, calculatedFields);
  }, [sortedData, calculatedFields]);
  const hierarchyManager = useMemo2(() => {
    if (mode === "flat" || mode === "pivot") {
      return null;
    }
    if (mode === "grouped") {
      if (!groupConfig) {
        console.warn("GroupableDataGrid: grouped mode requires groupConfig");
        return null;
      }
      return new HierarchyDataManager(enhancedData, "grouped", groupConfig);
    }
    if (mode === "tree") {
      if (!treeConfig) {
        console.warn("GroupableDataGrid: tree mode requires treeConfig");
        return null;
      }
      return new HierarchyDataManager(enhancedData, "tree", treeConfig);
    }
    return null;
  }, [mode, enhancedData, groupConfig, treeConfig]);
  const expansion = useGroupExpansion({
    initialExpanded,
    expandedIds: controlledExpandedIds,
    onExpansionChange,
    hierarchyManager: hierarchyManager || void 0,
    maxAutoExpandDepth: (groupConfig == null ? void 0 : groupConfig.maxAutoExpandDepth) || (treeConfig == null ? void 0 : treeConfig.maxAutoExpandDepth)
  });
  const flattenedNodes = useMemo2(() => {
    if (!hierarchyManager) {
      return enhancedData.map((item, index) => ({
        id: `flat-${index}`,
        type: "item",
        level: 0,
        isExpandable: false,
        isExpanded: false,
        data: item,
        path: [`flat-${index}`]
      }));
    }
    return hierarchyManager.getFlattenedNodes(expansion.expandedIds);
  }, [hierarchyManager, expansion.expandedIds, enhancedData]);
  const navigation = useTreeNavigation({
    flattenedNodes,
    expansionState: expansion,
    hierarchyManager,
    columnCount: columns.length,
    enableColumnNavigation: mode === "tree"
  });
  useEffect3(() => {
    if (navigation.focusedNodeId && containerRef.current) {
      const focusedRow = containerRef.current.querySelector(
        `[data-node-id="${navigation.focusedNodeId}"]`
      );
      if (focusedRow && document.activeElement !== focusedRow) {
        if (document.activeElement instanceof HTMLElement && document.activeElement !== document.body && containerRef.current.contains(document.activeElement)) {
          document.activeElement.blur();
        }
        focusedRow.focus();
      }
    }
  }, [navigation.focusedNodeId]);
  const renderNode = useCallback4(
    (node, index) => {
      var _a, _b;
      const isFocused = navigation.focusedNodeId === node.id;
      if (node.type === "group") {
        if (!hierarchyManager || !groupConfig) return null;
        const hierarchyNode = hierarchyManager.findNode(node.id);
        if (!hierarchyNode) return null;
        const context = {
          node: {
            id: node.id,
            key: node.groupMetadata.key,
            label: node.groupMetadata.label,
            level: node.level,
            items: hierarchyNode.data.items || [],
            aggregations: node.groupMetadata.aggregations,
            totalCount: node.groupMetadata.itemCount
          },
          level: node.level,
          isExpanded: node.isExpanded,
          toggleExpansion: () => expansion.toggle(node.id),
          aggregations: node.groupMetadata.aggregations,
          totalCount: node.groupMetadata.itemCount,
          childCount: ((_a = hierarchyNode.children) == null ? void 0 : _a.length) || 0
        };
        const levelConfig = groupConfig.levels[node.level];
        const customRenderer = levelConfig == null ? void 0 : levelConfig.headerRenderer;
        return /* @__PURE__ */ jsx4(
          GroupHeader,
          {
            context,
            columnCount: columns.length,
            customRenderer,
            isFocused,
            onKeyDown: navigation.handleKeyDown,
            tabIndex: isFocused ? 0 : -1
          },
          node.id
        );
      }
      if (node.type === "tree-node") {
        if (!hierarchyManager || !treeConfig) return null;
        const hierarchyNode = hierarchyManager.findNode(node.id);
        if (!hierarchyNode) return null;
        const context = {
          node: {
            id: node.id,
            data: node.data,
            depth: node.level,
            children: (_b = hierarchyNode.children) == null ? void 0 : _b.map((c) => ({
              id: c.data.id,
              data: c.data.data,
              depth: c.depth
            })),
            aggregations: hierarchyNode.data.aggregations
          },
          depth: node.level,
          isExpanded: node.isExpanded,
          toggleExpansion: () => expansion.toggle(node.id),
          hasChildren: node.isExpandable,
          aggregations: hierarchyNode.data.aggregations,
          path: node.path.map((id) => {
            const n = hierarchyManager.findNode(id);
            return n ? { id, data: n.data.data, depth: n.depth } : { id, data: {}, depth: 0 };
          })
        };
        const customRenderer = treeConfig.nodeRenderer;
        return /* @__PURE__ */ jsx4(
          TreeNode,
          {
            context,
            columns,
            customRenderer,
            isFocused,
            onKeyDown: navigation.handleKeyDown,
            tabIndex: isFocused ? 0 : -1
          },
          node.id
        );
      }
      const isSelected = selectedRow === node.data;
      const onClick = onGlobalRowSelectionChange || onRowClick ? (event) => handleRowClick(node.data, event) : void 0;
      return renderDataRow(
        node,
        columns,
        index,
        isFocused,
        isSelected,
        navigation.handleKeyDown,
        onClick
      );
    },
    [
      navigation,
      hierarchyManager,
      groupConfig,
      treeConfig,
      columns,
      expansion,
      selectedRow,
      handleRowClick,
      onGlobalRowSelectionChange,
      onRowClick
    ]
  );
  const renderControls = useCallback4(() => {
    if (!showControls) return null;
    if (controlsRenderer) {
      const context = {
        mode,
        expansion,
        totalItems: enhancedData.length,
        visibleItems: flattenedNodes.length,
        groupLevels: groupConfig == null ? void 0 : groupConfig.levels
      };
      return /* @__PURE__ */ jsx4("div", { className: "groupable-datagrid__controls", children: controlsRenderer(context) });
    }
    if (mode === "flat") return null;
    return /* @__PURE__ */ jsxs3("div", { className: "groupable-datagrid__controls", children: [
      /* @__PURE__ */ jsxs3("div", { className: "groupable-datagrid__controls-left", children: [
        /* @__PURE__ */ jsx4(Button_default, { variant: "secondary", onClick: () => expansion.expandAll(), children: "Expand All" }),
        /* @__PURE__ */ jsx4(Button_default, { variant: "secondary", onClick: () => expansion.collapseAll(), children: "Collapse All" })
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "groupable-datagrid__controls-right", children: /* @__PURE__ */ jsxs3("span", { className: "groupable-datagrid__controls-info", children: [
        "Showing ",
        flattenedNodes.filter((n) => n.type === "item").length,
        " of",
        " ",
        enhancedData.length,
        " items"
      ] }) })
    ] });
  }, [
    showControls,
    controlsRenderer,
    mode,
    expansion,
    enhancedData.length,
    flattenedNodes.length,
    groupConfig
  ]);
  const renderCard = useCallback4(
    (node) => {
      var _a, _b;
      if (node.type === "group") {
        const level = node.level || 0;
        const isExpanded = node.isExpanded;
        return /* @__PURE__ */ jsx4(
          "div",
          {
            className: (0, import_classnames3.default)(
              "groupable-datagrid__card",
              "groupable-datagrid__card--group",
              `groupable-datagrid__card--level-${level}`,
              {
                "groupable-datagrid__card--expanded": isExpanded
              }
            ),
            onClick: () => expansion.toggle(node.id),
            children: /* @__PURE__ */ jsxs3("div", { className: "groupable-datagrid__card-group-header", children: [
              /* @__PURE__ */ jsx4(
                "button",
                {
                  className: "groupable-datagrid__card-group-toggle",
                  "aria-label": isExpanded ? "Collapse group" : "Expand group",
                  "aria-expanded": isExpanded,
                  children: /* @__PURE__ */ jsx4(
                    "svg",
                    {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, import_classnames3.default)(
                        "groupable-datagrid__card-group-chevron",
                        {
                          "groupable-datagrid__card-group-chevron--expanded": isExpanded
                        }
                      ),
                      children: /* @__PURE__ */ jsx4(
                        "path",
                        {
                          d: "M6 8L10 12L14 8",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx4("span", { className: "groupable-datagrid__card-group-label", children: ((_a = node.groupMetadata) == null ? void 0 : _a.label) || "Group" }),
              ((_b = node.groupMetadata) == null ? void 0 : _b.itemCount) !== void 0 && /* @__PURE__ */ jsxs3("span", { className: "groupable-datagrid__card-group-count", children: [
                "(",
                node.groupMetadata.itemCount,
                ")"
              ] })
            ] })
          },
          node.id
        );
      }
      if (node.type === "item" && node.data) {
        const isSelected = selectedRow === node.data;
        const primaryField = columns.find(
          (c) => c.key === "metricName" || c.key === "name" || c.key === "title"
        ) || columns[0];
        const otherFields = columns.filter((c) => c.key !== primaryField.key);
        return /* @__PURE__ */ jsxs3(
          "div",
          {
            className: (0, import_classnames3.default)("groupable-datagrid__card", {
              "groupable-datagrid__card--selected": isSelected
            }),
            onClick: (e) => {
              if (onGlobalRowSelectionChange) {
                onGlobalRowSelectionChange(
                  isSelected ? null : node.data
                );
              }
              if (onRowClick) {
                onRowClick(node.data, e);
              }
            },
            children: [
              (() => {
                const value = node.data[primaryField.key];
                const cellContent = primaryField.customRenderer ? primaryField.customRenderer(value, node.data) : primaryField.render ? primaryField.render(node.data) : value !== null && value !== void 0 ? String(value) : "\u2014";
                return /* @__PURE__ */ jsx4("div", { className: "groupable-datagrid__card-title", children: cellContent });
              })(),
              otherFields.map((column) => {
                const value = node.data[column.key];
                const cellContent = column.customRenderer ? column.customRenderer(value, node.data) : column.render ? column.render(node.data) : value !== null && value !== void 0 ? String(value) : "\u2014";
                return /* @__PURE__ */ jsxs3(
                  "div",
                  {
                    className: "groupable-datagrid__card-field",
                    children: [
                      /* @__PURE__ */ jsx4("div", { className: "groupable-datagrid__card-label", children: column.label }),
                      /* @__PURE__ */ jsx4("div", { className: "groupable-datagrid__card-value", children: cellContent })
                    ]
                  },
                  column.key
                );
              })
            ]
          },
          node.id
        );
      }
      return null;
    },
    [
      columns,
      expansion,
      groupConfig,
      selectedRow,
      onGlobalRowSelectionChange,
      onRowClick,
      hierarchyManager
    ]
  );
  if (isLoading) {
    return /* @__PURE__ */ jsx4(
      "div",
      {
        className: (0, import_classnames3.default)(
          "groupable-datagrid",
          "groupable-datagrid--loading",
          className
        ),
        children: /* @__PURE__ */ jsx4("p", { children: "Loading data..." })
      }
    );
  }
  if (error) {
    return /* @__PURE__ */ jsx4(
      "div",
      {
        className: (0, import_classnames3.default)(
          "groupable-datagrid",
          "groupable-datagrid--error",
          className
        ),
        children: /* @__PURE__ */ jsxs3("p", { children: [
          "Error: ",
          error
        ] })
      }
    );
  }
  if (enhancedData.length === 0) {
    return /* @__PURE__ */ jsx4("div", { className: (0, import_classnames3.default)("groupable-datagrid", className), children: /* @__PURE__ */ jsx4("div", { className: "groupable-datagrid__empty", children: "No data available" }) });
  }
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      ref: containerRef,
      className: (0, import_classnames3.default)("groupable-datagrid", className, {
        "groupable-datagrid--mobile-cards": showCards,
        "groupable-datagrid--mobile-scroll": showScroll
      }),
      "data-testid": testId,
      "data-mode": mode,
      children: [
        renderControls(),
        showCards && /* @__PURE__ */ jsx4("div", { className: "groupable-datagrid__cards", children: flattenedNodes.map((node) => renderCard(node)) }),
        !showCards && /* @__PURE__ */ jsx4("div", { className: "groupable-datagrid__table-wrapper", children: /* @__PURE__ */ jsxs3(
          "table",
          {
            className: "groupable-datagrid__treegrid",
            role: mode === "flat" ? "table" : "treegrid",
            "aria-label": ariaLabel,
            "aria-describedby": ariaDescription,
            children: [
              /* @__PURE__ */ jsx4("thead", { children: /* @__PURE__ */ jsx4("tr", { className: "groupable-datagrid__header-row", role: "row", children: columns.map((column) => {
                const columnSort = sortConfig == null ? void 0 : sortConfig.find(
                  (s) => s.key === column.key
                );
                const isSortable = column.sortable !== false && onSortChange;
                const sortIndex = sortConfig == null ? void 0 : sortConfig.findIndex(
                  (s) => s.key === column.key
                );
                return /* @__PURE__ */ jsx4(
                  "th",
                  {
                    role: "columnheader",
                    "aria-sort": columnSort ? columnSort.direction === "asc" ? "ascending" : "descending" : void 0,
                    className: (0, import_classnames3.default)("groupable-datagrid__header-cell", {
                      "groupable-datagrid__header-cell--sortable": isSortable,
                      "groupable-datagrid__header-cell--sorted": !!columnSort
                    }),
                    onClick: isSortable ? () => handleSort(column.key) : void 0,
                    style: { cursor: isSortable ? "pointer" : void 0 },
                    children: /* @__PURE__ */ jsxs3("div", { className: "groupable-datagrid__header-content", children: [
                      /* @__PURE__ */ jsx4("span", { children: column.label }),
                      isSortable && /* @__PURE__ */ jsxs3("span", { className: "groupable-datagrid__sort-indicator", children: [
                        !columnSort && /* @__PURE__ */ jsx4(SortableIcon, {}),
                        (columnSort == null ? void 0 : columnSort.direction) === "asc" && /* @__PURE__ */ jsx4(ChevronUpIcon, {}),
                        (columnSort == null ? void 0 : columnSort.direction) === "desc" && /* @__PURE__ */ jsx4(ChevronDownIcon, {}),
                        enableMultiSort && columnSort && sortIndex !== void 0 && sortIndex >= 0 && /* @__PURE__ */ jsx4("span", { className: "groupable-datagrid__sort-order", children: sortIndex + 1 })
                      ] })
                    ] })
                  },
                  column.key
                );
              }) }) }),
              /* @__PURE__ */ jsx4("tbody", { role: "rowgroup", children: flattenedNodes.map((node, index) => renderNode(node, index)) }),
              hierarchyManager && (groupConfig == null ? void 0 : groupConfig.showSummaryFooter) && /* @__PURE__ */ jsx4("tfoot", { children: /* @__PURE__ */ jsx4("tr", { className: "groupable-datagrid__summary-row", role: "row", children: /* @__PURE__ */ jsxs3("td", { colSpan: columns.length, children: [
                /* @__PURE__ */ jsx4("strong", { children: "Total:" }),
                " ",
                hierarchyManager.getTotalCount(),
                " ",
                "items"
              ] }) }) })
            ]
          }
        ) })
      ]
    }
  );
};
GroupableDataGrid.displayName = "GroupableDataGrid";
export {
  GroupHeader,
  GroupableDataGrid,
  HierarchyDataManager,
  TreeNode as TreeNodeComponent,
  applyAggregation,
  applyAggregations,
  calculateFieldValue,
  calculatePercentage,
  createDefaultAggregations,
  createDefaultLabel,
  createInitialExpansionState,
  enhanceDataWithCalculatedFields,
  formatAggregatedValue,
  formatPercentage,
  getExpandedStates,
  inferAggregationType,
  isNodeExpanded,
  mergeAggregations,
  useCellFocus,
  useGroupExpansion,
  useTreeNavigation,
  validateAggregationConfig
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=index.js.map
