import React from 'react'
import ReactDOM from 'react-dom'

import FilterableProductTable, { PRODUCTS } from './FilterableProductTable'
import ErrorBoundary from '../../dist/commonjs'

const App = () => {
    return (
    <ErrorBoundary onError={onError}>
        <FilterableProductTable onError={onError} products={PRODUCTS} />
    </ErrorBoundary>
    );
}

function onError(error, errorInfo, props) {
    console.log('App.onError:', error, errorInfo, props);
}

ReactDOM.render(<App />, document.getElementById('root'));