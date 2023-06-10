# CORE-UI

### Brickeye React-Native Component Library

- This package houses all base components and themes.

<br />

### Example Usage

```jsx
import {Card, spacing, color} from 'core-ui';

const NewFeature = ({children, onPress, isDisabled}) => {
  return (
    <Card
      type={'basic'}
      onPress={onPress}
      isDisabled={isDisabled}
      backgroundColor={color.background.white}
      marginTop={spacing['s-4']}
      paddingRight={spacing['s-16']}>
      {children}
    </Card>
  );
};
```

<br >

### Testing

- To run all tests (component and snapshots):

```js
yarn test
```

- When getting snapshot errors, make sure to check the component changes if it was intended. If so, run:

```
yarn test:update-snapshot
```
