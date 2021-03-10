### Match:

```
const Deposit = ({ match }) => {
  const operator = match.params.operator;
  // ...
```

### Input-mask:

```
import MaskedInput from 'react-text-mask';

<MaskedInput
  className='input'
  {...field}
  type='text'
  placeholder='+7 (956) 314-15-92'
  mask={['+', /7/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/,]}
/>

const phoneRegExp = /^\+?[78]\s?[-\\(]?\d{3}\)?\s?-?\d{3}-?\d{2}-?\d{2}$/; // +7 (953) 092-93-17
```

### Heroku:

https://still-sea-65374.herokuapp.com/deposit/Megafon
