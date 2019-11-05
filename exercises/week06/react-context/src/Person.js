import React from 'react';
import {ewithProvider, withProvider} from './OurProvider';
import { withStatement } from '@babel/types';

const Person = props => {
  return (
    <div>
      {props.title}
    </div>
  )
}
export default withProvider(Peroson)