import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "FDP/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modern product card component following FDP brand guidelines with vector graphics, gradients, and flexible content options. Uses the same gradient system as PatternBanner.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Product title",
    },
    description: {
      control: "text",
      description: "Product description",
    },
    theme: {
      control: "select",
      options: ["aqua-green", "purple", "blue", "grey", "azure"],
      description: "Theme color scheme",
    },
    layout: {
      control: "radio",
      options: ["vertical", "horizontal"],
      description: "Card layout orientation",
    },
    elevated: {
      control: "boolean",
      description: "Enable elevation/shadow effect",
    },
    badge: {
      control: "text",
      description: "Optional badge text",
    },
    headingLevel: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description: "Heading level for accessibility",
    },
    imageAspectRatio: {
      control: { type: "range", min: 0.5, max: 3, step: 0.1 },
      description: "Image area aspect ratio (width/height)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

/**
 * Default vertical card with auto-generated vector graphic
 */
export const Default: Story = {
  args: {
    title: "Digital Health Platform",
    description:
      "A comprehensive platform for managing patient data, appointments, and healthcare workflows with real-time analytics.",
    theme: "blue",
    image: {
      type: "graphic",
      seed: 12345,
    },
    buttons: [
      {
        label: "Learn More",
        href: "#",
        variant: "primary",
      },
    ],
  },
};

/**
 * Card with multiple buttons
 */
export const WithMultipleButtons: Story = {
  args: {
    title: "Patient Portal",
    description:
      "Empowering patients with secure access to their health records, appointment scheduling, and direct communication with healthcare providers.",
    theme: "aqua-green",
    image: {
      type: "graphic",
      seed: 67890,
      theme: "aqua-green",
    },
    buttons: [
      {
        label: "Get Started",
        href: "#",
        variant: "primary",
      },
      {
        label: "View Demo",
        href: "#",
        variant: "secondary",
      },
    ],
  },
};

/**
 * Horizontal layout card
 */
export const HorizontalLayout: Story = {
  args: {
    title: "Clinical Decision Support",
    description:
      "AI-powered tools to assist clinicians in making evidence-based decisions at the point of care.",
    theme: "purple",
    layout: "horizontal",
    image: {
      type: "graphic",
      seed: 11111,
      theme: "purple",
    },
    buttons: [
      {
        label: "Explore Features",
        href: "#",
        variant: "primary",
      },
    ],
  },
  parameters: {
    layout: "padded",
  },
};

/**
 * Card with badge
 */
export const WithBadge: Story = {
  args: {
    title: "Telehealth Solution",
    description:
      "Connect with patients remotely through secure video consultations and digital health monitoring.",
    theme: "azure",
    badge: "New",
    image: {
      type: "graphic",
      seed: 22222,
      theme: "azure",
    },
    buttons: [
      {
        label: "Start Free Trial",
        href: "#",
        variant: "primary",
      },
    ],
  },
};

/**
 * Card with photo image
 */
export const WithPhoto: Story = {
  args: {
    title: "Healthcare Analytics",
    description:
      "Transform data into actionable insights with advanced analytics and visualization tools.",
    theme: "blue",
    image: {
      type: "photo",
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      alt: "Healthcare analytics dashboard",
    },
    buttons: [
      {
        label: "Request Demo",
        href: "#",
        variant: "primary",
      },
      {
        label: "Learn More",
        href: "#",
        variant: "tertiary",
      },
    ],
  },
};

/**
 * Clickable card (entire card is clickable)
 */
export const ClickableCard: Story = {
  args: {
    title: "Medication Management",
    description:
      "Streamline prescription workflows and improve medication safety with integrated dispensing systems.",
    theme: "aqua-green",
    href: "#",
    image: {
      type: "graphic",
      seed: 33333,
      theme: "aqua-green",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "The entire card is clickable when an href is provided without buttons.",
      },
    },
  },
};

/**
 * Card with custom footer
 */
