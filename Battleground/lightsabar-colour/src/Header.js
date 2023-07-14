const Header = ({title}) =>{
    return(
        <header>
            <h1>{title}</h1>
        </header>
    );
}
Header.defaultProps = {
    title:"Pick your Color"
}
export default Header

