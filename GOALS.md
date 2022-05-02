# Segmented Button

Segmented Buttons allow users to select 1 item at a time from 2 to 4 options.
Selecting one option automatically turns off the last selection made.
Segmented Buttons are mutually exclusive.

## Design Notes

- naming of “option” -> in design comps, this is called “segment”
- what is a display mode? vs. separate view

## Questions

### When comps use different terms of documentation, which is the source of truth?

Documentation should be the source of the truth that drives the Figma implementation and the Web Components implementation.

### What kind of content does this provide an interface to?

- Plain Text? Yes.
- Rich Text? No / Maybe. Not explicitly prohibited. Also not defined.
- Form Controls? No.

### Can more than one button be selected?

No. It is “One item at a time”.

### What is ‘Help Text’?

The Help Text can be ignored. It will be omitted in upcoming releases.

> **Help Text** shall be left-aligned under the relevant Segmented Button, regardless of location of the label.

### Can labels use multiple words?

Yes. See the comps.

### What is the permitted content?

Permitted content is (Phrasing content)?

- [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content)

- [prior art example 1](https://www.w3.org/TR/wai-aria-practices-1.1/examples/radio/radio-1/radio-1.html)
- [prior art example 1](https://www.w3.org/TR/wai-aria-practices-1.1/examples/radio/radio-2/radio-2.html)

### What is the DOM interface?

Each segment has a **value** and a **label**.

### What is the most typical usage?

---

## Markup

```html
<script>
  el.getSelected() = "<node>";
</script>
<rux-segmented-button selected="segment1">
  <rux-segmented-button-segment id="segment1" selected>
    One
  </rux-segmented-button-segment>
  <rux-segmented-button-segment>Two</rux-segmented-button-segment>
  <rux-segmented-button-segment>Three</rux-segmented-button-segment>
</rux-segmented-button>
```

```html
<rux-segmented-button>
  <rux-segmented-button-segment value="state-1"
    >Active</rux-segmented-button-segment
  >
  <rux-segmented-button-segment value="state-2"
    >Active</rux-segmented-button-segment
  >
</rux-segmented-button>
```

```html
<rux-segmented-button>
  <rux-segmented-button-segment selected>One</rux-segmented-button-segment>
  <rux-segmented-button-segment>Two</rux-segmented-button-segment>
  <rux-segmented-button-segment>Three</rux-segmented-button-segment>
</rux-segmented-button>
```

```html
<rux-segmented-button-segment>
  <template shadowroot="open">
    <span part="content segmented-button-segment"></span>
  </template>
</rux-segmented-button-segment>
```

```css
rux-segmented-button-segment::part(content) {
  /* custom properties, styles */
}

rux-segmented-button-segment[selected]::part(content) {
  /* custom properties, styles */
}
```

```css
::part(segmented-button) {
  /* custom properties, styles */
}

::part(segmented-button-segment --selected) {
  /* custom properties, styles */
}
```

## Rules

TBD.

## Segmented Button Container

- One segment must be selected.
- A selected segment is known by its selected state.

### Segmented Button Segment

- It should include a `value`.
- If no `value` is provided, the `value` is generated from its text content.
  - A generated `value` is the trimmed LightDOM text content of the segment element.
  - Implementation detail — `element.textContent.trim()`.
