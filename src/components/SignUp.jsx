import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../store/authThunks';

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) return 'Name is required';
        if (!formData.email.trim()) return 'Email is required';
        if (!formData.password) return 'Password is required';
        if (formData.password.length < 8) return 'Password must be at least 8 characters';
        if (formData.password !== formData.confirmPassword) return 'Passwords do not match';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validate form
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        try {
            await dispatch(signupUser({
                email: formData.email,
                password: formData.password,
                name: formData.name
            })).unwrap();
            
            navigate('/');
        } catch (error) {
            setError(error.message || 'Something went wrong during signup');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full ">
                <div>
                    <h2 className="-mt-36 text-center text-3xl font-extrabold text-white">
                        Create your account
                    </h2>
                </div>
                
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
                    
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-black-nav border border-fbor placeholder-pgray text-pgray rounded-t-md focus:outline-none focus:ring-[#A30000] focus:border-[#A30000] focus:z-10 sm:text-sm"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 bg bg-black-nav border border-fbor placeholder-pgray text-pgray focus:outline-none focus:ring-[#A30000] focus:border-[#A30000] focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-black-nav border border-fbor placeholder-pgray text-pgray focus:outline-none focus:ring-[#A30000] focus:border-[#A30000] focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-black-nav border border-fbor placeholder-pgray text-pgray rounded-b-md focus:outline-none focus:ring-[#A30000] focus:border-[#A30000] focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-butred hover:bg-[#A30000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A30000] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Creating account...' : 'Sign up'}
                        </button>
                    </div>

                    <div className="text-sm text-center">
                        <p className="text-pgray">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-butred hover:text-[#A30000]">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
