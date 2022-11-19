import '../App.css'

function Logo({src, href, alt}: { src: string, href: string, alt: string }) {
    return (
        <a href={href} target="_blank">
            <img src={src} className="logo react" alt={alt} />
        </a>
    );
}

export default Logo