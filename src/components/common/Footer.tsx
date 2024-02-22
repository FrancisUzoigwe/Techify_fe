import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm">Simplify your learning journey. Curated resources, less time, more knowledge.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">Ajeromi-Ifelodun Counsel, Lagos State, Nigeria</p>
                        <p className="text-sm">kossyuzoigwe@gmail.com</p>
                        <p className="text-sm">+2347047474886</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://web.facebook.com/FrancisUzoigwe.28" className="text-sm">Facebook</a>
                            <a href="https://twitter.com/francisuzoigwe1" className="text-sm">Twitter</a>
                            <a href="https://www.instagram.com/francisuzoigwe.28/" className="text-sm">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
                    <p className="text-sm">© 2024 {""} <span className='font-[Buda]'>Techify</span>. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-[10px]">Privacy Policy</a>
                        <a href="#" className="text-[10px]">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
