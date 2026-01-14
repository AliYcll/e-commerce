import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import md5 from 'md5';
import { LogOut, User as UserIcon, ChevronDown } from 'lucide-react';
import { logoutUser } from '../../store/actions/clientActions';

const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.client.user);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        dispatch(logoutUser());
        setIsOpen(false);
        history.push('/');
    };

    if (!user.name) return null;

    const gravatarUrl = `https://www.gravatar.com/avatar/${md5(user.email)}`;

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-[#23A6F0] hover:text-[#1a8cd8] transition-colors focus:outline-none"
            >
                <img
                    src={gravatarUrl}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border border-gray-200"
                />
                <span className="font-bold text-sm hidden sm:block">{user.name}</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 transform opacity-100 scale-100 transition-all">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-bold text-[#252B42] truncate">{user.name}</p>
                        <p className="text-xs text-[#737373] truncate">{user.email}</p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] flex items-center gap-2 transition-colors"
                            onClick={() => { setIsOpen(false); history.push('/my-orders'); }}
                        >
                            <svg
                                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                            Previous Orders
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] flex items-center gap-2 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <UserIcon size={16} />
                            Profile
                        </button>
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2 transition-colors mt-1"
                        >
                            <LogOut size={16} />
                            Log Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
