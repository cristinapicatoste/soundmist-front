import { deleteToken, getToken, setJWT } from '../utils/localStorage.utils';

const useLogin = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const t = getToken();
        setToken(t);
    }, []);

    const logout = () => {
        deleteToken();
    };

    const login = (token) => {
        setToken(token);
        setJWT(token);
    };

    return { token, login, logout };
};
