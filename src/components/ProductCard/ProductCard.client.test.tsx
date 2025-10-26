import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductCard } from "./ProductCard";

describe("ProductCard - Client Tests", () => {
  describe("Rendering", () => {
    it("renders title and description", () => {
      render(
        <ProductCard
          title="Test Product"
          description="Test description"
        />
      );

      expect(screen.getByRole("heading", { name: "Test Product" })).toBeTruthy();
      expect(screen.getByText("Test description")).toBeTruthy();
    });

    it("renders badge when provided", () => {
      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          badge="New"
        />
      );

      expect(screen.getByText("New")).toBeTruthy();
    });

    it("renders buttons", () => {
      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          buttons={[
            { label: "Button 1", href: "#" },
            { label: "Button 2", onClick: vi.fn() },
          ]}
        />
      );

      expect(screen.getByRole("link", { name: "Button 1" })).toBeTruthy();
      expect(screen.getByRole("button", { name: "Button 2" })).toBeTruthy();
    });

    it("renders footer content", () => {
      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          footer={<div>Footer content</div>}
        />
      );

      expect(screen.getByText("Footer content")).toBeTruthy();
    });

    it("renders photo image when provided", () => {
      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          image={{
            type: "photo",
            src: "/test-image.jpg",
            alt: "Test image",
          }}
        />
      );

      const img = screen.getByRole("img");
      expect(img.getAttribute("src")).toBe("/test-image.jpg");
      expect(img.getAttribute("alt")).toBe("Test image");
    });

    it("renders vector graphic when specified", () => {
      const { container } = render(
        <ProductCard
          title="Test Product"
          description="Test description"
          image={{
            type: "graphic",
            seed: 12345,
          }}
        />
      );

      const svg = container.querySelector(".nhs-product-card__graphic");
      expect(svg).toBeTruthy();
    });

    it("renders custom vector shapes", () => {
      const { container } = render(
        <ProductCard
          title="Test Product"
          description="Test description"
          image={{
            type: "graphic",
            shapes: [
              { kind: "circle", x: 50, y: 50, size: 80, gradient: "blue" },
              { kind: "rect", x: 30, y: 30, width: 60, height: 40, gradient: "aqua-green" },
            ],
          }}
        />
      );

      const svg = container.querySelector(".nhs-product-card__graphic");
      expect(svg).toBeTruthy();
      expect(svg?.querySelectorAll("circle").length).toBe(1);
      expect(svg?.querySelectorAll("rect").length).toBe(1);
    });
  });

  describe("Layouts and Themes", () => {
    it("applies vertical layout class by default", () => {
      const { container } = render(
        <ProductCard title="Test" description="Test" />
      );

      expect(container.firstChild instanceof Element && 
        container.firstChild.className.includes("nhs-product-card--vertical")).toBe(true);
    });

    it("applies horizontal layout class when specified", () => {
      const { container } = render(
        <ProductCard title="Test" description="Test" layout="horizontal" />
      );

      expect(container.firstChild instanceof Element && 
        container.firstChild.className.includes("nhs-product-card--horizontal")).toBe(true);
    });

    it("accepts 'landscape' alias for horizontal", () => {
      const { container } = render(
        <ProductCard title="Test" description="Test" layout="landscape" />
      );

      expect(container.firstChild instanceof Element &&
        container.firstChild.className.includes("nhs-product-card--horizontal")).toBe(true);
    });

    it("accepts 'portrait' alias for vertical", () => {
      const { container } = render(
        <ProductCard title="Test" description="Test" layout="portrait" />
      );

      expect(container.firstChild instanceof Element &&
        container.firstChild.className.includes("nhs-product-card--vertical")).toBe(true);
    });

    it("applies theme class", () => {
      const { container } = render(
        <ProductCard title="Test" description="Test" theme="aqua-green" />
      );

      expect(container.firstChild instanceof Element && 
        container.firstChild.className.includes("nhs-product-card--theme-aqua-green")).toBe(true);
    });

    it("applies elevated class by default", () => {
      const { container } = render(
        <ProductCard title="Test" description="Test" />
      );

      expect(container.firstChild instanceof Element && 
        container.firstChild.className.includes("nhs-product-card--elevated")).toBe(true);
    });

    it("does not apply elevated class when disabled", () => {
      const { container } = render(
        <ProductCard title="Test" description="Test" elevated={false} />
      );

      expect(container.firstChild instanceof Element && 
        container.firstChild.className.includes("nhs-product-card--elevated")).toBe(false);
    });
  });

  describe("Interactive Behavior", () => {
    it("calls onClick when card is clicked", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          onClick={handleClick}
        />
      );

      const card = screen.getByRole("button");
      await user.click(card);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("handles keyboard activation with Enter key", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          onClick={handleClick}
        />
      );

      const card = screen.getByRole("button");
      card.focus();
      await user.keyboard("{Enter}");

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("handles keyboard activation with Space key", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          onClick={handleClick}
        />
      );

      const card = screen.getByRole("button");
      card.focus();
      await user.keyboard(" ");

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies clickable class when onClick is provided", () => {
      const { container } = render(
        <ProductCard
          title="Test"
          description="Test"
          onClick={vi.fn()}
        />
      );

      expect(container.firstChild instanceof Element && 
        container.firstChild.className.includes("nhs-product-card--clickable")).toBe(true);
    });

    it("applies clickable class when href is provided", () => {
      const { container } = render(
        <ProductCard
          title="Test"
          description="Test"
          href="/test"
        />
      );

      expect(container.firstChild instanceof Element && 
        container.firstChild.className.includes("nhs-product-card--clickable")).toBe(true);
    });

    it("makes card focusable when clickable", () => {
      render(
        <ProductCard
          title="Test"
          description="Test"
          onClick={vi.fn()}
        />
      );

      const card = screen.getByRole("button");
      expect(card.getAttribute("tabIndex")).toBe("0");
    });

    it("button onClick prevents card click propagation", async () => {
      const user = userEvent.setup();
      const cardClick = vi.fn();
      const buttonClick = vi.fn();

      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          onClick={cardClick}
          buttons={[
            { label: "Click Me", onClick: buttonClick },
          ]}
        />
      );

      const button = screen.getByRole("button", { name: "Click Me" });
      await user.click(button);

      expect(buttonClick).toHaveBeenCalledTimes(1);
      expect(cardClick).not.toHaveBeenCalled();
    });

    it("disabled button does not fire onClick", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          buttons={[
            { label: "Disabled", onClick: handleClick, disabled: true },
          ]}
        />
      );

      const button = screen.getByRole("button", { name: "Disabled" });
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("uses specified heading level", () => {
      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          headingLevel={2}
        />
      );

      const heading = screen.getByRole("heading", { level: 2, name: "Test Product" });
      expect(heading).toBeTruthy();
    });

    it("uses heading level 3 by default", () => {
      render(
        <ProductCard
          title="Test Product"
          description="Test description"
        />
      );

      const heading = screen.getByRole("heading", { level: 3, name: "Test Product" });
      expect(heading).toBeTruthy();
    });

    it("applies aria-label to button when provided", () => {
      render(
        <ProductCard
          title="Test Product"
          description="Test description"
          buttons={[
            { label: "Action", onClick: vi.fn(), ariaLabel: "Custom aria label" },
          ]}
        />
      );

      const button = screen.getByRole("button", { name: "Custom aria label" });
      expect(button).toBeTruthy();
    });

    it("has button role when clickable via onClick", () => {
      render(
        <ProductCard
          title="Test"
          description="Test"
          onClick={vi.fn()}
        />
      );

      expect(screen.getByRole("button")).toBeTruthy();
    });

    it("has button role when clickable via href", () => {
      render(
        <ProductCard
          title="Test"
          description="Test"
          href="/test"
        />
      );

      expect(screen.getByRole("button")).toBeTruthy();
    });

    it("SVG graphics are hidden from screen readers", () => {
      const { container } = render(
        <ProductCard
          title="Test"
          description="Test"
          image={{ type: "graphic", seed: 123 }}
        />
      );

      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("aria-hidden")).toBe("true");
    });
  });

  describe("Button Variants", () => {
    it("renders primary button variant", () => {
      render(
        <ProductCard
          title="Test"
          description="Test"
          buttons={[{ label: "Primary", variant: "primary", onClick: vi.fn() }]}
        />
      );

      const button = screen.getByRole("button", { name: "Primary" });
      expect(button.className).toContain("nhs-product-card__button--primary");
    });

    it("renders secondary button variant", () => {
      render(
        <ProductCard
          title="Test"
          description="Test"
          buttons={[{ label: "Secondary", variant: "secondary", onClick: vi.fn() }]}
        />
      );

      const button = screen.getByRole("button", { name: "Secondary" });
      expect(button.className).toContain("nhs-product-card__button--secondary");
    });

    it("renders tertiary button variant", () => {
      render(
        <ProductCard
          title="Test"
          description="Test"
          buttons={[{ label: "Tertiary", variant: "tertiary", onClick: vi.fn() }]}
        />
      );

      const button = screen.getByRole("button", { name: "Tertiary" });
      expect(button.className).toContain("nhs-product-card__button--tertiary");
    });

    it("applies disabled class to disabled buttons", () => {
      render(
        <ProductCard
          title="Test"
          description="Test"
          buttons={[{ label: "Disabled", disabled: true, onClick: vi.fn() }]}
        />
      );

      const button = screen.getByRole("button", { name: "Disabled" });
      expect(button.className).toContain("nhs-product-card__button--disabled");
      expect(button.hasAttribute("disabled")).toBe(true);
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      const { container } = render(
        <ProductCard
          title="Test"
          description="Test"
          className="custom-class"
        />
      );

      expect(container.firstChild instanceof Element && 
        container.firstChild.className.includes("custom-class")).toBe(true);
    });

    it("applies custom inline styles", () => {
      const { container } = render(
        <ProductCard
          title="Test"
          description="Test"
          style={{ backgroundColor: "red" }}
        />
      );

      const element = container.firstChild as HTMLElement;
      expect(element.style.backgroundColor).toBe("red");
    });
  });
});

