// src/components/TaskList/TaskList.tsx
import { forwardRef } from "react";

// src/mapping/tag.ts
function mapTagProps(input) {
  const { color = "default", noBorder, closable, disabled, className } = input;
  const classes = [
    "nhsuk-tag",
    color !== "default" ? `nhsuk-tag--${color}` : "",
    noBorder ? "nhsuk-tag--no-border" : "",
    closable ? "nhsuk-tag--closable" : "",
    disabled ? "nhsuk-tag--disabled" : "",
    className || ""
  ].filter(Boolean).join(" ");
  return { classes, showClose: !!closable, disabled: !!disabled };
}

// src/components/Tag/Tag.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Tag = ({
  text,
  html,
  children,
  color = "default",
  noBorder = false,
  closable = false,
  onClose,
  disabled = false,
  className,
  ...props
}) => {
  const model = mapTagProps({ color, noBorder, closable, disabled, className });
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsxs("strong", { className: model.classes, ...props, children: [
    children ? children : html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    closable && /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: handleClose,
        disabled,
        "aria-label": "Remove",
        title: "Remove",
        children: "\xD7"
      }
    )
  ] });
};

// src/components/TaskList/TaskList.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TaskList = forwardRef(
  ({ items, idPrefix = "task-list", className, ...props }, ref) => {
    const classes = [
      "nhsuk-task-list",
      className
    ].filter(Boolean).join(" ");
    const renderTaskItem = (item, index) => {
      const itemIndex = index + 1;
      const hintId = `${idPrefix}-${itemIndex}-hint`;
      const statusId = `${idPrefix}-${itemIndex}-status`;
      const hasLink = Boolean(item.href);
      const itemClasses = [
        "nhsuk-task-list__item",
        hasLink && "nhsuk-task-list__item--with-link",
        item.classes
      ].filter(Boolean).join(" ");
      const ariaDescribedBy = [
        item.hint && hintId,
        statusId
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ jsx2(
        TaskListItem,
        {
          item,
          itemClasses,
          hasLink,
          hintId,
          statusId,
          ariaDescribedBy
        },
        index
      );
    };
    return /* @__PURE__ */ jsx2(
      "ul",
      {
        ref,
        className: classes,
        ...props,
        children: items.map(renderTaskItem)
      }
    );
  }
);
var TaskListItem = ({
  item,
  itemClasses,
  hasLink,
  hintId,
  statusId,
  ariaDescribedBy
}) => {
  const renderTitle = () => {
    const titleContent = item.title.html ? /* @__PURE__ */ jsx2("span", { dangerouslySetInnerHTML: { __html: item.title.html } }) : item.title.text;
    const titleClasses = [
      hasLink ? "nhsuk-task-list__link" : "",
      item.title.classes
    ].filter(Boolean).join(" ");
    if (hasLink) {
      return /* @__PURE__ */ jsx2(
        "a",
        {
          className: titleClasses,
          href: item.href,
          "aria-describedby": ariaDescribedBy,
          children: titleContent
        }
      );
    }
    return /* @__PURE__ */ jsx2("div", { className: item.title.classes || "", children: titleContent });
  };
  const renderHint = () => {
    if (!item.hint) return null;
    const hintContent = item.hint.html ? /* @__PURE__ */ jsx2(
      "div",
      {
        id: hintId,
        className: "nhsuk-task-list__hint",
        dangerouslySetInnerHTML: { __html: item.hint.html }
      }
    ) : /* @__PURE__ */ jsx2("div", { id: hintId, className: "nhsuk-task-list__hint", children: item.hint.text });
    return hintContent;
  };
  const renderStatus = () => {
    const statusClasses = [
      "nhsuk-task-list__status",
      item.status.classes
    ].filter(Boolean).join(" ");
    let statusContent;
    if (item.status.tag) {
      statusContent = /* @__PURE__ */ jsx2(Tag, { ...item.status.tag });
    } else if (item.status.html) {
      statusContent = /* @__PURE__ */ jsx2("span", { dangerouslySetInnerHTML: { __html: item.status.html } });
    } else {
      statusContent = item.status.text;
    }
    return /* @__PURE__ */ jsx2("div", { className: statusClasses, id: statusId, children: statusContent });
  };
  return /* @__PURE__ */ jsxs2("li", { className: itemClasses, children: [
    /* @__PURE__ */ jsxs2("div", { className: "nhsuk-task-list__name-and-hint", children: [
      renderTitle(),
      renderHint()
    ] }),
    renderStatus()
  ] });
};
TaskList.displayName = "TaskList";
export {
  TaskList
};
//# sourceMappingURL=index.js.map