export const WithFooter: Story = {
  args: {
    title: "Appointment Scheduling",
    description:
      "Intelligent scheduling system that optimizes clinic capacity and reduces patient wait times.",
    theme: "grey",
    image: {
      type: "graphic",
      seed: 44444,
      theme: "grey",
    },
    buttons: [
      {
        label: "View Details",
        href: "#",
        variant: "secondary",
      },
    ],
    footer: (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>★★★★★ 4.8/5</span>
        <span>1,200+ installs</span>
      </div>
    ),
  },
};

/**
 * Custom vector shapes
 */
export const CustomVectorShapes: Story = {
  args: {
    title: "Custom Design",
    description:
      "Fully customizable vector graphics allow you to create unique visual identities for each product.",
    theme: "purple",
    image: {
      type: "graphic",
      shapes: [
        {
          kind: "circle",
          x: 30,
          y: 40,
          size: 80,
          gradient: "purple",
          shadow: "soft",
        },
        {
          kind: "hex",
          x: 70,
          y: 30,
          size: 60,
          gradient: "azure",
          rotate: 30,
          shadow: "soft",
        },
        {
          kind: "rect",
          x: 50,
          y: 70,
          width: 100,
          height: 40,
          gradient: "aqua-green",
          rotate: 15,
          shadow: "none",
        },
      ],
    },
    buttons: [
      {
        label: "Customize",
        href: "#",
        variant: "primary",
      },
    ],
  },
};

/**
 * All themes showcase
 */
export const AllThemes: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", padding: "24px" }}>
      {(["aqua-green", "purple", "blue", "grey", "azure"] as const).map((theme, idx) => (
        <ProductCard
          key={theme}
          title={`${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme`}
          description="Example card showcasing the theme colors and gradients from the FDP brand guidelines."
          theme={theme}
          image={{
            type: "graphic",
            seed: 10000 + idx * 1000,
            theme: theme,
          }}
          buttons={[
            {
              label: "Explore",
              href: "#",
              variant: "primary",
            },
          ]}
        />
      ))}
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "All available theme color schemes in the FDP brand palette.",
      },
    },
  },
};

/**
 * No image card (text only)
 */
export const NoImage: Story = {
  args: {
    title: "Integration Services",
    description:
      "Seamlessly connect your existing systems with our APIs and middleware solutions for comprehensive healthcare interoperability.",
    theme: "blue",
    buttons: [
      {
        label: "View Documentation",
        href: "#",
        variant: "primary",
      },
      {
        label: "Contact Sales",
        href: "#",
        variant: "secondary",
      },
    ],
    footer: "24/7 technical support included",
  },
};

/**
 * Disabled buttons example
 */
export const DisabledButtons: Story = {
  args: {
    title: "Coming Soon",
    description:
      "This product is currently in development. Sign up to be notified when it becomes available.",
    theme: "grey",
    badge: "Beta",
    image: {
      type: "graphic",
      seed: 99999,
      theme: "grey",
    },
    buttons: [
      {
        label: "Get Early Access",
        variant: "primary",
        disabled: true,
      },
      {
        label: "Join Waitlist",
        href: "#",
        variant: "secondary",
      },
    ],
  },
};

/**
 * Wide aspect ratio image
 */
export const WideAspectRatio: Story = {
  args: {
    title: "Population Health Analytics",
    description:
      "Monitor population health trends and identify at-risk patient cohorts with advanced data visualization.",
    theme: "aqua-green",
    imageAspectRatio: 2.5,
    image: {
      type: "graphic",
      seed: 55555,
      theme: "aqua-green",
    },
    buttons: [
      {
        label: "View Dashboard",
        href: "#",
        variant: "primary",
      },
    ],
  },
};

/**
 * Compact square aspect ratio
 */
export const SquareAspectRatio: Story = {
  args: {
    title: "Mobile App",
    description:
      "Access healthcare services on the go with our native iOS and Android applications.",
    theme: "purple",
    imageAspectRatio: 1,
    image: {
      type: "graphic",
      seed: 66666,
      theme: "purple",
    },
    buttons: [
      {
        label: "Download",
        href: "#",
        variant: "primary",
      },
    ],
  },
};
