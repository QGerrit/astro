# rux-indeterminate-progress



<!-- Auto Generated Below -->


## Shadow Parts

| Part                  | Description                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"animated-spinner"`  | The second div in the heirarchy which is responsible for the spinning conic-gradient and the gap between the spinner and the containers's border. |
| `"container"`         | The outermost div encasing rux-indeterminate-progress which is responsible for the overall size and the outermost border.                         |
| `"inner-circle"`      | The fourth div in the heirarchy which controls the inner-most circle.                                                                             |
| `"inner-spinner-gap"` | The third div in the heirarchy which controls the gap between the animated-spinner and the inner-circle's border.                                 |


## CSS Custom Properties

| Name     | Description                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------- |
| `--size` | Used to determine the overall size of rux-indeterminate-progress, and used in multiple CSS calculations. |


## Dependencies

### Used by

 - [rux-progress](../rux-progress)

### Graph
```mermaid
graph TD;
  rux-progress --> rux-indeterminate-progress
  style rux-indeterminate-progress fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*