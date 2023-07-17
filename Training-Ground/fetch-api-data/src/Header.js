const Header = ({title}) =>{
    return(
        <header>
            <h1>{title}</h1>
        </header>
    );
}
Header.defaultProps = {
    title:"Start war loved moves"
}
export default Header

