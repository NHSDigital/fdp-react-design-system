import { describe, it, expect, vi } from "vitest";
import { renderToString } from "react-dom/server";
import { ProductCardLayoutEnum, ProductCardButtonVariantEnum, VectorGraphicKindEnum, VectorGraphicShadowEnum } from ".";
import { ProductCard } from "./ProductCard";

describe("ProductCard - SSR Tests", () => {
  it("renders title and description server-side", () => {
    const html = renderToString(
      <ProductCard
        title="SSR Test Product"
        description="Server-rendered description"
      />
    );

    expect(html).toContain("SSR Test Product");
    expect(html).toContain("Server-rendered description");
  });

  it("renders badge in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        badge="New"
      />
    );

    expect(html).toContain("New");
    expect(html).toContain("nhs-product-card__badge");
  });

  it("renders button links in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        buttons={[
          { label: "Learn More", href: "/learn", variant: ProductCardButtonVariantEnum.Primary },
          { label: "Contact", href: "/contact", variant: ProductCardButtonVariantEnum.Secondary },
        ]}
      />
    );

    expect(html).toContain("Learn More");
    expect(html).toContain("Contact");
    expect(html).toContain('href="/learn"');
    expect(html).toContain('href="/contact"');
  });

  it("renders buttons with onClick handlers in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        buttons={[
          { label: "Click Me", onClick: vi.fn() },
        ]}
      />
    );

    expect(html).toContain("Click Me");
    expect(html).toContain('<button');
  });

  it("renders photo image in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        image={{
          type: "photo",
          src: "/image.jpg",
          alt: "Product image",
        }}
      />
    );

    expect(html).toContain('/image.jpg');
    expect(html).toContain('alt="Product image"');
  });

  it("renders vector graphic in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        image={{
          type: "graphic",
          seed: 12345,
        }}
      />
    );

    expect(html).toContain('<svg');
    expect(html).toContain('nhs-product-card__graphic');
    expect(html).toContain('aria-hidden="true"');
  });

  it("renders custom vector shapes in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        image={{
          type: "graphic",
          shapes: [
            { kind: VectorGraphicKindEnum.Circle, x: 50, y: 50, size: 80, gradient: "blue" },
            { kind: VectorGraphicKindEnum.Rect, x: 30, y: 30, width: 60, height: 40, gradient: "aqua-green" },
            { kind: VectorGraphicKindEnum.Hex, x: 70, y: 70, size: 60, gradient: "purple" },
          ],
        }}
      />
    );

    expect(html).toContain('<circle');
    expect(html).toContain('<rect');
    expect(html).toContain('<polygon');
  });

  it("applies vertical layout class in SSR", () => {
    const html = renderToString(
      <ProductCard title="Test" description="Test" />
    );

    expect(html).toContain('nhs-product-card--vertical');
  });

  it("applies horizontal layout class in SSR", () => {
    const html = renderToString(
      <ProductCard title="Test" description="Test" layout={ProductCardLayoutEnum.Horizontal} />
    );

    expect(html).toContain('nhs-product-card--horizontal');
  });

  it("accepts 'landscape' alias for horizontal in SSR", () => {
    const html = renderToString(
      <ProductCard title="Test" description="Test" layout={ProductCardLayoutEnum.Landscape} />
    );

    expect(html).toContain('nhs-product-card--horizontal');
  });

  it("accepts 'portrait' alias for vertical in SSR", () => {
    const html = renderToString(
      <ProductCard title="Test" description="Test" layout={ProductCardLayoutEnum.Portrait} />
    );

    expect(html).toContain('nhs-product-card--vertical');
  });

  it("applies theme class in SSR", () => {
    const html = renderToString(
      <ProductCard title="Test" description="Test" theme="aqua-green" />
    );

    expect(html).toContain('nhs-product-card--theme-aqua-green');
  });

  it("applies elevated class in SSR by default", () => {
    const html = renderToString(
      <ProductCard title="Test" description="Test" />
    );

    expect(html).toContain('nhs-product-card--elevated');
  });

  it("does not apply elevated class when disabled in SSR", () => {
    const html = renderToString(
      <ProductCard title="Test" description="Test" elevated={false} />
    );

    expect(html).not.toContain('nhs-product-card--elevated');
  });

  it("applies clickable class for onClick in SSR", () => {
    const html = renderToString(
      <ProductCard title="Test" description="Test" onClick={vi.fn()} />
    );

    expect(html).toContain('nhs-product-card--clickable');
    expect(html).toContain('role="button"');
    expect(html).toContain('tabindex="0"');
  });

  it("applies clickable class for href in SSR", () => {
    const html = renderToString(
      <ProductCard title="Test" description="Test" href="/test" />
    );

    expect(html).toContain('nhs-product-card--clickable');
    expect(html).toContain('role="button"');
  });

  it("renders with correct heading level in SSR", () => {
    const html2 = renderToString(
      <ProductCard title="Heading 2" description="Test" headingLevel={2} />
    );
    expect(html2).toContain('<h2');

    const html3 = renderToString(
      <ProductCard title="Heading 3" description="Test" headingLevel={3} />
    );
    expect(html3).toContain('<h3');
  });

  it("renders footer content in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        footer={<div data-testid="footer-content">Custom Footer</div>}
      />
    );

    expect(html).toContain('Custom Footer');
    expect(html).toContain('nhs-product-card__footer');
  });

  it("renders button variants correctly in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        buttons={[
          { label: "Primary", variant: ProductCardButtonVariantEnum.Primary, href: "#" },
          { label: "Secondary", variant: ProductCardButtonVariantEnum.Secondary, href: "#" },
          { label: "Tertiary", variant: ProductCardButtonVariantEnum.Tertiary, href: "#" },
        ]}
      />
    );

    expect(html).toContain('nhs-product-card__button--primary');
    expect(html).toContain('nhs-product-card__button--secondary');
    expect(html).toContain('nhs-product-card__button--tertiary');
  });

  it("renders disabled buttons in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        buttons={[
          { label: "Disabled", onClick: vi.fn(), disabled: true },
        ]}
      />
    );

    expect(html).toContain('nhs-product-card__button--disabled');
    expect(html).toContain('disabled=""');
  });

  it("renders custom className in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        className="custom-class-ssr"
      />
    );

    expect(html).toContain('custom-class-ssr');
  });

  it("renders inline styles in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        style={{ backgroundColor: "rgb(255, 0, 0)" }}
      />
    );

    expect(html).toContain('background-color:rgb(255, 0, 0)');
  });

  it("renders gradient definitions in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        image={{ type: "graphic", seed: 123 }}
      />
    );

    expect(html).toContain('pc-grad-aqua-green');
    expect(html).toContain('pc-grad-purple');
    expect(html).toContain('pc-grad-blue');
    expect(html).toContain('linearGradient');
  });

  it("renders shadow filters in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        image={{
          type: "graphic",
          shapes: [
            { kind: VectorGraphicKindEnum.Circle, x: 50, y: 50, size: 80, gradient: "blue", shadow: VectorGraphicShadowEnum.Soft },
          ],
        }}
      />
    );

    expect(html).toContain('pc-shadow-soft');
    expect(html).toContain('<filter');
  });

  it("applies aria-label to buttons in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        buttons={[
          { label: "Action", onClick: vi.fn(), ariaLabel: "Custom ARIA label" },
        ]}
      />
    );

    expect(html).toContain('aria-label="Custom ARIA label"');
  });

  it("renders all theme variants in SSR", () => {
    const themes: Array<"aqua-green" | "purple" | "blue" | "grey" | "azure"> = [
      "aqua-green",
      "purple",
      "blue",
      "grey",
      "azure",
    ];

    themes.forEach((theme) => {
      const html = renderToString(
        <ProductCard title="Test" description="Test" theme={theme} />
      );

      expect(html).toContain(`nhs-product-card--theme-${theme}`);
    });
  });

  it("handles image aspect ratio in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Test"
        description="Test"
        image={{ type: "graphic", seed: 123 }}
        imageAspectRatio={2}
      />
    );

    expect(html).toContain('aspect-ratio:2');
  });

  it("renders without image in SSR", () => {
    const html = renderToString(
      <ProductCard
        title="Text Only Card"
        description="No image provided"
      />
    );

    expect(html).toContain('Text Only Card');
    expect(html).toContain('No image provided');
    expect(html).not.toContain('<img');
    expect(html).not.toContain('<svg');
  });
});
