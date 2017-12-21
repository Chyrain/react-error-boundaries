import React from 'react'
import ReactDOM from 'react-dom'

import FilterableProductTable, { PRODUCTS } from './FilterableProductTable'
import ErrorBoundary from '../src/ErrorHandler'

const App = () => {
    return (
    <ErrorBoundary>
        <FilterableProductTable products={PRODUCTS} />
    </ErrorBoundary>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));