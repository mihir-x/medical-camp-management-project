import PropTypes from 'prop-types'

const Container = ({children}) => {
    return (
        <div className=" max-w-screen-lg mx-auto my-5 md:my-8 lg:my-16">
            {children}
        </div>
    );
};

export default Container;

Container.propTypes = {
    children: PropTypes.node
}