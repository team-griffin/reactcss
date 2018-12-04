---
id: focus
title: Focus
---

Use the focus wrapper that is included with reactCSS to add focus styles to a component. Wrap the export with the focus method and create a class in the styles object called focus:

```
import reactCSS, { focus } from 'reactcss'

class Button extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        button: {
          background: '#999',
        },
      },
      'focus': {
        button: {
          background: '#333',
        },
      },
    }, this.props)

    return (
      <div style={ styles.button }>
        { props.label }
      </div>
    )
  }
}

export default focus(Button)
```
