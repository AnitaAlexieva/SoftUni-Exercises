const rootDomElement = document.getElementById('root')

const rootReactElement = ReactDOM.createRoot(rootDomElement)


// Functional Component is function that returns React Element!!!

function Header(props){
    const headerReactElement = React.createElement('h1', null, props.title)
    const subheaderReactElement = React.createElement('h2', {className:'sub-header'}, 'Components are awesome!')

    //const reactFragment = React.createElement(React.Fragment, {}, headerReactElement)
    const divReactElement = React.createElement('div', null, headerReactElement, subheaderReactElement)

    return divReactElement
}

function Body(){
    return React.createElement(
        'main',
        null,
        React.createElement('p', null, 'Lorem Ipsum DOloor..')
    )
}

function Main(){
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header, {title:'React Elements', sutbTtile:'Hello Wolrd'}),
        React.createElement(Body)
    )
}

rootReactElement.render(React.createElement(Main))