import { Link } from 'react-router-dom';
import errorPageImage from '../../assets/error.svg';
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {

    useTitle('404 - error')

    return (
        <div className="text-center">
            <img src={errorPageImage} className="img-fluid mb-4 mx-auto" />
            <h1 className="mb-4">Page Not Found</h1>
            <p>The page you are looking for does not exist or has been moved.</p>
            <Link to="/" className="btn border-0 bg-[#612500f1] mt-4">homepage</Link>
        </div>
    );
};

export default ErrorPage;