# @astrouxds/astrouxds

## 6.6.1

### Patch Changes

- e4622f8a: Removed the fix height on the dialog element in rux-modal that was preventing a long modal message. Added a new 'dialog' shadow part attatched to the rux-modal's native dialog element.

## 6.6.0

### Minor Changes

#### Timeline

- Added `timezone` property

### Patch Changes

#### Segmented Button

- fixed issue where the bottom border was being clipped when inside a container element.

#### Slider

- hides label if none is present

#### Form Elements

- Removed extra margin on form elements (checkbox, radio, slider, select, input, textarea) that didn't have a label.

## 6.5.1

### Patch Changes

#### Tag

- Added shadows to align with design.

#### Table

- Updated selected row styling to align with design.

#### Tree / Tree Node

- Updated styling to align with design.
- Added hover state.

## 6.5.0

> NOTE: This release renames many of our internal private CSS Custom Properties (--color-background). If you are using these to build your own UIs, this may be a breaking change for you.

### Minor Changes

#### Select

- Added `size` property.

#### Option

- Added a `disabled` property.

#### Input

- Added `date` and `datetime-local` types.
- Added a `prefix` and `suffix` named slots.

#### Tag

- Created a new Tag component.

### Patch Changes

- Updated components to use the new beta design tokens

#### Button

- Moved `width` attribute out of shadow dom, can now be styled without CSS parts.

#### Notification

- Watch closeAfter to close when updated

#### Slider

- Updated to accept float values.

## 6.4.0

### Minor Changes

- Added text underline to link hover states globally.

#### Select

- Added `multiple` support

#### Timeline [Beta]

- New beta component Timeline is now available

#### Slider

- Added `axis-labels` and `ticks-only` properties, providing tick mark and label support.

#### Textarea

- Added a `size` property. Removed unused `small` property. (This property had no effect so this is not a breaking change)

### Patch Changes

#### Switch

- Updated thumb hover state color to align with design.

#### Clock

- Updated the clock labels to align with design.

#### Tabs

- Updated to align with design

## 6.3.0

### Minor Changes

#### Notification

- Added a `small` prop allowing for a smaller variant.

#### Segmented Button

- Added `size` prop which accepts small, medium or large.

### Patch Changes

#### Notification

- Updated the padding around message and icon to match design.

#### Segmented Button

- Updated hover state styling to match design.

#### Push Button

- Added hover state styling to match design.

#### Monitoring Icon

- Updated the min height and width to match design.

#### Status

- Changed the overall size to be 12px to match design.

## 6.2.0

### Minor Changes

#### Button

- Adds a borderless prop to rux-button, enabling borderless styling.

#### Checkbox Group/Radio Group/Select/Textarea

- Adds required props and functionality to checkbox group, radio group, select and textarea.

### Patch Changes

#### Clock

- Updated margin-left on AOS from 16px to 17px.

#### Classification Marking

- Updated the overall height of classification-tags to match Figma designs. Overall height has gone from 20px -> 22px

#### Button

- Secondary button now has the correct text color on hover.

## 6.1.0

### Minor Changes

#### Icon

- Added new CSS Shadow Part `icon`
- Moved the `icon` shadow part in `rux-icon` to be on the SVG element.

#### Global Status Bar

- Added new CSS Shadow Parts: `icon`, `container`, `username`, and `app-state`

#### Pop Up Menu

- Added new CSS Shadow Part `container`

#### Clock

- Added new CSS Shadow Parts `date`, `date-label`, `time`, `time-label`, `aos`, `aos-label`, `los`, `los-label`.
- Clock now displays the julien date as always 3 digits

#### Button Group

- Added new CSS Shadow Part `container`

#### Button

- Added new CSS Shadow Part `container`

#### Monitoring Progress Icon

- Added new CSS Shadow Parts: `icon`, `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`, `container`, `icon-group`, `progress-display`, `radial-progress`, `status-icon`.

#### Monitoring Icon

- Added new CSS Shadow Parts: `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`.

#### Input

- Added `readonly`, `spellcheck`, and `autocomplete` attributes.
- Added new CSS Shadow Parts: `input`, `form-field`, `error-text`, and `help-text`.

#### Checkbox Group

- Added new CSS Shadow Parts: `error-text` and `help-text`.

#### Radio Group

- Added new CSS Shadow Parts: `error-text` and `help-text`.

#### Slider

- Added new CSS Shadow Parts: `input`, `error-text` and `help-text`.

#### Select

- Added new CSS Shadow Parts: `label`, `select`, `error-text` and `help-text`.

#### Textarea

- Added new CSS Shadow Parts: `textarea`, `error-text` and `help-text`.

#### Push Button

- Added new CSS Shadow Parts: `label` and `icon`.

#### Checkbox

- Added new CSS Shadow Parts: `form-field` and `label`.

#### Radio

- Added new CSS Shadow Parts: `form-field` and `label`.

#### Progress

- Added new CSS Shadow Parts: `progress` and `output`.

#### Modal

- Added new CSS Shadow Parts: `confirm-button` and `deny-button`.

#### Segmented Button

- Added new CSS Shadow Part `label`.

#### Switch

- Added new CSS Shadow Part `switch`. The pseudo selectors ::before select the track, ::after selects the button.

#### Menu Item

- Added new CSS Shadow Part `container`.

#### Menu Item Divider

- Added new CSS Shadow Part `container`.

#### Classification Marking

- Added new CSS Shadow Parts: `footer`, `tag`, and `header`.
- Deprecated CSS Shadow Part `footer-header`. Use `footer` instead.

### Patch Changes

- Fixes issue [#121](https://github.com/RocketCommunicationsInc/astro/issues/121) where boolean attributes in React were not behaving as intended.
