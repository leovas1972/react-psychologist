
// import github from './../../img/icons/gitHub-black.svg' 

const BtnGitHub = ({href, src, title}) => {
    return (
        <a href={href} className='btn-outline'>
            <img src={src} alt='' />
            {/* GitHub repo */}
            {title}
        </a>
    );
};

export default BtnGitHub;
