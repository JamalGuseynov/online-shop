import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
    try {
        // Отправляем запрос на регистрацию
        const response = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });

        // Логируем ответ для диагностики
        console.log("Registration response:", response);

        // Проверяем наличие данных в ответе
        if (!response || !response.data) {
            throw new Error("Ошибка регистрации: данные отсутствуют в ответе сервера.");
        }

        // Сохраняем токен и декодируем его
        const { data } = response;
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await $host.post('api/user/login', { email, password });

        console.log("Login response:", response);

        if (!response || !response.data) {
            throw new Error("Ошибка входа: данные отсутствуют в ответе сервера.");
        }

        const { data } = response;
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const check = async () => {
    try {
        const response = await $authHost.get('api/user/auth');

        console.log("Check auth response:", response);

        if (!response || !response.data) {
            throw new Error("Ошибка проверки авторизации: данные отсутствуют в ответе сервера.");
        }

        const { data } = response;
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.error("Check auth error:", error);
        throw error;
    }
};
