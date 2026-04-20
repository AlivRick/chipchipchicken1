# Design System Documentation: Kinetic Street Gourmet

## 1. Overview & Creative North Star: "The Kinetic Kitchen"
This design system moves away from the static, sterile grids of traditional fast-food apps and toward an editorial "Kinetic Kitchen" aesthetic. We are capturing the heat of the grill and the speed of the street. 

The **Creative North Star** is high-energy movement. We achieve this through intentional asymmetry, overlapping elements that mimic stacked food trays, and a high-contrast typography scale that feels "shouted" rather than whispered. By abandoning rigid borders in favor of tonal layering and glassmorphism, we create a digital environment that feels as fluid and vibrant as a bustling night market.

---

## 2. Colors & Sensory Palette
Our palette is engineered to stimulate the senses: the heat of the spice (`primary`), the crunch of the coating (`secondary`), and the freshness of the garnish (`tertiary`).

### The "No-Line" Rule
To maintain a premium, editorial feel, **1px solid borders are strictly prohibited** for sectioning or containment. Boundaries must be defined through:
- **Background Color Shifts:** Use `surface-container-low` for a section sitting on a `surface` background.
- **Tonal Transitions:** Define depth by placing a `surface-container-lowest` card against a `surface-container` background.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of "serving trays." 
- **Base Layer:** `surface` (#faf5fb).
- **Secondary Sections:** `surface-container-low` (#f4eff5).
- **Floating Interactive Elements:** `surface-container-lowest` (#ffffff) to create a natural "lift."
- **In-Set Details:** Use `surface-variant` (#e0dbe3) for recessed information like search bars or inactive states.

### The "Glass & Gradient" Rule
Flat color is the enemy of premium design. 
- **Signature Gradients:** For Hero CTAs and primary action areas, use a subtle linear gradient from `primary` (#af2700) to `primary_container` (#ff7856) at a 135-degree angle. This adds "soul" and depth.
- **Glassmorphism:** Use semi-transparent `surface_container_highest` with a `backdrop-blur` (16px–24px) for top navigation bars or floating shopping carts. This allows the vibrant food photography to "bleed" through the UI.

---

## 3. Typography: The Editorial Voice
We use typography to create rhythm. The contrast between the bold, geometric **Plus Jakarta Sans** and the functional **Work Sans** mimics the balance of a signature dish.

- **Display (Plus Jakarta Sans):** Used for "Brand Moments"—product names, major discounts, and hero headers. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create an aggressive, modern street-style look.
- **Headlines (Plus Jakarta Sans):** Use `headline-lg` (2rem) for menu categories. These should often be paired with an asymmetrical layout (e.g., left-aligned text with a photo overlapping the right margin).
- **Body (Work Sans):** Use `body-lg` (1rem) for descriptions. The high x-height of Work Sans ensures legibility against complex, high-contrast backgrounds.
- **Labels (Work Sans):** Use `label-md` (0.75rem) in All Caps for metadata like calorie counts or "Spice Levels" to provide an authoritative, industrial feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-standard." We use **Ambient Depth.**

- **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a soft, sophisticated lift without a single pixel of shadow.
- **Ambient Shadows:** When a float is required (e.g., a "Add to Cart" FAB), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(175, 39, 0, 0.08);`. Note the color—it is a tinted version of `primary`, not black.
- **The "Ghost Border" Fallback:** If a container absolutely requires a boundary (e.g., a text input), use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Buttons
- **Primary:** Gradient from `primary` to `primary_container`. Roundedness: `full`. Text: `on_primary`. Use `title-md` for the label.
- **Secondary:** Solid `secondary_container` with `on_secondary_container` text. This is for "Modify" or "View Details" actions.
- **Tertiary:** No background. Use `primary` text with a `label-md` weight.

### Cards & Menu Items
- **The Rule:** No dividers. Use `xl` (1.5rem) roundedness.
- **Layout:** Use `surface-container-low` as the card base. The food image should "break the box"—either bleeding off the top edge or overlapping the card boundary to create a sense of abundance.
- **Spacing:** Use vertical white space (32px or 48px) rather than lines to separate menu items.

### Chips (Flavor Tags)
- Use `tertiary_container` for "Fresh" or "Healthy" tags.
- Use `primary_container` for "Spicy" or "Hot" tags.
- All chips use `sm` (0.25rem) roundedness to contrast with the `full` roundedness of buttons, signaling a different functional role.

### Input Fields
- Background: `surface_variant` at 50% opacity.
- Border: "Ghost Border" (outline-variant at 10%).
- Focus State: Transition to a 2px `secondary` bottom-border only, creating a high-end "underline" effect rather than a full box.

---

## 6. Do’s and Don’ts

### Do:
- **Do** overlap images. If a chicken wing doesn't slightly peek over a text container, it’s not "Kinetic" enough.
- **Do** use `primary` and `secondary` color tokens as background washes for entire sections to break up the "white app" feel.
- **Do** utilize the `xl` (1.5rem) and `full` corner radius to mimic the rounded, approachable nature of street food containers.

### Don’t:
- **Don't** use 1px dividers. If you feel the need for a line, use a 4px `surface-container-high` gap instead.
- **Don't** use pure black (#000000) for text. Always use `on_surface` (#2f2e32) for a softer, more editorial contrast.
- **Don't** center-align everything. Use left-aligned "Editorial" grids with large margins to let the photography breathe.