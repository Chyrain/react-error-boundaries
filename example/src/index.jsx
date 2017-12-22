import React from 'react'
import ReactDOM from 'react-dom'

import FilterableProductTable, { PRODUCTS } from './FilterableProductTable'
// import ErrorBoundary from 'react-error-boundaries'

const App = () => {
    return (
    <div>
        <FilterableProductTable products={PRODUCTS} />
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));