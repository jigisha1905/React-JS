function customRender(reactelement,maincontainer){
    /*
    const domElement=document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    domElement.setAttribute('href',reactelement.props.href)
    domElement.setAttribute('target',reactelement.props.target)
    
// for one attribute it may create some problem

    maincontainer.appendChild(domElement)
    */

//using loops    
    const domElement=document.createElement(reactelement.type)
    domElement.innerHtML=reactelement.children
    
    for (const prop in reactelement.props) {
        if (prop === 'children')continue; 
        domElement.setAttribute(prop,reactelement.props[prop])
    }
    maincontainer.appendChild(domElement)
}


const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const maincontainer = document.querySelector('#root')

customRender(reactelement,maincontainer)


//ctrl+shift+i => for debugging on web