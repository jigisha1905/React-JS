function customRender(reactelement,maincontainer){
    const domElement=document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    domElement.setAttribute('href',reactelement.prop.href)
    domElement.setAttribute('target',reactelement.prop.target)

    maincontainer.appendChild(domElement)
}


const reactelement={
    type:'a',
    prop:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const maincontainer = document.querySelector('#root')

customRender(reactelement,maincontainer)