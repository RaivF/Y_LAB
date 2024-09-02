import { useState } from 'react'
import { checkUser } from '../../store/sessionSlice/api'
import style from './style/login.module.css'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const [emailError, setEmailError] = useState('')

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return re.test(email)
	}

	const handleLogin = async () => {
		if (!validateEmail(email)) {
			setEmailError('Введите корректный email!')
			return
		} else {
			setEmailError('')
		}

		const response = await checkUser(email, password)

		if (response.token) {
			setMessage('Вы успешно вошли!')
		} else {
			setMessage('Ошибка! неверный логин или пароль')
		}
	}

	return (
		<div className={style.mainContainer}>
			<div className={style.containerForm}>
				<h2>Авторизация</h2>
				<form>
					<div className={style.inputArea}>
						<label>Электронная почта / login</label>
						<input
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
						{emailError && <p className={style.message}>{emailError}</p>}
					</div>
					<div className={style.inputArea}>
						<label>Пароль</label>
						<input
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
					</div>
				</form>
				<button onClick={handleLogin} className={style.registerButton}>
					Войти
				</button>

				{message && <p className={style.message}>{message}</p>}
			</div>
			<div>
				{<p className={style.message}>{'Login : LoginForY_lAB@fkmv.ru'}</p>}
				{<p className={style.message}>{'Pass : 123'}</p>}
			</div>
		</div>
	)
}

export default Login
