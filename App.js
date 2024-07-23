const $app = document.getElementById("app");

const AvatarFunction = params => {
    const src = `https://randomuser.me/portraits/women/1`;

    /* return h('img', {
        src: 'https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-estrella-captura-astronauta-lindo-icono-ciencia-tecnologia-aislado-plano_138676-7575.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=sph',
        alt: 'Avatar'
    }); */

    return <img src={src}></img>;
};

// render the react component to the DOM
ReactDOM.render(
    <div>
        <AvatarFunction></AvatarFunction>
    </div>,
    $app
);